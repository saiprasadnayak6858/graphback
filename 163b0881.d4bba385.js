/*! For license information please see 163b0881.d4bba385.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{1314:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return m}));var n=a(0),r=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function b(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?b(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):b(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),i=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},s=function(e){var t=i(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,b=e.parentName,o=p(e,["components","mdxType","originalType","parentName"]),s=i(a),u=n,m=s["".concat(b,".").concat(u)]||s[u]||d[u]||c;return a?r.a.createElement(m,l(l({ref:t},o),{},{components:a})):r.a.createElement(m,l({ref:t},o))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,b=new Array(c);b[0]=u;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:n,b[1]=l;for(var o=2;o<c;o++)b[o]=a[o];return r.a.createElement.apply(null,b)}return r.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},1315:function(e,t,a){"use strict";e.exports=a(1316)},1316:function(e,t,a){"use strict";var n=a(1317),r="function"==typeof Symbol&&Symbol.for,c=r?Symbol.for("react.element"):60103,b=r?Symbol.for("react.portal"):60106,l=r?Symbol.for("react.fragment"):60107,p=r?Symbol.for("react.strict_mode"):60108,o=r?Symbol.for("react.profiler"):60114,i=r?Symbol.for("react.provider"):60109,s=r?Symbol.for("react.context"):60110,d=r?Symbol.for("react.forward_ref"):60112,u=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.memo"):60115,O=r?Symbol.for("react.lazy"):60116,j="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,a=1;a<arguments.length;a++)t+="&args[]="+encodeURIComponent(arguments[a]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var y={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h={};function f(e,t,a){this.props=e,this.context=t,this.refs=h,this.updater=a||y}function N(){}function v(e,t,a){this.props=e,this.context=t,this.refs=h,this.updater=a||y}f.prototype.isReactComponent={},f.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},f.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},N.prototype=f.prototype;var k=v.prototype=new N;k.constructor=v,n(k,f.prototype),k.isPureReactComponent=!0;var P={current:null},S=Object.prototype.hasOwnProperty,C={key:!0,ref:!0,__self:!0,__source:!0};function _(e,t,a){var n,r={},b=null,l=null;if(null!=t)for(n in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(b=""+t.key),t)S.call(t,n)&&!C.hasOwnProperty(n)&&(r[n]=t[n]);var p=arguments.length-2;if(1===p)r.children=a;else if(1<p){for(var o=Array(p),i=0;i<p;i++)o[i]=arguments[i+2];r.children=o}if(e&&e.defaultProps)for(n in p=e.defaultProps)void 0===r[n]&&(r[n]=p[n]);return{$$typeof:c,type:e,key:b,ref:l,props:r,_owner:P.current}}function D(e){return"object"==typeof e&&null!==e&&e.$$typeof===c}var w=/\/+/g,x=[];function R(e,t,a,n){if(x.length){var r=x.pop();return r.result=e,r.keyPrefix=t,r.func=a,r.context=n,r.count=0,r}return{result:e,keyPrefix:t,func:a,context:n,count:0}}function T(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>x.length&&x.push(e)}function E(e,t,a,n){var r=typeof e;"undefined"!==r&&"boolean"!==r||(e=null);var l=!1;if(null===e)l=!0;else switch(r){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case c:case b:l=!0}}if(l)return a(n,e,""===t?"."+I(e,0):t),1;if(l=0,t=""===t?".":t+":",Array.isArray(e))for(var p=0;p<e.length;p++){var o=t+I(r=e[p],p);l+=E(r,o,a,n)}else if(null===e||"object"!=typeof e?o=null:o="function"==typeof(o=j&&e[j]||e["@@iterator"])?o:null,"function"==typeof o)for(e=o.call(e),p=0;!(r=e.next()).done;)l+=E(r=r.value,o=t+I(r,p++),a,n);else if("object"===r)throw a=""+e,Error(g(31,"[object Object]"===a?"object with keys {"+Object.keys(e).join(", ")+"}":a,""));return l}function M(e,t,a){return null==e?0:E(e,"",t,a)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function $(e,t){e.func.call(e.context,t,e.count++)}function L(e,t,a){var n=e.result,r=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,n,a,(function(e){return e})):null!=e&&(D(e)&&(e=function(e,t){return{$$typeof:c,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,r+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(w,"$&/")+"/")+a)),n.push(e))}function F(e,t,a,n,r){var c="";null!=a&&(c=(""+a).replace(w,"$&/")+"/"),M(e,L,t=R(t,c,n,r)),T(t)}var G={current:null};function q(){var e=G.current;if(null===e)throw Error(g(321));return e}var A={ReactCurrentDispatcher:G,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:P,IsSomeRendererActing:{current:!1},assign:n};t.Children={map:function(e,t,a){if(null==e)return e;var n=[];return F(e,n,null,t,a),n},forEach:function(e,t,a){if(null==e)return e;M(e,$,t=R(null,null,t,a)),T(t)},count:function(e){return M(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!D(e))throw Error(g(143));return e}},t.Component=f,t.Fragment=l,t.Profiler=o,t.PureComponent=v,t.StrictMode=p,t.Suspense=u,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=A,t.cloneElement=function(e,t,a){if(null==e)throw Error(g(267,e));var r=n({},e.props),b=e.key,l=e.ref,p=e._owner;if(null!=t){if(void 0!==t.ref&&(l=t.ref,p=P.current),void 0!==t.key&&(b=""+t.key),e.type&&e.type.defaultProps)var o=e.type.defaultProps;for(i in t)S.call(t,i)&&!C.hasOwnProperty(i)&&(r[i]=void 0===t[i]&&void 0!==o?o[i]:t[i])}var i=arguments.length-2;if(1===i)r.children=a;else if(1<i){o=Array(i);for(var s=0;s<i;s++)o[s]=arguments[s+2];r.children=o}return{$$typeof:c,type:e.type,key:b,ref:l,props:r,_owner:p}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:s,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:i,_context:e},e.Consumer=e},t.createElement=_,t.createFactory=function(e){var t=_.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:d,render:e}},t.isValidElement=D,t.lazy=function(e){return{$$typeof:O,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:m,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,a){return q().useImperativeHandle(e,t,a)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,a){return q().useReducer(e,t,a)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},1317:function(e,t,a){"use strict";var n=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable;function b(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},a=0;a<10;a++)t["_"+String.fromCharCode(a)]=a;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(r){return!1}}()?Object.assign:function(e,t){for(var a,l,p=b(e),o=1;o<arguments.length;o++){for(var i in a=Object(arguments[o]))r.call(a,i)&&(p[i]=a[i]);if(n){l=n(a);for(var s=0;s<l.length;s++)c.call(a,l[s])&&(p[l[s]]=a[l[s]])}}return p}},168:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return b})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return p})),a.d(t,"default",(function(){return i}));var n=a(2),r=a(6),c=(a(1315),a(1314)),b={id:"_datasyncplugin_.datasyncplugin",title:"DataSyncPlugin",sidebar_label:"DataSyncPlugin"},l={unversionedId:"api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin",id:"api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin",isDocsHomePage:!1,title:"DataSyncPlugin",description:"DataSync plugin",source:"@site/../docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin.md",slug:"/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin",permalink:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin.md",version:"current",sidebar_label:"DataSyncPlugin",sidebar:"docs",previous:{title:"DataSyncCRUDService",permalink:"/docs/next/api/graphback-datasync/classes/_services_datasynccrudservice_.datasynccrudservice"},next:{title:"ConflictError",permalink:"/docs/next/api/graphback-datasync/classes/_util_.conflicterror"}},p=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Constructors",id:"constructors",children:[]},{value:"Properties",id:"properties",children:[]},{value:"Methods",id:"methods",children:[]}]},{value:"Constructors",id:"constructors-1",children:[{value:"constructor",id:"constructor",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Protected</code> config",id:"protected-config",children:[]}]},{value:"Methods",id:"methods-1",children:[{value:"<code>Protected</code> addDataSyncFieldsToInputTypes",id:"protected-adddatasyncfieldstoinputtypes",children:[]},{value:"<code>Protected</code> addDataSyncFieldsToModel",id:"protected-adddatasyncfieldstomodel",children:[]},{value:"<code>Protected</code> addDeltaQuery",id:"protected-adddeltaquery",children:[]},{value:"<code>Protected</code> addDeltaSyncResolver",id:"protected-adddeltasyncresolver",children:[]},{value:"createResolvers",id:"createresolvers",children:[]},{value:"createResources",id:"createresources",children:[]},{value:"<code>Private</code> getDeltaTypeFieldNames",id:"private-getdeltatypefieldnames",children:[]},{value:"getPluginName",id:"getpluginname",children:[]},{value:"<code>Protected</code> logError",id:"protected-logerror",children:[]},{value:"<code>Protected</code> logWarning",id:"protected-logwarning",children:[]},{value:"transformSchema",id:"transformschema",children:[]}]}],o={rightToc:p};function i(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"DataSync plugin"),Object(c.b)("p",null,'Plugin is enabled by """ @datasync """ annotation\nIt will generate delta queries'),Object(c.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("p",{parentName:"li"},"GraphbackPlugin"),Object(c.b)("p",{parentName:"li"},"\u21b3 ",Object(c.b)("strong",{parentName:"p"},"DataSyncPlugin")))),Object(c.b)("h2",{id:"index"},"Index"),Object(c.b)("h3",{id:"constructors"},"Constructors"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#constructor"}),"constructor"))),Object(c.b)("h3",{id:"properties"},"Properties"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-config"}),"config"))),Object(c.b)("h3",{id:"methods"},"Methods"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-adddatasyncfieldstoinputtypes"}),"addDataSyncFieldsToInputTypes")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-adddatasyncfieldstomodel"}),"addDataSyncFieldsToModel")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-adddeltaquery"}),"addDeltaQuery")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-adddeltasyncresolver"}),"addDeltaSyncResolver")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#createresolvers"}),"createResolvers")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#createresources"}),"createResources")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#private-getdeltatypefieldnames"}),"getDeltaTypeFieldNames")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#getpluginname"}),"getPluginName")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-logerror"}),"logError")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-logwarning"}),"logWarning")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#transformschema"}),"transformSchema"))),Object(c.b)("h2",{id:"constructors-1"},"Constructors"),Object(c.b)("h3",{id:"constructor"},"constructor"),Object(c.b)("p",null,"+"," ",Object(c.b)("strong",{parentName:"p"},"new DataSyncPlugin"),"(",Object(c.b)("inlineCode",{parentName:"p"},"config?"),": ",Object(c.b)("a",Object(n.a)({parentName:"p"},{href:"/docs/next/api/graphback-datasync/interfaces/_datasyncplugin_.datasyncpluginconfig"}),"DataSyncPluginConfig"),"): ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin"}),"DataSyncPlugin"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback-datasync/src/DataSyncPlugin.ts#L21"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:21"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"config?")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("a",Object(n.a)({parentName:"td"},{href:"/docs/next/api/graphback-datasync/interfaces/_datasyncplugin_.datasyncpluginconfig"}),"DataSyncPluginConfig"))))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin"}),"DataSyncPlugin"))),Object(c.b)("h2",{id:"properties-1"},"Properties"),Object(c.b)("h3",{id:"protected-config"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," config"),Object(c.b)("p",null,"\u2022 ",Object(c.b)("strong",{parentName:"p"},"config"),": ",Object(c.b)("em",{parentName:"p"},Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/interfaces/_datasyncplugin_.datasyncpluginconfig"}),"DataSyncPluginConfig"))),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback-datasync/src/DataSyncPlugin.ts#L21"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:21"))),Object(c.b)("h2",{id:"methods-1"},"Methods"),Object(c.b)("h3",{id:"protected-adddatasyncfieldstoinputtypes"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," addDataSyncFieldsToInputTypes"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"addDataSyncFieldsToInputTypes"),"(",Object(c.b)("inlineCode",{parentName:"p"},"schemaComposer"),": SchemaComposer\u2039any\u203a, ",Object(c.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback-datasync/src/DataSyncPlugin.ts#L151"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:151"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schemaComposer")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SchemaComposer\u2039any\u203a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"model")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-adddatasyncfieldstomodel"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," addDataSyncFieldsToModel"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"addDataSyncFieldsToModel"),"(",Object(c.b)("inlineCode",{parentName:"p"},"schemaComposer"),": SchemaComposer\u2039any\u203a, ",Object(c.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback-datasync/src/DataSyncPlugin.ts#L129"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:129"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schemaComposer")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SchemaComposer\u2039any\u203a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"model")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-adddeltaquery"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," addDeltaQuery"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"addDeltaQuery"),"(",Object(c.b)("inlineCode",{parentName:"p"},"schemaComposer"),": SchemaComposer\u2039unknown\u203a, ",Object(c.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback-datasync/src/DataSyncPlugin.ts#L165"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:165"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"schemaComposer")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"SchemaComposer\u2039unknown\u203a")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"model")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-adddeltasyncresolver"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," addDeltaSyncResolver"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"addDeltaSyncResolver"),"(",Object(c.b)("inlineCode",{parentName:"p"},"model"),": ModelDefinition, ",Object(c.b)("inlineCode",{parentName:"p"},"resolvers"),": IResolvers): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback-datasync/src/DataSyncPlugin.ts#L108"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:108"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"model")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"ModelDefinition")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"resolvers")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"IResolvers")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createresolvers"},"createResolvers"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createResolvers"),"(",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),": GraphbackCoreMetadata): ",Object(c.b)("em",{parentName:"p"},"IResolvers")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Overrides void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback-datasync/src/DataSyncPlugin.ts#L78"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:78"))),Object(c.b)("p",null,"Creates resolvers for Data Synchonization"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"metadata")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphbackCoreMetadata"),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"Core metatata containing all model information")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"IResolvers")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"createresources"},"createResources"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"createResources"),"(",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),": GraphbackCoreMetadata): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Overrides void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback-datasync/src/DataSyncPlugin.ts#L97"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:97"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"metadata")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphbackCoreMetadata")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"private-getdeltatypefieldnames"},Object(c.b)("inlineCode",{parentName:"h3"},"Private")," getDeltaTypeFieldNames"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getDeltaTypeFieldNames"),"(",Object(c.b)("inlineCode",{parentName:"p"},"modelTC"),": GraphQLObjectType): ",Object(c.b)("em",{parentName:"p"},"string[]")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback-datasync/src/DataSyncPlugin.ts#L208"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:208"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"modelTC")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphQLObjectType")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string[]")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"getpluginname"},"getPluginName"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"getPluginName"),"(): ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Overrides void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback-datasync/src/DataSyncPlugin.ts#L104"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:104"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"string")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-logerror"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," logError"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"logError"),"(",Object(c.b)("inlineCode",{parentName:"p"},"message"),": string): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin"}),"DataSyncPlugin"),".",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-logerror"}),"logError"))),Object(c.b)("p",null,"Defined in packages/graphback-core/types/plugin/GraphbackPlugin.d.ts:37"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"message")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"protected-logwarning"},Object(c.b)("inlineCode",{parentName:"h3"},"Protected")," logWarning"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"logWarning"),"(",Object(c.b)("inlineCode",{parentName:"p"},"message"),": string): ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Inherited from ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin"}),"DataSyncPlugin"),".",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"/docs/next/api/graphback-datasync/classes/_datasyncplugin_.datasyncplugin#protected-logwarning"}),"logWarning"))),Object(c.b)("p",null,"Defined in packages/graphback-core/types/plugin/GraphbackPlugin.d.ts:36"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"message")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"string")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"void")),Object(c.b)("hr",null),Object(c.b)("h3",{id:"transformschema"},"transformSchema"),Object(c.b)("p",null,"\u25b8 ",Object(c.b)("strong",{parentName:"p"},"transformSchema"),"(",Object(c.b)("inlineCode",{parentName:"p"},"metadata"),": GraphbackCoreMetadata): ",Object(c.b)("em",{parentName:"p"},"GraphQLSchema")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Overrides void")),Object(c.b)("p",null,Object(c.b)("em",{parentName:"p"},"Defined in ",Object(c.b)("a",Object(n.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback-datasync/src/DataSyncPlugin.ts#L31"}),"packages/graphback-datasync/src/DataSyncPlugin.ts:31"))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Parameters:")),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Name"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"Type"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),Object(c.b)("inlineCode",{parentName:"td"},"metadata")),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"GraphbackCoreMetadata")))),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Returns:")," ",Object(c.b)("em",{parentName:"p"},"GraphQLSchema")))}i.isMDXComponent=!0}}]);