/*! For license information please see a8f3cba3.e1d1bc27.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[833],{1314:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=o.a.createContext({}),f=function(e){var t=o.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=f(e.components);return o.a.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},b=o.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,a=e.parentName,i=l(e,["components","mdxType","originalType","parentName"]),p=f(n),b=r,d=p["".concat(a,".").concat(b)]||p[b]||s[b]||u;return n?o.a.createElement(d,c(c({ref:t},i),{},{components:n})):o.a.createElement(d,c({ref:t},i))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,a=new Array(u);a[0]=b;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var i=2;i<u;i++)a[i]=n[i];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1315:function(e,t,n){"use strict";e.exports=n(1316)},1316:function(e,t,n){"use strict";var r=n(1317),o="function"==typeof Symbol&&Symbol.for,u=o?Symbol.for("react.element"):60103,a=o?Symbol.for("react.portal"):60106,c=o?Symbol.for("react.fragment"):60107,l=o?Symbol.for("react.strict_mode"):60108,i=o?Symbol.for("react.profiler"):60114,f=o?Symbol.for("react.provider"):60109,p=o?Symbol.for("react.context"):60110,s=o?Symbol.for("react.forward_ref"):60112,b=o?Symbol.for("react.suspense"):60113,d=o?Symbol.for("react.memo"):60115,y=o?Symbol.for("react.lazy"):60116,m="function"==typeof Symbol&&Symbol.iterator;function g(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||h}function v(){}function w(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||h}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(g(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var P=w.prototype=new v;P.constructor=w,r(P,j.prototype),P.isPureReactComponent=!0;var _={current:null},k=Object.prototype.hasOwnProperty,S={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,o={},a=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(a=""+t.key),t)k.call(t,r)&&!S.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var i=Array(l),f=0;f<l;f++)i[f]=arguments[f+2];o.children=i}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:u,type:e,key:a,ref:c,props:o,_owner:_.current}}function C(e){return"object"==typeof e&&null!==e&&e.$$typeof===u}var E=/\/+/g,N=[];function $(e,t,n,r){if(N.length){var o=N.pop();return o.result=e,o.keyPrefix=t,o.func=n,o.context=r,o.count=0,o}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function R(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>N.length&&N.push(e)}function T(e,t,n,r){var o=typeof e;"undefined"!==o&&"boolean"!==o||(e=null);var c=!1;if(null===e)c=!0;else switch(o){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case u:case a:c=!0}}if(c)return n(r,e,""===t?"."+I(e,0):t),1;if(c=0,t=""===t?".":t+":",Array.isArray(e))for(var l=0;l<e.length;l++){var i=t+I(o=e[l],l);c+=T(o,i,n,r)}else if(null===e||"object"!=typeof e?i=null:i="function"==typeof(i=m&&e[m]||e["@@iterator"])?i:null,"function"==typeof i)for(e=i.call(e),l=0;!(o=e.next()).done;)c+=T(o=o.value,i=t+I(o,l++),n,r);else if("object"===o)throw n=""+e,Error(g(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return c}function D(e,t,n){return null==e?0:T(e,"",t,n)}function I(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function M(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,o=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?F(e,r,n,(function(e){return e})):null!=e&&(C(e)&&(e=function(e,t){return{$$typeof:u,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,o+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(E,"$&/")+"/")+n)),r.push(e))}function F(e,t,n,r,o){var u="";null!=n&&(u=(""+n).replace(E,"$&/")+"/"),D(e,A,t=$(t,u,r,o)),R(t)}var U={current:null};function q(){var e=U.current;if(null===e)throw Error(g(321));return e}var L={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:_,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return F(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;D(e,M,t=$(null,null,t,n)),R(t)},count:function(e){return D(e,(function(){return null}),null)},toArray:function(e){var t=[];return F(e,t,null,(function(e){return e})),t},only:function(e){if(!C(e))throw Error(g(143));return e}},t.Component=j,t.Fragment=c,t.Profiler=i,t.PureComponent=w,t.StrictMode=l,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=L,t.cloneElement=function(e,t,n){if(null==e)throw Error(g(267,e));var o=r({},e.props),a=e.key,c=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(c=t.ref,l=_.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var i=e.type.defaultProps;for(f in t)k.call(t,f)&&!S.hasOwnProperty(f)&&(o[f]=void 0===t[f]&&void 0!==i?i[f]:t[f])}var f=arguments.length-2;if(1===f)o.children=n;else if(1<f){i=Array(f);for(var p=0;p<f;p++)i[p]=arguments[p+2];o.children=i}return{$$typeof:u,type:e.type,key:a,ref:c,props:o,_owner:l}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:f,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:s,render:e}},t.isValidElement=C,t.lazy=function(e){return{$$typeof:y,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return q().useCallback(e,t)},t.useContext=function(e,t){return q().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return q().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return q().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return q().useLayoutEffect(e,t)},t.useMemo=function(e,t){return q().useMemo(e,t)},t.useReducer=function(e,t,n){return q().useReducer(e,t,n)},t.useRef=function(e){return q().useRef(e)},t.useState=function(e){return q().useState(e)},t.version="16.13.1"},1317:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(o){return!1}}()?Object.assign:function(e,t){for(var n,c,l=a(e),i=1;i<arguments.length;i++){for(var f in n=Object(arguments[i]))o.call(n,f)&&(l[f]=n[f]);if(r){c=r(n);for(var p=0;p<c.length;p++)u.call(n,c[p])&&(l[c[p]]=n[c[p]])}}return l}},887:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return f}));var r=n(2),o=n(6),u=(n(1315),n(1314)),a={id:"_loadplugins_",title:"loadPlugins",sidebar_label:"loadPlugins"},c={unversionedId:"api/graphback/modules/_loadplugins_",id:"api/graphback/modules/_loadplugins_",isDocsHomePage:!1,title:"loadPlugins",description:"Index",source:"@site/../docs/api/graphback/modules/_loadplugins_.md",slug:"/api/graphback/modules/_loadplugins_",permalink:"/docs/next/api/graphback/modules/_loadplugins_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback/modules/_loadplugins_.md",version:"current",sidebar_label:"loadPlugins"},l=[{value:"Index",id:"index",children:[{value:"Functions",id:"functions",children:[]}]},{value:"Functions",id:"functions-1",children:[{value:"loadPlugins",id:"loadplugins",children:[]}]}],i={rightToc:l};function f(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("h2",{id:"index"},"Index"),Object(u.b)("h3",{id:"functions"},"Functions"),Object(u.b)("ul",null,Object(u.b)("li",{parentName:"ul"},Object(u.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback/modules/_loadplugins_#loadplugins"}),"loadPlugins"))),Object(u.b)("h2",{id:"functions-1"},"Functions"),Object(u.b)("h3",{id:"loadplugins"},"loadPlugins"),Object(u.b)("p",null,"\u25b8 ",Object(u.b)("strong",{parentName:"p"},"loadPlugins"),"(",Object(u.b)("inlineCode",{parentName:"p"},"pluginConfigMap"),": PluginConfigMap): ",Object(u.b)("em",{parentName:"p"},"GraphbackPlugin[]")),Object(u.b)("p",null,Object(u.b)("em",{parentName:"p"},"Defined in ",Object(u.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback/src/loadPlugins.ts#L16"}),"loadPlugins.ts:16"))),Object(u.b)("p",null,Object(u.b)("strong",{parentName:"p"},"Parameters:")),Object(u.b)("table",null,Object(u.b)("thead",{parentName:"table"},Object(u.b)("tr",{parentName:"thead"},Object(u.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Name"),Object(u.b)("th",Object(r.a)({parentName:"tr"},{align:null}),"Type"))),Object(u.b)("tbody",{parentName:"table"},Object(u.b)("tr",{parentName:"tbody"},Object(u.b)("td",Object(r.a)({parentName:"tr"},{align:null}),Object(u.b)("inlineCode",{parentName:"td"},"pluginConfigMap")),Object(u.b)("td",Object(r.a)({parentName:"tr"},{align:null}),"PluginConfigMap")))),Object(u.b)("p",null,Object(u.b)("strong",{parentName:"p"},"Returns:")," ",Object(u.b)("em",{parentName:"p"},"GraphbackPlugin[]")))}f.isMDXComponent=!0}}]);