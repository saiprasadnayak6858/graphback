(window.webpackJsonp=window.webpackJsonp||[]).push([[1202],{1258:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return i})),t.d(r,"metadata",(function(){return o})),t.d(r,"rightToc",(function(){return u})),t.d(r,"default",(function(){return d}));var n=t(2),c=t(6),a=(t(0),t(1314)),i={id:"_index_",title:"index",sidebar_label:"index"},o={unversionedId:"api/graphback-keycloak-authz/modules/_index_",id:"version-0.15.x/api/graphback-keycloak-authz/modules/_index_",isDocsHomePage:!1,title:"index",description:"Index",source:"@site/versioned_docs/version-0.15.x/api/graphback-keycloak-authz/modules/_index_.md",slug:"/api/graphback-keycloak-authz/modules/_index_",permalink:"/docs/0.15.x/api/graphback-keycloak-authz/modules/_index_",editUrl:"https://github.com/aerogear/graphback/edit/master/website/versioned_docs/version-0.15.x/api/graphback-keycloak-authz/modules/_index_.md",version:"0.15.x",sidebar_label:"index"},u=[{value:"Index",id:"index",children:[{value:"References",id:"references",children:[]}]},{value:"References",id:"references-1",children:[{value:"AuthFilter",id:"authfilter",children:[]},{value:"CrudOperationAuthConfig",id:"crudoperationauthconfig",children:[]},{value:"CrudServiceAuthConfig",id:"crudserviceauthconfig",children:[]},{value:"CrudServicesAuthConfig",id:"crudservicesauthconfig",children:[]},{value:"KeycloakCrudService",id:"keycloakcrudservice",children:[]},{value:"KeycloakCrudServiceOptions",id:"keycloakcrudserviceoptions",children:[]}]}],l={rightToc:u};function d(e){var r=e.components,t=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(a.b)("h2",{id:"index"},"Index"),Object(a.b)("h3",{id:"references"},"References"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-keycloak-authz/modules/_index_#authfilter"}),"AuthFilter")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-keycloak-authz/modules/_index_#crudoperationauthconfig"}),"CrudOperationAuthConfig")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-keycloak-authz/modules/_index_#crudserviceauthconfig"}),"CrudServiceAuthConfig")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-keycloak-authz/modules/_index_#crudservicesauthconfig"}),"CrudServicesAuthConfig")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-keycloak-authz/modules/_index_#keycloakcrudservice"}),"KeycloakCrudService")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("a",Object(n.a)({parentName:"li"},{href:"/docs/0.15.x/api/graphback-keycloak-authz/modules/_index_#keycloakcrudserviceoptions"}),"KeycloakCrudServiceOptions"))),Object(a.b)("h2",{id:"references-1"},"References"),Object(a.b)("h3",{id:"authfilter"},"AuthFilter"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"AuthFilter"),":"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"crudoperationauthconfig"},"CrudOperationAuthConfig"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"CrudOperationAuthConfig"),":"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"crudserviceauthconfig"},"CrudServiceAuthConfig"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"CrudServiceAuthConfig"),":"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"crudservicesauthconfig"},"CrudServicesAuthConfig"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"CrudServicesAuthConfig"),":"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"keycloakcrudservice"},"KeycloakCrudService"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"KeycloakCrudService"),":"),Object(a.b)("hr",null),Object(a.b)("h3",{id:"keycloakcrudserviceoptions"},"KeycloakCrudServiceOptions"),Object(a.b)("p",null,"\u2022 ",Object(a.b)("strong",{parentName:"p"},"KeycloakCrudServiceOptions"),":"))}d.isMDXComponent=!0},1314:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return h}));var n=t(0),c=t.n(n);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function i(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function o(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?i(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function u(e,r){if(null==e)return{};var t,n,c=function(e,r){if(null==e)return{};var t,n,c={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(c[t]=e[t]);return c}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(c[t]=e[t])}return c}var l=c.a.createContext({}),d=function(e){var r=c.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):o(o({},r),e)),t},b=function(e){var r=d(e.components);return c.a.createElement(l.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return c.a.createElement(c.a.Fragment,{},r)}},s=c.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,l=u(e,["components","mdxType","originalType","parentName"]),b=d(t),s=n,h=b["".concat(i,".").concat(s)]||b[s]||p[s]||a;return t?c.a.createElement(h,o(o({ref:r},l),{},{components:t})):c.a.createElement(h,o({ref:r},l))}));function h(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,i=new Array(a);i[0]=s;var o={};for(var u in r)hasOwnProperty.call(r,u)&&(o[u]=r[u]);o.originalType=e,o.mdxType="string"==typeof e?e:n,i[1]=o;for(var l=2;l<a;l++)i[l]=t[l];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);