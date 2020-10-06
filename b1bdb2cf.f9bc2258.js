(window.webpackJsonp=window.webpackJsonp||[]).push([[883],{1314:function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return m}));var r=a(0),b=a.n(r);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,b=function(e,t){if(null==e)return{};var a,r,b={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(b[a]=e[a]);return b}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(b[a]=e[a])}return b}var l=b.a.createContext({}),d=function(e){var t=b.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},o=function(e){var t=d(e.components);return b.a.createElement(l.Provider,{value:t},e.children)},O={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},j=b.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,n=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),o=d(a),j=r,m=o["".concat(c,".").concat(j)]||o[j]||O[j]||n;return a?b.a.createElement(m,p(p({ref:t},l),{},{components:a})):b.a.createElement(m,p({ref:t},l))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var n=a.length,c=new Array(n);c[0]=j;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:r,c[1]=p;for(var l=2;l<n;l++)c[l]=a[l];return b.a.createElement.apply(null,c)}return b.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},937:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return p})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var r=a(2),b=a(6),n=(a(0),a(1314)),c={id:"_runtime_graphbackdataprovider_.graphbackdataprovider",title:"GraphbackDataProvider",sidebar_label:"GraphbackDataProvider"},p={unversionedId:"api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider",id:"version-1.0/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider",isDocsHomePage:!1,title:"GraphbackDataProvider",description:"Graphback layered architecture component that can be called",source:"@site/versioned_docs/version-1.0/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider.md",slug:"/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider",permalink:"/docs/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-1.0/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider.md",version:"1.0",sidebar_label:"GraphbackDataProvider",sidebar:"version-1.0/docs",previous:{title:"GraphbackAPIConfig",permalink:"/docs/api/graphback/interfaces/_buildgraphbackapi_.graphbackapiconfig"},next:{title:"GraphBackPluginEngineOptions",permalink:"/docs/api/graphback-core/interfaces/_plugin_graphbackpluginengine_.graphbackpluginengineoptions"}},i=[{value:"Type parameters",id:"type-parameters",children:[]},{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Methods",id:"methods",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"batchRead",id:"batchread",children:[]},{value:"count",id:"count",children:[]},{value:"create",id:"create",children:[]},{value:"delete",id:"delete",children:[]},{value:"findBy",id:"findby",children:[]},{value:"findOne",id:"findone",children:[]},{value:"update",id:"update",children:[]}]}],l={rightToc:i};function d(e){var t=e.components,a=Object(b.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Graphback layered architecture component that can be called\nfrom the service layer in both RESTFULL and GraphQL middlewares."),Object(n.b)("p",null,"Graphback implements server side procesing using following flow:"),Object(n.b)("p",null,Object(n.b)("inlineCode",{parentName:"p"},"GraphQL Resolvers")," ->  ",Object(n.b)("inlineCode",{parentName:"p"},"GraphbackCRUDService")," ","[1-*]"," -> ",Object(n.b)("inlineCode",{parentName:"p"},"GraphbackDataProvider")),Object(n.b)("p",null,"Data layer can be composable (each provider can reference multiple layers of other providers)."),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},Object(n.b)("inlineCode",{parentName:"strong"},"see"))," GraphbackCRUDService"),Object(n.b)("h2",{id:"type-parameters"},"Type parameters"),Object(n.b)("p",null,"\u25aa ",Object(n.b)("strong",{parentName:"p"},"Type")),Object(n.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"GraphbackDataProvider"))),Object(n.b)("h2",{id:"index"},"Index"),Object(n.b)("h3",{id:"methods"},"Methods"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider#batchread"}),"batchRead")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider#count"}),"count")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider#create"}),"create")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider#delete"}),"delete")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider#findby"}),"findBy")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider#findone"}),"findOne")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/api/graphback-core/interfaces/_runtime_graphbackdataprovider_.graphbackdataprovider#update"}),"update"))),Object(n.b)("h2",{id:"methods-1"},"Methods"),Object(n.b)("h3",{id:"batchread"},"batchRead"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"batchRead"),"(",Object(n.b)("inlineCode",{parentName:"p"},"relationField"),": string, ",Object(n.b)("inlineCode",{parentName:"p"},"ids"),": string[], ",Object(n.b)("inlineCode",{parentName:"p"},"filter"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),", ",Object(n.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L78"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:78"))),Object(n.b)("p",null,"Read multiple items by their id's (used for lazy data loading purposes)"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"relationField")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"name of the field that will be used to match ids")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"ids")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"array of identifiers that needs to be fetched")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter by specific type")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type","[][]","\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"count"},"count"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"count"),"(",Object(n.b)("inlineCode",{parentName:"p"},"filter"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter"),"): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L68"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:68"))),Object(n.b)("p",null,"Implementation for counting number of objects with filtering capabilities"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"filter")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/graphback-core/modules/_runtime_queryfilter_#queryfilter"}),"QueryFilter")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter by specific type")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039number\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"create"},"create"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"create"),"(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": Type, ",Object(n.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L26"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:26"))),Object(n.b)("p",null,"Implementation for object creation"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"input data")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"delete"},"delete"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"delete"),"(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(n.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L44"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:44"))),Object(n.b)("p",null,"Implementation for object deletes"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"data used for checking consistency")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"findby"},"findBy"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"findBy"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args?"),": ",Object(n.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/api/graphback-core/interfaces/_runtime_interfaces_.findbyargs"}),"FindByArgs"),", ",Object(n.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L61"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:61"))),Object(n.b)("p",null,"Implementation for reading objects with filtering capabilities"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/api/graphback-core/interfaces/_runtime_interfaces_.findbyargs"}),"FindByArgs"))),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type[]\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"findone"},"findOne"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"findOne"),"(",Object(n.b)("inlineCode",{parentName:"p"},"args"),": Partial\u2039Type\u203a, ",Object(n.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L52"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:52"))),Object(n.b)("p",null,"Implementation for finding a single unique object"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"args")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"filter by unique attriburtes")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("hr",null),Object(n.b)("h3",{id:"update"},"update"),Object(n.b)("p",null,"\u25b8 ",Object(n.b)("strong",{parentName:"p"},"update"),"(",Object(n.b)("inlineCode",{parentName:"p"},"data"),": Partial\u2039Type\u203a, ",Object(n.b)("inlineCode",{parentName:"p"},"selectedFields?"),": string[]): ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Defined in ",Object(n.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/63664df15/packages/graphback-core/src/runtime/GraphbackDataProvider.ts#L35"}),"packages/graphback-core/src/runtime/GraphbackDataProvider.ts:35"))),Object(n.b)("p",null,"Implementation for object updates"),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Parameters:")),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(n.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Description"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"data")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"Partial\u2039Type\u203a"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"input data")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(n.b)("inlineCode",{parentName:"td"},"selectedFields?")),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"string[]"),Object(n.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")))),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Returns:")," ",Object(n.b)("em",{parentName:"p"},"Promise\u2039Type\u203a")))}d.isMDXComponent=!0}}]);