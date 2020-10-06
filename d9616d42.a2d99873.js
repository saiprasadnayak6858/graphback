(window.webpackJsonp=window.webpackJsonp||[]).push([[1075],{1131:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return o})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return s}));var a=r(2),n=r(6),c=(r(0),r(1314)),o={id:"index",title:"graphback",sidebar_label:"README"},i={unversionedId:"api/graphback/index",id:"version-1.0/api/graphback/index",isDocsHomePage:!1,title:"graphback",description:"Graphback",source:"@site/versioned_docs/version-1.0/api/graphback/index.md",slug:"/api/graphback/index",permalink:"/docs/api/graphback/index",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/api/graphback/index.md",version:"1.0",sidebar_label:"README"},p=[{value:"Graphback",id:"graphback",children:[]},{value:"Motivation",id:"motivation",children:[]},{value:"Usage",id:"usage",children:[]}],b={rightToc:p};function s(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},b,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"graphback"},"Graphback"),Object(c.b)("p",{align:"center"},Object(c.b)("img",{width:"400",src:"https://raw.githubusercontent.com/aerogear/graphback/master/website/static/img/logo.png"}),Object(c.b)("br",null),"Auto generate database structure, ",Object(c.b)("br",null),"GraphQL Resolvers and Queries from GraphQL types \ud83d\ude80"),Object(c.b)("h2",{id:"motivation"},"Motivation"),Object(c.b)("p",null,"Graphback helps you to kickstart your experience with any existing GraphQL implementation\nby generating backend and client side CRUD layer using your GraphQL data model."),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Documentation"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphback.dev"}),"https://graphback.dev")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Repository"),": ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/aerogear/graphback/"}),"https://github.com/aerogear/graphback/")),Object(c.b)("h2",{id:"usage"},"Usage"),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"graphback")," provides a programmatic API for the Graphback ecosystem.\nIn most of the cases you can use graphback by utilizing graphback-cli package that will expose all useful commands and cover most of the use cases."),Object(c.b)("p",null,"Install with npm:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install graphback\n")),Object(c.b)("p",null,"Install with yarn:"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),"npm install graphback\n")),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"buildGraphbackAPI")," will process your schema and generate a CRUD API with schema, resolvers, services and data sources."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-ts"}),"import { buildGraphbackAPI } from 'graphback';\nimport { createKnexDbProvider } from '@graphback/runtime-knex';\nimport Knex from 'knex';\n\nconst db = Knex({...});\n\nconst { typeDefs, resolvers, contextCreator } = buildGraphbackAPI(schema, {\n  dataProviderCreator: createKnexDbProvider(db)\n});\n")),Object(c.b)("p",null,"Up-to-date usage and configuration information is covered in depth over on our website ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"https://graphback.dev/docs/getting-started/add-to-project"}),"graphhback.dev"),"."))}s.isMDXComponent=!0},1314:function(e,t,r){"use strict";r.d(t,"a",(function(){return l})),r.d(t,"b",(function(){return h}));var a=r(0),n=r.n(a);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},c=Object.keys(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)r=c[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var b=n.a.createContext({}),s=function(e){var t=n.a.useContext(b),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=s(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},d=n.a.forwardRef((function(e,t){var r=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,b=p(e,["components","mdxType","originalType","parentName"]),l=s(r),d=a,h=l["".concat(o,".").concat(d)]||l[d]||u[d]||c;return r?n.a.createElement(h,i(i({ref:t},b),{},{components:r})):n.a.createElement(h,i({ref:t},b))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=r.length,o=new Array(c);o[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var b=2;b<c;b++)o[b]=r[b];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);