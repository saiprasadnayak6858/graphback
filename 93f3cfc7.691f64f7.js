(window.webpackJsonp=window.webpackJsonp||[]).push([[710],{1314:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),p=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},u=function(e){var t=p(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,i=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),u=p(n),s=r,d=u["".concat(i,".").concat(s)]||u[s]||m[s]||c;return n?a.a.createElement(d,b(b({ref:t},l),{},{components:n})):a.a.createElement(d,b({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,i=new Array(c);i[0]=s;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:r,i[1]=b;for(var l=2;l<c;l++)i[l]=n[l];return a.a.createElement.apply(null,i)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},765:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),c=(n(0),n(1314)),i={id:"_runtime_",title:"runtime",sidebar_label:"runtime"},b={unversionedId:"api/graphql-serve/modules/_runtime_",id:"version-0.15.x/api/graphql-serve/modules/_runtime_",isDocsHomePage:!1,title:"runtime",description:"Index",source:"@site/versioned_docs/version-0.15.x/api/graphql-serve/modules/_runtime_.md",slug:"/api/graphql-serve/modules/_runtime_",permalink:"/docs/0.15.x/api/graphql-serve/modules/_runtime_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphql-serve/modules/_runtime_.md",version:"0.15.x",sidebar_label:"runtime"},o=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"<code>Const</code> createMongoDBClient",id:"const-createmongodbclient",children:[]},{value:"<code>Const</code> createRuntime",id:"const-createruntime",children:[]}]}],l={rightToc:o};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"interfaces"},"Interfaces"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphql-serve/interfaces/_runtime_.runtime"}),"Runtime"))),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphql-serve/modules/_runtime_#const-createmongodbclient"}),"createMongoDBClient")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphql-serve/modules/_runtime_#const-createruntime"}),"createRuntime"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"const-createmongodbclient"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," createMongoDBClient"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createMongoDBClient"),"(): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039MongoClient\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphql-serve/src/runtime.ts#L20"}),"runtime.ts:20"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039MongoClient\u203a")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"const-createruntime"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," createRuntime"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createRuntime"),"(",Object(c.b)("inlineCode",{parentName:"p"},"modelDir"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"db"),": Db, ",Object(c.b)("inlineCode",{parentName:"p"},"datasync"),": boolean): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039GraphbackAPI\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphql-serve/src/runtime.ts#L32"}),"runtime.ts:32"))),Object(c.b)("p",null,"Method used to create runtime schema\nIt will be part of the integration tests"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"modelDir")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"db")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Db")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"datasync")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"boolean")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039GraphbackAPI\u203a")))}p.isMDXComponent=!0}}]);