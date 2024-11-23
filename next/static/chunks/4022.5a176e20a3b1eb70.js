"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[4022],{64022:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.SafeAppProvider=void 0;var s=n(31592);Object.defineProperty(t,"SafeAppProvider",{enumerable:!0,get:function(){return s.SafeAppProvider}})},31592:function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.SafeAppProvider=void 0;let s=n(68885),r=n(53875);class i extends s.EventEmitter{constructor(e,t){super(),this.submittedTxs=new Map,this.safe=e,this.sdk=t}async connect(){this.emit("connect",{chainId:this.chainId})}async disconnect(){}get chainId(){return this.safe.chainId}async request(e){let{method:t,params:n=[]}=e;switch(t){case"eth_accounts":return[this.safe.safeAddress];case"net_version":case"eth_chainId":return`0x${this.chainId.toString(16)}`;case"personal_sign":{let[e,t]=n;if(this.safe.safeAddress.toLowerCase()!==t.toLowerCase())throw Error("The address or message hash is invalid");let s=await this.sdk.txs.signMessage(e);return("signature"in s?s.signature:void 0)||"0x"}case"eth_sign":{let[e,t]=n;if(this.safe.safeAddress.toLowerCase()!==e.toLowerCase()||!t.startsWith("0x"))throw Error("The address or message hash is invalid");let s=await this.sdk.txs.signMessage(t);return("signature"in s?s.signature:void 0)||"0x"}case"eth_signTypedData":case"eth_signTypedData_v4":{let[e,t]=n,s="string"==typeof t?JSON.parse(t):t;if(this.safe.safeAddress.toLowerCase()!==e.toLowerCase())throw Error("The address is invalid");let r=await this.sdk.txs.signTypedMessage(s);return("signature"in r?r.signature:void 0)||"0x"}case"eth_sendTransaction":let s={...n[0],value:n[0].value||"0",data:n[0].data||"0x"};"string"==typeof s.gas&&s.gas.startsWith("0x")&&(s.gas=parseInt(s.gas,16));let i=await this.sdk.txs.send({txs:[s],params:{safeTxGas:s.gas}});return this.submittedTxs.set(i.safeTxHash,{from:this.safe.safeAddress,hash:i.safeTxHash,gas:0,gasPrice:"0x00",nonce:0,input:s.data,value:s.value,to:s.to,blockHash:null,blockNumber:null,transactionIndex:null}),i.safeTxHash;case"eth_blockNumber":return(await this.sdk.eth.getBlockByNumber(["latest"])).number;case"eth_getBalance":return this.sdk.eth.getBalance([(0,r.getLowerCase)(n[0]),n[1]]);case"eth_getCode":return this.sdk.eth.getCode([(0,r.getLowerCase)(n[0]),n[1]]);case"eth_getTransactionCount":return this.sdk.eth.getTransactionCount([(0,r.getLowerCase)(n[0]),n[1]]);case"eth_getStorageAt":return this.sdk.eth.getStorageAt([(0,r.getLowerCase)(n[0]),n[1],n[2]]);case"eth_getBlockByNumber":return this.sdk.eth.getBlockByNumber([n[0],n[1]]);case"eth_getBlockByHash":return this.sdk.eth.getBlockByHash([n[0],n[1]]);case"eth_getTransactionByHash":let o=n[0];try{o=(await this.sdk.txs.getBySafeTxHash(o)).txHash||o}catch(e){}if(this.submittedTxs.has(o))return this.submittedTxs.get(o);return this.sdk.eth.getTransactionByHash([o]).then(e=>(e&&(e.hash=n[0]),e));case"eth_getTransactionReceipt":{let e=n[0];try{e=(await this.sdk.txs.getBySafeTxHash(e)).txHash||e}catch(e){}return this.sdk.eth.getTransactionReceipt([e]).then(e=>(e&&(e.transactionHash=n[0]),e))}case"eth_estimateGas":return this.sdk.eth.getEstimateGas(n[0]);case"eth_call":return this.sdk.eth.call([n[0],n[1]]);case"eth_getLogs":return this.sdk.eth.getPastLogs([n[0]]);case"eth_gasPrice":return this.sdk.eth.getGasPrice();case"wallet_getPermissions":return this.sdk.wallet.getPermissions();case"wallet_requestPermissions":return this.sdk.wallet.requestPermissions(n[0]);case"safe_setSettings":return this.sdk.eth.setSafeSettings([n[0]]);default:throw Error(`"${e.method}" not implemented`)}}send(e,t){e||t("Undefined request"),this.request(e).then(n=>t(null,{jsonrpc:"2.0",id:e.id,result:n})).catch(e=>t(e,null))}}t.SafeAppProvider=i},53875:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.getLowerCase=void 0,t.getLowerCase=function(e){return e?e.toLowerCase():e}},68885:function(e){var t,n="object"==typeof Reflect?Reflect:null,s=n&&"function"==typeof n.apply?n.apply:function(e,t,n){return Function.prototype.apply.call(e,t,n)};t=n&&"function"==typeof n.ownKeys?n.ownKeys:Object.getOwnPropertySymbols?function(e){return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))}:function(e){return Object.getOwnPropertyNames(e)};var r=Number.isNaN||function(e){return e!=e};function i(){i.init.call(this)}e.exports=i,e.exports.once=function(e,t){return new Promise(function(n,s){var r;function i(n){e.removeListener(t,o),s(n)}function o(){"function"==typeof e.removeListener&&e.removeListener("error",i),n([].slice.call(arguments))}v(e,t,o,{once:!0}),"error"!==t&&(r={once:!0},"function"==typeof e.on&&v(e,"error",i,r))})},i.EventEmitter=i,i.prototype._events=void 0,i.prototype._eventsCount=0,i.prototype._maxListeners=void 0;var o=10;function a(e){if("function"!=typeof e)throw TypeError('The "listener" argument must be of type Function. Received type '+typeof e)}function u(e){return void 0===e._maxListeners?i.defaultMaxListeners:e._maxListeners}function h(e,t,n,s){if(a(n),void 0===(i=e._events)?(i=e._events=Object.create(null),e._eventsCount=0):(void 0!==i.newListener&&(e.emit("newListener",t,n.listener?n.listener:n),i=e._events),o=i[t]),void 0===o)o=i[t]=n,++e._eventsCount;else if("function"==typeof o?o=i[t]=s?[n,o]:[o,n]:s?o.unshift(n):o.push(n),(r=u(e))>0&&o.length>r&&!o.warned){o.warned=!0;var r,i,o,h=Error("Possible EventEmitter memory leak detected. "+o.length+" "+String(t)+" listeners added. Use emitter.setMaxListeners() to increase limit");h.name="MaxListenersExceededWarning",h.emitter=e,h.type=t,h.count=o.length,console&&console.warn&&console.warn(h)}return e}function c(){if(!this.fired)return(this.target.removeListener(this.type,this.wrapFn),this.fired=!0,0==arguments.length)?this.listener.call(this.target):this.listener.apply(this.target,arguments)}function f(e,t,n){var s={fired:!1,wrapFn:void 0,target:e,type:t,listener:n},r=c.bind(s);return r.listener=n,s.wrapFn=r,r}function l(e,t,n){var s=e._events;if(void 0===s)return[];var r=s[t];return void 0===r?[]:"function"==typeof r?n?[r.listener||r]:[r]:n?function(e){for(var t=Array(e.length),n=0;n<t.length;++n)t[n]=e[n].listener||e[n];return t}(r):p(r,r.length)}function d(e){var t=this._events;if(void 0!==t){var n=t[e];if("function"==typeof n)return 1;if(void 0!==n)return n.length}return 0}function p(e,t){for(var n=Array(t),s=0;s<t;++s)n[s]=e[s];return n}function v(e,t,n,s){if("function"==typeof e.on)s.once?e.once(t,n):e.on(t,n);else if("function"==typeof e.addEventListener)e.addEventListener(t,function r(i){s.once&&e.removeEventListener(t,r),n(i)});else throw TypeError('The "emitter" argument must be of type EventEmitter. Received type '+typeof e)}Object.defineProperty(i,"defaultMaxListeners",{enumerable:!0,get:function(){return o},set:function(e){if("number"!=typeof e||e<0||r(e))throw RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received '+e+".");o=e}}),i.init=function(){(void 0===this._events||this._events===Object.getPrototypeOf(this)._events)&&(this._events=Object.create(null),this._eventsCount=0),this._maxListeners=this._maxListeners||void 0},i.prototype.setMaxListeners=function(e){if("number"!=typeof e||e<0||r(e))throw RangeError('The value of "n" is out of range. It must be a non-negative number. Received '+e+".");return this._maxListeners=e,this},i.prototype.getMaxListeners=function(){return u(this)},i.prototype.emit=function(e){for(var t=[],n=1;n<arguments.length;n++)t.push(arguments[n]);var r="error"===e,i=this._events;if(void 0!==i)r=r&&void 0===i.error;else if(!r)return!1;if(r){if(t.length>0&&(o=t[0]),o instanceof Error)throw o;var o,a=Error("Unhandled error."+(o?" ("+o.message+")":""));throw a.context=o,a}var u=i[e];if(void 0===u)return!1;if("function"==typeof u)s(u,this,t);else for(var h=u.length,c=p(u,h),n=0;n<h;++n)s(c[n],this,t);return!0},i.prototype.addListener=function(e,t){return h(this,e,t,!1)},i.prototype.on=i.prototype.addListener,i.prototype.prependListener=function(e,t){return h(this,e,t,!0)},i.prototype.once=function(e,t){return a(t),this.on(e,f(this,e,t)),this},i.prototype.prependOnceListener=function(e,t){return a(t),this.prependListener(e,f(this,e,t)),this},i.prototype.removeListener=function(e,t){var n,s,r,i,o;if(a(t),void 0===(s=this._events)||void 0===(n=s[e]))return this;if(n===t||n.listener===t)0==--this._eventsCount?this._events=Object.create(null):(delete s[e],s.removeListener&&this.emit("removeListener",e,n.listener||t));else if("function"!=typeof n){for(r=-1,i=n.length-1;i>=0;i--)if(n[i]===t||n[i].listener===t){o=n[i].listener,r=i;break}if(r<0)return this;0===r?n.shift():function(e,t){for(;t+1<e.length;t++)e[t]=e[t+1];e.pop()}(n,r),1===n.length&&(s[e]=n[0]),void 0!==s.removeListener&&this.emit("removeListener",e,o||t)}return this},i.prototype.off=i.prototype.removeListener,i.prototype.removeAllListeners=function(e){var t,n,s;if(void 0===(n=this._events))return this;if(void 0===n.removeListener)return 0==arguments.length?(this._events=Object.create(null),this._eventsCount=0):void 0!==n[e]&&(0==--this._eventsCount?this._events=Object.create(null):delete n[e]),this;if(0==arguments.length){var r,i=Object.keys(n);for(s=0;s<i.length;++s)"removeListener"!==(r=i[s])&&this.removeAllListeners(r);return this.removeAllListeners("removeListener"),this._events=Object.create(null),this._eventsCount=0,this}if("function"==typeof(t=n[e]))this.removeListener(e,t);else if(void 0!==t)for(s=t.length-1;s>=0;s--)this.removeListener(e,t[s]);return this},i.prototype.listeners=function(e){return l(this,e,!0)},i.prototype.rawListeners=function(e){return l(this,e,!1)},i.listenerCount=function(e,t){return"function"==typeof e.listenerCount?e.listenerCount(t):d.call(e,t)},i.prototype.listenerCount=d,i.prototype.eventNames=function(){return this._eventsCount>0?t(this._events):[]}}}]);