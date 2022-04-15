"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[6718],{457:function(t,a,e){e.r(a),e.d(a,{assets:function(){return c},code:function(){return v},contentTitle:function(){return u},default:function(){return b},frontMatter:function(){return m},importStatement:function(){return g},metadata:function(){return k},packages:function(){return h},toc:function(){return N}});var n=e(7462),r=e(3366),l=e(7378),i=e(3905),p=e(7219),o=(e(9586),e(3725)),d=function(t){var a=t.code,e=void 0===a?"<div>Hello,illa-design</div>":a,n=t.template,r=void 0===n?"react":n,i=t.packages,d=t.importStatement,s=void 0===d?"":d,m=(0,o.If)().isDarkTheme,u=(0,l.useMemo)((function(){return s+"\n\nexport default function App() {\n  return ("+e+"\n  )\n}"}),[s,e]);return l.createElement(p.oT,{template:r,customSetup:{dependencies:i,files:{"/App.tsx":u}}},l.createElement(p.sp,{style:{display:"block"},theme:m?"dark":"light"},l.createElement(p.Gj,null),l.createElement(p._V,{showTabs:!0,showLineNumbers:!0,showInlineErrors:!0,closableTabs:!0})))},s=["components"],m={},u="Avatar",k={unversionedId:"COMPONENTS/DATA-DISPLAY/avatar",id:"COMPONENTS/DATA-DISPLAY/avatar",title:"Avatar",description:"The Avatar component is used to represent a user and displays the pictures, text or icon.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/COMPONENTS/DATA-DISPLAY/avatar.md",sourceDirName:"COMPONENTS/DATA-DISPLAY",slug:"/COMPONENTS/DATA-DISPLAY/avatar",permalink:"/docs/COMPONENTS/DATA-DISPLAY/avatar",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/COMPONENTS/DATA-DISPLAY/avatar.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Intro",permalink:"/docs/intro"},next:{title:"Badge",permalink:"/docs/COMPONENTS/DATA-DISPLAY/badge"}},c={},N=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Avatar Basic Properties",id:"avatar-basic-properties",level:3},{value:"Avatar-group Basic Properties",id:"avatar-group-basic-properties",level:3},{value:"Avatar Events",id:"avatar-events",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3},{value:"Set Avatar&#39;s size",id:"set-avatars-size",level:3},{value:"Set Avatar&#39;s shape and color",id:"set-avatars-shape-and-color",level:3},{value:"Set Avatar&#39;s icon",id:"set-avatars-icon",level:3},{value:"Set Avatar&#39;s image",id:"set-avatars-image",level:3},{value:"Set Avatar&#39;s text",id:"set-avatars-text",level:3},{value:"Set Avatar-group&#39;s max count",id:"set-avatar-groups-max-count",level:3}],v='\n    <>\n      <Avatar />\n      <Avatar size="small">Small</Avatar>\n      <Avatar shape="square" colorScheme="red">Small</Avatar>\n      <Avatar src=\'https://bit.ly/dan-abramov\' />\n      <Avatar text="e" />\n    </>',g="import { Avatar } from '@illa-design/avatar'",h={"@illa-design/avatar":"latest"},A={toc:N,code:v,importStatement:g,packages:h};function b(t){var a=t.components,e=(0,r.Z)(t,s);return(0,i.kt)("wrapper",(0,n.Z)({},A,e,{components:a,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"avatar"},"Avatar"),(0,i.kt)("p",null,"The Avatar component is used to represent a user and displays the pictures, text or icon."),(0,i.kt)("h2",{id:"installation"},"Installation"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"yarn add @illa-design/avatar\n")),(0,i.kt)("h2",{id:"import-component"},"Import component"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Avatar } from "@illa-dedign/avatar"\n')),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"avatar-basic-properties"},"Avatar Basic Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Props"),(0,i.kt)("th",{parentName:"tr",align:null},"Desc"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,i.kt)("td",{parentName:"tr",align:null},"Color of avatar"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"white" \\| "blackAlpha" \\| "gray" \\| "grayBlue" \\| "red" \\| "orange" \\| "yellow" \\|"green" \\|"blue" \\|"cyan" \\|"purple" ')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"gray"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"src"),(0,i.kt)("td",{parentName:"tr",align:null},"The image url of avatar"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| string[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"size"),(0,i.kt)("td",{parentName:"tr",align:null},"Size of the avatar"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"small" \\| "medium" \\| "large"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"small"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"text"),(0,i.kt)("td",{parentName:"tr",align:null},"The displayed  text of the avatar when src is not loaded"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"string \\| string[]")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"shape"),(0,i.kt)("td",{parentName:"tr",align:null},"The shape of avatar"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"circle" \\| "square" ')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"circle"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"icon"),(0,i.kt)("td",{parentName:"tr",align:null},"The default avatar when text and src is not specified"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"ReactNode")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-"))))),(0,i.kt)("h3",{id:"avatar-group-basic-properties"},"Avatar-group Basic Properties"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Props"),(0,i.kt)("th",{parentName:"tr",align:null},"Desc"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"colorScheme"),(0,i.kt)("td",{parentName:"tr",align:null},"Color of avatar group"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"white" \\| "blackAlpha" \\| "gray" \\| "grayBlue" \\| "red" \\| "orange" \\| "yellow" \\| "green" \\| "blue" \\|"cyan" \\|"purple" ')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"gray"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"size"),(0,i.kt)("td",{parentName:"tr",align:null},"Size of avatar group"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"small" \\| "medium" \\| "large"')),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},'"small"'))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"maxCount"),(0,i.kt)("td",{parentName:"tr",align:null},"The max count of avatar group"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"number ")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zIndexAscend"),(0,i.kt)("td",{parentName:"tr",align:null},"The avatars are z-index ascend or not"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"boolean")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"false"))))),(0,i.kt)("h3",{id:"avatar-events"},"Avatar Events"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Props"),(0,i.kt)("th",{parentName:"tr",align:null},"Desc"),(0,i.kt)("th",{parentName:"tr",align:null},"Type"),(0,i.kt)("th",{parentName:"tr",align:null},"Default"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"onClick"),(0,i.kt)("td",{parentName:"tr",align:null},"Callback when click the avatar"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"() => void")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"-"))))),(0,i.kt)("h2",{id:"example"},"Example"),(0,i.kt)(d,{code:v,packages:h,importStatement:g,template:"react-ts",mdxType:"Sandpack"}),(0,i.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Avatar />\n")),(0,i.kt)("h3",{id:"set-avatars-size"},"Set Avatar's size"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Avatar size="small">Small</Avatar>\n')),(0,i.kt)("h3",{id:"set-avatars-shape-and-color"},"Set Avatar's shape and color"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Avatar shape="saqure" colorScheme="red">Small</Avatar>\n')),(0,i.kt)("h3",{id:"set-avatars-icon"},"Set Avatar's icon"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Avatar icon={<CloseIcon />} />\n")),(0,i.kt)("h3",{id:"set-avatars-image"},"Set Avatar's image"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},"<Avatar src='https://bit.ly/dan-abramov' />\n")),(0,i.kt)("h3",{id:"set-avatars-text"},"Set Avatar's text"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'<Avatar text="e" />\n')),(0,i.kt)("h3",{id:"set-avatar-groups-max-count"},"Set Avatar-group's max count"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-jsx"},'      <AvatarGroup maxCount={2}>\n        <Avatar text="I" />\n        <Avatar text="L" />\n        <Avatar text="L" />\n        <Avatar text="A" /> \n      </AvatarGroup>\n')))}b.isMDXComponent=!0}}]);