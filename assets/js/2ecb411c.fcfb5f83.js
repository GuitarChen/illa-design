"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[9917],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var a=n(7378);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),k=p(n),d=r,c=k["".concat(s,".").concat(d)]||k[d]||m[d]||l;return n?a.createElement(c,o(o({ref:t},u),{},{components:n})):a.createElement(c,o({ref:t},u))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},9634:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return s},default:function(){return d},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return m}});var a=n(3117),r=n(102),l=(n(7378),n(3905)),o=["components"],i={},s=void 0,p={unversionedId:"Components/FEEDBACK/skeleton",id:"Components/FEEDBACK/skeleton",title:"skeleton",description:"Skeleton is used for display the loading state of some components.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Components/FEEDBACK/skeleton.md",sourceDirName:"Components/FEEDBACK",slug:"/Components/FEEDBACK/skeleton",permalink:"/docs/Components/FEEDBACK/skeleton",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"result",permalink:"/docs/Components/FEEDBACK/result"},next:{title:"spin",permalink:"/docs/Components/FEEDBACK/spin"}},u={},m=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Skeleton Basic Properties",id:"skeleton-basic-properties",level:3},{value:"SkeletonImageProps",id:"skeletonimageprops",level:3},{value:"SkeletonTextProps",id:"skeletontextprops",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set row number of text&#39;s skeleton",id:"set-row-number-of-texts-skeleton",level:3},{value:"custom last row width",id:"custom-last-row-width",level:3},{value:"custom all row width",id:"custom-all-row-width",level:3},{value:"With image skeleton",id:"with-image-skeleton",level:3},{value:"Set square image skeleton",id:"set-square-image-skeleton",level:3},{value:"with animation",id:"with-animation",level:3}],k={toc:m};function d(e){var t=e.components,n=(0,r.Z)(e,o);return(0,l.kt)("wrapper",(0,a.Z)({},k,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"skeleton"},"Skeleton"),(0,l.kt)("p",null,"Skeleton is used for display the loading state of some components."),(0,l.kt)("h2",{id:"installation"},"Installation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/skeleton\n")),(0,l.kt)("h2",{id:"import-component"},"Import component"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Skeleton } from "@illa-dedign/skeleton"\n')),(0,l.kt)("h2",{id:"api"},"API"),(0,l.kt)("h3",{id:"skeleton-basic-properties"},"Skeleton Basic Properties"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"animation"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether show animation"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"visible"),(0,l.kt)("td",{parentName:"tr",align:null},"whether is visible"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"image"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether show image skeleton"),(0,l.kt)("td",{parentName:"tr",align:null},"SkeletonImageProps ","|"," boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"text"),(0,l.kt)("td",{parentName:"tr",align:null},"Whether show text skeleton"),(0,l.kt)("td",{parentName:"tr",align:null},"SkeletonTextProps ","|"," boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"true")))),(0,l.kt)("h3",{id:"skeletonimageprops"},"SkeletonImageProps"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"shape"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the shape of  image skeleton"),(0,l.kt)("td",{parentName:"tr",align:null},'"circle" ',"|",' "square"'),(0,l.kt)("td",{parentName:"tr",align:null},'"circle"')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"size"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Set the size of image skeleton"),(0,l.kt)("td",{parentName:"tr",align:null},"number ","|",' "large" ',"|",' "small" ',"|",' "medium"'),(0,l.kt)("td",{parentName:"tr",align:null},'"medium"')))),(0,l.kt)("h3",{id:"skeletontextprops"},"SkeletonTextProps"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Props"),(0,l.kt)("th",{parentName:"tr",align:null},"Desc"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"rows"),(0,l.kt)("td",{parentName:"tr",align:null},"Set row number of text skeleton"),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"width"),(0,l.kt)("td",{parentName:"tr",align:null},"Set rows' width"),(0,l.kt)("td",{parentName:"tr",align:null},"number ","|"," string ","|"," Array<number ","|"," string>"),(0,l.kt)("td",{parentName:"tr",align:null},"0.8")))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Skeleton />\n")),(0,l.kt)("h3",{id:"set-row-number-of-texts-skeleton"},"Set row number of text's skeleton"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Skeleton text={{ rows: 10 }} />\n")),(0,l.kt)("h3",{id:"custom-last-row-width"},"custom last row width"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Skeleton text={{ rows: 5, width: "60%" }} />\n')),(0,l.kt)("h3",{id:"custom-all-row-width"},"custom all row width"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Skeleton text={{ rows: 5, width: ["20%", "40%", "60%", 200, 400] }} />\n')),(0,l.kt)("h3",{id:"with-image-skeleton"},"With image skeleton"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Skeleton image />\n")),(0,l.kt)("h3",{id:"set-square-image-skeleton"},"Set square image skeleton"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},'<Skeleton image={{ shape: "square" }} />\n')),(0,l.kt)("h3",{id:"with-animation"},"with animation"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-jsx"},"<Skeleton image animation />\n")))}d.isMDXComponent=!0}}]);