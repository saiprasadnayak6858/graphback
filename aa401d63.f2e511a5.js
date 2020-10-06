(window.webpackJsonp=window.webpackJsonp||[]).push([[842],{1314:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return s}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),p=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,b=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),d=p(n),u=a,s=d["".concat(b,".").concat(u)]||d[u]||m[u]||c;return n?r.a.createElement(s,i(i({ref:t},l),{},{components:n})):r.a.createElement(s,i({ref:t},l))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,b=new Array(c);b[0]=u;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,b[1]=i;for(var l=2;l<c;l++)b[l]=n[l];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},896:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var a=n(2),r=n(6),c=(n(0),n(1314)),b={id:"_connector_read_",title:"connector/read",sidebar_label:"connector/read"},i={unversionedId:"api/graphql-migrations/modules/_connector_read_",id:"version-0.15.x/api/graphql-migrations/modules/_connector_read_",isDocsHomePage:!1,title:"connector/read",description:"Index",source:"@site/versioned_docs/version-0.15.x/api/graphql-migrations/modules/_connector_read_.md",slug:"/api/graphql-migrations/modules/_connector_read_",permalink:"/docs/0.15.x/api/graphql-migrations/modules/_connector_read_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphql-migrations/modules/_connector_read_.md",version:"0.15.x",sidebar_label:"connector/read"},o=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"read",id:"read",children:[]}]}],l={rightToc:o};function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(a.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphql-migrations/modules/_connector_read_#read"}),"read"))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"read"},"read"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"read"),"(",Object(c.b)("inlineCode",{parentName:"p"},"config"),": Config, ",Object(c.b)("inlineCode",{parentName:"p"},"schemaName"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"tablePrefix"),": string, ",Object(c.b)("inlineCode",{parentName:"p"},"columnPrefix"),": string): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphql-migrations/interfaces/_abstract_abstractdatabase_.abstractdatabase"}),"AbstractDatabase"),"\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/b39280e7/packages/graphql-migrations/src/connector/read.ts#L21"}),"connector/read.ts:21"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Default"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"config")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Config"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"-"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Knex configuration")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schemaName")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'"public"'),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Table and column prefix: ",Object(c.b)("inlineCode",{parentName:"td"},"<schemaName>.<tableName>"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"tablePrefix")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'""'),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Table name prefix: ",Object(c.b)("inlineCode",{parentName:"td"},"<prefix><tableName>"))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"columnPrefix")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"string"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),'""'),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:null}),"Column name prefix: ",Object(c.b)("inlineCode",{parentName:"td"},"<prefix><columnName>"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039",Object(c.b)("a",Object(a.a)({parentName:"em"},{href:"/docs/0.15.x/api/graphql-migrations/interfaces/_abstract_abstractdatabase_.abstractdatabase"}),"AbstractDatabase"),"\u203a")))}p.isMDXComponent=!0}}]);