(window.webpackJsonp=window.webpackJsonp||[]).push([[275],{1314:function(e,t,r){"use strict";r.d(t,"a",(function(){return d})),r.d(t,"b",(function(){return h}));var n=r(0),a=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=a.a.createContext({}),l=function(e){var t=a.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},d=function(e){var t=l(e.components);return a.a.createElement(p.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},u=a.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),d=l(r),u=n,h=d["".concat(c,".").concat(u)]||d[u]||b[u]||o;return r?a.a.createElement(h,s(s({ref:t},p),{},{components:r})):a.a.createElement(h,s({ref:t},p))}));function h(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,c=new Array(o);c[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:n,c[1]=s;for(var p=2;p<o;p++)c[p]=r[p];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,r)}u.displayName="MDXCreateElement"},330:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return s})),r.d(t,"rightToc",(function(){return i})),r.d(t,"default",(function(){return l}));var n=r(2),a=r(6),o=(r(0),r(1314)),c={id:"add-to-project",title:"Adding Graphback to your project",sidebar_label:"Add to project"},s={unversionedId:"getting-started/add-to-project",id:"version-0.15.x/getting-started/add-to-project",isDocsHomePage:!1,title:"Adding Graphback to your project",description:"Graphback can easily be added to your existing Apollo GraphQL Node.js application.",source:"@site/versioned_docs/version-0.15.x/getting-started/adding-graphback-to-your-project.md",slug:"/getting-started/add-to-project",permalink:"/docs/0.15.x/getting-started/add-to-project",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/getting-started/adding-graphback-to-your-project.md",version:"0.15.x",sidebar_label:"Add to project",sidebar:"version-0.15.x/docs",previous:{title:"Creating a new application",permalink:"/docs/0.15.x/getting-started/create-new-app"},next:{title:"Data Model",permalink:"/docs/0.15.x/model/datamodel"}},i=[{value:"Configure your database",id:"configure-your-database",children:[]},{value:"Configure your schema",id:"configure-your-schema",children:[]},{value:"Configure Graphback",id:"configure-graphback",children:[]},{value:"Finish setup",id:"finish-setup",children:[]}],p={rightToc:i};function l(e){var t=e.components,r=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Graphback can easily be added to your existing Apollo GraphQL Node.js application."),Object(o.b)("p",null,"Let's take a look at a very simple, minimal Apollo GraphQL server setup."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import express from 'express';\nimport { ApolloServer } from 'apollo-server-express';\n \nconst app = express();\n \nconst schema = `\ntype Note {\n  id: ID!\n  text: String!\n  archived: Boolean!\n}\n\ntype Query {\n  getAllNotes(): [Note]!\n}\n`\n\nconst noteResolvers = {\n  Query: {\n    getAllNotes: (parent, args, context) => {\n      return context.db.getAllNotes();\n    }\n  }\n}\n \nconst server = new ApolloServer({\n  typeDefs: schema,\n  resolvers: noteResolvers\n});\n \nserver.applyMiddleware({ app });\n \napp.listen({ port: 4000 }, () => {\n  console.log('Apollo Server on http://localhost:4000/graphql');\n});\n")),Object(o.b)("p",null,"In just a few short steps, Graphback can be added to this project."),Object(o.b)("h3",{id:"configure-your-database"},"Configure your database"),Object(o.b)("p",null,"For this example we are going to assume that the project uses a PostgreSQL database."),Object(o.b)("p",null,"To use PostgreSQL with Graphback install ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"https://knexjs.org/"}),"Knex.js")," with the Graphback PostgreSQL library:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install knex @graphback/runtime-knex\n")),Object(o.b)("p",null,"Once installed, initialize a Knex client using your database credentials, and create a Knex database provider creator for Graphback:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import Knex from 'knex';\nimport { createKnexDbProvider } from '@graphback/runtime-knex';\n\nconst knex = Knex({\n  client: 'pg',\n  connection: {\n    host: '127.0.0.1',\n    user: 'your_db_user',\n    password: 'your_db_password',\n    database: 'your_app_db'\n  }\n})\n\nconst knexProviderCreator = createKnexDbProvider(knex);\n")),Object(o.b)("p",null,"For more on database support in Graphback, see ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../databases/overview"}),"Databases"),"."),Object(o.b)("h3",{id:"configure-your-schema"},"Configure your schema"),Object(o.b)("p",null,"Graphback will only process GraphQL types which are annotated with ",Object(o.b)("inlineCode",{parentName:"p"},"@model"),". This opt-in model enables you to combine Graphback enabled types and resolvers with your existing types that do not require bootstrapping."),Object(o.b)("p",null,"In this scenario, we want ",Object(o.b)("inlineCode",{parentName:"p"},"Note")," to be processed by Graphback."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-diff"}),'+"""\n+@model\n+"""\ntype Note {\n  id: ID!\n  text: String!\n  archived: Boolean!\n}\n')),Object(o.b)("p",null,"For more advanced usage on how to configure your data models, see our ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"../model/datamodel"}),"Model")," guides."),Object(o.b)("h3",{id:"configure-graphback"},"Configure Graphback"),Object(o.b)("p",null,"Let's install Graphback and use it in the project."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-bash"}),"npm install graphback\n")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"buildGraphbackAPI")," will process your schema and generate a CRUD API with schema, resolvers, services and data sources."),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import { buildGraphbackAPI } from 'graphback';\n\nconst { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(schema, {\n  dataProviderCreator: knexDbProviderCreator\n});\n")),Object(o.b)("p",null,"Check out the ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/0.15.x/api/graphback/modules/_buildgraphbackapi_"}),"buildGraphbackAPI")," for more advanced use cases like CRUD configuration and plugin extensions."),Object(o.b)("h3",{id:"finish-setup"},"Finish setup"),Object(o.b)("p",null,"Now that you have added all the Graphback code, let's bring it together and add Graphback to your Apollo GraphQL server:"),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{className:"language-ts"}),"import express from 'express';\nimport http from \"http\";\nimport { ApolloServer } from 'apollo-server-express';\n// highlight-start\nimport { buildGraphbackAPI } from 'graphback'\nimport { createKnexDbProvider } from '@graphback/runtime-knex'\n// highlight-end\n\nconst app = express();\n \nconst schema = `\n// highlight-start\n\"\"\"\n@model\n\"\"\"\n// highlight-end\ntype Note {\n  id: ID!\n  text: String!\n  archived: Boolean!\n}\n\ntype Query {\n  getAllNotes(): [Note]!\n}\n`\n\n// highlight-start\n// create a Knex client\nconst knex = Knex({\n  client: 'pg',\n  connection: {\n    host: '127.0.0.1',\n    user: 'your_db_user',\n    password: 'your_db_password',\n    database: 'your_app_db'\n  }\n});\n// highlight-end\n\n// highlight-start\n// create a Knex database provider creator\nconst knexDbProviderCreator = createKnexDbProvider(knex);\n// highlight-end\n\n// highlight-start\n// creates a schema, CRUD resolvers, services and data providers\nconst { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(schema, {\n  dataProviderCreator: knexDbProviderCreator\n});\n// highlight-end\n\nconst server = new ApolloServer({\n  // highlight-start\n  typeDefs, // your schema as a string\n  resolvers: [resolvers, noteResolvers], // merge Graphback resolvers with your own\n  // highlight-next-line\n  context: contextCreator // creates a context with Graphback services attached\n  // highlight-end\n});\n\nserver.applyMiddleware({ app });\n\nconst httpServer = http.createServer(app)\napolloServer.installSubscriptionHandlers(httpServer)\n \napp.listen({ port: 4000 }, () => {\n  console.log('Apollo Server on http://localhost:4000/graphql');\n});\n")))}l.isMDXComponent=!0}}]);