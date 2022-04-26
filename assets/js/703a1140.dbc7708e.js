"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3007],{3905:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return k}});var n=a(7378);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function p(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var o=n.createContext({}),d=function(t){var e=n.useContext(o),a=e;return t&&(a="function"==typeof t?t(e):p(p({},e),t)),a},m=function(t){var e=d(t.components);return n.createElement(o.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,o=t.parentName,m=i(t,["components","mdxType","originalType","parentName"]),g=d(a),k=l,N=g["".concat(o,".").concat(k)]||g[k]||u[k]||r;return a?n.createElement(N,p(p({ref:e},m),{},{components:a})):n.createElement(N,p({ref:e},m))}));function k(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,p=new Array(r);p[0]=g;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i.mdxType="string"==typeof t?t:l,p[1]=i;for(var d=2;d<r;d++)p[d]=a[d];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},511:function(t,e,a){a.r(e),a.d(e,{assets:function(){return m},contentTitle:function(){return o},default:function(){return k},frontMatter:function(){return i},metadata:function(){return d},toc:function(){return u}});var n=a(3117),l=a(102),r=(a(7378),a(3905)),p=["components"],i={},o=void 0,d={unversionedId:"Components/GENERAL/typography",id:"Components/GENERAL/typography",title:"typography",description:"Typography is used to show text information. It has 3 child component: Heading, Text, Paragraph.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Components/GENERAL/typography.md",sourceDirName:"Components/GENERAL",slug:"/Components/GENERAL/typography",permalink:"/docs/Components/GENERAL/typography",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"link",permalink:"/docs/Components/GENERAL/link"},next:{title:"divider",permalink:"/docs/Components/LAYOUT/divider"}},m={},u=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Typography Basic Properties",id:"typography-basic-properties",level:3},{value:"Heading Basic Properties",id:"heading-basic-properties",level:3},{value:"Text Basic Properties",id:"text-basic-properties",level:3},{value:"Paragraph Basic Properties",id:"paragraph-basic-properties",level:3},{value:"ellipsisConfig",id:"ellipsisconfig",level:3},{value:"copyableConfig",id:"copyableconfig",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Text style",id:"text-style",level:3},{value:"Paragraph indent",id:"paragraph-indent",level:3},{value:"Ellipsis text",id:"ellipsis-text",level:3},{value:"Copyable text",id:"copyable-text",level:3}],g={toc:u};function k(t){var e=t.components,a=(0,l.Z)(t,p);return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"typography"},"Typography"),(0,r.kt)("p",null,"Typography is used to show text information. It has 3 child component: Heading, Text, Paragraph."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/typography\n")),(0,r.kt)("h2",{id:"import-component"},"Import component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Typography } from "@illa-design/typography"\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"typography-basic-properties"},"Typography Basic Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"style"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional style"),(0,r.kt)("td",{parentName:"tr",align:null},"CSSProperties"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"className"),(0,r.kt)("td",{parentName:"tr",align:null},"Additional css class"),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," string[]"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"heading-basic-properties"},"Heading Basic Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"Set font color"),(0,r.kt)("td",{parentName:"tr",align:null},'"white"',"|",' "blackAlpha" ',"|",' "gray" ',"|",' "grayBlue" ',"|",' "red" ',"|",' "orange" ',"|",' "yellow" ',"|",' "green"  ',"|",' "blue" ',"|",' "cyan" ',"|",' "purple" ',"|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},'"blackAlpha"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"level"),(0,r.kt)("td",{parentName:"tr",align:null},"Heading level"),(0,r.kt)("td",{parentName:"tr",align:null},'"h1" ',"|",' "h2" ',"|",' "h3" ',"|",' "h4" ',"|",' "h5" ',"|",' "h6"'),(0,r.kt)("td",{parentName:"tr",align:null},'"h2"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bold"),(0,r.kt)("td",{parentName:"tr",align:null},"Set bold style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Set disable style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mark"),(0,r.kt)("td",{parentName:"tr",align:null},"Set mark style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ","|"," colorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"underline"),(0,r.kt)("td",{parentName:"tr",align:null},"Underline  style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Strikethrough style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"Code block style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copyable"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to be copyable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ","|"," copyableConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ellipsis"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto overflow omitted"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ","|"," ellipsisConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"text-basic-properties"},"Text Basic Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"Set font color"),(0,r.kt)("td",{parentName:"tr",align:null},'"white"',"|",' "blackAlpha" ',"|",' "gray" ',"|",' "grayBlue" ',"|",' "red" ',"|",' "orange" ',"|",' "yellow" ',"|",' "green"  ',"|",' "blue" ',"|",' "cyan" ',"|",' "purple" ',"|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},'"blackAlpha"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fontSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Font size"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"14px"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bold"),(0,r.kt)("td",{parentName:"tr",align:null},"Set bold style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Set disable style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mark"),(0,r.kt)("td",{parentName:"tr",align:null},"Set mark style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ","|"," colorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"underline"),(0,r.kt)("td",{parentName:"tr",align:null},"Underline  style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Strikethrough style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"Code block style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copyable"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to be copyable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ","|"," copyableConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ellipsis"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto overflow omitted"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ","|"," ellipsisConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"paragraph-basic-properties"},"Paragraph Basic Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"Set font color"),(0,r.kt)("td",{parentName:"tr",align:null},'"white"',"|",' "blackAlpha" ',"|",' "gray" ',"|",' "grayBlue" ',"|",' "red" ',"|",' "orange" ',"|",' "yellow" ',"|",' "green"  ',"|",' "blue" ',"|",' "cyan" ',"|",' "purple" ',"|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},'"blackAlpha"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"fontSize"),(0,r.kt)("td",{parentName:"tr",align:null},"Font size"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},'"14px"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"indent"),(0,r.kt)("td",{parentName:"tr",align:null},"Text indent"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"bold"),(0,r.kt)("td",{parentName:"tr",align:null},"Set bold style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Set disable style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mark"),(0,r.kt)("td",{parentName:"tr",align:null},"Set mark style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ","|"," colorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"underline"),(0,r.kt)("td",{parentName:"tr",align:null},"Underline  style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"delete"),(0,r.kt)("td",{parentName:"tr",align:null},"Strikethrough style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"code"),(0,r.kt)("td",{parentName:"tr",align:null},"Code block style"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copyable"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to be copyable"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ","|"," copyableConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"ellipsis"),(0,r.kt)("td",{parentName:"tr",align:null},"Auto overflow omitted"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ","|"," EllipsisConfig"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"ellipsisconfig"},"ellipsisConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expandable"),(0,r.kt)("td",{parentName:"tr",align:null},"whether to support expand"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"rows"),(0,r.kt)("td",{parentName:"tr",align:null},"The number of omitted rows"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"2")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"suffix"),(0,r.kt)("td",{parentName:"tr",align:null},"Suffix"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expandLabel"),(0,r.kt)("td",{parentName:"tr",align:null},"Configure expand elements"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"tooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"Show Tooltip when configure ellipsis"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onExpand"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when expand omitted content"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"copyableconfig"},"copyableConfig"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copyIcon"),(0,r.kt)("td",{parentName:"tr",align:null},"Set copy icon"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copiedIcon"),(0,r.kt)("td",{parentName:"tr",align:null},"Set copied icon"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copyTooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"Set copy tooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"copiedTooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"Set copied tooltip"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onCopy"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when content is copied"),(0,r.kt)("td",{parentName:"tr",align:null},"() => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Typograph>\n  <Heading>I am a title.</Heading>\n  <Paragraph>I am a paragraph.</Paragraph>\n  <Text>I am text.</Text>\n</Typograph>\n")),(0,r.kt)("h3",{id:"text-style"},"Text style"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Text>\n  ILLA Design \n</Text>\n<Text colorScheme="red">\n  ILLA Design\n</Text>\n<Text bold>\n  Bold\n</Text>\n<Text disabled>\n  Disabled\n</Text>\n<Text mark>\n  Mark\n</Text>\n<Text underline>\n  Underline\n</Text>\n<Text delete>\n  Line through\n</Text>\n<Text code>\n  Code snippet\n</Text>\n')),(0,r.kt)("h3",{id:"paragraph-indent"},"Paragraph indent"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<paragraph indent>\n  I took her hand in mine, and we went out of the ruined place; and, as the morning mists had risen long ago when I first left the forge, so, the evening mists were rising now, and in all the broad expanse of tranquil light they showed to me, I saw no shadow of another parting from her.\n</paragraph>\n\n")),(0,r.kt)("h3",{id:"ellipsis-text"},"Ellipsis text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<paragraph indent ellipsis={new EllipsisBuilder().rows(2).expandable(true).create()}>\n  I took her hand in mine, and we went out of the ruined place; and, as the morning mists had risen long ago when I first left the forge, so, the evening mists were rising now, and in all the broad expanse of tranquil light they showed to me, I saw no shadow of another parting from her.\n</paragraph>\n")),(0,r.kt)("h3",{id:"copyable-text"},"Copyable text"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Text copyable>\n  This is a copyable text.\n</Text>\n")))}k.isMDXComponent=!0}}]);