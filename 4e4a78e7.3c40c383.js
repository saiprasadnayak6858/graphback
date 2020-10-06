/*! For license information please see 4e4a78e7.3c40c383.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[395],{1314:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),c=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var l=c.a.createContext({}),s=function(e){var t=c.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=s(e.components);return c.a.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},b=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,a=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),p=s(n),b=r,d=p["".concat(a,".").concat(b)]||p[b]||f[b]||o;return n?c.a.createElement(d,i(i({ref:t},l),{},{components:n})):c.a.createElement(d,i({ref:t},l))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,a=new Array(o);a[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var l=2;l<o;l++)a[l]=n[l];return c.a.createElement.apply(null,a)}return c.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},1315:function(e,t,n){"use strict";e.exports=n(1316)},1316:function(e,t,n){"use strict";var r=n(1317),c="function"==typeof Symbol&&Symbol.for,o=c?Symbol.for("react.element"):60103,a=c?Symbol.for("react.portal"):60106,i=c?Symbol.for("react.fragment"):60107,u=c?Symbol.for("react.strict_mode"):60108,l=c?Symbol.for("react.profiler"):60114,s=c?Symbol.for("react.provider"):60109,p=c?Symbol.for("react.context"):60110,f=c?Symbol.for("react.forward_ref"):60112,b=c?Symbol.for("react.suspense"):60113,d=c?Symbol.for("react.memo"):60115,m=c?Symbol.for("react.lazy"):60116,h="function"==typeof Symbol&&Symbol.iterator;function y(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var g={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},O={};function j(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||g}function v(){}function k(e,t,n){this.props=e,this.context=t,this.refs=O,this.updater=n||g}j.prototype.isReactComponent={},j.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(y(85));this.updater.enqueueSetState(this,e,t,"setState")},j.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=j.prototype;var _=k.prototype=new v;_.constructor=k,r(_,j.prototype),_.isPureReactComponent=!0;var w={current:null},C=Object.prototype.hasOwnProperty,N={key:!0,ref:!0,__self:!0,__source:!0};function x(e,t,n){var r,c={},a=null,i=null;if(null!=t)for(r in void 0!==t.ref&&(i=t.ref),void 0!==t.key&&(a=""+t.key),t)C.call(t,r)&&!N.hasOwnProperty(r)&&(c[r]=t[r]);var u=arguments.length-2;if(1===u)c.children=n;else if(1<u){for(var l=Array(u),s=0;s<u;s++)l[s]=arguments[s+2];c.children=l}if(e&&e.defaultProps)for(r in u=e.defaultProps)void 0===c[r]&&(c[r]=u[r]);return{$$typeof:o,type:e,key:a,ref:i,props:c,_owner:w.current}}function P(e){return"object"==typeof e&&null!==e&&e.$$typeof===o}var S=/\/+/g,D=[];function E(e,t,n,r){if(D.length){var c=D.pop();return c.result=e,c.keyPrefix=t,c.func=n,c.context=r,c.count=0,c}return{result:e,keyPrefix:t,func:n,context:r,count:0}}function $(e){e.result=null,e.keyPrefix=null,e.func=null,e.context=null,e.count=0,10>D.length&&D.push(e)}function R(e,t,n,r){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var i=!1;if(null===e)i=!0;else switch(c){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case o:case a:i=!0}}if(i)return n(r,e,""===t?"."+T(e,0):t),1;if(i=0,t=""===t?".":t+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=t+T(c=e[u],u);i+=R(c,l,n,r)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=h&&e[h]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(c=e.next()).done;)i+=R(c=c.value,l=t+T(c,u++),n,r);else if("object"===c)throw n=""+e,Error(y(31,"[object Object]"===n?"object with keys {"+Object.keys(e).join(", ")+"}":n,""));return i}function q(e,t,n){return null==e?0:R(e,"",t,n)}function T(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+(""+e).replace(/[=:]/g,(function(e){return t[e]}))}(e.key):t.toString(36)}function I(e,t){e.func.call(e.context,t,e.count++)}function A(e,t,n){var r=e.result,c=e.keyPrefix;e=e.func.call(e.context,t,e.count++),Array.isArray(e)?L(e,r,n,(function(e){return e})):null!=e&&(P(e)&&(e=function(e,t){return{$$typeof:o,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(e,c+(!e.key||t&&t.key===e.key?"":(""+e.key).replace(S,"$&/")+"/")+n)),r.push(e))}function L(e,t,n,r,c){var o="";null!=n&&(o=(""+n).replace(S,"$&/")+"/"),q(e,A,t=E(t,o,r,c)),$(t)}var M={current:null};function U(){var e=M.current;if(null===e)throw Error(y(321));return e}var F={ReactCurrentDispatcher:M,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:w,IsSomeRendererActing:{current:!1},assign:r};t.Children={map:function(e,t,n){if(null==e)return e;var r=[];return L(e,r,null,t,n),r},forEach:function(e,t,n){if(null==e)return e;q(e,I,t=E(null,null,t,n)),$(t)},count:function(e){return q(e,(function(){return null}),null)},toArray:function(e){var t=[];return L(e,t,null,(function(e){return e})),t},only:function(e){if(!P(e))throw Error(y(143));return e}},t.Component=j,t.Fragment=i,t.Profiler=l,t.PureComponent=k,t.StrictMode=u,t.Suspense=b,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F,t.cloneElement=function(e,t,n){if(null==e)throw Error(y(267,e));var c=r({},e.props),a=e.key,i=e.ref,u=e._owner;if(null!=t){if(void 0!==t.ref&&(i=t.ref,u=w.current),void 0!==t.key&&(a=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(s in t)C.call(t,s)&&!N.hasOwnProperty(s)&&(c[s]=void 0===t[s]&&void 0!==l?l[s]:t[s])}var s=arguments.length-2;if(1===s)c.children=n;else if(1<s){l=Array(s);for(var p=0;p<s;p++)l[p]=arguments[p+2];c.children=l}return{$$typeof:o,type:e.type,key:a,ref:i,props:c,_owner:u}},t.createContext=function(e,t){return void 0===t&&(t=null),(e={$$typeof:p,_calculateChangedBits:t,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:s,_context:e},e.Consumer=e},t.createElement=x,t.createFactory=function(e){var t=x.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:f,render:e}},t.isValidElement=P,t.lazy=function(e){return{$$typeof:m,_ctor:e,_status:-1,_result:null}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.useCallback=function(e,t){return U().useCallback(e,t)},t.useContext=function(e,t){return U().useContext(e,t)},t.useDebugValue=function(){},t.useEffect=function(e,t){return U().useEffect(e,t)},t.useImperativeHandle=function(e,t,n){return U().useImperativeHandle(e,t,n)},t.useLayoutEffect=function(e,t){return U().useLayoutEffect(e,t)},t.useMemo=function(e,t){return U().useMemo(e,t)},t.useReducer=function(e,t,n){return U().useReducer(e,t,n)},t.useRef=function(e){return U().useRef(e)},t.useState=function(e){return U().useState(e)},t.version="16.13.1"},1317:function(e,t,n){"use strict";var r=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(c){return!1}}()?Object.assign:function(e,t){for(var n,i,u=a(e),l=1;l<arguments.length;l++){for(var s in n=Object(arguments[l]))c.call(n,s)&&(u[s]=n[s]);if(r){i=r(n);for(var p=0;p<i.length;p++)o.call(n,i[p])&&(u[i[p]]=n[i[p]])}}return u}},450:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return a})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return u})),n.d(t,"default",(function(){return s}));var r=n(2),c=n(6),o=(n(1315),n(1314)),a={id:"_clientdocuments_.clientdocuments",title:"ClientDocuments",sidebar_label:"ClientDocuments"},i={unversionedId:"api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments",id:"api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments",isDocsHomePage:!1,title:"ClientDocuments",description:"Represents generated templates for different operations",source:"@site/../docs/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments.md",slug:"/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments",permalink:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments",editUrl:"https://github.com/aerogear/graphback/edit/master/website/../docs/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments.md",version:"current",sidebar_label:"ClientDocuments"},u=[{value:"Hierarchy",id:"hierarchy",children:[]},{value:"Index",id:"index",children:[{value:"Properties",id:"properties",children:[]}]},{value:"Properties",id:"properties-1",children:[{value:"<code>Optional</code> fragments",id:"optional-fragments",children:[]},{value:"<code>Optional</code> mutations",id:"optional-mutations",children:[]},{value:"<code>Optional</code> queries",id:"optional-queries",children:[]},{value:"<code>Optional</code> subscriptions",id:"optional-subscriptions",children:[]}]}],l={rightToc:u};function s(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"Represents generated templates for different operations"),Object(o.b)("h2",{id:"hierarchy"},"Hierarchy"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"ClientDocuments"))),Object(o.b)("h2",{id:"index"},"Index"),Object(o.b)("h3",{id:"properties"},"Properties"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments#optional-fragments"}),"fragments")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments#optional-mutations"}),"mutations")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments#optional-queries"}),"queries")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocuments#optional-subscriptions"}),"subscriptions"))),Object(o.b)("h2",{id:"properties-1"},"Properties"),Object(o.b)("h3",{id:"optional-fragments"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," fragments"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"fragments"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocument"}),"ClientDocument"),"[]")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback-codegen-client/src/ClientDocuments.ts#L8"}),"graphback-codegen-client/src/ClientDocuments.ts:8"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-mutations"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," mutations"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"mutations"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocument"}),"ClientDocument"),"[]")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback-codegen-client/src/ClientDocuments.ts#L7"}),"graphback-codegen-client/src/ClientDocuments.ts:7"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-queries"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," queries"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"queries"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocument"}),"ClientDocument"),"[]")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback-codegen-client/src/ClientDocuments.ts#L6"}),"graphback-codegen-client/src/ClientDocuments.ts:6"))),Object(o.b)("hr",null),Object(o.b)("h3",{id:"optional-subscriptions"},Object(o.b)("inlineCode",{parentName:"h3"},"Optional")," subscriptions"),Object(o.b)("p",null,"\u2022 ",Object(o.b)("strong",{parentName:"p"},"subscriptions"),"? : ",Object(o.b)("em",{parentName:"p"},Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"/docs/next/api/graphback-codegen-client/interfaces/_clientdocuments_.clientdocument"}),"ClientDocument"),"[]")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Defined in ",Object(o.b)("a",Object(r.a)({parentName:"em"},{href:"https://github.com/aerogear/graphback/blob/672184d/packages/graphback-codegen-client/src/ClientDocuments.ts#L9"}),"graphback-codegen-client/src/ClientDocuments.ts:9"))))}s.isMDXComponent=!0}}]);