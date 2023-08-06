"use strict";(self.webpackChunkwayne_local=self.webpackChunkwayne_local||[]).push([[4413],{3905:(e,n,t)=>{t.d(n,{Zo:()=>d,kt:()=>h});var a=t(7294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=a.createContext({}),p=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},d=function(e){var n=p(e.components);return a.createElement(l.Provider,{value:n},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},m=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=p(t),m=r,h=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return t?a.createElement(h,s(s({ref:n},d),{},{components:t})):a.createElement(h,s({ref:n},d))}));function h(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=m;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i[c]="string"==typeof e?e:r,s[1]=i;for(var p=2;p<o;p++)s[p]=t[p];return a.createElement.apply(null,s)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},6366:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=t(7462),r=(t(7294),t(3905));const o={sidebar_position:4},s="Cr\xe9er des slashs en aoi.js",i={unversionedId:"Guides/slashs",id:"Guides/slashs",title:"Cr\xe9er des slashs en aoi.js",description:"Les commandes slashs sont des commandes pour faciliter la recherche des commandes d'un bot, apparentes en marquant / sur son clavier.",source:"@site/docs/Guides/slashs.md",sourceDirName:"Guides",slug:"/Guides/slashs",permalink:"/docs/Guides/slashs",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Cr\xe9er des embeds en aoi.js",permalink:"/docs/Guides/embeds"},next:{title:"Codes",permalink:"/docs/Codes/"}},l={},p=[{value:"La m\xe9thode sans package",id:"la-m\xe9thode-sans-package",level:2},{value:"La m\xe9thode avec package",id:"la-m\xe9thode-avec-package",level:2},{value:"Code",id:"code",level:3},{value:"Quelques infos avant de vous quitter !",id:"quelques-infos-avant-de-vous-quitter-",level:2},{value:"{options}",id:"options",level:3},{value:"{extraOptions}",id:"extraoptions",level:3},{value:"{newEmbed}",id:"newembed",level:3},{value:"{actionRow}",id:"actionrow",level:3},{value:"button",id:"button",level:4},{value:"selectMenu",id:"selectmenu",level:4},{value:"Modal",id:"modal",level:4}],d={toc:p},c="wrapper";function u(e){let{components:n,...t}=e;return(0,r.kt)(c,(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cr\xe9er-des-slashs-en-aoijs"},"Cr\xe9er des slashs en aoi.js"),(0,r.kt)("p",null,"Les commandes slashs sont des commandes pour faciliter la recherche des commandes d'un bot, apparentes en marquant ",(0,r.kt)("inlineCode",{parentName:"p"},"/")," sur son clavier.\nElles sont compt\xe9 commes des int\xe9ractions par l'API discord."),(0,r.kt)("admonition",{title:"Note",type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Il existe 2 fa\xe7ons de r\xe9pondre \xe0 une commande slash en aoi mais qu'une seule sans package.")),(0,r.kt)("h2",{id:"la-m\xe9thode-sans-package"},"La m\xe9thode sans package"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports ={\n    name:"slashCmdName",\n    type:"interaction",\n    prototype:"slash",\n    code:`\n    $interactionReply[Salut !;;;;all;true]\n    `\n}\n')),(0,r.kt)("h2",{id:"la-m\xe9thode-avec-package"},"La m\xe9thode avec package"),(0,r.kt)("admonition",{title:"Avant d'utiliser cette m\xe9thode",type:"caution"},(0,r.kt)("p",{parentName:"admonition"},"Le package aoi.parser doit \xeatre install\xe9 !"),(0,r.kt)("pre",{parentName:"admonition"},(0,r.kt)("code",{parentName:"pre"},"npm i @akarui/aoi.parser\n")),(0,r.kt)("p",{parentName:"admonition"},"Dans votre powershell / terminal")),(0,r.kt)("h3",{id:"code"},"Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'module.exports ={\n    name:"slashCmdName",\n    type:"interaction",\n    prototype:"slash",\n    code:`\n    $sendMessage[Salut !{extraOptions:{interaction:true}}]\n    `\n}\n')),(0,r.kt)("h2",{id:"quelques-infos-avant-de-vous-quitter-"},"Quelques infos avant de vous quitter !"),(0,r.kt)("h3",{id:"options"},"{options}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{options:\n    {ephemeral:boolean}\n    {allowedMention:\n        {parse:\n            users:\n            roles\n        }\n        {users:\n            User IDs\n        }\n        {roles:\n            Role IDs\n        }\n    }\n    {reply:messageID}\n}\n")),(0,r.kt)("h3",{id:"extraoptions"},"{extraOptions}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{extraOptions:\n    {interaction:boolean}\n}\n")),(0,r.kt)("h3",{id:"newembed"},"{newEmbed}"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{title:Title}\n{description:Description}\n{url:https://wa-y-ne.github.io/}\n{timestamp}\n{color: #ffffff}\n{footer:Name:https://imgur.com/yD6GFOB.png}\n{image:https://imgur.com/yD6GFOB.png}\n{thumbnail:https://imgur.com/yD6GFOB.png}\n{author:Name:https://imgur.com/yD6GFOB.png}\n{field:Title:Description:no/yes}\n")),(0,r.kt)("h3",{id:"actionrow"},"{actionRow}"),(0,r.kt)("h4",{id:"button"},"button"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{button:\n    button:\n        label:  \n        style:  \n        customId: \n        disabled: \n        emoji\n}\n")),(0,r.kt)("h4",{id:"selectmenu"},"selectMenu"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{stringInput:\n    customId:\n    placeholder:\n    minValues:\n    maxValues:\n    disabled:\n    {option:\n        label:\n        value:\n        description:\n        default:\n        emoji\n    }\n    {option:...}\n}\n")),(0,r.kt)("h4",{id:"modal"},"Modal"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"{textInput: \n    label: \n    style: \n    customId: \n    placeholder: \n    required: value: \n    minLength: maxLength\n}\n")))}u.isMDXComponent=!0}}]);