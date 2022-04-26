"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8625],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var a=n(7378);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function r(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,l=function(t,e){if(null==t)return{};var n,a,l={},r=Object.keys(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)n=r[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=a.createContext({}),u=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m=function(t){var e=u(t.components);return a.createElement(p.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},s=a.forwardRef((function(t,e){var n=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),s=u(n),c=l,k=s["".concat(p,".").concat(c)]||s[c]||d[c]||r;return n?a.createElement(k,i(i({ref:e},m),{},{components:n})):a.createElement(k,i({ref:e},m))}));function c(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=n.length,i=new Array(r);i[0]=s;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:l,i[1]=o;for(var u=2;u<r;u++)i[u]=n[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}s.displayName="MDXCreateElement"},2146:function(t,e,n){n.r(e),n.d(e,{assets:function(){return m},contentTitle:function(){return p},default:function(){return c},frontMatter:function(){return o},metadata:function(){return u},toc:function(){return d}});var a=n(3117),l=n(102),r=(n(7378),n(3905)),i=["components"],o={},p="Select",u={unversionedId:"Components/DATA INPUT/select",id:"Components/DATA INPUT/select",title:"Select",description:"The Select component allows users pick a value from predefined options.",source:"@site/i18n/en/docusaurus-plugin-content-docs/current/Components/DATA INPUT/select.md",sourceDirName:"Components/DATA INPUT",slug:"/Components/DATA INPUT/select",permalink:"/docs/Components/DATA INPUT/select",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"rate",permalink:"/docs/Components/DATA INPUT/rate"},next:{title:"slider",permalink:"/docs/Components/DATA INPUT/slider"}},m={},d=[{value:"Installation",id:"installation",level:2},{value:"Import component",id:"import-component",level:2},{value:"API",id:"api",level:2},{value:"Select Basic Properties",id:"select-basic-properties",level:3},{value:"Select Events",id:"select-events",level:3},{value:"Select-option Basic Properties",id:"select-option-basic-properties",level:3},{value:"Examples",id:"examples",level:2},{value:"Basic Usage",id:"basic-usage",level:3},{value:"Set the error status",id:"set-the-error-status",level:3},{value:"Set the size",id:"set-the-size",level:3},{value:"Set the multiple-choice mode",id:"set-the-multiple-choice-mode",level:3},{value:"Set the max tag count",id:"set-the-max-tag-count",level:3}],s={toc:d};function c(t){var e=t.components,n=(0,l.Z)(t,i);return(0,r.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"select"},"Select"),(0,r.kt)("p",null,"The Select component allows users pick a value from predefined options.  "),(0,r.kt)("h2",{id:"installation"},"Installation"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @illa-design/select\n")),(0,r.kt)("h2",{id:"import-component"},"Import component"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'import { Select } from "@illa-design/select"\n')),(0,r.kt)("h2",{id:"api"},"API"),(0,r.kt)("h3",{id:"select-basic-properties"},"Select Basic Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"defaultValue"),(0,r.kt)("td",{parentName:"tr",align:null},"The defalut value"),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," string[] ","|"," number ","|","  number[] ","|"," LabelValue ","|"," LabelValue[]"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"The value"),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," string[] ","|"," number ","|"," number[] ","|"," LabelValue ","|"," LabelValue[]"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"mode"),(0,r.kt)("td",{parentName:"tr",align:null},"Mutiple choices mode and tags mode"),(0,r.kt)("td",{parentName:"tr",align:null},'"multiple" ',"|",' "tags"'),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"notFoundContent"),(0,r.kt)("td",{parentName:"tr",align:null},"When there is no content"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"getPopupContainer"),(0,r.kt)("td",{parentName:"tr",align:null},"The container of the popup"),(0,r.kt)("td",{parentName:"tr",align:null},"(node: HTMLElement) => Element"),(0,r.kt)("td",{parentName:"tr",align:null},'"circle"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"placeholder"),(0,r.kt)("td",{parentName:"tr",align:null},"The placeholder of the select"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"showSearch"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, show search button"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean ","|"," {retainInputValue?: boolean; retainInputValueWhileSelect?: boolean }"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"size"),(0,r.kt)("td",{parentName:"tr",align:null},"Size of the select"),(0,r.kt)("td",{parentName:"tr",align:null},'"small" ',"|",' "medium" ',"|",' "large"'),(0,r.kt)("td",{parentName:"tr",align:null},'"medium"')),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the select is disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"error"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the select is invalid"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"loading"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the select is loading"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"allowClear"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, show the clear button"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"maxTagCount"),(0,r.kt)("td",{parentName:"tr",align:null},"The max tag count of the select when on tags mode"),(0,r.kt)("td",{parentName:"tr",align:null},"number"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"arrowIcon"),(0,r.kt)("td",{parentName:"tr",align:null},"The arrow icon element to use in the select"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"removeIcon"),(0,r.kt)("td",{parentName:"tr",align:null},"The remove icon element to use in the select"),(0,r.kt)("td",{parentName:"tr",align:null},"ReactNode ","|"," null"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"select-events"},"Select Events"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClick"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when on click"),(0,r.kt)("td",{parentName:"tr",align:null},"(e) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onFocus"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when on focus"),(0,r.kt)("td",{parentName:"tr",align:null},"(e) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onBlur"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when on blur"),(0,r.kt)("td",{parentName:"tr",align:null},"(e) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onChange"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when the value change"),(0,r.kt)("td",{parentName:"tr",align:null},"(value, option: OptionInfo ","|"," OptionInfo[]) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onDeselect"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when deselect"),(0,r.kt)("td",{parentName:"tr",align:null},"(value: string ","|"," number ","|"," LabeledValue, option:OptionInfo) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onClear"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when clear"),(0,r.kt)("td",{parentName:"tr",align:null},"(visible: boolean) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onSearch"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when search"),(0,r.kt)("td",{parentName:"tr",align:null},"(value: string, reason: InputValueChangeReason) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onPopupScroll"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when scroll the popup"),(0,r.kt)("td",{parentName:"tr",align:null},"(elem) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"onVisibleChange"),(0,r.kt)("td",{parentName:"tr",align:null},"Callback when is not visible"),(0,r.kt)("td",{parentName:"tr",align:null},"(visible: boolean) => void"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h3",{id:"select-option-basic-properties"},"Select-option Basic Properties"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Props"),(0,r.kt)("th",{parentName:"tr",align:null},"Desc"),(0,r.kt)("th",{parentName:"tr",align:null},"Type"),(0,r.kt)("th",{parentName:"tr",align:null},"Default"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"If true, the option is disabled"),(0,r.kt)("td",{parentName:"tr",align:null},"boolean"),(0,r.kt)("td",{parentName:"tr",align:null},"false")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"title"),(0,r.kt)("td",{parentName:"tr",align:null},"The title of the option"),(0,r.kt)("td",{parentName:"tr",align:null},"string"),(0,r.kt)("td",{parentName:"tr",align:null},"-")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},"value"),(0,r.kt)("td",{parentName:"tr",align:null},"The value of the option"),(0,r.kt)("td",{parentName:"tr",align:null},"string ","|"," number"),(0,r.kt)("td",{parentName:"tr",align:null},"-")))),(0,r.kt)("h2",{id:"examples"},"Examples"),(0,r.kt)("h3",{id:"basic-usage"},"Basic Usage"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Select value={"A"}>\n  <Option>A</Option>\n  <Option>B</Option>\n  <Option>C</Option>\n</Select>\n')),(0,r.kt)("h3",{id:"set-the-error-status"},"Set the error status"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"<Select value={1} options={[1, 2, 3]} error />\n")),(0,r.kt)("h3",{id:"set-the-size"},"Set the size"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Select value={1} options={[1, 2, 3]} size="large"\n')),(0,r.kt)("h3",{id:"set-the-multiple-choice-mode"},"Set the multiple-choice mode"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Select value={[1, 2]} options={[1, 2, 3]} mode="multiple" labelInValue />\n')),(0,r.kt)("h3",{id:"set-the-max-tag-count"},"Set the max tag count"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},'<Select value={[1, 2]} options={[1, 2, 3]} maxTagCount={1} mode="tags" />\n')))}c.isMDXComponent=!0}}]);