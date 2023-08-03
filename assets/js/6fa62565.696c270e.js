"use strict";(self.webpackChunkwayne_local=self.webpackChunkwayne_local||[]).push([[616],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),p=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(u.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(r),d=a,f=c["".concat(u,".").concat(d)]||c[d]||m[d]||i;return r?n.createElement(f,l(l({ref:t},s),{},{components:r})):n.createElement(f,l({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=d;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},4700:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:1,title:"whitelist"},l="whitelist",o={unversionedId:"Configuration/wl",id:"Configuration/wl",title:"whitelist",description:"whitelist est une commande ex\xe9cutable uniquement par le propri\xe9taire du serveur.",source:"@site/bot/Configuration/wl.md",sourceDirName:"Configuration",slug:"/Configuration/wl",permalink:"/bot/Configuration/wl",draft:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,title:"whitelist"},sidebar:"botSidebar",previous:{title:"WAYNE",permalink:"/bot/intro"},next:{title:"unwhitelist",permalink:"/bot/Configuration/unwl"}},u={},p=[{value:"Alias",id:"alias",level:2},{value:"Usage",id:"usage",level:2},{value:"Param\xe8tres",id:"param\xe8tres",level:3},{value:"Exemple",id:"exemple",level:2}],s={toc:p},c="wrapper";function m(e){let{components:t,...r}=e;return(0,a.kt)(c,(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"whitelist"},"whitelist"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"whitelist")," est une commande ex\xe9cutable uniquement par le propri\xe9taire du serveur.",(0,a.kt)("br",{parentName:"p"}),"\n","Cette commande donne des permissions sur le bot \xe0 l'utilisateur s\xe9lectionn\xe9 sans lui donner de permissions sur le serveur.",(0,a.kt)("br",{parentName:"p"}),"\n","(Par exemple, un simple membre mais whitelist pourra cr\xe9er un giveaway.)"),(0,a.kt)("h2",{id:"alias"},"Alias"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"wl")),(0,a.kt)("h2",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{prefix}whitelist [utilisateur]\n")),(0,a.kt)("h3",{id:"param\xe8tres"},"Param\xe8tres"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Champ"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Description"),(0,a.kt)("th",{parentName:"tr",align:null},"Requis"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"utilisateur"),(0,a.kt)("td",{parentName:"tr",align:null},"mention ou ID"),(0,a.kt)("td",{parentName:"tr",align:null},"Utilisateur \xe0 ajouter \xe0 la whitelist"),(0,a.kt)("td",{parentName:"tr",align:null},"oui")))),(0,a.kt)("h2",{id:"exemple"},"Exemple"),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://i.imgur.com/JSNZLBc.png",alt:"ex"})))}m.isMDXComponent=!0}}]);