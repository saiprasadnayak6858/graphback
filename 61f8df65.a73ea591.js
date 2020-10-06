/*! For license information please see 61f8df65.a73ea591.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[492],{1314:function(e,r,t){"use strict";t.d(r,"a",(function(){return f})),t.d(r,"b",(function(){return y}));var n=t(0),c=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),s=function(e){var r=c.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},f=function(e){var r=s(e.components);return c.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},d=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),f=s(t),d=n,y=f["".concat(a,".").concat(d)]||f[d]||p[d]||o;return t?c.a.createElement(y,i(i({ref:r},l),{},{components:t})):c.a.createElement(y,i({ref:r},l))}));function y(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=d;var i={};for(var u in r)hasOwnProperty.call(r,u)&&(i[u]=r[u]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var l=2;l<o;l++)a[l]=t[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},1315:function(e,r,t){"use strict";e.exports=t(1316)},1316:function(e,r,t){"use strict";var n=t(1317),c="function"==typeof Symbol&&Symbol.for,o=c?Symbol.for("react.element"):60103,a=c?Symbol.for("react.portal"):60106,i=c?Symbol.for("react.fragment"):60107,u=c?Symbol.for("react.strict_mode"):60108,l=c?Symbol.for("react.profiler"):60114,s=c?Symbol.for("react.provider"):60109,f=c?Symbol.for("react.context"):60110,p=c?Symbol.for("react.forward_ref"):60112,d=c?Symbol.for("react.suspense"):60113,y=c?Symbol.for("react.memo"):60115,b=c?Symbol.for("react.lazy"):60116,v="function"==typeof Symbol&&Symbol.iterator;function m(e){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+e,t=1;t<arguments.length;t++)r+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+e+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||h}function g(){}function S(e,r,t){this.props=e,this.context=r,this.refs=O,this.updater=t||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,r){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(m(85));this.updater.enqueueSetState(this,e,r,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=j.prototype;var _=S.prototype=new g;_.constructor=S,n(_,j.prototype),_.isPureReactComponent=!0;var x={current:null},w=Object.prototype.hasOwnProperty,k={key:!0,ref:!0,__self:!0,__source:!0};function C(e,r,t){var n,c={},a=null,i=null;if(null!=r)for(n in void 0!==r.ref&&(i=r.ref),void 0!==r.key&&(a=""+r.key),r)w.call(r,n)&&!k.hasOwnProperty(n)&&(c[n]=r[n]);var u=arguments.length-2;if(1===u)c.children=t;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];c.children=l}if(e&&e.defaultProps)for(n in u=e.defaultProps)void 0===c[n]&&(c[n]=u[n]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:x.current}}function D(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var R=/\/+/g,P=[];function E(e,r,t,n){if(P.length){var c=P.pop();return c.result=e,c.keyPrefix=r,c.func=t,c.context=n,c.count=0,c}return{result:e,keyPrefix:r,func:t,context:n,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>P.length&&P.push(e)}function N(e,r,t,n){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return t(n,e,""===r?"."+T(e,0):r),1;if(i=0,r=""===r?".":r+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=r+T(c=e[u],u);i+=N(c,l,t,n)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=v&&e[v]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(c=e.next()).done;)i+=N(c=c.value,l=r+T(c,u++),t,n);else if("object"===c)throw t=""+e,Error(m(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t,""));return i}function U(e,r,t){return null==e?0:N(e,"",r,t)}function T(e,r){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var r={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return r[e]}))}(e.key):r.toString(36)}function I(e,r){e.func.call(e.context,r,e.count++)}function A(e,r,t){var n=e.result,c=e.keyPrefix;e=e.func.call(e.context,r,e.count++),Array.isArray(e)?L(e,n,t,(function(e){return e})):null!=e&&(D(e)&&(e=function(e,r){return{$$typeof:o,type:e.type,key:r,ref:e.ref,props:e.props,_owner:e._owner}}(e,c+(!e.key||r&&r.key===e.key?"":(""+e.key).replace(R,"$&/")+"/")+t)),n.push(e))}function L(e,r,t,n,c){var o="";null!=t&&(o=(""+t).replace(R,"$&/")+"/"),U(e,A,r=E(r,o,n,c)),$(r)}var M={current:null};function q(){var e=M.current;if(null===e)throw Error(m(321));return e}var F={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:x,IsSomeRendererActing:{current:!1},assign:n};r.Children={map:function(e,r,t){if(null==e)return e;var n=[];return L(e,n,null,r,t),n},forEach:function(e,r,t){if(null==e)return e;U(e,I,r=E(null,null,r,t)),$(r)},count:function(e){return U(e,(function(){return null}),null)},toArray:function(e){var r=[];return L(e,r,null,(function(e){return e})),r},only:function(e){if(!D(e))throw Error(m(143));return e}},r.Component=j,r.Fragment=i,r.Profiler=l,r.PureComponent=S,r.StrictMode=u,r.Suspense=d,r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,r.cloneElement=function(e,r,t){if(null==e)throw Error(m(267,e));var c=n({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=r){if(void 0!==r.ref&&(i=r.ref,u=x.current),void 0!==r.key&&(a=""+r.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in r)w.call(r,s)&&!k.hasOwnProperty(s)&&(c[s]=void 0===r[s]&&void 0!==l?l[s]:r[s])}var s=arguments.length-2;if(1===s)c.children=t;else if(1<s){l=Array(s);for(var f=0;f<s;f++)l[f]=arguments[f+2];c.children=l}return{$$typeof:o,type:e.type,key:a,ref:i,props:c,_owner:u}},r.createContext=function(e,r){return void 0===r&&(r=null),(e={$$typeof:f,_calculateChangedBits:r,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},r.createElement=C,r.createFactory=function(e){var r=C.bind(null,e);return r.type=e,r},r.createRef=function(){return{current:null}},r.forwardRef=function(e){return{$$typeof:p,render:e}},r.isValidElement=D,r.lazy=function(e){return{$$typeof:b,_ctor:e,_status:-1,_result:null}},r.memo=function(e,r){return{$$typeof:y,type:e,compare:void 0===r?null:r}},r.useCallback=function(e,r){return q().useCallback(e,r)},r.useContext=function(e,r){return q().useContext(e,r)},r.useDebugValue=function(){},r.useEffect=function(e,r){return q().useEffect(e,r)},r.useImperativeHandle=function(e,r,t){return q().useImperativeHandle(e,r,t)},r.useLayoutEffect=function(e,r){return q().useLayoutEffect(e,r)},r.useMemo=function(e,r){return q().useMemo(e,r)},r.useReducer=function(e,r,t){return q().useReducer(e,r,t)},r.useRef=function(e){return q().useRef(e)},r.useState=function(e){return q().useState(e)},r.version="16.13.1"},1317:function(e,r,t){"use strict";var n=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var r={},t=0;t<10;t++)r["_"+String.fromCharCode(t)]=t;if("0123456789"!==Object.getOwnPropertyNames(r).map((function(e){return r[e]})).join(""))return!1;var n={};return"abcdefghijklmnopqrst".split("").forEach((function(e){n[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},n)).join("")}catch(c){return!1}}()?Object.assign:function(e,r){for(var t,i,u=a(e),l=1;l<arguments.length;l++){for(var s in t=Object(arguments[l]))c.call(t,s)&&(u[s]=t[s]);if(n){i=n(t);for(var f=0;f<i.length;f++)o.call(t,i[f])&&(u[i[f]]=t[i[f]])}}return u}},547:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return s}));var n=t(2),c=t(6),o=(t(1315),t(1314)),a={id:"_services_index_",title:"services/index",sidebar_label:"services/index"},i={unversionedId:"api/graphback-datasync/modules/_services_index_",id:"api/graphback-datasync/modules/_services_index_",isDocsHomePage:!1,title:"services/index",description:"Index",source:"@site/../docs/api/graphback-datasync/modules/_services_index_.md",slug:"/api/graphback-datasync/modules/_services_index_",permalink:"/docs/next/api/graphback-datasync/modules/_services_index_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-datasync/modules/_services_index_.md",version:"current",sidebar_label:"services/index"},u=[{value:"Index",id:"index",children:[{value:"References",id:"references",children:[]}]},{value:"References",id:"references-1",children:[{value:"CreateDataSyncCRUDServiceOptions",id:"createdatasynccrudserviceoptions",children:[]},{value:"DataSyncCRUDService",id:"datasynccrudservice",children:[]},{value:"SyncList",id:"synclist",children:[]},{value:"createDataSyncCRUDService",id:"createdatasynccrudservice",children:[]}]}],l={rightToc:u};function s(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"references"},"References"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_services_index_#createdatasynccrudserviceoptions"}),"CreateDataSyncCRUDServiceOptions")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_services_index_#datasynccrudservice"}),"DataSyncCRUDService")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_services_index_#synclist"}),"SyncList")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/next/api/graphback-datasync/modules/_services_index_#createdatasynccrudservice"}),"createDataSyncCRUDService"))),Object(o.b)("h2",{id:"references-1"},"References"),Object(o.b)("h3",{id:"createdatasynccrudserviceoptions"},"CreateDataSyncCRUDServiceOptions"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"CreateDataSyncCRUDServiceOptions"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"datasynccrudservice"},"DataSyncCRUDService"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"DataSyncCRUDService"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"synclist"},"SyncList"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"SyncList"),":"),Object(o.b)("hr",null),Object(o.b)("h3",{id:"createdatasynccrudservice"},"createDataSyncCRUDService"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"createDataSyncCRUDService"),":"))}s.isMDXComponent=!0}}]);