"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[97],{31887:function(e,r,t){t.d(r,{e:function(){return a},x:function(){return n}});var a=e=>(null==e?void 0:e.length)<=4?e:null==e?void 0:e.slice(0,3),n=(...e)=>{let r=" ";for(let t of e)if("string"==typeof t&&t.length>0){r=t;break}return r}},1144:function(e,r,t){t.d(r,{Z:function(){return i}});var a=t(25566),n={};function i(e,r,...t){var l;let o=r?` [${r}]`:" ",s=`[Next UI]${o}: ${e}`;if("undefined"!=typeof console&&!n[s]&&(n[s]=!0,(null==(l=null==a?void 0:a.env)?void 0:l.NODE_ENV)!=="production"))return console.warn(s,t)}},72912:function(e,r,t){t.d(r,{q:function(){return m}});var a={px:"1px",0:"0px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",11:"2.75rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},n=t(55971),i=(0,t(62751).tv)({base:"w-px h-px inline-block",variants:{isInline:{true:"inline-block",false:"block"}},defaultVariants:{isInline:!1}}),l=t(36222),o=t(53640),s=t(65263),d=t(2265),c=e=>{var r;return null!=(r=a[e])?r:e},u=t(57437),v=(0,n.Gp)((e,r)=>{let{Component:t,getSpacerProps:a}=function(e){let[r,t]=(0,n.oe)(e,i.variantKeys),{as:a,className:u,x:v=1,y:m=1,...f}=r,b=(0,d.useMemo)(()=>i({...t,className:u}),[(0,l.Xx)(t),u]),p=c(v),g=c(m);return{Component:a||"span",getSpacerProps:(e={})=>({...e,...f,"aria-hidden":(0,o.PB)(!0),className:(0,s.W)(b,e.className),style:{...e.style,...f.style,marginLeft:p,marginTop:g}})}}({...e});return(0,u.jsx)(t,{ref:r,...a()})});v.displayName="NextUI.Spacer";var m=v},51446:function(e,r,t){t.d(r,{c:function(){return c}});var a=t(55971),n=(0,t(62751).tv)({slots:{base:"relative inline-flex flex-col gap-2 items-center justify-center",wrapper:"relative flex",circle1:["absolute","w-full","h-full","rounded-full","animate-spinner-ease-spin","border-2","border-solid","border-t-transparent","border-l-transparent","border-r-transparent"],circle2:["absolute","w-full","h-full","rounded-full","opacity-75","animate-spinner-linear-spin","border-2","border-dotted","border-t-transparent","border-l-transparent","border-r-transparent"],label:"text-foreground dark:text-foreground-dark font-regular"},variants:{size:{sm:{wrapper:"w-5 h-5",circle1:"border-2",circle2:"border-2",label:"text-small"},md:{wrapper:"w-8 h-8",circle1:"border-3",circle2:"border-3",label:"text-medium"},lg:{wrapper:"w-10 h-10",circle1:"border-3",circle2:"border-3",label:"text-large"}},color:{current:{circle1:"border-b-current",circle2:"border-b-current"},white:{circle1:"border-b-white",circle2:"border-b-white"},default:{circle1:"border-b-default",circle2:"border-b-default"},primary:{circle1:"border-b-primary",circle2:"border-b-primary"},secondary:{circle1:"border-b-secondary",circle2:"border-b-secondary"},success:{circle1:"border-b-success",circle2:"border-b-success"},warning:{circle1:"border-b-warning",circle2:"border-b-warning"},danger:{circle1:"border-b-danger",circle2:"border-b-danger"}},labelColor:{foreground:{label:"text-foreground"},primary:{label:"text-primary"},secondary:{label:"text-secondary"},success:{label:"text-success"},warning:{label:"text-warning"},danger:{label:"text-danger"}}},defaultVariants:{size:"md",color:"primary",labelColor:"foreground"}}),i=t(36222),l=t(65263),o=t(2265),s=t(57437),d=(0,a.Gp)((e,r)=>{let{slots:t,classNames:d,label:c,getSpinnerProps:u}=function(e){let[r,t]=(0,a.oe)(e,n.variantKeys),{children:s,className:d,classNames:c,label:u,...v}=r,m=(0,o.useMemo)(()=>n({...t}),[(0,i.Xx)(t)]),f=(0,l.W)(null==c?void 0:c.base,d),b=u||s,p=(0,o.useMemo)(()=>b&&"string"==typeof b?b:v["aria-label"]?"":"Loading",[s,b,v["aria-label"]]),g=(0,o.useCallback)(()=>({"aria-label":p,className:m.base({class:f}),...v}),[p,m,f,v]);return{label:b,slots:m,classNames:c,getSpinnerProps:g}}({...e});return(0,s.jsxs)("div",{ref:r,...u(),children:[(0,s.jsxs)("div",{className:t.wrapper({class:null==d?void 0:d.wrapper}),children:[(0,s.jsx)("i",{className:t.circle1({class:null==d?void 0:d.circle1})}),(0,s.jsx)("i",{className:t.circle2({class:null==d?void 0:d.circle2})})]}),c&&(0,s.jsx)("span",{className:t.label({class:null==d?void 0:d.label}),children:c})]})});d.displayName="NextUI.Spinner";var c=d},46896:function(e,r,t){t.d(r,{G:function(){return n}});var a=t(2265),n=(null==globalThis?void 0:globalThis.document)?a.useLayoutEffect:a.useEffect},38756:function(e,r,t){t.d(r,{Q:function(){return o}});var a=t(2265),n=t(95729),i=t(79248),l=t(7353);function o(e,r,t){let{validationBehavior:o,focus:s}=e;(0,i.b)(()=>{if("native"===o&&(null==t?void 0:t.current)){var e;let a,n=r.realtimeValidation.isInvalid?r.realtimeValidation.validationErrors.join(" ")||"Invalid value.":"";t.current.setCustomValidity(n),t.current.hasAttribute("title")||(t.current.title=""),r.realtimeValidation.isInvalid||r.updateValidation({isInvalid:!(e=t.current).validity.valid,validationDetails:{badInput:(a=e.validity).badInput,customError:a.customError,patternMismatch:a.patternMismatch,rangeOverflow:a.rangeOverflow,rangeUnderflow:a.rangeUnderflow,stepMismatch:a.stepMismatch,tooLong:a.tooLong,tooShort:a.tooShort,typeMismatch:a.typeMismatch,valueMissing:a.valueMissing,valid:a.valid},validationErrors:e.validationMessage?[e.validationMessage]:[]})}});let d=(0,l.i)(()=>{r.resetValidation()}),c=(0,l.i)(e=>{var a,i;r.displayValidation.isInvalid||r.commitValidation();let l=null==t?void 0:null===(a=t.current)||void 0===a?void 0:a.form;!e.defaultPrevented&&t&&l&&function(e){for(let r=0;r<e.elements.length;r++){let t=e.elements[r];if(!t.validity.valid)return t}return null}(l)===t.current&&(s?s():null===(i=t.current)||void 0===i||i.focus(),(0,n._w)("keyboard")),e.preventDefault()}),u=(0,l.i)(()=>{r.commitValidation()});(0,a.useEffect)(()=>{let e=null==t?void 0:t.current;if(!e)return;let r=e.form;return e.addEventListener("invalid",c),e.addEventListener("change",u),null==r||r.addEventListener("reset",d),()=>{e.removeEventListener("invalid",c),e.removeEventListener("change",u),null==r||r.removeEventListener("reset",d)}},[t,c,u,d,o])}},56804:function(e,r,t){t.d(r,{PS:function(){return l},Q3:function(){return d},tL:function(){return s}});var a=t(2265);let n={badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},i={...n,customError:!0,valid:!1},l={isInvalid:!1,validationDetails:n,validationErrors:[]},o=(0,a.createContext)({}),s="__formValidationState"+Date.now();function d(e){if(e[s]){let{realtimeValidation:r,displayValidation:t,updateValidation:a,resetValidation:n,commitValidation:i}=e[s];return{realtimeValidation:r,displayValidation:t,updateValidation:a,resetValidation:n,commitValidation:i}}return function(e){let{isInvalid:r,validationState:t,name:n,value:s,builtinValidation:d,validate:m,validationBehavior:f="aria"}=e;t&&(r||(r="invalid"===t));let b=void 0!==r?{isInvalid:r,validationErrors:[],validationDetails:i}:null,p=(0,a.useMemo)(()=>u(function(e,r){if("function"==typeof e){let t=e(r);if(t&&"boolean"!=typeof t)return c(t)}return[]}(m,s)),[m,s]);(null==d?void 0:d.validationDetails.valid)&&(d=null);let g=(0,a.useContext)(o),h=(0,a.useMemo)(()=>n?Array.isArray(n)?n.flatMap(e=>c(g[e])):c(g[n]):[],[g,n]),[y,w]=(0,a.useState)(g),[x,V]=(0,a.useState)(!1);g!==y&&(w(g),V(!1));let E=(0,a.useMemo)(()=>u(x?[]:h),[x,h]),M=(0,a.useRef)(l),[I,N]=(0,a.useState)(l),S=(0,a.useRef)(l),[k,L]=(0,a.useState)(!1);return(0,a.useEffect)(()=>{if(!k)return;L(!1);let e=p||d||M.current;v(e,S.current)||(S.current=e,N(e))}),{realtimeValidation:b||E||p||d||l,displayValidation:"native"===f?b||E||I:b||E||p||d||I,updateValidation(e){"aria"!==f||v(I,e)?M.current=e:N(e)},resetValidation(){v(l,S.current)||(S.current=l,N(l)),"native"===f&&L(!1),V(!0)},commitValidation(){"native"===f&&L(!0),V(!0)}}}(e)}function c(e){return e?Array.isArray(e)?e:[e]:[]}function u(e){return e.length?{isInvalid:!0,validationErrors:e,validationDetails:i}:null}function v(e,r){return e===r||e&&r&&e.isInvalid===r.isInvalid&&e.validationErrors.length===r.validationErrors.length&&e.validationErrors.every((e,t)=>e===r.validationErrors[t])&&Object.entries(e.validationDetails).every(([e,t])=>r.validationDetails[e]===t)}},41821:function(e,r,t){t.d(r,{z:function(){return n}});var a=t(2265);function n(e,r,t){let[n,i]=(0,a.useState)(e||r),l=(0,a.useRef)(void 0!==e),o=void 0!==e;(0,a.useEffect)(()=>{let e=l.current;e!==o&&console.warn(`WARN: A component changed from ${e?"controlled":"uncontrolled"} to ${o?"controlled":"uncontrolled"}.`),l.current=o},[o]);let s=o?e:n,d=(0,a.useCallback)((e,...r)=>{let a=(e,...r)=>{t&&!Object.is(s,e)&&t(e,...r),o||(s=e)};"function"==typeof e?(console.warn("We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320"),i((t,...n)=>{let i=e(o?s:t,...n);return(a(i,...r),o)?t:i})):(o||i(e),a(e,...r))},[o,s,t]);return[s,d]}}}]);