(window.webpackJsonp=window.webpackJsonp||[]).push([[1179],{1235:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return l})),t.d(n,"metadata",(function(){return o})),t.d(n,"rightToc",(function(){return b})),t.d(n,"default",(function(){return p}));var a=t(2),i=t(6),r=(t(0),t(1314)),l={id:"index",title:"graphql-migrations",sidebar_label:"README"},o={unversionedId:"api/graphql-migrations/index",id:"version-0.16.x/api/graphql-migrations/index",isDocsHomePage:!1,title:"graphql-migrations",description:"Graphback",source:"@site/versioned_docs/version-0.16.x/api/graphql-migrations/index.md",slug:"/api/graphql-migrations/index",permalink:"/docs/0.16.x/api/graphql-migrations/index",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.16.x/api/graphql-migrations/index.md",version:"0.16.x",sidebar_label:"README"},b=[{value:"Graphback",id:"graphback",children:[]},{value:"graphql-migrations",id:"graphql-migrations",children:[{value:"Usage",id:"usage",children:[]},{value:"Migration Options",id:"migration-options",children:[]},{value:"Model Definition",id:"model-definition",children:[]},{value:"Skip table or field",id:"skip-table-or-field",children:[]},{value:"Rename",id:"rename",children:[]},{value:"Nullable and non-nullable field",id:"nullable-and-non-nullable-field",children:[]},{value:"Default value",id:"default-value",children:[]},{value:"Primary key",id:"primary-key",children:[]},{value:"Foreign key",id:"foreign-key",children:[]},{value:"Many-to-many",id:"many-to-many",children:[]},{value:"Many-to-many on same type",id:"many-to-many-on-same-type",children:[]},{value:"Simple index",id:"simple-index",children:[]},{value:"Multiple index",id:"multiple-index",children:[]},{value:"Named index",id:"named-index",children:[]},{value:"Unique constraint",id:"unique-constraint",children:[]},{value:"Custom name",id:"custom-name",children:[]},{value:"Custom column type",id:"custom-column-type",children:[]},{value:"List",id:"list",children:[]}]}],c={rightToc:b};function p(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"graphback"},"Graphback"),Object(r.b)("p",{align:"center"},Object(r.b)("img",{width:"400",src:"https://raw.githubusercontent.com/aerogear/graphback/master/website/static/img/logo.png"}),Object(r.b)("br",null),"Auto generate database structure, ",Object(r.b)("br",null),"GraphQL Resolvers and Queries from GraphQL types \ud83d\ude80"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Documentation"),": ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphback.dev"}),"https://graphback.dev"),"\n",Object(r.b)("strong",{parentName:"p"},"Repository"),": ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/"}),"https://github.com/aerogear/graphback/")),Object(r.b)("h2",{id:"graphql-migrations"},"graphql-migrations"),Object(r.b)("p",null,"Automatically create and update your database tables from a GraphQL schema."),Object(r.b)("h3",{id:"usage"},"Usage"),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"migrateDB")," method creates and updates your tables and columns to match your GraphQL schema."),Object(r.b)("p",null,"All the database operations are wrapped in a single transaction, so your database will be fully rolled back to its initial state if an error occurs."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { migrateDB } from 'graphql-migrations';\n\nconst dbConfig = {\n  client: 'pg',\n  connection: {\n    host: 'localhost',\n    user: 'your-user',\n    password: 'secret-password',\n    database: 'note-db',\n  },\n};\n\nconst schema = `\ntype Note {\n  id: ID!\n  title: String!\n  description: String\n  comments: [Comment]!\n}\n\ntype Comment {\n  id: ID!\n  description: String\n  note: Note!\n}\n`;\n\nmigrateDB(dbConfig, schema, {\n  // Additional options\n}).then(() => {\n  console.log('Database updated');\n});\n")),Object(r.b)("h3",{id:"migration-options"},"Migration Options"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"config"),": database configuration options."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"schema"),": a GraphQL schema object."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"options"),":",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dbSchemaName")," (default: ",Object(r.b)("inlineCode",{parentName:"li"},"'public'"),"): table schema: ",Object(r.b)("inlineCode",{parentName:"li"},"<schemaName>.<tableName>"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dbTablePrefix")," (default: ''): table name prefix: ",Object(r.b)("inlineCode",{parentName:"li"},"<prefix><tableName>"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"dbColumnPrefix")," (default: ",Object(r.b)("inlineCode",{parentName:"li"},"''"),"): column name prefix: ",Object(r.b)("inlineCode",{parentName:"li"},"<prefix><columnName>"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"updateComments"),": overwrite comments on table and columns."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"scalarMap")," (default: ",Object(r.b)("inlineCode",{parentName:"li"},"null"),"): Custom scalar mapping.."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"mapListToJson")," (default: ",Object(r.b)("inlineCode",{parentName:"li"},"true"),"): Map scalar lists to JSON column type by default."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"plugins")," (default: ",Object(r.b)("inlineCode",{parentName:"li"},"[]"),"): List of graphql-migrations plugins."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"debug")," (default: ",Object(r.b)("inlineCode",{parentName:"li"},"false"),"): display debugging information and SQL queries.")))),Object(r.b)("h3",{id:"model-definition"},"Model Definition"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),'"""\nNotes table\n"""\ntype Note {\n  """\n  Primary key\n  """\n  id: ID!\n  """\n  The note title\n  """\n  title: String!\n}\n')),Object(r.b)("h3",{id:"skip-table-or-field"},"Skip table or field"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),'"""\n@db.skip\n"""\ntype Error {\n  code: Int!\n  message: String!\n}\n\ntype Note {\n  id: ID!\n  title: String\n  """\n  @db.skip: true\n  """\n  computedField: Boolean\n}\n')),Object(r.b)("h3",{id:"rename"},"Rename"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),'@db.oldNames: [\'task\']\ntype Note {\n  id: ID!\n  """\n  @db.oldNames: [\'text\']\n  """\n  title: String!\n}\n')),Object(r.b)("h3",{id:"nullable-and-non-nullable-field"},"Nullable and non-nullable field"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),"type Note {\n  id: ID!\n  title: String! # not null\n}\n")),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),"type Note {\n  id: ID!\n  title: String # nullable\n}\n")),Object(r.b)("h3",{id:"default-value"},"Default value"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),'type Note {\n  id: ID!\n  """\n  default(value: \'Note title\')\n  """\n  title: String\n}\n')),Object(r.b)("h3",{id:"primary-key"},"Primary key"),Object(r.b)("p",null,"Each type must have a primary key. The primary key field must be ",Object(r.b)("inlineCode",{parentName:"p"},"id")," and the type must be ",Object(r.b)("inlineCode",{parentName:"p"},"ID"),"."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),"type Note {\n  id: ID!\n  title: String!\n}\n")),Object(r.b)("h3",{id:"foreign-key"},"Foreign key"),Object(r.b)("p",null,"To set a foreign key, set a field reference to the related type."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),"type Comment {\n  id: ID!\n  note: Note! # this creates a `noteId` column in the `comment` table.\n}\n\ntype Note {\n  id: ID!\n  title: String!\n}\n")),Object(r.b)("h3",{id:"many-to-many"},"Many-to-many"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),'type User {\n  id: ID!\n  """\n  @db.manyToMany: \'users\'\n  """\n  messages: [Message]\n}\n\ntype Message {\n  id: ID!\n  """\n  @db.manyToMany: \'messages\'\n  """\n  users: [User]\n}\n')),Object(r.b)("h3",{id:"many-to-many-on-same-type"},"Many-to-many on same type"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),"type User {\n  id: ID!\n  friends: [User]\n}\n")),Object(r.b)("h3",{id:"simple-index"},"Simple index"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),'type User {\n  id: ID!\n  """\n  @db.index\n  """\n  email: String!\n}\n')),Object(r.b)("h3",{id:"multiple-index"},"Multiple index"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),'type User {\n  """\n  @db.index\n  """\n  id: String!\n\n  """\n  @db.index\n  """\n  email: String!\n}\n')),Object(r.b)("h3",{id:"named-index"},"Named index"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),'type User {\n  """\n  @db.index: \'myIndex\'\n  """\n  email: String!\n\n  """\n  @db.index: \'myIndex\'\n  """\n  name: String!\n}\n')),Object(r.b)("p",null,"You can specify the index type on PostgreSQL."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),'type User {\n  """\n  @db.index: { name: \'myIndex\', type: \'hash\' }\n  """\n  email: String!\n\n  """\n  You don\'t need to specify the type again.\n  @db.index: \'myIndex\'\n  """\n  name: String!\n}\n')),Object(r.b)("h3",{id:"unique-constraint"},"Unique constraint"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),'type User {\n  id: ID!\n  """\n  @db.unique\n  """\n  email: String!\n}\n')),Object(r.b)("h3",{id:"custom-name"},"Custom name"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),'"""\n@db.name: \'people\'\n"""\ntype Note {\n  id: ID!\n  """\n  @db.name: \'noteTitle\'\n  """\n  title: String!\n}\n')),Object(r.b)("h3",{id:"custom-column-type"},"Custom column type"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),'type Note {\n  id: ID!\n  """\n  @db.type: \'string\'\n  @db.length: 100\n  """\n  title: String!\n}\n')),Object(r.b)("h3",{id:"list"},"List"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-gql"}),'type Note {\n  id: ID!\n  title: String!\n  """\n  @db.types: \'json\'\n  """\n  comments: [String]\n}\n')),Object(r.b)("p",null,"You can also set ",Object(r.b)("inlineCode",{parentName:"p"},"mapListToJson")," to ",Object(r.b)("inlineCode",{parentName:"p"},"true")," in the migrate options to automatically map scalar and enum lists to JSON."))}p.isMDXComponent=!0},1314:function(e,n,t){"use strict";t.d(n,"a",(function(){return d})),t.d(n,"b",(function(){return u}));var a=t(0),i=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function b(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var c=i.a.createContext({}),p=function(e){var n=i.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},d=function(e){var n=p(e.components);return i.a.createElement(c.Provider,{value:n},e.children)},m={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},s=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),d=p(t),s=a,u=d["".concat(l,".").concat(s)]||d[s]||m[s]||r;return t?i.a.createElement(u,o(o({ref:n},c),{},{components:t})):i.a.createElement(u,o({ref:n},c))}));function u(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,l=new Array(r);l[0]=s;var o={};for(var b in n)hasOwnProperty.call(n,b)&&(o[b]=n[b]);o.originalType=e,o.mdxType="string"==typeof e?e:a,l[1]=o;for(var c=2;c<r;c++)l[c]=t[c];return i.a.createElement.apply(null,l)}return i.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);