(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3797],{41911:function(e,t,s){Promise.resolve().then(s.bind(s,36407))},36407:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return y}});var a=s(57437),l=s(2265),r=s(8127),n=s(72354),i=s(40884),o=s(85908),d=s(55448),c=s(72912),u=s(34457),x=s(51153);let m=e=>(0,a.jsx)("svg",{"aria-hidden":"true",fill:"none",focusable:"false",height:"1em",role:"presentation",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",viewBox:"0 0 24 24",width:"1em",...e,children:(0,a.jsx)("path",{d:"m9 18 6-6-6-6"})}),h=e=>{let{number:t}=e;return(0,a.jsxs)("div",{className:"flex items-center gap-1 text-default-400",children:[(0,a.jsx)("span",{className:"text-small",children:t}),(0,a.jsx)(m,{className:"text-xl"})]})};var f=s(4814),p=s(68596),b=s(89779),g=s(16463),v=s(26735),j=s(9792),N=s(54713),w=s(60208);function y(){let[e,t]=l.useState(!1),s=(0,g.useRouter)(),[m,b]=(0,l.useState)(null),[y,k]=(0,l.useState)(String),{address:C,isConnected:_}=(0,v.m)(),{data:I}=(0,j.K)({address:C}),{data:S}=(0,N.F)({address:C}),{data:M}=(0,w.c)({name:null!=S?S:void 0}),[E,P]=(0,l.useState)(null),[Z,B]=(0,l.useState)(null),[F,L]=(0,l.useState)(!0);(0,l.useEffect)(()=>{(async()=>{let e=await (0,f.kU)();if("-1"===e.code)sessionStorage.clear(),s.push("/");else if("0"===e.code){var t;k(null!==(t=e.address)&&void 0!==t?t:"")}})()},[]),(0,l.useEffect)(()=>{M&&P(M)},[M]),(0,l.useEffect)(()=>{S&&B(S)},[S]),(0,l.useEffect)(()=>{R()},[]),(0,l.useEffect)(()=>{m&&(O(),V())},[m]);let R=async()=>{let e=sessionStorage.getItem("token");e||(sessionStorage.clear(),s.push("/"));let t=(await x.Z.post("/client/user.getUserInfo1",{},{headers:{"content-type":"application/json;charset=utf8","uni-id-token":e,"vk-appid":"__UNI__43DE302","vk-platform":"h5"}})).data;if(0!==t.code)return"";{b(t.userInfo);let e=JSON.stringify(t.userInfo);sessionStorage.setItem("userInfo",e)}},O=()=>m&&m.is_partner&&"1"==m.is_partner?(0,a.jsx)(r.R,{endContent:(0,a.jsx)("span",{className:"icon-[lets-icons--check-fill]  mx-2 bg-gradient-to-tr from-blue-500 to-purple-500 text-3xl shadow-lg"}),startContent:(0,a.jsx)("span",{className:"icon-[vaadin--user-star] mx-2"}),children:"合伙人认证"},"verify"):(0,a.jsx)(r.R,{onClick:U,endContent:(0,a.jsx)(h,{number:0}),startContent:(0,a.jsx)("span",{className:"icon-[vaadin--user-star] mx-2"}),children:"合伙人认证"},"verify"),V=()=>{m&&m.inviter_uid&&m.inviter_uid.length>0&&L(!1)},U=()=>{s.push("/verify")};return(0,a.jsxs)("div",{className:"flex flex-col",children:[(0,a.jsxs)(n.w,{className:"p-2",children:[(0,a.jsx)(i.u,{className:"justify-between",children:(0,a.jsxs)("div",{className:"flex gap-5",children:[(0,a.jsx)(o.h,{isBordered:!0,radius:"full",size:"md",src:null!=E?E:""}),(0,a.jsxs)("div",{className:"flex flex-col gap-1 items-start justify-center",children:[(0,a.jsx)("h4",{className:"text-small font-semibold leading-none text-default-600",children:Z}),(0,a.jsx)("h5",{className:"text-small tracking-tight text-default-400",children:"phantom-bloc"})]})]})}),(0,a.jsx)(d.G,{className:"px-3 py-0 text-small text-default-400"}),(0,a.jsx)(d.G,{children:(0,a.jsxs)("div",{className:"grid grid-cols-2 gap-4 mt-4",children:[(0,a.jsxs)("div",{className:"flex flex-col items-start",children:[(0,a.jsx)("span",{className:"text-sm font-bold",children:"总收益"}),(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)("div",{className:"flex flex-col items-start",children:(0,a.jsx)("span",{className:"text-1xl font-bold mt-3",children:"USDT"})}),(0,a.jsx)("div",{className:"flex flex-col items-end",children:(0,a.jsx)("span",{className:"text-1xl font-bold mt-3 ",children:(null==m?void 0:m.account_usdt.total)?((null==m?void 0:m.account_usdt.total)/100).toFixed(6).substring(0,((null==m?void 0:m.account_usdt.total)/100).toFixed(6).indexOf(".")+7):"000.000000"})})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)("div",{className:"flex flex-col items-start",children:(0,a.jsx)("span",{className:"text-1xl font-bold mt-3",children:"PMB "})}),(0,a.jsx)("div",{className:"flex flex-col items-end",children:(0,a.jsx)("span",{className:"text-1xl font-bold mt-3",children:(null==m?void 0:m.account_pmb.total)?((null==m?void 0:m.account_pmb.total)/100).toFixed(6).substring(0,((null==m?void 0:m.account_pmb.total)/100).toFixed(6).indexOf(".")+7):"000.000000"})})]})]}),(0,a.jsxs)("div",{className:"flex flex-col items-start",children:[(0,a.jsx)("span",{className:"text-sm font-bold",children:"可提现"}),(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)("div",{className:"flex flex-col items-start",children:(0,a.jsx)("span",{className:"text-1xl font-bold mt-3",children:"USDT"})}),(0,a.jsx)("div",{className:"flex flex-col items-end",children:(0,a.jsx)("span",{className:"text-1xl font-bold mt-3",children:(null==m?void 0:m.account_usdt.balance)?((null==m?void 0:m.account_usdt.balance)/100).toFixed(6).substring(0,((null==m?void 0:m.account_usdt.balance)/100).toFixed(6).indexOf(".")+7):"000.000000"})})]}),(0,a.jsxs)("div",{className:"grid grid-cols-2",children:[(0,a.jsx)("div",{className:"flex flex-col items-start",children:(0,a.jsx)("span",{className:"text-1xl font-bold mt-3",children:"PMB "})}),(0,a.jsx)("div",{className:"flex flex-col items-end",children:(0,a.jsx)("span",{className:"text-1xl font-bold mt-3",children:(null==m?void 0:m.account_pmb.balance)?((null==m?void 0:m.account_pmb.balance)/100).toFixed(6).substring(0,((null==m?void 0:m.account_pmb.balance)/100).toFixed(6).indexOf(".")+7):"000.000000"})})]})]})]})})]}),(0,a.jsx)(c.q,{y:4}),(0,a.jsxs)(u.X,{className:"p-0 gap-0 divide-y divide-default-300/50 dark:divide-default-100/80 bg-content1 overflow-visible shadow-small rounded-medium",itemClasses:{base:"px-3 first:rounded-t-medium last:rounded-b-medium rounded-none gap-3 h-12 data-[hover=true]:bg-default-100/80"},children:[(0,a.jsx)(r.R,{onClick:()=>{s.push("/invite")},endContent:(0,a.jsx)(h,{number:0}),startContent:(0,a.jsx)("span",{className:"icon-[fontisto--share] mx-2"}),children:"邀请"},"invite"),F&&(0,a.jsx)(r.R,{onClick:()=>{s.push("/setInviteCode")},endContent:(0,a.jsx)(h,{number:0}),startContent:(0,a.jsx)("span",{className:"icon-[duo-icons--brush-2] mx-2"}),children:" 填写邀请码"},"inviteInfo"),(0,a.jsx)(r.R,{onClick:()=>{s.push("/withdrawal")},endContent:(0,a.jsx)(h,{number:0}),startContent:(0,a.jsx)("span",{className:"icon-[solar--wallet-bold] mx-2"}),children:"提现"},"withdrawal"),O(),m&&m.withdrawalPwd?(0,a.jsx)(r.R,{endContent:(0,a.jsx)("span",{className:"icon-[lets-icons--check-fill]  mx-2 bg-gradient-to-tr from-blue-500 to-purple-500 text-3xl shadow-lg"}),startContent:(0,a.jsx)("span",{className:"icon-[teenyicons--password-solid] mx-2"}),children:"设置提现密码"},"withdrawalPwd"):(0,a.jsx)(r.R,{onClick:()=>{s.push("/withdrawalPwd")},endContent:(0,a.jsx)(h,{number:0}),startContent:(0,a.jsx)("span",{className:"icon-[teenyicons--password-solid] mx-2"}),children:"设置提现密码"},"withdrawalPwd"),(0,a.jsx)(r.R,{endContent:(0,a.jsx)("span",{className:"text-small text-default-400 mr-2",children:"ZH"}),startContent:(0,a.jsx)("span",{className:"icon-[mdi--spoken-language] mx-2"}),children:"语言切换"},"discussions")]}),(0,a.jsx)("footer",{className:"w-full flex items-center justify-center py-3",children:(0,a.jsx)(p.E,{})})]})}b.J.pages},68596:function(e,t,s){"use strict";s.d(t,{E:function(){return i}});var a=s(57437),l=s(89779),r=s(87138);let n=l.J.bottomItems,i=()=>(0,a.jsx)("div",{className:"fixed bottom-0 left-0 z-50 w-full h-16 bg-white border-t border-gray-200 dark:bg-gray-700 dark:border-gray-600",children:(0,a.jsxs)("div",{className:"grid h-full max-w-lg grid-cols-4 mx-auto font-medium",children:[(0,a.jsxs)(r.default,{href:"/",className:"inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",children:[(0,a.jsx)("svg",{className:"w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,a.jsx)("path",{d:"m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"})}),(0,a.jsx)("span",{className:"text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500",children:"首页"})]}),(0,a.jsxs)(r.default,{href:n[1].href,className:"inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",children:[(0,a.jsxs)("svg",{className:"w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:[(0,a.jsx)("path",{d:"M11.074 4 8.442.408A.95.95 0 0 0 7.014.254L2.926 4h8.148ZM9 13v-1a4 4 0 0 1 4-4h6V6a1 1 0 0 0-1-1H1a1 1 0 0 0-1 1v13a1 1 0 0 0 1 1h17a1 1 0 0 0 1-1v-2h-6a4 4 0 0 1-4-4Z"}),(0,a.jsx)("path",{d:"M19 10h-6a2 2 0 0 0-2 2v1a2 2 0 0 0 2 2h6a1 1 0 0 0 1-1v-3a1 1 0 0 0-1-1Zm-4.5 3.5a1 1 0 1 1 0-2 1 1 0 0 1 0 2ZM12.62 4h2.78L12.539.41a1.086 1.086 0 1 0-1.7 1.352L12.62 4Z"})]}),(0,a.jsx)("span",{className:"text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500",children:"钱包"})]}),(0,a.jsxs)(r.default,{href:n[2].href,className:"inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",children:[(0,a.jsx)("svg",{className:"w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"none",viewBox:"0 0 20 20",children:(0,a.jsx)("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"2",d:"M4 12.25V1m0 11.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M4 19v-2.25m6-13.5V1m0 2.25a2.25 2.25 0 0 0 0 4.5m0-4.5a2.25 2.25 0 0 1 0 4.5M10 19V7.75m6 4.5V1m0 11.25a2.25 2.25 0 1 0 0 4.5 2.25 2.25 0 0 0 0-4.5ZM16 19v-2"})}),(0,a.jsx)("span",{className:"text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500",children:"团队"})]}),(0,a.jsxs)(r.default,{href:n[3].href,className:"inline-flex flex-col items-center justify-center px-5 hover:bg-gray-50 dark:hover:bg-gray-800 group",children:[(0,a.jsx)("svg",{className:"w-5 h-5 mb-2 text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500","aria-hidden":"true",xmlns:"http://www.w3.org/2000/svg",fill:"currentColor",viewBox:"0 0 20 20",children:(0,a.jsx)("path",{d:"M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"})}),(0,a.jsx)("span",{className:"text-sm text-gray-500 dark:text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-500",children:"我的"})]})]})})},89779:function(e,t,s){"use strict";s.d(t,{J:function(){return a}});let a={name:"phantom-bloc",description:"phantom-bloc.",navItems:[{label:"Home",href:"/"},{label:"market",href:"/market"},{label:"Docs",href:"/docs"},{label:"Pricing",href:"/pricing"},{label:"Blog",href:"/blog"},{label:"About",href:"/about"}],navMenuItems:[{label:"找回提现密码",href:"/reset"}],bottomItems:[{label:"Home",href:"/"},{label:"wallet",href:"/wallet"},{label:"team",href:"/team"},{label:"my",href:"/user"}],links:{github:"https://github.com/",twitter:"https://twitter.com/",docs:"https://nextui.org/",discord:"https://discord.gg/",sponsor:"https://patreon.com/"},pages:{order:"/order",invite:"/invite",withdrawal:"/withdrawal",verify:"/verify"}}},31887:function(e,t,s){"use strict";s.d(t,{e:function(){return a},x:function(){return l}});var a=e=>(null==e?void 0:e.length)<=4?e:null==e?void 0:e.slice(0,3),l=(...e)=>{let t=" ";for(let s of e)if("string"==typeof s&&s.length>0){t=s;break}return t}},72912:function(e,t,s){"use strict";s.d(t,{q:function(){return m}});var a={px:"1px",0:"0px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",11:"2.75rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},l=s(55971),r=(0,s(62751).tv)({base:"w-px h-px inline-block",variants:{isInline:{true:"inline-block",false:"block"}},defaultVariants:{isInline:!1}}),n=s(36222),i=s(53640),o=s(65263),d=s(2265),c=e=>{var t;return null!=(t=a[e])?t:e},u=s(57437),x=(0,l.Gp)((e,t)=>{let{Component:s,getSpacerProps:a}=function(e){let[t,s]=(0,l.oe)(e,r.variantKeys),{as:a,className:u,x=1,y:m=1,...h}=t,f=(0,d.useMemo)(()=>r({...s,className:u}),[(0,n.Xx)(s),u]),p=c(x),b=c(m);return{Component:a||"span",getSpacerProps:(e={})=>({...e,...h,"aria-hidden":(0,i.PB)(!0),className:(0,o.W)(f,e.className),style:{...e.style,...h.style,marginLeft:p,marginTop:b}})}}({...e});return(0,u.jsx)(s,{ref:t,...a()})});x.displayName="NextUI.Spacer";var m=x},46896:function(e,t,s){"use strict";s.d(t,{G:function(){return l}});var a=s(2265),l=(null==globalThis?void 0:globalThis.document)?a.useLayoutEffect:a.useEffect},60720:function(e,t,s){"use strict";s.d(t,{N:function(){return r}});var a=s(80612),l=s(37408);function r(e){let{id:t,label:s,"aria-labelledby":r,"aria-label":n,labelElementType:i="label"}=e;t=(0,a.Me)(t);let o=(0,a.Me)(),d={};return s?(r=r?`${o} ${r}`:o,d={id:o,htmlFor:"label"===i?t:void 0}):r||n||console.warn("If you do not provide a visible label, you must specify an aria-label or aria-labelledby attribute for accessibility"),{labelProps:d,fieldProps:(0,l.b)({id:t,"aria-label":n,"aria-labelledby":r})}}},37408:function(e,t,s){"use strict";s.d(t,{b:function(){return l}});var a=s(80612);function l(e,t){let{id:s,"aria-label":l,"aria-labelledby":r}=e;return s=(0,a.Me)(s),r&&l?r=[...new Set([s,...r.trim().split(/\s+/)])].join(" "):r&&(r=r.trim().split(/\s+/).join(" ")),l||r||!t||(l=t),{id:s,"aria-label":l,"aria-labelledby":r}}}},function(e){e.O(0,[7054,2858,9109,7454,6735,6309,8596,8906,6692,8472,5634,7546,8769,7138,117,85,2431,458,7048,2971,7023,1744],function(){return e(e.s=41911)}),_N_E=e.O()}]);