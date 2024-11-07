"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[85],{75945:function(e,t,r){r.d(t,{j:function(){return c}});var n=r(75300),l=(0,r(62751).tv)({base:"shrink-0 bg-divider border-none",variants:{orientation:{horizontal:"w-full h-divider",vertical:"h-full w-divider"}},defaultVariants:{orientation:"horizontal"}}),o=r(2265),i=r(55971),s=r(57437),u=(0,i.Gp)((e,t)=>{let{Component:r,getDividerProps:i}=function(e){var t;let r,i;let{as:s,className:u,orientation:c,...a}=e,d=s||"hr";"hr"===d&&"vertical"===c&&(d="div");let{separatorProps:f}=(t={elementType:"string"==typeof d?d:"hr",orientation:c},i=(0,n.z)(t,{enabled:"string"==typeof t.elementType}),("vertical"===t.orientation&&(r="vertical"),"hr"!==t.elementType)?{separatorProps:{...i,role:"separator","aria-orientation":r}}:{separatorProps:i}),y=(0,o.useMemo)(()=>l({orientation:c,className:u}),[c,u]);return{Component:d,getDividerProps:(0,o.useCallback)((e={})=>({className:y,role:"separator","data-orientation":c,...f,...a,...e}),[y,c,f,a])}}({...e});return(0,s.jsx)(r,{ref:t,...i()})});u.displayName="NextUI.Divider";var c=u},15966:function(e,t,r){r.d(t,{T:function(){return u}});var n=r(67756),l=r(61507),o=r(99222),i=r(277),s=r(2265);function u(e){let{isDisabled:t,onLongPressStart:r,onLongPressEnd:u,onLongPress:c,threshold:a=500,accessibilityDescription:d}=e,f=(0,s.useRef)(),{addGlobalListener:y,removeGlobalListener:p}=(0,l.x)(),{pressProps:g}=(0,n.r)({isDisabled:t,onPressStart(e){if(e.continuePropagation(),("mouse"===e.pointerType||"touch"===e.pointerType)&&(r&&r({...e,type:"longpressstart"}),f.current=setTimeout(()=>{e.target.dispatchEvent(new PointerEvent("pointercancel",{bubbles:!0})),c&&c({...e,type:"longpress"}),f.current=void 0},a),"touch"===e.pointerType)){let t=e=>{e.preventDefault()};y(e.target,"contextmenu",t,{once:!0}),y(window,"pointerup",()=>{setTimeout(()=>{p(e.target,"contextmenu",t)},30)},{once:!0})}},onPressEnd(e){f.current&&clearTimeout(f.current),u&&("mouse"===e.pointerType||"touch"===e.pointerType)&&u({...e,type:"longpressend"})}}),v=(0,o.P)(c&&!t?d:void 0);return{longPressProps:(0,i.d)(g,v)}}},45371:function(e,t,r){r.d(t,{g:function(){return m}});var n=r(64913),l=r(80112),o=r(54887),i=r(2265),s=r(27546),u=r(87603),c=r(46671),a=r(250),d=r(7353),f=r(90731);function y(e,t){let r=p(e,t,"left"),n=p(e,t,"top"),l=t.offsetWidth,o=t.offsetHeight,i=e.scrollLeft,s=e.scrollTop,{borderTopWidth:u,borderLeftWidth:c}=getComputedStyle(e),a=e.scrollLeft+parseInt(c,10),d=e.scrollTop+parseInt(u,10),f=a+e.clientWidth,y=d+e.clientHeight;r<=i?i=r-parseInt(c,10):r+l>f&&(i+=r+l-f),n<=d?s=n-parseInt(u,10):n+o>y&&(s+=n+o-y),e.scrollLeft=i,e.scrollTop=s}function p(e,t,r){let n="left"===r?"offsetLeft":"offsetTop",l=0;for(;t.offsetParent&&(l+=t[n],t.offsetParent!==e);){if(t.offsetParent.contains(e)){l-=e[n];break}t=t.offsetParent}return l}function g(e,t){if(document.contains(e)){let i=document.scrollingElement||document.documentElement;if("hidden"===window.getComputedStyle(i).overflow)for(let t of function(e,t){let r=[];for(;e&&e!==document.documentElement;)(0,f.a)(e,void 0)&&r.push(e),e=e.parentElement;return r}(e))y(t,e);else{var r,n,l,o;let{left:i,top:s}=e.getBoundingClientRect();null==e||null===(r=e.scrollIntoView)||void 0===r||r.call(e,{block:"nearest"});let{left:u,top:c}=e.getBoundingClientRect();(Math.abs(i-u)>1||Math.abs(s-c)>1)&&(null==t||null===(l=t.containingElement)||void 0===l||null===(n=l.scrollIntoView)||void 0===n||n.call(l,{block:"center",inline:"center"}),null===(o=e.scrollIntoView)||void 0===o||o.call(e,{block:"nearest"}))}}}var v=r(277),h=r(95729),K=r(34909);function m(e){var t,r,f;let p,m,b,{selectionManager:k,keyboardDelegate:S,ref:T,autoFocus:P=!1,shouldFocusWrap:w=!1,disallowEmptySelection:F=!1,disallowSelectAll:D=!1,selectOnFocus:L="replace"===k.selectionBehavior,disallowTypeAhead:M=!1,shouldUseVirtualFocus:E,allowsTabNavigation:I=!1,isVirtualized:x,scrollRef:C=T,linkBehavior:A="action"}=e,{direction:O}=(0,K.j)(),N=(0,c.tv)(),B=(0,i.useRef)({top:0,left:0});t="scroll",r=x?null:()=>{B.current={top:C.current.scrollTop,left:C.current.scrollLeft}},p=(0,d.i)(r),m=null==r,(0,i.useEffect)(()=>{if(m||!C.current)return;let e=C.current;return e.addEventListener(t,p,void 0),()=>{e.removeEventListener(t,p,f)}},[C,t,f,m,p]);let R=(0,i.useRef)(P);(0,i.useEffect)(()=>{if(R.current){let e=null;"first"===P&&(e=S.getFirstKey()),"last"===P&&(e=S.getLastKey());let t=k.selectedKeys;if(t.size){for(let r of t)if(k.canSelectItem(r)){e=r;break}}k.setFocused(!0),k.setFocusedKey(e),null!=e||E||(0,u.e)(T.current)}},[]);let V=(0,i.useRef)(k.focusedKey);(0,i.useEffect)(()=>{let e=(0,h.Jz)();if(k.isFocused&&null!=k.focusedKey&&(null==C?void 0:C.current)){let t=C.current.querySelector(`[data-key="${CSS.escape(k.focusedKey.toString())}"]`);t&&("keyboard"===e||R.current)&&(x||y(C.current,t),"virtual"!==e&&g(t,{containingElement:T.current}))}k.isFocused&&null==k.focusedKey&&null!=V.current&&(0,u.e)(T.current),V.current=k.focusedKey,R.current=!1},[x,C,k.focusedKey,k.isFocused,T]);let W={onKeyDown:e=>{var t,r,l,i,u,c,d,f;if(e.altKey&&"Tab"===e.key&&e.preventDefault(),!T.current.contains(e.target))return;let y=(t,r)=>{if(null!=t){if(k.isLink(t)&&"selection"===A&&L&&!(0,n.F)(e)){(0,o.flushSync)(()=>{k.setFocusedKey(t,r)});let n=C.current.querySelector(`[data-key="${CSS.escape(t.toString())}"]`),l=k.getItemProps(t);N.open(n,e,l.href,l.routerOptions);return}k.setFocusedKey(t,r),k.isLink(t)&&"override"===A||(e.shiftKey&&"multiple"===k.selectionMode?k.extendSelection(t):L&&!(0,n.F)(e)&&k.replaceSelection(t))}};switch(e.key){case"ArrowDown":if(S.getKeyBelow){e.preventDefault();let n=null!=k.focusedKey?S.getKeyBelow(k.focusedKey):null===(t=S.getFirstKey)||void 0===t?void 0:t.call(S);null==n&&w&&(n=null===(r=S.getFirstKey)||void 0===r?void 0:r.call(S,k.focusedKey)),y(n)}break;case"ArrowUp":if(S.getKeyAbove){e.preventDefault();let t=null!=k.focusedKey?S.getKeyAbove(k.focusedKey):null===(l=S.getLastKey)||void 0===l?void 0:l.call(S);null==t&&w&&(t=null===(i=S.getLastKey)||void 0===i?void 0:i.call(S,k.focusedKey)),y(t)}break;case"ArrowLeft":if(S.getKeyLeftOf){e.preventDefault();let t=S.getKeyLeftOf(k.focusedKey);null==t&&w&&(t="rtl"===O?null===(u=S.getFirstKey)||void 0===u?void 0:u.call(S,k.focusedKey):null===(c=S.getLastKey)||void 0===c?void 0:c.call(S,k.focusedKey)),y(t,"rtl"===O?"first":"last")}break;case"ArrowRight":if(S.getKeyRightOf){e.preventDefault();let t=S.getKeyRightOf(k.focusedKey);null==t&&w&&(t="rtl"===O?null===(d=S.getLastKey)||void 0===d?void 0:d.call(S,k.focusedKey):null===(f=S.getFirstKey)||void 0===f?void 0:f.call(S,k.focusedKey)),y(t,"rtl"===O?"last":"first")}break;case"Home":if(S.getFirstKey){e.preventDefault();let t=S.getFirstKey(k.focusedKey,(0,n.y)(e));k.setFocusedKey(t),(0,n.y)(e)&&e.shiftKey&&"multiple"===k.selectionMode?k.extendSelection(t):L&&k.replaceSelection(t)}break;case"End":if(S.getLastKey){e.preventDefault();let t=S.getLastKey(k.focusedKey,(0,n.y)(e));k.setFocusedKey(t),(0,n.y)(e)&&e.shiftKey&&"multiple"===k.selectionMode?k.extendSelection(t):L&&k.replaceSelection(t)}break;case"PageDown":S.getKeyPageBelow&&(e.preventDefault(),y(S.getKeyPageBelow(k.focusedKey)));break;case"PageUp":S.getKeyPageAbove&&(e.preventDefault(),y(S.getKeyPageAbove(k.focusedKey)));break;case"a":(0,n.y)(e)&&"multiple"===k.selectionMode&&!0!==D&&(e.preventDefault(),k.selectAll());break;case"Escape":F||0===k.selectedKeys.size||(e.stopPropagation(),e.preventDefault(),k.clearSelection());break;case"Tab":if(!I){if(e.shiftKey)T.current.focus();else{let e,t,r=(0,s.QL)(T.current,{tabbable:!0});do(t=r.lastChild())&&(e=t);while(t);e&&!e.contains(document.activeElement)&&(0,a.A)(e)}}}},onFocus:e=>{if(k.isFocused){e.currentTarget.contains(e.target)||k.setFocused(!1);return}if(e.currentTarget.contains(e.target)){if(k.setFocused(!0),null==k.focusedKey){var t,r;let n=e=>{null!=e&&(k.setFocusedKey(e),L&&k.replaceSelection(e))},l=e.relatedTarget;l&&e.currentTarget.compareDocumentPosition(l)&Node.DOCUMENT_POSITION_FOLLOWING?n(null!==(t=k.lastSelectedKey)&&void 0!==t?t:S.getLastKey()):n(null!==(r=k.firstSelectedKey)&&void 0!==r?r:S.getFirstKey())}else x||(C.current.scrollTop=B.current.top,C.current.scrollLeft=B.current.left);if(!x&&null!=k.focusedKey){let e=C.current.querySelector(`[data-key="${CSS.escape(k.focusedKey.toString())}"]`);e&&(e.contains(document.activeElement)||(0,a.A)(e),"keyboard"===(0,h.Jz)()&&g(e,{containingElement:T.current}))}}},onBlur:e=>{e.currentTarget.contains(e.relatedTarget)||k.setFocused(!1)},onMouseDown(e){C.current===e.target&&e.preventDefault()}},{typeSelectProps:z}=(0,l.i)({keyboardDelegate:S,selectionManager:k});return M||(W=(0,v.d)(z,W)),E||(b=null==k.focusedKey?0:-1),{collectionProps:{...W,tabIndex:b}}}},59375:function(e,t,r){r.d(t,{C:function(){return a}});var n=r(64913),l=r(87603),o=r(46671),i=r(277),s=r(67756),u=r(15966),c=r(2265);function a(e){let{selectionManager:t,key:r,ref:a,shouldSelectOnPressUp:y,shouldUseVirtualFocus:p,focus:g,isDisabled:v,onAction:h,allowsDifferentPressOrigin:K,linkBehavior:m="action"}=e,b=(0,o.tv)(),k=e=>{if("keyboard"===e.pointerType&&(0,n.F)(e))t.toggleSelection(r);else{if("none"===t.selectionMode)return;if(t.isLink(r)){if("selection"===m){let n=t.getItemProps(r);b.open(a.current,e,n.href,n.routerOptions),t.setSelectedKeys(t.selectedKeys);return}if("override"===m||"none"===m)return}"single"===t.selectionMode?t.isSelected(r)&&!t.disallowEmptySelection?t.toggleSelection(r):t.replaceSelection(r):e&&e.shiftKey?t.extendSelection(r):"toggle"===t.selectionBehavior||e&&((0,n.y)(e)||"touch"===e.pointerType||"virtual"===e.pointerType)?t.toggleSelection(r):t.replaceSelection(r)}};(0,c.useEffect)(()=>{r===t.focusedKey&&t.isFocused&&!p&&(g?g():document.activeElement!==a.current&&(0,l.e)(a.current))},[a,r,t.focusedKey,t.childFocusStrategy,t.isFocused,p]),v=v||t.isDisabled(r);let S={};p||v?v&&(S.onMouseDown=e=>{e.preventDefault()}):S={tabIndex:r===t.focusedKey?0:-1,onFocus(e){e.target===a.current&&t.setFocusedKey(r)}};let T=t.isLink(r)&&"override"===m,P=t.isLink(r)&&"selection"!==m&&"none"!==m,w=!v&&t.canSelectItem(r)&&!T,F=(h||P)&&!v,D=F&&("replace"===t.selectionBehavior?!w:!w||t.isEmpty),L=F&&w&&"replace"===t.selectionBehavior,M=D||L,E=(0,c.useRef)(null),I=M&&w,x=(0,c.useRef)(!1),C=(0,c.useRef)(!1),A=e=>{if(h&&h(),P){let n=t.getItemProps(r);b.open(a.current,e,n.href,n.routerOptions)}},O={};y?(O.onPressStart=e=>{E.current=e.pointerType,x.current=I,"keyboard"===e.pointerType&&(!M||f())&&k(e)},K?(O.onPressUp=D?null:e=>{"keyboard"!==e.pointerType&&w&&k(e)},O.onPress=D?A:null):O.onPress=e=>{D||L&&"mouse"!==e.pointerType?("keyboard"!==e.pointerType||d())&&A(e):"keyboard"!==e.pointerType&&w&&k(e)}):(O.onPressStart=e=>{E.current=e.pointerType,x.current=I,C.current=D,w&&("mouse"===e.pointerType&&!D||"keyboard"===e.pointerType&&(!F||f()))&&k(e)},O.onPress=e=>{("touch"===e.pointerType||"pen"===e.pointerType||"virtual"===e.pointerType||"keyboard"===e.pointerType&&M&&d()||"mouse"===e.pointerType&&C.current)&&(M?A(e):w&&k(e))}),S["data-key"]=r,O.preventFocusOnPress=p;let{pressProps:N,isPressed:B}=(0,s.r)(O),R=L?e=>{"mouse"===E.current&&(e.stopPropagation(),e.preventDefault(),A(e))}:void 0,{longPressProps:V}=(0,u.T)({isDisabled:!I,onLongPress(e){"touch"===e.pointerType&&(k(e),t.setSelectionBehavior("toggle"))}}),W=t.isLink(r)?e=>{o.nG.isOpening||e.preventDefault()}:void 0;return{itemProps:(0,i.d)(S,w||D?N:{},I?V:{},{onDoubleClick:R,onDragStartCapture:e=>{"touch"===E.current&&x.current&&e.preventDefault()},onClick:W}),isPressed:B,isSelected:t.isSelected(r),isFocused:t.isFocused&&t.focusedKey===r,isDisabled:v,allowsSelection:w,hasAction:M}}function d(){let e=window.event;return(null==e?void 0:e.key)==="Enter"}function f(){let e=window.event;return(null==e?void 0:e.key)===" "||(null==e?void 0:e.code)==="Space"}},80112:function(e,t,r){r.d(t,{i:function(){return l}});var n=r(2265);function l(e){let{keyboardDelegate:t,selectionManager:r,onTypeSelect:l}=e,o=(0,n.useRef)({search:"",timeout:null}).current;return{typeSelectProps:{onKeyDownCapture:t.getKeyForSearch?e=>{var n;let i=1!==(n=e.key).length&&/^[A-Z]/i.test(n)?"":n;if(!i||e.ctrlKey||e.metaKey||!e.currentTarget.contains(e.target))return;" "!==i||!(o.search.trim().length>0)||(e.preventDefault(),"continuePropagation"in e||e.stopPropagation()),o.search+=i;let s=t.getKeyForSearch(o.search,r.focusedKey);null==s&&(s=t.getKeyForSearch(o.search)),null!=s&&(r.setFocusedKey(s),l&&l(s)),clearTimeout(o.timeout),o.timeout=setTimeout(()=>{o.search=""},1e3)}:null}}}},64913:function(e,t,r){r.d(t,{F:function(){return l},y:function(){return o}});var n=r(40541);function l(e){return(0,n.ad)()?e.altKey:e.ctrlKey}function o(e){return(0,n.V5)()?e.metaKey:e.ctrlKey}},90731:function(e,t,r){r.d(t,{a:function(){return n}});function n(e,t){let r=window.getComputedStyle(e),n=/(auto|scroll)/.test(r.overflow+r.overflowX+r.overflowY);return n&&t&&(n=e.scrollHeight!==e.clientHeight||e.scrollWidth!==e.clientWidth),n}},82563:function(e,t,r){r.d(t,{c:function(){return o}});var n=r(2265);function l(e){return null}l.getCollectionNode=function*(e,t){let{childItems:r,title:l,children:o}=e,i=e.title||e.children,s=e.textValue||("string"==typeof i?i:"")||e["aria-label"]||"";s||(null==t?void 0:t.suppressTextValueWarning)||console.warn("<Item> with non-plain text contents is unsupported by type to select for accessibility. Please add a `textValue` prop."),yield{type:"item",props:e,rendered:i,textValue:s,"aria-label":e["aria-label"],hasChildNodes:null!=e.hasChildItems?e.hasChildItems:!!(e.childItems||e.title&&n.Children.count(e.children)>0),*childNodes(){if(r)for(let e of r)yield{type:"item",value:e};else if(l){let e=[];n.Children.forEach(o,t=>{e.push({type:"item",element:t})}),yield*e}}}};let o=l},76387:function(e,t,r){r.d(t,{n:function(){return u}});class n{*[Symbol.iterator](){yield*this.iterable}get size(){return this.keyMap.size}getKeys(){return this.keyMap.keys()}getKeyBefore(e){let t=this.keyMap.get(e);return t?t.prevKey:null}getKeyAfter(e){let t=this.keyMap.get(e);return t?t.nextKey:null}getFirstKey(){return this.firstKey}getLastKey(){return this.lastKey}getItem(e){return this.keyMap.get(e)}at(e){let t=[...this.getKeys()];return this.getItem(t[e])}getChildren(e){let t=this.keyMap.get(e);return(null==t?void 0:t.childNodes)||[]}constructor(e){let t;this.keyMap=new Map,this.iterable=e;let r=e=>{if(this.keyMap.set(e.key,e),e.childNodes&&"section"===e.type)for(let t of e.childNodes)r(t)};for(let t of e)r(t);let n=0;for(let[e,r]of this.keyMap)t?(t.nextKey=e,r.prevKey=t.key):(this.firstKey=e,r.prevKey=void 0),"item"===r.type&&(r.index=n++),(t=r).nextKey=void 0;this.lastKey=null==t?void 0:t.key}}var l=r(18926),o=r(12187),i=r(2265),s=r(34921);function u(e){let{filter:t}=e,r=(0,l.q)(e),u=(0,i.useMemo)(()=>e.disabledKeys?new Set(e.disabledKeys):new Set,[e.disabledKeys]),c=(0,i.useCallback)(e=>new n(t?t(e):e),[t]),a=(0,i.useMemo)(()=>({suppressTextValueWarning:e.suppressTextValueWarning}),[e.suppressTextValueWarning]),d=(0,s.K)(e,c,a),f=(0,i.useMemo)(()=>new o.Z(d,r),[d,r]),y=(0,i.useRef)(null);return(0,i.useEffect)(()=>{if(null!=r.focusedKey&&!d.getItem(r.focusedKey)){let e;let t=y.current.getItem(r.focusedKey),n=[...y.current.getKeys()].map(e=>{let t=y.current.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),l=[...d.getKeys()].map(e=>{let t=d.getItem(e);return"item"===t.type?t:null}).filter(e=>null!==e),o=n.length-l.length,i=Math.min(o>1?Math.max(t.index-o+1,0):t.index,l.length-1);for(;i>=0;){if(!f.isDisabled(l[i].key)){e=l[i];break}i<l.length-1?i++:(i>t.index&&(i=t.index),i--)}r.setFocusedKey(e?e.key:null)}y.current=d},[d,f,r,r.focusedKey]),{collection:d,disabledKeys:u,selectionManager:f}}}}]);