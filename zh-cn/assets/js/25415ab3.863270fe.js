"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3594],{3905:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return v}});var n=r(7378);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var d=n.createContext({}),c=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,a=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(r),v=i,m=u["".concat(d,".").concat(v)]||u[v]||s[v]||a;return r?n.createElement(m,l(l({ref:t},p),{},{components:r})):n.createElement(m,l({ref:t},p))}));function v(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=r.length,l=new Array(a);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<a;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},8421:function(e,t,r){r.r(t),r.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return o},metadata:function(){return c},toc:function(){return s}});var n=r(7462),i=r(3366),a=(r(7378),r(3905)),l=["components"],o={},d="Divider",c={unversionedId:"COMPONENTS/LAYOUT/divider",id:"COMPONENTS/LAYOUT/divider",title:"Divider",description:"Divider is used to visually separate content",source:"@site/docs/COMPONENTS/LAYOUT/divider.md",sourceDirName:"COMPONENTS/LAYOUT",slug:"/COMPONENTS/LAYOUT/divider",permalink:"/zh-cn/docs/COMPONENTS/LAYOUT/divider",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/COMPONENTS/LAYOUT/divider.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6587\u5b57\u6392\u7248",permalink:"/zh-cn/docs/COMPONENTS/GENERAL/typography"},next:{title:"grid",permalink:"/zh-cn/docs/COMPONENTS/LAYOUT/grid"}},p={},s=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Divider Basic Properties",id:"divider-basic-properties",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set Divider&#39;s direction",id:"set-dividers-direction",level:3},{value:"Set Divider&#39;s variant",id:"set-dividers-variant",level:3}],u={toc:s};function v(e){var t=e.components,r=(0,i.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"divider"},"Divider"),(0,a.kt)("p",null,"Divider is used to visually separate content"),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/divider\n")),(0,a.kt)("h2",{id:"import-component"},"Import component"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Divider } from "@illa-design/divider"\n')),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"divider-basic-properties"},"Divider Basic Properties"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"Props"),(0,a.kt)("th",{parentName:"tr",align:null},"Desc"),(0,a.kt)("th",{parentName:"tr",align:null},"Type"),(0,a.kt)("th",{parentName:"tr",align:null},"Default"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"direction"),(0,a.kt)("td",{parentName:"tr",align:null},"setting direction of divider"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},'"vertical" \\| "horizontal"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"horizontal"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"variant"),(0,a.kt)("td",{parentName:"tr",align:null},"setting divider's variant"),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},' "solid" \\| "dashed" \\| "dotted" \\| "double"')),(0,a.kt)("td",{parentName:"tr",align:null},(0,a.kt)("inlineCode",{parentName:"td"},"solid"))))),(0,a.kt)("h2",{id:"example"},"Example"),(0,a.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"<Divider />\n")),(0,a.kt)("h3",{id:"set-dividers-direction"},"Set Divider's direction"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Divider />\n<Divider direction="vertical" />\n')),(0,a.kt)("h3",{id:"set-dividers-variant"},"Set Divider's variant"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},'<Divider />\n<Divider direction="vertical" />\n<Divider variant="dashed" />\n<Divider variant="dotted" />\n<Divider variant="double" />\n')))}v.isMDXComponent=!0}}]);