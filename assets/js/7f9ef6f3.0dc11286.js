"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1259],{3905:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return d}});var a=n(7378);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function p(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var i=a.createContext({}),u=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},s=function(t){var e=u(t.components);return a.createElement(i.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},c=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,i=t.parentName,s=p(t,["components","mdxType","originalType","parentName"]),c=u(n),d=l,g=c["".concat(i,".").concat(d)]||c[d]||m[d]||r;return n?a.createElement(g,o(o({ref:e},s),{},{components:n})):a.createElement(g,o({ref:e},s))}));function d(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,o=new Array(r);o[0]=c;var p={};for(var i in e)hasOwnProperty.call(e,i)&&(p[i]=e[i]);p.originalType=t,p.mdxType="string"==typeof t?t:l,o[1]=p;for(var u=2;u<r;u++)o[u]=n[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},2184:function(t,e,n){n.r(e),n.d(e,{assets:function(){return s},contentTitle:function(){return i},default:function(){return d},frontMatter:function(){return p},metadata:function(){return u},toc:function(){return m}});var a=n(3117),l=n(102),r=(n(7378),n(3905)),o=["components"],p={},i=void 0,u={unversionedId:"Components/DATA DISPLAY/tooltip",id:"Components/DATA DISPLAY/tooltip",title:"tooltip",description:"A tooltip is a infomative message that appears when a user interacts with an element.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Components/DATA DISPLAY/tooltip.md",sourceDirName:"Components/DATA DISPLAY",slug:"/Components/DATA DISPLAY/tooltip",permalink:"/docs/Components/DATA DISPLAY/tooltip",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"timeline",permalink:"/docs/Components/DATA DISPLAY/timeline"},next:{title:"tree",permalink:"/docs/Components/DATA DISPLAY/tree"}},s={},m=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Tooltip Basic Properties",id:"tooltip-basic-properties",level:3},{value:"Trigger Events",id:"trigger-events",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set popup position",id:"set-popup-position",level:3},{value:"Set popup&#39;s background color",id:"set-popups-background-color",level:3},{value:"Set arrow",id:"set-arrow",level:3},{value:"Set popup&#39;s default visibility status",id:"set-popups-default-visibility-status",level:3},{value:"Set popup&#39;s delay time to open",id:"set-popups-delay-time-to-open",level:3}],c={toc:m};function d(t){var e=t.components,n=(0,l.Z)(t,o);return(0,r.kt)("wrapper",(0,a.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"tooltip"},"Tooltip"),(0,r.kt)("p",null,"A tooltip is a infomative message that appears when a user interacts with an element. "),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/tooltip\n")),(0,r.kt)("h2",{id:"import-component"},"Import component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Tooltip } from "@illa-design/tooltip"\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"tooltip-basic-properties"},"Tooltip Basic Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,r.kt)("td",{parentName:"tr",align:null},"Set background color"),(0,r.kt)("td",{parentName:"tr",align:null},'"white" ',"|",' "blackAlpha" ',"|",' "gray" ',"|",' "grayBlue" ',"|",' "red" ',"|",' "orange" ',"|",' "yellow" ',"|",' "green" ',"|",' "blue"  ',"|",' "cyan" ',"|",' "purple" ',"|"," string"),(0,r.kt)("td",{parentName:"tr",align:null},'"gray"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"content"),(0,r.kt)("td",{parentName:"tr",align:null},"The content shown in popup"),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"trigger"),(0,r.kt)("td",{parentName:"tr",align:null},"Types of events that cause the popup to show"),(0,r.kt)("td",{parentName:"tr",align:null},'"hover" ',"|",' "click" ',"|",' "focus"'),(0,r.kt)("td",{parentName:"tr",align:null},'"hover"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"position"),(0,r.kt)("td",{parentName:"tr",align:null},"The position of the popup relative to the target."),(0,r.kt)("td",{parentName:"tr",align:null},'"top" ',"|",' "tl" ',"|",' "tr" ',"|",' "bottom" ',"|",' "bl" ',"|",' "br" ',"|",' "left" ',"|",' "lt" ',"|",' "lb" ',"|",' "right" ',"|",' "rt" ',"|",' "rb"'),(0,r.kt)("td",{parentName:"tr",align:null},'"top"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showArrow"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to display arrow node"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"closeDelay"),(0,r.kt)("td",{parentName:"tr",align:null},"Delay time to close"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"150")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"openDelay"),(0,r.kt)("td",{parentName:"tr",align:null},"Delay time to show"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"150")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"autoFitPosition"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to automatically adjust the position of the popup according to the viewport"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"closeOnClick"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to close popup when clicking the child node"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"true")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultPopupVisible"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether the popup is visible by default"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"popupVisible"),(0,r.kt)("td",{parentName:"tr",align:null},"Set whether the  popup is visible"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to disable the popup"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"trigger-events"},"Trigger Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onVisibleChange"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when the visibility of the popup is changed"),(0,r.kt)("td",{parentName:"tr",align:null},"(visible: boolean) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip content="Tooltip">\n  <Button>Tooltip</Button>\n</Tooltip>\n')),(0,r.kt)("h3",{id:"set-popup-position"},"Set popup position"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip content="Tooltip" position="bottom">\n  <Button>Tooltip</Button>\n</Tooltip>\n')),(0,r.kt)("h3",{id:"set-popups-background-color"},"Set popup's background color"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip content="Tooltip" position="top" colorScheme="cyan">\n  <Button>Tooltip</Button>\n</Tooltip>\n')),(0,r.kt)("h3",{id:"set-arrow"},"Set arrow"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip content="Tooltip" position="top" colorScheme="cyan" showArrow={false}>\n  <Button>Tooltip</Button>\n</Tooltip>\n')),(0,r.kt)("h3",{id:"set-popups-default-visibility-status"},"Set popup's default visibility status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip content="Tooltip" position="top" colorScheme="cyan" defaultPopupVisible>\n  <Button>Tooltip</Button>\n</Tooltip>\n')),(0,r.kt)("h3",{id:"set-popups-delay-time-to-open"},"Set popup's delay time to open"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Tooltip content="Tooltip" position="top" colorScheme="cyan" openDelay={1000} closeDelay={1000}>\n  <Button>Tooltip</Button>\n</Tooltip>\n')))}d.isMDXComponent=!0}}]);