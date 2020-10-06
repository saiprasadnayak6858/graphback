/*! For license information please see 8d9b6e72.9d3b5782.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[691],{1314:function(e,t,a){"use strict";a.d(t,"a",(function(){return u})),a.d(t,"b",(function(){return d}));var r=a(0),n=a.n(r);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function b(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},c=Object.keys(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)a=c[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=n.a.createContext({}),s=function(e){var t=n.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):b(b({},t),e)),a},u=function(e){var t=s(e.components);return n.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=s(a),f=r,d=u["".concat(o,".").concat(f)]||u[f]||p[f]||c;return a?n.a.createElement(d,b(b({ref:t},l),{},{components:a})):n.a.createElement(d,b({ref:t},l))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=a.length,o=new Array(c);o[0]=f;var b={};for(var i in t)hasOwnProperty.call(t,i)&&(b[i]=t[i]);b.originalType=e,b.mdxType="string"==typeof e?e:r,o[1]=b;for(var l=2;l<c;l++)o[l]=a[l];return n.a.createElement.apply(null,o)}return n.a.createElement.apply(null,a)}f.displayName="MDXCreateElement"},1315:function(e,t,a){"use strict";e.exports=a(1316)},1316:function(e,t,a){"use strict";var r=a(1317),n="function"==typeof Symbol&&Symbol.for,c=n?Symbol.for("react.element"):60103,o=n?Symbol.for("react.portal"):60106,b=n?Symbol.for("react.fragment"):60107,i=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,p=n?Symbol.for("react.forward_ref"):60112,f=n?Symbol.for("react.suspense"):60113,d=n?Symbol.for("react.memo"):60115,m=n?Symbol.for("react.lazy"):60116,O="function"==typeof Symbol&&Symbol.iterator;function j(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function h(e,t,a){this.props=e,this.context=t,this.refs=y,this.updater=a||g}function v(){}function N(e,t,a){this.props=e,this.context=t,this.refs=y,this.updater=a||g}h.prototype.isReactComponent={},h.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(j(85));this.updater.enqueueSetState(this,e,t,"setState")},h.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=h.prototype;var _=N.prototype=new v;_.constructor=N,r(_,h.prototype),_.isPureReactComponent=!0;var w={current:null},S=Object.prototype.hasOwnProperty,x={key:!0,ref:!0,__self:!0,__source:!0};function k(e,t,a){var r,n={},o=null,b=null;if(null!=t)for(r in void 0!==t.ref&&(b=t.ref),void 0!==t.key&&(o=""+t.key),t)S.call(t,r)&&!x.hasOwnProperty(r)&&(n[r]=t[r]);var i=arguments.length-2;if(1===i)n.children=a;else if(1<i){for(var l=Array(i),s=0;s<i;s++)l[s]=arguments[s+2];n.children=l}if(e&&e.defaultProps)for(r in i=e.defaultProps)void 0===n[r]&&(n[r]=i[r]);return{$$typeof:c,type:e,key:o,ref:b,props:n,_owner:w.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var D=/\/+/g,P=[];function E(e,t,a,r){if(P.length){var n=P.pop();return n.result=e,n.keyPrefix=t,n.func=a,n.context=r,n.count=0,n}return{result:e,keyPrefix:t,func:a,context:r,count:0}}function A(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function T(e,t,a,r){var n=typeof e;"undefined"!==n&&"boolean"!==n||(e=null);var b=!1;if(null===e)b=!0;else switch(n){case"string":case"number":b=!0;break;case"object":switch(e.$$typeof){case c:case o:b=!0}}if(b)return a(r,e,""===t?"."+$(e,0):t),1;if(b=0,t=""===t?".":t+":",Array.isArray(e))for(var i=0;i<e.length;i++){var l=t+$(n=e[i],i);b+=T(n,l,a,r)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=O&&e[O]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),i=0;!(n=e.next()).done;)b+=T(n=n.value,l=t+$(n,i++),a,r);else if("object"===n)throw a=""+e,Error(j(31,"[object Object]"===a?"object with keys {"+Object.keys(e).join(", ")+"}":a,""));return b}function q(e,t,a){return null==e?0:T(e,"",t,a)}function $(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function R(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,a){var r=e.result,n=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?M(e,r,a,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,n+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(D,"$&/")+"/")+a)),r.push(e))}function M(e,t,a,r,n){var c="";null!=a&&(c=(""+a).replace(D,"$&/")+"/"),q(e,L,t=E(t,c,r,n)),A(t)}var I={current:null};function F(){var e=I.current;if(null===e)throw Error(j(321));return e}var G={ReactCurrentDispatcher:I,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,a){if(null==e)return e;var r=[];return M(e,r,null,t,a),r},forEach:function(e,t,a){if(null==e)return e;q(e,R,t=E(null,null,t,a)),A(t)},count:function(e){return q(e,(function(){return null}),null)},toArray:function(e){var t=[];return M(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(j(143));return e}},t.Component=h,t.Fragment=b,t.Profiler=l,t.PureComponent=N,t.StrictMode=i,t.Suspense=f,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=G,t.cloneElement=function(e,t,a){if(null==e)throw Error(j(267,e));var n=r({},e.props),o=e.key,b=e.ref,i=e._owner;if(null!=t){if(void 0!==t.ref&&(b=t.ref,i=w.current),void 0!==t.key&&(o=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)S.call(t,s)&&!x.hasOwnProperty(s)&&(n[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)n.children=a;else if(1<s){l=Array(s);for(var u=0;u<s;u++)l[u]=arguments[u+2];n.children=l}return{$$typeof:c,type:e.type,key:o,ref:b,props:n,_owner:i}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:u,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=k,t.createFactory=function(e){var t=k.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:p,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return F().useCallback(e,t)},t.useContext=function(e,t){return F().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return F().useEffect(e,t)},t.useImperativeHandle=function(e,t,a){return F().useImperativeHandle(e,t,a)},t.useLayoutEffect=function(e,t){return F().useLayoutEffect(e,t)},t.useMemo=function(e,t){return F().useMemo(e,t)},t.useReducer=function(e,t,a){return F().useReducer(e,t,a)},t.useRef=function(e){return F().useRef(e)},t.useState=function(e){return F().useState(e)},t.version="16.13.1"},1317:function(e,t,a){"use strict";var r=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function o(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(n){return!1}}()?Object.assign:function(e,t){for(var a,b,i=o(e),l=1;l<arguments.length;l++){for(var s in a=Object(arguments[l]))n.call(a,s)&&(i[s]=a[s]);if(r){b=r(a);for(var u=0;u<b.length;u++)c.call(a,b[u])&&(i[b[u]]=a[b[u]])}}return i}},746:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),c=(a(1315),a(1314)),o={id:"_abstract_generateabstractdatabase_",title:"abstract/generateAbstractDatabase",sidebar_label:"abstract/generateAbstractDatabase"},b={unversionedId:"api/graphql-migrations/modules/_abstract_generateabstractdatabase_",id:"api/graphql-migrations/modules/_abstract_generateabstractdatabase_",isDocsHomePage:!1,title:"abstract/generateAbstractDatabase",description:"Index",source:"@site/../docs/api/graphql-migrations/modules/_abstract_generateabstractdatabase_.md",slug:"/api/graphql-migrations/modules/_abstract_generateabstractdatabase_",permalink:"/docs/next/api/graphql-migrations/modules/_abstract_generateabstractdatabase_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphql-migrations/modules/_abstract_generateabstractdatabase_.md",version:"current",sidebar_label:"abstract/generateAbstractDatabase"},i=[{value:"Index",id:"index",children:[{value:"Interfaces",id:"interfaces",children:[]},{value:"Type aliases",id:"type-aliases",children:[]},{value:"Functions",id:"functions",children:[]},{value:"Object literals",id:"object-literals",children:[]}]},{value:"Type aliases",id:"type-aliases-1",children:[{value:"ScalarMap",id:"scalarmap",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"generateAbstractDatabase",id:"generateabstractdatabase",children:[]}]},{value:"Object literals",id:"object-literals-1",children:[{value:"<code>Const</code> defaultOptions",id:"const-defaultoptions",children:[]},{value:"\u25aa <strong>defaultOptions</strong>: <em>object</em>",id:"-defaultoptions-object",children:[]},{value:"scalarMap",id:"scalarmap-1",children:[]}]}],l={rightToc:i};function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"interfaces"},"Interfaces"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_generateabstractdatabase_.generateabstractdatabaseoptions"}),"GenerateAbstractDatabaseOptions"))),Object(c.b)("h3",{id:"type-aliases"},"Type aliases"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/modules/_abstract_generateabstractdatabase_#scalarmap"}),"ScalarMap"))),Object(c.b)("h3",{id:"functions"},"Functions"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/modules/_abstract_generateabstractdatabase_#generateabstractdatabase"}),"generateAbstractDatabase"))),Object(c.b)("h3",{id:"object-literals"},"Object literals"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphql-migrations/modules/_abstract_generateabstractdatabase_#const-defaultoptions"}),"defaultOptions"))),Object(c.b)("h2",{id:"type-aliases-1"},"Type aliases"),Object(c.b)("h3",{id:"scalarmap"},"ScalarMap"),Object(c.b)("p",null,"\u01ac ",Object(c.b)("strong",{parentName:"p"},"ScalarMap"),": ",Object(c.b)("em",{parentName:"p"},"function")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphql-migrations/src/abstract/generateAbstractDatabase.ts#L68"}),"abstract/generateAbstractDatabase.ts:68"))),Object(c.b)("h4",{id:"type-declaration"},"Type declaration:"),Object(c.b)("p",null,"\u25b8 (",Object(c.b)("inlineCode",{parentName:"p"},"field"),": GraphQLField\u2039any, any\u203a, ",Object(c.b)("inlineCode",{parentName:"p"},"scalarType"),": GraphQLScalarType | undefined, ",Object(c.b)("inlineCode",{parentName:"p"},"annotations"),": any): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_getcolumntypefromscalar_.tablecolumntypedescriptor"}),"TableColumnTypeDescriptor")," | undefined")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"field")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLField\u2039any, any\u203a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"scalarType")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLScalarType ","|"," undefined")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"annotations")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"any")))),Object(c.b)("h2",{id:"functions-1"},"Functions"),Object(c.b)("h3",{id:"generateabstractdatabase"},"generateAbstractDatabase"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"generateAbstractDatabase"),"(",Object(c.b)("inlineCode",{parentName:"p"},"schema"),": GraphQLSchema, ",Object(c.b)("inlineCode",{parentName:"p"},"options"),": ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_generateabstractdatabase_.generateabstractdatabaseoptions"}),"GenerateAbstractDatabaseOptions"),"): ",Object(c.b)("em",{parentName:"p"},"Promise\u2039",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_abstractdatabase_.abstractdatabase"}),"AbstractDatabase"),"\u203a")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphql-migrations/src/abstract/generateAbstractDatabase.ts#L84"}),"abstract/generateAbstractDatabase.ts:84"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Default"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schema")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"GraphQLSchema"),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"-")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"options")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(r.a)({parentName:"td"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_generateabstractdatabase_.generateabstractdatabaseoptions"}),"GenerateAbstractDatabaseOptions")),Object(c.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"defaultOptions")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"Promise\u2039",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphql-migrations/interfaces/_abstract_abstractdatabase_.abstractdatabase"}),"AbstractDatabase"),"\u203a")),Object(c.b)("h2",{id:"object-literals-1"},"Object literals"),Object(c.b)("h3",{id:"const-defaultoptions"},Object(c.b)("inlineCode",{parentName:"h3"},"Const")," defaultOptions"),Object(c.b)("h3",{id:"-defaultoptions-object"},"\u25aa ",Object(c.b)("strong",{parentName:"h3"},"defaultOptions"),": ",Object(c.b)("em",{parentName:"h3"},"object")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphql-migrations/src/abstract/generateAbstractDatabase.ts#L80"}),"abstract/generateAbstractDatabase.ts:80"))),Object(c.b)("h3",{id:"scalarmap-1"},"scalarMap"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"scalarMap"),": ",Object(c.b)("em",{parentName:"p"},"undefined")," = undefined"),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphql-migrations/src/abstract/generateAbstractDatabase.ts#L81"}),"abstract/generateAbstractDatabase.ts:81"))))}s.isMDXComponent=!0}}]);