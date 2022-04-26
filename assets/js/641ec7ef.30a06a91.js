"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[4699],{3905:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return c}});var a=n(7378);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,d=o(t,["components","mdxType","originalType","parentName"]),s=u(n),c=l,g=s["".concat(p,".").concat(c)]||s[c]||m[c]||r;return n?a.createElement(g,i(i({ref:e},d),{},{components:n})):a.createElement(g,i({ref:e},d))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},9765:function(t,e,n){n.r(e),n.d(e,{assets:function(){return d},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return m}});var a=n(3117),l=n(102),r=(n(7378),n(3905)),i=["components"],o={},p="Cascader",u={unversionedId:"Components/DATA INPUT/cascader",id:"Components/DATA INPUT/cascader",title:"Cascader",description:"Cascader is a selector which displays options in multilevel list.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Components/DATA INPUT/cascader.md",sourceDirName:"Components/DATA INPUT",slug:"/Components/DATA INPUT/cascader",permalink:"/docs/Components/DATA INPUT/cascader",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"tree",permalink:"/docs/Components/DATA DISPLAY/tree"},next:{title:"Checkbox",permalink:"/docs/Components/DATA INPUT/checkbox"}},d={},m=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Cascader Basic Properties",id:"cascader-basic-properties",level:3},{value:"Cascader Events",id:"cascader-events",level:3},{value:"OptionProps",id:"optionprops",level:3},{value:"Example",id:"example",level:2},{value:"Basic usage",id:"basic-usage",level:3}],s={toc:m};function c(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"cascader"},"Cascader"),(0,r.kt)("p",null,"Cascader is a selector which displays options in multilevel list."),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/cascader\n")),(0,r.kt)("h2",{id:"import-component"},"Import component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Cascader } from "@illa-design/cascader"\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"cascader-basic-properties"},"Cascader Basic Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"Set placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showSearch"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether allow search"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ","|"," { retainInputValue?: boolean; retainInputValueWhileSelect?: boolean }"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"Set selector's size"),(0,r.kt)("td",{parentName:"tr",align:null},'"small" ',"|",' "medium" ',"|",' "large"'),(0,r.kt)("td",{parentName:"tr",align:null},'"medium"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,r.kt)("td",{parentName:"tr",align:null},"Set defalut value in input"),(0,r.kt)("td",{parentName:"tr",align:null},"(string ","|"," string[])[]"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"Set value"),(0,r.kt)("td",{parentName:"tr",align:null},"(string ","|"," string[])[]"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"options"),(0,r.kt)("td",{parentName:"tr",align:null},"Generate options"),(0,r.kt)("td",{parentName:"tr",align:null},"OptionProps[]"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"expandTrigger"),(0,r.kt)("td",{parentName:"tr",align:null},"Set interaction type for expanding netx level list"),(0,r.kt)("td",{parentName:"tr",align:null},'"click" ',"|",' "hover"'),(0,r.kt)("td",{parentName:"tr",align:null},'"click"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"multiple"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether to allow selecting multiple treeNodes"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"notFoundContent"),(0,r.kt)("td",{parentName:"tr",align:null},"Set the content when options is empty"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the selector is disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the selector is error"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loading"),(0,r.kt)("td",{parentName:"tr",align:null},"whether the selector is loading status"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowClear"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether allow clear values"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowCreate"),(0,r.kt)("td",{parentName:"tr",align:null},"Whether allow create new values"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxTagCount"),(0,r.kt)("td",{parentName:"tr",align:null},"Set maxmium number of tags which is selected"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"arrowIcon"),(0,r.kt)("td",{parentName:"tr",align:null},"Set arrow icon"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"removeIcon"),(0,r.kt)("td",{parentName:"tr",align:null},"Set remove icon"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"cascader-events"},"Cascader Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"filterOption"),(0,r.kt)("td",{parentName:"tr",align:null},"Filter data based on entered value"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"(inputValue: string, option: NodeProps<T>) => boolean")),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onChange"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when value is changed"),(0,r.kt)("td",{parentName:"tr",align:null},"(value: any) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onSearch"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when search value is changed"),(0,r.kt)("td",{parentName:"tr",align:null},"(inputValue: string) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClear"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when clicked clear"),(0,r.kt)("td",{parentName:"tr",align:null},"(visible: boolean) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onVisibleChange"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when the visibility of the popup is changed"),(0,r.kt)("td",{parentName:"tr",align:null},"(visible: boolean) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClick"),(0,r.kt)("td",{parentName:"tr",align:null},"clicks on the drop-down box"),(0,r.kt)("td",{parentName:"tr",align:null},"(e) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"optionprops"},"OptionProps"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"OptionProps {\n  value?: string;\n  label?: string;\n  disabled?: boolean;\n  children?: OptionProps[];\n  isLeaf?: boolean;\n}\n")),(0,r.kt)("h2",{id:"example"},"Example"),(0,r.kt)("h3",{id:"basic-usage"},"Basic usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'const options = [\n  {\n    value: "beijing",\n    label: "Beijing",\n    children: [\n      {\n        value: "chaoyang",\n        label: "Chaoyang",\n        children: [\n          {\n            value: "datunli",\n            label: "Datunli",\n          },\n        ],\n      },\n      {\n        value: "dongcheng",\n        label: "Dongcheng",\n      },\n      {\n        value: "xicheng",\n        label: "Xicheng",\n        disabled: true,\n      },\n      {\n        value: "haidian",\n        label: "Haidian",\n      },\n      {\n        value: "fengtai",\n        label: "fengtai",\n      },\n      {\n        value: "shijingshan",\n        label: "Shijingshan",\n      },\n      {\n        value: "mentougou",\n        label: "Mentougou",\n      },\n      {\n        value: "fangshan",\n        label: "Fangshan",\n      },\n      {\n        value: "tongzhou",\n        label: "Tongzhou",\n      },\n      {\n        value: "shunyi",\n        label: "Shunyi",\n      },\n    ],\n  },\n  {\n    value: "shanghai",\n    label: "Shanghai",\n    children: [\n      {\n        value: "shanghaishi",\n        label: "Shanghai",\n        children: [\n          {\n            value: "huangpu",\n            label: "Huangpu",\n          },\n        ],\n      },\n    ],\n  },\n  {\n    value: "guangdong",\n    label: "Guangdong",\n    children: [\n      {\n        value: "shenzhen",\n        label: "Shenzhen",\n        children: [\n          {\n            value: "nanshan",\n            label:"Nanshan",\n          },\n        ],\n      },\n    ],\n  },\n]\n<Cascader style={{ width: 280 }} multiple options={options} />\n')))}c.isMDXComponent=!0}}]);