import { InputModelTypeContext, graphQLInputContext, filterObjectTypes } from '@graphback/core';
import { diff } from '@graphql-inspector/core';
import { buildSchema } from 'graphql';
import { SchemaProvider, DatabaseChangeType, DatabaseChange, DatabaseStrategyOptions } from './database';
import { SchemaMigration } from './models';
import { mapGraphbackChanges } from './utils/graphqlUtils';
import { GraphbackChange, GraphQLSchemaChangeTypes } from './changes/ChangeTypes';
import { GraphQLSchema } from 'graphql';
import { MigrationProvider } from './providers';
import { KnexMigrationManager } from './migrations/KnexMigrationManager';

export class DatabaseManager {
  private schemaProvider: SchemaProvider;
  private knexMigrationManager: KnexMigrationManager;
  private migrationProvider: MigrationProvider;
  private inputContext: InputModelTypeContext[];
  constructor(options: DatabaseStrategyOptions) {
    this.schemaProvider = options.schemaProvider;
    this.migrationProvider = options.migrationProvider;
    const inputContext = graphQLInputContext.createModelContext(this.schemaProvider.getSchemaText(), {});
    this.inputContext = filterObjectTypes(inputContext);
    this.knexMigrationManager = new KnexMigrationManager(options.db);
  }

  public async init() {
    await this.knexMigrationManager.createMetadataTables();
    await this.createMigration();
    await this.applyMigrations();
    // TODO: Validate input
  }

  private async createMigration() {
    const newSchema = buildSchema(this.schemaProvider.getSchemaText());

    const migrations = await this.migrationProvider.getMigrations();

    let oldSchema: GraphQLSchema;
    if (migrations.length) {
      const last = migrations[migrations.length - 1];

      oldSchema = buildSchema(last.model);
    }

    const newMigration: SchemaMigration = {
      id: new Date().getTime().toString(),
      model: this.schemaProvider.getSchemaText()
    };

    let changes: GraphbackChange[] = [];
    if (oldSchema) {
      const inspectorChanges = diff(oldSchema, newSchema);
      changes = mapGraphbackChanges(inspectorChanges);
    } else {
      changes = this.inputContext.map((model: InputModelTypeContext) => {
        return {
          type: GraphQLSchemaChangeTypes.TYPE_ADDED,
          path: {
            type: model.name
          }
        }
      });
    }

    if (!changes.length) {
      return;
    }

    newMigration.sql_up = this.getSqlStatements(changes).map((d: DatabaseChange) => d.sql).join('\n\n');
    newMigration.changes = JSON.stringify(changes);

    await this.migrationProvider.createMigration(newMigration);
  }

  private async applyMigrations() {
    const migrations = await this.migrationProvider.getMigrations();

    const migrationsToApply = migrations.filter((m: SchemaMigration) => m.applied_at === null);

    for (const migration of migrationsToApply) {
      await this.migrationProvider.applyMigration(migration);
    }
  }

  private groupChangesByModel(changes: GraphbackChange[]) {
    return changes.reduce((acc: GraphbackChange, current: GraphbackChange) => {

      if (!acc[current.path.type]) {
        acc[current.path.type] = [];
      }
      acc[current.path.type].push(current);

      return acc;
    }, {} as GraphbackChange);
  }

  private getSqlStatements(changes: GraphbackChange[]): DatabaseChange[] {
    const groupedChanges = this.groupChangesByModel(changes);
    const dirtyModels = this.inputContext.filter((t: InputModelTypeContext) => {
      return !!groupedChanges[t.name];
    });

    return dirtyModels.map((t: InputModelTypeContext) => {
      const modelChanges: GraphbackChange[] = groupedChanges[t.name];

      const typeAdded = modelChanges.find((c: GraphbackChange) => c.type === GraphQLSchemaChangeTypes.TYPE_ADDED);

      if (typeAdded) {
        return {
          type: DatabaseChangeType.createTable,
          sql: this.knexMigrationManager.addTable(t)
        }
      } else {
        return {
          type: DatabaseChangeType.alterTable,
          sql: this.knexMigrationManager.alterTable(t, modelChanges)
        }
      }
    });
  }
}
