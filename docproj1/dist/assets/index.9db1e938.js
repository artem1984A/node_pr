function c3(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const o in r)if(o!=="default"&&!(o in e)){const a=Object.getOwnPropertyDescriptor(r,o);a&&Object.defineProperty(e,o,a.get?a:{enumerable:!0,get:()=>r[o]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const a of o)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function n(o){const a={};return o.integrity&&(a.integrity=o.integrity),o.referrerpolicy&&(a.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?a.credentials="include":o.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(o){if(o.ep)return;o.ep=!0;const a=n(o);fetch(o.href,a)}})();var Wi=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function d3(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var w={exports:{}},H={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var xi=Symbol.for("react.element"),f3=Symbol.for("react.portal"),p3=Symbol.for("react.fragment"),m3=Symbol.for("react.strict_mode"),h3=Symbol.for("react.profiler"),g3=Symbol.for("react.provider"),y3=Symbol.for("react.context"),b3=Symbol.for("react.forward_ref"),v3=Symbol.for("react.suspense"),w3=Symbol.for("react.memo"),S3=Symbol.for("react.lazy"),qm=Symbol.iterator;function x3(e){return e===null||typeof e!="object"?null:(e=qm&&e[qm]||e["@@iterator"],typeof e=="function"?e:null)}var ay={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},iy=Object.assign,sy={};function Wo(e,t,n){this.props=e,this.context=t,this.refs=sy,this.updater=n||ay}Wo.prototype.isReactComponent={};Wo.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Wo.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function ly(){}ly.prototype=Wo.prototype;function bf(e,t,n){this.props=e,this.context=t,this.refs=sy,this.updater=n||ay}var vf=bf.prototype=new ly;vf.constructor=bf;iy(vf,Wo.prototype);vf.isPureReactComponent=!0;var Im=Array.isArray,uy=Object.prototype.hasOwnProperty,wf={current:null},cy={key:!0,ref:!0,__self:!0,__source:!0};function dy(e,t,n){var r,o={},a=null,i=null;if(t!=null)for(r in t.ref!==void 0&&(i=t.ref),t.key!==void 0&&(a=""+t.key),t)uy.call(t,r)&&!cy.hasOwnProperty(r)&&(o[r]=t[r]);var s=arguments.length-2;if(s===1)o.children=n;else if(1<s){for(var l=Array(s),u=0;u<s;u++)l[u]=arguments[u+2];o.children=l}if(e&&e.defaultProps)for(r in s=e.defaultProps,s)o[r]===void 0&&(o[r]=s[r]);return{$$typeof:xi,type:e,key:a,ref:i,props:o,_owner:wf.current}}function C3(e,t){return{$$typeof:xi,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Sf(e){return typeof e=="object"&&e!==null&&e.$$typeof===xi}function k3(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Rm=/\/+/g;function Du(e,t){return typeof e=="object"&&e!==null&&e.key!=null?k3(""+e.key):t.toString(36)}function Ss(e,t,n,r,o){var a=typeof e;(a==="undefined"||a==="boolean")&&(e=null);var i=!1;if(e===null)i=!0;else switch(a){case"string":case"number":i=!0;break;case"object":switch(e.$$typeof){case xi:case f3:i=!0}}if(i)return i=e,o=o(i),e=r===""?"."+Du(i,0):r,Im(o)?(n="",e!=null&&(n=e.replace(Rm,"$&/")+"/"),Ss(o,t,n,"",function(u){return u})):o!=null&&(Sf(o)&&(o=C3(o,n+(!o.key||i&&i.key===o.key?"":(""+o.key).replace(Rm,"$&/")+"/")+e)),t.push(o)),1;if(i=0,r=r===""?".":r+":",Im(e))for(var s=0;s<e.length;s++){a=e[s];var l=r+Du(a,s);i+=Ss(a,t,n,l,o)}else if(l=x3(e),typeof l=="function")for(e=l.call(e),s=0;!(a=e.next()).done;)a=a.value,l=r+Du(a,s++),i+=Ss(a,t,n,l,o);else if(a==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return i}function Hi(e,t,n){if(e==null)return e;var r=[],o=0;return Ss(e,r,"","",function(a){return t.call(n,a,o++)}),r}function _3(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var it={current:null},xs={transition:null},T3={ReactCurrentDispatcher:it,ReactCurrentBatchConfig:xs,ReactCurrentOwner:wf};H.Children={map:Hi,forEach:function(e,t,n){Hi(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return Hi(e,function(){t++}),t},toArray:function(e){return Hi(e,function(t){return t})||[]},only:function(e){if(!Sf(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};H.Component=Wo;H.Fragment=p3;H.Profiler=h3;H.PureComponent=bf;H.StrictMode=m3;H.Suspense=v3;H.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=T3;H.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=iy({},e.props),o=e.key,a=e.ref,i=e._owner;if(t!=null){if(t.ref!==void 0&&(a=t.ref,i=wf.current),t.key!==void 0&&(o=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(l in t)uy.call(t,l)&&!cy.hasOwnProperty(l)&&(r[l]=t[l]===void 0&&s!==void 0?s[l]:t[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){s=Array(l);for(var u=0;u<l;u++)s[u]=arguments[u+2];r.children=s}return{$$typeof:xi,type:e.type,key:o,ref:a,props:r,_owner:i}};H.createContext=function(e){return e={$$typeof:y3,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:g3,_context:e},e.Consumer=e};H.createElement=dy;H.createFactory=function(e){var t=dy.bind(null,e);return t.type=e,t};H.createRef=function(){return{current:null}};H.forwardRef=function(e){return{$$typeof:b3,render:e}};H.isValidElement=Sf;H.lazy=function(e){return{$$typeof:S3,_payload:{_status:-1,_result:e},_init:_3}};H.memo=function(e,t){return{$$typeof:w3,type:e,compare:t===void 0?null:t}};H.startTransition=function(e){var t=xs.transition;xs.transition={};try{e()}finally{xs.transition=t}};H.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};H.useCallback=function(e,t){return it.current.useCallback(e,t)};H.useContext=function(e){return it.current.useContext(e)};H.useDebugValue=function(){};H.useDeferredValue=function(e){return it.current.useDeferredValue(e)};H.useEffect=function(e,t){return it.current.useEffect(e,t)};H.useId=function(){return it.current.useId()};H.useImperativeHandle=function(e,t,n){return it.current.useImperativeHandle(e,t,n)};H.useInsertionEffect=function(e,t){return it.current.useInsertionEffect(e,t)};H.useLayoutEffect=function(e,t){return it.current.useLayoutEffect(e,t)};H.useMemo=function(e,t){return it.current.useMemo(e,t)};H.useReducer=function(e,t,n){return it.current.useReducer(e,t,n)};H.useRef=function(e){return it.current.useRef(e)};H.useState=function(e){return it.current.useState(e)};H.useSyncExternalStore=function(e,t,n){return it.current.useSyncExternalStore(e,t,n)};H.useTransition=function(){return it.current.useTransition()};H.version="18.2.0";(function(e){e.exports=H})(w);const R=d3(w.exports),zm=c3({__proto__:null,default:R},[w.exports]);var zl={exports:{}},Tt={},fy={exports:{}},py={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(I,O){var $=I.length;I.push(O);e:for(;0<$;){var de=$-1>>>1,fe=I[de];if(0<o(fe,O))I[de]=O,I[$]=fe,$=de;else break e}}function n(I){return I.length===0?null:I[0]}function r(I){if(I.length===0)return null;var O=I[0],$=I.pop();if($!==O){I[0]=$;e:for(var de=0,fe=I.length,K=fe>>>1;de<K;){var Se=2*(de+1)-1,Vn=I[Se],Ge=Se+1,Qt=I[Ge];if(0>o(Vn,$))Ge<fe&&0>o(Qt,Vn)?(I[de]=Qt,I[Ge]=$,de=Ge):(I[de]=Vn,I[Se]=$,de=Se);else if(Ge<fe&&0>o(Qt,$))I[de]=Qt,I[Ge]=$,de=Ge;else break e}}return O}function o(I,O){var $=I.sortIndex-O.sortIndex;return $!==0?$:I.id-O.id}if(typeof performance=="object"&&typeof performance.now=="function"){var a=performance;e.unstable_now=function(){return a.now()}}else{var i=Date,s=i.now();e.unstable_now=function(){return i.now()-s}}var l=[],u=[],c=1,d=null,f=3,p=!1,y=!1,v=!1,k=typeof setTimeout=="function"?setTimeout:null,g=typeof clearTimeout=="function"?clearTimeout:null,m=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(I){for(var O=n(u);O!==null;){if(O.callback===null)r(u);else if(O.startTime<=I)r(u),O.sortIndex=O.expirationTime,t(l,O);else break;O=n(u)}}function S(I){if(v=!1,h(I),!y)if(n(l)!==null)y=!0,ce(T);else{var O=n(u);O!==null&&Le(S,O.startTime-I)}}function T(I,O){y=!1,v&&(v=!1,g(q),q=-1),p=!0;var $=f;try{for(h(O),d=n(l);d!==null&&(!(d.expirationTime>O)||I&&!_e());){var de=d.callback;if(typeof de=="function"){d.callback=null,f=d.priorityLevel;var fe=de(d.expirationTime<=O);O=e.unstable_now(),typeof fe=="function"?d.callback=fe:d===n(l)&&r(l),h(O)}else r(l);d=n(l)}if(d!==null)var K=!0;else{var Se=n(u);Se!==null&&Le(S,Se.startTime-O),K=!1}return K}finally{d=null,f=$,p=!1}}var A=!1,E=null,q=-1,j=5,V=-1;function _e(){return!(e.unstable_now()-V<j)}function we(){if(E!==null){var I=e.unstable_now();V=I;var O=!0;try{O=E(!0,I)}finally{O?De():(A=!1,E=null)}}else A=!1}var De;if(typeof m=="function")De=function(){m(we)};else if(typeof MessageChannel<"u"){var lt=new MessageChannel,yt=lt.port2;lt.port1.onmessage=we,De=function(){yt.postMessage(null)}}else De=function(){k(we,0)};function ce(I){E=I,A||(A=!0,De())}function Le(I,O){q=k(function(){I(e.unstable_now())},O)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(I){I.callback=null},e.unstable_continueExecution=function(){y||p||(y=!0,ce(T))},e.unstable_forceFrameRate=function(I){0>I||125<I?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):j=0<I?Math.floor(1e3/I):5},e.unstable_getCurrentPriorityLevel=function(){return f},e.unstable_getFirstCallbackNode=function(){return n(l)},e.unstable_next=function(I){switch(f){case 1:case 2:case 3:var O=3;break;default:O=f}var $=f;f=O;try{return I()}finally{f=$}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(I,O){switch(I){case 1:case 2:case 3:case 4:case 5:break;default:I=3}var $=f;f=I;try{return O()}finally{f=$}},e.unstable_scheduleCallback=function(I,O,$){var de=e.unstable_now();switch(typeof $=="object"&&$!==null?($=$.delay,$=typeof $=="number"&&0<$?de+$:de):$=de,I){case 1:var fe=-1;break;case 2:fe=250;break;case 5:fe=1073741823;break;case 4:fe=1e4;break;default:fe=5e3}return fe=$+fe,I={id:c++,callback:O,priorityLevel:I,startTime:$,expirationTime:fe,sortIndex:-1},$>de?(I.sortIndex=$,t(u,I),n(l)===null&&I===n(u)&&(v?(g(q),q=-1):v=!0,Le(S,$-de))):(I.sortIndex=fe,t(l,I),y||p||(y=!0,ce(T))),I},e.unstable_shouldYield=_e,e.unstable_wrapCallback=function(I){var O=f;return function(){var $=f;f=O;try{return I.apply(this,arguments)}finally{f=$}}}})(py);(function(e){e.exports=py})(fy);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var my=w.exports,kt=fy.exports;function P(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var hy=new Set,Wa={};function Or(e,t){Ro(e,t),Ro(e+"Capture",t)}function Ro(e,t){for(Wa[e]=t,e=0;e<t.length;e++)hy.add(t[e])}var An=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Oc=Object.prototype.hasOwnProperty,F3=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Mm={},Vm={};function E3(e){return Oc.call(Vm,e)?!0:Oc.call(Mm,e)?!1:F3.test(e)?Vm[e]=!0:(Mm[e]=!0,!1)}function A3(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function P3(e,t,n,r){if(t===null||typeof t>"u"||A3(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function st(e,t,n,r,o,a,i){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=o,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=a,this.removeEmptyString=i}var Ue={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){Ue[e]=new st(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];Ue[t]=new st(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){Ue[e]=new st(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){Ue[e]=new st(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){Ue[e]=new st(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){Ue[e]=new st(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){Ue[e]=new st(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){Ue[e]=new st(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){Ue[e]=new st(e,5,!1,e.toLowerCase(),null,!1,!1)});var xf=/[\-:]([a-z])/g;function Cf(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(xf,Cf);Ue[t]=new st(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(xf,Cf);Ue[t]=new st(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(xf,Cf);Ue[t]=new st(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){Ue[e]=new st(e,1,!1,e.toLowerCase(),null,!1,!1)});Ue.xlinkHref=new st("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){Ue[e]=new st(e,1,!1,e.toLowerCase(),null,!0,!0)});function kf(e,t,n,r){var o=Ue.hasOwnProperty(t)?Ue[t]:null;(o!==null?o.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(P3(t,n,o,r)&&(n=null),r||o===null?E3(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):o.mustUseProperty?e[o.propertyName]=n===null?o.type===3?!1:"":n:(t=o.attributeName,r=o.attributeNamespace,n===null?e.removeAttribute(t):(o=o.type,n=o===3||o===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var Mn=my.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ui=Symbol.for("react.element"),no=Symbol.for("react.portal"),ro=Symbol.for("react.fragment"),_f=Symbol.for("react.strict_mode"),$c=Symbol.for("react.profiler"),gy=Symbol.for("react.provider"),yy=Symbol.for("react.context"),Tf=Symbol.for("react.forward_ref"),Wc=Symbol.for("react.suspense"),Hc=Symbol.for("react.suspense_list"),Ff=Symbol.for("react.memo"),$n=Symbol.for("react.lazy"),by=Symbol.for("react.offscreen"),Lm=Symbol.iterator;function na(e){return e===null||typeof e!="object"?null:(e=Lm&&e[Lm]||e["@@iterator"],typeof e=="function"?e:null)}var ke=Object.assign,Ou;function ha(e){if(Ou===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);Ou=t&&t[1]||""}return`
`+Ou+e}var $u=!1;function Wu(e,t){if(!e||$u)return"";$u=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var o=u.stack.split(`
`),a=r.stack.split(`
`),i=o.length-1,s=a.length-1;1<=i&&0<=s&&o[i]!==a[s];)s--;for(;1<=i&&0<=s;i--,s--)if(o[i]!==a[s]){if(i!==1||s!==1)do if(i--,s--,0>s||o[i]!==a[s]){var l=`
`+o[i].replace(" at new "," at ");return e.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",e.displayName)),l}while(1<=i&&0<=s);break}}}finally{$u=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?ha(e):""}function q3(e){switch(e.tag){case 5:return ha(e.type);case 16:return ha("Lazy");case 13:return ha("Suspense");case 19:return ha("SuspenseList");case 0:case 2:case 15:return e=Wu(e.type,!1),e;case 11:return e=Wu(e.type.render,!1),e;case 1:return e=Wu(e.type,!0),e;default:return""}}function Uc(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case ro:return"Fragment";case no:return"Portal";case $c:return"Profiler";case _f:return"StrictMode";case Wc:return"Suspense";case Hc:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case yy:return(e.displayName||"Context")+".Consumer";case gy:return(e._context.displayName||"Context")+".Provider";case Tf:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case Ff:return t=e.displayName||null,t!==null?t:Uc(e.type)||"Memo";case $n:t=e._payload,e=e._init;try{return Uc(e(t))}catch{}}return null}function I3(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Uc(t);case 8:return t===_f?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function ur(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function vy(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function R3(e){var t=vy(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var o=n.get,a=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return o.call(this)},set:function(i){r=""+i,a.call(this,i)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(i){r=""+i},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function Gi(e){e._valueTracker||(e._valueTracker=R3(e))}function wy(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=vy(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Ws(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function Gc(e,t){var n=t.checked;return ke({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n!=null?n:e._wrapperState.initialChecked})}function jm(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=ur(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function Sy(e,t){t=t.checked,t!=null&&kf(e,"checked",t,!1)}function Kc(e,t){Sy(e,t);var n=ur(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?Yc(e,t.type,n):t.hasOwnProperty("defaultValue")&&Yc(e,t.type,ur(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function Nm(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function Yc(e,t,n){(t!=="number"||Ws(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var ga=Array.isArray;function bo(e,t,n,r){if(e=e.options,t){t={};for(var o=0;o<n.length;o++)t["$"+n[o]]=!0;for(n=0;n<e.length;n++)o=t.hasOwnProperty("$"+e[n].value),e[n].selected!==o&&(e[n].selected=o),o&&r&&(e[n].defaultSelected=!0)}else{for(n=""+ur(n),t=null,o=0;o<e.length;o++){if(e[o].value===n){e[o].selected=!0,r&&(e[o].defaultSelected=!0);return}t!==null||e[o].disabled||(t=e[o])}t!==null&&(t.selected=!0)}}function Zc(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(P(91));return ke({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function Bm(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(P(92));if(ga(n)){if(1<n.length)throw Error(P(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:ur(n)}}function xy(e,t){var n=ur(t.value),r=ur(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function Dm(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function Cy(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Xc(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?Cy(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var Ki,ky=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,o){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,o)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(Ki=Ki||document.createElement("div"),Ki.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=Ki.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function Ha(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var xa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},z3=["Webkit","ms","Moz","O"];Object.keys(xa).forEach(function(e){z3.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),xa[t]=xa[e]})});function _y(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||xa.hasOwnProperty(e)&&xa[e]?(""+t).trim():t+"px"}function Ty(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,o=_y(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,o):e[n]=o}}var M3=ke({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qc(e,t){if(t){if(M3[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(P(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(P(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(P(61))}if(t.style!=null&&typeof t.style!="object")throw Error(P(62))}}function Jc(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var ed=null;function Ef(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var td=null,vo=null,wo=null;function Om(e){if(e=_i(e)){if(typeof td!="function")throw Error(P(280));var t=e.stateNode;t&&(t=Nl(t),td(e.stateNode,e.type,t))}}function Fy(e){vo?wo?wo.push(e):wo=[e]:vo=e}function Ey(){if(vo){var e=vo,t=wo;if(wo=vo=null,Om(e),t)for(e=0;e<t.length;e++)Om(t[e])}}function Ay(e,t){return e(t)}function Py(){}var Hu=!1;function qy(e,t,n){if(Hu)return e(t,n);Hu=!0;try{return Ay(e,t,n)}finally{Hu=!1,(vo!==null||wo!==null)&&(Py(),Ey())}}function Ua(e,t){var n=e.stateNode;if(n===null)return null;var r=Nl(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(P(231,t,typeof n));return n}var nd=!1;if(An)try{var ra={};Object.defineProperty(ra,"passive",{get:function(){nd=!0}}),window.addEventListener("test",ra,ra),window.removeEventListener("test",ra,ra)}catch{nd=!1}function V3(e,t,n,r,o,a,i,s,l){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var Ca=!1,Hs=null,Us=!1,rd=null,L3={onError:function(e){Ca=!0,Hs=e}};function j3(e,t,n,r,o,a,i,s,l){Ca=!1,Hs=null,V3.apply(L3,arguments)}function N3(e,t,n,r,o,a,i,s,l){if(j3.apply(this,arguments),Ca){if(Ca){var u=Hs;Ca=!1,Hs=null}else throw Error(P(198));Us||(Us=!0,rd=u)}}function $r(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,(t.flags&4098)!==0&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function Iy(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function $m(e){if($r(e)!==e)throw Error(P(188))}function B3(e){var t=e.alternate;if(!t){if(t=$r(e),t===null)throw Error(P(188));return t!==e?null:e}for(var n=e,r=t;;){var o=n.return;if(o===null)break;var a=o.alternate;if(a===null){if(r=o.return,r!==null){n=r;continue}break}if(o.child===a.child){for(a=o.child;a;){if(a===n)return $m(o),e;if(a===r)return $m(o),t;a=a.sibling}throw Error(P(188))}if(n.return!==r.return)n=o,r=a;else{for(var i=!1,s=o.child;s;){if(s===n){i=!0,n=o,r=a;break}if(s===r){i=!0,r=o,n=a;break}s=s.sibling}if(!i){for(s=a.child;s;){if(s===n){i=!0,n=a,r=o;break}if(s===r){i=!0,r=a,n=o;break}s=s.sibling}if(!i)throw Error(P(189))}}if(n.alternate!==r)throw Error(P(190))}if(n.tag!==3)throw Error(P(188));return n.stateNode.current===n?e:t}function Ry(e){return e=B3(e),e!==null?zy(e):null}function zy(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=zy(e);if(t!==null)return t;e=e.sibling}return null}var My=kt.unstable_scheduleCallback,Wm=kt.unstable_cancelCallback,D3=kt.unstable_shouldYield,O3=kt.unstable_requestPaint,Ee=kt.unstable_now,$3=kt.unstable_getCurrentPriorityLevel,Af=kt.unstable_ImmediatePriority,Vy=kt.unstable_UserBlockingPriority,Gs=kt.unstable_NormalPriority,W3=kt.unstable_LowPriority,Ly=kt.unstable_IdlePriority,Ml=null,cn=null;function H3(e){if(cn&&typeof cn.onCommitFiberRoot=="function")try{cn.onCommitFiberRoot(Ml,e,void 0,(e.current.flags&128)===128)}catch{}}var Gt=Math.clz32?Math.clz32:K3,U3=Math.log,G3=Math.LN2;function K3(e){return e>>>=0,e===0?32:31-(U3(e)/G3|0)|0}var Yi=64,Zi=4194304;function ya(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Ks(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,o=e.suspendedLanes,a=e.pingedLanes,i=n&268435455;if(i!==0){var s=i&~o;s!==0?r=ya(s):(a&=i,a!==0&&(r=ya(a)))}else i=n&~o,i!==0?r=ya(i):a!==0&&(r=ya(a));if(r===0)return 0;if(t!==0&&t!==r&&(t&o)===0&&(o=r&-r,a=t&-t,o>=a||o===16&&(a&4194240)!==0))return t;if((r&4)!==0&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-Gt(t),o=1<<n,r|=e[n],t&=~o;return r}function Y3(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Z3(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,o=e.expirationTimes,a=e.pendingLanes;0<a;){var i=31-Gt(a),s=1<<i,l=o[i];l===-1?((s&n)===0||(s&r)!==0)&&(o[i]=Y3(s,t)):l<=t&&(e.expiredLanes|=s),a&=~s}}function od(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function jy(){var e=Yi;return Yi<<=1,(Yi&4194240)===0&&(Yi=64),e}function Uu(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function Ci(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-Gt(t),e[t]=n}function X3(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var o=31-Gt(n),a=1<<o;t[o]=0,r[o]=-1,e[o]=-1,n&=~a}}function Pf(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-Gt(n),o=1<<r;o&t|e[r]&t&&(e[r]|=t),n&=~o}}var oe=0;function Ny(e){return e&=-e,1<e?4<e?(e&268435455)!==0?16:536870912:4:1}var By,qf,Dy,Oy,$y,ad=!1,Xi=[],Jn=null,er=null,tr=null,Ga=new Map,Ka=new Map,Gn=[],Q3="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Hm(e,t){switch(e){case"focusin":case"focusout":Jn=null;break;case"dragenter":case"dragleave":er=null;break;case"mouseover":case"mouseout":tr=null;break;case"pointerover":case"pointerout":Ga.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ka.delete(t.pointerId)}}function oa(e,t,n,r,o,a){return e===null||e.nativeEvent!==a?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:a,targetContainers:[o]},t!==null&&(t=_i(t),t!==null&&qf(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,o!==null&&t.indexOf(o)===-1&&t.push(o),e)}function J3(e,t,n,r,o){switch(t){case"focusin":return Jn=oa(Jn,e,t,n,r,o),!0;case"dragenter":return er=oa(er,e,t,n,r,o),!0;case"mouseover":return tr=oa(tr,e,t,n,r,o),!0;case"pointerover":var a=o.pointerId;return Ga.set(a,oa(Ga.get(a)||null,e,t,n,r,o)),!0;case"gotpointercapture":return a=o.pointerId,Ka.set(a,oa(Ka.get(a)||null,e,t,n,r,o)),!0}return!1}function Wy(e){var t=Tr(e.target);if(t!==null){var n=$r(t);if(n!==null){if(t=n.tag,t===13){if(t=Iy(n),t!==null){e.blockedOn=t,$y(e.priority,function(){Dy(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function Cs(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=id(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);ed=r,n.target.dispatchEvent(r),ed=null}else return t=_i(n),t!==null&&qf(t),e.blockedOn=n,!1;t.shift()}return!0}function Um(e,t,n){Cs(e)&&n.delete(t)}function e5(){ad=!1,Jn!==null&&Cs(Jn)&&(Jn=null),er!==null&&Cs(er)&&(er=null),tr!==null&&Cs(tr)&&(tr=null),Ga.forEach(Um),Ka.forEach(Um)}function aa(e,t){e.blockedOn===t&&(e.blockedOn=null,ad||(ad=!0,kt.unstable_scheduleCallback(kt.unstable_NormalPriority,e5)))}function Ya(e){function t(o){return aa(o,e)}if(0<Xi.length){aa(Xi[0],e);for(var n=1;n<Xi.length;n++){var r=Xi[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Jn!==null&&aa(Jn,e),er!==null&&aa(er,e),tr!==null&&aa(tr,e),Ga.forEach(t),Ka.forEach(t),n=0;n<Gn.length;n++)r=Gn[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Gn.length&&(n=Gn[0],n.blockedOn===null);)Wy(n),n.blockedOn===null&&Gn.shift()}var So=Mn.ReactCurrentBatchConfig,Ys=!0;function t5(e,t,n,r){var o=oe,a=So.transition;So.transition=null;try{oe=1,If(e,t,n,r)}finally{oe=o,So.transition=a}}function n5(e,t,n,r){var o=oe,a=So.transition;So.transition=null;try{oe=4,If(e,t,n,r)}finally{oe=o,So.transition=a}}function If(e,t,n,r){if(Ys){var o=id(e,t,n,r);if(o===null)nc(e,t,r,Zs,n),Hm(e,r);else if(J3(o,e,t,n,r))r.stopPropagation();else if(Hm(e,r),t&4&&-1<Q3.indexOf(e)){for(;o!==null;){var a=_i(o);if(a!==null&&By(a),a=id(e,t,n,r),a===null&&nc(e,t,r,Zs,n),a===o)break;o=a}o!==null&&r.stopPropagation()}else nc(e,t,r,null,n)}}var Zs=null;function id(e,t,n,r){if(Zs=null,e=Ef(r),e=Tr(e),e!==null)if(t=$r(e),t===null)e=null;else if(n=t.tag,n===13){if(e=Iy(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Zs=e,null}function Hy(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch($3()){case Af:return 1;case Vy:return 4;case Gs:case W3:return 16;case Ly:return 536870912;default:return 16}default:return 16}}var Zn=null,Rf=null,ks=null;function Uy(){if(ks)return ks;var e,t=Rf,n=t.length,r,o="value"in Zn?Zn.value:Zn.textContent,a=o.length;for(e=0;e<n&&t[e]===o[e];e++);var i=n-e;for(r=1;r<=i&&t[n-r]===o[a-r];r++);return ks=o.slice(e,1<r?1-r:void 0)}function _s(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function Qi(){return!0}function Gm(){return!1}function Ft(e){function t(n,r,o,a,i){this._reactName=n,this._targetInst=o,this.type=r,this.nativeEvent=a,this.target=i,this.currentTarget=null;for(var s in e)e.hasOwnProperty(s)&&(n=e[s],this[s]=n?n(a):a[s]);return this.isDefaultPrevented=(a.defaultPrevented!=null?a.defaultPrevented:a.returnValue===!1)?Qi:Gm,this.isPropagationStopped=Gm,this}return ke(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=Qi)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=Qi)},persist:function(){},isPersistent:Qi}),t}var Ho={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},zf=Ft(Ho),ki=ke({},Ho,{view:0,detail:0}),r5=Ft(ki),Gu,Ku,ia,Vl=ke({},ki,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Mf,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ia&&(ia&&e.type==="mousemove"?(Gu=e.screenX-ia.screenX,Ku=e.screenY-ia.screenY):Ku=Gu=0,ia=e),Gu)},movementY:function(e){return"movementY"in e?e.movementY:Ku}}),Km=Ft(Vl),o5=ke({},Vl,{dataTransfer:0}),a5=Ft(o5),i5=ke({},ki,{relatedTarget:0}),Yu=Ft(i5),s5=ke({},Ho,{animationName:0,elapsedTime:0,pseudoElement:0}),l5=Ft(s5),u5=ke({},Ho,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),c5=Ft(u5),d5=ke({},Ho,{data:0}),Ym=Ft(d5),f5={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},p5={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},m5={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function h5(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=m5[e])?!!t[e]:!1}function Mf(){return h5}var g5=ke({},ki,{key:function(e){if(e.key){var t=f5[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=_s(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?p5[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Mf,charCode:function(e){return e.type==="keypress"?_s(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?_s(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),y5=Ft(g5),b5=ke({},Vl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Zm=Ft(b5),v5=ke({},ki,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Mf}),w5=Ft(v5),S5=ke({},Ho,{propertyName:0,elapsedTime:0,pseudoElement:0}),x5=Ft(S5),C5=ke({},Vl,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),k5=Ft(C5),_5=[9,13,27,32],Vf=An&&"CompositionEvent"in window,ka=null;An&&"documentMode"in document&&(ka=document.documentMode);var T5=An&&"TextEvent"in window&&!ka,Gy=An&&(!Vf||ka&&8<ka&&11>=ka),Xm=String.fromCharCode(32),Qm=!1;function Ky(e,t){switch(e){case"keyup":return _5.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Yy(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oo=!1;function F5(e,t){switch(e){case"compositionend":return Yy(t);case"keypress":return t.which!==32?null:(Qm=!0,Xm);case"textInput":return e=t.data,e===Xm&&Qm?null:e;default:return null}}function E5(e,t){if(oo)return e==="compositionend"||!Vf&&Ky(e,t)?(e=Uy(),ks=Rf=Zn=null,oo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return Gy&&t.locale!=="ko"?null:t.data;default:return null}}var A5={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jm(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!A5[e.type]:t==="textarea"}function Zy(e,t,n,r){Fy(r),t=Xs(t,"onChange"),0<t.length&&(n=new zf("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var _a=null,Za=null;function P5(e){s1(e,0)}function Ll(e){var t=so(e);if(wy(t))return e}function q5(e,t){if(e==="change")return t}var Xy=!1;if(An){var Zu;if(An){var Xu="oninput"in document;if(!Xu){var e0=document.createElement("div");e0.setAttribute("oninput","return;"),Xu=typeof e0.oninput=="function"}Zu=Xu}else Zu=!1;Xy=Zu&&(!document.documentMode||9<document.documentMode)}function t0(){_a&&(_a.detachEvent("onpropertychange",Qy),Za=_a=null)}function Qy(e){if(e.propertyName==="value"&&Ll(Za)){var t=[];Zy(t,Za,e,Ef(e)),qy(P5,t)}}function I5(e,t,n){e==="focusin"?(t0(),_a=t,Za=n,_a.attachEvent("onpropertychange",Qy)):e==="focusout"&&t0()}function R5(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Ll(Za)}function z5(e,t){if(e==="click")return Ll(t)}function M5(e,t){if(e==="input"||e==="change")return Ll(t)}function V5(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Zt=typeof Object.is=="function"?Object.is:V5;function Xa(e,t){if(Zt(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var o=n[r];if(!Oc.call(t,o)||!Zt(e[o],t[o]))return!1}return!0}function n0(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function r0(e,t){var n=n0(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=n0(n)}}function Jy(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?Jy(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function e1(){for(var e=window,t=Ws();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Ws(e.document)}return t}function Lf(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function L5(e){var t=e1(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&Jy(n.ownerDocument.documentElement,n)){if(r!==null&&Lf(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var o=n.textContent.length,a=Math.min(r.start,o);r=r.end===void 0?a:Math.min(r.end,o),!e.extend&&a>r&&(o=r,r=a,a=o),o=r0(n,a);var i=r0(n,r);o&&i&&(e.rangeCount!==1||e.anchorNode!==o.node||e.anchorOffset!==o.offset||e.focusNode!==i.node||e.focusOffset!==i.offset)&&(t=t.createRange(),t.setStart(o.node,o.offset),e.removeAllRanges(),a>r?(e.addRange(t),e.extend(i.node,i.offset)):(t.setEnd(i.node,i.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var j5=An&&"documentMode"in document&&11>=document.documentMode,ao=null,sd=null,Ta=null,ld=!1;function o0(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ld||ao==null||ao!==Ws(r)||(r=ao,"selectionStart"in r&&Lf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),Ta&&Xa(Ta,r)||(Ta=r,r=Xs(sd,"onSelect"),0<r.length&&(t=new zf("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=ao)))}function Ji(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var io={animationend:Ji("Animation","AnimationEnd"),animationiteration:Ji("Animation","AnimationIteration"),animationstart:Ji("Animation","AnimationStart"),transitionend:Ji("Transition","TransitionEnd")},Qu={},t1={};An&&(t1=document.createElement("div").style,"AnimationEvent"in window||(delete io.animationend.animation,delete io.animationiteration.animation,delete io.animationstart.animation),"TransitionEvent"in window||delete io.transitionend.transition);function jl(e){if(Qu[e])return Qu[e];if(!io[e])return e;var t=io[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in t1)return Qu[e]=t[n];return e}var n1=jl("animationend"),r1=jl("animationiteration"),o1=jl("animationstart"),a1=jl("transitionend"),i1=new Map,a0="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function pr(e,t){i1.set(e,t),Or(t,[e])}for(var Ju=0;Ju<a0.length;Ju++){var ec=a0[Ju],N5=ec.toLowerCase(),B5=ec[0].toUpperCase()+ec.slice(1);pr(N5,"on"+B5)}pr(n1,"onAnimationEnd");pr(r1,"onAnimationIteration");pr(o1,"onAnimationStart");pr("dblclick","onDoubleClick");pr("focusin","onFocus");pr("focusout","onBlur");pr(a1,"onTransitionEnd");Ro("onMouseEnter",["mouseout","mouseover"]);Ro("onMouseLeave",["mouseout","mouseover"]);Ro("onPointerEnter",["pointerout","pointerover"]);Ro("onPointerLeave",["pointerout","pointerover"]);Or("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Or("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Or("onBeforeInput",["compositionend","keypress","textInput","paste"]);Or("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Or("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ba="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),D5=new Set("cancel close invalid load scroll toggle".split(" ").concat(ba));function i0(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,N3(r,t,void 0,e),e.currentTarget=null}function s1(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],o=r.event;r=r.listeners;e:{var a=void 0;if(t)for(var i=r.length-1;0<=i;i--){var s=r[i],l=s.instance,u=s.currentTarget;if(s=s.listener,l!==a&&o.isPropagationStopped())break e;i0(o,s,u),a=l}else for(i=0;i<r.length;i++){if(s=r[i],l=s.instance,u=s.currentTarget,s=s.listener,l!==a&&o.isPropagationStopped())break e;i0(o,s,u),a=l}}}if(Us)throw e=rd,Us=!1,rd=null,e}function pe(e,t){var n=t[pd];n===void 0&&(n=t[pd]=new Set);var r=e+"__bubble";n.has(r)||(l1(t,e,2,!1),n.add(r))}function tc(e,t,n){var r=0;t&&(r|=4),l1(n,e,r,t)}var es="_reactListening"+Math.random().toString(36).slice(2);function Qa(e){if(!e[es]){e[es]=!0,hy.forEach(function(n){n!=="selectionchange"&&(D5.has(n)||tc(n,!1,e),tc(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[es]||(t[es]=!0,tc("selectionchange",!1,t))}}function l1(e,t,n,r){switch(Hy(t)){case 1:var o=t5;break;case 4:o=n5;break;default:o=If}n=o.bind(null,t,n,e),o=void 0,!nd||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(o=!0),r?o!==void 0?e.addEventListener(t,n,{capture:!0,passive:o}):e.addEventListener(t,n,!0):o!==void 0?e.addEventListener(t,n,{passive:o}):e.addEventListener(t,n,!1)}function nc(e,t,n,r,o){var a=r;if((t&1)===0&&(t&2)===0&&r!==null)e:for(;;){if(r===null)return;var i=r.tag;if(i===3||i===4){var s=r.stateNode.containerInfo;if(s===o||s.nodeType===8&&s.parentNode===o)break;if(i===4)for(i=r.return;i!==null;){var l=i.tag;if((l===3||l===4)&&(l=i.stateNode.containerInfo,l===o||l.nodeType===8&&l.parentNode===o))return;i=i.return}for(;s!==null;){if(i=Tr(s),i===null)return;if(l=i.tag,l===5||l===6){r=a=i;continue e}s=s.parentNode}}r=r.return}qy(function(){var u=a,c=Ef(n),d=[];e:{var f=i1.get(e);if(f!==void 0){var p=zf,y=e;switch(e){case"keypress":if(_s(n)===0)break e;case"keydown":case"keyup":p=y5;break;case"focusin":y="focus",p=Yu;break;case"focusout":y="blur",p=Yu;break;case"beforeblur":case"afterblur":p=Yu;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Km;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=a5;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=w5;break;case n1:case r1:case o1:p=l5;break;case a1:p=x5;break;case"scroll":p=r5;break;case"wheel":p=k5;break;case"copy":case"cut":case"paste":p=c5;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Zm}var v=(t&4)!==0,k=!v&&e==="scroll",g=v?f!==null?f+"Capture":null:f;v=[];for(var m=u,h;m!==null;){h=m;var S=h.stateNode;if(h.tag===5&&S!==null&&(h=S,g!==null&&(S=Ua(m,g),S!=null&&v.push(Ja(m,S,h)))),k)break;m=m.return}0<v.length&&(f=new p(f,y,null,n,c),d.push({event:f,listeners:v}))}}if((t&7)===0){e:{if(f=e==="mouseover"||e==="pointerover",p=e==="mouseout"||e==="pointerout",f&&n!==ed&&(y=n.relatedTarget||n.fromElement)&&(Tr(y)||y[Pn]))break e;if((p||f)&&(f=c.window===c?c:(f=c.ownerDocument)?f.defaultView||f.parentWindow:window,p?(y=n.relatedTarget||n.toElement,p=u,y=y?Tr(y):null,y!==null&&(k=$r(y),y!==k||y.tag!==5&&y.tag!==6)&&(y=null)):(p=null,y=u),p!==y)){if(v=Km,S="onMouseLeave",g="onMouseEnter",m="mouse",(e==="pointerout"||e==="pointerover")&&(v=Zm,S="onPointerLeave",g="onPointerEnter",m="pointer"),k=p==null?f:so(p),h=y==null?f:so(y),f=new v(S,m+"leave",p,n,c),f.target=k,f.relatedTarget=h,S=null,Tr(c)===u&&(v=new v(g,m+"enter",y,n,c),v.target=h,v.relatedTarget=k,S=v),k=S,p&&y)t:{for(v=p,g=y,m=0,h=v;h;h=Xr(h))m++;for(h=0,S=g;S;S=Xr(S))h++;for(;0<m-h;)v=Xr(v),m--;for(;0<h-m;)g=Xr(g),h--;for(;m--;){if(v===g||g!==null&&v===g.alternate)break t;v=Xr(v),g=Xr(g)}v=null}else v=null;p!==null&&s0(d,f,p,v,!1),y!==null&&k!==null&&s0(d,k,y,v,!0)}}e:{if(f=u?so(u):window,p=f.nodeName&&f.nodeName.toLowerCase(),p==="select"||p==="input"&&f.type==="file")var T=q5;else if(Jm(f))if(Xy)T=M5;else{T=R5;var A=I5}else(p=f.nodeName)&&p.toLowerCase()==="input"&&(f.type==="checkbox"||f.type==="radio")&&(T=z5);if(T&&(T=T(e,u))){Zy(d,T,n,c);break e}A&&A(e,f,u),e==="focusout"&&(A=f._wrapperState)&&A.controlled&&f.type==="number"&&Yc(f,"number",f.value)}switch(A=u?so(u):window,e){case"focusin":(Jm(A)||A.contentEditable==="true")&&(ao=A,sd=u,Ta=null);break;case"focusout":Ta=sd=ao=null;break;case"mousedown":ld=!0;break;case"contextmenu":case"mouseup":case"dragend":ld=!1,o0(d,n,c);break;case"selectionchange":if(j5)break;case"keydown":case"keyup":o0(d,n,c)}var E;if(Vf)e:{switch(e){case"compositionstart":var q="onCompositionStart";break e;case"compositionend":q="onCompositionEnd";break e;case"compositionupdate":q="onCompositionUpdate";break e}q=void 0}else oo?Ky(e,n)&&(q="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(q="onCompositionStart");q&&(Gy&&n.locale!=="ko"&&(oo||q!=="onCompositionStart"?q==="onCompositionEnd"&&oo&&(E=Uy()):(Zn=c,Rf="value"in Zn?Zn.value:Zn.textContent,oo=!0)),A=Xs(u,q),0<A.length&&(q=new Ym(q,e,null,n,c),d.push({event:q,listeners:A}),E?q.data=E:(E=Yy(n),E!==null&&(q.data=E)))),(E=T5?F5(e,n):E5(e,n))&&(u=Xs(u,"onBeforeInput"),0<u.length&&(c=new Ym("onBeforeInput","beforeinput",null,n,c),d.push({event:c,listeners:u}),c.data=E))}s1(d,t)})}function Ja(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Xs(e,t){for(var n=t+"Capture",r=[];e!==null;){var o=e,a=o.stateNode;o.tag===5&&a!==null&&(o=a,a=Ua(e,n),a!=null&&r.unshift(Ja(e,a,o)),a=Ua(e,t),a!=null&&r.push(Ja(e,a,o))),e=e.return}return r}function Xr(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function s0(e,t,n,r,o){for(var a=t._reactName,i=[];n!==null&&n!==r;){var s=n,l=s.alternate,u=s.stateNode;if(l!==null&&l===r)break;s.tag===5&&u!==null&&(s=u,o?(l=Ua(n,a),l!=null&&i.unshift(Ja(n,l,s))):o||(l=Ua(n,a),l!=null&&i.push(Ja(n,l,s)))),n=n.return}i.length!==0&&e.push({event:t,listeners:i})}var O5=/\r\n?/g,$5=/\u0000|\uFFFD/g;function l0(e){return(typeof e=="string"?e:""+e).replace(O5,`
`).replace($5,"")}function ts(e,t,n){if(t=l0(t),l0(e)!==t&&n)throw Error(P(425))}function Qs(){}var ud=null,cd=null;function dd(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var fd=typeof setTimeout=="function"?setTimeout:void 0,W5=typeof clearTimeout=="function"?clearTimeout:void 0,u0=typeof Promise=="function"?Promise:void 0,H5=typeof queueMicrotask=="function"?queueMicrotask:typeof u0<"u"?function(e){return u0.resolve(null).then(e).catch(U5)}:fd;function U5(e){setTimeout(function(){throw e})}function rc(e,t){var n=t,r=0;do{var o=n.nextSibling;if(e.removeChild(n),o&&o.nodeType===8)if(n=o.data,n==="/$"){if(r===0){e.removeChild(o),Ya(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=o}while(n);Ya(t)}function nr(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function c0(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Uo=Math.random().toString(36).slice(2),sn="__reactFiber$"+Uo,ei="__reactProps$"+Uo,Pn="__reactContainer$"+Uo,pd="__reactEvents$"+Uo,G5="__reactListeners$"+Uo,K5="__reactHandles$"+Uo;function Tr(e){var t=e[sn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[Pn]||n[sn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=c0(e);e!==null;){if(n=e[sn])return n;e=c0(e)}return t}e=n,n=e.parentNode}return null}function _i(e){return e=e[sn]||e[Pn],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function so(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(P(33))}function Nl(e){return e[ei]||null}var md=[],lo=-1;function mr(e){return{current:e}}function he(e){0>lo||(e.current=md[lo],md[lo]=null,lo--)}function ue(e,t){lo++,md[lo]=e.current,e.current=t}var cr={},Qe=mr(cr),ft=mr(!1),Lr=cr;function zo(e,t){var n=e.type.contextTypes;if(!n)return cr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var o={},a;for(a in n)o[a]=t[a];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=o),o}function pt(e){return e=e.childContextTypes,e!=null}function Js(){he(ft),he(Qe)}function d0(e,t,n){if(Qe.current!==cr)throw Error(P(168));ue(Qe,t),ue(ft,n)}function u1(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var o in r)if(!(o in t))throw Error(P(108,I3(e)||"Unknown",o));return ke({},n,r)}function el(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||cr,Lr=Qe.current,ue(Qe,e),ue(ft,ft.current),!0}function f0(e,t,n){var r=e.stateNode;if(!r)throw Error(P(169));n?(e=u1(e,t,Lr),r.__reactInternalMemoizedMergedChildContext=e,he(ft),he(Qe),ue(Qe,e)):he(ft),ue(ft,n)}var Cn=null,Bl=!1,oc=!1;function c1(e){Cn===null?Cn=[e]:Cn.push(e)}function Y5(e){Bl=!0,c1(e)}function hr(){if(!oc&&Cn!==null){oc=!0;var e=0,t=oe;try{var n=Cn;for(oe=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}Cn=null,Bl=!1}catch(o){throw Cn!==null&&(Cn=Cn.slice(e+1)),My(Af,hr),o}finally{oe=t,oc=!1}}return null}var uo=[],co=0,tl=null,nl=0,It=[],Rt=0,jr=null,_n=1,Tn="";function Sr(e,t){uo[co++]=nl,uo[co++]=tl,tl=e,nl=t}function d1(e,t,n){It[Rt++]=_n,It[Rt++]=Tn,It[Rt++]=jr,jr=e;var r=_n;e=Tn;var o=32-Gt(r)-1;r&=~(1<<o),n+=1;var a=32-Gt(t)+o;if(30<a){var i=o-o%5;a=(r&(1<<i)-1).toString(32),r>>=i,o-=i,_n=1<<32-Gt(t)+o|n<<o|r,Tn=a+e}else _n=1<<a|n<<o|r,Tn=e}function jf(e){e.return!==null&&(Sr(e,1),d1(e,1,0))}function Nf(e){for(;e===tl;)tl=uo[--co],uo[co]=null,nl=uo[--co],uo[co]=null;for(;e===jr;)jr=It[--Rt],It[Rt]=null,Tn=It[--Rt],It[Rt]=null,_n=It[--Rt],It[Rt]=null}var St=null,wt=null,ve=!1,Ht=null;function f1(e,t){var n=zt(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function p0(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,St=e,wt=nr(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,St=e,wt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=jr!==null?{id:_n,overflow:Tn}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=zt(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,St=e,wt=null,!0):!1;default:return!1}}function hd(e){return(e.mode&1)!==0&&(e.flags&128)===0}function gd(e){if(ve){var t=wt;if(t){var n=t;if(!p0(e,t)){if(hd(e))throw Error(P(418));t=nr(n.nextSibling);var r=St;t&&p0(e,t)?f1(r,n):(e.flags=e.flags&-4097|2,ve=!1,St=e)}}else{if(hd(e))throw Error(P(418));e.flags=e.flags&-4097|2,ve=!1,St=e}}}function m0(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;St=e}function ns(e){if(e!==St)return!1;if(!ve)return m0(e),ve=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!dd(e.type,e.memoizedProps)),t&&(t=wt)){if(hd(e))throw p1(),Error(P(418));for(;t;)f1(e,t),t=nr(t.nextSibling)}if(m0(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(P(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){wt=nr(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}wt=null}}else wt=St?nr(e.stateNode.nextSibling):null;return!0}function p1(){for(var e=wt;e;)e=nr(e.nextSibling)}function Mo(){wt=St=null,ve=!1}function Bf(e){Ht===null?Ht=[e]:Ht.push(e)}var Z5=Mn.ReactCurrentBatchConfig;function $t(e,t){if(e&&e.defaultProps){t=ke({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}var rl=mr(null),ol=null,fo=null,Df=null;function Of(){Df=fo=ol=null}function $f(e){var t=rl.current;he(rl),e._currentValue=t}function yd(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function xo(e,t){ol=e,Df=fo=null,e=e.dependencies,e!==null&&e.firstContext!==null&&((e.lanes&t)!==0&&(dt=!0),e.firstContext=null)}function Lt(e){var t=e._currentValue;if(Df!==e)if(e={context:e,memoizedValue:t,next:null},fo===null){if(ol===null)throw Error(P(308));fo=e,ol.dependencies={lanes:0,firstContext:e}}else fo=fo.next=e;return t}var Fr=null;function Wf(e){Fr===null?Fr=[e]:Fr.push(e)}function m1(e,t,n,r){var o=t.interleaved;return o===null?(n.next=n,Wf(t)):(n.next=o.next,o.next=n),t.interleaved=n,qn(e,r)}function qn(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Wn=!1;function Hf(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function h1(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function En(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function rr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,(X&2)!==0){var o=r.pending;return o===null?t.next=t:(t.next=o.next,o.next=t),r.pending=t,qn(e,n)}return o=r.interleaved,o===null?(t.next=t,Wf(r)):(t.next=o.next,o.next=t),r.interleaved=t,qn(e,n)}function Ts(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pf(e,n)}}function h0(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var o=null,a=null;if(n=n.firstBaseUpdate,n!==null){do{var i={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};a===null?o=a=i:a=a.next=i,n=n.next}while(n!==null);a===null?o=a=t:a=a.next=t}else o=a=t;n={baseState:r.baseState,firstBaseUpdate:o,lastBaseUpdate:a,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function al(e,t,n,r){var o=e.updateQueue;Wn=!1;var a=o.firstBaseUpdate,i=o.lastBaseUpdate,s=o.shared.pending;if(s!==null){o.shared.pending=null;var l=s,u=l.next;l.next=null,i===null?a=u:i.next=u,i=l;var c=e.alternate;c!==null&&(c=c.updateQueue,s=c.lastBaseUpdate,s!==i&&(s===null?c.firstBaseUpdate=u:s.next=u,c.lastBaseUpdate=l))}if(a!==null){var d=o.baseState;i=0,c=u=l=null,s=a;do{var f=s.lane,p=s.eventTime;if((r&f)===f){c!==null&&(c=c.next={eventTime:p,lane:0,tag:s.tag,payload:s.payload,callback:s.callback,next:null});e:{var y=e,v=s;switch(f=t,p=n,v.tag){case 1:if(y=v.payload,typeof y=="function"){d=y.call(p,d,f);break e}d=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=v.payload,f=typeof y=="function"?y.call(p,d,f):y,f==null)break e;d=ke({},d,f);break e;case 2:Wn=!0}}s.callback!==null&&s.lane!==0&&(e.flags|=64,f=o.effects,f===null?o.effects=[s]:f.push(s))}else p={eventTime:p,lane:f,tag:s.tag,payload:s.payload,callback:s.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,i|=f;if(s=s.next,s===null){if(s=o.shared.pending,s===null)break;f=s,s=f.next,f.next=null,o.lastBaseUpdate=f,o.shared.pending=null}}while(1);if(c===null&&(l=d),o.baseState=l,o.firstBaseUpdate=u,o.lastBaseUpdate=c,t=o.shared.interleaved,t!==null){o=t;do i|=o.lane,o=o.next;while(o!==t)}else a===null&&(o.shared.lanes=0);Br|=i,e.lanes=i,e.memoizedState=d}}function g0(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],o=r.callback;if(o!==null){if(r.callback=null,r=n,typeof o!="function")throw Error(P(191,o));o.call(r)}}}var g1=new my.Component().refs;function bd(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:ke({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Dl={isMounted:function(e){return(e=e._reactInternals)?$r(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=ot(),o=ar(e),a=En(r,o);a.payload=t,n!=null&&(a.callback=n),t=rr(e,a,o),t!==null&&(Kt(t,e,o,r),Ts(t,e,o))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=ot(),o=ar(e),a=En(r,o);a.tag=1,a.payload=t,n!=null&&(a.callback=n),t=rr(e,a,o),t!==null&&(Kt(t,e,o,r),Ts(t,e,o))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=ot(),r=ar(e),o=En(n,r);o.tag=2,t!=null&&(o.callback=t),t=rr(e,o,r),t!==null&&(Kt(t,e,r,n),Ts(t,e,r))}};function y0(e,t,n,r,o,a,i){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,a,i):t.prototype&&t.prototype.isPureReactComponent?!Xa(n,r)||!Xa(o,a):!0}function y1(e,t,n){var r=!1,o=cr,a=t.contextType;return typeof a=="object"&&a!==null?a=Lt(a):(o=pt(t)?Lr:Qe.current,r=t.contextTypes,a=(r=r!=null)?zo(e,o):cr),t=new t(n,a),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Dl,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=o,e.__reactInternalMemoizedMaskedChildContext=a),t}function b0(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Dl.enqueueReplaceState(t,t.state,null)}function vd(e,t,n,r){var o=e.stateNode;o.props=n,o.state=e.memoizedState,o.refs=g1,Hf(e);var a=t.contextType;typeof a=="object"&&a!==null?o.context=Lt(a):(a=pt(t)?Lr:Qe.current,o.context=zo(e,a)),o.state=e.memoizedState,a=t.getDerivedStateFromProps,typeof a=="function"&&(bd(e,t,a,n),o.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof o.getSnapshotBeforeUpdate=="function"||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(t=o.state,typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount(),t!==o.state&&Dl.enqueueReplaceState(o,o.state,null),al(e,n,o,r),o.state=e.memoizedState),typeof o.componentDidMount=="function"&&(e.flags|=4194308)}function sa(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(P(309));var r=n.stateNode}if(!r)throw Error(P(147,e));var o=r,a=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===a?t.ref:(t=function(i){var s=o.refs;s===g1&&(s=o.refs={}),i===null?delete s[a]:s[a]=i},t._stringRef=a,t)}if(typeof e!="string")throw Error(P(284));if(!n._owner)throw Error(P(290,e))}return e}function rs(e,t){throw e=Object.prototype.toString.call(t),Error(P(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function v0(e){var t=e._init;return t(e._payload)}function b1(e){function t(g,m){if(e){var h=g.deletions;h===null?(g.deletions=[m],g.flags|=16):h.push(m)}}function n(g,m){if(!e)return null;for(;m!==null;)t(g,m),m=m.sibling;return null}function r(g,m){for(g=new Map;m!==null;)m.key!==null?g.set(m.key,m):g.set(m.index,m),m=m.sibling;return g}function o(g,m){return g=ir(g,m),g.index=0,g.sibling=null,g}function a(g,m,h){return g.index=h,e?(h=g.alternate,h!==null?(h=h.index,h<m?(g.flags|=2,m):h):(g.flags|=2,m)):(g.flags|=1048576,m)}function i(g){return e&&g.alternate===null&&(g.flags|=2),g}function s(g,m,h,S){return m===null||m.tag!==6?(m=dc(h,g.mode,S),m.return=g,m):(m=o(m,h),m.return=g,m)}function l(g,m,h,S){var T=h.type;return T===ro?c(g,m,h.props.children,S,h.key):m!==null&&(m.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===$n&&v0(T)===m.type)?(S=o(m,h.props),S.ref=sa(g,m,h),S.return=g,S):(S=Is(h.type,h.key,h.props,null,g.mode,S),S.ref=sa(g,m,h),S.return=g,S)}function u(g,m,h,S){return m===null||m.tag!==4||m.stateNode.containerInfo!==h.containerInfo||m.stateNode.implementation!==h.implementation?(m=fc(h,g.mode,S),m.return=g,m):(m=o(m,h.children||[]),m.return=g,m)}function c(g,m,h,S,T){return m===null||m.tag!==7?(m=Rr(h,g.mode,S,T),m.return=g,m):(m=o(m,h),m.return=g,m)}function d(g,m,h){if(typeof m=="string"&&m!==""||typeof m=="number")return m=dc(""+m,g.mode,h),m.return=g,m;if(typeof m=="object"&&m!==null){switch(m.$$typeof){case Ui:return h=Is(m.type,m.key,m.props,null,g.mode,h),h.ref=sa(g,null,m),h.return=g,h;case no:return m=fc(m,g.mode,h),m.return=g,m;case $n:var S=m._init;return d(g,S(m._payload),h)}if(ga(m)||na(m))return m=Rr(m,g.mode,h,null),m.return=g,m;rs(g,m)}return null}function f(g,m,h,S){var T=m!==null?m.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return T!==null?null:s(g,m,""+h,S);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Ui:return h.key===T?l(g,m,h,S):null;case no:return h.key===T?u(g,m,h,S):null;case $n:return T=h._init,f(g,m,T(h._payload),S)}if(ga(h)||na(h))return T!==null?null:c(g,m,h,S,null);rs(g,h)}return null}function p(g,m,h,S,T){if(typeof S=="string"&&S!==""||typeof S=="number")return g=g.get(h)||null,s(m,g,""+S,T);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ui:return g=g.get(S.key===null?h:S.key)||null,l(m,g,S,T);case no:return g=g.get(S.key===null?h:S.key)||null,u(m,g,S,T);case $n:var A=S._init;return p(g,m,h,A(S._payload),T)}if(ga(S)||na(S))return g=g.get(h)||null,c(m,g,S,T,null);rs(m,S)}return null}function y(g,m,h,S){for(var T=null,A=null,E=m,q=m=0,j=null;E!==null&&q<h.length;q++){E.index>q?(j=E,E=null):j=E.sibling;var V=f(g,E,h[q],S);if(V===null){E===null&&(E=j);break}e&&E&&V.alternate===null&&t(g,E),m=a(V,m,q),A===null?T=V:A.sibling=V,A=V,E=j}if(q===h.length)return n(g,E),ve&&Sr(g,q),T;if(E===null){for(;q<h.length;q++)E=d(g,h[q],S),E!==null&&(m=a(E,m,q),A===null?T=E:A.sibling=E,A=E);return ve&&Sr(g,q),T}for(E=r(g,E);q<h.length;q++)j=p(E,g,q,h[q],S),j!==null&&(e&&j.alternate!==null&&E.delete(j.key===null?q:j.key),m=a(j,m,q),A===null?T=j:A.sibling=j,A=j);return e&&E.forEach(function(_e){return t(g,_e)}),ve&&Sr(g,q),T}function v(g,m,h,S){var T=na(h);if(typeof T!="function")throw Error(P(150));if(h=T.call(h),h==null)throw Error(P(151));for(var A=T=null,E=m,q=m=0,j=null,V=h.next();E!==null&&!V.done;q++,V=h.next()){E.index>q?(j=E,E=null):j=E.sibling;var _e=f(g,E,V.value,S);if(_e===null){E===null&&(E=j);break}e&&E&&_e.alternate===null&&t(g,E),m=a(_e,m,q),A===null?T=_e:A.sibling=_e,A=_e,E=j}if(V.done)return n(g,E),ve&&Sr(g,q),T;if(E===null){for(;!V.done;q++,V=h.next())V=d(g,V.value,S),V!==null&&(m=a(V,m,q),A===null?T=V:A.sibling=V,A=V);return ve&&Sr(g,q),T}for(E=r(g,E);!V.done;q++,V=h.next())V=p(E,g,q,V.value,S),V!==null&&(e&&V.alternate!==null&&E.delete(V.key===null?q:V.key),m=a(V,m,q),A===null?T=V:A.sibling=V,A=V);return e&&E.forEach(function(we){return t(g,we)}),ve&&Sr(g,q),T}function k(g,m,h,S){if(typeof h=="object"&&h!==null&&h.type===ro&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Ui:e:{for(var T=h.key,A=m;A!==null;){if(A.key===T){if(T=h.type,T===ro){if(A.tag===7){n(g,A.sibling),m=o(A,h.props.children),m.return=g,g=m;break e}}else if(A.elementType===T||typeof T=="object"&&T!==null&&T.$$typeof===$n&&v0(T)===A.type){n(g,A.sibling),m=o(A,h.props),m.ref=sa(g,A,h),m.return=g,g=m;break e}n(g,A);break}else t(g,A);A=A.sibling}h.type===ro?(m=Rr(h.props.children,g.mode,S,h.key),m.return=g,g=m):(S=Is(h.type,h.key,h.props,null,g.mode,S),S.ref=sa(g,m,h),S.return=g,g=S)}return i(g);case no:e:{for(A=h.key;m!==null;){if(m.key===A)if(m.tag===4&&m.stateNode.containerInfo===h.containerInfo&&m.stateNode.implementation===h.implementation){n(g,m.sibling),m=o(m,h.children||[]),m.return=g,g=m;break e}else{n(g,m);break}else t(g,m);m=m.sibling}m=fc(h,g.mode,S),m.return=g,g=m}return i(g);case $n:return A=h._init,k(g,m,A(h._payload),S)}if(ga(h))return y(g,m,h,S);if(na(h))return v(g,m,h,S);rs(g,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,m!==null&&m.tag===6?(n(g,m.sibling),m=o(m,h),m.return=g,g=m):(n(g,m),m=dc(h,g.mode,S),m.return=g,g=m),i(g)):n(g,m)}return k}var Vo=b1(!0),v1=b1(!1),Ti={},dn=mr(Ti),ti=mr(Ti),ni=mr(Ti);function Er(e){if(e===Ti)throw Error(P(174));return e}function Uf(e,t){switch(ue(ni,t),ue(ti,e),ue(dn,Ti),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:Xc(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=Xc(t,e)}he(dn),ue(dn,t)}function Lo(){he(dn),he(ti),he(ni)}function w1(e){Er(ni.current);var t=Er(dn.current),n=Xc(t,e.type);t!==n&&(ue(ti,e),ue(dn,n))}function Gf(e){ti.current===e&&(he(dn),he(ti))}var xe=mr(0);function il(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if((t.flags&128)!==0)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var ac=[];function Kf(){for(var e=0;e<ac.length;e++)ac[e]._workInProgressVersionPrimary=null;ac.length=0}var Fs=Mn.ReactCurrentDispatcher,ic=Mn.ReactCurrentBatchConfig,Nr=0,Ce=null,ze=null,je=null,sl=!1,Fa=!1,ri=0,X5=0;function Ke(){throw Error(P(321))}function Yf(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Zt(e[n],t[n]))return!1;return!0}function Zf(e,t,n,r,o,a){if(Nr=a,Ce=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Fs.current=e===null||e.memoizedState===null?t9:n9,e=n(r,o),Fa){a=0;do{if(Fa=!1,ri=0,25<=a)throw Error(P(301));a+=1,je=ze=null,t.updateQueue=null,Fs.current=r9,e=n(r,o)}while(Fa)}if(Fs.current=ll,t=ze!==null&&ze.next!==null,Nr=0,je=ze=Ce=null,sl=!1,t)throw Error(P(300));return e}function Xf(){var e=ri!==0;return ri=0,e}function tn(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return je===null?Ce.memoizedState=je=e:je=je.next=e,je}function jt(){if(ze===null){var e=Ce.alternate;e=e!==null?e.memoizedState:null}else e=ze.next;var t=je===null?Ce.memoizedState:je.next;if(t!==null)je=t,ze=e;else{if(e===null)throw Error(P(310));ze=e,e={memoizedState:ze.memoizedState,baseState:ze.baseState,baseQueue:ze.baseQueue,queue:ze.queue,next:null},je===null?Ce.memoizedState=je=e:je=je.next=e}return je}function oi(e,t){return typeof t=="function"?t(e):t}function sc(e){var t=jt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=ze,o=r.baseQueue,a=n.pending;if(a!==null){if(o!==null){var i=o.next;o.next=a.next,a.next=i}r.baseQueue=o=a,n.pending=null}if(o!==null){a=o.next,r=r.baseState;var s=i=null,l=null,u=a;do{var c=u.lane;if((Nr&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(s=l=d,i=r):l=l.next=d,Ce.lanes|=c,Br|=c}u=u.next}while(u!==null&&u!==a);l===null?i=r:l.next=s,Zt(r,t.memoizedState)||(dt=!0),t.memoizedState=r,t.baseState=i,t.baseQueue=l,n.lastRenderedState=r}if(e=n.interleaved,e!==null){o=e;do a=o.lane,Ce.lanes|=a,Br|=a,o=o.next;while(o!==e)}else o===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function lc(e){var t=jt(),n=t.queue;if(n===null)throw Error(P(311));n.lastRenderedReducer=e;var r=n.dispatch,o=n.pending,a=t.memoizedState;if(o!==null){n.pending=null;var i=o=o.next;do a=e(a,i.action),i=i.next;while(i!==o);Zt(a,t.memoizedState)||(dt=!0),t.memoizedState=a,t.baseQueue===null&&(t.baseState=a),n.lastRenderedState=a}return[a,r]}function S1(){}function x1(e,t){var n=Ce,r=jt(),o=t(),a=!Zt(r.memoizedState,o);if(a&&(r.memoizedState=o,dt=!0),r=r.queue,Qf(_1.bind(null,n,r,e),[e]),r.getSnapshot!==t||a||je!==null&&je.memoizedState.tag&1){if(n.flags|=2048,ai(9,k1.bind(null,n,r,o,t),void 0,null),Ne===null)throw Error(P(349));(Nr&30)!==0||C1(n,t,o)}return o}function C1(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function k1(e,t,n,r){t.value=n,t.getSnapshot=r,T1(t)&&F1(e)}function _1(e,t,n){return n(function(){T1(t)&&F1(e)})}function T1(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Zt(e,n)}catch{return!0}}function F1(e){var t=qn(e,1);t!==null&&Kt(t,e,1,-1)}function w0(e){var t=tn();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:oi,lastRenderedState:e},t.queue=e,e=e.dispatch=e9.bind(null,Ce,e),[t.memoizedState,e]}function ai(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Ce.updateQueue,t===null?(t={lastEffect:null,stores:null},Ce.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function E1(){return jt().memoizedState}function Es(e,t,n,r){var o=tn();Ce.flags|=e,o.memoizedState=ai(1|t,n,void 0,r===void 0?null:r)}function Ol(e,t,n,r){var o=jt();r=r===void 0?null:r;var a=void 0;if(ze!==null){var i=ze.memoizedState;if(a=i.destroy,r!==null&&Yf(r,i.deps)){o.memoizedState=ai(t,n,a,r);return}}Ce.flags|=e,o.memoizedState=ai(1|t,n,a,r)}function S0(e,t){return Es(8390656,8,e,t)}function Qf(e,t){return Ol(2048,8,e,t)}function A1(e,t){return Ol(4,2,e,t)}function P1(e,t){return Ol(4,4,e,t)}function q1(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function I1(e,t,n){return n=n!=null?n.concat([e]):null,Ol(4,4,q1.bind(null,t,e),n)}function Jf(){}function R1(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yf(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function z1(e,t){var n=jt();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&Yf(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function M1(e,t,n){return(Nr&21)===0?(e.baseState&&(e.baseState=!1,dt=!0),e.memoizedState=n):(Zt(n,t)||(n=jy(),Ce.lanes|=n,Br|=n,e.baseState=!0),t)}function Q5(e,t){var n=oe;oe=n!==0&&4>n?n:4,e(!0);var r=ic.transition;ic.transition={};try{e(!1),t()}finally{oe=n,ic.transition=r}}function V1(){return jt().memoizedState}function J5(e,t,n){var r=ar(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},L1(e))j1(t,n);else if(n=m1(e,t,n,r),n!==null){var o=ot();Kt(n,e,r,o),N1(n,t,r)}}function e9(e,t,n){var r=ar(e),o={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(L1(e))j1(t,o);else{var a=e.alternate;if(e.lanes===0&&(a===null||a.lanes===0)&&(a=t.lastRenderedReducer,a!==null))try{var i=t.lastRenderedState,s=a(i,n);if(o.hasEagerState=!0,o.eagerState=s,Zt(s,i)){var l=t.interleaved;l===null?(o.next=o,Wf(t)):(o.next=l.next,l.next=o),t.interleaved=o;return}}catch{}finally{}n=m1(e,t,o,r),n!==null&&(o=ot(),Kt(n,e,r,o),N1(n,t,r))}}function L1(e){var t=e.alternate;return e===Ce||t!==null&&t===Ce}function j1(e,t){Fa=sl=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function N1(e,t,n){if((n&4194240)!==0){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,Pf(e,n)}}var ll={readContext:Lt,useCallback:Ke,useContext:Ke,useEffect:Ke,useImperativeHandle:Ke,useInsertionEffect:Ke,useLayoutEffect:Ke,useMemo:Ke,useReducer:Ke,useRef:Ke,useState:Ke,useDebugValue:Ke,useDeferredValue:Ke,useTransition:Ke,useMutableSource:Ke,useSyncExternalStore:Ke,useId:Ke,unstable_isNewReconciler:!1},t9={readContext:Lt,useCallback:function(e,t){return tn().memoizedState=[e,t===void 0?null:t],e},useContext:Lt,useEffect:S0,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,Es(4194308,4,q1.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Es(4194308,4,e,t)},useInsertionEffect:function(e,t){return Es(4,2,e,t)},useMemo:function(e,t){var n=tn();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=tn();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=J5.bind(null,Ce,e),[r.memoizedState,e]},useRef:function(e){var t=tn();return e={current:e},t.memoizedState=e},useState:w0,useDebugValue:Jf,useDeferredValue:function(e){return tn().memoizedState=e},useTransition:function(){var e=w0(!1),t=e[0];return e=Q5.bind(null,e[1]),tn().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Ce,o=tn();if(ve){if(n===void 0)throw Error(P(407));n=n()}else{if(n=t(),Ne===null)throw Error(P(349));(Nr&30)!==0||C1(r,t,n)}o.memoizedState=n;var a={value:n,getSnapshot:t};return o.queue=a,S0(_1.bind(null,r,a,e),[e]),r.flags|=2048,ai(9,k1.bind(null,r,a,n,t),void 0,null),n},useId:function(){var e=tn(),t=Ne.identifierPrefix;if(ve){var n=Tn,r=_n;n=(r&~(1<<32-Gt(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=ri++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=X5++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},n9={readContext:Lt,useCallback:R1,useContext:Lt,useEffect:Qf,useImperativeHandle:I1,useInsertionEffect:A1,useLayoutEffect:P1,useMemo:z1,useReducer:sc,useRef:E1,useState:function(){return sc(oi)},useDebugValue:Jf,useDeferredValue:function(e){var t=jt();return M1(t,ze.memoizedState,e)},useTransition:function(){var e=sc(oi)[0],t=jt().memoizedState;return[e,t]},useMutableSource:S1,useSyncExternalStore:x1,useId:V1,unstable_isNewReconciler:!1},r9={readContext:Lt,useCallback:R1,useContext:Lt,useEffect:Qf,useImperativeHandle:I1,useInsertionEffect:A1,useLayoutEffect:P1,useMemo:z1,useReducer:lc,useRef:E1,useState:function(){return lc(oi)},useDebugValue:Jf,useDeferredValue:function(e){var t=jt();return ze===null?t.memoizedState=e:M1(t,ze.memoizedState,e)},useTransition:function(){var e=lc(oi)[0],t=jt().memoizedState;return[e,t]},useMutableSource:S1,useSyncExternalStore:x1,useId:V1,unstable_isNewReconciler:!1};function jo(e,t){try{var n="",r=t;do n+=q3(r),r=r.return;while(r);var o=n}catch(a){o=`
Error generating stack: `+a.message+`
`+a.stack}return{value:e,source:t,stack:o,digest:null}}function uc(e,t,n){return{value:e,source:null,stack:n!=null?n:null,digest:t!=null?t:null}}function wd(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var o9=typeof WeakMap=="function"?WeakMap:Map;function B1(e,t,n){n=En(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){cl||(cl=!0,Pd=r),wd(e,t)},n}function D1(e,t,n){n=En(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var o=t.value;n.payload=function(){return r(o)},n.callback=function(){wd(e,t)}}var a=e.stateNode;return a!==null&&typeof a.componentDidCatch=="function"&&(n.callback=function(){wd(e,t),typeof r!="function"&&(or===null?or=new Set([this]):or.add(this));var i=t.stack;this.componentDidCatch(t.value,{componentStack:i!==null?i:""})}),n}function x0(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new o9;var o=new Set;r.set(t,o)}else o=r.get(t),o===void 0&&(o=new Set,r.set(t,o));o.has(n)||(o.add(n),e=b9.bind(null,e,t,n),t.then(e,e))}function C0(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function k0(e,t,n,r,o){return(e.mode&1)===0?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=En(-1,1),t.tag=2,rr(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=o,e)}var a9=Mn.ReactCurrentOwner,dt=!1;function tt(e,t,n,r){t.child=e===null?v1(t,null,n,r):Vo(t,e.child,n,r)}function _0(e,t,n,r,o){n=n.render;var a=t.ref;return xo(t,o),r=Zf(e,t,n,r,a,o),n=Xf(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,In(e,t,o)):(ve&&n&&jf(t),t.flags|=1,tt(e,t,r,o),t.child)}function T0(e,t,n,r,o){if(e===null){var a=n.type;return typeof a=="function"&&!sp(a)&&a.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=a,O1(e,t,a,r,o)):(e=Is(n.type,null,r,t,t.mode,o),e.ref=t.ref,e.return=t,t.child=e)}if(a=e.child,(e.lanes&o)===0){var i=a.memoizedProps;if(n=n.compare,n=n!==null?n:Xa,n(i,r)&&e.ref===t.ref)return In(e,t,o)}return t.flags|=1,e=ir(a,r),e.ref=t.ref,e.return=t,t.child=e}function O1(e,t,n,r,o){if(e!==null){var a=e.memoizedProps;if(Xa(a,r)&&e.ref===t.ref)if(dt=!1,t.pendingProps=r=a,(e.lanes&o)!==0)(e.flags&131072)!==0&&(dt=!0);else return t.lanes=e.lanes,In(e,t,o)}return Sd(e,t,n,r,o)}function $1(e,t,n){var r=t.pendingProps,o=r.children,a=e!==null?e.memoizedState:null;if(r.mode==="hidden")if((t.mode&1)===0)t.memoizedState={baseLanes:0,cachePool:null,transitions:null},ue(mo,vt),vt|=n;else{if((n&1073741824)===0)return e=a!==null?a.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,ue(mo,vt),vt|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=a!==null?a.baseLanes:n,ue(mo,vt),vt|=r}else a!==null?(r=a.baseLanes|n,t.memoizedState=null):r=n,ue(mo,vt),vt|=r;return tt(e,t,o,n),t.child}function W1(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function Sd(e,t,n,r,o){var a=pt(n)?Lr:Qe.current;return a=zo(t,a),xo(t,o),n=Zf(e,t,n,r,a,o),r=Xf(),e!==null&&!dt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~o,In(e,t,o)):(ve&&r&&jf(t),t.flags|=1,tt(e,t,n,o),t.child)}function F0(e,t,n,r,o){if(pt(n)){var a=!0;el(t)}else a=!1;if(xo(t,o),t.stateNode===null)As(e,t),y1(t,n,r),vd(t,n,r,o),r=!0;else if(e===null){var i=t.stateNode,s=t.memoizedProps;i.props=s;var l=i.context,u=n.contextType;typeof u=="object"&&u!==null?u=Lt(u):(u=pt(n)?Lr:Qe.current,u=zo(t,u));var c=n.getDerivedStateFromProps,d=typeof c=="function"||typeof i.getSnapshotBeforeUpdate=="function";d||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==r||l!==u)&&b0(t,i,r,u),Wn=!1;var f=t.memoizedState;i.state=f,al(t,r,i,o),l=t.memoizedState,s!==r||f!==l||ft.current||Wn?(typeof c=="function"&&(bd(t,n,c,r),l=t.memoizedState),(s=Wn||y0(t,n,s,r,f,l,u))?(d||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount()),typeof i.componentDidMount=="function"&&(t.flags|=4194308)):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=l),i.props=r,i.state=l,i.context=u,r=s):(typeof i.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{i=t.stateNode,h1(e,t),s=t.memoizedProps,u=t.type===t.elementType?s:$t(t.type,s),i.props=u,d=t.pendingProps,f=i.context,l=n.contextType,typeof l=="object"&&l!==null?l=Lt(l):(l=pt(n)?Lr:Qe.current,l=zo(t,l));var p=n.getDerivedStateFromProps;(c=typeof p=="function"||typeof i.getSnapshotBeforeUpdate=="function")||typeof i.UNSAFE_componentWillReceiveProps!="function"&&typeof i.componentWillReceiveProps!="function"||(s!==d||f!==l)&&b0(t,i,r,l),Wn=!1,f=t.memoizedState,i.state=f,al(t,r,i,o);var y=t.memoizedState;s!==d||f!==y||ft.current||Wn?(typeof p=="function"&&(bd(t,n,p,r),y=t.memoizedState),(u=Wn||y0(t,n,u,r,f,y,l)||!1)?(c||typeof i.UNSAFE_componentWillUpdate!="function"&&typeof i.componentWillUpdate!="function"||(typeof i.componentWillUpdate=="function"&&i.componentWillUpdate(r,y,l),typeof i.UNSAFE_componentWillUpdate=="function"&&i.UNSAFE_componentWillUpdate(r,y,l)),typeof i.componentDidUpdate=="function"&&(t.flags|=4),typeof i.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),i.props=r,i.state=y,i.context=l,r=u):(typeof i.componentDidUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),typeof i.getSnapshotBeforeUpdate!="function"||s===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return xd(e,t,n,r,a,o)}function xd(e,t,n,r,o,a){W1(e,t);var i=(t.flags&128)!==0;if(!r&&!i)return o&&f0(t,n,!1),In(e,t,a);r=t.stateNode,a9.current=t;var s=i&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&i?(t.child=Vo(t,e.child,null,a),t.child=Vo(t,null,s,a)):tt(e,t,s,a),t.memoizedState=r.state,o&&f0(t,n,!0),t.child}function H1(e){var t=e.stateNode;t.pendingContext?d0(e,t.pendingContext,t.pendingContext!==t.context):t.context&&d0(e,t.context,!1),Uf(e,t.containerInfo)}function E0(e,t,n,r,o){return Mo(),Bf(o),t.flags|=256,tt(e,t,n,r),t.child}var Cd={dehydrated:null,treeContext:null,retryLane:0};function kd(e){return{baseLanes:e,cachePool:null,transitions:null}}function U1(e,t,n){var r=t.pendingProps,o=xe.current,a=!1,i=(t.flags&128)!==0,s;if((s=i)||(s=e!==null&&e.memoizedState===null?!1:(o&2)!==0),s?(a=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(o|=1),ue(xe,o&1),e===null)return gd(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?((t.mode&1)===0?t.lanes=1:e.data==="$!"?t.lanes=8:t.lanes=1073741824,null):(i=r.children,e=r.fallback,a?(r=t.mode,a=t.child,i={mode:"hidden",children:i},(r&1)===0&&a!==null?(a.childLanes=0,a.pendingProps=i):a=Hl(i,r,0,null),e=Rr(e,r,n,null),a.return=t,e.return=t,a.sibling=e,t.child=a,t.child.memoizedState=kd(n),t.memoizedState=Cd,e):ep(t,i));if(o=e.memoizedState,o!==null&&(s=o.dehydrated,s!==null))return i9(e,t,i,r,s,o,n);if(a){a=r.fallback,i=t.mode,o=e.child,s=o.sibling;var l={mode:"hidden",children:r.children};return(i&1)===0&&t.child!==o?(r=t.child,r.childLanes=0,r.pendingProps=l,t.deletions=null):(r=ir(o,l),r.subtreeFlags=o.subtreeFlags&14680064),s!==null?a=ir(s,a):(a=Rr(a,i,n,null),a.flags|=2),a.return=t,r.return=t,r.sibling=a,t.child=r,r=a,a=t.child,i=e.child.memoizedState,i=i===null?kd(n):{baseLanes:i.baseLanes|n,cachePool:null,transitions:i.transitions},a.memoizedState=i,a.childLanes=e.childLanes&~n,t.memoizedState=Cd,r}return a=e.child,e=a.sibling,r=ir(a,{mode:"visible",children:r.children}),(t.mode&1)===0&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function ep(e,t){return t=Hl({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function os(e,t,n,r){return r!==null&&Bf(r),Vo(t,e.child,null,n),e=ep(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function i9(e,t,n,r,o,a,i){if(n)return t.flags&256?(t.flags&=-257,r=uc(Error(P(422))),os(e,t,i,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(a=r.fallback,o=t.mode,r=Hl({mode:"visible",children:r.children},o,0,null),a=Rr(a,o,i,null),a.flags|=2,r.return=t,a.return=t,r.sibling=a,t.child=r,(t.mode&1)!==0&&Vo(t,e.child,null,i),t.child.memoizedState=kd(i),t.memoizedState=Cd,a);if((t.mode&1)===0)return os(e,t,i,null);if(o.data==="$!"){if(r=o.nextSibling&&o.nextSibling.dataset,r)var s=r.dgst;return r=s,a=Error(P(419)),r=uc(a,r,void 0),os(e,t,i,r)}if(s=(i&e.childLanes)!==0,dt||s){if(r=Ne,r!==null){switch(i&-i){case 4:o=2;break;case 16:o=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:o=32;break;case 536870912:o=268435456;break;default:o=0}o=(o&(r.suspendedLanes|i))!==0?0:o,o!==0&&o!==a.retryLane&&(a.retryLane=o,qn(e,o),Kt(r,e,o,-1))}return ip(),r=uc(Error(P(421))),os(e,t,i,r)}return o.data==="$?"?(t.flags|=128,t.child=e.child,t=v9.bind(null,e),o._reactRetry=t,null):(e=a.treeContext,wt=nr(o.nextSibling),St=t,ve=!0,Ht=null,e!==null&&(It[Rt++]=_n,It[Rt++]=Tn,It[Rt++]=jr,_n=e.id,Tn=e.overflow,jr=t),t=ep(t,r.children),t.flags|=4096,t)}function A0(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),yd(e.return,t,n)}function cc(e,t,n,r,o){var a=e.memoizedState;a===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:o}:(a.isBackwards=t,a.rendering=null,a.renderingStartTime=0,a.last=r,a.tail=n,a.tailMode=o)}function G1(e,t,n){var r=t.pendingProps,o=r.revealOrder,a=r.tail;if(tt(e,t,r.children,n),r=xe.current,(r&2)!==0)r=r&1|2,t.flags|=128;else{if(e!==null&&(e.flags&128)!==0)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&A0(e,n,t);else if(e.tag===19)A0(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(ue(xe,r),(t.mode&1)===0)t.memoizedState=null;else switch(o){case"forwards":for(n=t.child,o=null;n!==null;)e=n.alternate,e!==null&&il(e)===null&&(o=n),n=n.sibling;n=o,n===null?(o=t.child,t.child=null):(o=n.sibling,n.sibling=null),cc(t,!1,o,n,a);break;case"backwards":for(n=null,o=t.child,t.child=null;o!==null;){if(e=o.alternate,e!==null&&il(e)===null){t.child=o;break}e=o.sibling,o.sibling=n,n=o,o=e}cc(t,!0,n,null,a);break;case"together":cc(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function As(e,t){(t.mode&1)===0&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function In(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Br|=t.lanes,(n&t.childLanes)===0)return null;if(e!==null&&t.child!==e.child)throw Error(P(153));if(t.child!==null){for(e=t.child,n=ir(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=ir(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function s9(e,t,n){switch(t.tag){case 3:H1(t),Mo();break;case 5:w1(t);break;case 1:pt(t.type)&&el(t);break;case 4:Uf(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,o=t.memoizedProps.value;ue(rl,r._currentValue),r._currentValue=o;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(ue(xe,xe.current&1),t.flags|=128,null):(n&t.child.childLanes)!==0?U1(e,t,n):(ue(xe,xe.current&1),e=In(e,t,n),e!==null?e.sibling:null);ue(xe,xe.current&1);break;case 19:if(r=(n&t.childLanes)!==0,(e.flags&128)!==0){if(r)return G1(e,t,n);t.flags|=128}if(o=t.memoizedState,o!==null&&(o.rendering=null,o.tail=null,o.lastEffect=null),ue(xe,xe.current),r)break;return null;case 22:case 23:return t.lanes=0,$1(e,t,n)}return In(e,t,n)}var K1,_d,Y1,Z1;K1=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};_d=function(){};Y1=function(e,t,n,r){var o=e.memoizedProps;if(o!==r){e=t.stateNode,Er(dn.current);var a=null;switch(n){case"input":o=Gc(e,o),r=Gc(e,r),a=[];break;case"select":o=ke({},o,{value:void 0}),r=ke({},r,{value:void 0}),a=[];break;case"textarea":o=Zc(e,o),r=Zc(e,r),a=[];break;default:typeof o.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Qs)}Qc(n,r);var i;n=null;for(u in o)if(!r.hasOwnProperty(u)&&o.hasOwnProperty(u)&&o[u]!=null)if(u==="style"){var s=o[u];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Wa.hasOwnProperty(u)?a||(a=[]):(a=a||[]).push(u,null));for(u in r){var l=r[u];if(s=o!=null?o[u]:void 0,r.hasOwnProperty(u)&&l!==s&&(l!=null||s!=null))if(u==="style")if(s){for(i in s)!s.hasOwnProperty(i)||l&&l.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in l)l.hasOwnProperty(i)&&s[i]!==l[i]&&(n||(n={}),n[i]=l[i])}else n||(a||(a=[]),a.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,s=s?s.__html:void 0,l!=null&&s!==l&&(a=a||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(a=a||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Wa.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&pe("scroll",e),a||s===l||(a=[])):(a=a||[]).push(u,l))}n&&(a=a||[]).push("style",n);var u=a;(t.updateQueue=u)&&(t.flags|=4)}};Z1=function(e,t,n,r){n!==r&&(t.flags|=4)};function la(e,t){if(!ve)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ye(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags&14680064,r|=o.flags&14680064,o.return=e,o=o.sibling;else for(o=e.child;o!==null;)n|=o.lanes|o.childLanes,r|=o.subtreeFlags,r|=o.flags,o.return=e,o=o.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function l9(e,t,n){var r=t.pendingProps;switch(Nf(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ye(t),null;case 1:return pt(t.type)&&Js(),Ye(t),null;case 3:return r=t.stateNode,Lo(),he(ft),he(Qe),Kf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(ns(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&(t.flags&256)===0||(t.flags|=1024,Ht!==null&&(Rd(Ht),Ht=null))),_d(e,t),Ye(t),null;case 5:Gf(t);var o=Er(ni.current);if(n=t.type,e!==null&&t.stateNode!=null)Y1(e,t,n,r,o),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(P(166));return Ye(t),null}if(e=Er(dn.current),ns(t)){r=t.stateNode,n=t.type;var a=t.memoizedProps;switch(r[sn]=t,r[ei]=a,e=(t.mode&1)!==0,n){case"dialog":pe("cancel",r),pe("close",r);break;case"iframe":case"object":case"embed":pe("load",r);break;case"video":case"audio":for(o=0;o<ba.length;o++)pe(ba[o],r);break;case"source":pe("error",r);break;case"img":case"image":case"link":pe("error",r),pe("load",r);break;case"details":pe("toggle",r);break;case"input":jm(r,a),pe("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!a.multiple},pe("invalid",r);break;case"textarea":Bm(r,a),pe("invalid",r)}Qc(n,a),o=null;for(var i in a)if(a.hasOwnProperty(i)){var s=a[i];i==="children"?typeof s=="string"?r.textContent!==s&&(a.suppressHydrationWarning!==!0&&ts(r.textContent,s,e),o=["children",s]):typeof s=="number"&&r.textContent!==""+s&&(a.suppressHydrationWarning!==!0&&ts(r.textContent,s,e),o=["children",""+s]):Wa.hasOwnProperty(i)&&s!=null&&i==="onScroll"&&pe("scroll",r)}switch(n){case"input":Gi(r),Nm(r,a,!0);break;case"textarea":Gi(r),Dm(r);break;case"select":case"option":break;default:typeof a.onClick=="function"&&(r.onclick=Qs)}r=o,t.updateQueue=r,r!==null&&(t.flags|=4)}else{i=o.nodeType===9?o:o.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=Cy(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=i.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=i.createElement(n,{is:r.is}):(e=i.createElement(n),n==="select"&&(i=e,r.multiple?i.multiple=!0:r.size&&(i.size=r.size))):e=i.createElementNS(e,n),e[sn]=t,e[ei]=r,K1(e,t,!1,!1),t.stateNode=e;e:{switch(i=Jc(n,r),n){case"dialog":pe("cancel",e),pe("close",e),o=r;break;case"iframe":case"object":case"embed":pe("load",e),o=r;break;case"video":case"audio":for(o=0;o<ba.length;o++)pe(ba[o],e);o=r;break;case"source":pe("error",e),o=r;break;case"img":case"image":case"link":pe("error",e),pe("load",e),o=r;break;case"details":pe("toggle",e),o=r;break;case"input":jm(e,r),o=Gc(e,r),pe("invalid",e);break;case"option":o=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},o=ke({},r,{value:void 0}),pe("invalid",e);break;case"textarea":Bm(e,r),o=Zc(e,r),pe("invalid",e);break;default:o=r}Qc(n,o),s=o;for(a in s)if(s.hasOwnProperty(a)){var l=s[a];a==="style"?Ty(e,l):a==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&ky(e,l)):a==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&Ha(e,l):typeof l=="number"&&Ha(e,""+l):a!=="suppressContentEditableWarning"&&a!=="suppressHydrationWarning"&&a!=="autoFocus"&&(Wa.hasOwnProperty(a)?l!=null&&a==="onScroll"&&pe("scroll",e):l!=null&&kf(e,a,l,i))}switch(n){case"input":Gi(e),Nm(e,r,!1);break;case"textarea":Gi(e),Dm(e);break;case"option":r.value!=null&&e.setAttribute("value",""+ur(r.value));break;case"select":e.multiple=!!r.multiple,a=r.value,a!=null?bo(e,!!r.multiple,a,!1):r.defaultValue!=null&&bo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof o.onClick=="function"&&(e.onclick=Qs)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return Ye(t),null;case 6:if(e&&t.stateNode!=null)Z1(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(P(166));if(n=Er(ni.current),Er(dn.current),ns(t)){if(r=t.stateNode,n=t.memoizedProps,r[sn]=t,(a=r.nodeValue!==n)&&(e=St,e!==null))switch(e.tag){case 3:ts(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&ts(r.nodeValue,n,(e.mode&1)!==0)}a&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[sn]=t,t.stateNode=r}return Ye(t),null;case 13:if(he(xe),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(ve&&wt!==null&&(t.mode&1)!==0&&(t.flags&128)===0)p1(),Mo(),t.flags|=98560,a=!1;else if(a=ns(t),r!==null&&r.dehydrated!==null){if(e===null){if(!a)throw Error(P(318));if(a=t.memoizedState,a=a!==null?a.dehydrated:null,!a)throw Error(P(317));a[sn]=t}else Mo(),(t.flags&128)===0&&(t.memoizedState=null),t.flags|=4;Ye(t),a=!1}else Ht!==null&&(Rd(Ht),Ht=null),a=!0;if(!a)return t.flags&65536?t:null}return(t.flags&128)!==0?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,(t.mode&1)!==0&&(e===null||(xe.current&1)!==0?Me===0&&(Me=3):ip())),t.updateQueue!==null&&(t.flags|=4),Ye(t),null);case 4:return Lo(),_d(e,t),e===null&&Qa(t.stateNode.containerInfo),Ye(t),null;case 10:return $f(t.type._context),Ye(t),null;case 17:return pt(t.type)&&Js(),Ye(t),null;case 19:if(he(xe),a=t.memoizedState,a===null)return Ye(t),null;if(r=(t.flags&128)!==0,i=a.rendering,i===null)if(r)la(a,!1);else{if(Me!==0||e!==null&&(e.flags&128)!==0)for(e=t.child;e!==null;){if(i=il(e),i!==null){for(t.flags|=128,la(a,!1),r=i.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)a=n,e=r,a.flags&=14680066,i=a.alternate,i===null?(a.childLanes=0,a.lanes=e,a.child=null,a.subtreeFlags=0,a.memoizedProps=null,a.memoizedState=null,a.updateQueue=null,a.dependencies=null,a.stateNode=null):(a.childLanes=i.childLanes,a.lanes=i.lanes,a.child=i.child,a.subtreeFlags=0,a.deletions=null,a.memoizedProps=i.memoizedProps,a.memoizedState=i.memoizedState,a.updateQueue=i.updateQueue,a.type=i.type,e=i.dependencies,a.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return ue(xe,xe.current&1|2),t.child}e=e.sibling}a.tail!==null&&Ee()>No&&(t.flags|=128,r=!0,la(a,!1),t.lanes=4194304)}else{if(!r)if(e=il(i),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),la(a,!0),a.tail===null&&a.tailMode==="hidden"&&!i.alternate&&!ve)return Ye(t),null}else 2*Ee()-a.renderingStartTime>No&&n!==1073741824&&(t.flags|=128,r=!0,la(a,!1),t.lanes=4194304);a.isBackwards?(i.sibling=t.child,t.child=i):(n=a.last,n!==null?n.sibling=i:t.child=i,a.last=i)}return a.tail!==null?(t=a.tail,a.rendering=t,a.tail=t.sibling,a.renderingStartTime=Ee(),t.sibling=null,n=xe.current,ue(xe,r?n&1|2:n&1),t):(Ye(t),null);case 22:case 23:return ap(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&(t.mode&1)!==0?(vt&1073741824)!==0&&(Ye(t),t.subtreeFlags&6&&(t.flags|=8192)):Ye(t),null;case 24:return null;case 25:return null}throw Error(P(156,t.tag))}function u9(e,t){switch(Nf(t),t.tag){case 1:return pt(t.type)&&Js(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Lo(),he(ft),he(Qe),Kf(),e=t.flags,(e&65536)!==0&&(e&128)===0?(t.flags=e&-65537|128,t):null;case 5:return Gf(t),null;case 13:if(he(xe),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(P(340));Mo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return he(xe),null;case 4:return Lo(),null;case 10:return $f(t.type._context),null;case 22:case 23:return ap(),null;case 24:return null;default:return null}}var as=!1,Xe=!1,c9=typeof WeakSet=="function"?WeakSet:Set,M=null;function po(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Te(e,t,r)}else n.current=null}function Td(e,t,n){try{n()}catch(r){Te(e,t,r)}}var P0=!1;function d9(e,t){if(ud=Ys,e=e1(),Lf(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var o=r.anchorOffset,a=r.focusNode;r=r.focusOffset;try{n.nodeType,a.nodeType}catch{n=null;break e}var i=0,s=-1,l=-1,u=0,c=0,d=e,f=null;t:for(;;){for(var p;d!==n||o!==0&&d.nodeType!==3||(s=i+o),d!==a||r!==0&&d.nodeType!==3||(l=i+r),d.nodeType===3&&(i+=d.nodeValue.length),(p=d.firstChild)!==null;)f=d,d=p;for(;;){if(d===e)break t;if(f===n&&++u===o&&(s=i),f===a&&++c===r&&(l=i),(p=d.nextSibling)!==null)break;d=f,f=d.parentNode}d=p}n=s===-1||l===-1?null:{start:s,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(cd={focusedElem:e,selectionRange:n},Ys=!1,M=t;M!==null;)if(t=M,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,M=e;else for(;M!==null;){t=M;try{var y=t.alternate;if((t.flags&1024)!==0)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var v=y.memoizedProps,k=y.memoizedState,g=t.stateNode,m=g.getSnapshotBeforeUpdate(t.elementType===t.type?v:$t(t.type,v),k);g.__reactInternalSnapshotBeforeUpdate=m}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(P(163))}}catch(S){Te(t,t.return,S)}if(e=t.sibling,e!==null){e.return=t.return,M=e;break}M=t.return}return y=P0,P0=!1,y}function Ea(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&e)===e){var a=o.destroy;o.destroy=void 0,a!==void 0&&Td(t,n,a)}o=o.next}while(o!==r)}}function $l(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function Fd(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function X1(e){var t=e.alternate;t!==null&&(e.alternate=null,X1(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[sn],delete t[ei],delete t[pd],delete t[G5],delete t[K5])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function Q1(e){return e.tag===5||e.tag===3||e.tag===4}function q0(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||Q1(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function Ed(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Qs));else if(r!==4&&(e=e.child,e!==null))for(Ed(e,t,n),e=e.sibling;e!==null;)Ed(e,t,n),e=e.sibling}function Ad(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Ad(e,t,n),e=e.sibling;e!==null;)Ad(e,t,n),e=e.sibling}var $e=null,Wt=!1;function jn(e,t,n){for(n=n.child;n!==null;)J1(e,t,n),n=n.sibling}function J1(e,t,n){if(cn&&typeof cn.onCommitFiberUnmount=="function")try{cn.onCommitFiberUnmount(Ml,n)}catch{}switch(n.tag){case 5:Xe||po(n,t);case 6:var r=$e,o=Wt;$e=null,jn(e,t,n),$e=r,Wt=o,$e!==null&&(Wt?(e=$e,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):$e.removeChild(n.stateNode));break;case 18:$e!==null&&(Wt?(e=$e,n=n.stateNode,e.nodeType===8?rc(e.parentNode,n):e.nodeType===1&&rc(e,n),Ya(e)):rc($e,n.stateNode));break;case 4:r=$e,o=Wt,$e=n.stateNode.containerInfo,Wt=!0,jn(e,t,n),$e=r,Wt=o;break;case 0:case 11:case 14:case 15:if(!Xe&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){o=r=r.next;do{var a=o,i=a.destroy;a=a.tag,i!==void 0&&((a&2)!==0||(a&4)!==0)&&Td(n,t,i),o=o.next}while(o!==r)}jn(e,t,n);break;case 1:if(!Xe&&(po(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(s){Te(n,t,s)}jn(e,t,n);break;case 21:jn(e,t,n);break;case 22:n.mode&1?(Xe=(r=Xe)||n.memoizedState!==null,jn(e,t,n),Xe=r):jn(e,t,n);break;default:jn(e,t,n)}}function I0(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new c9),t.forEach(function(r){var o=w9.bind(null,e,r);n.has(r)||(n.add(r),r.then(o,o))})}}function Nt(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var o=n[r];try{var a=e,i=t,s=i;e:for(;s!==null;){switch(s.tag){case 5:$e=s.stateNode,Wt=!1;break e;case 3:$e=s.stateNode.containerInfo,Wt=!0;break e;case 4:$e=s.stateNode.containerInfo,Wt=!0;break e}s=s.return}if($e===null)throw Error(P(160));J1(a,i,o),$e=null,Wt=!1;var l=o.alternate;l!==null&&(l.return=null),o.return=null}catch(u){Te(o,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)eb(t,e),t=t.sibling}function eb(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(Nt(t,e),Jt(e),r&4){try{Ea(3,e,e.return),$l(3,e)}catch(v){Te(e,e.return,v)}try{Ea(5,e,e.return)}catch(v){Te(e,e.return,v)}}break;case 1:Nt(t,e),Jt(e),r&512&&n!==null&&po(n,n.return);break;case 5:if(Nt(t,e),Jt(e),r&512&&n!==null&&po(n,n.return),e.flags&32){var o=e.stateNode;try{Ha(o,"")}catch(v){Te(e,e.return,v)}}if(r&4&&(o=e.stateNode,o!=null)){var a=e.memoizedProps,i=n!==null?n.memoizedProps:a,s=e.type,l=e.updateQueue;if(e.updateQueue=null,l!==null)try{s==="input"&&a.type==="radio"&&a.name!=null&&Sy(o,a),Jc(s,i);var u=Jc(s,a);for(i=0;i<l.length;i+=2){var c=l[i],d=l[i+1];c==="style"?Ty(o,d):c==="dangerouslySetInnerHTML"?ky(o,d):c==="children"?Ha(o,d):kf(o,c,d,u)}switch(s){case"input":Kc(o,a);break;case"textarea":xy(o,a);break;case"select":var f=o._wrapperState.wasMultiple;o._wrapperState.wasMultiple=!!a.multiple;var p=a.value;p!=null?bo(o,!!a.multiple,p,!1):f!==!!a.multiple&&(a.defaultValue!=null?bo(o,!!a.multiple,a.defaultValue,!0):bo(o,!!a.multiple,a.multiple?[]:"",!1))}o[ei]=a}catch(v){Te(e,e.return,v)}}break;case 6:if(Nt(t,e),Jt(e),r&4){if(e.stateNode===null)throw Error(P(162));o=e.stateNode,a=e.memoizedProps;try{o.nodeValue=a}catch(v){Te(e,e.return,v)}}break;case 3:if(Nt(t,e),Jt(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{Ya(t.containerInfo)}catch(v){Te(e,e.return,v)}break;case 4:Nt(t,e),Jt(e);break;case 13:Nt(t,e),Jt(e),o=e.child,o.flags&8192&&(a=o.memoizedState!==null,o.stateNode.isHidden=a,!a||o.alternate!==null&&o.alternate.memoizedState!==null||(rp=Ee())),r&4&&I0(e);break;case 22:if(c=n!==null&&n.memoizedState!==null,e.mode&1?(Xe=(u=Xe)||c,Nt(t,e),Xe=u):Nt(t,e),Jt(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!c&&(e.mode&1)!==0)for(M=e,c=e.child;c!==null;){for(d=M=c;M!==null;){switch(f=M,p=f.child,f.tag){case 0:case 11:case 14:case 15:Ea(4,f,f.return);break;case 1:po(f,f.return);var y=f.stateNode;if(typeof y.componentWillUnmount=="function"){r=f,n=f.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(v){Te(r,n,v)}}break;case 5:po(f,f.return);break;case 22:if(f.memoizedState!==null){z0(d);continue}}p!==null?(p.return=f,M=p):z0(d)}c=c.sibling}e:for(c=null,d=e;;){if(d.tag===5){if(c===null){c=d;try{o=d.stateNode,u?(a=o.style,typeof a.setProperty=="function"?a.setProperty("display","none","important"):a.display="none"):(s=d.stateNode,l=d.memoizedProps.style,i=l!=null&&l.hasOwnProperty("display")?l.display:null,s.style.display=_y("display",i))}catch(v){Te(e,e.return,v)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(v){Te(e,e.return,v)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===e)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===e)break e;for(;d.sibling===null;){if(d.return===null||d.return===e)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Nt(t,e),Jt(e),r&4&&I0(e);break;case 21:break;default:Nt(t,e),Jt(e)}}function Jt(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(Q1(n)){var r=n;break e}n=n.return}throw Error(P(160))}switch(r.tag){case 5:var o=r.stateNode;r.flags&32&&(Ha(o,""),r.flags&=-33);var a=q0(e);Ad(e,a,o);break;case 3:case 4:var i=r.stateNode.containerInfo,s=q0(e);Ed(e,s,i);break;default:throw Error(P(161))}}catch(l){Te(e,e.return,l)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function f9(e,t,n){M=e,tb(e)}function tb(e,t,n){for(var r=(e.mode&1)!==0;M!==null;){var o=M,a=o.child;if(o.tag===22&&r){var i=o.memoizedState!==null||as;if(!i){var s=o.alternate,l=s!==null&&s.memoizedState!==null||Xe;s=as;var u=Xe;if(as=i,(Xe=l)&&!u)for(M=o;M!==null;)i=M,l=i.child,i.tag===22&&i.memoizedState!==null?M0(o):l!==null?(l.return=i,M=l):M0(o);for(;a!==null;)M=a,tb(a),a=a.sibling;M=o,as=s,Xe=u}R0(e)}else(o.subtreeFlags&8772)!==0&&a!==null?(a.return=o,M=a):R0(e)}}function R0(e){for(;M!==null;){var t=M;if((t.flags&8772)!==0){var n=t.alternate;try{if((t.flags&8772)!==0)switch(t.tag){case 0:case 11:case 15:Xe||$l(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!Xe)if(n===null)r.componentDidMount();else{var o=t.elementType===t.type?n.memoizedProps:$t(t.type,n.memoizedProps);r.componentDidUpdate(o,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var a=t.updateQueue;a!==null&&g0(t,a,r);break;case 3:var i=t.updateQueue;if(i!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}g0(t,i,n)}break;case 5:var s=t.stateNode;if(n===null&&t.flags&4){n=s;var l=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&Ya(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(P(163))}Xe||t.flags&512&&Fd(t)}catch(f){Te(t,t.return,f)}}if(t===e){M=null;break}if(n=t.sibling,n!==null){n.return=t.return,M=n;break}M=t.return}}function z0(e){for(;M!==null;){var t=M;if(t===e){M=null;break}var n=t.sibling;if(n!==null){n.return=t.return,M=n;break}M=t.return}}function M0(e){for(;M!==null;){var t=M;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{$l(4,t)}catch(l){Te(t,n,l)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var o=t.return;try{r.componentDidMount()}catch(l){Te(t,o,l)}}var a=t.return;try{Fd(t)}catch(l){Te(t,a,l)}break;case 5:var i=t.return;try{Fd(t)}catch(l){Te(t,i,l)}}}catch(l){Te(t,t.return,l)}if(t===e){M=null;break}var s=t.sibling;if(s!==null){s.return=t.return,M=s;break}M=t.return}}var p9=Math.ceil,ul=Mn.ReactCurrentDispatcher,tp=Mn.ReactCurrentOwner,Mt=Mn.ReactCurrentBatchConfig,X=0,Ne=null,qe=null,He=0,vt=0,mo=mr(0),Me=0,ii=null,Br=0,Wl=0,np=0,Aa=null,ut=null,rp=0,No=1/0,xn=null,cl=!1,Pd=null,or=null,is=!1,Xn=null,dl=0,Pa=0,qd=null,Ps=-1,qs=0;function ot(){return(X&6)!==0?Ee():Ps!==-1?Ps:Ps=Ee()}function ar(e){return(e.mode&1)===0?1:(X&2)!==0&&He!==0?He&-He:Z5.transition!==null?(qs===0&&(qs=jy()),qs):(e=oe,e!==0||(e=window.event,e=e===void 0?16:Hy(e.type)),e)}function Kt(e,t,n,r){if(50<Pa)throw Pa=0,qd=null,Error(P(185));Ci(e,n,r),((X&2)===0||e!==Ne)&&(e===Ne&&((X&2)===0&&(Wl|=n),Me===4&&Kn(e,He)),mt(e,r),n===1&&X===0&&(t.mode&1)===0&&(No=Ee()+500,Bl&&hr()))}function mt(e,t){var n=e.callbackNode;Z3(e,t);var r=Ks(e,e===Ne?He:0);if(r===0)n!==null&&Wm(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&Wm(n),t===1)e.tag===0?Y5(V0.bind(null,e)):c1(V0.bind(null,e)),H5(function(){(X&6)===0&&hr()}),n=null;else{switch(Ny(r)){case 1:n=Af;break;case 4:n=Vy;break;case 16:n=Gs;break;case 536870912:n=Ly;break;default:n=Gs}n=ub(n,nb.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function nb(e,t){if(Ps=-1,qs=0,(X&6)!==0)throw Error(P(327));var n=e.callbackNode;if(Co()&&e.callbackNode!==n)return null;var r=Ks(e,e===Ne?He:0);if(r===0)return null;if((r&30)!==0||(r&e.expiredLanes)!==0||t)t=fl(e,r);else{t=r;var o=X;X|=2;var a=ob();(Ne!==e||He!==t)&&(xn=null,No=Ee()+500,Ir(e,t));do try{g9();break}catch(s){rb(e,s)}while(1);Of(),ul.current=a,X=o,qe!==null?t=0:(Ne=null,He=0,t=Me)}if(t!==0){if(t===2&&(o=od(e),o!==0&&(r=o,t=Id(e,o))),t===1)throw n=ii,Ir(e,0),Kn(e,r),mt(e,Ee()),n;if(t===6)Kn(e,r);else{if(o=e.current.alternate,(r&30)===0&&!m9(o)&&(t=fl(e,r),t===2&&(a=od(e),a!==0&&(r=a,t=Id(e,a))),t===1))throw n=ii,Ir(e,0),Kn(e,r),mt(e,Ee()),n;switch(e.finishedWork=o,e.finishedLanes=r,t){case 0:case 1:throw Error(P(345));case 2:xr(e,ut,xn);break;case 3:if(Kn(e,r),(r&130023424)===r&&(t=rp+500-Ee(),10<t)){if(Ks(e,0)!==0)break;if(o=e.suspendedLanes,(o&r)!==r){ot(),e.pingedLanes|=e.suspendedLanes&o;break}e.timeoutHandle=fd(xr.bind(null,e,ut,xn),t);break}xr(e,ut,xn);break;case 4:if(Kn(e,r),(r&4194240)===r)break;for(t=e.eventTimes,o=-1;0<r;){var i=31-Gt(r);a=1<<i,i=t[i],i>o&&(o=i),r&=~a}if(r=o,r=Ee()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*p9(r/1960))-r,10<r){e.timeoutHandle=fd(xr.bind(null,e,ut,xn),r);break}xr(e,ut,xn);break;case 5:xr(e,ut,xn);break;default:throw Error(P(329))}}}return mt(e,Ee()),e.callbackNode===n?nb.bind(null,e):null}function Id(e,t){var n=Aa;return e.current.memoizedState.isDehydrated&&(Ir(e,t).flags|=256),e=fl(e,t),e!==2&&(t=ut,ut=n,t!==null&&Rd(t)),e}function Rd(e){ut===null?ut=e:ut.push.apply(ut,e)}function m9(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var o=n[r],a=o.getSnapshot;o=o.value;try{if(!Zt(a(),o))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Kn(e,t){for(t&=~np,t&=~Wl,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-Gt(t),r=1<<n;e[n]=-1,t&=~r}}function V0(e){if((X&6)!==0)throw Error(P(327));Co();var t=Ks(e,0);if((t&1)===0)return mt(e,Ee()),null;var n=fl(e,t);if(e.tag!==0&&n===2){var r=od(e);r!==0&&(t=r,n=Id(e,r))}if(n===1)throw n=ii,Ir(e,0),Kn(e,t),mt(e,Ee()),n;if(n===6)throw Error(P(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,xr(e,ut,xn),mt(e,Ee()),null}function op(e,t){var n=X;X|=1;try{return e(t)}finally{X=n,X===0&&(No=Ee()+500,Bl&&hr())}}function Dr(e){Xn!==null&&Xn.tag===0&&(X&6)===0&&Co();var t=X;X|=1;var n=Mt.transition,r=oe;try{if(Mt.transition=null,oe=1,e)return e()}finally{oe=r,Mt.transition=n,X=t,(X&6)===0&&hr()}}function ap(){vt=mo.current,he(mo)}function Ir(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,W5(n)),qe!==null)for(n=qe.return;n!==null;){var r=n;switch(Nf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Js();break;case 3:Lo(),he(ft),he(Qe),Kf();break;case 5:Gf(r);break;case 4:Lo();break;case 13:he(xe);break;case 19:he(xe);break;case 10:$f(r.type._context);break;case 22:case 23:ap()}n=n.return}if(Ne=e,qe=e=ir(e.current,null),He=vt=t,Me=0,ii=null,np=Wl=Br=0,ut=Aa=null,Fr!==null){for(t=0;t<Fr.length;t++)if(n=Fr[t],r=n.interleaved,r!==null){n.interleaved=null;var o=r.next,a=n.pending;if(a!==null){var i=a.next;a.next=o,r.next=i}n.pending=r}Fr=null}return e}function rb(e,t){do{var n=qe;try{if(Of(),Fs.current=ll,sl){for(var r=Ce.memoizedState;r!==null;){var o=r.queue;o!==null&&(o.pending=null),r=r.next}sl=!1}if(Nr=0,je=ze=Ce=null,Fa=!1,ri=0,tp.current=null,n===null||n.return===null){Me=1,ii=t,qe=null;break}e:{var a=e,i=n.return,s=n,l=t;if(t=He,s.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=s,d=c.tag;if((c.mode&1)===0&&(d===0||d===11||d===15)){var f=c.alternate;f?(c.updateQueue=f.updateQueue,c.memoizedState=f.memoizedState,c.lanes=f.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=C0(i);if(p!==null){p.flags&=-257,k0(p,i,s,a,t),p.mode&1&&x0(a,u,t),t=p,l=u;var y=t.updateQueue;if(y===null){var v=new Set;v.add(l),t.updateQueue=v}else y.add(l);break e}else{if((t&1)===0){x0(a,u,t),ip();break e}l=Error(P(426))}}else if(ve&&s.mode&1){var k=C0(i);if(k!==null){(k.flags&65536)===0&&(k.flags|=256),k0(k,i,s,a,t),Bf(jo(l,s));break e}}a=l=jo(l,s),Me!==4&&(Me=2),Aa===null?Aa=[a]:Aa.push(a),a=i;do{switch(a.tag){case 3:a.flags|=65536,t&=-t,a.lanes|=t;var g=B1(a,l,t);h0(a,g);break e;case 1:s=l;var m=a.type,h=a.stateNode;if((a.flags&128)===0&&(typeof m.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(or===null||!or.has(h)))){a.flags|=65536,t&=-t,a.lanes|=t;var S=D1(a,s,t);h0(a,S);break e}}a=a.return}while(a!==null)}ib(n)}catch(T){t=T,qe===n&&n!==null&&(qe=n=n.return);continue}break}while(1)}function ob(){var e=ul.current;return ul.current=ll,e===null?ll:e}function ip(){(Me===0||Me===3||Me===2)&&(Me=4),Ne===null||(Br&268435455)===0&&(Wl&268435455)===0||Kn(Ne,He)}function fl(e,t){var n=X;X|=2;var r=ob();(Ne!==e||He!==t)&&(xn=null,Ir(e,t));do try{h9();break}catch(o){rb(e,o)}while(1);if(Of(),X=n,ul.current=r,qe!==null)throw Error(P(261));return Ne=null,He=0,Me}function h9(){for(;qe!==null;)ab(qe)}function g9(){for(;qe!==null&&!D3();)ab(qe)}function ab(e){var t=lb(e.alternate,e,vt);e.memoizedProps=e.pendingProps,t===null?ib(e):qe=t,tp.current=null}function ib(e){var t=e;do{var n=t.alternate;if(e=t.return,(t.flags&32768)===0){if(n=l9(n,t,vt),n!==null){qe=n;return}}else{if(n=u9(n,t),n!==null){n.flags&=32767,qe=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{Me=6,qe=null;return}}if(t=t.sibling,t!==null){qe=t;return}qe=t=e}while(t!==null);Me===0&&(Me=5)}function xr(e,t,n){var r=oe,o=Mt.transition;try{Mt.transition=null,oe=1,y9(e,t,n,r)}finally{Mt.transition=o,oe=r}return null}function y9(e,t,n,r){do Co();while(Xn!==null);if((X&6)!==0)throw Error(P(327));n=e.finishedWork;var o=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(P(177));e.callbackNode=null,e.callbackPriority=0;var a=n.lanes|n.childLanes;if(X3(e,a),e===Ne&&(qe=Ne=null,He=0),(n.subtreeFlags&2064)===0&&(n.flags&2064)===0||is||(is=!0,ub(Gs,function(){return Co(),null})),a=(n.flags&15990)!==0,(n.subtreeFlags&15990)!==0||a){a=Mt.transition,Mt.transition=null;var i=oe;oe=1;var s=X;X|=4,tp.current=null,d9(e,n),eb(n,e),L5(cd),Ys=!!ud,cd=ud=null,e.current=n,f9(n),O3(),X=s,oe=i,Mt.transition=a}else e.current=n;if(is&&(is=!1,Xn=e,dl=o),a=e.pendingLanes,a===0&&(or=null),H3(n.stateNode),mt(e,Ee()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)o=t[n],r(o.value,{componentStack:o.stack,digest:o.digest});if(cl)throw cl=!1,e=Pd,Pd=null,e;return(dl&1)!==0&&e.tag!==0&&Co(),a=e.pendingLanes,(a&1)!==0?e===qd?Pa++:(Pa=0,qd=e):Pa=0,hr(),null}function Co(){if(Xn!==null){var e=Ny(dl),t=Mt.transition,n=oe;try{if(Mt.transition=null,oe=16>e?16:e,Xn===null)var r=!1;else{if(e=Xn,Xn=null,dl=0,(X&6)!==0)throw Error(P(331));var o=X;for(X|=4,M=e.current;M!==null;){var a=M,i=a.child;if((M.flags&16)!==0){var s=a.deletions;if(s!==null){for(var l=0;l<s.length;l++){var u=s[l];for(M=u;M!==null;){var c=M;switch(c.tag){case 0:case 11:case 15:Ea(8,c,a)}var d=c.child;if(d!==null)d.return=c,M=d;else for(;M!==null;){c=M;var f=c.sibling,p=c.return;if(X1(c),c===u){M=null;break}if(f!==null){f.return=p,M=f;break}M=p}}}var y=a.alternate;if(y!==null){var v=y.child;if(v!==null){y.child=null;do{var k=v.sibling;v.sibling=null,v=k}while(v!==null)}}M=a}}if((a.subtreeFlags&2064)!==0&&i!==null)i.return=a,M=i;else e:for(;M!==null;){if(a=M,(a.flags&2048)!==0)switch(a.tag){case 0:case 11:case 15:Ea(9,a,a.return)}var g=a.sibling;if(g!==null){g.return=a.return,M=g;break e}M=a.return}}var m=e.current;for(M=m;M!==null;){i=M;var h=i.child;if((i.subtreeFlags&2064)!==0&&h!==null)h.return=i,M=h;else e:for(i=m;M!==null;){if(s=M,(s.flags&2048)!==0)try{switch(s.tag){case 0:case 11:case 15:$l(9,s)}}catch(T){Te(s,s.return,T)}if(s===i){M=null;break e}var S=s.sibling;if(S!==null){S.return=s.return,M=S;break e}M=s.return}}if(X=o,hr(),cn&&typeof cn.onPostCommitFiberRoot=="function")try{cn.onPostCommitFiberRoot(Ml,e)}catch{}r=!0}return r}finally{oe=n,Mt.transition=t}}return!1}function L0(e,t,n){t=jo(n,t),t=B1(e,t,1),e=rr(e,t,1),t=ot(),e!==null&&(Ci(e,1,t),mt(e,t))}function Te(e,t,n){if(e.tag===3)L0(e,e,n);else for(;t!==null;){if(t.tag===3){L0(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(or===null||!or.has(r))){e=jo(n,e),e=D1(t,e,1),t=rr(t,e,1),e=ot(),t!==null&&(Ci(t,1,e),mt(t,e));break}}t=t.return}}function b9(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=ot(),e.pingedLanes|=e.suspendedLanes&n,Ne===e&&(He&n)===n&&(Me===4||Me===3&&(He&130023424)===He&&500>Ee()-rp?Ir(e,0):np|=n),mt(e,t)}function sb(e,t){t===0&&((e.mode&1)===0?t=1:(t=Zi,Zi<<=1,(Zi&130023424)===0&&(Zi=4194304)));var n=ot();e=qn(e,t),e!==null&&(Ci(e,t,n),mt(e,n))}function v9(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),sb(e,n)}function w9(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,o=e.memoizedState;o!==null&&(n=o.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(P(314))}r!==null&&r.delete(t),sb(e,n)}var lb;lb=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||ft.current)dt=!0;else{if((e.lanes&n)===0&&(t.flags&128)===0)return dt=!1,s9(e,t,n);dt=(e.flags&131072)!==0}else dt=!1,ve&&(t.flags&1048576)!==0&&d1(t,nl,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;As(e,t),e=t.pendingProps;var o=zo(t,Qe.current);xo(t,n),o=Zf(null,t,r,e,o,n);var a=Xf();return t.flags|=1,typeof o=="object"&&o!==null&&typeof o.render=="function"&&o.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,pt(r)?(a=!0,el(t)):a=!1,t.memoizedState=o.state!==null&&o.state!==void 0?o.state:null,Hf(t),o.updater=Dl,t.stateNode=o,o._reactInternals=t,vd(t,r,e,n),t=xd(null,t,r,!0,a,n)):(t.tag=0,ve&&a&&jf(t),tt(null,t,o,n),t=t.child),t;case 16:r=t.elementType;e:{switch(As(e,t),e=t.pendingProps,o=r._init,r=o(r._payload),t.type=r,o=t.tag=x9(r),e=$t(r,e),o){case 0:t=Sd(null,t,r,e,n);break e;case 1:t=F0(null,t,r,e,n);break e;case 11:t=_0(null,t,r,e,n);break e;case 14:t=T0(null,t,r,$t(r.type,e),n);break e}throw Error(P(306,r,""))}return t;case 0:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),Sd(e,t,r,o,n);case 1:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),F0(e,t,r,o,n);case 3:e:{if(H1(t),e===null)throw Error(P(387));r=t.pendingProps,a=t.memoizedState,o=a.element,h1(e,t),al(t,r,null,n);var i=t.memoizedState;if(r=i.element,a.isDehydrated)if(a={element:r,isDehydrated:!1,cache:i.cache,pendingSuspenseBoundaries:i.pendingSuspenseBoundaries,transitions:i.transitions},t.updateQueue.baseState=a,t.memoizedState=a,t.flags&256){o=jo(Error(P(423)),t),t=E0(e,t,r,n,o);break e}else if(r!==o){o=jo(Error(P(424)),t),t=E0(e,t,r,n,o);break e}else for(wt=nr(t.stateNode.containerInfo.firstChild),St=t,ve=!0,Ht=null,n=v1(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Mo(),r===o){t=In(e,t,n);break e}tt(e,t,r,n)}t=t.child}return t;case 5:return w1(t),e===null&&gd(t),r=t.type,o=t.pendingProps,a=e!==null?e.memoizedProps:null,i=o.children,dd(r,o)?i=null:a!==null&&dd(r,a)&&(t.flags|=32),W1(e,t),tt(e,t,i,n),t.child;case 6:return e===null&&gd(t),null;case 13:return U1(e,t,n);case 4:return Uf(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=Vo(t,null,r,n):tt(e,t,r,n),t.child;case 11:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),_0(e,t,r,o,n);case 7:return tt(e,t,t.pendingProps,n),t.child;case 8:return tt(e,t,t.pendingProps.children,n),t.child;case 12:return tt(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,o=t.pendingProps,a=t.memoizedProps,i=o.value,ue(rl,r._currentValue),r._currentValue=i,a!==null)if(Zt(a.value,i)){if(a.children===o.children&&!ft.current){t=In(e,t,n);break e}}else for(a=t.child,a!==null&&(a.return=t);a!==null;){var s=a.dependencies;if(s!==null){i=a.child;for(var l=s.firstContext;l!==null;){if(l.context===r){if(a.tag===1){l=En(-1,n&-n),l.tag=2;var u=a.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}a.lanes|=n,l=a.alternate,l!==null&&(l.lanes|=n),yd(a.return,n,t),s.lanes|=n;break}l=l.next}}else if(a.tag===10)i=a.type===t.type?null:a.child;else if(a.tag===18){if(i=a.return,i===null)throw Error(P(341));i.lanes|=n,s=i.alternate,s!==null&&(s.lanes|=n),yd(i,n,t),i=a.sibling}else i=a.child;if(i!==null)i.return=a;else for(i=a;i!==null;){if(i===t){i=null;break}if(a=i.sibling,a!==null){a.return=i.return,i=a;break}i=i.return}a=i}tt(e,t,o.children,n),t=t.child}return t;case 9:return o=t.type,r=t.pendingProps.children,xo(t,n),o=Lt(o),r=r(o),t.flags|=1,tt(e,t,r,n),t.child;case 14:return r=t.type,o=$t(r,t.pendingProps),o=$t(r.type,o),T0(e,t,r,o,n);case 15:return O1(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,o=t.pendingProps,o=t.elementType===r?o:$t(r,o),As(e,t),t.tag=1,pt(r)?(e=!0,el(t)):e=!1,xo(t,n),y1(t,r,o),vd(t,r,o,n),xd(null,t,r,!0,e,n);case 19:return G1(e,t,n);case 22:return $1(e,t,n)}throw Error(P(156,t.tag))};function ub(e,t){return My(e,t)}function S9(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function zt(e,t,n,r){return new S9(e,t,n,r)}function sp(e){return e=e.prototype,!(!e||!e.isReactComponent)}function x9(e){if(typeof e=="function")return sp(e)?1:0;if(e!=null){if(e=e.$$typeof,e===Tf)return 11;if(e===Ff)return 14}return 2}function ir(e,t){var n=e.alternate;return n===null?(n=zt(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Is(e,t,n,r,o,a){var i=2;if(r=e,typeof e=="function")sp(e)&&(i=1);else if(typeof e=="string")i=5;else e:switch(e){case ro:return Rr(n.children,o,a,t);case _f:i=8,o|=8;break;case $c:return e=zt(12,n,t,o|2),e.elementType=$c,e.lanes=a,e;case Wc:return e=zt(13,n,t,o),e.elementType=Wc,e.lanes=a,e;case Hc:return e=zt(19,n,t,o),e.elementType=Hc,e.lanes=a,e;case by:return Hl(n,o,a,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case gy:i=10;break e;case yy:i=9;break e;case Tf:i=11;break e;case Ff:i=14;break e;case $n:i=16,r=null;break e}throw Error(P(130,e==null?e:typeof e,""))}return t=zt(i,n,t,o),t.elementType=e,t.type=r,t.lanes=a,t}function Rr(e,t,n,r){return e=zt(7,e,r,t),e.lanes=n,e}function Hl(e,t,n,r){return e=zt(22,e,r,t),e.elementType=by,e.lanes=n,e.stateNode={isHidden:!1},e}function dc(e,t,n){return e=zt(6,e,null,t),e.lanes=n,e}function fc(e,t,n){return t=zt(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function C9(e,t,n,r,o){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Uu(0),this.expirationTimes=Uu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Uu(0),this.identifierPrefix=r,this.onRecoverableError=o,this.mutableSourceEagerHydrationData=null}function lp(e,t,n,r,o,a,i,s,l){return e=new C9(e,t,n,s,l),t===1?(t=1,a===!0&&(t|=8)):t=0,a=zt(3,null,null,t),e.current=a,a.stateNode=e,a.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(a),e}function k9(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:no,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function cb(e){if(!e)return cr;e=e._reactInternals;e:{if($r(e)!==e||e.tag!==1)throw Error(P(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(pt(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(P(171))}if(e.tag===1){var n=e.type;if(pt(n))return u1(e,n,t)}return t}function db(e,t,n,r,o,a,i,s,l){return e=lp(n,r,!0,e,o,a,i,s,l),e.context=cb(null),n=e.current,r=ot(),o=ar(n),a=En(r,o),a.callback=t!=null?t:null,rr(n,a,o),e.current.lanes=o,Ci(e,o,r),mt(e,r),e}function Ul(e,t,n,r){var o=t.current,a=ot(),i=ar(o);return n=cb(n),t.context===null?t.context=n:t.pendingContext=n,t=En(a,i),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=rr(o,t,i),e!==null&&(Kt(e,o,i,a),Ts(e,o,i)),i}function pl(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function j0(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function up(e,t){j0(e,t),(e=e.alternate)&&j0(e,t)}function _9(){return null}var fb=typeof reportError=="function"?reportError:function(e){console.error(e)};function cp(e){this._internalRoot=e}Gl.prototype.render=cp.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(P(409));Ul(e,t,null,null)};Gl.prototype.unmount=cp.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;Dr(function(){Ul(null,e,null,null)}),t[Pn]=null}};function Gl(e){this._internalRoot=e}Gl.prototype.unstable_scheduleHydration=function(e){if(e){var t=Oy();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Gn.length&&t!==0&&t<Gn[n].priority;n++);Gn.splice(n,0,e),n===0&&Wy(e)}};function dp(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Kl(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function N0(){}function T9(e,t,n,r,o){if(o){if(typeof r=="function"){var a=r;r=function(){var u=pl(i);a.call(u)}}var i=db(t,r,e,0,null,!1,!1,"",N0);return e._reactRootContainer=i,e[Pn]=i.current,Qa(e.nodeType===8?e.parentNode:e),Dr(),i}for(;o=e.lastChild;)e.removeChild(o);if(typeof r=="function"){var s=r;r=function(){var u=pl(l);s.call(u)}}var l=lp(e,0,!1,null,null,!1,!1,"",N0);return e._reactRootContainer=l,e[Pn]=l.current,Qa(e.nodeType===8?e.parentNode:e),Dr(function(){Ul(t,l,n,r)}),l}function Yl(e,t,n,r,o){var a=n._reactRootContainer;if(a){var i=a;if(typeof o=="function"){var s=o;o=function(){var l=pl(i);s.call(l)}}Ul(t,i,e,o)}else i=T9(n,t,e,o,r);return pl(i)}By=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=ya(t.pendingLanes);n!==0&&(Pf(t,n|1),mt(t,Ee()),(X&6)===0&&(No=Ee()+500,hr()))}break;case 13:Dr(function(){var r=qn(e,1);if(r!==null){var o=ot();Kt(r,e,1,o)}}),up(e,1)}};qf=function(e){if(e.tag===13){var t=qn(e,134217728);if(t!==null){var n=ot();Kt(t,e,134217728,n)}up(e,134217728)}};Dy=function(e){if(e.tag===13){var t=ar(e),n=qn(e,t);if(n!==null){var r=ot();Kt(n,e,t,r)}up(e,t)}};Oy=function(){return oe};$y=function(e,t){var n=oe;try{return oe=e,t()}finally{oe=n}};td=function(e,t,n){switch(t){case"input":if(Kc(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var o=Nl(r);if(!o)throw Error(P(90));wy(r),Kc(r,o)}}}break;case"textarea":xy(e,n);break;case"select":t=n.value,t!=null&&bo(e,!!n.multiple,t,!1)}};Ay=op;Py=Dr;var F9={usingClientEntryPoint:!1,Events:[_i,so,Nl,Fy,Ey,op]},ua={findFiberByHostInstance:Tr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},E9={bundleType:ua.bundleType,version:ua.version,rendererPackageName:ua.rendererPackageName,rendererConfig:ua.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Mn.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=Ry(e),e===null?null:e.stateNode},findFiberByHostInstance:ua.findFiberByHostInstance||_9,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var ss=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!ss.isDisabled&&ss.supportsFiber)try{Ml=ss.inject(E9),cn=ss}catch{}}Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=F9;Tt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!dp(t))throw Error(P(200));return k9(e,t,null,n)};Tt.createRoot=function(e,t){if(!dp(e))throw Error(P(299));var n=!1,r="",o=fb;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),t=lp(e,1,!1,null,null,n,!1,r,o),e[Pn]=t.current,Qa(e.nodeType===8?e.parentNode:e),new cp(t)};Tt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(P(188)):(e=Object.keys(e).join(","),Error(P(268,e)));return e=Ry(t),e=e===null?null:e.stateNode,e};Tt.flushSync=function(e){return Dr(e)};Tt.hydrate=function(e,t,n){if(!Kl(t))throw Error(P(200));return Yl(null,e,t,!0,n)};Tt.hydrateRoot=function(e,t,n){if(!dp(e))throw Error(P(405));var r=n!=null&&n.hydratedSources||null,o=!1,a="",i=fb;if(n!=null&&(n.unstable_strictMode===!0&&(o=!0),n.identifierPrefix!==void 0&&(a=n.identifierPrefix),n.onRecoverableError!==void 0&&(i=n.onRecoverableError)),t=db(t,null,e,1,n!=null?n:null,o,!1,a,i),e[Pn]=t.current,Qa(e),r)for(e=0;e<r.length;e++)n=r[e],o=n._getVersion,o=o(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,o]:t.mutableSourceEagerHydrationData.push(n,o);return new Gl(t)};Tt.render=function(e,t,n){if(!Kl(t))throw Error(P(200));return Yl(null,e,t,!1,n)};Tt.unmountComponentAtNode=function(e){if(!Kl(e))throw Error(P(40));return e._reactRootContainer?(Dr(function(){Yl(null,null,e,!1,function(){e._reactRootContainer=null,e[Pn]=null})}),!0):!1};Tt.unstable_batchedUpdates=op;Tt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Kl(n))throw Error(P(200));if(e==null||e._reactInternals===void 0)throw Error(P(38));return Yl(e,t,n,!1,r)};Tt.version="18.2.0-next-9e3b772b8-20220608";(function(e){function t(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(t)}catch(n){console.error(n)}}t(),e.exports=Tt})(zl);var pb,B0=zl.exports;pb=B0.createRoot,B0.hydrateRoot;var sr=Boolean(globalThis==null?void 0:globalThis.document)?w.exports.useLayoutEffect:w.exports.useEffect,Zl={exports:{}},Xl={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var A9=w.exports,P9=Symbol.for("react.element"),q9=Symbol.for("react.fragment"),I9=Object.prototype.hasOwnProperty,R9=A9.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,z9={key:!0,ref:!0,__self:!0,__source:!0};function mb(e,t,n){var r,o={},a=null,i=null;n!==void 0&&(a=""+n),t.key!==void 0&&(a=""+t.key),t.ref!==void 0&&(i=t.ref);for(r in t)I9.call(t,r)&&!z9.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)o[r]===void 0&&(o[r]=t[r]);return{$$typeof:P9,type:e,key:a,ref:i,props:o,_owner:R9.current}}Xl.Fragment=q9;Xl.jsx=mb;Xl.jsxs=mb;(function(e){e.exports=Xl})(Zl);const ml=Zl.exports.Fragment,F=Zl.exports.jsx,W=Zl.exports.jsxs;var fp=w.exports.createContext({});fp.displayName="ColorModeContext";function pp(){const e=w.exports.useContext(fp);if(e===void 0)throw new Error("useColorMode must be used within a ColorModeProvider");return e}var ls={light:"chakra-ui-light",dark:"chakra-ui-dark"};function M9(e={}){const{preventTransition:t=!0}=e,n={setDataset:r=>{const o=t?n.preventTransition():void 0;document.documentElement.dataset.theme=r,document.documentElement.style.colorScheme=r,o==null||o()},setClassName(r){document.body.classList.add(r?ls.dark:ls.light),document.body.classList.remove(r?ls.light:ls.dark)},query(){return window.matchMedia("(prefers-color-scheme: dark)")},getSystemTheme(r){var a;return((a=n.query().matches)!=null?a:r==="dark")?"dark":"light"},addListener(r){const o=n.query(),a=i=>{r(i.matches?"dark":"light")};return typeof o.addListener=="function"?o.addListener(a):o.addEventListener("change",a),()=>{typeof o.removeListener=="function"?o.removeListener(a):o.removeEventListener("change",a)}},preventTransition(){const r=document.createElement("style");return r.appendChild(document.createTextNode("*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}")),document.head.appendChild(r),()=>{window.getComputedStyle(document.body),requestAnimationFrame(()=>{requestAnimationFrame(()=>{document.head.removeChild(r)})})}}};return n}var V9="chakra-ui-color-mode";function L9(e){return{ssr:!1,type:"localStorage",get(t){if(!(globalThis!=null&&globalThis.document))return t;let n;try{n=localStorage.getItem(e)||t}catch{}return n||t},set(t){try{localStorage.setItem(e,t)}catch{}}}}var j9=L9(V9),D0=()=>{};function O0(e,t){return e.type==="cookie"&&e.ssr?e.get(t):t}function hb(e){const{value:t,children:n,options:{useSystemColorMode:r,initialColorMode:o,disableTransitionOnChange:a}={},colorModeManager:i=j9}=e,s=o==="dark"?"dark":"light",[l,u]=w.exports.useState(()=>O0(i,s)),[c,d]=w.exports.useState(()=>O0(i)),{getSystemTheme:f,setClassName:p,setDataset:y,addListener:v}=w.exports.useMemo(()=>M9({preventTransition:a}),[a]),k=o==="system"&&!l?c:l,g=w.exports.useCallback(S=>{const T=S==="system"?f():S;u(T),p(T==="dark"),y(T),i.set(T)},[i,f,p,y]);sr(()=>{o==="system"&&d(f())},[]),w.exports.useEffect(()=>{const S=i.get();if(S){g(S);return}if(o==="system"){g("system");return}g(s)},[i,s,o,g]);const m=w.exports.useCallback(()=>{g(k==="dark"?"light":"dark")},[k,g]);w.exports.useEffect(()=>{if(!!r)return v(g)},[r,v,g]);const h=w.exports.useMemo(()=>({colorMode:t!=null?t:k,toggleColorMode:t?D0:m,setColorMode:t?D0:g,forced:t!==void 0}),[k,m,g,t]);return F(fp.Provider,{value:h,children:n})}hb.displayName="ColorModeProvider";var zd={exports:{}};(function(e,t){var n=200,r="__lodash_hash_undefined__",o=800,a=16,i=9007199254740991,s="[object Arguments]",l="[object Array]",u="[object AsyncFunction]",c="[object Boolean]",d="[object Date]",f="[object Error]",p="[object Function]",y="[object GeneratorFunction]",v="[object Map]",k="[object Number]",g="[object Null]",m="[object Object]",h="[object Proxy]",S="[object RegExp]",T="[object Set]",A="[object String]",E="[object Undefined]",q="[object WeakMap]",j="[object ArrayBuffer]",V="[object DataView]",_e="[object Float32Array]",we="[object Float64Array]",De="[object Int8Array]",lt="[object Int16Array]",yt="[object Int32Array]",ce="[object Uint8Array]",Le="[object Uint8ClampedArray]",I="[object Uint16Array]",O="[object Uint32Array]",$=/[\\^$.*+?()[\]{}|]/g,de=/^\[object .+?Constructor\]$/,fe=/^(?:0|[1-9]\d*)$/,K={};K[_e]=K[we]=K[De]=K[lt]=K[yt]=K[ce]=K[Le]=K[I]=K[O]=!0,K[s]=K[l]=K[j]=K[c]=K[V]=K[d]=K[f]=K[p]=K[v]=K[k]=K[m]=K[S]=K[T]=K[A]=K[q]=!1;var Se=typeof Wi=="object"&&Wi&&Wi.Object===Object&&Wi,Vn=typeof self=="object"&&self&&self.Object===Object&&self,Ge=Se||Vn||Function("return this")(),Qt=t&&!t.nodeType&&t,Ln=Qt&&!0&&e&&!e.nodeType&&e,Ri=Ln&&Ln.exports===Qt,Qo=Ri&&Se.process,zi=function(){try{var b=Ln&&Ln.require&&Ln.require("util").types;return b||Qo&&Qo.binding&&Qo.binding("util")}catch{}}(),Mi=zi&&zi.isTypedArray;function dm(b,x,_){switch(_.length){case 0:return b.call(x);case 1:return b.call(x,_[0]);case 2:return b.call(x,_[0],_[1]);case 3:return b.call(x,_[0],_[1],_[2])}return b.apply(x,_)}function U(b,x){for(var _=-1,z=Array(b);++_<b;)z[_]=x(_);return z}function gn(b){return function(x){return b(x)}}function yn(b,x){return b==null?void 0:b[x]}function Kr(b,x){return function(_){return b(x(_))}}var nw=Array.prototype,rw=Function.prototype,Vi=Object.prototype,Pu=Ge["__core-js_shared__"],Li=rw.toString,bn=Vi.hasOwnProperty,fm=function(){var b=/[^.]+$/.exec(Pu&&Pu.keys&&Pu.keys.IE_PROTO||"");return b?"Symbol(src)_1."+b:""}(),pm=Vi.toString,ow=Li.call(Object),aw=RegExp("^"+Li.call(bn).replace($,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),ji=Ri?Ge.Buffer:void 0,mm=Ge.Symbol,hm=Ge.Uint8Array,gm=ji?ji.allocUnsafe:void 0,ym=Kr(Object.getPrototypeOf,Object),bm=Object.create,iw=Vi.propertyIsEnumerable,sw=nw.splice,gr=mm?mm.toStringTag:void 0,Ni=function(){try{var b=Ru(Object,"defineProperty");return b({},"",{}),b}catch{}}(),lw=ji?ji.isBuffer:void 0,vm=Math.max,uw=Date.now,wm=Ru(Ge,"Map"),Jo=Ru(Object,"create"),cw=function(){function b(){}return function(x){if(!br(x))return{};if(bm)return bm(x);b.prototype=x;var _=new b;return b.prototype=void 0,_}}();function yr(b){var x=-1,_=b==null?0:b.length;for(this.clear();++x<_;){var z=b[x];this.set(z[0],z[1])}}function dw(){this.__data__=Jo?Jo(null):{},this.size=0}function fw(b){var x=this.has(b)&&delete this.__data__[b];return this.size-=x?1:0,x}function pw(b){var x=this.__data__;if(Jo){var _=x[b];return _===r?void 0:_}return bn.call(x,b)?x[b]:void 0}function mw(b){var x=this.__data__;return Jo?x[b]!==void 0:bn.call(x,b)}function hw(b,x){var _=this.__data__;return this.size+=this.has(b)?0:1,_[b]=Jo&&x===void 0?r:x,this}yr.prototype.clear=dw,yr.prototype.delete=fw,yr.prototype.get=pw,yr.prototype.has=mw,yr.prototype.set=hw;function vn(b){var x=-1,_=b==null?0:b.length;for(this.clear();++x<_;){var z=b[x];this.set(z[0],z[1])}}function gw(){this.__data__=[],this.size=0}function yw(b){var x=this.__data__,_=Bi(x,b);if(_<0)return!1;var z=x.length-1;return _==z?x.pop():sw.call(x,_,1),--this.size,!0}function bw(b){var x=this.__data__,_=Bi(x,b);return _<0?void 0:x[_][1]}function vw(b){return Bi(this.__data__,b)>-1}function ww(b,x){var _=this.__data__,z=Bi(_,b);return z<0?(++this.size,_.push([b,x])):_[z][1]=x,this}vn.prototype.clear=gw,vn.prototype.delete=yw,vn.prototype.get=bw,vn.prototype.has=vw,vn.prototype.set=ww;function Yr(b){var x=-1,_=b==null?0:b.length;for(this.clear();++x<_;){var z=b[x];this.set(z[0],z[1])}}function Sw(){this.size=0,this.__data__={hash:new yr,map:new(wm||vn),string:new yr}}function xw(b){var x=Oi(this,b).delete(b);return this.size-=x?1:0,x}function Cw(b){return Oi(this,b).get(b)}function kw(b){return Oi(this,b).has(b)}function _w(b,x){var _=Oi(this,b),z=_.size;return _.set(b,x),this.size+=_.size==z?0:1,this}Yr.prototype.clear=Sw,Yr.prototype.delete=xw,Yr.prototype.get=Cw,Yr.prototype.has=kw,Yr.prototype.set=_w;function Zr(b){var x=this.__data__=new vn(b);this.size=x.size}function Tw(){this.__data__=new vn,this.size=0}function Fw(b){var x=this.__data__,_=x.delete(b);return this.size=x.size,_}function Ew(b){return this.__data__.get(b)}function Aw(b){return this.__data__.has(b)}function Pw(b,x){var _=this.__data__;if(_ instanceof vn){var z=_.__data__;if(!wm||z.length<n-1)return z.push([b,x]),this.size=++_.size,this;_=this.__data__=new Yr(z)}return _.set(b,x),this.size=_.size,this}Zr.prototype.clear=Tw,Zr.prototype.delete=Fw,Zr.prototype.get=Ew,Zr.prototype.has=Aw,Zr.prototype.set=Pw;function qw(b,x){var _=Vu(b),z=!_&&Mu(b),Y=!_&&!z&&_m(b),se=!_&&!z&&!Y&&Fm(b),ye=_||z||Y||se,G=ye?U(b.length,String):[],be=G.length;for(var At in b)(x||bn.call(b,At))&&!(ye&&(At=="length"||Y&&(At=="offset"||At=="parent")||se&&(At=="buffer"||At=="byteLength"||At=="byteOffset")||Cm(At,be)))&&G.push(At);return G}function qu(b,x,_){(_!==void 0&&!$i(b[x],_)||_===void 0&&!(x in b))&&Iu(b,x,_)}function Iw(b,x,_){var z=b[x];(!(bn.call(b,x)&&$i(z,_))||_===void 0&&!(x in b))&&Iu(b,x,_)}function Bi(b,x){for(var _=b.length;_--;)if($i(b[_][0],x))return _;return-1}function Iu(b,x,_){x=="__proto__"&&Ni?Ni(b,x,{configurable:!0,enumerable:!0,value:_,writable:!0}):b[x]=_}var Rw=Uw();function Di(b){return b==null?b===void 0?E:g:gr&&gr in Object(b)?Gw(b):Jw(b)}function Sm(b){return ea(b)&&Di(b)==s}function zw(b){if(!br(b)||Xw(b))return!1;var x=ju(b)?aw:de;return x.test(r3(b))}function Mw(b){return ea(b)&&Tm(b.length)&&!!K[Di(b)]}function Vw(b){if(!br(b))return Qw(b);var x=km(b),_=[];for(var z in b)z=="constructor"&&(x||!bn.call(b,z))||_.push(z);return _}function xm(b,x,_,z,Y){b!==x&&Rw(x,function(se,ye){if(Y||(Y=new Zr),br(se))Lw(b,x,ye,_,xm,z,Y);else{var G=z?z(zu(b,ye),se,ye+"",b,x,Y):void 0;G===void 0&&(G=se),qu(b,ye,G)}},Em)}function Lw(b,x,_,z,Y,se,ye){var G=zu(b,_),be=zu(x,_),At=ye.get(be);if(At){qu(b,_,At);return}var bt=se?se(G,be,_+"",b,x,ye):void 0,ta=bt===void 0;if(ta){var Nu=Vu(be),Bu=!Nu&&_m(be),Pm=!Nu&&!Bu&&Fm(be);bt=be,Nu||Bu||Pm?Vu(G)?bt=G:o3(G)?bt=$w(G):Bu?(ta=!1,bt=Bw(be,!0)):Pm?(ta=!1,bt=Ow(be,!0)):bt=[]:a3(be)||Mu(be)?(bt=G,Mu(G)?bt=i3(G):(!br(G)||ju(G))&&(bt=Kw(be))):ta=!1}ta&&(ye.set(be,bt),Y(bt,be,z,se,ye),ye.delete(be)),qu(b,_,bt)}function jw(b,x){return t3(e3(b,x,Am),b+"")}var Nw=Ni?function(b,x){return Ni(b,"toString",{configurable:!0,enumerable:!1,value:l3(x),writable:!0})}:Am;function Bw(b,x){if(x)return b.slice();var _=b.length,z=gm?gm(_):new b.constructor(_);return b.copy(z),z}function Dw(b){var x=new b.constructor(b.byteLength);return new hm(x).set(new hm(b)),x}function Ow(b,x){var _=x?Dw(b.buffer):b.buffer;return new b.constructor(_,b.byteOffset,b.length)}function $w(b,x){var _=-1,z=b.length;for(x||(x=Array(z));++_<z;)x[_]=b[_];return x}function Ww(b,x,_,z){var Y=!_;_||(_={});for(var se=-1,ye=x.length;++se<ye;){var G=x[se],be=z?z(_[G],b[G],G,_,b):void 0;be===void 0&&(be=b[G]),Y?Iu(_,G,be):Iw(_,G,be)}return _}function Hw(b){return jw(function(x,_){var z=-1,Y=_.length,se=Y>1?_[Y-1]:void 0,ye=Y>2?_[2]:void 0;for(se=b.length>3&&typeof se=="function"?(Y--,se):void 0,ye&&Yw(_[0],_[1],ye)&&(se=Y<3?void 0:se,Y=1),x=Object(x);++z<Y;){var G=_[z];G&&b(x,G,z,se)}return x})}function Uw(b){return function(x,_,z){for(var Y=-1,se=Object(x),ye=z(x),G=ye.length;G--;){var be=ye[b?G:++Y];if(_(se[be],be,se)===!1)break}return x}}function Oi(b,x){var _=b.__data__;return Zw(x)?_[typeof x=="string"?"string":"hash"]:_.map}function Ru(b,x){var _=yn(b,x);return zw(_)?_:void 0}function Gw(b){var x=bn.call(b,gr),_=b[gr];try{b[gr]=void 0;var z=!0}catch{}var Y=pm.call(b);return z&&(x?b[gr]=_:delete b[gr]),Y}function Kw(b){return typeof b.constructor=="function"&&!km(b)?cw(ym(b)):{}}function Cm(b,x){var _=typeof b;return x=x==null?i:x,!!x&&(_=="number"||_!="symbol"&&fe.test(b))&&b>-1&&b%1==0&&b<x}function Yw(b,x,_){if(!br(_))return!1;var z=typeof x;return(z=="number"?Lu(_)&&Cm(x,_.length):z=="string"&&x in _)?$i(_[x],b):!1}function Zw(b){var x=typeof b;return x=="string"||x=="number"||x=="symbol"||x=="boolean"?b!=="__proto__":b===null}function Xw(b){return!!fm&&fm in b}function km(b){var x=b&&b.constructor,_=typeof x=="function"&&x.prototype||Vi;return b===_}function Qw(b){var x=[];if(b!=null)for(var _ in Object(b))x.push(_);return x}function Jw(b){return pm.call(b)}function e3(b,x,_){return x=vm(x===void 0?b.length-1:x,0),function(){for(var z=arguments,Y=-1,se=vm(z.length-x,0),ye=Array(se);++Y<se;)ye[Y]=z[x+Y];Y=-1;for(var G=Array(x+1);++Y<x;)G[Y]=z[Y];return G[x]=_(ye),dm(b,this,G)}}function zu(b,x){if(!(x==="constructor"&&typeof b[x]=="function")&&x!="__proto__")return b[x]}var t3=n3(Nw);function n3(b){var x=0,_=0;return function(){var z=uw(),Y=a-(z-_);if(_=z,Y>0){if(++x>=o)return arguments[0]}else x=0;return b.apply(void 0,arguments)}}function r3(b){if(b!=null){try{return Li.call(b)}catch{}try{return b+""}catch{}}return""}function $i(b,x){return b===x||b!==b&&x!==x}var Mu=Sm(function(){return arguments}())?Sm:function(b){return ea(b)&&bn.call(b,"callee")&&!iw.call(b,"callee")},Vu=Array.isArray;function Lu(b){return b!=null&&Tm(b.length)&&!ju(b)}function o3(b){return ea(b)&&Lu(b)}var _m=lw||u3;function ju(b){if(!br(b))return!1;var x=Di(b);return x==p||x==y||x==u||x==h}function Tm(b){return typeof b=="number"&&b>-1&&b%1==0&&b<=i}function br(b){var x=typeof b;return b!=null&&(x=="object"||x=="function")}function ea(b){return b!=null&&typeof b=="object"}function a3(b){if(!ea(b)||Di(b)!=m)return!1;var x=ym(b);if(x===null)return!0;var _=bn.call(x,"constructor")&&x.constructor;return typeof _=="function"&&_ instanceof _&&Li.call(_)==ow}var Fm=Mi?gn(Mi):Mw;function i3(b){return Ww(b,Em(b))}function Em(b){return Lu(b)?qw(b,!0):Vw(b)}var s3=Hw(function(b,x,_,z){xm(b,x,_,z)});function l3(b){return function(){return b}}function Am(b){return b}function u3(){return!1}e.exports=s3})(zd,zd.exports);const ln=zd.exports;function Yt(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function Ar(e,...t){return N9(e)?e(...t):e}var N9=e=>typeof e=="function",B9=e=>/!(important)?$/.test(e),$0=e=>typeof e=="string"?e.replace(/!(important)?$/,"").trim():e,Md=(e,t)=>n=>{const r=String(t),o=B9(r),a=$0(r),i=e?`${e}.${a}`:a;let s=Yt(n.__cssMap)&&i in n.__cssMap?n.__cssMap[i].varRef:t;return s=$0(s),o?`${s} !important`:s};function si(e){const{scale:t,transform:n,compose:r}=e;return(a,i)=>{var u;const s=Md(t,a)(i);let l=(u=n==null?void 0:n(s,i))!=null?u:s;return r&&(l=r(l,i)),l}}var us=(...e)=>t=>e.reduce((n,r)=>r(n),t);function Bt(e,t){return n=>{const r={property:n,scale:e};return r.transform=si({scale:e,transform:t}),r}}var D9=({rtl:e,ltr:t})=>n=>n.direction==="rtl"?e:t;function O9(e){const{property:t,scale:n,transform:r}=e;return{scale:n,property:D9(t),transform:n?si({scale:n,compose:r}):r}}var gb=["rotate(var(--chakra-rotate, 0))","scaleX(var(--chakra-scale-x, 1))","scaleY(var(--chakra-scale-y, 1))","skewX(var(--chakra-skew-x, 0))","skewY(var(--chakra-skew-y, 0))"];function $9(){return["translateX(var(--chakra-translate-x, 0))","translateY(var(--chakra-translate-y, 0))",...gb].join(" ")}function W9(){return["translate3d(var(--chakra-translate-x, 0), var(--chakra-translate-y, 0), 0)",...gb].join(" ")}var H9={"--chakra-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-sepia":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-drop-shadow":"var(--chakra-empty,/*!*/ /*!*/)",filter:["var(--chakra-blur)","var(--chakra-brightness)","var(--chakra-contrast)","var(--chakra-grayscale)","var(--chakra-hue-rotate)","var(--chakra-invert)","var(--chakra-saturate)","var(--chakra-sepia)","var(--chakra-drop-shadow)"].join(" ")},U9={backdropFilter:["var(--chakra-backdrop-blur)","var(--chakra-backdrop-brightness)","var(--chakra-backdrop-contrast)","var(--chakra-backdrop-grayscale)","var(--chakra-backdrop-hue-rotate)","var(--chakra-backdrop-invert)","var(--chakra-backdrop-opacity)","var(--chakra-backdrop-saturate)","var(--chakra-backdrop-sepia)"].join(" "),"--chakra-backdrop-blur":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-brightness":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-contrast":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-grayscale":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-hue-rotate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-invert":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-opacity":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-saturate":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-backdrop-sepia":"var(--chakra-empty,/*!*/ /*!*/)"};function G9(e){return{"--chakra-ring-offset-shadow":"var(--chakra-ring-inset) 0 0 0 var(--chakra-ring-offset-width) var(--chakra-ring-offset-color)","--chakra-ring-shadow":"var(--chakra-ring-inset) 0 0 0 calc(var(--chakra-ring-width) + var(--chakra-ring-offset-width)) var(--chakra-ring-color)","--chakra-ring-width":e,boxShadow:["var(--chakra-ring-offset-shadow)","var(--chakra-ring-shadow)","var(--chakra-shadow, 0 0 #0000)"].join(", ")}}var K9={"row-reverse":{space:"--chakra-space-x-reverse",divide:"--chakra-divide-x-reverse"},"column-reverse":{space:"--chakra-space-y-reverse",divide:"--chakra-divide-y-reverse"}},yb="& > :not(style) ~ :not(style)",Y9={[yb]:{marginInlineStart:"calc(var(--chakra-space-x) * calc(1 - var(--chakra-space-x-reverse)))",marginInlineEnd:"calc(var(--chakra-space-x) * var(--chakra-space-x-reverse))"}},Z9={[yb]:{marginTop:"calc(var(--chakra-space-y) * calc(1 - var(--chakra-space-y-reverse)))",marginBottom:"calc(var(--chakra-space-y) * var(--chakra-space-y-reverse))"}},Vd={"to-t":"to top","to-tr":"to top right","to-r":"to right","to-br":"to bottom right","to-b":"to bottom","to-bl":"to bottom left","to-l":"to left","to-tl":"to top left"},X9=new Set(Object.values(Vd)),bb=new Set(["none","-moz-initial","inherit","initial","revert","unset"]),Q9=e=>e.trim();function J9(e,t){var d;var n;if(e==null||bb.has(e))return e;const r=/(?<type>^[a-z-A-Z]+)\((?<values>(.*))\)/g,{type:o,values:a}=(d=(n=r.exec(e))==null?void 0:n.groups)!=null?d:{};if(!o||!a)return e;const i=o.includes("-gradient")?o:`${o}-gradient`,[s,...l]=a.split(",").map(Q9).filter(Boolean);if((l==null?void 0:l.length)===0)return e;const u=s in Vd?Vd[s]:s;l.unshift(u);const c=l.map(f=>{if(X9.has(f))return f;const p=f.indexOf(" "),[y,v]=p!==-1?[f.substr(0,p),f.substr(p+1)]:[f],k=vb(v)?v:v&&v.split(" "),g=`colors.${y}`,m=g in t.__cssMap?t.__cssMap[g].varRef:y;return k?[m,...Array.isArray(k)?k:[k]].join(" "):m});return`${i}(${c.join(", ")})`}var vb=e=>typeof e=="string"&&e.includes("(")&&e.includes(")"),e6=(e,t)=>J9(e,t!=null?t:{});function t6(e){return/^var\(--.+\)$/.test(e)}var n6=e=>{const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}},en=e=>t=>`${e}(${t})`,Z={filter(e){return e!=="auto"?e:H9},backdropFilter(e){return e!=="auto"?e:U9},ring(e){return G9(Z.px(e))},bgClip(e){return e==="text"?{color:"transparent",backgroundClip:"text"}:{backgroundClip:e}},transform(e){return e==="auto"?$9():e==="auto-gpu"?W9():e},vh(e){return e==="$100vh"?"var(--chakra-vh)":e},px(e){if(e==null)return e;const{unitless:t}=n6(e);return t||typeof e=="number"?`${e}px`:e},fraction(e){return typeof e!="number"||e>1?e:`${e*100}%`},float(e,t){const n={left:"right",right:"left"};return t.direction==="rtl"?n[e]:e},degree(e){if(t6(e)||e==null)return e;const t=typeof e=="string"&&!e.endsWith("deg");return typeof e=="number"||t?`${e}deg`:e},gradient:e6,blur:en("blur"),opacity:en("opacity"),brightness:en("brightness"),contrast:en("contrast"),dropShadow:en("drop-shadow"),grayscale:en("grayscale"),hueRotate:en("hue-rotate"),invert:en("invert"),saturate:en("saturate"),sepia:en("sepia"),bgImage(e){return e==null||vb(e)||bb.has(e)?e:`url(${e})`},outline(e){const t=String(e)==="0"||String(e)==="none";return e!==null&&t?{outline:"2px solid transparent",outlineOffset:"2px"}:{outline:e}},flexDirection(e){var o;const{space:t,divide:n}=(o=K9[e])!=null?o:{},r={flexDirection:e};return t&&(r[t]=1),n&&(r[n]=1),r}},C={borderWidths:Bt("borderWidths"),borderStyles:Bt("borderStyles"),colors:Bt("colors"),borders:Bt("borders"),radii:Bt("radii",Z.px),space:Bt("space",us(Z.vh,Z.px)),spaceT:Bt("space",us(Z.vh,Z.px)),degreeT(e){return{property:e,transform:Z.degree}},prop(e,t,n){return{property:e,scale:t,...t&&{transform:si({scale:t,transform:n})}}},propT(e,t){return{property:e,transform:t}},sizes:Bt("sizes",us(Z.vh,Z.px)),sizesT:Bt("sizes",us(Z.vh,Z.fraction)),shadows:Bt("shadows"),logical:O9,blur:Bt("blur",Z.blur)},Rs={background:C.colors("background"),backgroundColor:C.colors("backgroundColor"),backgroundImage:C.propT("backgroundImage",Z.bgImage),backgroundSize:!0,backgroundPosition:!0,backgroundRepeat:!0,backgroundAttachment:!0,backgroundClip:{transform:Z.bgClip},bgSize:C.prop("backgroundSize"),bgPosition:C.prop("backgroundPosition"),bg:C.colors("background"),bgColor:C.colors("backgroundColor"),bgPos:C.prop("backgroundPosition"),bgRepeat:C.prop("backgroundRepeat"),bgAttachment:C.prop("backgroundAttachment"),bgGradient:C.propT("backgroundImage",Z.gradient),bgClip:{transform:Z.bgClip}};Object.assign(Rs,{bgImage:Rs.backgroundImage,bgImg:Rs.backgroundImage});var Q={border:C.borders("border"),borderWidth:C.borderWidths("borderWidth"),borderStyle:C.borderStyles("borderStyle"),borderColor:C.colors("borderColor"),borderRadius:C.radii("borderRadius"),borderTop:C.borders("borderTop"),borderBlockStart:C.borders("borderBlockStart"),borderTopLeftRadius:C.radii("borderTopLeftRadius"),borderStartStartRadius:C.logical({scale:"radii",property:{ltr:"borderTopLeftRadius",rtl:"borderTopRightRadius"}}),borderEndStartRadius:C.logical({scale:"radii",property:{ltr:"borderBottomLeftRadius",rtl:"borderBottomRightRadius"}}),borderTopRightRadius:C.radii("borderTopRightRadius"),borderStartEndRadius:C.logical({scale:"radii",property:{ltr:"borderTopRightRadius",rtl:"borderTopLeftRadius"}}),borderEndEndRadius:C.logical({scale:"radii",property:{ltr:"borderBottomRightRadius",rtl:"borderBottomLeftRadius"}}),borderRight:C.borders("borderRight"),borderInlineEnd:C.borders("borderInlineEnd"),borderBottom:C.borders("borderBottom"),borderBlockEnd:C.borders("borderBlockEnd"),borderBottomLeftRadius:C.radii("borderBottomLeftRadius"),borderBottomRightRadius:C.radii("borderBottomRightRadius"),borderLeft:C.borders("borderLeft"),borderInlineStart:{property:"borderInlineStart",scale:"borders"},borderInlineStartRadius:C.logical({scale:"radii",property:{ltr:["borderTopLeftRadius","borderBottomLeftRadius"],rtl:["borderTopRightRadius","borderBottomRightRadius"]}}),borderInlineEndRadius:C.logical({scale:"radii",property:{ltr:["borderTopRightRadius","borderBottomRightRadius"],rtl:["borderTopLeftRadius","borderBottomLeftRadius"]}}),borderX:C.borders(["borderLeft","borderRight"]),borderInline:C.borders("borderInline"),borderY:C.borders(["borderTop","borderBottom"]),borderBlock:C.borders("borderBlock"),borderTopWidth:C.borderWidths("borderTopWidth"),borderBlockStartWidth:C.borderWidths("borderBlockStartWidth"),borderTopColor:C.colors("borderTopColor"),borderBlockStartColor:C.colors("borderBlockStartColor"),borderTopStyle:C.borderStyles("borderTopStyle"),borderBlockStartStyle:C.borderStyles("borderBlockStartStyle"),borderBottomWidth:C.borderWidths("borderBottomWidth"),borderBlockEndWidth:C.borderWidths("borderBlockEndWidth"),borderBottomColor:C.colors("borderBottomColor"),borderBlockEndColor:C.colors("borderBlockEndColor"),borderBottomStyle:C.borderStyles("borderBottomStyle"),borderBlockEndStyle:C.borderStyles("borderBlockEndStyle"),borderLeftWidth:C.borderWidths("borderLeftWidth"),borderInlineStartWidth:C.borderWidths("borderInlineStartWidth"),borderLeftColor:C.colors("borderLeftColor"),borderInlineStartColor:C.colors("borderInlineStartColor"),borderLeftStyle:C.borderStyles("borderLeftStyle"),borderInlineStartStyle:C.borderStyles("borderInlineStartStyle"),borderRightWidth:C.borderWidths("borderRightWidth"),borderInlineEndWidth:C.borderWidths("borderInlineEndWidth"),borderRightColor:C.colors("borderRightColor"),borderInlineEndColor:C.colors("borderInlineEndColor"),borderRightStyle:C.borderStyles("borderRightStyle"),borderInlineEndStyle:C.borderStyles("borderInlineEndStyle"),borderTopRadius:C.radii(["borderTopLeftRadius","borderTopRightRadius"]),borderBottomRadius:C.radii(["borderBottomLeftRadius","borderBottomRightRadius"]),borderLeftRadius:C.radii(["borderTopLeftRadius","borderBottomLeftRadius"]),borderRightRadius:C.radii(["borderTopRightRadius","borderBottomRightRadius"])};Object.assign(Q,{rounded:Q.borderRadius,roundedTop:Q.borderTopRadius,roundedTopLeft:Q.borderTopLeftRadius,roundedTopRight:Q.borderTopRightRadius,roundedTopStart:Q.borderStartStartRadius,roundedTopEnd:Q.borderStartEndRadius,roundedBottom:Q.borderBottomRadius,roundedBottomLeft:Q.borderBottomLeftRadius,roundedBottomRight:Q.borderBottomRightRadius,roundedBottomStart:Q.borderEndStartRadius,roundedBottomEnd:Q.borderEndEndRadius,roundedLeft:Q.borderLeftRadius,roundedRight:Q.borderRightRadius,roundedStart:Q.borderInlineStartRadius,roundedEnd:Q.borderInlineEndRadius,borderStart:Q.borderInlineStart,borderEnd:Q.borderInlineEnd,borderTopStartRadius:Q.borderStartStartRadius,borderTopEndRadius:Q.borderStartEndRadius,borderBottomStartRadius:Q.borderEndStartRadius,borderBottomEndRadius:Q.borderEndEndRadius,borderStartRadius:Q.borderInlineStartRadius,borderEndRadius:Q.borderInlineEndRadius,borderStartWidth:Q.borderInlineStartWidth,borderEndWidth:Q.borderInlineEndWidth,borderStartColor:Q.borderInlineStartColor,borderEndColor:Q.borderInlineEndColor,borderStartStyle:Q.borderInlineStartStyle,borderEndStyle:Q.borderInlineEndStyle});var r6={color:C.colors("color"),textColor:C.colors("color"),fill:C.colors("fill"),stroke:C.colors("stroke")},Ld={boxShadow:C.shadows("boxShadow"),mixBlendMode:!0,blendMode:C.prop("mixBlendMode"),backgroundBlendMode:!0,bgBlendMode:C.prop("backgroundBlendMode"),opacity:!0};Object.assign(Ld,{shadow:Ld.boxShadow});var o6={filter:{transform:Z.filter},blur:C.blur("--chakra-blur"),brightness:C.propT("--chakra-brightness",Z.brightness),contrast:C.propT("--chakra-contrast",Z.contrast),hueRotate:C.degreeT("--chakra-hue-rotate"),invert:C.propT("--chakra-invert",Z.invert),saturate:C.propT("--chakra-saturate",Z.saturate),dropShadow:C.propT("--chakra-drop-shadow",Z.dropShadow),backdropFilter:{transform:Z.backdropFilter},backdropBlur:C.blur("--chakra-backdrop-blur"),backdropBrightness:C.propT("--chakra-backdrop-brightness",Z.brightness),backdropContrast:C.propT("--chakra-backdrop-contrast",Z.contrast),backdropHueRotate:C.degreeT("--chakra-backdrop-hue-rotate"),backdropInvert:C.propT("--chakra-backdrop-invert",Z.invert),backdropSaturate:C.propT("--chakra-backdrop-saturate",Z.saturate)},hl={alignItems:!0,alignContent:!0,justifyItems:!0,justifyContent:!0,flexWrap:!0,flexDirection:{transform:Z.flexDirection},experimental_spaceX:{static:Y9,transform:si({scale:"space",transform:e=>e!==null?{"--chakra-space-x":e}:null})},experimental_spaceY:{static:Z9,transform:si({scale:"space",transform:e=>e!=null?{"--chakra-space-y":e}:null})},flex:!0,flexFlow:!0,flexGrow:!0,flexShrink:!0,flexBasis:C.sizes("flexBasis"),justifySelf:!0,alignSelf:!0,order:!0,placeItems:!0,placeContent:!0,placeSelf:!0,gap:C.space("gap"),rowGap:C.space("rowGap"),columnGap:C.space("columnGap")};Object.assign(hl,{flexDir:hl.flexDirection});var wb={gridGap:C.space("gridGap"),gridColumnGap:C.space("gridColumnGap"),gridRowGap:C.space("gridRowGap"),gridColumn:!0,gridRow:!0,gridAutoFlow:!0,gridAutoColumns:!0,gridColumnStart:!0,gridColumnEnd:!0,gridRowStart:!0,gridRowEnd:!0,gridAutoRows:!0,gridTemplate:!0,gridTemplateColumns:!0,gridTemplateRows:!0,gridTemplateAreas:!0,gridArea:!0},a6={appearance:!0,cursor:!0,resize:!0,userSelect:!0,pointerEvents:!0,outline:{transform:Z.outline},outlineOffset:!0,outlineColor:C.colors("outlineColor")},qt={width:C.sizesT("width"),inlineSize:C.sizesT("inlineSize"),height:C.sizes("height"),blockSize:C.sizes("blockSize"),boxSize:C.sizes(["width","height"]),minWidth:C.sizes("minWidth"),minInlineSize:C.sizes("minInlineSize"),minHeight:C.sizes("minHeight"),minBlockSize:C.sizes("minBlockSize"),maxWidth:C.sizes("maxWidth"),maxInlineSize:C.sizes("maxInlineSize"),maxHeight:C.sizes("maxHeight"),maxBlockSize:C.sizes("maxBlockSize"),overflow:!0,overflowX:!0,overflowY:!0,overscrollBehavior:!0,overscrollBehaviorX:!0,overscrollBehaviorY:!0,display:!0,verticalAlign:!0,boxSizing:!0,boxDecorationBreak:!0,float:C.propT("float",Z.float),objectFit:!0,objectPosition:!0,visibility:!0,isolation:!0};Object.assign(qt,{w:qt.width,h:qt.height,minW:qt.minWidth,maxW:qt.maxWidth,minH:qt.minHeight,maxH:qt.maxHeight,overscroll:qt.overscrollBehavior,overscrollX:qt.overscrollBehaviorX,overscrollY:qt.overscrollBehaviorY});var i6={listStyleType:!0,listStylePosition:!0,listStylePos:C.prop("listStylePosition"),listStyleImage:!0,listStyleImg:C.prop("listStyleImage")};function s6(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}var l6=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},u6=l6(s6),c6={border:"0px",clip:"rect(0, 0, 0, 0)",width:"1px",height:"1px",margin:"-1px",padding:"0px",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},d6={position:"static",width:"auto",height:"auto",clip:"auto",padding:"0",margin:"0",overflow:"visible",whiteSpace:"normal"},pc=(e,t,n)=>{const r={},o=u6(e,t,{});for(const a in o)a in n&&n[a]!=null||(r[a]=o[a]);return r},f6={srOnly:{transform(e){return e===!0?c6:e==="focusable"?d6:{}}},layerStyle:{processResult:!0,transform:(e,t,n)=>pc(t,`layerStyles.${e}`,n)},textStyle:{processResult:!0,transform:(e,t,n)=>pc(t,`textStyles.${e}`,n)},apply:{processResult:!0,transform:(e,t,n)=>pc(t,e,n)}},qa={position:!0,pos:C.prop("position"),zIndex:C.prop("zIndex","zIndices"),inset:C.spaceT("inset"),insetX:C.spaceT(["left","right"]),insetInline:C.spaceT("insetInline"),insetY:C.spaceT(["top","bottom"]),insetBlock:C.spaceT("insetBlock"),top:C.spaceT("top"),insetBlockStart:C.spaceT("insetBlockStart"),bottom:C.spaceT("bottom"),insetBlockEnd:C.spaceT("insetBlockEnd"),left:C.spaceT("left"),insetInlineStart:C.logical({scale:"space",property:{ltr:"left",rtl:"right"}}),right:C.spaceT("right"),insetInlineEnd:C.logical({scale:"space",property:{ltr:"right",rtl:"left"}})};Object.assign(qa,{insetStart:qa.insetInlineStart,insetEnd:qa.insetInlineEnd});var p6={ring:{transform:Z.ring},ringColor:C.colors("--chakra-ring-color"),ringOffset:C.prop("--chakra-ring-offset-width"),ringOffsetColor:C.colors("--chakra-ring-offset-color"),ringInset:C.prop("--chakra-ring-inset")},me={margin:C.spaceT("margin"),marginTop:C.spaceT("marginTop"),marginBlockStart:C.spaceT("marginBlockStart"),marginRight:C.spaceT("marginRight"),marginInlineEnd:C.spaceT("marginInlineEnd"),marginBottom:C.spaceT("marginBottom"),marginBlockEnd:C.spaceT("marginBlockEnd"),marginLeft:C.spaceT("marginLeft"),marginInlineStart:C.spaceT("marginInlineStart"),marginX:C.spaceT(["marginInlineStart","marginInlineEnd"]),marginInline:C.spaceT("marginInline"),marginY:C.spaceT(["marginTop","marginBottom"]),marginBlock:C.spaceT("marginBlock"),padding:C.space("padding"),paddingTop:C.space("paddingTop"),paddingBlockStart:C.space("paddingBlockStart"),paddingRight:C.space("paddingRight"),paddingBottom:C.space("paddingBottom"),paddingBlockEnd:C.space("paddingBlockEnd"),paddingLeft:C.space("paddingLeft"),paddingInlineStart:C.space("paddingInlineStart"),paddingInlineEnd:C.space("paddingInlineEnd"),paddingX:C.space(["paddingInlineStart","paddingInlineEnd"]),paddingInline:C.space("paddingInline"),paddingY:C.space(["paddingTop","paddingBottom"]),paddingBlock:C.space("paddingBlock")};Object.assign(me,{m:me.margin,mt:me.marginTop,mr:me.marginRight,me:me.marginInlineEnd,marginEnd:me.marginInlineEnd,mb:me.marginBottom,ml:me.marginLeft,ms:me.marginInlineStart,marginStart:me.marginInlineStart,mx:me.marginX,my:me.marginY,p:me.padding,pt:me.paddingTop,py:me.paddingY,px:me.paddingX,pb:me.paddingBottom,pl:me.paddingLeft,ps:me.paddingInlineStart,paddingStart:me.paddingInlineStart,pr:me.paddingRight,pe:me.paddingInlineEnd,paddingEnd:me.paddingInlineEnd});var m6={textDecorationColor:C.colors("textDecorationColor"),textDecoration:!0,textDecor:{property:"textDecoration"},textDecorationLine:!0,textDecorationStyle:!0,textDecorationThickness:!0,textUnderlineOffset:!0,textShadow:C.shadows("textShadow")},h6={clipPath:!0,transform:C.propT("transform",Z.transform),transformOrigin:!0,translateX:C.spaceT("--chakra-translate-x"),translateY:C.spaceT("--chakra-translate-y"),skewX:C.degreeT("--chakra-skew-x"),skewY:C.degreeT("--chakra-skew-y"),scaleX:C.prop("--chakra-scale-x"),scaleY:C.prop("--chakra-scale-y"),scale:C.prop(["--chakra-scale-x","--chakra-scale-y"]),rotate:C.degreeT("--chakra-rotate")},g6={transition:!0,transitionDelay:!0,animation:!0,willChange:!0,transitionDuration:C.prop("transitionDuration","transition.duration"),transitionProperty:C.prop("transitionProperty","transition.property"),transitionTimingFunction:C.prop("transitionTimingFunction","transition.easing")},y6={fontFamily:C.prop("fontFamily","fonts"),fontSize:C.prop("fontSize","fontSizes",Z.px),fontWeight:C.prop("fontWeight","fontWeights"),lineHeight:C.prop("lineHeight","lineHeights"),letterSpacing:C.prop("letterSpacing","letterSpacings"),textAlign:!0,fontStyle:!0,textIndent:!0,wordBreak:!0,overflowWrap:!0,textOverflow:!0,textTransform:!0,whiteSpace:!0,noOfLines:{static:{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:"var(--chakra-line-clamp)"},property:"--chakra-line-clamp"}},b6={scrollBehavior:!0,scrollSnapAlign:!0,scrollSnapStop:!0,scrollSnapType:!0,scrollMargin:C.spaceT("scrollMargin"),scrollMarginTop:C.spaceT("scrollMarginTop"),scrollMarginBottom:C.spaceT("scrollMarginBottom"),scrollMarginLeft:C.spaceT("scrollMarginLeft"),scrollMarginRight:C.spaceT("scrollMarginRight"),scrollMarginX:C.spaceT(["scrollMarginLeft","scrollMarginRight"]),scrollMarginY:C.spaceT(["scrollMarginTop","scrollMarginBottom"]),scrollPadding:C.spaceT("scrollPadding"),scrollPaddingTop:C.spaceT("scrollPaddingTop"),scrollPaddingBottom:C.spaceT("scrollPaddingBottom"),scrollPaddingLeft:C.spaceT("scrollPaddingLeft"),scrollPaddingRight:C.spaceT("scrollPaddingRight"),scrollPaddingX:C.spaceT(["scrollPaddingLeft","scrollPaddingRight"]),scrollPaddingY:C.spaceT(["scrollPaddingTop","scrollPaddingBottom"])};function Sb(e){return Yt(e)&&e.reference?e.reference:String(e)}var Ql=(e,...t)=>t.map(Sb).join(` ${e} `).replace(/calc/g,""),W0=(...e)=>`calc(${Ql("+",...e)})`,H0=(...e)=>`calc(${Ql("-",...e)})`,jd=(...e)=>`calc(${Ql("*",...e)})`,U0=(...e)=>`calc(${Ql("/",...e)})`,G0=e=>{const t=Sb(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:jd(t,-1)},kr=Object.assign(e=>({add:(...t)=>kr(W0(e,...t)),subtract:(...t)=>kr(H0(e,...t)),multiply:(...t)=>kr(jd(e,...t)),divide:(...t)=>kr(U0(e,...t)),negate:()=>kr(G0(e)),toString:()=>e.toString()}),{add:W0,subtract:H0,multiply:jd,divide:U0,negate:G0});function v6(e,t="-"){return e.replace(/\s+/g,t)}function w6(e){const t=v6(e.toString());return x6(S6(t))}function S6(e){return e.includes("\\.")?e:!Number.isInteger(parseFloat(e.toString()))?e.replace(".","\\."):e}function x6(e){return e.replace(/[!-,/:-@[-^`{-~]/g,"\\$&")}function C6(e,t=""){return[t,e].filter(Boolean).join("-")}function k6(e,t){return`var(${e}${t?`, ${t}`:""})`}function _6(e,t=""){return w6(`--${C6(e,t)}`)}function ie(e,t,n){const r=_6(e,n);return{variable:r,reference:k6(r,t)}}function T6(e){const t=e==null?0:e.length;return t?e[t-1]:void 0}function F6(e){const t=parseFloat(e.toString()),n=e.toString().replace(String(t),"");return{unitless:!n,value:t,unit:n}}function Nd(e){if(e==null)return e;const{unitless:t}=F6(e);return t||typeof e=="number"?`${e}px`:e}var xb=(e,t)=>parseInt(e[1],10)>parseInt(t[1],10)?1:-1,mp=e=>Object.fromEntries(Object.entries(e).sort(xb));function K0(e){const t=mp(e);return Object.assign(Object.values(t),t)}function E6(e){const t=Object.keys(mp(e));return new Set(t)}function Y0(e){var n;if(!e)return e;e=(n=Nd(e))!=null?n:e;const t=e.endsWith("px")?-1:-.0625;return typeof e=="number"?`${e+t}`:e.replace(/(\d+\.?\d*)/u,r=>`${parseFloat(r)+t}`)}function va(e,t){const n=["@media screen"];return e&&n.push("and",`(min-width: ${Nd(e)})`),t&&n.push("and",`(max-width: ${Nd(t)})`),n.join(" ")}function A6(e){var a;if(!e)return null;e.base=(a=e.base)!=null?a:"0px";const t=K0(e),n=Object.entries(e).sort(xb).map(([i,s],l,u)=>{var d;let[,c]=(d=u[l+1])!=null?d:[];return c=parseFloat(c)>0?Y0(c):void 0,{_minW:Y0(s),breakpoint:i,minW:s,maxW:c,maxWQuery:va(null,c),minWQuery:va(s),minMaxQuery:va(s,c)}}),r=E6(e),o=Array.from(r.values());return{keys:r,normalized:t,isResponsive(i){const s=Object.keys(i);return s.length>0&&s.every(l=>r.has(l))},asObject:mp(e),asArray:K0(e),details:n,media:[null,...t.map(i=>va(i)).slice(1)],toArrayValue(i){if(!Yt(i))throw new Error("toArrayValue: value must be an object");const s=o.map(l=>{var u;return(u=i[l])!=null?u:null});for(;T6(s)===null;)s.pop();return s},toObjectValue(i){if(!Array.isArray(i))throw new Error("toObjectValue: value must be an array");return i.reduce((s,l,u)=>{const c=o[u];return c!=null&&l!=null&&(s[c]=l),s},{})}}}var Oe={hover:(e,t)=>`${e}:hover ${t}, ${e}[data-hover] ${t}`,focus:(e,t)=>`${e}:focus ${t}, ${e}[data-focus] ${t}`,focusVisible:(e,t)=>`${e}:focus-visible ${t}`,focusWithin:(e,t)=>`${e}:focus-within ${t}`,active:(e,t)=>`${e}:active ${t}, ${e}[data-active] ${t}`,disabled:(e,t)=>`${e}:disabled ${t}, ${e}[data-disabled] ${t}`,invalid:(e,t)=>`${e}:invalid ${t}, ${e}[data-invalid] ${t}`,checked:(e,t)=>`${e}:checked ${t}, ${e}[data-checked] ${t}`,indeterminate:(e,t)=>`${e}:indeterminate ${t}, ${e}[aria-checked=mixed] ${t}, ${e}[data-indeterminate] ${t}`,readOnly:(e,t)=>`${e}:read-only ${t}, ${e}[readonly] ${t}, ${e}[data-read-only] ${t}`,expanded:(e,t)=>`${e}:read-only ${t}, ${e}[aria-expanded=true] ${t}, ${e}[data-expanded] ${t}`,placeholderShown:(e,t)=>`${e}:placeholder-shown ${t}`},Nn=e=>Cb(t=>e(t,"&"),"[role=group]","[data-group]",".group"),wn=e=>Cb(t=>e(t,"~ &"),"[data-peer]",".peer"),Cb=(e,...t)=>t.map(e).join(", "),Jl={_hover:"&:hover, &[data-hover]",_active:"&:active, &[data-active]",_focus:"&:focus, &[data-focus]",_highlighted:"&[data-highlighted]",_focusWithin:"&:focus-within",_focusVisible:"&:focus-visible, &[data-focus-visible]",_disabled:"&:disabled, &[disabled], &[aria-disabled=true], &[data-disabled]",_readOnly:"&[aria-readonly=true], &[readonly], &[data-readonly]",_before:"&::before",_after:"&::after",_empty:"&:empty",_expanded:"&[aria-expanded=true], &[data-expanded]",_checked:"&[aria-checked=true], &[data-checked]",_grabbed:"&[aria-grabbed=true], &[data-grabbed]",_pressed:"&[aria-pressed=true], &[data-pressed]",_invalid:"&[aria-invalid=true], &[data-invalid]",_valid:"&[data-valid], &[data-state=valid]",_loading:"&[data-loading], &[aria-busy=true]",_selected:"&[aria-selected=true], &[data-selected]",_hidden:"&[hidden], &[data-hidden]",_autofill:"&:-webkit-autofill",_even:"&:nth-of-type(even)",_odd:"&:nth-of-type(odd)",_first:"&:first-of-type",_last:"&:last-of-type",_notFirst:"&:not(:first-of-type)",_notLast:"&:not(:last-of-type)",_visited:"&:visited",_activeLink:"&[aria-current=page]",_activeStep:"&[aria-current=step]",_indeterminate:"&:indeterminate, &[aria-checked=mixed], &[data-indeterminate]",_groupHover:Nn(Oe.hover),_peerHover:wn(Oe.hover),_groupFocus:Nn(Oe.focus),_peerFocus:wn(Oe.focus),_groupFocusVisible:Nn(Oe.focusVisible),_peerFocusVisible:wn(Oe.focusVisible),_groupActive:Nn(Oe.active),_peerActive:wn(Oe.active),_groupDisabled:Nn(Oe.disabled),_peerDisabled:wn(Oe.disabled),_groupInvalid:Nn(Oe.invalid),_peerInvalid:wn(Oe.invalid),_groupChecked:Nn(Oe.checked),_peerChecked:wn(Oe.checked),_groupFocusWithin:Nn(Oe.focusWithin),_peerFocusWithin:wn(Oe.focusWithin),_peerPlaceholderShown:wn(Oe.placeholderShown),_placeholder:"&::placeholder",_placeholderShown:"&:placeholder-shown",_fullScreen:"&:fullscreen",_selection:"&::selection",_rtl:"[dir=rtl] &, &[dir=rtl]",_ltr:"[dir=ltr] &, &[dir=ltr]",_mediaDark:"@media (prefers-color-scheme: dark)",_mediaReduceMotion:"@media (prefers-reduced-motion: reduce)",_dark:".chakra-ui-dark &:not([data-theme]),[data-theme=dark] &:not([data-theme]),&[data-theme=dark]",_light:".chakra-ui-light &:not([data-theme]),[data-theme=light] &:not([data-theme]),&[data-theme=light]"},P6=Object.keys(Jl);function Z0(e,t){return ie(String(e).replace(/\./g,"-"),void 0,t)}function q6(e,t){let n={};const r={};for(const[o,a]of Object.entries(e)){const{isSemantic:i,value:s}=a,{variable:l,reference:u}=Z0(o,t==null?void 0:t.cssVarPrefix);if(!i){if(o.startsWith("space")){const f=o.split("."),[p,...y]=f,v=`${p}.-${y.join(".")}`,k=kr.negate(s),g=kr.negate(u);r[v]={value:k,var:l,varRef:g}}n[l]=s,r[o]={value:s,var:l,varRef:u};continue}const c=f=>{const y=[String(o).split(".")[0],f].join(".");if(!e[y])return f;const{reference:k}=Z0(y,t==null?void 0:t.cssVarPrefix);return k},d=Yt(s)?s:{default:s};n=ln(n,Object.entries(d).reduce((f,[p,y])=>{var m;var v;const k=c(y);if(p==="default")return f[l]=k,f;const g=(m=(v=Jl)==null?void 0:v[p])!=null?m:p;return f[g]={[l]:k},f},{})),r[o]={value:u,var:l,varRef:u}}return{cssVars:n,cssMap:r}}function I6(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function R6(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}var z6=["colors","borders","borderWidths","borderStyles","fonts","fontSizes","fontWeights","letterSpacings","lineHeights","radii","space","shadows","sizes","zIndices","transition","blur"];function M6(e){return R6(e,z6)}function V6(e){return e.semanticTokens}function L6(e){const{__cssMap:t,__cssVars:n,__breakpoints:r,...o}=e;return o}function j6({tokens:e,semanticTokens:t}){var o,a;const n=Object.entries((o=Bd(e))!=null?o:{}).map(([i,s])=>[i,{isSemantic:!1,value:s}]),r=Object.entries((a=Bd(t,1))!=null?a:{}).map(([i,s])=>[i,{isSemantic:!0,value:s}]);return Object.fromEntries([...n,...r])}function Bd(e,t=1/0){return!Yt(e)&&!Array.isArray(e)||!t?e:Object.entries(e).reduce((n,[r,o])=>(Yt(o)||Array.isArray(o)?Object.entries(Bd(o,t-1)).forEach(([a,i])=>{n[`${r}.${a}`]=i}):n[r]=o,n),{})}function N6(e){var t;const n=L6(e),r=M6(n),o=V6(n),a=j6({tokens:r,semanticTokens:o}),i=(t=n.config)==null?void 0:t.cssVarPrefix,{cssMap:s,cssVars:l}=q6(a,{cssVarPrefix:i});return Object.assign(n,{__cssVars:{...{"--chakra-ring-inset":"var(--chakra-empty,/*!*/ /*!*/)","--chakra-ring-offset-width":"0px","--chakra-ring-offset-color":"#fff","--chakra-ring-color":"rgba(66, 153, 225, 0.6)","--chakra-ring-offset-shadow":"0 0 #0000","--chakra-ring-shadow":"0 0 #0000","--chakra-space-x-reverse":"0","--chakra-space-y-reverse":"0"},...l},__cssMap:s,__breakpoints:A6(n.breakpoints)}),n}var hp=ln({},Rs,Q,r6,hl,qt,o6,p6,a6,wb,f6,qa,Ld,me,b6,y6,m6,h6,i6,g6);Object.assign({},me,qt,hl,wb,qa);var B6=[...Object.keys(hp),...P6],D6={...hp,...Jl},O6=e=>e in D6,$6=e=>t=>{if(!t.__breakpoints)return e;const{isResponsive:n,toArrayValue:r,media:o}=t.__breakpoints,a={};for(const i in e){let s=Ar(e[i],t);if(s==null)continue;if(s=Yt(s)&&n(s)?r(s):s,!Array.isArray(s)){a[i]=s;continue}const l=s.slice(0,o.length).length;for(let u=0;u<l;u+=1){const c=o==null?void 0:o[u];if(!c){a[i]=s[u];continue}a[c]=a[c]||{},s[u]!=null&&(a[c][i]=s[u])}}return a};function W6(e){const t=[];let n="",r=!1;for(let o=0;o<e.length;o++){const a=e[o];a==="("?(r=!0,n+=a):a===")"?(r=!1,n+=a):a===","&&!r?(t.push(n),n=""):n+=a}return n=n.trim(),n&&t.push(n),t}function H6(e){return/^var\(--.+\)$/.test(e)}var U6=(e,t)=>e.startsWith("--")&&typeof t=="string"&&!H6(t),G6=(e,t)=>{var i,s;if(t==null)return t;const n=l=>{var u,c;return(c=(u=e.__cssMap)==null?void 0:u[l])==null?void 0:c.varRef},r=l=>{var u;return(u=n(l))!=null?u:l},[o,a]=W6(t);return t=(s=(i=n(o))!=null?i:r(a))!=null?s:r(t),t};function K6(e){const{configs:t={},pseudos:n={},theme:r}=e,o=(a,i=!1)=>{var d,f;var s;const l=Ar(a,r),u=$6(l)(r);let c={};for(let p in u){const y=u[p];let v=Ar(y,r);p in n&&(p=n[p]),U6(p,v)&&(v=G6(r,v));let k=t[p];if(k===!0&&(k={property:p}),Yt(v)){c[p]=(d=c[p])!=null?d:{},c[p]=ln({},c[p],o(v,!0));continue}let g=(f=(s=k==null?void 0:k.transform)==null?void 0:s.call(k,v,r,l))!=null?f:v;g=k!=null&&k.processResult?o(g,!0):g;const m=Ar(k==null?void 0:k.property,r);if(!i&&(k==null?void 0:k.static)){const h=Ar(k.static,r);c=ln({},c,h)}if(m&&Array.isArray(m)){for(const h of m)c[h]=g;continue}if(m){m==="&"&&Yt(g)?c=ln({},c,g):c[m]=g;continue}if(Yt(g)){c=ln({},c,g);continue}c[p]=g}return c};return o}var kb=e=>t=>K6({theme:t,pseudos:Jl,configs:hp})(e);function ge(e){return{definePartsStyle(t){return t},defineMultiStyleConfig(t){return{parts:e,...t}}}}function Y6(e,t){if(Array.isArray(e))return e;if(Yt(e))return t(e);if(e!=null)return[e]}function Z6(e,t){for(let n=t+1;n<e.length;n++)if(e[n]!=null)return n;return-1}function X6(e){const t=e.__breakpoints;return function(r,o,a,i){var s,l;if(!t)return;const u={},c=Y6(a,t.toArrayValue);if(!c)return u;const d=c.length,f=d===1,p=!!r.parts;for(let y=0;y<d;y++){const v=t.details[y],k=t.details[Z6(c,y)],g=va(v.minW,k==null?void 0:k._minW),m=Ar((s=r[o])==null?void 0:s[c[y]],i);if(!!m){if(p){(l=r.parts)==null||l.forEach(h=>{ln(u,{[h]:f?m[h]:{[g]:m[h]}})});continue}if(!p){f?ln(u,m):u[g]=m;continue}u[g]=m}}return u}}function Q6(e){return t=>{var i;const{variant:n,size:r,theme:o}=t,a=X6(o);return ln({},Ar((i=e.baseStyle)!=null?i:{},t),a(e,"sizes",r,t),a(e,"variants",n,t))}}function Ie(e){return I6(e,["styleConfig","size","variant","colorScheme"])}function J6(e){if(e.sheet)return e.sheet;for(var t=0;t<document.styleSheets.length;t++)if(document.styleSheets[t].ownerNode===e)return document.styleSheets[t]}function e4(e){var t=document.createElement("style");return t.setAttribute("data-emotion",e.key),e.nonce!==void 0&&t.setAttribute("nonce",e.nonce),t.appendChild(document.createTextNode("")),t.setAttribute("data-s",""),t}var t4=function(){function e(n){var r=this;this._insertTag=function(o){var a;r.tags.length===0?r.insertionPoint?a=r.insertionPoint.nextSibling:r.prepend?a=r.container.firstChild:a=r.before:a=r.tags[r.tags.length-1].nextSibling,r.container.insertBefore(o,a),r.tags.push(o)},this.isSpeedy=n.speedy===void 0?!0:n.speedy,this.tags=[],this.ctr=0,this.nonce=n.nonce,this.key=n.key,this.container=n.container,this.prepend=n.prepend,this.insertionPoint=n.insertionPoint,this.before=null}var t=e.prototype;return t.hydrate=function(r){r.forEach(this._insertTag)},t.insert=function(r){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(e4(this));var o=this.tags[this.tags.length-1];if(this.isSpeedy){var a=J6(o);try{a.insertRule(r,a.cssRules.length)}catch{}}else o.appendChild(document.createTextNode(r));this.ctr++},t.flush=function(){this.tags.forEach(function(r){return r.parentNode&&r.parentNode.removeChild(r)}),this.tags=[],this.ctr=0},e}(),Ze="-ms-",gl="-moz-",J="-webkit-",_b="comm",gp="rule",yp="decl",n4="@import",Tb="@keyframes",r4=Math.abs,eu=String.fromCharCode,o4=Object.assign;function a4(e,t){return We(e,0)^45?(((t<<2^We(e,0))<<2^We(e,1))<<2^We(e,2))<<2^We(e,3):0}function Fb(e){return e.trim()}function i4(e,t){return(e=t.exec(e))?e[0]:e}function te(e,t,n){return e.replace(t,n)}function Dd(e,t){return e.indexOf(t)}function We(e,t){return e.charCodeAt(t)|0}function li(e,t,n){return e.slice(t,n)}function on(e){return e.length}function bp(e){return e.length}function cs(e,t){return t.push(e),e}function s4(e,t){return e.map(t).join("")}var tu=1,Bo=1,Eb=0,ht=0,Pe=0,Go="";function nu(e,t,n,r,o,a,i){return{value:e,root:t,parent:n,type:r,props:o,children:a,line:tu,column:Bo,length:i,return:""}}function ca(e,t){return o4(nu("",null,null,"",null,null,0),e,{length:-e.length},t)}function l4(){return Pe}function u4(){return Pe=ht>0?We(Go,--ht):0,Bo--,Pe===10&&(Bo=1,tu--),Pe}function xt(){return Pe=ht<Eb?We(Go,ht++):0,Bo++,Pe===10&&(Bo=1,tu++),Pe}function fn(){return We(Go,ht)}function zs(){return ht}function Fi(e,t){return li(Go,e,t)}function ui(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function Ab(e){return tu=Bo=1,Eb=on(Go=e),ht=0,[]}function Pb(e){return Go="",e}function Ms(e){return Fb(Fi(ht-1,Od(e===91?e+2:e===40?e+1:e)))}function c4(e){for(;(Pe=fn())&&Pe<33;)xt();return ui(e)>2||ui(Pe)>3?"":" "}function d4(e,t){for(;--t&&xt()&&!(Pe<48||Pe>102||Pe>57&&Pe<65||Pe>70&&Pe<97););return Fi(e,zs()+(t<6&&fn()==32&&xt()==32))}function Od(e){for(;xt();)switch(Pe){case e:return ht;case 34:case 39:e!==34&&e!==39&&Od(Pe);break;case 40:e===41&&Od(e);break;case 92:xt();break}return ht}function f4(e,t){for(;xt()&&e+Pe!==47+10;)if(e+Pe===42+42&&fn()===47)break;return"/*"+Fi(t,ht-1)+"*"+eu(e===47?e:xt())}function p4(e){for(;!ui(fn());)xt();return Fi(e,ht)}function m4(e){return Pb(Vs("",null,null,null,[""],e=Ab(e),0,[0],e))}function Vs(e,t,n,r,o,a,i,s,l){for(var u=0,c=0,d=i,f=0,p=0,y=0,v=1,k=1,g=1,m=0,h="",S=o,T=a,A=r,E=h;k;)switch(y=m,m=xt()){case 40:if(y!=108&&We(E,d-1)==58){Dd(E+=te(Ms(m),"&","&\f"),"&\f")!=-1&&(g=-1);break}case 34:case 39:case 91:E+=Ms(m);break;case 9:case 10:case 13:case 32:E+=c4(y);break;case 92:E+=d4(zs()-1,7);continue;case 47:switch(fn()){case 42:case 47:cs(h4(f4(xt(),zs()),t,n),l);break;default:E+="/"}break;case 123*v:s[u++]=on(E)*g;case 125*v:case 59:case 0:switch(m){case 0:case 125:k=0;case 59+c:p>0&&on(E)-d&&cs(p>32?Q0(E+";",r,n,d-1):Q0(te(E," ","")+";",r,n,d-2),l);break;case 59:E+=";";default:if(cs(A=X0(E,t,n,u,c,o,s,h,S=[],T=[],d),a),m===123)if(c===0)Vs(E,t,A,A,S,a,d,s,T);else switch(f===99&&We(E,3)===110?100:f){case 100:case 109:case 115:Vs(e,A,A,r&&cs(X0(e,A,A,0,0,o,s,h,o,S=[],d),T),o,T,d,s,r?S:T);break;default:Vs(E,A,A,A,[""],T,0,s,T)}}u=c=p=0,v=g=1,h=E="",d=i;break;case 58:d=1+on(E),p=y;default:if(v<1){if(m==123)--v;else if(m==125&&v++==0&&u4()==125)continue}switch(E+=eu(m),m*v){case 38:g=c>0?1:(E+="\f",-1);break;case 44:s[u++]=(on(E)-1)*g,g=1;break;case 64:fn()===45&&(E+=Ms(xt())),f=fn(),c=d=on(h=E+=p4(zs())),m++;break;case 45:y===45&&on(E)==2&&(v=0)}}return a}function X0(e,t,n,r,o,a,i,s,l,u,c){for(var d=o-1,f=o===0?a:[""],p=bp(f),y=0,v=0,k=0;y<r;++y)for(var g=0,m=li(e,d+1,d=r4(v=i[y])),h=e;g<p;++g)(h=Fb(v>0?f[g]+" "+m:te(m,/&\f/g,f[g])))&&(l[k++]=h);return nu(e,t,n,o===0?gp:s,l,u,c)}function h4(e,t,n){return nu(e,t,n,_b,eu(l4()),li(e,2,-2),0)}function Q0(e,t,n,r){return nu(e,t,n,yp,li(e,0,r),li(e,r+1,-1),r)}function ko(e,t){for(var n="",r=bp(e),o=0;o<r;o++)n+=t(e[o],o,e,t)||"";return n}function g4(e,t,n,r){switch(e.type){case n4:case yp:return e.return=e.return||e.value;case _b:return"";case Tb:return e.return=e.value+"{"+ko(e.children,r)+"}";case gp:e.value=e.props.join(",")}return on(n=ko(e.children,r))?e.return=e.value+"{"+n+"}":""}function y4(e){var t=bp(e);return function(n,r,o,a){for(var i="",s=0;s<t;s++)i+=e[s](n,r,o,a)||"";return i}}function b4(e){return function(t){t.root||(t=t.return)&&e(t)}}var J0=function(t){var n=new WeakMap;return function(r){if(n.has(r))return n.get(r);var o=t(r);return n.set(r,o),o}};function qb(e){var t=Object.create(null);return function(n){return t[n]===void 0&&(t[n]=e(n)),t[n]}}var v4=function(t,n,r){for(var o=0,a=0;o=a,a=fn(),o===38&&a===12&&(n[r]=1),!ui(a);)xt();return Fi(t,ht)},w4=function(t,n){var r=-1,o=44;do switch(ui(o)){case 0:o===38&&fn()===12&&(n[r]=1),t[r]+=v4(ht-1,n,r);break;case 2:t[r]+=Ms(o);break;case 4:if(o===44){t[++r]=fn()===58?"&\f":"",n[r]=t[r].length;break}default:t[r]+=eu(o)}while(o=xt());return t},S4=function(t,n){return Pb(w4(Ab(t),n))},eh=new WeakMap,x4=function(t){if(!(t.type!=="rule"||!t.parent||t.length<1)){for(var n=t.value,r=t.parent,o=t.column===r.column&&t.line===r.line;r.type!=="rule";)if(r=r.parent,!r)return;if(!(t.props.length===1&&n.charCodeAt(0)!==58&&!eh.get(r))&&!o){eh.set(t,!0);for(var a=[],i=S4(n,a),s=r.props,l=0,u=0;l<i.length;l++)for(var c=0;c<s.length;c++,u++)t.props[u]=a[l]?i[l].replace(/&\f/g,s[c]):s[c]+" "+i[l]}}},C4=function(t){if(t.type==="decl"){var n=t.value;n.charCodeAt(0)===108&&n.charCodeAt(2)===98&&(t.return="",t.value="")}};function Ib(e,t){switch(a4(e,t)){case 5103:return J+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return J+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return J+e+gl+e+Ze+e+e;case 6828:case 4268:return J+e+Ze+e+e;case 6165:return J+e+Ze+"flex-"+e+e;case 5187:return J+e+te(e,/(\w+).+(:[^]+)/,J+"box-$1$2"+Ze+"flex-$1$2")+e;case 5443:return J+e+Ze+"flex-item-"+te(e,/flex-|-self/,"")+e;case 4675:return J+e+Ze+"flex-line-pack"+te(e,/align-content|flex-|-self/,"")+e;case 5548:return J+e+Ze+te(e,"shrink","negative")+e;case 5292:return J+e+Ze+te(e,"basis","preferred-size")+e;case 6060:return J+"box-"+te(e,"-grow","")+J+e+Ze+te(e,"grow","positive")+e;case 4554:return J+te(e,/([^-])(transform)/g,"$1"+J+"$2")+e;case 6187:return te(te(te(e,/(zoom-|grab)/,J+"$1"),/(image-set)/,J+"$1"),e,"")+e;case 5495:case 3959:return te(e,/(image-set\([^]*)/,J+"$1$`$1");case 4968:return te(te(e,/(.+:)(flex-)?(.*)/,J+"box-pack:$3"+Ze+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+J+e+e;case 4095:case 3583:case 4068:case 2532:return te(e,/(.+)-inline(.+)/,J+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(on(e)-1-t>6)switch(We(e,t+1)){case 109:if(We(e,t+4)!==45)break;case 102:return te(e,/(.+:)(.+)-([^]+)/,"$1"+J+"$2-$3$1"+gl+(We(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~Dd(e,"stretch")?Ib(te(e,"stretch","fill-available"),t)+e:e}break;case 4949:if(We(e,t+1)!==115)break;case 6444:switch(We(e,on(e)-3-(~Dd(e,"!important")&&10))){case 107:return te(e,":",":"+J)+e;case 101:return te(e,/(.+:)([^;!]+)(;|!.+)?/,"$1"+J+(We(e,14)===45?"inline-":"")+"box$3$1"+J+"$2$3$1"+Ze+"$2box$3")+e}break;case 5936:switch(We(e,t+11)){case 114:return J+e+Ze+te(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return J+e+Ze+te(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return J+e+Ze+te(e,/[svh]\w+-[tblr]{2}/,"lr")+e}return J+e+Ze+e+e}return e}var k4=function(t,n,r,o){if(t.length>-1&&!t.return)switch(t.type){case yp:t.return=Ib(t.value,t.length);break;case Tb:return ko([ca(t,{value:te(t.value,"@","@"+J)})],o);case gp:if(t.length)return s4(t.props,function(a){switch(i4(a,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return ko([ca(t,{props:[te(a,/:(read-\w+)/,":"+gl+"$1")]})],o);case"::placeholder":return ko([ca(t,{props:[te(a,/:(plac\w+)/,":"+J+"input-$1")]}),ca(t,{props:[te(a,/:(plac\w+)/,":"+gl+"$1")]}),ca(t,{props:[te(a,/:(plac\w+)/,Ze+"input-$1")]})],o)}return""})}},_4=[k4],T4=function(t){var n=t.key;if(n==="css"){var r=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(r,function(v){var k=v.getAttribute("data-emotion");k.indexOf(" ")!==-1&&(document.head.appendChild(v),v.setAttribute("data-s",""))})}var o=t.stylisPlugins||_4,a={},i,s=[];i=t.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+n+' "]'),function(v){for(var k=v.getAttribute("data-emotion").split(" "),g=1;g<k.length;g++)a[k[g]]=!0;s.push(v)});var l,u=[x4,C4];{var c,d=[g4,b4(function(v){c.insert(v)})],f=y4(u.concat(o,d)),p=function(k){return ko(m4(k),f)};l=function(k,g,m,h){c=m,p(k?k+"{"+g.styles+"}":g.styles),h&&(y.inserted[g.name]=!0)}}var y={key:n,sheet:new t4({key:n,container:i,nonce:t.nonce,speedy:t.speedy,prepend:t.prepend,insertionPoint:t.insertionPoint}),nonce:t.nonce,inserted:a,registered:{},insert:l};return y.sheet.hydrate(s),y};function yl(){return yl=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yl.apply(this,arguments)}var Rb={exports:{}},ae={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Be=typeof Symbol=="function"&&Symbol.for,vp=Be?Symbol.for("react.element"):60103,wp=Be?Symbol.for("react.portal"):60106,ru=Be?Symbol.for("react.fragment"):60107,ou=Be?Symbol.for("react.strict_mode"):60108,au=Be?Symbol.for("react.profiler"):60114,iu=Be?Symbol.for("react.provider"):60109,su=Be?Symbol.for("react.context"):60110,Sp=Be?Symbol.for("react.async_mode"):60111,lu=Be?Symbol.for("react.concurrent_mode"):60111,uu=Be?Symbol.for("react.forward_ref"):60112,cu=Be?Symbol.for("react.suspense"):60113,F4=Be?Symbol.for("react.suspense_list"):60120,du=Be?Symbol.for("react.memo"):60115,fu=Be?Symbol.for("react.lazy"):60116,E4=Be?Symbol.for("react.block"):60121,A4=Be?Symbol.for("react.fundamental"):60117,P4=Be?Symbol.for("react.responder"):60118,q4=Be?Symbol.for("react.scope"):60119;function Et(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case vp:switch(e=e.type,e){case Sp:case lu:case ru:case au:case ou:case cu:return e;default:switch(e=e&&e.$$typeof,e){case su:case uu:case fu:case du:case iu:return e;default:return t}}case wp:return t}}}function zb(e){return Et(e)===lu}ae.AsyncMode=Sp;ae.ConcurrentMode=lu;ae.ContextConsumer=su;ae.ContextProvider=iu;ae.Element=vp;ae.ForwardRef=uu;ae.Fragment=ru;ae.Lazy=fu;ae.Memo=du;ae.Portal=wp;ae.Profiler=au;ae.StrictMode=ou;ae.Suspense=cu;ae.isAsyncMode=function(e){return zb(e)||Et(e)===Sp};ae.isConcurrentMode=zb;ae.isContextConsumer=function(e){return Et(e)===su};ae.isContextProvider=function(e){return Et(e)===iu};ae.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===vp};ae.isForwardRef=function(e){return Et(e)===uu};ae.isFragment=function(e){return Et(e)===ru};ae.isLazy=function(e){return Et(e)===fu};ae.isMemo=function(e){return Et(e)===du};ae.isPortal=function(e){return Et(e)===wp};ae.isProfiler=function(e){return Et(e)===au};ae.isStrictMode=function(e){return Et(e)===ou};ae.isSuspense=function(e){return Et(e)===cu};ae.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===ru||e===lu||e===au||e===ou||e===cu||e===F4||typeof e=="object"&&e!==null&&(e.$$typeof===fu||e.$$typeof===du||e.$$typeof===iu||e.$$typeof===su||e.$$typeof===uu||e.$$typeof===A4||e.$$typeof===P4||e.$$typeof===q4||e.$$typeof===E4)};ae.typeOf=Et;(function(e){e.exports=ae})(Rb);var Mb=Rb.exports,I4={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},R4={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},Vb={};Vb[Mb.ForwardRef]=I4;Vb[Mb.Memo]=R4;var z4=!0;function M4(e,t,n){var r="";return n.split(" ").forEach(function(o){e[o]!==void 0?t.push(e[o]+";"):r+=o+" "}),r}var Lb=function(t,n,r){var o=t.key+"-"+n.name;(r===!1||z4===!1)&&t.registered[o]===void 0&&(t.registered[o]=n.styles)},jb=function(t,n,r){Lb(t,n,r);var o=t.key+"-"+n.name;if(t.inserted[n.name]===void 0){var a=n;do t.insert(n===a?"."+o:"",a,t.sheet,!0),a=a.next;while(a!==void 0)}};function V4(e){for(var t=0,n,r=0,o=e.length;o>=4;++r,o-=4)n=e.charCodeAt(r)&255|(e.charCodeAt(++r)&255)<<8|(e.charCodeAt(++r)&255)<<16|(e.charCodeAt(++r)&255)<<24,n=(n&65535)*1540483477+((n>>>16)*59797<<16),n^=n>>>24,t=(n&65535)*1540483477+((n>>>16)*59797<<16)^(t&65535)*1540483477+((t>>>16)*59797<<16);switch(o){case 3:t^=(e.charCodeAt(r+2)&255)<<16;case 2:t^=(e.charCodeAt(r+1)&255)<<8;case 1:t^=e.charCodeAt(r)&255,t=(t&65535)*1540483477+((t>>>16)*59797<<16)}return t^=t>>>13,t=(t&65535)*1540483477+((t>>>16)*59797<<16),((t^t>>>15)>>>0).toString(36)}var L4={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},j4=/[A-Z]|^ms/g,N4=/_EMO_([^_]+?)_([^]*?)_EMO_/g,Nb=function(t){return t.charCodeAt(1)===45},th=function(t){return t!=null&&typeof t!="boolean"},mc=qb(function(e){return Nb(e)?e:e.replace(j4,"-$&").toLowerCase()}),nh=function(t,n){switch(t){case"animation":case"animationName":if(typeof n=="string")return n.replace(N4,function(r,o,a){return an={name:o,styles:a,next:an},o})}return L4[t]!==1&&!Nb(t)&&typeof n=="number"&&n!==0?n+"px":n};function ci(e,t,n){if(n==null)return"";if(n.__emotion_styles!==void 0)return n;switch(typeof n){case"boolean":return"";case"object":{if(n.anim===1)return an={name:n.name,styles:n.styles,next:an},n.name;if(n.styles!==void 0){var r=n.next;if(r!==void 0)for(;r!==void 0;)an={name:r.name,styles:r.styles,next:an},r=r.next;var o=n.styles+";";return o}return B4(e,t,n)}case"function":{if(e!==void 0){var a=an,i=n(e);return an=a,ci(e,t,i)}break}}if(t==null)return n;var s=t[n];return s!==void 0?s:n}function B4(e,t,n){var r="";if(Array.isArray(n))for(var o=0;o<n.length;o++)r+=ci(e,t,n[o])+";";else for(var a in n){var i=n[a];if(typeof i!="object")t!=null&&t[i]!==void 0?r+=a+"{"+t[i]+"}":th(i)&&(r+=mc(a)+":"+nh(a,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(t==null||t[i[0]]===void 0))for(var s=0;s<i.length;s++)th(i[s])&&(r+=mc(a)+":"+nh(a,i[s])+";");else{var l=ci(e,t,i);switch(a){case"animation":case"animationName":{r+=mc(a)+":"+l+";";break}default:r+=a+"{"+l+"}"}}}return r}var rh=/label:\s*([^\s;\n{]+)\s*(;|$)/g,an,xp=function(t,n,r){if(t.length===1&&typeof t[0]=="object"&&t[0]!==null&&t[0].styles!==void 0)return t[0];var o=!0,a="";an=void 0;var i=t[0];i==null||i.raw===void 0?(o=!1,a+=ci(r,n,i)):a+=i[0];for(var s=1;s<t.length;s++)a+=ci(r,n,t[s]),o&&(a+=i[s]);rh.lastIndex=0;for(var l="",u;(u=rh.exec(a))!==null;)l+="-"+u[1];var c=V4(a)+l;return{name:c,styles:a,next:an}},D4=function(t){return t()},Bb=zm["useInsertionEffect"]?zm["useInsertionEffect"]:!1,O4=Bb||D4,oh=Bb||w.exports.useLayoutEffect,Db=w.exports.createContext(typeof HTMLElement<"u"?T4({key:"css"}):null);Db.Provider;var Ob=function(t){return w.exports.forwardRef(function(n,r){var o=w.exports.useContext(Db);return t(n,o,r)})},di=w.exports.createContext({}),$4=function(t,n){if(typeof n=="function"){var r=n(t);return r}return yl({},t,n)},W4=J0(function(e){return J0(function(t){return $4(e,t)})}),H4=function(t){var n=w.exports.useContext(di);return t.theme!==n&&(n=W4(n)(t.theme)),w.exports.createElement(di.Provider,{value:n},t.children)},pu=Ob(function(e,t){var n=e.styles,r=xp([n],void 0,w.exports.useContext(di)),o=w.exports.useRef();return oh(function(){var a=t.key+"-global",i=new t.sheet.constructor({key:a,nonce:t.sheet.nonce,container:t.sheet.container,speedy:t.sheet.isSpeedy}),s=!1,l=document.querySelector('style[data-emotion="'+a+" "+r.name+'"]');return t.sheet.tags.length&&(i.before=t.sheet.tags[0]),l!==null&&(s=!0,l.setAttribute("data-emotion",a),i.hydrate([l])),o.current=[i,s],function(){i.flush()}},[t]),oh(function(){var a=o.current,i=a[0],s=a[1];if(s){a[1]=!1;return}if(r.next!==void 0&&jb(t,r.next,!0),i.tags.length){var l=i.tags[i.tags.length-1].nextElementSibling;i.before=l,i.flush()}t.insert("",r,i,!1)},[t,r.name]),null});function U4(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return xp(t)}var mu=function(){var t=U4.apply(void 0,arguments),n="animation-"+t.name;return{name:n,styles:"@keyframes "+n+"{"+t.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}};function G4(e){return typeof e=="function"}function K4(e,t){const n={};return Object.keys(e).forEach(r=>{t.includes(r)||(n[r]=e[r])}),n}function Y4(e,t,n,r){const o=typeof t=="string"?t.split("."):[t];for(r=0;r<o.length&&e;r+=1)e=e[o[r]];return e===void 0?n:e}var Z4=e=>{const t=new WeakMap;return(r,o,a,i)=>{if(typeof r>"u")return e(r,o,a);t.has(r)||t.set(r,new Map);const s=t.get(r);if(s.has(o))return s.get(o);const l=e(r,o,a,i);return s.set(o,l),l}},$b=Z4(Y4);function Wb(e,t){const n={};return Object.keys(e).forEach(r=>{const o=e[r];t(o,r,e)&&(n[r]=o)}),n}var Hb=e=>Wb(e,t=>t!=null);function Ub(e,...t){return G4(e)?e(...t):e}Object.freeze(["base","sm","md","lg","xl","2xl"]);function X4(e={}){const{strict:t=!0,errorMessage:n="useContext: `context` is undefined. Seems you forgot to wrap component within the Provider",name:r}=e,o=w.exports.createContext(void 0);o.displayName=r;function a(){var i;const s=w.exports.useContext(o);if(!s&&t){const l=new Error(n);throw l.name="ContextError",(i=Error.captureStackTrace)==null||i.call(Error,l,a),l}return s}return[o.Provider,a,o]}var Q4=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,J4=qb(function(e){return Q4.test(e)||e.charCodeAt(0)===111&&e.charCodeAt(1)===110&&e.charCodeAt(2)<91}),eS=J4,tS=function(t){return t!=="theme"},ah=function(t){return typeof t=="string"&&t.charCodeAt(0)>96?eS:tS},ih=function(t,n,r){var o;if(n){var a=n.shouldForwardProp;o=t.__emotion_forwardProp&&a?function(i){return t.__emotion_forwardProp(i)&&a(i)}:a}return typeof o!="function"&&r&&(o=t.__emotion_forwardProp),o},nS=function(t){var n=t.cache,r=t.serialized,o=t.isStringTag;return Lb(n,r,o),O4(function(){return jb(n,r,o)}),null},rS=function e(t,n){var r=t.__emotion_real===t,o=r&&t.__emotion_base||t,a,i;n!==void 0&&(a=n.label,i=n.target);var s=ih(t,n,r),l=s||ah(o),u=!l("as");return function(){var c=arguments,d=r&&t.__emotion_styles!==void 0?t.__emotion_styles.slice(0):[];if(a!==void 0&&d.push("label:"+a+";"),c[0]==null||c[0].raw===void 0)d.push.apply(d,c);else{d.push(c[0][0]);for(var f=c.length,p=1;p<f;p++)d.push(c[p],c[0][p])}var y=Ob(function(v,k,g){var m=u&&v.as||o,h="",S=[],T=v;if(v.theme==null){T={};for(var A in v)T[A]=v[A];T.theme=w.exports.useContext(di)}typeof v.className=="string"?h=M4(k.registered,S,v.className):v.className!=null&&(h=v.className+" ");var E=xp(d.concat(S),k.registered,T);h+=k.key+"-"+E.name,i!==void 0&&(h+=" "+i);var q=u&&s===void 0?ah(m):l,j={};for(var V in v)u&&V==="as"||q(V)&&(j[V]=v[V]);return j.className=h,j.ref=g,w.exports.createElement(w.exports.Fragment,null,w.exports.createElement(nS,{cache:k,serialized:E,isStringTag:typeof m=="string"}),w.exports.createElement(m,j))});return y.displayName=a!==void 0?a:"Styled("+(typeof o=="string"?o:o.displayName||o.name||"Component")+")",y.defaultProps=t.defaultProps,y.__emotion_real=y,y.__emotion_base=o,y.__emotion_styles=d,y.__emotion_forwardProp=s,Object.defineProperty(y,"toString",{value:function(){return"."+i}}),y.withComponent=function(v,k){return e(v,yl({},n,k,{shouldForwardProp:ih(y,k,!0)})).apply(void 0,d)},y}},oS=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],$d=rS.bind();oS.forEach(function(e){$d[e]=$d(e)});function ne(e,t={}){let n=!1;function r(){if(!n){n=!0;return}throw new Error("[anatomy] .part(...) should only be called once. Did you mean to use .extend(...) ?")}function o(...c){r();for(const d of c)t[d]=l(d);return ne(e,t)}function a(...c){for(const d of c)d in t||(t[d]=l(d));return ne(e,t)}function i(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.selector]))}function s(){return Object.fromEntries(Object.entries(t).map(([d,f])=>[d,f.className]))}function l(c){const p=`chakra-${(["container","root"].includes(c!=null?c:"")?[e]:[e,c]).filter(Boolean).join("__")}`;return{className:p,selector:`.${p}`,toString:()=>c}}return{parts:o,toPart:l,extend:a,selectors:i,classnames:s,get keys(){return Object.keys(t)},__type:{}}}var aS=ne("accordion").parts("root","container","button","panel").extend("icon"),iS=ne("alert").parts("title","description","container").extend("icon","spinner"),sS=ne("avatar").parts("label","badge","container").extend("excessLabel","group"),lS=ne("breadcrumb").parts("link","item","container").extend("separator");ne("button").parts();var uS=ne("checkbox").parts("control","icon","container").extend("label");ne("progress").parts("track","filledTrack").extend("label");var cS=ne("drawer").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),dS=ne("editable").parts("preview","input","textarea"),fS=ne("form").parts("container","requiredIndicator","helperText"),pS=ne("formError").parts("text","icon"),mS=ne("input").parts("addon","field","element"),hS=ne("list").parts("container","item","icon"),gS=ne("menu").parts("button","list","item").extend("groupTitle","command","divider"),yS=ne("modal").parts("overlay","dialogContainer","dialog").extend("header","closeButton","body","footer"),bS=ne("numberinput").parts("root","field","stepperGroup","stepper");ne("pininput").parts("field");var vS=ne("popover").parts("content","header","body","footer").extend("popper","arrow","closeButton"),wS=ne("progress").parts("label","filledTrack","track"),SS=ne("radio").parts("container","control","label"),xS=ne("select").parts("field","icon"),CS=ne("slider").parts("container","track","thumb","filledTrack","mark"),kS=ne("stat").parts("container","label","helpText","number","icon"),_S=ne("switch").parts("container","track","thumb"),TS=ne("table").parts("table","thead","tbody","tr","th","td","tfoot","caption"),FS=ne("tabs").parts("root","tab","tablist","tabpanel","tabpanels","indicator"),ES=ne("tag").parts("container","label","closeButton"),AS=ne("card").parts("container","header","body","footer");function Pr(e,t,n){return Math.min(Math.max(e,n),t)}class PS extends Error{constructor(t){super(`Failed to parse color: "${t}"`)}}var wa=PS;function Cp(e){if(typeof e!="string")throw new wa(e);if(e.trim().toLowerCase()==="transparent")return[0,0,0,0];let t=e.trim();t=jS.test(e)?RS(e):e;const n=zS.exec(t);if(n){const i=Array.from(n).slice(1);return[...i.slice(0,3).map(s=>parseInt(fi(s,2),16)),parseInt(fi(i[3]||"f",2),16)/255]}const r=MS.exec(t);if(r){const i=Array.from(r).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,16)),parseInt(i[3]||"ff",16)/255]}const o=VS.exec(t);if(o){const i=Array.from(o).slice(1);return[...i.slice(0,3).map(s=>parseInt(s,10)),parseFloat(i[3]||"1")]}const a=LS.exec(t);if(a){const[i,s,l,u]=Array.from(a).slice(1).map(parseFloat);if(Pr(0,100,s)!==s)throw new wa(e);if(Pr(0,100,l)!==l)throw new wa(e);return[...NS(i,s,l),u||1]}throw new wa(e)}function qS(e){let t=5381,n=e.length;for(;n;)t=t*33^e.charCodeAt(--n);return(t>>>0)%2341}const sh=e=>parseInt(e.replace(/_/g,""),36),IS="1q29ehhb 1n09sgk7 1kl1ekf_ _yl4zsno 16z9eiv3 1p29lhp8 _bd9zg04 17u0____ _iw9zhe5 _to73___ _r45e31e _7l6g016 _jh8ouiv _zn3qba8 1jy4zshs 11u87k0u 1ro9yvyo 1aj3xael 1gz9zjz0 _3w8l4xo 1bf1ekf_ _ke3v___ _4rrkb__ 13j776yz _646mbhl _nrjr4__ _le6mbhl 1n37ehkb _m75f91n _qj3bzfz 1939yygw 11i5z6x8 _1k5f8xs 1509441m 15t5lwgf _ae2th1n _tg1ugcv 1lp1ugcv 16e14up_ _h55rw7n _ny9yavn _7a11xb_ 1ih442g9 _pv442g9 1mv16xof 14e6y7tu 1oo9zkds 17d1cisi _4v9y70f _y98m8kc 1019pq0v 12o9zda8 _348j4f4 1et50i2o _8epa8__ _ts6senj 1o350i2o 1mi9eiuo 1259yrp0 1ln80gnw _632xcoy 1cn9zldc _f29edu4 1n490c8q _9f9ziet 1b94vk74 _m49zkct 1kz6s73a 1eu9dtog _q58s1rz 1dy9sjiq __u89jo3 _aj5nkwg _ld89jo3 13h9z6wx _qa9z2ii _l119xgq _bs5arju 1hj4nwk9 1qt4nwk9 1ge6wau6 14j9zlcw 11p1edc_ _ms1zcxe _439shk6 _jt9y70f _754zsow 1la40eju _oq5p___ _x279qkz 1fa5r3rv _yd2d9ip _424tcku _8y1di2_ _zi2uabw _yy7rn9h 12yz980_ __39ljp6 1b59zg0x _n39zfzp 1fy9zest _b33k___ _hp9wq92 1il50hz4 _io472ub _lj9z3eo 19z9ykg0 _8t8iu3a 12b9bl4a 1ak5yw0o _896v4ku _tb8k8lv _s59zi6t _c09ze0p 1lg80oqn 1id9z8wb _238nba5 1kq6wgdi _154zssg _tn3zk49 _da9y6tc 1sg7cv4f _r12jvtt 1gq5fmkz 1cs9rvci _lp9jn1c _xw1tdnb 13f9zje6 16f6973h _vo7ir40 _bt5arjf _rc45e4t _hr4e100 10v4e100 _hc9zke2 _w91egv_ _sj2r1kk 13c87yx8 _vqpds__ _ni8ggk8 _tj9yqfb 1ia2j4r4 _7x9b10u 1fc9ld4j 1eq9zldr _5j9lhpx _ez9zl6o _md61fzm".split(" ").reduce((e,t)=>{const n=sh(t.substring(0,3)),r=sh(t.substring(3)).toString(16);let o="";for(let a=0;a<6-r.length;a++)o+="0";return e[n]=`${o}${r}`,e},{});function RS(e){const t=e.toLowerCase().trim(),n=IS[qS(t)];if(!n)throw new wa(e);return`#${n}`}const fi=(e,t)=>Array.from(Array(t)).map(()=>e).join(""),zS=new RegExp(`^#${fi("([a-f0-9])",3)}([a-f0-9])?$`,"i"),MS=new RegExp(`^#${fi("([a-f0-9]{2})",3)}([a-f0-9]{2})?$`,"i"),VS=new RegExp(`^rgba?\\(\\s*(\\d+)\\s*${fi(",\\s*(\\d+)\\s*",2)}(?:,\\s*([\\d.]+))?\\s*\\)$`,"i"),LS=/^hsla?\(\s*([\d.]+)\s*,\s*([\d.]+)%\s*,\s*([\d.]+)%(?:\s*,\s*([\d.]+))?\s*\)$/i,jS=/^[a-z]+$/i,lh=e=>Math.round(e*255),NS=(e,t,n)=>{let r=n/100;if(t===0)return[r,r,r].map(lh);const o=(e%360+360)%360/60,a=(1-Math.abs(2*r-1))*(t/100),i=a*(1-Math.abs(o%2-1));let s=0,l=0,u=0;o>=0&&o<1?(s=a,l=i):o>=1&&o<2?(s=i,l=a):o>=2&&o<3?(l=a,u=i):o>=3&&o<4?(l=i,u=a):o>=4&&o<5?(s=i,u=a):o>=5&&o<6&&(s=a,u=i);const c=r-a/2,d=s+c,f=l+c,p=u+c;return[d,f,p].map(lh)};function BS(e,t,n,r){return`rgba(${Pr(0,255,e).toFixed()}, ${Pr(0,255,t).toFixed()}, ${Pr(0,255,n).toFixed()}, ${parseFloat(Pr(0,1,r).toFixed(3))})`}function DS(e,t){const[n,r,o,a]=Cp(e);return BS(n,r,o,a-t)}function OS(e){const[t,n,r,o]=Cp(e);let a=i=>{const s=Pr(0,255,i).toString(16);return s.length===1?`0${s}`:s};return`#${a(t)}${a(n)}${a(r)}${o<1?a(Math.round(o*255)):""}`}function $S(e,t,n,r,o){for(t=t.split?t.split("."):t,r=0;r<t.length;r++)e=e?e[t[r]]:o;return e===o?n:e}var WS=e=>Object.keys(e).length===0,rt=(e,t,n)=>{const r=$S(e,`colors.${t}`,t);try{return OS(r),r}catch{return n!=null?n:"#000000"}},HS=e=>{const[t,n,r]=Cp(e);return(t*299+n*587+r*114)/1e3},US=e=>t=>{const n=rt(t,e);return HS(n)<128?"dark":"light"},GS=e=>t=>US(e)(t)==="dark",Do=(e,t)=>n=>{const r=rt(n,e);return DS(r,1-t)};function uh(e="1rem",t="rgba(255, 255, 255, 0.15)"){return{backgroundImage:`linear-gradient(
    45deg,
    ${t} 25%,
    transparent 25%,
    transparent 50%,
    ${t} 50%,
    ${t} 75%,
    transparent 75%,
    transparent
  )`,backgroundSize:`${e} ${e}`}}var KS=()=>`#${Math.floor(Math.random()*16777215).toString(16).padEnd(6,"0")}`;function YS(e){const t=KS();return!e||WS(e)?t:e.string&&e.colors?XS(e.string,e.colors):e.string&&!e.colors?ZS(e.string):e.colors&&!e.string?QS(e.colors):t}function ZS(e){let t=0;if(e.length===0)return t.toString();for(let r=0;r<e.length;r+=1)t=e.charCodeAt(r)+((t<<5)-t),t=t&t;let n="#";for(let r=0;r<3;r+=1)n+=`00${(t>>r*8&255).toString(16)}`.substr(-2);return n}function XS(e,t){let n=0;if(e.length===0)return t[0];for(let r=0;r<e.length;r+=1)n=e.charCodeAt(r)+((n<<5)-n),n=n&n;return n=(n%t.length+t.length)%t.length,t[n]}function QS(e){return e[Math.floor(Math.random()*e.length)]}function B(e,t){return n=>n.colorMode==="dark"?t:e}function kp(e){const{orientation:t,vertical:n,horizontal:r}=e;return t?t==="vertical"?n:r:{}}function JS(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}function Gb(e){return JS(e)&&e.reference?e.reference:String(e)}var hu=(e,...t)=>t.map(Gb).join(` ${e} `).replace(/calc/g,""),ch=(...e)=>`calc(${hu("+",...e)})`,dh=(...e)=>`calc(${hu("-",...e)})`,Wd=(...e)=>`calc(${hu("*",...e)})`,fh=(...e)=>`calc(${hu("/",...e)})`,ph=e=>{const t=Gb(e);return t!=null&&!Number.isNaN(parseFloat(t))?String(t).startsWith("-")?String(t).slice(1):`-${t}`:Wd(t,-1)},kn=Object.assign(e=>({add:(...t)=>kn(ch(e,...t)),subtract:(...t)=>kn(dh(e,...t)),multiply:(...t)=>kn(Wd(e,...t)),divide:(...t)=>kn(fh(e,...t)),negate:()=>kn(ph(e)),toString:()=>e.toString()}),{add:ch,subtract:dh,multiply:Wd,divide:fh,negate:ph});function ex(e){return!Number.isInteger(parseFloat(e.toString()))}function tx(e,t="-"){return e.replace(/\s+/g,t)}function Kb(e){const t=tx(e.toString());return t.includes("\\.")?e:ex(e)?t.replace(".","\\."):e}function nx(e,t=""){return[t,Kb(e)].filter(Boolean).join("-")}function rx(e,t){return`var(${Kb(e)}${t?`, ${t}`:""})`}function ox(e,t=""){return`--${nx(e,t)}`}function Ve(e,t){const n=ox(e,t==null?void 0:t.prefix);return{variable:n,reference:rx(n,ax(t==null?void 0:t.fallback))}}function ax(e){return typeof e=="string"?e:e==null?void 0:e.reference}var{definePartsStyle:ix,defineMultiStyleConfig:sx}=ge(aS.keys),lx={borderTopWidth:"1px",borderColor:"inherit",_last:{borderBottomWidth:"1px"}},ux={transitionProperty:"common",transitionDuration:"normal",fontSize:"md",_focusVisible:{boxShadow:"outline"},_hover:{bg:"blackAlpha.50"},_disabled:{opacity:.4,cursor:"not-allowed"},px:"4",py:"2"},cx={pt:"2",px:"4",pb:"5"},dx={fontSize:"1.25em"},fx=ix({container:lx,button:ux,panel:cx,icon:dx}),px=sx({baseStyle:fx}),{definePartsStyle:Ei,defineMultiStyleConfig:mx}=ge(iS.keys),Ct=ie("alert-fg"),Rn=ie("alert-bg"),hx=Ei({container:{bg:Rn.reference,px:"4",py:"3"},title:{fontWeight:"bold",lineHeight:"6",marginEnd:"2"},description:{lineHeight:"6"},icon:{color:Ct.reference,flexShrink:0,marginEnd:"3",w:"5",h:"6"},spinner:{color:Ct.reference,flexShrink:0,marginEnd:"3",w:"5",h:"5"}});function _p(e){const{theme:t,colorScheme:n}=e,r=Do(`${n}.200`,.16)(t);return{light:`colors.${n}.100`,dark:r}}var gx=Ei(e=>{const{colorScheme:t}=e,n=_p(e);return{container:{[Ct.variable]:`colors.${t}.500`,[Rn.variable]:n.light,_dark:{[Ct.variable]:`colors.${t}.200`,[Rn.variable]:n.dark}}}}),yx=Ei(e=>{const{colorScheme:t}=e,n=_p(e);return{container:{[Ct.variable]:`colors.${t}.500`,[Rn.variable]:n.light,_dark:{[Ct.variable]:`colors.${t}.200`,[Rn.variable]:n.dark},paddingStart:"3",borderStartWidth:"4px",borderStartColor:Ct.reference}}}),bx=Ei(e=>{const{colorScheme:t}=e,n=_p(e);return{container:{[Ct.variable]:`colors.${t}.500`,[Rn.variable]:n.light,_dark:{[Ct.variable]:`colors.${t}.200`,[Rn.variable]:n.dark},pt:"2",borderTopWidth:"4px",borderTopColor:Ct.reference}}}),vx=Ei(e=>{const{colorScheme:t}=e;return{container:{[Ct.variable]:"colors.white",[Rn.variable]:`colors.${t}.500`,_dark:{[Ct.variable]:"colors.gray.900",[Rn.variable]:`colors.${t}.200`},color:Ct.reference}}}),wx={subtle:gx,"left-accent":yx,"top-accent":bx,solid:vx},Sx=mx({baseStyle:hx,variants:wx,defaultProps:{variant:"subtle",colorScheme:"blue"}}),Yb={px:"1px",.5:"0.125rem",1:"0.25rem",1.5:"0.375rem",2:"0.5rem",2.5:"0.625rem",3:"0.75rem",3.5:"0.875rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem",12:"3rem",14:"3.5rem",16:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},xx={max:"max-content",min:"min-content",full:"100%","3xs":"14rem","2xs":"16rem",xs:"20rem",sm:"24rem",md:"28rem",lg:"32rem",xl:"36rem","2xl":"42rem","3xl":"48rem","4xl":"56rem","5xl":"64rem","6xl":"72rem","7xl":"80rem","8xl":"90rem",prose:"60ch"},Cx={sm:"640px",md:"768px",lg:"1024px",xl:"1280px"},kx={...Yb,...xx,container:Cx},Zb=kx,_x=e=>typeof e=="function";function at(e,...t){return _x(e)?e(...t):e}var{definePartsStyle:Xb,defineMultiStyleConfig:Tx}=ge(sS.keys),_o=ie("avatar-border-color"),hc=ie("avatar-bg"),Fx={borderRadius:"full",border:"0.2em solid",[_o.variable]:"white",_dark:{[_o.variable]:"colors.gray.800"},borderColor:_o.reference},Ex={[hc.variable]:"colors.gray.200",_dark:{[hc.variable]:"colors.whiteAlpha.400"},bgColor:hc.reference},mh=ie("avatar-background"),Ax=e=>{const{name:t,theme:n}=e,r=t?YS({string:t}):"colors.gray.400",o=GS(r)(n);let a="white";return o||(a="gray.800"),{bg:mh.reference,"&:not([data-loaded])":{[mh.variable]:r},color:a,[_o.variable]:"colors.white",_dark:{[_o.variable]:"colors.gray.800"},borderColor:_o.reference,verticalAlign:"top"}},Px=Xb(e=>({badge:at(Fx,e),excessLabel:at(Ex,e),container:at(Ax,e)}));function Bn(e){const t=e!=="100%"?Zb[e]:void 0;return Xb({container:{width:e,height:e,fontSize:`calc(${t!=null?t:e} / 2.5)`},excessLabel:{width:e,height:e},label:{fontSize:`calc(${t!=null?t:e} / 2.5)`,lineHeight:e!=="100%"?t!=null?t:e:void 0}})}var qx={"2xs":Bn(4),xs:Bn(6),sm:Bn(8),md:Bn(12),lg:Bn(16),xl:Bn(24),"2xl":Bn(32),full:Bn("100%")},Ix=Tx({baseStyle:Px,sizes:qx,defaultProps:{size:"md"}}),Rx={px:1,textTransform:"uppercase",fontSize:"xs",borderRadius:"sm",fontWeight:"bold"},To=ie("badge-bg"),un=ie("badge-color"),zx=e=>{const{colorScheme:t,theme:n}=e,r=Do(`${t}.500`,.6)(n);return{[To.variable]:`colors.${t}.500`,[un.variable]:"colors.white",_dark:{[To.variable]:r,[un.variable]:"colors.whiteAlpha.800"},bg:To.reference,color:un.reference}},Mx=e=>{const{colorScheme:t,theme:n}=e,r=Do(`${t}.200`,.16)(n);return{[To.variable]:`colors.${t}.100`,[un.variable]:`colors.${t}.800`,_dark:{[To.variable]:r,[un.variable]:`colors.${t}.200`},bg:To.reference,color:un.reference}},Vx=e=>{const{colorScheme:t,theme:n}=e,r=Do(`${t}.200`,.8)(n);return{[un.variable]:`colors.${t}.500`,_dark:{[un.variable]:r},color:un.reference,boxShadow:`inset 0 0 0px 1px ${un.reference}`}},Lx={solid:zx,subtle:Mx,outline:Vx},Ia={baseStyle:Rx,variants:Lx,defaultProps:{variant:"subtle",colorScheme:"gray"}},{defineMultiStyleConfig:jx,definePartsStyle:Nx}=ge(lS.keys),Bx={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}},Dx=Nx({link:Bx}),Ox=jx({baseStyle:Dx}),$x={lineHeight:"1.2",borderRadius:"md",fontWeight:"semibold",transitionProperty:"common",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{_disabled:{bg:"initial"}}},Qb=e=>{const{colorScheme:t,theme:n}=e;if(t==="gray")return{color:B("inherit","whiteAlpha.900")(e),_hover:{bg:B("gray.100","whiteAlpha.200")(e)},_active:{bg:B("gray.200","whiteAlpha.300")(e)}};const r=Do(`${t}.200`,.12)(n),o=Do(`${t}.200`,.24)(n);return{color:B(`${t}.600`,`${t}.200`)(e),bg:"transparent",_hover:{bg:B(`${t}.50`,r)(e)},_active:{bg:B(`${t}.100`,o)(e)}}},Wx=e=>{const{colorScheme:t}=e,n=B("gray.200","whiteAlpha.300")(e);return{border:"1px solid",borderColor:t==="gray"?n:"currentColor",".chakra-button__group[data-attached][data-orientation=horizontal] > &:not(:last-of-type)":{marginEnd:"-1px"},".chakra-button__group[data-attached][data-orientation=vertical] > &:not(:last-of-type)":{marginBottom:"-1px"},...at(Qb,e)}},Hx={yellow:{bg:"yellow.400",color:"black",hoverBg:"yellow.500",activeBg:"yellow.600"},cyan:{bg:"cyan.400",color:"black",hoverBg:"cyan.500",activeBg:"cyan.600"}},Ux=e=>{var s;const{colorScheme:t}=e;if(t==="gray"){const l=B("gray.100","whiteAlpha.200")(e);return{bg:l,_hover:{bg:B("gray.200","whiteAlpha.300")(e),_disabled:{bg:l}},_active:{bg:B("gray.300","whiteAlpha.400")(e)}}}const{bg:n=`${t}.500`,color:r="white",hoverBg:o=`${t}.600`,activeBg:a=`${t}.700`}=(s=Hx[t])!=null?s:{},i=B(n,`${t}.200`)(e);return{bg:i,color:B(r,"gray.800")(e),_hover:{bg:B(o,`${t}.300`)(e),_disabled:{bg:i}},_active:{bg:B(a,`${t}.400`)(e)}}},Gx=e=>{const{colorScheme:t}=e;return{padding:0,height:"auto",lineHeight:"normal",verticalAlign:"baseline",color:B(`${t}.500`,`${t}.200`)(e),_hover:{textDecoration:"underline",_disabled:{textDecoration:"none"}},_active:{color:B(`${t}.700`,`${t}.500`)(e)}}},Kx={bg:"none",color:"inherit",display:"inline",lineHeight:"inherit",m:"0",p:"0"},Yx={ghost:Qb,outline:Wx,solid:Ux,link:Gx,unstyled:Kx},Zx={lg:{h:"12",minW:"12",fontSize:"lg",px:"6"},md:{h:"10",minW:"10",fontSize:"md",px:"4"},sm:{h:"8",minW:"8",fontSize:"sm",px:"3"},xs:{h:"6",minW:"6",fontSize:"xs",px:"2"}},Xx={baseStyle:$x,variants:Yx,sizes:Zx,defaultProps:{variant:"solid",size:"md",colorScheme:"gray"}},{definePartsStyle:zr,defineMultiStyleConfig:Qx}=ge(AS.keys),bl=ie("card-bg"),Fo=ie("card-padding"),Jx=zr({container:{[bl.variable]:"chakra-body-bg",backgroundColor:bl.reference,color:"chakra-body-text"},body:{padding:Fo.reference,flex:"1 1 0%"},header:{padding:Fo.reference},footer:{padding:Fo.reference}}),eC={sm:zr({container:{borderRadius:"base",[Fo.variable]:"space.3"}}),md:zr({container:{borderRadius:"md",[Fo.variable]:"space.5"}}),lg:zr({container:{borderRadius:"xl",[Fo.variable]:"space.7"}})},tC={elevated:zr({container:{boxShadow:"base",_dark:{[bl.variable]:"colors.gray.700"}}}),outline:zr({container:{borderWidth:"1px",borderColor:"chakra-border-color"}}),filled:zr({container:{[bl.variable]:"colors.chakra-subtle-bg"}}),unstyled:{body:{padding:0},header:{padding:0},footer:{padding:0}}},nC=Qx({baseStyle:Jx,variants:tC,sizes:eC,defaultProps:{variant:"elevated",size:"md"}}),{definePartsStyle:Ls,defineMultiStyleConfig:rC}=ge(uS.keys),Ra=ie("checkbox-size"),oC=e=>{const{colorScheme:t}=e;return{w:Ra.reference,h:Ra.reference,transitionProperty:"box-shadow",transitionDuration:"normal",border:"2px solid",borderRadius:"sm",borderColor:"inherit",color:"white",_checked:{bg:B(`${t}.500`,`${t}.200`)(e),borderColor:B(`${t}.500`,`${t}.200`)(e),color:B("white","gray.900")(e),_hover:{bg:B(`${t}.600`,`${t}.300`)(e),borderColor:B(`${t}.600`,`${t}.300`)(e)},_disabled:{borderColor:B("gray.200","transparent")(e),bg:B("gray.200","whiteAlpha.300")(e),color:B("gray.500","whiteAlpha.500")(e)}},_indeterminate:{bg:B(`${t}.500`,`${t}.200`)(e),borderColor:B(`${t}.500`,`${t}.200`)(e),color:B("white","gray.900")(e)},_disabled:{bg:B("gray.100","whiteAlpha.100")(e),borderColor:B("gray.100","transparent")(e)},_focusVisible:{boxShadow:"outline"},_invalid:{borderColor:B("red.500","red.300")(e)}}},aC={_disabled:{cursor:"not-allowed"}},iC={userSelect:"none",_disabled:{opacity:.4}},sC={transitionProperty:"transform",transitionDuration:"normal"},lC=Ls(e=>({icon:sC,container:aC,control:at(oC,e),label:iC})),uC={sm:Ls({control:{[Ra.variable]:"sizes.3"},label:{fontSize:"sm"},icon:{fontSize:"3xs"}}),md:Ls({control:{[Ra.variable]:"sizes.4"},label:{fontSize:"md"},icon:{fontSize:"2xs"}}),lg:Ls({control:{[Ra.variable]:"sizes.5"},label:{fontSize:"lg"},icon:{fontSize:"2xs"}})},vl=rC({baseStyle:lC,sizes:uC,defaultProps:{size:"md",colorScheme:"blue"}}),za=Ve("close-button-size"),da=Ve("close-button-bg"),cC={w:[za.reference],h:[za.reference],borderRadius:"md",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed",boxShadow:"none"},_hover:{[da.variable]:"colors.blackAlpha.100",_dark:{[da.variable]:"colors.whiteAlpha.100"}},_active:{[da.variable]:"colors.blackAlpha.200",_dark:{[da.variable]:"colors.whiteAlpha.200"}},_focusVisible:{boxShadow:"outline"},bg:da.reference},dC={lg:{[za.variable]:"sizes.10",fontSize:"md"},md:{[za.variable]:"sizes.8",fontSize:"xs"},sm:{[za.variable]:"sizes.6",fontSize:"2xs"}},fC={baseStyle:cC,sizes:dC,defaultProps:{size:"md"}},{variants:pC,defaultProps:mC}=Ia,hC={fontFamily:"mono",fontSize:"sm",px:"0.2em",borderRadius:"sm"},gC={baseStyle:hC,variants:pC,defaultProps:mC},yC={w:"100%",mx:"auto",maxW:"prose",px:"4"},bC={baseStyle:yC},vC={opacity:.6,borderColor:"inherit"},wC={borderStyle:"solid"},SC={borderStyle:"dashed"},xC={solid:wC,dashed:SC},CC={baseStyle:vC,variants:xC,defaultProps:{variant:"solid"}},{definePartsStyle:Hd,defineMultiStyleConfig:kC}=ge(cS.keys),gc=ie("drawer-bg"),yc=ie("drawer-box-shadow");function Qr(e){return Hd(e==="full"?{dialog:{maxW:"100vw",h:"100vh"}}:{dialog:{maxW:e}})}var _C={bg:"blackAlpha.600",zIndex:"overlay"},TC={display:"flex",zIndex:"modal",justifyContent:"center"},FC=e=>{const{isFullHeight:t}=e;return{...t&&{height:"100vh"},zIndex:"modal",maxH:"100vh",color:"inherit",[gc.variable]:"colors.white",[yc.variable]:"shadows.lg",_dark:{[gc.variable]:"colors.gray.700",[yc.variable]:"shadows.dark-lg"},bg:gc.reference,boxShadow:yc.reference}},EC={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},AC={position:"absolute",top:"2",insetEnd:"3"},PC={px:"6",py:"2",flex:"1",overflow:"auto"},qC={px:"6",py:"4"},IC=Hd(e=>({overlay:_C,dialogContainer:TC,dialog:at(FC,e),header:EC,closeButton:AC,body:PC,footer:qC})),RC={xs:Qr("xs"),sm:Qr("md"),md:Qr("lg"),lg:Qr("2xl"),xl:Qr("4xl"),full:Qr("full")},zC=kC({baseStyle:IC,sizes:RC,defaultProps:{size:"xs"}}),{definePartsStyle:MC,defineMultiStyleConfig:VC}=ge(dS.keys),LC={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal"},jC={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},NC={borderRadius:"md",py:"1",transitionProperty:"common",transitionDuration:"normal",width:"full",_focusVisible:{boxShadow:"outline"},_placeholder:{opacity:.6}},BC=MC({preview:LC,input:jC,textarea:NC}),DC=VC({baseStyle:BC}),{definePartsStyle:OC,defineMultiStyleConfig:$C}=ge(fS.keys),Eo=ie("form-control-color"),WC={marginStart:"1",[Eo.variable]:"colors.red.500",_dark:{[Eo.variable]:"colors.red.300"},color:Eo.reference},HC={mt:"2",[Eo.variable]:"colors.gray.600",_dark:{[Eo.variable]:"colors.whiteAlpha.600"},color:Eo.reference,lineHeight:"normal",fontSize:"sm"},UC=OC({container:{width:"100%",position:"relative"},requiredIndicator:WC,helperText:HC}),GC=$C({baseStyle:UC}),{definePartsStyle:KC,defineMultiStyleConfig:YC}=ge(pS.keys),Ao=ie("form-error-color"),ZC={[Ao.variable]:"colors.red.500",_dark:{[Ao.variable]:"colors.red.300"},color:Ao.reference,mt:"2",fontSize:"sm",lineHeight:"normal"},XC={marginEnd:"0.5em",[Ao.variable]:"colors.red.500",_dark:{[Ao.variable]:"colors.red.300"},color:Ao.reference},QC=KC({text:ZC,icon:XC}),JC=YC({baseStyle:QC}),e8={fontSize:"md",marginEnd:"3",mb:"2",fontWeight:"medium",transitionProperty:"common",transitionDuration:"normal",opacity:1,_disabled:{opacity:.4}},t8={baseStyle:e8},n8={fontFamily:"heading",fontWeight:"bold"},r8={"4xl":{fontSize:["6xl",null,"7xl"],lineHeight:1},"3xl":{fontSize:["5xl",null,"6xl"],lineHeight:1},"2xl":{fontSize:["4xl",null,"5xl"],lineHeight:[1.2,null,1]},xl:{fontSize:["3xl",null,"4xl"],lineHeight:[1.33,null,1.2]},lg:{fontSize:["2xl",null,"3xl"],lineHeight:[1.33,null,1.2]},md:{fontSize:"xl",lineHeight:1.2},sm:{fontSize:"md",lineHeight:1.2},xs:{fontSize:"sm",lineHeight:1.2}},o8={baseStyle:n8,sizes:r8,defaultProps:{size:"xl"}},{definePartsStyle:Fn,defineMultiStyleConfig:a8}=ge(mS.keys),i8=Fn({field:{width:"100%",minWidth:0,outline:0,position:"relative",appearance:"none",transitionProperty:"common",transitionDuration:"normal",_disabled:{opacity:.4,cursor:"not-allowed"}}}),Dn={lg:{fontSize:"lg",px:"4",h:"12",borderRadius:"md"},md:{fontSize:"md",px:"4",h:"10",borderRadius:"md"},sm:{fontSize:"sm",px:"3",h:"8",borderRadius:"sm"},xs:{fontSize:"xs",px:"2",h:"6",borderRadius:"sm"}},s8={lg:Fn({field:Dn.lg,addon:Dn.lg}),md:Fn({field:Dn.md,addon:Dn.md}),sm:Fn({field:Dn.sm,addon:Dn.sm}),xs:Fn({field:Dn.xs,addon:Dn.xs})};function Tp(e){const{focusBorderColor:t,errorBorderColor:n}=e;return{focusBorderColor:t||B("blue.500","blue.300")(e),errorBorderColor:n||B("red.500","red.300")(e)}}var l8=Fn(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=Tp(e);return{field:{border:"1px solid",borderColor:"inherit",bg:"inherit",_hover:{borderColor:B("gray.300","whiteAlpha.400")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:rt(t,r),boxShadow:`0 0 0 1px ${rt(t,r)}`},_focusVisible:{zIndex:1,borderColor:rt(t,n),boxShadow:`0 0 0 1px ${rt(t,n)}`}},addon:{border:"1px solid",borderColor:B("inherit","whiteAlpha.50")(e),bg:B("gray.100","whiteAlpha.300")(e)}}}),u8=Fn(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=Tp(e);return{field:{border:"2px solid",borderColor:"transparent",bg:B("gray.100","whiteAlpha.50")(e),_hover:{bg:B("gray.200","whiteAlpha.100")(e)},_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:rt(t,r)},_focusVisible:{bg:"transparent",borderColor:rt(t,n)}},addon:{border:"2px solid",borderColor:"transparent",bg:B("gray.100","whiteAlpha.50")(e)}}}),c8=Fn(e=>{const{theme:t}=e,{focusBorderColor:n,errorBorderColor:r}=Tp(e);return{field:{borderBottom:"1px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent",_readOnly:{boxShadow:"none !important",userSelect:"all"},_invalid:{borderColor:rt(t,r),boxShadow:`0px 1px 0px 0px ${rt(t,r)}`},_focusVisible:{borderColor:rt(t,n),boxShadow:`0px 1px 0px 0px ${rt(t,n)}`}},addon:{borderBottom:"2px solid",borderColor:"inherit",borderRadius:"0",px:"0",bg:"transparent"}}}),d8=Fn({field:{bg:"transparent",px:"0",height:"auto"},addon:{bg:"transparent",px:"0",height:"auto"}}),f8={outline:l8,filled:u8,flushed:c8,unstyled:d8},ee=a8({baseStyle:i8,sizes:s8,variants:f8,defaultProps:{size:"md",variant:"outline"}}),bc=ie("kbd-bg"),p8={[bc.variable]:"colors.gray.100",_dark:{[bc.variable]:"colors.whiteAlpha.100"},bg:bc.reference,borderRadius:"md",borderWidth:"1px",borderBottomWidth:"3px",fontSize:"0.8em",fontWeight:"bold",lineHeight:"normal",px:"0.4em",whiteSpace:"nowrap"},m8={baseStyle:p8},h8={transitionProperty:"common",transitionDuration:"fast",transitionTimingFunction:"ease-out",cursor:"pointer",textDecoration:"none",outline:"none",color:"inherit",_hover:{textDecoration:"underline"},_focusVisible:{boxShadow:"outline"}},g8={baseStyle:h8},{defineMultiStyleConfig:y8,definePartsStyle:b8}=ge(hS.keys),v8={marginEnd:"2",display:"inline",verticalAlign:"text-bottom"},w8=b8({icon:v8}),S8=y8({baseStyle:w8}),{defineMultiStyleConfig:x8,definePartsStyle:C8}=ge(gS.keys),rn=ie("menu-bg"),vc=ie("menu-shadow"),k8={[rn.variable]:"#fff",[vc.variable]:"shadows.sm",_dark:{[rn.variable]:"colors.gray.700",[vc.variable]:"shadows.dark-lg"},color:"inherit",minW:"3xs",py:"2",zIndex:1,borderRadius:"md",borderWidth:"1px",bg:rn.reference,boxShadow:vc.reference},_8={py:"1.5",px:"3",transitionProperty:"background",transitionDuration:"ultra-fast",transitionTimingFunction:"ease-in",_focus:{[rn.variable]:"colors.gray.100",_dark:{[rn.variable]:"colors.whiteAlpha.100"}},_active:{[rn.variable]:"colors.gray.200",_dark:{[rn.variable]:"colors.whiteAlpha.200"}},_expanded:{[rn.variable]:"colors.gray.100",_dark:{[rn.variable]:"colors.whiteAlpha.100"}},_disabled:{opacity:.4,cursor:"not-allowed"},bg:rn.reference},T8={mx:4,my:2,fontWeight:"semibold",fontSize:"sm"},F8={opacity:.6},E8={border:0,borderBottom:"1px solid",borderColor:"inherit",my:"2",opacity:.6},A8={transitionProperty:"common",transitionDuration:"normal"},P8=C8({button:A8,list:k8,item:_8,groupTitle:T8,command:F8,divider:E8}),q8=x8({baseStyle:P8}),{defineMultiStyleConfig:I8,definePartsStyle:Ud}=ge(yS.keys),R8={bg:"blackAlpha.600",zIndex:"modal"},z8=e=>{const{isCentered:t,scrollBehavior:n}=e;return{display:"flex",zIndex:"modal",justifyContent:"center",alignItems:t?"center":"flex-start",overflow:n==="inside"?"hidden":"auto",overscrollBehaviorY:"none"}},M8=e=>{const{scrollBehavior:t}=e;return{borderRadius:"md",bg:B("white","gray.700")(e),color:"inherit",my:"16",zIndex:"modal",maxH:t==="inside"?"calc(100% - 7.5rem)":void 0,boxShadow:B("lg","dark-lg")(e)}},V8={px:"6",py:"4",fontSize:"xl",fontWeight:"semibold"},L8={position:"absolute",top:"2",insetEnd:"3"},j8=e=>{const{scrollBehavior:t}=e;return{px:"6",py:"2",flex:"1",overflow:t==="inside"?"auto":void 0}},N8={px:"6",py:"4"},B8=Ud(e=>({overlay:R8,dialogContainer:at(z8,e),dialog:at(M8,e),header:V8,closeButton:L8,body:at(j8,e),footer:N8}));function Dt(e){return Ud(e==="full"?{dialog:{maxW:"100vw",minH:"$100vh",my:"0",borderRadius:"0"}}:{dialog:{maxW:e}})}var D8={xs:Dt("xs"),sm:Dt("sm"),md:Dt("md"),lg:Dt("lg"),xl:Dt("xl"),"2xl":Dt("2xl"),"3xl":Dt("3xl"),"4xl":Dt("4xl"),"5xl":Dt("5xl"),"6xl":Dt("6xl"),full:Dt("full")},O8=I8({baseStyle:B8,sizes:D8,defaultProps:{size:"md"}}),$8={letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},lineHeights:{normal:"normal",none:1,shorter:1.25,short:1.375,base:1.5,tall:1.625,taller:"2",3:".75rem",4:"1rem",5:"1.25rem",6:"1.5rem",7:"1.75rem",8:"2rem",9:"2.25rem",10:"2.5rem"},fontWeights:{hairline:100,thin:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800,black:900},fonts:{heading:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',body:'-apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',mono:'SFMono-Regular,Menlo,Monaco,Consolas,"Liberation Mono","Courier New",monospace'},fontSizes:{"3xs":"0.45rem","2xs":"0.625rem",xs:"0.75rem",sm:"0.875rem",md:"1rem",lg:"1.125rem",xl:"1.25rem","2xl":"1.5rem","3xl":"1.875rem","4xl":"2.25rem","5xl":"3rem","6xl":"3.75rem","7xl":"4.5rem","8xl":"6rem","9xl":"8rem"}},Jb=$8,{defineMultiStyleConfig:W8,definePartsStyle:ev}=ge(bS.keys),Fp=Ve("number-input-stepper-width"),tv=Ve("number-input-input-padding"),H8=kn(Fp).add("0.5rem").toString(),wc=Ve("number-input-bg"),Sc=Ve("number-input-color"),xc=Ve("number-input-border-color"),U8={[Fp.variable]:"sizes.6",[tv.variable]:H8},G8=e=>{var n;var t;return(n=(t=at(ee.baseStyle,e))==null?void 0:t.field)!=null?n:{}},K8={width:Fp.reference},Y8={borderStart:"1px solid",borderStartColor:xc.reference,color:Sc.reference,bg:wc.reference,[Sc.variable]:"colors.chakra-body-text",[xc.variable]:"colors.chakra-border-color",_dark:{[Sc.variable]:"colors.whiteAlpha.800",[xc.variable]:"colors.whiteAlpha.300"},_active:{[wc.variable]:"colors.gray.200",_dark:{[wc.variable]:"colors.whiteAlpha.300"}},_disabled:{opacity:.4,cursor:"not-allowed"}},Z8=ev(e=>{var t;return{root:U8,field:(t=at(G8,e))!=null?t:{},stepperGroup:K8,stepper:Y8}});function ds(e){var s;var t,n;const r=(t=ee.sizes)==null?void 0:t[e],o={lg:"md",md:"md",sm:"sm",xs:"sm"},a=(s=(n=r.field)==null?void 0:n.fontSize)!=null?s:"md",i=Jb.fontSizes[a];return ev({field:{...r.field,paddingInlineEnd:tv.reference,verticalAlign:"top"},stepper:{fontSize:kn(i).multiply(.75).toString(),_first:{borderTopEndRadius:o[e]},_last:{borderBottomEndRadius:o[e],mt:"-1px",borderTopWidth:1}}})}var X8={xs:ds("xs"),sm:ds("sm"),md:ds("md"),lg:ds("lg")},Q8=W8({baseStyle:Z8,sizes:X8,variants:ee.variants,defaultProps:ee.defaultProps}),hh,J8={...(hh=ee.baseStyle)==null?void 0:hh.field,textAlign:"center"},e7={lg:{fontSize:"lg",w:12,h:12,borderRadius:"md"},md:{fontSize:"md",w:10,h:10,borderRadius:"md"},sm:{fontSize:"sm",w:8,h:8,borderRadius:"sm"},xs:{fontSize:"xs",w:6,h:6,borderRadius:"sm"}},gh,Jg,t7={outline:e=>{var r;var t,n;return(r=(n=at((t=ee.variants)==null?void 0:t.outline,e))==null?void 0:n.field)!=null?r:{}},flushed:e=>{var r;var t,n;return(r=(n=at((t=ee.variants)==null?void 0:t.flushed,e))==null?void 0:n.field)!=null?r:{}},filled:e=>{var r;var t,n;return(r=(n=at((t=ee.variants)==null?void 0:t.filled,e))==null?void 0:n.field)!=null?r:{}},unstyled:(Jg=(gh=ee.variants)==null?void 0:gh.unstyled.field)!=null?Jg:{}},n7={baseStyle:J8,sizes:e7,variants:t7,defaultProps:ee.defaultProps},{defineMultiStyleConfig:r7,definePartsStyle:o7}=ge(vS.keys),fs=Ve("popper-bg"),a7=Ve("popper-arrow-bg"),yh=Ve("popper-arrow-shadow-color"),i7={zIndex:10},s7={[fs.variable]:"colors.white",bg:fs.reference,[a7.variable]:fs.reference,[yh.variable]:"colors.gray.200",_dark:{[fs.variable]:"colors.gray.700",[yh.variable]:"colors.whiteAlpha.300"},width:"xs",border:"1px solid",borderColor:"inherit",borderRadius:"md",boxShadow:"sm",zIndex:"inherit",_focusVisible:{outline:0,boxShadow:"outline"}},l7={px:3,py:2,borderBottomWidth:"1px"},u7={px:3,py:2},c7={px:3,py:2,borderTopWidth:"1px"},d7={position:"absolute",borderRadius:"md",top:1,insetEnd:2,padding:2},f7=o7({popper:i7,content:s7,header:l7,body:u7,footer:c7,closeButton:d7}),p7=r7({baseStyle:f7}),{defineMultiStyleConfig:m7,definePartsStyle:Sa}=ge(wS.keys),h7=e=>{const{colorScheme:t,theme:n,isIndeterminate:r,hasStripe:o}=e,a=B(uh(),uh("1rem","rgba(0,0,0,0.1)"))(e),i=B(`${t}.500`,`${t}.200`)(e),s=`linear-gradient(
    to right,
    transparent 0%,
    ${rt(n,i)} 50%,
    transparent 100%
  )`;return{...!r&&o&&a,...r?{bgImage:s}:{bgColor:i}}},g7={lineHeight:"1",fontSize:"0.25em",fontWeight:"bold",color:"white"},y7=e=>({bg:B("gray.100","whiteAlpha.300")(e)}),b7=e=>({transitionProperty:"common",transitionDuration:"slow",...h7(e)}),v7=Sa(e=>({label:g7,filledTrack:b7(e),track:y7(e)})),w7={xs:Sa({track:{h:"1"}}),sm:Sa({track:{h:"2"}}),md:Sa({track:{h:"3"}}),lg:Sa({track:{h:"4"}})},S7=m7({sizes:w7,baseStyle:v7,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:x7,definePartsStyle:js}=ge(SS.keys),C7=e=>{var t;const n=(t=at(vl.baseStyle,e))==null?void 0:t.control;return{...n,borderRadius:"full",_checked:{...n==null?void 0:n._checked,_before:{content:'""',display:"inline-block",pos:"relative",w:"50%",h:"50%",borderRadius:"50%",bg:"currentColor"}}}},k7=js(e=>{var t,n,r,o;return{label:(n=(t=vl).baseStyle)==null?void 0:n.call(t,e).label,container:(o=(r=vl).baseStyle)==null?void 0:o.call(r,e).container,control:C7(e)}}),_7={md:js({control:{w:"4",h:"4"},label:{fontSize:"md"}}),lg:js({control:{w:"5",h:"5"},label:{fontSize:"lg"}}),sm:js({control:{width:"3",height:"3"},label:{fontSize:"sm"}})},T7=x7({baseStyle:k7,sizes:_7,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:F7,definePartsStyle:E7}=ge(xS.keys),ps=ie("select-bg"),bh,A7={...(bh=ee.baseStyle)==null?void 0:bh.field,appearance:"none",paddingBottom:"1px",lineHeight:"normal",bg:ps.reference,[ps.variable]:"colors.white",_dark:{[ps.variable]:"colors.gray.700"},"> option, > optgroup":{bg:ps.reference}},P7={width:"6",height:"100%",insetEnd:"2",position:"relative",color:"currentColor",fontSize:"xl",_disabled:{opacity:.5}},q7=E7({field:A7,icon:P7}),ms={paddingInlineEnd:"8"},vh,wh,Sh,xh,Ch,kh,_h,Th,I7={lg:{...(vh=ee.sizes)==null?void 0:vh.lg,field:{...(wh=ee.sizes)==null?void 0:wh.lg.field,...ms}},md:{...(Sh=ee.sizes)==null?void 0:Sh.md,field:{...(xh=ee.sizes)==null?void 0:xh.md.field,...ms}},sm:{...(Ch=ee.sizes)==null?void 0:Ch.sm,field:{...(kh=ee.sizes)==null?void 0:kh.sm.field,...ms}},xs:{...(_h=ee.sizes)==null?void 0:_h.xs,field:{...(Th=ee.sizes)==null?void 0:Th.xs.field,...ms},icon:{insetEnd:"1"}}},R7=F7({baseStyle:q7,sizes:I7,variants:ee.variants,defaultProps:ee.defaultProps}),Cc=ie("skeleton-start-color"),kc=ie("skeleton-end-color"),z7={[Cc.variable]:"colors.gray.100",[kc.variable]:"colors.gray.400",_dark:{[Cc.variable]:"colors.gray.800",[kc.variable]:"colors.gray.600"},background:Cc.reference,borderColor:kc.reference,opacity:.7,borderRadius:"sm"},M7={baseStyle:z7},_c=ie("skip-link-bg"),V7={borderRadius:"md",fontWeight:"semibold",_focusVisible:{boxShadow:"outline",padding:"4",position:"fixed",top:"6",insetStart:"6",[_c.variable]:"colors.white",_dark:{[_c.variable]:"colors.gray.700"},bg:_c.reference}},L7={baseStyle:V7},{defineMultiStyleConfig:j7,definePartsStyle:gu}=ge(CS.keys),pi=ie("slider-thumb-size"),mi=ie("slider-track-size"),Yn=ie("slider-bg"),N7=e=>{const{orientation:t}=e;return{display:"inline-block",position:"relative",cursor:"pointer",_disabled:{opacity:.6,cursor:"default",pointerEvents:"none"},...kp({orientation:t,vertical:{h:"100%"},horizontal:{w:"100%"}})}},B7=e=>({...kp({orientation:e.orientation,horizontal:{h:mi.reference},vertical:{w:mi.reference}}),overflow:"hidden",borderRadius:"sm",[Yn.variable]:"colors.gray.200",_dark:{[Yn.variable]:"colors.whiteAlpha.200"},_disabled:{[Yn.variable]:"colors.gray.300",_dark:{[Yn.variable]:"colors.whiteAlpha.300"}},bg:Yn.reference}),D7=e=>{const{orientation:t}=e;return{...kp({orientation:t,vertical:{left:"50%",transform:"translateX(-50%)",_active:{transform:"translateX(-50%) scale(1.15)"}},horizontal:{top:"50%",transform:"translateY(-50%)",_active:{transform:"translateY(-50%) scale(1.15)"}}}),w:pi.reference,h:pi.reference,display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",outline:0,zIndex:1,borderRadius:"full",bg:"white",boxShadow:"base",border:"1px solid",borderColor:"transparent",transitionProperty:"transform",transitionDuration:"normal",_focusVisible:{boxShadow:"outline"},_disabled:{bg:"gray.300"}}},O7=e=>{const{colorScheme:t}=e;return{width:"inherit",height:"inherit",[Yn.variable]:`colors.${t}.500`,_dark:{[Yn.variable]:`colors.${t}.200`},bg:Yn.reference}},$7=gu(e=>({container:N7(e),track:B7(e),thumb:D7(e),filledTrack:O7(e)})),W7=gu({container:{[pi.variable]:"sizes.4",[mi.variable]:"sizes.1"}}),H7=gu({container:{[pi.variable]:"sizes.3.5",[mi.variable]:"sizes.1"}}),U7=gu({container:{[pi.variable]:"sizes.2.5",[mi.variable]:"sizes.0.5"}}),G7={lg:W7,md:H7,sm:U7},K7=j7({baseStyle:$7,sizes:G7,defaultProps:{size:"md",colorScheme:"blue"}}),_r=Ve("spinner-size"),Y7={width:[_r.reference],height:[_r.reference]},Z7={xs:{[_r.variable]:"sizes.3"},sm:{[_r.variable]:"sizes.4"},md:{[_r.variable]:"sizes.6"},lg:{[_r.variable]:"sizes.8"},xl:{[_r.variable]:"sizes.12"}},X7={baseStyle:Y7,sizes:Z7,defaultProps:{size:"md"}},{defineMultiStyleConfig:Q7,definePartsStyle:nv}=ge(kS.keys),J7={fontWeight:"medium"},ek={opacity:.8,marginBottom:"2"},tk={verticalAlign:"baseline",fontWeight:"semibold"},nk={marginEnd:1,w:"3.5",h:"3.5",verticalAlign:"middle"},rk=nv({container:{},label:J7,helpText:ek,number:tk,icon:nk}),ok={md:nv({label:{fontSize:"sm"},helpText:{fontSize:"sm"},number:{fontSize:"2xl"}})},ak=Q7({baseStyle:rk,sizes:ok,defaultProps:{size:"md"}}),{defineMultiStyleConfig:ik,definePartsStyle:Ns}=ge(_S.keys),Ma=Ve("switch-track-width"),Mr=Ve("switch-track-height"),Tc=Ve("switch-track-diff"),sk=kn.subtract(Ma,Mr),Gd=Ve("switch-thumb-x"),fa=Ve("switch-bg"),lk=e=>{const{colorScheme:t}=e;return{borderRadius:"full",p:"0.5",width:[Ma.reference],height:[Mr.reference],transitionProperty:"common",transitionDuration:"fast",[fa.variable]:"colors.gray.300",_dark:{[fa.variable]:"colors.whiteAlpha.400"},_focusVisible:{boxShadow:"outline"},_disabled:{opacity:.4,cursor:"not-allowed"},_checked:{[fa.variable]:`colors.${t}.500`,_dark:{[fa.variable]:`colors.${t}.200`}},bg:fa.reference}},uk={bg:"white",transitionProperty:"transform",transitionDuration:"normal",borderRadius:"inherit",width:[Mr.reference],height:[Mr.reference],_checked:{transform:`translateX(${Gd.reference})`}},ck=Ns(e=>({container:{[Tc.variable]:sk,[Gd.variable]:Tc.reference,_rtl:{[Gd.variable]:kn(Tc).negate().toString()}},track:lk(e),thumb:uk})),dk={sm:Ns({container:{[Ma.variable]:"1.375rem",[Mr.variable]:"sizes.3"}}),md:Ns({container:{[Ma.variable]:"1.875rem",[Mr.variable]:"sizes.4"}}),lg:Ns({container:{[Ma.variable]:"2.875rem",[Mr.variable]:"sizes.6"}})},fk=ik({baseStyle:ck,sizes:dk,defaultProps:{size:"md",colorScheme:"blue"}}),{defineMultiStyleConfig:pk,definePartsStyle:Po}=ge(TS.keys),mk=Po({table:{fontVariantNumeric:"lining-nums tabular-nums",borderCollapse:"collapse",width:"full"},th:{fontFamily:"heading",fontWeight:"bold",textTransform:"uppercase",letterSpacing:"wider",textAlign:"start"},td:{textAlign:"start"},caption:{mt:4,fontFamily:"heading",textAlign:"center",fontWeight:"medium"}}),wl={"&[data-is-numeric=true]":{textAlign:"end"}},hk=Po(e=>{const{colorScheme:t}=e;return{th:{color:B("gray.600","gray.400")(e),borderBottom:"1px",borderColor:B(`${t}.100`,`${t}.700`)(e),...wl},td:{borderBottom:"1px",borderColor:B(`${t}.100`,`${t}.700`)(e),...wl},caption:{color:B("gray.600","gray.100")(e)},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),gk=Po(e=>{const{colorScheme:t}=e;return{th:{color:B("gray.600","gray.400")(e),borderBottom:"1px",borderColor:B(`${t}.100`,`${t}.700`)(e),...wl},td:{borderBottom:"1px",borderColor:B(`${t}.100`,`${t}.700`)(e),...wl},caption:{color:B("gray.600","gray.100")(e)},tbody:{tr:{"&:nth-of-type(odd)":{"th, td":{borderBottomWidth:"1px",borderColor:B(`${t}.100`,`${t}.700`)(e)},td:{background:B(`${t}.100`,`${t}.700`)(e)}}}},tfoot:{tr:{"&:last-of-type":{th:{borderBottomWidth:0}}}}}}),yk={simple:hk,striped:gk,unstyled:{}},bk={sm:Po({th:{px:"4",py:"1",lineHeight:"4",fontSize:"xs"},td:{px:"4",py:"2",fontSize:"sm",lineHeight:"4"},caption:{px:"4",py:"2",fontSize:"xs"}}),md:Po({th:{px:"6",py:"3",lineHeight:"4",fontSize:"xs"},td:{px:"6",py:"4",lineHeight:"5"},caption:{px:"6",py:"2",fontSize:"sm"}}),lg:Po({th:{px:"8",py:"4",lineHeight:"5",fontSize:"sm"},td:{px:"8",py:"5",lineHeight:"6"},caption:{px:"6",py:"2",fontSize:"md"}})},vk=pk({baseStyle:mk,variants:yk,sizes:bk,defaultProps:{variant:"simple",size:"md",colorScheme:"gray"}}),ct=ie("tabs-color"),Ut=ie("tabs-bg"),hs=ie("tabs-border-color"),{defineMultiStyleConfig:wk,definePartsStyle:pn}=ge(FS.keys),Sk=e=>{const{orientation:t}=e;return{display:t==="vertical"?"flex":"block"}},xk=e=>{const{isFitted:t}=e;return{flex:t?1:void 0,transitionProperty:"common",transitionDuration:"normal",_focusVisible:{zIndex:1,boxShadow:"outline"},_disabled:{cursor:"not-allowed",opacity:.4}}},Ck=e=>{const{align:t="start",orientation:n}=e;return{justifyContent:{end:"flex-end",center:"center",start:"flex-start"}[t],flexDirection:n==="vertical"?"column":"row"}},kk={p:4},_k=pn(e=>({root:Sk(e),tab:xk(e),tablist:Ck(e),tabpanel:kk})),Tk={sm:pn({tab:{py:1,px:4,fontSize:"sm"}}),md:pn({tab:{fontSize:"md",py:2,px:4}}),lg:pn({tab:{fontSize:"lg",py:3,px:4}})},Fk=pn(e=>{const{colorScheme:t,orientation:n}=e,r=n==="vertical",o=n==="vertical"?"borderStart":"borderBottom",a=r?"marginStart":"marginBottom";return{tablist:{[o]:"2px solid",borderColor:"inherit"},tab:{[o]:"2px solid",borderColor:"transparent",[a]:"-2px",_selected:{[ct.variable]:`colors.${t}.600`,_dark:{[ct.variable]:`colors.${t}.300`},borderColor:"currentColor"},_active:{[Ut.variable]:"colors.gray.200",_dark:{[Ut.variable]:"colors.whiteAlpha.300"}},_disabled:{_active:{bg:"none"}},color:ct.reference,bg:Ut.reference}}}),Ek=pn(e=>{const{colorScheme:t}=e;return{tab:{borderTopRadius:"md",border:"1px solid",borderColor:"transparent",mb:"-1px",[hs.variable]:"transparent",_selected:{[ct.variable]:`colors.${t}.600`,[hs.variable]:"colors.white",_dark:{[ct.variable]:`colors.${t}.300`,[hs.variable]:"colors.gray.800"},borderColor:"inherit",borderBottomColor:hs.reference},color:ct.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),Ak=pn(e=>{const{colorScheme:t}=e;return{tab:{border:"1px solid",borderColor:"inherit",[Ut.variable]:"colors.gray.50",_dark:{[Ut.variable]:"colors.whiteAlpha.50"},mb:"-1px",_notLast:{marginEnd:"-1px"},_selected:{[Ut.variable]:"colors.white",[ct.variable]:`colors.${t}.600`,_dark:{[Ut.variable]:"colors.gray.800",[ct.variable]:`colors.${t}.300`},borderColor:"inherit",borderTopColor:"currentColor",borderBottomColor:"transparent"},color:ct.reference,bg:Ut.reference},tablist:{mb:"-1px",borderBottom:"1px solid",borderColor:"inherit"}}}),Pk=pn(e=>{const{colorScheme:t,theme:n}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",color:"gray.600",_selected:{color:rt(n,`${t}.700`),bg:rt(n,`${t}.100`)}}}}),qk=pn(e=>{const{colorScheme:t}=e;return{tab:{borderRadius:"full",fontWeight:"semibold",[ct.variable]:"colors.gray.600",_dark:{[ct.variable]:"inherit"},_selected:{[ct.variable]:"colors.white",[Ut.variable]:`colors.${t}.600`,_dark:{[ct.variable]:"colors.gray.800",[Ut.variable]:`colors.${t}.300`}},color:ct.reference,bg:Ut.reference}}}),Ik=pn({}),Rk={line:Fk,enclosed:Ek,"enclosed-colored":Ak,"soft-rounded":Pk,"solid-rounded":qk,unstyled:Ik},zk=wk({baseStyle:_k,sizes:Tk,variants:Rk,defaultProps:{size:"md",variant:"line",colorScheme:"blue"}}),{defineMultiStyleConfig:Mk,definePartsStyle:Vr}=ge(ES.keys),Vk={fontWeight:"medium",lineHeight:1.2,outline:0,borderRadius:"md",_focusVisible:{boxShadow:"outline"}},Lk={lineHeight:1.2,overflow:"visible"},jk={fontSize:"lg",w:"5",h:"5",transitionProperty:"common",transitionDuration:"normal",borderRadius:"full",marginStart:"1.5",marginEnd:"-1",opacity:.5,_disabled:{opacity:.4},_focusVisible:{boxShadow:"outline",bg:"rgba(0, 0, 0, 0.14)"},_hover:{opacity:.8},_active:{opacity:1}},Nk=Vr({container:Vk,label:Lk,closeButton:jk}),Bk={sm:Vr({container:{minH:"5",minW:"5",fontSize:"xs",px:"2"},closeButton:{marginEnd:"-2px",marginStart:"0.35rem"}}),md:Vr({container:{minH:"6",minW:"6",fontSize:"sm",px:"2"}}),lg:Vr({container:{minH:"8",minW:"8",fontSize:"md",px:"3"}})},Dk={subtle:Vr(e=>{var t;return{container:(t=Ia.variants)==null?void 0:t.subtle(e)}}),solid:Vr(e=>{var t;return{container:(t=Ia.variants)==null?void 0:t.solid(e)}}),outline:Vr(e=>{var t;return{container:(t=Ia.variants)==null?void 0:t.outline(e)}})},Ok=Mk({variants:Dk,baseStyle:Nk,sizes:Bk,defaultProps:{size:"md",variant:"subtle",colorScheme:"gray"}}),Fh,$k={...(Fh=ee.baseStyle)==null?void 0:Fh.field,paddingY:"2",minHeight:"20",lineHeight:"short",verticalAlign:"top"},Eh,ey,Wk={outline:e=>{var n;var t;return(n=(t=ee.variants)==null?void 0:t.outline(e).field)!=null?n:{}},flushed:e=>{var n;var t;return(n=(t=ee.variants)==null?void 0:t.flushed(e).field)!=null?n:{}},filled:e=>{var n;var t;return(n=(t=ee.variants)==null?void 0:t.filled(e).field)!=null?n:{}},unstyled:(ey=(Eh=ee.variants)==null?void 0:Eh.unstyled.field)!=null?ey:{}},Ah,Ph,qh,Ih,ty,ny,ry,oy,Hk={xs:(ty=(Ah=ee.sizes)==null?void 0:Ah.xs.field)!=null?ty:{},sm:(ny=(Ph=ee.sizes)==null?void 0:Ph.sm.field)!=null?ny:{},md:(ry=(qh=ee.sizes)==null?void 0:qh.md.field)!=null?ry:{},lg:(oy=(Ih=ee.sizes)==null?void 0:Ih.lg.field)!=null?oy:{}},Uk={baseStyle:$k,sizes:Hk,variants:Wk,defaultProps:{size:"md",variant:"outline"}},gs=Ve("tooltip-bg"),Fc=Ve("tooltip-fg"),Gk=Ve("popper-arrow-bg"),Kk={bg:gs.reference,color:Fc.reference,[gs.variable]:"colors.gray.700",[Fc.variable]:"colors.whiteAlpha.900",_dark:{[gs.variable]:"colors.gray.300",[Fc.variable]:"colors.gray.900"},[Gk.variable]:gs.reference,px:"2",py:"0.5",borderRadius:"sm",fontWeight:"medium",fontSize:"sm",boxShadow:"md",maxW:"xs",zIndex:"tooltip"},Yk={baseStyle:Kk},Zk={Accordion:px,Alert:Sx,Avatar:Ix,Badge:Ia,Breadcrumb:Ox,Button:Xx,Checkbox:vl,CloseButton:fC,Code:gC,Container:bC,Divider:CC,Drawer:zC,Editable:DC,Form:GC,FormError:JC,FormLabel:t8,Heading:o8,Input:ee,Kbd:m8,Link:g8,List:S8,Menu:q8,Modal:O8,NumberInput:Q8,PinInput:n7,Popover:p7,Progress:S7,Radio:T7,Select:R7,Skeleton:M7,SkipLink:L7,Slider:K7,Spinner:X7,Stat:ak,Switch:fk,Table:vk,Tabs:zk,Tag:Ok,Textarea:Uk,Tooltip:Yk,Card:nC},Xk={none:0,"1px":"1px solid","2px":"2px solid","4px":"4px solid","8px":"8px solid"},Qk=Xk,Jk={base:"0em",sm:"30em",md:"48em",lg:"62em",xl:"80em","2xl":"96em"},e_=Jk,t_={transparent:"transparent",current:"currentColor",black:"#000000",white:"#FFFFFF",whiteAlpha:{50:"rgba(255, 255, 255, 0.04)",100:"rgba(255, 255, 255, 0.06)",200:"rgba(255, 255, 255, 0.08)",300:"rgba(255, 255, 255, 0.16)",400:"rgba(255, 255, 255, 0.24)",500:"rgba(255, 255, 255, 0.36)",600:"rgba(255, 255, 255, 0.48)",700:"rgba(255, 255, 255, 0.64)",800:"rgba(255, 255, 255, 0.80)",900:"rgba(255, 255, 255, 0.92)"},blackAlpha:{50:"rgba(0, 0, 0, 0.04)",100:"rgba(0, 0, 0, 0.06)",200:"rgba(0, 0, 0, 0.08)",300:"rgba(0, 0, 0, 0.16)",400:"rgba(0, 0, 0, 0.24)",500:"rgba(0, 0, 0, 0.36)",600:"rgba(0, 0, 0, 0.48)",700:"rgba(0, 0, 0, 0.64)",800:"rgba(0, 0, 0, 0.80)",900:"rgba(0, 0, 0, 0.92)"},gray:{50:"#F7FAFC",100:"#EDF2F7",200:"#E2E8F0",300:"#CBD5E0",400:"#A0AEC0",500:"#718096",600:"#4A5568",700:"#2D3748",800:"#1A202C",900:"#171923"},red:{50:"#FFF5F5",100:"#FED7D7",200:"#FEB2B2",300:"#FC8181",400:"#F56565",500:"#E53E3E",600:"#C53030",700:"#9B2C2C",800:"#822727",900:"#63171B"},orange:{50:"#FFFAF0",100:"#FEEBC8",200:"#FBD38D",300:"#F6AD55",400:"#ED8936",500:"#DD6B20",600:"#C05621",700:"#9C4221",800:"#7B341E",900:"#652B19"},yellow:{50:"#FFFFF0",100:"#FEFCBF",200:"#FAF089",300:"#F6E05E",400:"#ECC94B",500:"#D69E2E",600:"#B7791F",700:"#975A16",800:"#744210",900:"#5F370E"},green:{50:"#F0FFF4",100:"#C6F6D5",200:"#9AE6B4",300:"#68D391",400:"#48BB78",500:"#38A169",600:"#2F855A",700:"#276749",800:"#22543D",900:"#1C4532"},teal:{50:"#E6FFFA",100:"#B2F5EA",200:"#81E6D9",300:"#4FD1C5",400:"#38B2AC",500:"#319795",600:"#2C7A7B",700:"#285E61",800:"#234E52",900:"#1D4044"},blue:{50:"#ebf8ff",100:"#bee3f8",200:"#90cdf4",300:"#63b3ed",400:"#4299e1",500:"#3182ce",600:"#2b6cb0",700:"#2c5282",800:"#2a4365",900:"#1A365D"},cyan:{50:"#EDFDFD",100:"#C4F1F9",200:"#9DECF9",300:"#76E4F7",400:"#0BC5EA",500:"#00B5D8",600:"#00A3C4",700:"#0987A0",800:"#086F83",900:"#065666"},purple:{50:"#FAF5FF",100:"#E9D8FD",200:"#D6BCFA",300:"#B794F4",400:"#9F7AEA",500:"#805AD5",600:"#6B46C1",700:"#553C9A",800:"#44337A",900:"#322659"},pink:{50:"#FFF5F7",100:"#FED7E2",200:"#FBB6CE",300:"#F687B3",400:"#ED64A6",500:"#D53F8C",600:"#B83280",700:"#97266D",800:"#702459",900:"#521B41"},linkedin:{50:"#E8F4F9",100:"#CFEDFB",200:"#9BDAF3",300:"#68C7EC",400:"#34B3E4",500:"#00A0DC",600:"#008CC9",700:"#0077B5",800:"#005E93",900:"#004471"},facebook:{50:"#E8F4F9",100:"#D9DEE9",200:"#B7C2DA",300:"#6482C0",400:"#4267B2",500:"#385898",600:"#314E89",700:"#29487D",800:"#223B67",900:"#1E355B"},messenger:{50:"#D0E6FF",100:"#B9DAFF",200:"#A2CDFF",300:"#7AB8FF",400:"#2E90FF",500:"#0078FF",600:"#0063D1",700:"#0052AC",800:"#003C7E",900:"#002C5C"},whatsapp:{50:"#dffeec",100:"#b9f5d0",200:"#90edb3",300:"#65e495",400:"#3cdd78",500:"#22c35e",600:"#179848",700:"#0c6c33",800:"#01421c",900:"#001803"},twitter:{50:"#E5F4FD",100:"#C8E9FB",200:"#A8DCFA",300:"#83CDF7",400:"#57BBF5",500:"#1DA1F2",600:"#1A94DA",700:"#1681BF",800:"#136B9E",900:"#0D4D71"},telegram:{50:"#E3F2F9",100:"#C5E4F3",200:"#A2D4EC",300:"#7AC1E4",400:"#47A9DA",500:"#0088CC",600:"#007AB8",700:"#006BA1",800:"#005885",900:"#003F5E"}},n_=t_,r_={none:"0",sm:"0.125rem",base:"0.25rem",md:"0.375rem",lg:"0.5rem",xl:"0.75rem","2xl":"1rem","3xl":"1.5rem",full:"9999px"},o_=r_,a_={xs:"0 0 0 1px rgba(0, 0, 0, 0.05)",sm:"0 1px 2px 0 rgba(0, 0, 0, 0.05)",base:"0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",md:"0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",lg:"0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",xl:"0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)","2xl":"0 25px 50px -12px rgba(0, 0, 0, 0.25)",outline:"0 0 0 3px rgba(66, 153, 225, 0.6)",inner:"inset 0 2px 4px 0 rgba(0,0,0,0.06)",none:"none","dark-lg":"rgba(0, 0, 0, 0.1) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px 5px 10px, rgba(0, 0, 0, 0.4) 0px 15px 40px"},i_=a_,s_={common:"background-color, border-color, color, fill, stroke, opacity, box-shadow, transform",colors:"background-color, border-color, color, fill, stroke",dimensions:"width, height",position:"left, right, top, bottom",background:"background-color, background-image, background-position"},l_={"ease-in":"cubic-bezier(0.4, 0, 1, 1)","ease-out":"cubic-bezier(0, 0, 0.2, 1)","ease-in-out":"cubic-bezier(0.4, 0, 0.2, 1)"},u_={"ultra-fast":"50ms",faster:"100ms",fast:"150ms",normal:"200ms",slow:"300ms",slower:"400ms","ultra-slow":"500ms"},c_={property:s_,easing:l_,duration:u_},d_=c_,f_={hide:-1,auto:"auto",base:0,docked:10,dropdown:1e3,sticky:1100,banner:1200,overlay:1300,modal:1400,popover:1500,skipLink:1600,toast:1700,tooltip:1800},p_=f_,m_={none:0,sm:"4px",base:"8px",md:"12px",lg:"16px",xl:"24px","2xl":"40px","3xl":"64px"},h_=m_,g_={breakpoints:e_,zIndices:p_,radii:o_,blur:h_,colors:n_,...Jb,sizes:Zb,shadows:i_,space:Yb,borders:Qk,transition:d_},y_={colors:{"chakra-body-text":{_light:"gray.800",_dark:"whiteAlpha.900"},"chakra-body-bg":{_light:"white",_dark:"gray.800"},"chakra-border-color":{_light:"gray.200",_dark:"whiteAlpha.300"},"chakra-subtle-bg":{_light:"gray.100",_dark:"gray.700"},"chakra-placeholder-color":{_light:"gray.500",_dark:"whiteAlpha.400"}}},b_={global:{body:{fontFamily:"body",color:"chakra-body-text",bg:"chakra-body-bg",transitionProperty:"background-color",transitionDuration:"normal",lineHeight:"base"},"*::placeholder":{color:"chakra-placeholder-color"},"*, *::before, &::after":{borderColor:"chakra-border-color",wordWrap:"break-word"}}},v_="ltr",w_={useSystemColorMode:!1,initialColorMode:"light",cssVarPrefix:"chakra"},S_={semanticTokens:y_,direction:v_,...g_,components:Zk,styles:b_,config:w_},x_=typeof Element<"u",C_=typeof Map=="function",k_=typeof Set=="function",__=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Bs(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,o;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Bs(e[r],t[r]))return!1;return!0}var a;if(C_&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;for(a=e.entries();!(r=a.next()).done;)if(!Bs(r.value[1],t.get(r.value[0])))return!1;return!0}if(k_&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(a=e.entries();!(r=a.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(__&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf)return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString)return e.toString()===t.toString();if(o=Object.keys(e),n=o.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,o[r]))return!1;if(x_&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((o[r]==="_owner"||o[r]==="__v"||o[r]==="__o")&&e.$$typeof)&&!Bs(e[o[r]],t[o[r]]))return!1;return!0}return e!==e&&t!==t}var T_=function(t,n){try{return Bs(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};function rv(){const e=w.exports.useContext(di);if(!e)throw Error("useTheme: `theme` is undefined. Seems you forgot to wrap your app in `<ChakraProvider />` or `<ThemeProvider />`");return e}function F_(){const e=pp(),t=rv();return{...e,theme:t}}function E_(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__breakpoints)==null?void 0:s.asArray)==null?void 0:l[i]};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function A_(e,t,n){var o,a;if(t==null)return t;const r=i=>{var s,l;return(l=(s=e.__cssMap)==null?void 0:s[i])==null?void 0:l.value};return(a=(o=r(t))!=null?o:r(n))!=null?a:n}function P_(e,t,n){const r=Array.isArray(t)?t:[t],o=Array.isArray(n)?n:[n];return a=>{const i=o.filter(Boolean),s=r.map((l,u)=>{var d,f;if(e==="breakpoints")return E_(a,l,(d=i[u])!=null?d:l);const c=`${e}.${l}`;return A_(a,c,(f=i[u])!=null?f:l)});return Array.isArray(t)?s:s[0]}}function q_(e){const{cssVarsRoot:t,theme:n,children:r}=e,o=w.exports.useMemo(()=>N6(n),[n]);return W(H4,{theme:o,children:[F(I_,{root:t}),r]})}function I_({root:e=":host, :root"}){const t=[e,"[data-theme]"].join(",");return F(pu,{styles:n=>({[t]:n.__cssVars})})}X4({name:"StylesContext",errorMessage:"useStyles: `styles` is undefined. Seems you forgot to wrap the components in `<StylesProvider />` "});function R_(){const{colorMode:e}=pp();return F(pu,{styles:t=>{const n=$b(t,"styles.global"),r=Ub(n,{theme:t,colorMode:e});return r?kb(r)(t):void 0}})}var z_=new Set([...B6,"textStyle","layerStyle","apply","noOfLines","focusBorderColor","errorBorderColor","as","__css","css","sx"]),M_=new Set(["htmlWidth","htmlHeight","htmlSize"]);function V_(e){return M_.has(e)||!z_.has(e)}var L_=({baseStyle:e})=>t=>{const{theme:n,css:r,__css:o,sx:a,...i}=t,s=Wb(i,(d,f)=>O6(f)),l=Ub(e,t),u=Object.assign({},o,l,Hb(s),a),c=kb(u)(t.theme);return r?[c,r]:c};function Ec(e,t){const{baseStyle:n,...r}=t!=null?t:{};r.shouldForwardProp||(r.shouldForwardProp=V_);const o=L_({baseStyle:n}),a=$d(e,r)(o);return R.forwardRef(function(l,u){const{colorMode:c,forced:d}=pp();return R.createElement(a,{ref:u,"data-theme":d?c:void 0,...l})})}function N(e){return w.exports.forwardRef(e)}function ov(e,t={}){var c;const{styleConfig:n,...r}=t,{theme:o,colorMode:a}=F_(),i=e?$b(o,`components.${e}`):void 0,s=n||i,l=ln({theme:o,colorMode:a},(c=s==null?void 0:s.defaultProps)!=null?c:{},Hb(K4(r,["children"]))),u=w.exports.useRef({});if(s){const f=Q6(s)(l);T_(u.current,f)||(u.current=f)}return u.current}function gt(e,t={}){return ov(e,t)}function Wr(e,t={}){return ov(e,t)}function j_(){const e=new Map;return new Proxy(Ec,{apply(t,n,r){return Ec(...r)},get(t,n){return e.has(n)||e.set(n,Ec(n)),e.get(n)}})}var L=j_();function N_(e,t){return`${e} returned \`undefined\`. Seems you forgot to wrap component within ${t}`}function Xt(e={}){const{name:t,strict:n=!0,hookName:r="useContext",providerName:o="Provider",errorMessage:a}=e,i=w.exports.createContext(void 0);i.displayName=t;function s(){var l;const u=w.exports.useContext(i);if(!u&&n){const c=new Error(a!=null?a:N_(r,o));throw c.name="ContextError",(l=Error.captureStackTrace)==null||l.call(Error,c,s),c}return u}return[i.Provider,s,i]}function B_(e,t){if(e!=null){if(typeof e=="function"){e(t);return}try{e.current=t}catch{throw new Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function hi(...e){return t=>{e.forEach(n=>{B_(n,t)})}}function D_(...e){return w.exports.useMemo(()=>hi(...e),e)}var Ae=(...e)=>e.filter(Boolean).join(" "),Rh={path:W("g",{stroke:"currentColor",strokeWidth:"1.5",children:[F("path",{strokeLinecap:"round",fill:"none",d:"M9,9a3,3,0,1,1,4,2.829,1.5,1.5,0,0,0-1,1.415V14.25"}),F("path",{fill:"currentColor",strokeLinecap:"round",d:"M12,17.25a.375.375,0,1,0,.375.375A.375.375,0,0,0,12,17.25h0"}),F("circle",{fill:"none",strokeMiterlimit:"10",cx:"12",cy:"12",r:"11.25"})]}),viewBox:"0 0 24 24"},Hr=N((e,t)=>{const{as:n,viewBox:r,color:o="currentColor",focusable:a=!1,children:i,className:s,__css:l,...u}=e,c=Ae("chakra-icon",s),d=gt("Icon",e),f={w:"1em",h:"1em",display:"inline-block",lineHeight:"1em",flexShrink:0,color:o,...l,...d},p={ref:t,focusable:a,className:c,__css:f},y=r!=null?r:Rh.viewBox;if(n&&typeof n!="string")return R.createElement(L.svg,{as:n,...p,...u});const v=i!=null?i:Rh.path;return R.createElement(L.svg,{verticalAlign:"middle",viewBox:y,...p,...u},v)});Hr.displayName="Icon";function lr(e,t=[]){const n=w.exports.useRef(e);return w.exports.useEffect(()=>{n.current=e}),w.exports.useCallback((...r)=>{var o;return(o=n.current)==null?void 0:o.call(n,...r)},t)}function O_(e){const{value:t,defaultValue:n,onChange:r,shouldUpdate:o=(f,p)=>f!==p}=e,a=lr(r),i=lr(o),[s,l]=w.exports.useState(n),u=t!==void 0,c=u?t:s,d=lr(f=>{const y=typeof f=="function"?f(c):f;!i(c,y)||(u||l(y),a(y))},[u,a,c,i]);return[c,d]}const Ep=w.exports.createContext({transformPagePoint:e=>e,isStatic:!1,reducedMotion:"never"}),yu=w.exports.createContext({});function $_(){return w.exports.useContext(yu).visualElement}const Ko=w.exports.createContext(null),Ur=typeof document<"u",Sl=Ur?w.exports.useLayoutEffect:w.exports.useEffect,av=w.exports.createContext({strict:!1});function W_(e,t,n,r){const o=$_(),a=w.exports.useContext(av),i=w.exports.useContext(Ko),s=w.exports.useContext(Ep).reducedMotion,l=w.exports.useRef();r=r||a.renderer,!l.current&&r&&(l.current=r(e,{visualState:t,parent:o,props:n,presenceId:i?i.id:void 0,blockInitialAnimation:i?i.initial===!1:!1,reducedMotionConfig:s}));const u=l.current;return Sl(()=>{u&&u.render()}),w.exports.useEffect(()=>{u&&u.animationState&&u.animationState.animateChanges()}),Sl(()=>()=>u&&u.notify("Unmount"),[]),u}function ho(e){return typeof e=="object"&&Object.prototype.hasOwnProperty.call(e,"current")}function H_(e,t,n){return w.exports.useCallback(r=>{r&&e.mount&&e.mount(r),t&&(r?t.mount(r):t.unmount()),n&&(typeof n=="function"?n(r):ho(n)&&(n.current=r))},[t])}function gi(e){return typeof e=="string"||Array.isArray(e)}function bu(e){return typeof e=="object"&&typeof e.start=="function"}const U_=["initial","animate","exit","whileHover","whileDrag","whileTap","whileFocus","whileInView"];function vu(e){return bu(e.animate)||U_.some(t=>gi(e[t]))}function iv(e){return Boolean(vu(e)||e.variants)}function G_(e,t){if(vu(e)){const{initial:n,animate:r}=e;return{initial:n===!1||gi(n)?n:void 0,animate:gi(r)?r:void 0}}return e.inherit!==!1?t:{}}function K_(e){const{initial:t,animate:n}=G_(e,w.exports.useContext(yu));return w.exports.useMemo(()=>({initial:t,animate:n}),[zh(t),zh(n)])}function zh(e){return Array.isArray(e)?e.join(" "):e}const Sn=e=>({isEnabled:t=>e.some(n=>!!t[n])}),yi={measureLayout:Sn(["layout","layoutId","drag"]),animation:Sn(["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"]),exit:Sn(["exit"]),drag:Sn(["drag","dragControls"]),focus:Sn(["whileFocus"]),hover:Sn(["whileHover","onHoverStart","onHoverEnd"]),tap:Sn(["whileTap","onTap","onTapStart","onTapCancel"]),pan:Sn(["onPan","onPanStart","onPanSessionStart","onPanEnd"]),inView:Sn(["whileInView","onViewportEnter","onViewportLeave"])};function Y_(e){for(const t in e)t==="projectionNodeConstructor"?yi.projectionNodeConstructor=e[t]:yi[t].Component=e[t]}function wu(e){const t=w.exports.useRef(null);return t.current===null&&(t.current=e()),t.current}const Va={hasAnimatedSinceResize:!0,hasEverUpdated:!1};let Z_=1;function X_(){return wu(()=>{if(Va.hasEverUpdated)return Z_++})}const Ap=w.exports.createContext({});class Q_ extends R.Component{getSnapshotBeforeUpdate(){const{visualElement:t,props:n}=this.props;return t&&t.setProps(n),null}componentDidUpdate(){}render(){return this.props.children}}const sv=w.exports.createContext({}),J_=Symbol.for("motionComponentSymbol");function eT({preloadedFeatures:e,createVisualElement:t,projectionNodeConstructor:n,useRender:r,useVisualState:o,Component:a}){e&&Y_(e);function i(l,u){const c={...w.exports.useContext(Ep),...l,layoutId:tT(l)},{isStatic:d}=c;let f=null;const p=K_(l),y=d?void 0:X_(),v=o(l,d);if(!d&&Ur){p.visualElement=W_(a,v,c,t);const k=w.exports.useContext(av).strict,g=w.exports.useContext(sv);p.visualElement&&(f=p.visualElement.loadFeatures(c,k,e,y,n||yi.projectionNodeConstructor,g))}return W(Q_,{visualElement:p.visualElement,props:c,children:[f,F(yu.Provider,{value:p,children:r(a,l,y,H_(v,p.visualElement,u),v,d,p.visualElement)})]})}const s=w.exports.forwardRef(i);return s[J_]=a,s}function tT({layoutId:e}){const t=w.exports.useContext(Ap).id;return t&&e!==void 0?t+"-"+e:e}function nT(e){function t(r,o={}){return eT(e(r,o))}if(typeof Proxy>"u")return t;const n=new Map;return new Proxy(t,{get:(r,o)=>(n.has(o)||n.set(o,t(o)),n.get(o))})}const rT=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","text","tspan","use","view"];function Pp(e){return typeof e!="string"||e.includes("-")?!1:!!(rT.indexOf(e)>-1||/[A-Z]/.test(e))}const xl={};function oT(e){Object.assign(xl,e)}const Cl=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Yo=new Set(Cl);function lv(e,{layout:t,layoutId:n}){return Yo.has(e)||e.startsWith("origin")||(t||n!==void 0)&&(!!xl[e]||e==="opacity")}const hn=e=>!!(e!=null&&e.getVelocity),aT={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},iT=(e,t)=>Cl.indexOf(e)-Cl.indexOf(t);function sT({transform:e,transformKeys:t},{enableHardwareAcceleration:n=!0,allowTransformNone:r=!0},o,a){let i="";t.sort(iT);for(const s of t)i+=`${aT[s]||s}(${e[s]}) `;return n&&!e.z&&(i+="translateZ(0)"),i=i.trim(),a?i=a(e,o?"":i):r&&o&&(i="none"),i}function uv(e){return e.startsWith("--")}const lT=(e,t)=>t&&typeof e=="number"?t.transform(e):e,cv=(e,t)=>n=>Math.max(Math.min(n,t),e),La=e=>e%1?Number(e.toFixed(5)):e,bi=/(-)?([\d]*\.?[\d])+/g,Kd=/(#[0-9a-f]{6}|#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))/gi,uT=/^(#[0-9a-f]{3}|#(?:[0-9a-f]{2}){2,4}|(rgb|hsl)a?\((-?[\d\.]+%?[,\s]+){2}(-?[\d\.]+%?)\s*[\,\/]?\s*[\d\.]*%?\))$/i;function Ai(e){return typeof e=="string"}const Gr={test:e=>typeof e=="number",parse:parseFloat,transform:e=>e},ja=Object.assign(Object.assign({},Gr),{transform:cv(0,1)}),ys=Object.assign(Object.assign({},Gr),{default:1}),Pi=e=>({test:t=>Ai(t)&&t.endsWith(e)&&t.split(" ").length===1,parse:parseFloat,transform:t=>`${t}${e}`}),On=Pi("deg"),mn=Pi("%"),D=Pi("px"),cT=Pi("vh"),dT=Pi("vw"),Mh=Object.assign(Object.assign({},mn),{parse:e=>mn.parse(e)/100,transform:e=>mn.transform(e*100)}),qp=(e,t)=>n=>Boolean(Ai(n)&&uT.test(n)&&n.startsWith(e)||t&&Object.prototype.hasOwnProperty.call(n,t)),dv=(e,t,n)=>r=>{if(!Ai(r))return r;const[o,a,i,s]=r.match(bi);return{[e]:parseFloat(o),[t]:parseFloat(a),[n]:parseFloat(i),alpha:s!==void 0?parseFloat(s):1}},go={test:qp("hsl","hue"),parse:dv("hue","saturation","lightness"),transform:({hue:e,saturation:t,lightness:n,alpha:r=1})=>"hsla("+Math.round(e)+", "+mn.transform(La(t))+", "+mn.transform(La(n))+", "+La(ja.transform(r))+")"},fT=cv(0,255),Ac=Object.assign(Object.assign({},Gr),{transform:e=>Math.round(fT(e))}),qr={test:qp("rgb","red"),parse:dv("red","green","blue"),transform:({red:e,green:t,blue:n,alpha:r=1})=>"rgba("+Ac.transform(e)+", "+Ac.transform(t)+", "+Ac.transform(n)+", "+La(ja.transform(r))+")"};function pT(e){let t="",n="",r="",o="";return e.length>5?(t=e.substr(1,2),n=e.substr(3,2),r=e.substr(5,2),o=e.substr(7,2)):(t=e.substr(1,1),n=e.substr(2,1),r=e.substr(3,1),o=e.substr(4,1),t+=t,n+=n,r+=r,o+=o),{red:parseInt(t,16),green:parseInt(n,16),blue:parseInt(r,16),alpha:o?parseInt(o,16)/255:1}}const Yd={test:qp("#"),parse:pT,transform:qr.transform},et={test:e=>qr.test(e)||Yd.test(e)||go.test(e),parse:e=>qr.test(e)?qr.parse(e):go.test(e)?go.parse(e):Yd.parse(e),transform:e=>Ai(e)?e:e.hasOwnProperty("red")?qr.transform(e):go.transform(e)},fv="${c}",pv="${n}";function mT(e){var t,n,r,o;return isNaN(e)&&Ai(e)&&((n=(t=e.match(bi))===null||t===void 0?void 0:t.length)!==null&&n!==void 0?n:0)+((o=(r=e.match(Kd))===null||r===void 0?void 0:r.length)!==null&&o!==void 0?o:0)>0}function mv(e){typeof e=="number"&&(e=`${e}`);const t=[];let n=0;const r=e.match(Kd);r&&(n=r.length,e=e.replace(Kd,fv),t.push(...r.map(et.parse)));const o=e.match(bi);return o&&(e=e.replace(bi,pv),t.push(...o.map(Gr.parse))),{values:t,numColors:n,tokenised:e}}function hv(e){return mv(e).values}function gv(e){const{values:t,numColors:n,tokenised:r}=mv(e),o=t.length;return a=>{let i=r;for(let s=0;s<o;s++)i=i.replace(s<n?fv:pv,s<n?et.transform(a[s]):La(a[s]));return i}}const hT=e=>typeof e=="number"?0:e;function gT(e){const t=hv(e);return gv(e)(t.map(hT))}const zn={test:mT,parse:hv,createTransformer:gv,getAnimatableNone:gT},yT=new Set(["brightness","contrast","saturate","opacity"]);function bT(e){let[t,n]=e.slice(0,-1).split("(");if(t==="drop-shadow")return e;const[r]=n.match(bi)||[];if(!r)return e;const o=n.replace(r,"");let a=yT.has(t)?1:0;return r!==n&&(a*=100),t+"("+a+o+")"}const vT=/([a-z-]*)\(.*?\)/g,Zd=Object.assign(Object.assign({},zn),{getAnimatableNone:e=>{const t=e.match(vT);return t?t.map(bT).join(" "):e}}),Vh={...Gr,transform:Math.round},yv={borderWidth:D,borderTopWidth:D,borderRightWidth:D,borderBottomWidth:D,borderLeftWidth:D,borderRadius:D,radius:D,borderTopLeftRadius:D,borderTopRightRadius:D,borderBottomRightRadius:D,borderBottomLeftRadius:D,width:D,maxWidth:D,height:D,maxHeight:D,size:D,top:D,right:D,bottom:D,left:D,padding:D,paddingTop:D,paddingRight:D,paddingBottom:D,paddingLeft:D,margin:D,marginTop:D,marginRight:D,marginBottom:D,marginLeft:D,rotate:On,rotateX:On,rotateY:On,rotateZ:On,scale:ys,scaleX:ys,scaleY:ys,scaleZ:ys,skew:On,skewX:On,skewY:On,distance:D,translateX:D,translateY:D,translateZ:D,x:D,y:D,z:D,perspective:D,transformPerspective:D,opacity:ja,originX:Mh,originY:Mh,originZ:D,zIndex:Vh,fillOpacity:ja,strokeOpacity:ja,numOctaves:Vh};function Ip(e,t,n,r){const{style:o,vars:a,transform:i,transformKeys:s,transformOrigin:l}=e;s.length=0;let u=!1,c=!1,d=!0;for(const f in t){const p=t[f];if(uv(f)){a[f]=p;continue}const y=yv[f],v=lT(p,y);if(Yo.has(f)){if(u=!0,i[f]=v,s.push(f),!d)continue;p!==(y.default||0)&&(d=!1)}else f.startsWith("origin")?(c=!0,l[f]=v):o[f]=v}if(t.transform||(u||r?o.transform=sT(e,n,d,r):o.transform&&(o.transform="none")),c){const{originX:f="50%",originY:p="50%",originZ:y=0}=l;o.transformOrigin=`${f} ${p} ${y}`}}const Rp=()=>({style:{},transform:{},transformKeys:[],transformOrigin:{},vars:{}});function bv(e,t,n){for(const r in t)!hn(t[r])&&!lv(r,n)&&(e[r]=t[r])}function wT({transformTemplate:e},t,n){return w.exports.useMemo(()=>{const r=Rp();return Ip(r,t,{enableHardwareAcceleration:!n},e),Object.assign({},r.vars,r.style)},[t])}function ST(e,t,n){const r=e.style||{},o={};return bv(o,r,e),Object.assign(o,wT(e,t,n)),e.transformValues?e.transformValues(o):o}function xT(e,t,n){const r={},o=ST(e,t,n);return e.drag&&e.dragListener!==!1&&(r.draggable=!1,o.userSelect=o.WebkitUserSelect=o.WebkitTouchCallout="none",o.touchAction=e.drag===!0?"none":`pan-${e.drag==="x"?"y":"x"}`),r.style=o,r}const CT=["animate","exit","variants","whileHover","whileTap","whileFocus","whileDrag","whileInView"],kT=["whileTap","onTap","onTapStart","onTapCancel"],_T=["onPan","onPanStart","onPanSessionStart","onPanEnd"],TT=["whileInView","onViewportEnter","onViewportLeave","viewport"],FT=new Set(["initial","style","values","variants","transition","transformTemplate","transformValues","custom","inherit","layout","layoutId","layoutDependency","onLayoutAnimationStart","onLayoutAnimationComplete","onLayoutMeasure","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","drag","dragControls","dragListener","dragConstraints","dragDirectionLock","dragSnapToOrigin","_dragX","_dragY","dragElastic","dragMomentum","dragPropagation","dragTransition","onHoverStart","onHoverEnd","layoutScroll",...TT,...kT,...CT,..._T]);function kl(e){return FT.has(e)}let vv=e=>!kl(e);function ET(e){!e||(vv=t=>t.startsWith("on")?!kl(t):e(t))}try{ET(require("@emotion/is-prop-valid").default)}catch{}function AT(e,t,n){const r={};for(const o in e)(vv(o)||n===!0&&kl(o)||!t&&!kl(o)||e.draggable&&o.startsWith("onDrag"))&&(r[o]=e[o]);return r}function Lh(e,t,n){return typeof e=="string"?e:D.transform(t+n*e)}function PT(e,t,n){const r=Lh(t,e.x,e.width),o=Lh(n,e.y,e.height);return`${r} ${o}`}const qT={offset:"stroke-dashoffset",array:"stroke-dasharray"},IT={offset:"strokeDashoffset",array:"strokeDasharray"};function RT(e,t,n=1,r=0,o=!0){e.pathLength=1;const a=o?qT:IT;e[a.offset]=D.transform(-r);const i=D.transform(t),s=D.transform(n);e[a.array]=`${i} ${s}`}function zp(e,{attrX:t,attrY:n,originX:r,originY:o,pathLength:a,pathSpacing:i=1,pathOffset:s=0,...l},u,c){Ip(e,l,u,c),e.attrs=e.style,e.style={};const{attrs:d,style:f,dimensions:p}=e;d.transform&&(p&&(f.transform=d.transform),delete d.transform),p&&(r!==void 0||o!==void 0||f.transform)&&(f.transformOrigin=PT(p,r!==void 0?r:.5,o!==void 0?o:.5)),t!==void 0&&(d.x=t),n!==void 0&&(d.y=n),a!==void 0&&RT(d,a,i,s,!1)}const wv=()=>({...Rp(),attrs:{}});function zT(e,t){const n=w.exports.useMemo(()=>{const r=wv();return zp(r,t,{enableHardwareAcceleration:!1},e.transformTemplate),{...r.attrs,style:{...r.style}}},[t]);if(e.style){const r={};bv(r,e.style,e),n.style={...r,...n.style}}return n}function MT(e=!1){return(n,r,o,a,{latestValues:i},s)=>{const u=(Pp(n)?zT:xT)(r,i,s),d={...AT(r,typeof n=="string",e),...u,ref:a};return o&&(d["data-projection-id"]=o),w.exports.createElement(n,d)}}const Sv=e=>e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase();function xv(e,{style:t,vars:n},r,o){Object.assign(e.style,t,o&&o.getProjectionStyles(r));for(const a in n)e.style.setProperty(a,n[a])}const Cv=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength"]);function kv(e,t,n,r){xv(e,t,void 0,r);for(const o in t.attrs)e.setAttribute(Cv.has(o)?o:Sv(o),t.attrs[o])}function Mp(e){const{style:t}=e,n={};for(const r in t)(hn(t[r])||lv(r,e))&&(n[r]=t[r]);return n}function _v(e){const t=Mp(e);for(const n in e)if(hn(e[n])){const r=n==="x"||n==="y"?"attr"+n.toUpperCase():n;t[r]=e[n]}return t}function Vp(e,t,n,r={},o={}){return typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),typeof t=="string"&&(t=e.variants&&e.variants[t]),typeof t=="function"&&(t=t(n!==void 0?n:e.custom,r,o)),t}const vi=e=>Array.isArray(e),VT=e=>Boolean(e&&typeof e=="object"&&e.mix&&e.toValue),Tv=e=>vi(e)?e[e.length-1]||0:e;function Ds(e){const t=hn(e)?e.get():e;return VT(t)?t.toValue():t}function LT({scrapeMotionValuesFromProps:e,createRenderState:t,onMount:n},r,o,a){const i={latestValues:jT(r,o,a,e),renderState:t()};return n&&(i.mount=s=>n(r,s,i)),i}const Fv=e=>(t,n)=>{const r=w.exports.useContext(yu),o=w.exports.useContext(Ko),a=()=>LT(e,t,r,o);return n?a():wu(a)};function jT(e,t,n,r){const o={},a=r(e);for(const f in a)o[f]=Ds(a[f]);let{initial:i,animate:s}=e;const l=vu(e),u=iv(e);t&&u&&!l&&e.inherit!==!1&&(i===void 0&&(i=t.initial),s===void 0&&(s=t.animate));let c=n?n.initial===!1:!1;c=c||i===!1;const d=c?s:i;return d&&typeof d!="boolean"&&!bu(d)&&(Array.isArray(d)?d:[d]).forEach(p=>{const y=Vp(e,p);if(!y)return;const{transitionEnd:v,transition:k,...g}=y;for(const m in g){let h=g[m];if(Array.isArray(h)){const S=c?h.length-1:0;h=h[S]}h!==null&&(o[m]=h)}for(const m in v)o[m]=v[m]}),o}const NT={useVisualState:Fv({scrapeMotionValuesFromProps:_v,createRenderState:wv,onMount:(e,t,{renderState:n,latestValues:r})=>{try{n.dimensions=typeof t.getBBox=="function"?t.getBBox():t.getBoundingClientRect()}catch{n.dimensions={x:0,y:0,width:0,height:0}}zp(n,r,{enableHardwareAcceleration:!1},e.transformTemplate),kv(t,n)}})},BT={useVisualState:Fv({scrapeMotionValuesFromProps:Mp,createRenderState:Rp})};function DT(e,{forwardMotionProps:t=!1},n,r,o){return{...Pp(e)?NT:BT,preloadedFeatures:n,useRender:MT(t),createVisualElement:r,projectionNodeConstructor:o,Component:e}}var le;(function(e){e.Animate="animate",e.Hover="whileHover",e.Tap="whileTap",e.Drag="whileDrag",e.Focus="whileFocus",e.InView="whileInView",e.Exit="exit"})(le||(le={}));function Su(e,t,n,r={passive:!0}){return e.addEventListener(t,n,r),()=>e.removeEventListener(t,n)}function Xd(e,t,n,r){w.exports.useEffect(()=>{const o=e.current;if(n&&o)return Su(o,t,n,r)},[e,t,n,r])}function OT({whileFocus:e,visualElement:t}){const{animationState:n}=t,r=()=>{n&&n.setActive(le.Focus,!0)},o=()=>{n&&n.setActive(le.Focus,!1)};Xd(t,"focus",e?r:void 0),Xd(t,"blur",e?o:void 0)}function Ev(e){return typeof PointerEvent<"u"&&e instanceof PointerEvent?e.pointerType==="mouse":e instanceof MouseEvent}function Av(e){return!!e.touches}function $T(e){return t=>{const n=t instanceof MouseEvent;(!n||n&&t.button===0)&&e(t)}}const WT={pageX:0,pageY:0};function HT(e,t="page"){const r=e.touches[0]||e.changedTouches[0]||WT;return{x:r[t+"X"],y:r[t+"Y"]}}function UT(e,t="page"){return{x:e[t+"X"],y:e[t+"Y"]}}function Lp(e,t="page"){return{point:Av(e)?HT(e,t):UT(e,t)}}const Pv=(e,t=!1)=>{const n=r=>e(r,Lp(r));return t?$T(n):n},GT=()=>Ur&&window.onpointerdown===null,KT=()=>Ur&&window.ontouchstart===null,YT=()=>Ur&&window.onmousedown===null,ZT={pointerdown:"mousedown",pointermove:"mousemove",pointerup:"mouseup",pointercancel:"mousecancel",pointerover:"mouseover",pointerout:"mouseout",pointerenter:"mouseenter",pointerleave:"mouseleave"},XT={pointerdown:"touchstart",pointermove:"touchmove",pointerup:"touchend",pointercancel:"touchcancel"};function qv(e){return GT()?e:KT()?XT[e]:YT()?ZT[e]:e}function qo(e,t,n,r){return Su(e,qv(t),Pv(n,t==="pointerdown"),r)}function _l(e,t,n,r){return Xd(e,qv(t),n&&Pv(n,t==="pointerdown"),r)}function Iv(e){let t=null;return()=>{const n=()=>{t=null};return t===null?(t=e,n):!1}}const jh=Iv("dragHorizontal"),Nh=Iv("dragVertical");function Rv(e){let t=!1;if(e==="y")t=Nh();else if(e==="x")t=jh();else{const n=jh(),r=Nh();n&&r?t=()=>{n(),r()}:(n&&n(),r&&r())}return t}function zv(){const e=Rv(!0);return e?(e(),!1):!0}function Bh(e,t,n){return(r,o)=>{!Ev(r)||zv()||(e.animationState&&e.animationState.setActive(le.Hover,t),n&&n(r,o))}}function QT({onHoverStart:e,onHoverEnd:t,whileHover:n,visualElement:r}){_l(r,"pointerenter",e||n?Bh(r,!0,e):void 0,{passive:!e}),_l(r,"pointerleave",t||n?Bh(r,!1,t):void 0,{passive:!t})}const Mv=(e,t)=>t?e===t?!0:Mv(e,t.parentElement):!1;function jp(e){return w.exports.useEffect(()=>()=>e(),[])}const JT=(e,t)=>n=>t(e(n)),xu=(...e)=>e.reduce(JT);function eF({onTap:e,onTapStart:t,onTapCancel:n,whileTap:r,visualElement:o}){const a=e||t||n||r,i=w.exports.useRef(!1),s=w.exports.useRef(null),l={passive:!(t||e||n||p)};function u(){s.current&&s.current(),s.current=null}function c(){return u(),i.current=!1,o.animationState&&o.animationState.setActive(le.Tap,!1),!zv()}function d(y,v){!c()||(Mv(o.current,y.target)?e&&e(y,v):n&&n(y,v))}function f(y,v){!c()||n&&n(y,v)}function p(y,v){u(),!i.current&&(i.current=!0,s.current=xu(qo(window,"pointerup",d,l),qo(window,"pointercancel",f,l)),o.animationState&&o.animationState.setActive(le.Tap,!0),t&&t(y,v))}_l(o,"pointerdown",a?p:void 0,l),jp(u)}const tF="production",Vv=typeof process>"u"||process.env===void 0?tF:"production",Dh=new Set;function Lv(e,t,n){e||Dh.has(t)||(console.warn(t),n&&console.warn(n),Dh.add(t))}const Qd=new WeakMap,Pc=new WeakMap,nF=e=>{const t=Qd.get(e.target);t&&t(e)},rF=e=>{e.forEach(nF)};function oF({root:e,...t}){const n=e||document;Pc.has(n)||Pc.set(n,{});const r=Pc.get(n),o=JSON.stringify(t);return r[o]||(r[o]=new IntersectionObserver(rF,{root:e,...t})),r[o]}function aF(e,t,n){const r=oF(t);return Qd.set(e,n),r.observe(e),()=>{Qd.delete(e),r.unobserve(e)}}function iF({visualElement:e,whileInView:t,onViewportEnter:n,onViewportLeave:r,viewport:o={}}){const a=w.exports.useRef({hasEnteredView:!1,isInView:!1});let i=Boolean(t||n||r);o.once&&a.current.hasEnteredView&&(i=!1),(typeof IntersectionObserver>"u"?uF:lF)(i,a.current,e,o)}const sF={some:0,all:1};function lF(e,t,n,{root:r,margin:o,amount:a="some",once:i}){w.exports.useEffect(()=>{if(!e||!n.current)return;const s={root:r==null?void 0:r.current,rootMargin:o,threshold:typeof a=="number"?a:sF[a]},l=u=>{const{isIntersecting:c}=u;if(t.isInView===c||(t.isInView=c,i&&!c&&t.hasEnteredView))return;c&&(t.hasEnteredView=!0),n.animationState&&n.animationState.setActive(le.InView,c);const d=n.getProps(),f=c?d.onViewportEnter:d.onViewportLeave;f&&f(u)};return aF(n.current,s,l)},[e,r,o,a])}function uF(e,t,n,{fallback:r=!0}){w.exports.useEffect(()=>{!e||!r||(Vv!=="production"&&Lv(!1,"IntersectionObserver not available on this device. whileInView animations will trigger on mount."),requestAnimationFrame(()=>{t.hasEnteredView=!0;const{onViewportEnter:o}=n.getProps();o&&o(null),n.animationState&&n.animationState.setActive(le.InView,!0)}))},[e])}const Qn=e=>t=>(e(t),null),cF={inView:Qn(iF),tap:Qn(eF),focus:Qn(OT),hover:Qn(QT)};function jv(){const e=w.exports.useContext(Ko);if(e===null)return[!0,null];const{isPresent:t,onExitComplete:n,register:r}=e,o=w.exports.useId();return w.exports.useEffect(()=>r(o),[]),!t&&n?[!1,()=>n&&n(o)]:[!0]}function dF(){return fF(w.exports.useContext(Ko))}function fF(e){return e===null?!0:e.isPresent}function Nv(e,t){if(!Array.isArray(t))return!1;const n=t.length;if(n!==e.length)return!1;for(let r=0;r<n;r++)if(t[r]!==e[r])return!1;return!0}const Tl=e=>e*1e3;var pF=function(){},Fl=function(){};const Np=e=>e,Bv=(e,t,n)=>(((1-3*n+3*t)*e+(3*n-6*t))*e+3*t)*e,mF=1e-7,hF=12;function gF(e,t,n,r,o){let a,i,s=0;do i=t+(n-t)/2,a=Bv(i,r,o)-e,a>0?n=i:t=i;while(Math.abs(a)>mF&&++s<hF);return i}function yF(e,t,n,r){if(e===t&&n===r)return Np;const o=a=>gF(a,0,1,e,n);return a=>a===0||a===1?a:Bv(o(a),t,r)}const Bp=e=>t=>t<=.5?e(2*t)/2:(2-e(2*(1-t)))/2,Dp=e=>t=>1-e(1-t),Op=e=>e*e,bF=Dp(Op),Dv=Bp(Op),Ov=e=>1-Math.sin(Math.acos(e)),$p=Dp(Ov),vF=Bp($p),$v=(e=1.525)=>t=>t*t*((e+1)*t-e),Wp=$v(),wF=Dp(Wp),SF=Bp(Wp),xF=e=>{const t=$v(e);return n=>(n*=2)<1?.5*t(n):.5*(2-Math.pow(2,-10*(n-1)))},CF=xF(),kF={linear:Np,easeIn:Op,easeInOut:Dv,easeOut:bF,circIn:Ov,circInOut:vF,circOut:$p,backIn:Wp,backInOut:SF,backOut:wF,anticipate:CF},Oh=e=>{if(Array.isArray(e)){Fl(e.length===4);const[t,n,r,o]=e;return yF(t,n,r,o)}else if(typeof e=="string")return kF[e];return e},_F=e=>Array.isArray(e)&&typeof e[0]!="number",$h=(e,t)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&zn.test(t)&&!t.startsWith("url(")),vr=()=>({type:"spring",stiffness:500,damping:25,restSpeed:10}),bs=e=>({type:"spring",stiffness:550,damping:e===0?2*Math.sqrt(550):30,restSpeed:10}),qc=()=>({type:"keyframes",ease:"linear",duration:.3}),TF=e=>({type:"keyframes",duration:.8,values:e}),Wh={x:vr,y:vr,z:vr,rotate:vr,rotateX:vr,rotateY:vr,rotateZ:vr,scaleX:bs,scaleY:bs,scale:bs,opacity:qc,backgroundColor:qc,color:qc,default:bs},FF=(e,t)=>{let n;return vi(t)?n=TF:n=Wh[e]||Wh.default,{to:t,...n(t)}},EF={...yv,color:et,backgroundColor:et,outlineColor:et,fill:et,stroke:et,borderColor:et,borderTopColor:et,borderRightColor:et,borderBottomColor:et,borderLeftColor:et,filter:Zd,WebkitFilter:Zd},Hp=e=>EF[e];function Up(e,t){var n;let r=Hp(e);return r!==Zd&&(r=zn),(n=r.getAnimatableNone)===null||n===void 0?void 0:n.call(r,t)}const AF={current:!1},Wv=1/60*1e3,PF=typeof performance<"u"?()=>performance.now():()=>Date.now(),Hv=typeof window<"u"?e=>window.requestAnimationFrame(e):e=>setTimeout(()=>e(PF()),Wv);function qF(e){let t=[],n=[],r=0,o=!1,a=!1;const i=new WeakSet,s={schedule:(l,u=!1,c=!1)=>{const d=c&&o,f=d?t:n;return u&&i.add(l),f.indexOf(l)===-1&&(f.push(l),d&&o&&(r=t.length)),l},cancel:l=>{const u=n.indexOf(l);u!==-1&&n.splice(u,1),i.delete(l)},process:l=>{if(o){a=!0;return}if(o=!0,[t,n]=[n,t],n.length=0,r=t.length,r)for(let u=0;u<r;u++){const c=t[u];c(l),i.has(c)&&(s.schedule(c),e())}o=!1,a&&(a=!1,s.process(l))}};return s}const IF=40;let Jd=!0,wi=!1,ef=!1;const Io={delta:0,timestamp:0},qi=["read","update","preRender","render","postRender"],Cu=qi.reduce((e,t)=>(e[t]=qF(()=>wi=!0),e),{}),Vt=qi.reduce((e,t)=>{const n=Cu[t];return e[t]=(r,o=!1,a=!1)=>(wi||zF(),n.schedule(r,o,a)),e},{}),dr=qi.reduce((e,t)=>(e[t]=Cu[t].cancel,e),{}),Ic=qi.reduce((e,t)=>(e[t]=()=>Cu[t].process(Io),e),{}),RF=e=>Cu[e].process(Io),Uv=e=>{wi=!1,Io.delta=Jd?Wv:Math.max(Math.min(e-Io.timestamp,IF),1),Io.timestamp=e,ef=!0,qi.forEach(RF),ef=!1,wi&&(Jd=!1,Hv(Uv))},zF=()=>{wi=!0,Jd=!0,ef||Hv(Uv)},El=()=>Io;function Gv(e,t){const n=performance.now(),r=({timestamp:o})=>{const a=o-n;a>=t&&(dr.read(r),e(a-t))};return Vt.read(r,!0),()=>dr.read(r)}const Al=(e,t,n)=>Math.min(Math.max(n,e),t),Fe=(e,t,n)=>-n*e+n*t+e;function Rc(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function MF({hue:e,saturation:t,lightness:n,alpha:r}){e/=360,t/=100,n/=100;let o=0,a=0,i=0;if(!t)o=a=i=n;else{const s=n<.5?n*(1+t):n+t-n*t,l=2*n-s;o=Rc(l,s,e+1/3),a=Rc(l,s,e),i=Rc(l,s,e-1/3)}return{red:Math.round(o*255),green:Math.round(a*255),blue:Math.round(i*255),alpha:r}}const zc=(e,t,n)=>{const r=e*e;return Math.sqrt(Math.max(0,n*(t*t-r)+r))},VF=[Yd,qr,go],LF=e=>VF.find(t=>t.test(e));function Hh(e){const t=LF(e);let n=t.parse(e);return t===go&&(n=MF(n)),n}const Kv=(e,t)=>{const n=Hh(e),r=Hh(t),o={...n};return a=>(o.red=zc(n.red,r.red,a),o.green=zc(n.green,r.green,a),o.blue=zc(n.blue,r.blue,a),o.alpha=Fe(n.alpha,r.alpha,a),qr.transform(o))};function Yv(e,t){return typeof e=="number"?n=>Fe(e,t,n):et.test(e)?Kv(e,t):Xv(e,t)}const Zv=(e,t)=>{const n=[...e],r=n.length,o=e.map((a,i)=>Yv(a,t[i]));return a=>{for(let i=0;i<r;i++)n[i]=o[i](a);return n}},jF=(e,t)=>{const n={...e,...t},r={};for(const o in n)e[o]!==void 0&&t[o]!==void 0&&(r[o]=Yv(e[o],t[o]));return o=>{for(const a in r)n[a]=r[a](o);return n}};function Uh(e){const t=zn.parse(e),n=t.length;let r=0,o=0;for(let a=0;a<n;a++)r||typeof t[a]=="number"?r++:o++;return{parsed:t,numNumbers:r,numColors:o}}const Xv=(e,t)=>{const n=zn.createTransformer(t),r=Uh(e),o=Uh(t);return r.numColors===o.numColors&&r.numNumbers>=o.numNumbers?xu(Zv(r.parsed,o.parsed),n):i=>`${i>0?t:e}`},Pl=(e,t,n)=>{const r=t-e;return r===0?1:(n-e)/r},Gh=(e,t)=>n=>Fe(e,t,n);function NF(e){return typeof e=="number"?Gh:typeof e=="string"?et.test(e)?Kv:Xv:Array.isArray(e)?Zv:typeof e=="object"?jF:Gh}function BF(e,t,n){const r=[],o=n||NF(e[0]),a=e.length-1;for(let i=0;i<a;i++){let s=o(e[i],e[i+1]);if(t){const l=Array.isArray(t)?t[i]:t;s=xu(l,s)}r.push(s)}return r}function Qv(e,t,{clamp:n=!0,ease:r,mixer:o}={}){const a=e.length;Fl(a===t.length),Fl(!r||!Array.isArray(r)||r.length===a-1),e[0]>e[a-1]&&(e=[...e].reverse(),t=[...t].reverse());const i=BF(t,r,o),s=i.length,l=u=>{let c=0;if(s>1)for(;c<e.length-2&&!(u<e[c+1]);c++);const d=Pl(e[c],e[c+1],u);return i[c](d)};return n?u=>l(Al(e[0],e[a-1],u)):l}function DF(e,t){return e.map(()=>t||Dv).splice(0,e.length-1)}function OF(e){const t=e.length;return e.map((n,r)=>r!==0?r/(t-1):0)}function $F(e,t){return e.map(n=>n*t)}function WF({from:e=0,to:t=1,ease:n,offset:r,duration:o=300}){const a={done:!1,value:e},i=Array.isArray(t)?t:[e,t],s=$F(r&&r.length===i.length?r:OF(i),o);function l(){return Qv(s,i,{ease:Array.isArray(n)?n:DF(i,n)})}let u=l();return{next:c=>(a.value=u(c),a.done=c>=o,a),flipTarget:()=>{i.reverse(),u=l()}}}const Mc=.001,HF=.01,Kh=10,UF=.05,GF=1;function KF({duration:e=800,bounce:t=.25,velocity:n=0,mass:r=1}){let o,a;pF(e<=Kh*1e3);let i=1-t;i=Al(UF,GF,i),e=Al(HF,Kh,e/1e3),i<1?(o=u=>{const c=u*i,d=c*e,f=c-n,p=tf(u,i),y=Math.exp(-d);return Mc-f/p*y},a=u=>{const d=u*i*e,f=d*n+n,p=Math.pow(i,2)*Math.pow(u,2)*e,y=Math.exp(-d),v=tf(Math.pow(u,2),i);return(-o(u)+Mc>0?-1:1)*((f-p)*y)/v}):(o=u=>{const c=Math.exp(-u*e),d=(u-n)*e+1;return-Mc+c*d},a=u=>{const c=Math.exp(-u*e),d=(n-u)*(e*e);return c*d});const s=5/e,l=ZF(o,a,s);if(e=e*1e3,isNaN(l))return{stiffness:100,damping:10,duration:e};{const u=Math.pow(l,2)*r;return{stiffness:u,damping:i*2*Math.sqrt(r*u),duration:e}}}const YF=12;function ZF(e,t,n){let r=n;for(let o=1;o<YF;o++)r=r-e(r)/t(r);return r}function tf(e,t){return e*Math.sqrt(1-t*t)}const XF=["duration","bounce"],QF=["stiffness","damping","mass"];function Yh(e,t){return t.some(n=>e[n]!==void 0)}function JF(e){let t={velocity:0,stiffness:100,damping:10,mass:1,isResolvedFromDuration:!1,...e};if(!Yh(e,QF)&&Yh(e,XF)){const n=KF(e);t={...t,...n,velocity:0,mass:1},t.isResolvedFromDuration=!0}return t}function Jv({from:e=0,to:t=1,restSpeed:n=2,restDelta:r=.01,...o}){const a={done:!1,value:e};let{stiffness:i,damping:s,mass:l,velocity:u,duration:c,isResolvedFromDuration:d}=JF(o),f=Zh,p=Zh;function y(){const v=u?-(u/1e3):0,k=t-e,g=s/(2*Math.sqrt(i*l)),m=Math.sqrt(i/l)/1e3;if(r===void 0&&(r=Math.min(Math.abs(t-e)/100,.4)),g<1){const h=tf(m,g);f=S=>{const T=Math.exp(-g*m*S);return t-T*((v+g*m*k)/h*Math.sin(h*S)+k*Math.cos(h*S))},p=S=>{const T=Math.exp(-g*m*S);return g*m*T*(Math.sin(h*S)*(v+g*m*k)/h+k*Math.cos(h*S))-T*(Math.cos(h*S)*(v+g*m*k)-h*k*Math.sin(h*S))}}else if(g===1)f=h=>t-Math.exp(-m*h)*(k+(v+m*k)*h);else{const h=m*Math.sqrt(g*g-1);f=S=>{const T=Math.exp(-g*m*S),A=Math.min(h*S,300);return t-T*((v+g*m*k)*Math.sinh(A)+h*k*Math.cosh(A))/h}}}return y(),{next:v=>{const k=f(v);if(d)a.done=v>=c;else{const g=p(v)*1e3,m=Math.abs(g)<=n,h=Math.abs(t-k)<=r;a.done=m&&h}return a.value=a.done?t:k,a},flipTarget:()=>{u=-u,[e,t]=[t,e],y()}}}Jv.needsInterpolation=(e,t)=>typeof e=="string"||typeof t=="string";const Zh=e=>0;function eE({velocity:e=0,from:t=0,power:n=.8,timeConstant:r=350,restDelta:o=.5,modifyTarget:a}){const i={done:!1,value:t};let s=n*e;const l=t+s,u=a===void 0?l:a(l);return u!==l&&(s=u-t),{next:c=>{const d=-s*Math.exp(-c/r);return i.done=!(d>o||d<-o),i.value=i.done?u:u+d,i},flipTarget:()=>{}}}const tE={decay:eE,keyframes:WF,spring:Jv};function e2(e,t,n=0){return e-t-n}function nE(e,t=0,n=0,r=!0){return r?e2(t+-e,t,n):t-(e-t)+n}function rE(e,t,n,r){return r?e>=t+n:e<=-n}const oE=e=>{const t=({delta:n})=>e(n);return{start:()=>Vt.update(t,!0),stop:()=>dr.update(t)}};function t2({from:e,autoplay:t=!0,driver:n=oE,elapsed:r=0,repeat:o=0,repeatType:a="loop",repeatDelay:i=0,onPlay:s,onStop:l,onComplete:u,onRepeat:c,onUpdate:d,type:f="keyframes",...p}){var y,v;let{to:k}=p,g,m=0,h=p.duration,S,T=!1,A=!0,E;const q=tE[Array.isArray(k)?"keyframes":f];!((v=(y=q).needsInterpolation)===null||v===void 0)&&v.call(y,e,k)&&(E=Qv([0,100],[e,k],{clamp:!1}),e=0,k=100);const j=q({...p,from:e,to:k});function V(){m++,a==="reverse"?(A=m%2===0,r=nE(r,h,i,A)):(r=e2(r,h,i),a==="mirror"&&j.flipTarget()),T=!1,c&&c()}function _e(){g.stop(),u&&u()}function we(lt){if(A||(lt=-lt),r+=lt,!T){const yt=j.next(Math.max(0,r));S=yt.value,E&&(S=E(S)),T=A?yt.done:r<=0}d==null||d(S),T&&(m===0&&(h!=null||(h=r)),m<o?rE(r,h,i,A)&&V():_e())}function De(){s==null||s(),g=n(we),g.start()}return t&&De(),{stop:()=>{l==null||l(),g.stop()}}}function n2(e,t){return t?e*(1e3/t):0}function aE({from:e=0,velocity:t=0,min:n,max:r,power:o=.8,timeConstant:a=750,bounceStiffness:i=500,bounceDamping:s=10,restDelta:l=1,modifyTarget:u,driver:c,onUpdate:d,onComplete:f,onStop:p}){let y;function v(h){return n!==void 0&&h<n||r!==void 0&&h>r}function k(h){return n===void 0?r:r===void 0||Math.abs(n-h)<Math.abs(r-h)?n:r}function g(h){y==null||y.stop(),y=t2({...h,driver:c,onUpdate:S=>{var T;d==null||d(S),(T=h.onUpdate)===null||T===void 0||T.call(h,S)},onComplete:f,onStop:p})}function m(h){g({type:"spring",stiffness:i,damping:s,restDelta:l,...h})}if(v(e))m({from:e,velocity:t,to:k(e)});else{let h=o*t+e;typeof u<"u"&&(h=u(h));const S=k(h),T=S===n?-1:1;let A,E;const q=j=>{A=E,E=j,t=n2(j-A,El().delta),(T===1&&j>S||T===-1&&j<S)&&m({from:j,to:S,velocity:t})};g({type:"decay",from:e,velocity:t,timeConstant:a,power:o,restDelta:l,modifyTarget:u,onUpdate:v(h)?q:void 0})}return{stop:()=>y==null?void 0:y.stop()}}function iE({when:e,delay:t,delayChildren:n,staggerChildren:r,staggerDirection:o,repeat:a,repeatType:i,repeatDelay:s,from:l,...u}){return!!Object.keys(u).length}function sE({ease:e,times:t,yoyo:n,flip:r,loop:o,...a}){const i={...a};return t&&(i.offset=t),a.duration&&(i.duration=Tl(a.duration)),a.repeatDelay&&(i.repeatDelay=Tl(a.repeatDelay)),e&&(i.ease=_F(e)?e.map(Oh):Oh(e)),a.type==="tween"&&(i.type="keyframes"),(n||o||r)&&(n?i.repeatType="reverse":o?i.repeatType="loop":r&&(i.repeatType="mirror"),i.repeat=o||n||r||a.repeat),a.type!=="spring"&&(i.type="keyframes"),i}function lE(e,t){var n,r;return(r=(n=(Gp(e,t)||{}).delay)!==null&&n!==void 0?n:e.delay)!==null&&r!==void 0?r:0}function uE(e){return Array.isArray(e.to)&&e.to[0]===null&&(e.to=[...e.to],e.to[0]=e.from),e}function cE(e,t,n){return Array.isArray(t.to)&&e.duration===void 0&&(e.duration=.8),uE(t),iE(e)||(e={...e,...FF(n,t.to)}),{...t,...sE(e)}}function dE(e,t,n,r,o){const a=Gp(r,e)||{};let i=a.from!==void 0?a.from:t.get();const s=$h(e,n);i==="none"&&s&&typeof n=="string"?i=Up(e,n):Xh(i)&&typeof n=="string"?i=Qh(n):!Array.isArray(n)&&Xh(n)&&typeof i=="string"&&(n=Qh(i));const l=$h(e,i);function u(){const d={from:i,to:n,velocity:t.getVelocity(),onComplete:o,onUpdate:f=>t.set(f)};return a.type==="inertia"||a.type==="decay"?aE({...d,...a}):t2({...cE(a,d,e),onUpdate:f=>{d.onUpdate(f),a.onUpdate&&a.onUpdate(f)},onComplete:()=>{d.onComplete(),a.onComplete&&a.onComplete()}})}function c(){const d=Tv(n);return t.set(d),o(),a.onUpdate&&a.onUpdate(d),a.onComplete&&a.onComplete(),{stop:()=>{}}}return!l||!s||a.type===!1?c:u}function Xh(e){return e===0||typeof e=="string"&&parseFloat(e)===0&&e.indexOf(" ")===-1}function Qh(e){return typeof e=="number"?0:Up("",e)}function Gp(e,t){return e[t]||e.default||e}function Kp(e,t,n,r={}){return AF.current&&(r={type:!1}),t.start(o=>{let a;const i=dE(e,t,n,r,o),s=lE(r,e),l=()=>a=i();let u;return s?u=Gv(l,Tl(s)):l(),()=>{u&&u(),a&&a.stop()}})}const fE=e=>/^\-?\d*\.?\d+$/.test(e),pE=e=>/^0[^.\s]+$/.test(e);function Yp(e,t){e.indexOf(t)===-1&&e.push(t)}function Zp(e,t){const n=e.indexOf(t);n>-1&&e.splice(n,1)}class Na{constructor(){this.subscriptions=[]}add(t){return Yp(this.subscriptions,t),()=>Zp(this.subscriptions,t)}notify(t,n,r){const o=this.subscriptions.length;if(!!o)if(o===1)this.subscriptions[0](t,n,r);else for(let a=0;a<o;a++){const i=this.subscriptions[a];i&&i(t,n,r)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const mE=e=>!isNaN(parseFloat(e));class hE{constructor(t){this.version="7.6.18",this.timeDelta=0,this.lastUpdated=0,this.updateSubscribers=new Na,this.velocityUpdateSubscribers=new Na,this.renderSubscribers=new Na,this.canTrackVelocity=!1,this.updateAndNotify=(n,r=!0)=>{this.prev=this.current,this.current=n;const{delta:o,timestamp:a}=El();this.lastUpdated!==a&&(this.timeDelta=o,this.lastUpdated=a,Vt.postRender(this.scheduleVelocityCheck)),this.prev!==this.current&&this.updateSubscribers.notify(this.current),this.velocityUpdateSubscribers.getSize()&&this.velocityUpdateSubscribers.notify(this.getVelocity()),r&&this.renderSubscribers.notify(this.current)},this.scheduleVelocityCheck=()=>Vt.postRender(this.velocityCheck),this.velocityCheck=({timestamp:n})=>{n!==this.lastUpdated&&(this.prev=this.current,this.velocityUpdateSubscribers.notify(this.getVelocity()))},this.hasAnimated=!1,this.prev=this.current=t,this.canTrackVelocity=mE(this.current)}onChange(t){return this.updateSubscribers.add(t)}clearListeners(){this.updateSubscribers.clear()}onRenderRequest(t){return t(this.get()),this.renderSubscribers.add(t)}attach(t){this.passiveEffect=t}set(t,n=!0){!n||!this.passiveEffect?this.updateAndNotify(t,n):this.passiveEffect(t,this.updateAndNotify)}get(){return this.current}getPrevious(){return this.prev}getVelocity(){return this.canTrackVelocity?n2(parseFloat(this.current)-parseFloat(this.prev),this.timeDelta):0}start(t){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.stopAnimation=t(n)}).then(()=>this.clearAnimation())}stop(){this.stopAnimation&&this.stopAnimation(),this.clearAnimation()}isAnimating(){return!!this.stopAnimation}clearAnimation(){this.stopAnimation=null}destroy(){this.updateSubscribers.clear(),this.renderSubscribers.clear(),this.stop()}}function Oo(e){return new hE(e)}const r2=e=>t=>t.test(e),gE={test:e=>e==="auto",parse:e=>e},o2=[Gr,D,mn,On,dT,cT,gE],pa=e=>o2.find(r2(e)),yE=[...o2,et,zn],bE=e=>yE.find(r2(e));function vE(e){const t={};return e.values.forEach((n,r)=>t[r]=n.get()),t}function wE(e){const t={};return e.values.forEach((n,r)=>t[r]=n.getVelocity()),t}function ku(e,t,n){const r=e.getProps();return Vp(r,t,n!==void 0?n:r.custom,vE(e),wE(e))}function SE(e,t,n){e.hasValue(t)?e.getValue(t).set(n):e.addValue(t,Oo(n))}function xE(e,t){const n=ku(e,t);let{transitionEnd:r={},transition:o={},...a}=n?e.makeTargetAnimatable(n,!1):{};a={...a,...r};for(const i in a){const s=Tv(a[i]);SE(e,i,s)}}function CE(e,t,n){var r,o;const a=Object.keys(t).filter(s=>!e.hasValue(s)),i=a.length;if(!!i)for(let s=0;s<i;s++){const l=a[s],u=t[l];let c=null;Array.isArray(u)&&(c=u[0]),c===null&&(c=(o=(r=n[l])!==null&&r!==void 0?r:e.readValue(l))!==null&&o!==void 0?o:t[l]),c!=null&&(typeof c=="string"&&(fE(c)||pE(c))?c=parseFloat(c):!bE(c)&&zn.test(u)&&(c=Up(l,u)),e.addValue(l,Oo(c)),n[l]===void 0&&(n[l]=c),c!==null&&e.setBaseTarget(l,c))}}function kE(e,t){return t?(t[e]||t.default||t).from:void 0}function _E(e,t,n){var r;const o={};for(const a in e){const i=kE(a,t);o[a]=i!==void 0?i:(r=n.getValue(a))===null||r===void 0?void 0:r.get()}return o}function ql(e){return Boolean(hn(e)&&e.add)}function TE(e,t,n={}){e.notify("AnimationStart",t);let r;if(Array.isArray(t)){const o=t.map(a=>nf(e,a,n));r=Promise.all(o)}else if(typeof t=="string")r=nf(e,t,n);else{const o=typeof t=="function"?ku(e,t,n.custom):t;r=a2(e,o,n)}return r.then(()=>e.notify("AnimationComplete",t))}function nf(e,t,n={}){var r;const o=ku(e,t,n.custom);let{transition:a=e.getDefaultTransition()||{}}=o||{};n.transitionOverride&&(a=n.transitionOverride);const i=o?()=>a2(e,o,n):()=>Promise.resolve(),s=!((r=e.variantChildren)===null||r===void 0)&&r.size?(u=0)=>{const{delayChildren:c=0,staggerChildren:d,staggerDirection:f}=a;return FE(e,t,c+u,d,f,n)}:()=>Promise.resolve(),{when:l}=a;if(l){const[u,c]=l==="beforeChildren"?[i,s]:[s,i];return u().then(c)}else return Promise.all([i(),s(n.delay)])}function a2(e,t,{delay:n=0,transitionOverride:r,type:o}={}){var a;let{transition:i=e.getDefaultTransition(),transitionEnd:s,...l}=e.makeTargetAnimatable(t);const u=e.getValue("willChange");r&&(i=r);const c=[],d=o&&((a=e.animationState)===null||a===void 0?void 0:a.getState()[o]);for(const f in l){const p=e.getValue(f),y=l[f];if(!p||y===void 0||d&&AE(d,f))continue;let v={delay:n,...i};e.shouldReduceMotion&&Yo.has(f)&&(v={...v,type:!1,delay:0});let k=Kp(f,p,y,v);ql(u)&&(u.add(f),k=k.then(()=>u.remove(f))),c.push(k)}return Promise.all(c).then(()=>{s&&xE(e,s)})}function FE(e,t,n=0,r=0,o=1,a){const i=[],s=(e.variantChildren.size-1)*r,l=o===1?(u=0)=>u*r:(u=0)=>s-u*r;return Array.from(e.variantChildren).sort(EE).forEach((u,c)=>{i.push(nf(u,t,{...a,delay:n+l(c)}).then(()=>u.notify("AnimationComplete",t)))}),Promise.all(i)}function EE(e,t){return e.sortNodePosition(t)}function AE({protectedKeys:e,needsAnimating:t},n){const r=e.hasOwnProperty(n)&&t[n]!==!0;return t[n]=!1,r}const Xp=[le.Animate,le.InView,le.Focus,le.Hover,le.Tap,le.Drag,le.Exit],PE=[...Xp].reverse(),qE=Xp.length;function IE(e){return t=>Promise.all(t.map(({animation:n,options:r})=>TE(e,n,r)))}function RE(e){let t=IE(e);const n=ME();let r=!0;const o=(l,u)=>{const c=ku(e,u);if(c){const{transition:d,transitionEnd:f,...p}=c;l={...l,...p,...f}}return l};function a(l){t=l(e)}function i(l,u){var c;const d=e.getProps(),f=e.getVariantContext(!0)||{},p=[],y=new Set;let v={},k=1/0;for(let m=0;m<qE;m++){const h=PE[m],S=n[h],T=(c=d[h])!==null&&c!==void 0?c:f[h],A=gi(T),E=h===u?S.isActive:null;E===!1&&(k=m);let q=T===f[h]&&T!==d[h]&&A;if(q&&r&&e.manuallyAnimateOnMount&&(q=!1),S.protectedKeys={...v},!S.isActive&&E===null||!T&&!S.prevProp||bu(T)||typeof T=="boolean")continue;const j=zE(S.prevProp,T);let V=j||h===u&&S.isActive&&!q&&A||m>k&&A;const _e=Array.isArray(T)?T:[T];let we=_e.reduce(o,{});E===!1&&(we={});const{prevResolvedValues:De={}}=S,lt={...De,...we},yt=ce=>{V=!0,y.delete(ce),S.needsAnimating[ce]=!0};for(const ce in lt){const Le=we[ce],I=De[ce];v.hasOwnProperty(ce)||(Le!==I?vi(Le)&&vi(I)?!Nv(Le,I)||j?yt(ce):S.protectedKeys[ce]=!0:Le!==void 0?yt(ce):y.add(ce):Le!==void 0&&y.has(ce)?yt(ce):S.protectedKeys[ce]=!0)}S.prevProp=T,S.prevResolvedValues=we,S.isActive&&(v={...v,...we}),r&&e.blockInitialAnimation&&(V=!1),V&&!q&&p.push(..._e.map(ce=>({animation:ce,options:{type:h,...l}})))}if(y.size){const m={};y.forEach(h=>{const S=e.getBaseTarget(h);S!==void 0&&(m[h]=S)}),p.push({animation:m})}let g=Boolean(p.length);return r&&d.initial===!1&&!e.manuallyAnimateOnMount&&(g=!1),r=!1,g?t(p):Promise.resolve()}function s(l,u,c){var d;if(n[l].isActive===u)return Promise.resolve();(d=e.variantChildren)===null||d===void 0||d.forEach(p=>{var y;return(y=p.animationState)===null||y===void 0?void 0:y.setActive(l,u)}),n[l].isActive=u;const f=i(c,l);for(const p in n)n[p].protectedKeys={};return f}return{animateChanges:i,setActive:s,setAnimateFunction:a,getState:()=>n}}function zE(e,t){return typeof t=="string"?t!==e:Array.isArray(t)?!Nv(t,e):!1}function wr(e=!1){return{isActive:e,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function ME(){return{[le.Animate]:wr(!0),[le.InView]:wr(),[le.Hover]:wr(),[le.Tap]:wr(),[le.Drag]:wr(),[le.Focus]:wr(),[le.Exit]:wr()}}const VE={animation:Qn(({visualElement:e,animate:t})=>{e.animationState||(e.animationState=RE(e)),bu(t)&&w.exports.useEffect(()=>t.subscribe(e),[t])}),exit:Qn(e=>{const{custom:t,visualElement:n}=e,[r,o]=jv(),a=w.exports.useContext(Ko);w.exports.useEffect(()=>{n.isPresent=r;const i=n.animationState&&n.animationState.setActive(le.Exit,!r,{custom:a&&a.custom||t});i&&!r&&i.then(o)},[r])})},Jh=(e,t)=>Math.abs(e-t);function LE(e,t){const n=Jh(e.x,t.x),r=Jh(e.y,t.y);return Math.sqrt(n**2+r**2)}class i2{constructor(t,n,{transformPagePoint:r}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const u=Lc(this.lastMoveEventInfo,this.history),c=this.startEvent!==null,d=LE(u.offset,{x:0,y:0})>=3;if(!c&&!d)return;const{point:f}=u,{timestamp:p}=El();this.history.push({...f,timestamp:p});const{onStart:y,onMove:v}=this.handlers;c||(y&&y(this.lastMoveEvent,u),this.startEvent=this.lastMoveEvent),v&&v(this.lastMoveEvent,u)},this.handlePointerMove=(u,c)=>{if(this.lastMoveEvent=u,this.lastMoveEventInfo=Vc(c,this.transformPagePoint),Ev(u)&&u.buttons===0){this.handlePointerUp(u,c);return}Vt.update(this.updatePoint,!0)},this.handlePointerUp=(u,c)=>{this.end();const{onEnd:d,onSessionEnd:f}=this.handlers,p=Lc(Vc(c,this.transformPagePoint),this.history);this.startEvent&&d&&d(u,p),f&&f(u,p)},Av(t)&&t.touches.length>1)return;this.handlers=n,this.transformPagePoint=r;const o=Lp(t),a=Vc(o,this.transformPagePoint),{point:i}=a,{timestamp:s}=El();this.history=[{...i,timestamp:s}];const{onSessionStart:l}=n;l&&l(t,Lc(a,this.history)),this.removeListeners=xu(qo(window,"pointermove",this.handlePointerMove),qo(window,"pointerup",this.handlePointerUp),qo(window,"pointercancel",this.handlePointerUp))}updateHandlers(t){this.handlers=t}end(){this.removeListeners&&this.removeListeners(),dr.update(this.updatePoint)}}function Vc(e,t){return t?{point:t(e.point)}:e}function eg(e,t){return{x:e.x-t.x,y:e.y-t.y}}function Lc({point:e},t){return{point:e,delta:eg(e,s2(t)),offset:eg(e,jE(t)),velocity:NE(t,.1)}}function jE(e){return e[0]}function s2(e){return e[e.length-1]}function NE(e,t){if(e.length<2)return{x:0,y:0};let n=e.length-1,r=null;const o=s2(e);for(;n>=0&&(r=e[n],!(o.timestamp-r.timestamp>Tl(t)));)n--;if(!r)return{x:0,y:0};const a=(o.timestamp-r.timestamp)/1e3;if(a===0)return{x:0,y:0};const i={x:(o.x-r.x)/a,y:(o.y-r.y)/a};return i.x===1/0&&(i.x=0),i.y===1/0&&(i.y=0),i}function _t(e){return e.max-e.min}function rf(e,t=0,n=.01){return Math.abs(e-t)<=n}function tg(e,t,n,r=.5){e.origin=r,e.originPoint=Fe(t.min,t.max,e.origin),e.scale=_t(n)/_t(t),(rf(e.scale,1,1e-4)||isNaN(e.scale))&&(e.scale=1),e.translate=Fe(n.min,n.max,e.origin)-e.originPoint,(rf(e.translate)||isNaN(e.translate))&&(e.translate=0)}function Ba(e,t,n,r){tg(e.x,t.x,n.x,r==null?void 0:r.originX),tg(e.y,t.y,n.y,r==null?void 0:r.originY)}function ng(e,t,n){e.min=n.min+t.min,e.max=e.min+_t(t)}function BE(e,t,n){ng(e.x,t.x,n.x),ng(e.y,t.y,n.y)}function rg(e,t,n){e.min=t.min-n.min,e.max=e.min+_t(t)}function Da(e,t,n){rg(e.x,t.x,n.x),rg(e.y,t.y,n.y)}function DE(e,{min:t,max:n},r){return t!==void 0&&e<t?e=r?Fe(t,e,r.min):Math.max(e,t):n!==void 0&&e>n&&(e=r?Fe(n,e,r.max):Math.min(e,n)),e}function og(e,t,n){return{min:t!==void 0?e.min+t:void 0,max:n!==void 0?e.max+n-(e.max-e.min):void 0}}function OE(e,{top:t,left:n,bottom:r,right:o}){return{x:og(e.x,n,o),y:og(e.y,t,r)}}function ag(e,t){let n=t.min-e.min,r=t.max-e.max;return t.max-t.min<e.max-e.min&&([n,r]=[r,n]),{min:n,max:r}}function $E(e,t){return{x:ag(e.x,t.x),y:ag(e.y,t.y)}}function WE(e,t){let n=.5;const r=_t(e),o=_t(t);return o>r?n=Pl(t.min,t.max-r,e.min):r>o&&(n=Pl(e.min,e.max-o,t.min)),Al(0,1,n)}function HE(e,t){const n={};return t.min!==void 0&&(n.min=t.min-e.min),t.max!==void 0&&(n.max=t.max-e.min),n}const of=.35;function UE(e=of){return e===!1?e=0:e===!0&&(e=of),{x:ig(e,"left","right"),y:ig(e,"top","bottom")}}function ig(e,t,n){return{min:sg(e,t),max:sg(e,n)}}function sg(e,t){var n;return typeof e=="number"?e:(n=e[t])!==null&&n!==void 0?n:0}const lg=()=>({translate:0,scale:1,origin:0,originPoint:0}),Oa=()=>({x:lg(),y:lg()}),ug=()=>({min:0,max:0}),Re=()=>({x:ug(),y:ug()});function nn(e){return[e("x"),e("y")]}function l2({top:e,left:t,right:n,bottom:r}){return{x:{min:t,max:n},y:{min:e,max:r}}}function GE({x:e,y:t}){return{top:t.min,right:e.max,bottom:t.max,left:e.min}}function KE(e,t){if(!t)return e;const n=t({x:e.left,y:e.top}),r=t({x:e.right,y:e.bottom});return{top:n.y,left:n.x,bottom:r.y,right:r.x}}function jc(e){return e===void 0||e===1}function af({scale:e,scaleX:t,scaleY:n}){return!jc(e)||!jc(t)||!jc(n)}function Cr(e){return af(e)||u2(e)||e.z||e.rotate||e.rotateX||e.rotateY}function u2(e){return cg(e.x)||cg(e.y)}function cg(e){return e&&e!=="0%"}function Il(e,t,n){const r=e-n,o=t*r;return n+o}function dg(e,t,n,r,o){return o!==void 0&&(e=Il(e,o,r)),Il(e,n,r)+t}function sf(e,t=0,n=1,r,o){e.min=dg(e.min,t,n,r,o),e.max=dg(e.max,t,n,r,o)}function c2(e,{x:t,y:n}){sf(e.x,t.translate,t.scale,t.originPoint),sf(e.y,n.translate,n.scale,n.originPoint)}function YE(e,t,n,r=!1){var o,a;const i=n.length;if(!i)return;t.x=t.y=1;let s,l;for(let u=0;u<i;u++)s=n[u],l=s.projectionDelta,((a=(o=s.instance)===null||o===void 0?void 0:o.style)===null||a===void 0?void 0:a.display)!=="contents"&&(r&&s.options.layoutScroll&&s.scroll&&s!==s.root&&yo(e,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),l&&(t.x*=l.x.scale,t.y*=l.y.scale,c2(e,l)),r&&Cr(s.latestValues)&&yo(e,s.latestValues));t.x=fg(t.x),t.y=fg(t.y)}function fg(e){return Number.isInteger(e)||e>1.0000000000001||e<.999999999999?e:1}function Hn(e,t){e.min=e.min+t,e.max=e.max+t}function pg(e,t,[n,r,o]){const a=t[o]!==void 0?t[o]:.5,i=Fe(e.min,e.max,a);sf(e,t[n],t[r],i,t.scale)}const ZE=["x","scaleX","originX"],XE=["y","scaleY","originY"];function yo(e,t){pg(e.x,t,ZE),pg(e.y,t,XE)}function d2(e,t){return l2(KE(e.getBoundingClientRect(),t))}function QE(e,t,n){const r=d2(e,n),{scroll:o}=t;return o&&(Hn(r.x,o.offset.x),Hn(r.y,o.offset.y)),r}const JE=new WeakMap;class eA{constructor(t){this.openGlobalLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=Re(),this.visualElement=t}start(t,{snapToCursor:n=!1}={}){if(this.visualElement.isPresent===!1)return;const r=s=>{this.stopAnimation(),n&&this.snapToCursor(Lp(s,"page").point)},o=(s,l)=>{var u;const{drag:c,dragPropagation:d,onDragStart:f}=this.getProps();c&&!d&&(this.openGlobalLock&&this.openGlobalLock(),this.openGlobalLock=Rv(c),!this.openGlobalLock)||(this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),nn(p=>{var y,v;let k=this.getAxisMotionValue(p).get()||0;if(mn.test(k)){const g=(v=(y=this.visualElement.projection)===null||y===void 0?void 0:y.layout)===null||v===void 0?void 0:v.layoutBox[p];g&&(k=_t(g)*(parseFloat(k)/100))}this.originPoint[p]=k}),f==null||f(s,l),(u=this.visualElement.animationState)===null||u===void 0||u.setActive(le.Drag,!0))},a=(s,l)=>{const{dragPropagation:u,dragDirectionLock:c,onDirectionLock:d,onDrag:f}=this.getProps();if(!u&&!this.openGlobalLock)return;const{offset:p}=l;if(c&&this.currentDirection===null){this.currentDirection=tA(p),this.currentDirection!==null&&(d==null||d(this.currentDirection));return}this.updateAxis("x",l.point,p),this.updateAxis("y",l.point,p),this.visualElement.render(),f==null||f(s,l)},i=(s,l)=>this.stop(s,l);this.panSession=new i2(t,{onSessionStart:r,onStart:o,onMove:a,onSessionEnd:i},{transformPagePoint:this.visualElement.getTransformPagePoint()})}stop(t,n){const r=this.isDragging;if(this.cancel(),!r)return;const{velocity:o}=n;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a==null||a(t,n)}cancel(){var t,n;this.isDragging=!1,this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!1),(t=this.panSession)===null||t===void 0||t.end(),this.panSession=void 0;const{dragPropagation:r}=this.getProps();!r&&this.openGlobalLock&&(this.openGlobalLock(),this.openGlobalLock=null),(n=this.visualElement.animationState)===null||n===void 0||n.setActive(le.Drag,!1)}updateAxis(t,n,r){const{drag:o}=this.getProps();if(!r||!vs(t,o,this.currentDirection))return;const a=this.getAxisMotionValue(t);let i=this.originPoint[t]+r[t];this.constraints&&this.constraints[t]&&(i=DE(i,this.constraints[t],this.elastic[t])),a.set(i)}resolveConstraints(){const{dragConstraints:t,dragElastic:n}=this.getProps(),{layout:r}=this.visualElement.projection||{},o=this.constraints;t&&ho(t)?this.constraints||(this.constraints=this.resolveRefConstraints()):t&&r?this.constraints=OE(r.layoutBox,t):this.constraints=!1,this.elastic=UE(n),o!==this.constraints&&r&&this.constraints&&!this.hasMutatedConstraints&&nn(a=>{this.getAxisMotionValue(a)&&(this.constraints[a]=HE(r.layoutBox[a],this.constraints[a]))})}resolveRefConstraints(){const{dragConstraints:t,onMeasureDragConstraints:n}=this.getProps();if(!t||!ho(t))return!1;const r=t.current,{projection:o}=this.visualElement;if(!o||!o.layout)return!1;const a=QE(r,o.root,this.visualElement.getTransformPagePoint());let i=$E(o.layout.layoutBox,a);if(n){const s=n(GE(i));this.hasMutatedConstraints=!!s,s&&(i=l2(s))}return i}startAnimation(t){const{drag:n,dragMomentum:r,dragElastic:o,dragTransition:a,dragSnapToOrigin:i,onDragTransitionEnd:s}=this.getProps(),l=this.constraints||{},u=nn(c=>{var d;if(!vs(c,n,this.currentDirection))return;let f=(d=l==null?void 0:l[c])!==null&&d!==void 0?d:{};i&&(f={min:0,max:0});const p=o?200:1e6,y=o?40:1e7,v={type:"inertia",velocity:r?t[c]:0,bounceStiffness:p,bounceDamping:y,timeConstant:750,restDelta:1,restSpeed:10,...a,...f};return this.startAxisValueAnimation(c,v)});return Promise.all(u).then(s)}startAxisValueAnimation(t,n){const r=this.getAxisMotionValue(t);return Kp(t,r,0,n)}stopAnimation(){nn(t=>this.getAxisMotionValue(t).stop())}getAxisMotionValue(t){var n,r;const o="_drag"+t.toUpperCase(),a=this.visualElement.getProps()[o];return a||this.visualElement.getValue(t,(r=(n=this.visualElement.getProps().initial)===null||n===void 0?void 0:n[t])!==null&&r!==void 0?r:0)}snapToCursor(t){nn(n=>{const{drag:r}=this.getProps();if(!vs(n,r,this.currentDirection))return;const{projection:o}=this.visualElement,a=this.getAxisMotionValue(n);if(o&&o.layout){const{min:i,max:s}=o.layout.layoutBox[n];a.set(t[n]-Fe(i,s,.5))}})}scalePositionWithinConstraints(){var t;if(!this.visualElement.current)return;const{drag:n,dragConstraints:r}=this.getProps(),{projection:o}=this.visualElement;if(!ho(r)||!o||!this.constraints)return;this.stopAnimation();const a={x:0,y:0};nn(s=>{const l=this.getAxisMotionValue(s);if(l){const u=l.get();a[s]=WE({min:u,max:u},this.constraints[s])}});const{transformTemplate:i}=this.visualElement.getProps();this.visualElement.current.style.transform=i?i({},""):"none",(t=o.root)===null||t===void 0||t.updateScroll(),o.updateLayout(),this.resolveConstraints(),nn(s=>{if(!vs(s,n,null))return;const l=this.getAxisMotionValue(s),{min:u,max:c}=this.constraints[s];l.set(Fe(u,c,a[s]))})}addListeners(){var t;if(!this.visualElement.current)return;JE.set(this.visualElement,this);const n=this.visualElement.current,r=qo(n,"pointerdown",u=>{const{drag:c,dragListener:d=!0}=this.getProps();c&&d&&this.start(u)}),o=()=>{const{dragConstraints:u}=this.getProps();ho(u)&&(this.constraints=this.resolveRefConstraints())},{projection:a}=this.visualElement,i=a.addEventListener("measure",o);a&&!a.layout&&((t=a.root)===null||t===void 0||t.updateScroll(),a.updateLayout()),o();const s=Su(window,"resize",()=>this.scalePositionWithinConstraints()),l=a.addEventListener("didUpdate",({delta:u,hasLayoutChanged:c})=>{this.isDragging&&c&&(nn(d=>{const f=this.getAxisMotionValue(d);!f||(this.originPoint[d]+=u[d].translate,f.set(f.get()+u[d].translate))}),this.visualElement.render())});return()=>{s(),r(),i(),l==null||l()}}getProps(){const t=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:r=!1,dragPropagation:o=!1,dragConstraints:a=!1,dragElastic:i=of,dragMomentum:s=!0}=t;return{...t,drag:n,dragDirectionLock:r,dragPropagation:o,dragConstraints:a,dragElastic:i,dragMomentum:s}}}function vs(e,t,n){return(t===!0||t===e)&&(n===null||n===e)}function tA(e,t=10){let n=null;return Math.abs(e.y)>t?n="y":Math.abs(e.x)>t&&(n="x"),n}function nA(e){const{dragControls:t,visualElement:n}=e,r=wu(()=>new eA(n));w.exports.useEffect(()=>t&&t.subscribe(r),[r,t]),w.exports.useEffect(()=>r.addListeners(),[r])}function rA({onPan:e,onPanStart:t,onPanEnd:n,onPanSessionStart:r,visualElement:o}){const a=e||t||n||r,i=w.exports.useRef(null),{transformPagePoint:s}=w.exports.useContext(Ep),l={onSessionStart:r,onStart:t,onMove:e,onEnd:(c,d)=>{i.current=null,n&&n(c,d)}};w.exports.useEffect(()=>{i.current!==null&&i.current.updateHandlers(l)});function u(c){i.current=new i2(c,l,{transformPagePoint:s})}_l(o,"pointerdown",a&&u),jp(()=>i.current&&i.current.end())}const oA={pan:Qn(rA),drag:Qn(nA)};function lf(e){return typeof e=="string"&&e.startsWith("var(--")}const f2=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/;function aA(e){const t=f2.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]}function uf(e,t,n=1){const[r,o]=aA(e);if(!r)return;const a=window.getComputedStyle(t).getPropertyValue(r);return a?a.trim():lf(o)?uf(o,t,n+1):o}function iA(e,{...t},n){const r=e.current;if(!(r instanceof Element))return{target:t,transitionEnd:n};n&&(n={...n}),e.values.forEach(o=>{const a=o.get();if(!lf(a))return;const i=uf(a,r);i&&o.set(i)});for(const o in t){const a=t[o];if(!lf(a))continue;const i=uf(a,r);!i||(t[o]=i,n&&n[o]===void 0&&(n[o]=a))}return{target:t,transitionEnd:n}}const sA=new Set(["width","height","top","left","right","bottom","x","y"]),p2=e=>sA.has(e),lA=e=>Object.keys(e).some(p2),m2=(e,t)=>{e.set(t,!1),e.set(t)},mg=e=>e===Gr||e===D;var hg;(function(e){e.width="width",e.height="height",e.left="left",e.right="right",e.top="top",e.bottom="bottom"})(hg||(hg={}));const gg=(e,t)=>parseFloat(e.split(", ")[t]),yg=(e,t)=>(n,{transform:r})=>{if(r==="none"||!r)return 0;const o=r.match(/^matrix3d\((.+)\)$/);if(o)return gg(o[1],t);{const a=r.match(/^matrix\((.+)\)$/);return a?gg(a[1],e):0}},uA=new Set(["x","y","z"]),cA=Cl.filter(e=>!uA.has(e));function dA(e){const t=[];return cA.forEach(n=>{const r=e.getValue(n);r!==void 0&&(t.push([n,r.get()]),r.set(n.startsWith("scale")?1:0))}),t.length&&e.render(),t}const bg={width:({x:e},{paddingLeft:t="0",paddingRight:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),height:({y:e},{paddingTop:t="0",paddingBottom:n="0"})=>e.max-e.min-parseFloat(t)-parseFloat(n),top:(e,{top:t})=>parseFloat(t),left:(e,{left:t})=>parseFloat(t),bottom:({y:e},{top:t})=>parseFloat(t)+(e.max-e.min),right:({x:e},{left:t})=>parseFloat(t)+(e.max-e.min),x:yg(4,13),y:yg(5,14)},fA=(e,t,n)=>{const r=t.measureViewportBox(),o=t.current,a=getComputedStyle(o),{display:i}=a,s={};i==="none"&&t.setStaticValue("display",e.display||"block"),n.forEach(u=>{s[u]=bg[u](r,a)}),t.render();const l=t.measureViewportBox();return n.forEach(u=>{const c=t.getValue(u);m2(c,s[u]),e[u]=bg[u](l,a)}),e},pA=(e,t,n={},r={})=>{t={...t},r={...r};const o=Object.keys(t).filter(p2);let a=[],i=!1;const s=[];if(o.forEach(l=>{const u=e.getValue(l);if(!e.hasValue(l))return;let c=n[l],d=pa(c);const f=t[l];let p;if(vi(f)){const y=f.length,v=f[0]===null?1:0;c=f[v],d=pa(c);for(let k=v;k<y;k++)p?Fl(pa(f[k])===p):p=pa(f[k])}else p=pa(f);if(d!==p)if(mg(d)&&mg(p)){const y=u.get();typeof y=="string"&&u.set(parseFloat(y)),typeof f=="string"?t[l]=parseFloat(f):Array.isArray(f)&&p===D&&(t[l]=f.map(parseFloat))}else(d==null?void 0:d.transform)&&(p==null?void 0:p.transform)&&(c===0||f===0)?c===0?u.set(p.transform(c)):t[l]=d.transform(f):(i||(a=dA(e),i=!0),s.push(l),r[l]=r[l]!==void 0?r[l]:t[l],m2(u,f))}),s.length){const l=s.indexOf("height")>=0?window.pageYOffset:null,u=fA(t,e,s);return a.length&&a.forEach(([c,d])=>{e.getValue(c).set(d)}),e.render(),Ur&&l!==null&&window.scrollTo({top:l}),{target:u,transitionEnd:r}}else return{target:t,transitionEnd:r}};function mA(e,t,n,r){return lA(t)?pA(e,t,n,r):{target:t,transitionEnd:r}}const hA=(e,t,n,r)=>{const o=iA(e,t,r);return t=o.target,r=o.transitionEnd,mA(e,t,n,r)},cf={current:null},h2={current:!1};function gA(){if(h2.current=!0,!!Ur)if(window.matchMedia){const e=window.matchMedia("(prefers-reduced-motion)"),t=()=>cf.current=e.matches;e.addListener(t),t()}else cf.current=!1}function yA(e,t,n){const{willChange:r}=t;for(const o in t){const a=t[o],i=n[o];if(hn(a))e.addValue(o,a),ql(r)&&r.add(o);else if(hn(i))e.addValue(o,Oo(a)),ql(r)&&r.remove(o);else if(i!==a)if(e.hasValue(o)){const s=e.getValue(o);!s.hasAnimated&&s.set(a)}else{const s=e.getStaticValue(o);e.addValue(o,Oo(s!==void 0?s:a))}}for(const o in n)t[o]===void 0&&e.removeValue(o);return t}const g2=Object.keys(yi),bA=g2.length,vg=["AnimationStart","AnimationComplete","Update","Unmount","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];class vA{constructor({parent:t,props:n,reducedMotionConfig:r,visualState:o},a={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.values=new Map,this.isPresent=!0,this.valueSubscriptions=new Map,this.prevMotionValues={},this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{!this.current||(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.scheduleRender=()=>Vt.render(this.render,!1,!0);const{latestValues:i,renderState:s}=o;this.latestValues=i,this.baseTarget={...i},this.initialValues=n.initial?{...i}:{},this.renderState=s,this.parent=t,this.props=n,this.depth=t?t.depth+1:0,this.reducedMotionConfig=r,this.options=a,this.isControllingVariants=vu(n),this.isVariantNode=iv(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=Boolean(t&&t.current);const{willChange:l,...u}=this.scrapeMotionValuesFromProps(n);for(const c in u){const d=u[c];i[c]!==void 0&&hn(d)&&(d.set(i[c],!1),ql(l)&&l.add(c))}}scrapeMotionValuesFromProps(t){return{}}mount(t){var n;this.current=t,this.projection&&this.projection.mount(t),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=(n=this.parent)===null||n===void 0?void 0:n.addVariantChild(this)),this.values.forEach((r,o)=>this.bindToMotionValue(o,r)),h2.current||gA(),this.shouldReduceMotion=this.reducedMotionConfig==="never"?!1:this.reducedMotionConfig==="always"?!0:cf.current,this.parent&&this.parent.children.add(this),this.setProps(this.props)}unmount(){var t,n,r;(t=this.projection)===null||t===void 0||t.unmount(),dr.update(this.notifyUpdate),dr.render(this.render),this.valueSubscriptions.forEach(o=>o()),(n=this.removeFromVariantTree)===null||n===void 0||n.call(this),(r=this.parent)===null||r===void 0||r.children.delete(this);for(const o in this.events)this.events[o].clear();this.current=null}bindToMotionValue(t,n){const r=Yo.has(t),o=n.onChange(i=>{this.latestValues[t]=i,this.props.onUpdate&&Vt.update(this.notifyUpdate,!1,!0),r&&this.projection&&(this.projection.isTransformDirty=!0)}),a=n.onRenderRequest(this.scheduleRender);this.valueSubscriptions.set(t,()=>{o(),a()})}sortNodePosition(t){return!this.current||!this.sortInstanceNodePosition||this.type!==t.type?0:this.sortInstanceNodePosition(this.current,t.current)}loadFeatures(t,n,r,o,a,i){const s=[];for(let l=0;l<bA;l++){const u=g2[l],{isEnabled:c,Component:d}=yi[u];c(t)&&d&&s.push(w.exports.createElement(d,{key:u,...t,visualElement:this}))}if(!this.projection&&a){this.projection=new a(o,this.latestValues,this.parent&&this.parent.projection);const{layoutId:l,layout:u,drag:c,dragConstraints:d,layoutScroll:f}=t;this.projection.setOptions({layoutId:l,layout:u,alwaysMeasureLayout:Boolean(c)||d&&ho(d),visualElement:this,scheduleRender:()=>this.scheduleRender(),animationType:typeof u=="string"?u:"both",initialPromotionConfig:i,layoutScroll:f})}return s}triggerBuild(){this.build(this.renderState,this.latestValues,this.options,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):Re()}getStaticValue(t){return this.latestValues[t]}setStaticValue(t,n){this.latestValues[t]=n}makeTargetAnimatable(t,n=!0){return this.makeTargetAnimatableFromInstance(t,this.props,n)}setProps(t){(t.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.props=t;for(let n=0;n<vg.length;n++){const r=vg[n];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const o=t["on"+r];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=yA(this,this.scrapeMotionValuesFromProps(t),this.prevMotionValues)}getProps(){return this.props}getVariant(t){var n;return(n=this.props.variants)===null||n===void 0?void 0:n[t]}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){var t;return this.isVariantNode?this:(t=this.parent)===null||t===void 0?void 0:t.getClosestVariantNode()}getVariantContext(t=!1){var n,r;if(t)return(n=this.parent)===null||n===void 0?void 0:n.getVariantContext();if(!this.isControllingVariants){const a=((r=this.parent)===null||r===void 0?void 0:r.getVariantContext())||{};return this.props.initial!==void 0&&(a.initial=this.props.initial),a}const o={};for(let a=0;a<wA;a++){const i=y2[a],s=this.props[i];(gi(s)||s===!1)&&(o[i]=s)}return o}addVariantChild(t){var n;const r=this.getClosestVariantNode();if(r)return(n=r.variantChildren)===null||n===void 0||n.add(t),()=>r.variantChildren.delete(t)}addValue(t,n){this.hasValue(t)&&this.removeValue(t),this.values.set(t,n),this.latestValues[t]=n.get(),this.bindToMotionValue(t,n)}removeValue(t){var n;this.values.delete(t),(n=this.valueSubscriptions.get(t))===null||n===void 0||n(),this.valueSubscriptions.delete(t),delete this.latestValues[t],this.removeValueFromRenderState(t,this.renderState)}hasValue(t){return this.values.has(t)}getValue(t,n){if(this.props.values&&this.props.values[t])return this.props.values[t];let r=this.values.get(t);return r===void 0&&n!==void 0&&(r=Oo(n),this.addValue(t,r)),r}readValue(t){return this.latestValues[t]!==void 0||!this.current?this.latestValues[t]:this.readValueFromInstance(this.current,t,this.options)}setBaseTarget(t,n){this.baseTarget[t]=n}getBaseTarget(t){var n;const{initial:r}=this.props,o=typeof r=="string"||typeof r=="object"?(n=Vp(this.props,r))===null||n===void 0?void 0:n[t]:void 0;if(r&&o!==void 0)return o;const a=this.getBaseTargetFromProps(this.props,t);return a!==void 0&&!hn(a)?a:this.initialValues[t]!==void 0&&o===void 0?void 0:this.baseTarget[t]}on(t,n){return this.events[t]||(this.events[t]=new Na),this.events[t].add(n)}notify(t,...n){var r;(r=this.events[t])===null||r===void 0||r.notify(...n)}}const y2=["initial",...Xp],wA=y2.length;class b2 extends vA{sortInstanceNodePosition(t,n){return t.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(t,n){var r;return(r=t.style)===null||r===void 0?void 0:r[n]}removeValueFromRenderState(t,{vars:n,style:r}){delete n[t],delete r[t]}makeTargetAnimatableFromInstance({transition:t,transitionEnd:n,...r},{transformValues:o},a){let i=_E(r,t||{},this);if(o&&(n&&(n=o(n)),r&&(r=o(r)),i&&(i=o(i))),a){CE(this,r,i);const s=hA(this,r,i,n);n=s.transitionEnd,r=s.target}return{transition:t,transitionEnd:n,...r}}}function SA(e){return window.getComputedStyle(e)}class xA extends b2{readValueFromInstance(t,n){if(Yo.has(n)){const r=Hp(n);return r&&r.default||0}else{const r=SA(t),o=(uv(n)?r.getPropertyValue(n):r[n])||0;return typeof o=="string"?o.trim():o}}measureInstanceViewportBox(t,{transformPagePoint:n}){return d2(t,n)}build(t,n,r,o){Ip(t,n,r,o.transformTemplate)}scrapeMotionValuesFromProps(t){return Mp(t)}renderInstance(t,n,r,o){xv(t,n,r,o)}}class CA extends b2{getBaseTargetFromProps(t,n){return t[n]}readValueFromInstance(t,n){var r;return Yo.has(n)?((r=Hp(n))===null||r===void 0?void 0:r.default)||0:(n=Cv.has(n)?n:Sv(n),t.getAttribute(n))}measureInstanceViewportBox(){return Re()}scrapeMotionValuesFromProps(t){return _v(t)}build(t,n,r,o){zp(t,n,r,o.transformTemplate)}renderInstance(t,n,r,o){kv(t,n,r,o)}}const kA=(e,t)=>Pp(e)?new CA(t,{enableHardwareAcceleration:!1}):new xA(t,{enableHardwareAcceleration:!0});function wg(e,t){return t.max===t.min?0:e/(t.max-t.min)*100}const ma={correct:(e,t)=>{if(!t.target)return e;if(typeof e=="string")if(D.test(e))e=parseFloat(e);else return e;const n=wg(e,t.target.x),r=wg(e,t.target.y);return`${n}% ${r}%`}},Sg="_$css",_A={correct:(e,{treeScale:t,projectionDelta:n})=>{const r=e,o=e.includes("var("),a=[];o&&(e=e.replace(f2,p=>(a.push(p),Sg)));const i=zn.parse(e);if(i.length>5)return r;const s=zn.createTransformer(e),l=typeof i[0]!="number"?1:0,u=n.x.scale*t.x,c=n.y.scale*t.y;i[0+l]/=u,i[1+l]/=c;const d=Fe(u,c,.5);typeof i[2+l]=="number"&&(i[2+l]/=d),typeof i[3+l]=="number"&&(i[3+l]/=d);let f=s(i);if(o){let p=0;f=f.replace(Sg,()=>{const y=a[p];return p++,y})}return f}};class TA extends R.Component{componentDidMount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r,layoutId:o}=this.props,{projection:a}=t;oT(EA),a&&(n.group&&n.group.add(a),r&&r.register&&o&&r.register(a),a.root.didUpdate(),a.addEventListener("animationComplete",()=>{this.safeToRemove()}),a.setOptions({...a.options,onExitComplete:()=>this.safeToRemove()})),Va.hasEverUpdated=!0}getSnapshotBeforeUpdate(t){const{layoutDependency:n,visualElement:r,drag:o,isPresent:a}=this.props,i=r.projection;return i&&(i.isPresent=a,o||t.layoutDependency!==n||n===void 0?i.willUpdate():this.safeToRemove(),t.isPresent!==a&&(a?i.promote():i.relegate()||Vt.postRender(()=>{var s;!((s=i.getStack())===null||s===void 0)&&s.members.length||this.safeToRemove()}))),null}componentDidUpdate(){const{projection:t}=this.props.visualElement;t&&(t.root.didUpdate(),!t.currentAnimation&&t.isLead()&&this.safeToRemove())}componentWillUnmount(){const{visualElement:t,layoutGroup:n,switchLayoutGroup:r}=this.props,{projection:o}=t;o&&(o.scheduleCheckAfterUnmount(),n!=null&&n.group&&n.group.remove(o),r!=null&&r.deregister&&r.deregister(o))}safeToRemove(){const{safeToRemove:t}=this.props;t==null||t()}render(){return null}}function FA(e){const[t,n]=jv(),r=w.exports.useContext(Ap);return F(TA,{...e,layoutGroup:r,switchLayoutGroup:w.exports.useContext(sv),isPresent:t,safeToRemove:n})}const EA={borderRadius:{...ma,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:ma,borderTopRightRadius:ma,borderBottomLeftRadius:ma,borderBottomRightRadius:ma,boxShadow:_A},AA={measureLayout:FA};function PA(e,t,n={}){const r=hn(e)?e:Oo(e);return Kp("",r,t,n),{stop:()=>r.stop(),isAnimating:()=>r.isAnimating()}}const v2=["TopLeft","TopRight","BottomLeft","BottomRight"],qA=v2.length,xg=e=>typeof e=="string"?parseFloat(e):e,Cg=e=>typeof e=="number"||D.test(e);function IA(e,t,n,r,o,a){var i,s,l,u;o?(e.opacity=Fe(0,(i=n.opacity)!==null&&i!==void 0?i:1,RA(r)),e.opacityExit=Fe((s=t.opacity)!==null&&s!==void 0?s:1,0,zA(r))):a&&(e.opacity=Fe((l=t.opacity)!==null&&l!==void 0?l:1,(u=n.opacity)!==null&&u!==void 0?u:1,r));for(let c=0;c<qA;c++){const d=`border${v2[c]}Radius`;let f=kg(t,d),p=kg(n,d);if(f===void 0&&p===void 0)continue;f||(f=0),p||(p=0),f===0||p===0||Cg(f)===Cg(p)?(e[d]=Math.max(Fe(xg(f),xg(p),r),0),(mn.test(p)||mn.test(f))&&(e[d]+="%")):e[d]=p}(t.rotate||n.rotate)&&(e.rotate=Fe(t.rotate||0,n.rotate||0,r))}function kg(e,t){var n;return(n=e[t])!==null&&n!==void 0?n:e.borderRadius}const RA=w2(0,.5,$p),zA=w2(.5,.95,Np);function w2(e,t,n){return r=>r<e?0:r>t?1:n(Pl(e,t,r))}function _g(e,t){e.min=t.min,e.max=t.max}function Ot(e,t){_g(e.x,t.x),_g(e.y,t.y)}function Tg(e,t,n,r,o){return e-=t,e=Il(e,1/n,r),o!==void 0&&(e=Il(e,1/o,r)),e}function MA(e,t=0,n=1,r=.5,o,a=e,i=e){if(mn.test(t)&&(t=parseFloat(t),t=Fe(i.min,i.max,t/100)-i.min),typeof t!="number")return;let s=Fe(a.min,a.max,r);e===a&&(s-=t),e.min=Tg(e.min,t,n,s,o),e.max=Tg(e.max,t,n,s,o)}function Fg(e,t,[n,r,o],a,i){MA(e,t[n],t[r],t[o],t.scale,a,i)}const VA=["x","scaleX","originX"],LA=["y","scaleY","originY"];function Eg(e,t,n,r){Fg(e.x,t,VA,n==null?void 0:n.x,r==null?void 0:r.x),Fg(e.y,t,LA,n==null?void 0:n.y,r==null?void 0:r.y)}function Ag(e){return e.translate===0&&e.scale===1}function S2(e){return Ag(e.x)&&Ag(e.y)}function x2(e,t){return e.x.min===t.x.min&&e.x.max===t.x.max&&e.y.min===t.y.min&&e.y.max===t.y.max}function Pg(e){return _t(e.x)/_t(e.y)}class jA{constructor(){this.members=[]}add(t){Yp(this.members,t),t.scheduleRender()}remove(t){if(Zp(this.members,t),t===this.prevLead&&(this.prevLead=void 0),t===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(t){const n=this.members.findIndex(o=>t===o);if(n===0)return!1;let r;for(let o=n;o>=0;o--){const a=this.members[o];if(a.isPresent!==!1){r=a;break}}return r?(this.promote(r),!0):!1}promote(t,n){var r;const o=this.lead;if(t!==o&&(this.prevLead=o,this.lead=t,t.show(),o)){o.instance&&o.scheduleRender(),t.scheduleRender(),t.resumeFrom=o,n&&(t.resumeFrom.preserveOpacity=!0),o.snapshot&&(t.snapshot=o.snapshot,t.snapshot.latestValues=o.animationValues||o.latestValues),!((r=t.root)===null||r===void 0)&&r.isUpdating&&(t.isLayoutDirty=!0);const{crossfade:a}=t.options;a===!1&&o.hide()}}exitAnimationComplete(){this.members.forEach(t=>{var n,r,o,a,i;(r=(n=t.options).onExitComplete)===null||r===void 0||r.call(n),(i=(o=t.resumingFrom)===null||o===void 0?void 0:(a=o.options).onExitComplete)===null||i===void 0||i.call(a)})}scheduleRender(){this.members.forEach(t=>{t.instance&&t.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}function qg(e,t,n){let r="";const o=e.x.translate/t.x,a=e.y.translate/t.y;if((o||a)&&(r=`translate3d(${o}px, ${a}px, 0) `),(t.x!==1||t.y!==1)&&(r+=`scale(${1/t.x}, ${1/t.y}) `),n){const{rotate:l,rotateX:u,rotateY:c}=n;l&&(r+=`rotate(${l}deg) `),u&&(r+=`rotateX(${u}deg) `),c&&(r+=`rotateY(${c}deg) `)}const i=e.x.scale*t.x,s=e.y.scale*t.y;return(i!==1||s!==1)&&(r+=`scale(${i}, ${s})`),r||"none"}const NA=(e,t)=>e.depth-t.depth;class BA{constructor(){this.children=[],this.isDirty=!1}add(t){Yp(this.children,t),this.isDirty=!0}remove(t){Zp(this.children,t),this.isDirty=!0}forEach(t){this.isDirty&&this.children.sort(NA),this.isDirty=!1,this.children.forEach(t)}}const Ig=["","X","Y","Z"],Rg=1e3;let DA=0;function C2({attachResizeListener:e,defaultParent:t,measureScroll:n,checkIsScrollRoot:r,resetTransform:o}){return class{constructor(i,s={},l=t==null?void 0:t()){this.id=DA++,this.animationId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isTransformDirty=!1,this.isProjectionDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.potentialNodes=new Map,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.nodes.forEach(WA),this.nodes.forEach(GA),this.nodes.forEach(KA)},this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.elementId=i,this.latestValues=s,this.root=l?l.root||l:this,this.path=l?[...l.path,l]:[],this.parent=l,this.depth=l?l.depth+1:0,i&&this.root.registerPotentialNode(i,this);for(let u=0;u<this.path.length;u++)this.path[u].shouldResetTransform=!0;this.root===this&&(this.nodes=new BA)}addEventListener(i,s){return this.eventHandlers.has(i)||this.eventHandlers.set(i,new Na),this.eventHandlers.get(i).add(s)}notifyListeners(i,...s){const l=this.eventHandlers.get(i);l==null||l.notify(...s)}hasListeners(i){return this.eventHandlers.has(i)}registerPotentialNode(i,s){this.potentialNodes.set(i,s)}mount(i,s=!1){var l;if(this.instance)return;this.isSVG=i instanceof SVGElement&&i.tagName!=="svg",this.instance=i;const{layoutId:u,layout:c,visualElement:d}=this.options;if(d&&!d.current&&d.mount(i),this.root.nodes.add(this),(l=this.parent)===null||l===void 0||l.children.add(this),this.elementId&&this.root.potentialNodes.delete(this.elementId),s&&(c||u)&&(this.isLayoutDirty=!0),e){let f;const p=()=>this.root.updateBlockedByResize=!1;e(i,()=>{this.root.updateBlockedByResize=!0,f&&f(),f=Gv(p,250),Va.hasAnimatedSinceResize&&(Va.hasAnimatedSinceResize=!1,this.nodes.forEach(Mg))})}u&&this.root.registerSharedNode(u,this),this.options.animate!==!1&&d&&(u||c)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:p,hasRelativeTargetChanged:y,layout:v})=>{var k,g,m,h,S;if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const T=(g=(k=this.options.transition)!==null&&k!==void 0?k:d.getDefaultTransition())!==null&&g!==void 0?g:JA,{onLayoutAnimationStart:A,onLayoutAnimationComplete:E}=d.getProps(),q=!this.targetLayout||!x2(this.targetLayout,v)||y,j=!p&&y;if(((m=this.resumeFrom)===null||m===void 0?void 0:m.instance)||j||p&&(q||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0),this.setAnimationOrigin(f,j);const V={...Gp(T,"layout"),onPlay:A,onComplete:E};d.shouldReduceMotion&&(V.delay=0,V.type=!1),this.startAnimation(V)}else!p&&this.animationProgress===0&&Mg(this),this.isLead()&&((S=(h=this.options).onExitComplete)===null||S===void 0||S.call(h));this.targetLayout=v})}unmount(){var i,s;this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this),(i=this.getStack())===null||i===void 0||i.remove(this),(s=this.parent)===null||s===void 0||s.children.delete(this),this.instance=void 0,dr.preRender(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){var i;return this.isAnimationBlocked||((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimationBlocked())||!1}startUpdate(){var i;this.isUpdateBlocked()||(this.isUpdating=!0,(i=this.nodes)===null||i===void 0||i.forEach(YA),this.animationId++)}willUpdate(i=!0){var s,l,u;if(this.root.isUpdateBlocked()){(l=(s=this.options).onExitComplete)===null||l===void 0||l.call(s);return}if(!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let p=0;p<this.path.length;p++){const y=this.path[p];y.shouldResetTransform=!0,y.updateScroll("snapshot")}const{layoutId:c,layout:d}=this.options;if(c===void 0&&!d)return;const f=(u=this.options.visualElement)===null||u===void 0?void 0:u.getProps().transformTemplate;this.prevTransformTemplateValue=f==null?void 0:f(this.latestValues,""),this.updateSnapshot(),i&&this.notifyListeners("willUpdate")}didUpdate(){if(this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(zg);return}!this.isUpdating||(this.isUpdating=!1,this.potentialNodes.size&&(this.potentialNodes.forEach(eP),this.potentialNodes.clear()),this.nodes.forEach(UA),this.nodes.forEach(OA),this.nodes.forEach($A),this.clearAllSnapshots(),Ic.update(),Ic.preRender(),Ic.render())}clearAllSnapshots(){this.nodes.forEach(HA),this.sharedNodes.forEach(ZA)}scheduleUpdateProjection(){Vt.preRender(this.updateProjection,!1,!0)}scheduleCheckAfterUnmount(){Vt.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure())}updateLayout(){var i;if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const s=this.layout;this.layout=this.measure(!1),this.layoutCorrected=Re(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox),(i=this.options.visualElement)===null||i===void 0||i.notify("LayoutMeasure",this.layout.layoutBox,s==null?void 0:s.layoutBox)}updateScroll(i="measure"){let s=Boolean(this.options.layoutScroll&&this.instance);this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===i&&(s=!1),s&&(this.scroll={animationId:this.root.animationId,phase:i,isRoot:r(this.instance),offset:n(this.instance)})}resetTransform(){var i;if(!o)return;const s=this.isLayoutDirty||this.shouldResetTransform,l=this.projectionDelta&&!S2(this.projectionDelta),u=(i=this.options.visualElement)===null||i===void 0?void 0:i.getProps().transformTemplate,c=u==null?void 0:u(this.latestValues,""),d=c!==this.prevTransformTemplateValue;s&&(l||Cr(this.latestValues)||d)&&(o(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(i=!0){const s=this.measurePageBox();let l=this.removeElementScroll(s);return i&&(l=this.removeTransform(l)),tP(l),{animationId:this.root.animationId,measuredBox:s,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){const{visualElement:i}=this.options;if(!i)return Re();const s=i.measureViewportBox(),{scroll:l}=this.root;return l&&(Hn(s.x,l.offset.x),Hn(s.y,l.offset.y)),s}removeElementScroll(i){const s=Re();Ot(s,i);for(let l=0;l<this.path.length;l++){const u=this.path[l],{scroll:c,options:d}=u;if(u!==this.root&&c&&d.layoutScroll){if(c.isRoot){Ot(s,i);const{scroll:f}=this.root;f&&(Hn(s.x,-f.offset.x),Hn(s.y,-f.offset.y))}Hn(s.x,c.offset.x),Hn(s.y,c.offset.y)}}return s}applyTransform(i,s=!1){const l=Re();Ot(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];!s&&c.options.layoutScroll&&c.scroll&&c!==c.root&&yo(l,{x:-c.scroll.offset.x,y:-c.scroll.offset.y}),Cr(c.latestValues)&&yo(l,c.latestValues)}return Cr(this.latestValues)&&yo(l,this.latestValues),l}removeTransform(i){var s;const l=Re();Ot(l,i);for(let u=0;u<this.path.length;u++){const c=this.path[u];if(!c.instance||!Cr(c.latestValues))continue;af(c.latestValues)&&c.updateSnapshot();const d=Re(),f=c.measurePageBox();Ot(d,f),Eg(l,c.latestValues,(s=c.snapshot)===null||s===void 0?void 0:s.layoutBox,d)}return Cr(this.latestValues)&&Eg(l,this.latestValues),l}setTargetDelta(i){this.targetDelta=i,this.isProjectionDirty=!0,this.root.scheduleUpdateProjection()}setOptions(i){this.options={...this.options,...i,crossfade:i.crossfade!==void 0?i.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}resolveTargetDelta(){var i;const s=this.getLead();if(this.isProjectionDirty||(this.isProjectionDirty=s.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=s.isTransformDirty),!this.isProjectionDirty&&!this.attemptToResolveRelativeTarget)return;const{layout:l,layoutId:u}=this.options;if(!(!this.layout||!(l||u))){if(!this.targetDelta&&!this.relativeTarget){const c=this.getClosestProjectingParent();c&&c.layout?(this.relativeParent=c,this.relativeTarget=Re(),this.relativeTargetOrigin=Re(),Da(this.relativeTargetOrigin,this.layout.layoutBox,c.layout.layoutBox),Ot(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}if(!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=Re(),this.targetWithTransforms=Re()),this.relativeTarget&&this.relativeTargetOrigin&&((i=this.relativeParent)===null||i===void 0?void 0:i.target)?BE(this.target,this.relativeTarget,this.relativeParent.target):this.targetDelta?(Boolean(this.resumingFrom)?this.target=this.applyTransform(this.layout.layoutBox):Ot(this.target,this.layout.layoutBox),c2(this.target,this.targetDelta)):Ot(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget)){this.attemptToResolveRelativeTarget=!1;const c=this.getClosestProjectingParent();c&&Boolean(c.resumingFrom)===Boolean(this.resumingFrom)&&!c.options.layoutScroll&&c.target?(this.relativeParent=c,this.relativeTarget=Re(),this.relativeTargetOrigin=Re(),Da(this.relativeTargetOrigin,this.target,c.target),Ot(this.relativeTarget,this.relativeTargetOrigin)):this.relativeParent=this.relativeTarget=void 0}}}getClosestProjectingParent(){if(!(!this.parent||af(this.parent.latestValues)||u2(this.parent.latestValues)))return(this.parent.relativeTarget||this.parent.targetDelta)&&this.parent.layout?this.parent:this.parent.getClosestProjectingParent()}calcProjection(){var i;const{isProjectionDirty:s,isTransformDirty:l}=this;this.isProjectionDirty=this.isTransformDirty=!1;const u=this.getLead(),c=Boolean(this.resumingFrom)||this!==u;let d=!0;if(s&&(d=!1),c&&l&&(d=!1),d)return;const{layout:f,layoutId:p}=this.options;if(this.isTreeAnimating=Boolean(((i=this.parent)===null||i===void 0?void 0:i.isTreeAnimating)||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(f||p))return;Ot(this.layoutCorrected,this.layout.layoutBox),YE(this.layoutCorrected,this.treeScale,this.path,c);const{target:y}=u;if(!y)return;this.projectionDelta||(this.projectionDelta=Oa(),this.projectionDeltaWithTransform=Oa());const v=this.treeScale.x,k=this.treeScale.y,g=this.projectionTransform;Ba(this.projectionDelta,this.layoutCorrected,y,this.latestValues),this.projectionTransform=qg(this.projectionDelta,this.treeScale),(this.projectionTransform!==g||this.treeScale.x!==v||this.treeScale.y!==k)&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",y))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(i=!0){var s,l,u;(l=(s=this.options).scheduleRender)===null||l===void 0||l.call(s),i&&((u=this.getStack())===null||u===void 0||u.scheduleRender()),this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}setAnimationOrigin(i,s=!1){var l,u;const c=this.snapshot,d=(c==null?void 0:c.latestValues)||{},f={...this.latestValues},p=Oa();this.relativeTarget=this.relativeTargetOrigin=void 0,this.attemptToResolveRelativeTarget=!s;const y=Re(),v=(c==null?void 0:c.source)!==((l=this.layout)===null||l===void 0?void 0:l.source),k=(((u=this.getStack())===null||u===void 0?void 0:u.members.length)||0)<=1,g=Boolean(v&&!k&&this.options.crossfade===!0&&!this.path.some(QA));this.animationProgress=0,this.mixTargetDelta=m=>{var h;const S=m/1e3;Vg(p.x,i.x,S),Vg(p.y,i.y,S),this.setTargetDelta(p),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&((h=this.relativeParent)===null||h===void 0?void 0:h.layout)&&(Da(y,this.layout.layoutBox,this.relativeParent.layout.layoutBox),XA(this.relativeTarget,this.relativeTargetOrigin,y,S)),v&&(this.animationValues=f,IA(f,d,this.latestValues,S,g,k)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=S},this.mixTargetDelta(0)}startAnimation(i){var s,l;this.notifyListeners("animationStart"),(s=this.currentAnimation)===null||s===void 0||s.stop(),this.resumingFrom&&((l=this.resumingFrom.currentAnimation)===null||l===void 0||l.stop()),this.pendingAnimation&&(dr.update(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=Vt.update(()=>{Va.hasAnimatedSinceResize=!0,this.currentAnimation=PA(0,Rg,{...i,onUpdate:u=>{var c;this.mixTargetDelta(u),(c=i.onUpdate)===null||c===void 0||c.call(i,u)},onComplete:()=>{var u;(u=i.onComplete)===null||u===void 0||u.call(i),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){var i;this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0),(i=this.getStack())===null||i===void 0||i.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){var i;this.currentAnimation&&((i=this.mixTargetDelta)===null||i===void 0||i.call(this,Rg),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const i=this.getLead();let{targetWithTransforms:s,target:l,layout:u,latestValues:c}=i;if(!(!s||!l||!u)){if(this!==i&&this.layout&&u&&k2(this.options.animationType,this.layout.layoutBox,u.layoutBox)){l=this.target||Re();const d=_t(this.layout.layoutBox.x);l.x.min=i.target.x.min,l.x.max=l.x.min+d;const f=_t(this.layout.layoutBox.y);l.y.min=i.target.y.min,l.y.max=l.y.min+f}Ot(s,l),yo(s,c),Ba(this.projectionDeltaWithTransform,this.layoutCorrected,s,c)}}registerSharedNode(i,s){var l,u,c;this.sharedNodes.has(i)||this.sharedNodes.set(i,new jA),this.sharedNodes.get(i).add(s),s.promote({transition:(l=s.options.initialPromotionConfig)===null||l===void 0?void 0:l.transition,preserveFollowOpacity:(c=(u=s.options.initialPromotionConfig)===null||u===void 0?void 0:u.shouldPreserveFollowOpacity)===null||c===void 0?void 0:c.call(u,s)})}isLead(){const i=this.getStack();return i?i.lead===this:!0}getLead(){var i;const{layoutId:s}=this.options;return s?((i=this.getStack())===null||i===void 0?void 0:i.lead)||this:this}getPrevLead(){var i;const{layoutId:s}=this.options;return s?(i=this.getStack())===null||i===void 0?void 0:i.prevLead:void 0}getStack(){const{layoutId:i}=this.options;if(i)return this.root.sharedNodes.get(i)}promote({needsReset:i,transition:s,preserveFollowOpacity:l}={}){const u=this.getStack();u&&u.promote(this,l),i&&(this.projectionDelta=void 0,this.needsReset=!0),s&&this.setOptions({transition:s})}relegate(){const i=this.getStack();return i?i.relegate(this):!1}resetRotation(){const{visualElement:i}=this.options;if(!i)return;let s=!1;const{latestValues:l}=i;if((l.rotate||l.rotateX||l.rotateY||l.rotateZ)&&(s=!0),!s)return;const u={};for(let c=0;c<Ig.length;c++){const d="rotate"+Ig[c];l[d]&&(u[d]=l[d],i.setStaticValue(d,0))}i==null||i.render();for(const c in u)i.setStaticValue(c,u[c]);i.scheduleRender()}getProjectionStyles(i={}){var s,l,u;const c={};if(!this.instance||this.isSVG)return c;if(this.isVisible)c.visibility="";else return{visibility:"hidden"};const d=(s=this.options.visualElement)===null||s===void 0?void 0:s.getProps().transformTemplate;if(this.needsReset)return this.needsReset=!1,c.opacity="",c.pointerEvents=Ds(i.pointerEvents)||"",c.transform=d?d(this.latestValues,""):"none",c;const f=this.getLead();if(!this.projectionDelta||!this.layout||!f.target){const k={};return this.options.layoutId&&(k.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,k.pointerEvents=Ds(i.pointerEvents)||""),this.hasProjected&&!Cr(this.latestValues)&&(k.transform=d?d({},""):"none",this.hasProjected=!1),k}const p=f.animationValues||f.latestValues;this.applyTransformsToTarget(),c.transform=qg(this.projectionDeltaWithTransform,this.treeScale,p),d&&(c.transform=d(p,c.transform));const{x:y,y:v}=this.projectionDelta;c.transformOrigin=`${y.origin*100}% ${v.origin*100}% 0`,f.animationValues?c.opacity=f===this?(u=(l=p.opacity)!==null&&l!==void 0?l:this.latestValues.opacity)!==null&&u!==void 0?u:1:this.preserveOpacity?this.latestValues.opacity:p.opacityExit:c.opacity=f===this?p.opacity!==void 0?p.opacity:"":p.opacityExit!==void 0?p.opacityExit:0;for(const k in xl){if(p[k]===void 0)continue;const{correct:g,applyTo:m}=xl[k],h=g(p[k],f);if(m){const S=m.length;for(let T=0;T<S;T++)c[m[T]]=h}else c[k]=h}return this.options.layoutId&&(c.pointerEvents=f===this?Ds(i.pointerEvents)||"":"none"),c}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(i=>{var s;return(s=i.currentAnimation)===null||s===void 0?void 0:s.stop()}),this.root.nodes.forEach(zg),this.root.sharedNodes.clear()}}}function OA(e){e.updateLayout()}function $A(e){var t,n,r;const o=((t=e.resumeFrom)===null||t===void 0?void 0:t.snapshot)||e.snapshot;if(e.isLead()&&e.layout&&o&&e.hasListeners("didUpdate")){const{layoutBox:a,measuredBox:i}=e.layout,{animationType:s}=e.options,l=o.source!==e.layout.source;s==="size"?nn(p=>{const y=l?o.measuredBox[p]:o.layoutBox[p],v=_t(y);y.min=a[p].min,y.max=y.min+v}):k2(s,o.layoutBox,a)&&nn(p=>{const y=l?o.measuredBox[p]:o.layoutBox[p],v=_t(a[p]);y.max=y.min+v});const u=Oa();Ba(u,a,o.layoutBox);const c=Oa();l?Ba(c,e.applyTransform(i,!0),o.measuredBox):Ba(c,a,o.layoutBox);const d=!S2(u);let f=!1;if(!e.resumeFrom){const p=e.getClosestProjectingParent();if(p&&!p.resumeFrom){const{snapshot:y,layout:v}=p;if(y&&v){const k=Re();Da(k,o.layoutBox,y.layoutBox);const g=Re();Da(g,a,v.layoutBox),x2(k,g)||(f=!0)}}}e.notifyListeners("didUpdate",{layout:a,snapshot:o,delta:c,layoutDelta:u,hasLayoutChanged:d,hasRelativeTargetChanged:f})}else e.isLead()&&((r=(n=e.options).onExitComplete)===null||r===void 0||r.call(n));e.options.transition=void 0}function WA(e){e.isProjectionDirty||(e.isProjectionDirty=Boolean(e.parent&&e.parent.isProjectionDirty)),e.isTransformDirty||(e.isTransformDirty=Boolean(e.parent&&e.parent.isTransformDirty))}function HA(e){e.clearSnapshot()}function zg(e){e.clearMeasurements()}function UA(e){const{visualElement:t}=e.options;t!=null&&t.getProps().onBeforeLayoutMeasure&&t.notify("BeforeLayoutMeasure"),e.resetTransform()}function Mg(e){e.finishAnimation(),e.targetDelta=e.relativeTarget=e.target=void 0}function GA(e){e.resolveTargetDelta()}function KA(e){e.calcProjection()}function YA(e){e.resetRotation()}function ZA(e){e.removeLeadSnapshot()}function Vg(e,t,n){e.translate=Fe(t.translate,0,n),e.scale=Fe(t.scale,1,n),e.origin=t.origin,e.originPoint=t.originPoint}function Lg(e,t,n,r){e.min=Fe(t.min,n.min,r),e.max=Fe(t.max,n.max,r)}function XA(e,t,n,r){Lg(e.x,t.x,n.x,r),Lg(e.y,t.y,n.y,r)}function QA(e){return e.animationValues&&e.animationValues.opacityExit!==void 0}const JA={duration:.45,ease:[.4,0,.1,1]};function eP(e,t){let n=e.root;for(let a=e.path.length-1;a>=0;a--)if(Boolean(e.path[a].instance)){n=e.path[a];break}const o=(n&&n!==e.root?n.instance:document).querySelector(`[data-projection-id="${t}"]`);o&&e.mount(o,!0)}function jg(e){e.min=Math.round(e.min),e.max=Math.round(e.max)}function tP(e){jg(e.x),jg(e.y)}function k2(e,t,n){return e==="position"||e==="preserve-aspect"&&!rf(Pg(t),Pg(n),.2)}const nP=C2({attachResizeListener:(e,t)=>Su(e,"resize",t),measureScroll:()=>({x:document.documentElement.scrollLeft||document.body.scrollLeft,y:document.documentElement.scrollTop||document.body.scrollTop}),checkIsScrollRoot:()=>!0}),Nc={current:void 0},rP=C2({measureScroll:e=>({x:e.scrollLeft,y:e.scrollTop}),defaultParent:()=>{if(!Nc.current){const e=new nP(0,{});e.mount(window),e.setOptions({layoutScroll:!0}),Nc.current=e}return Nc.current},resetTransform:(e,t)=>{e.style.transform=t!==void 0?t:"none"},checkIsScrollRoot:e=>Boolean(window.getComputedStyle(e).position==="fixed")}),oP={...VE,...cF,...oA,...AA},aP=nT((e,t)=>DT(e,t,oP,kA,rP));function _2(){const e=w.exports.useRef(!1);return Sl(()=>(e.current=!0,()=>{e.current=!1}),[]),e}function iP(){const e=_2(),[t,n]=w.exports.useState(0),r=w.exports.useCallback(()=>{e.current&&n(t+1)},[t]);return[w.exports.useCallback(()=>Vt.postRender(r),[r]),t]}class sP extends w.exports.Component{getSnapshotBeforeUpdate(t){const n=this.props.childRef.current;if(n&&t.isPresent&&!this.props.isPresent){const r=this.props.sizeRef.current;r.height=n.offsetHeight||0,r.width=n.offsetWidth||0,r.top=n.offsetTop,r.left=n.offsetLeft}return null}componentDidUpdate(){}render(){return this.props.children}}function lP({children:e,isPresent:t}){const n=w.exports.useId(),r=w.exports.useRef(null),o=w.exports.useRef({width:0,height:0,top:0,left:0});return w.exports.useInsertionEffect(()=>{const{width:a,height:i,top:s,left:l}=o.current;if(t||!r.current||!a||!i)return;r.current.dataset.motionPopId=n;const u=document.createElement("style");return document.head.appendChild(u),u.sheet&&u.sheet.insertRule(`
          [data-motion-pop-id="${n}"] {
            position: absolute !important;
            width: ${a}px !important;
            height: ${i}px !important;
            top: ${s}px !important;
            left: ${l}px !important;
          }
        `),()=>{document.head.removeChild(u)}},[t]),F(sP,{isPresent:t,childRef:r,sizeRef:o,children:w.exports.cloneElement(e,{ref:r})})}const Bc=({children:e,initial:t,isPresent:n,onExitComplete:r,custom:o,presenceAffectsLayout:a,mode:i})=>{const s=wu(uP),l=w.exports.useId(),u=w.exports.useMemo(()=>({id:l,initial:t,isPresent:n,custom:o,onExitComplete:c=>{s.set(c,!0);for(const d of s.values())if(!d)return;r&&r()},register:c=>(s.set(c,!1),()=>s.delete(c))}),a?void 0:[n]);return w.exports.useMemo(()=>{s.forEach((c,d)=>s.set(d,!1))},[n]),w.exports.useEffect(()=>{!n&&!s.size&&r&&r()},[n]),i==="popLayout"&&(e=F(lP,{isPresent:n,children:e})),F(Ko.Provider,{value:u,children:e})};function uP(){return new Map}const to=e=>e.key||"";function cP(e,t){e.forEach(n=>{const r=to(n);t.set(r,n)})}function dP(e){const t=[];return w.exports.Children.forEach(e,n=>{w.exports.isValidElement(n)&&t.push(n)}),t}const fP=({children:e,custom:t,initial:n=!0,onExitComplete:r,exitBeforeEnter:o,presenceAffectsLayout:a=!0,mode:i="sync"})=>{o&&(i="wait",Lv(!1,"Replace exitBeforeEnter with mode='wait'"));let[s]=iP();const l=w.exports.useContext(Ap).forceRender;l&&(s=l);const u=_2(),c=dP(e);let d=c;const f=new Set,p=w.exports.useRef(d),y=w.exports.useRef(new Map).current,v=w.exports.useRef(!0);if(Sl(()=>{v.current=!1,cP(c,y),p.current=d}),jp(()=>{v.current=!0,y.clear(),f.clear()}),v.current)return F(ml,{children:d.map(h=>F(Bc,{isPresent:!0,initial:n?void 0:!1,presenceAffectsLayout:a,mode:i,children:h},to(h)))});d=[...d];const k=p.current.map(to),g=c.map(to),m=k.length;for(let h=0;h<m;h++){const S=k[h];g.indexOf(S)===-1&&f.add(S)}return i==="wait"&&f.size&&(d=[]),f.forEach(h=>{if(g.indexOf(h)!==-1)return;const S=y.get(h);if(!S)return;const T=k.indexOf(h),A=()=>{y.delete(h),f.delete(h);const E=p.current.findIndex(q=>q.key===h);if(p.current.splice(E,1),!f.size){if(p.current=c,u.current===!1)return;s(),r&&r()}};d.splice(T,0,F(Bc,{isPresent:!1,onExitComplete:A,custom:t,presenceAffectsLayout:a,mode:i,children:S},to(S)))}),d=d.map(h=>{const S=h.key;return f.has(S)?h:F(Bc,{isPresent:!0,presenceAffectsLayout:a,mode:i,children:h},to(h))}),Vv!=="production"&&i==="wait"&&d.length>1&&console.warn(`You're attempting to animate multiple children within AnimatePresence, but its mode is set to "wait". This will lead to odd visual behaviour.`),F(ml,{children:f.size?d:d.map(h=>w.exports.cloneElement(h))})};var pP=(...e)=>e.filter(Boolean).join(" "),mP=mu({"0%":{transform:"rotate(0deg)"},"100%":{transform:"rotate(360deg)"}}),Qp=N((e,t)=>{const n=gt("Spinner",e),{label:r="Loading...",thickness:o="2px",speed:a="0.45s",emptyColor:i="transparent",className:s,...l}=Ie(e),u=pP("chakra-spinner",s),c={display:"inline-block",borderColor:"currentColor",borderStyle:"solid",borderRadius:"99999px",borderWidth:o,borderBottomColor:i,borderLeftColor:i,animation:`${mP} ${a} linear infinite`,...n};return R.createElement(L.div,{ref:t,__css:c,className:u,...l},r&&R.createElement(L.span,{srOnly:!0},r))});Qp.displayName="Spinner";var _u=(...e)=>e.filter(Boolean).join(" ");function hP(e){return F(Hr,{viewBox:"0 0 24 24",...e,children:F("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z"})})}function gP(e){return F(Hr,{viewBox:"0 0 24 24",...e,children:F("path",{fill:"currentColor",d:"M12,0A12,12,0,1,0,24,12,12.013,12.013,0,0,0,12,0Zm.25,5a1.5,1.5,0,1,1-1.5,1.5A1.5,1.5,0,0,1,12.25,5ZM14.5,18.5h-4a1,1,0,0,1,0-2h.75a.25.25,0,0,0,.25-.25v-4.5a.25.25,0,0,0-.25-.25H10.5a1,1,0,0,1,0-2h1a2,2,0,0,1,2,2v4.75a.25.25,0,0,0,.25.25h.75a1,1,0,1,1,0,2Z"})})}function Ng(e){return F(Hr,{viewBox:"0 0 24 24",...e,children:F("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})}var[yP,bP]=Xt({name:"AlertContext",hookName:"useAlertContext",providerName:"<Alert />"}),[vP,Jp]=Xt({name:"AlertStylesContext",hookName:"useAlertStyles",providerName:"<Alert />"}),T2={info:{icon:gP,colorScheme:"blue"},warning:{icon:Ng,colorScheme:"orange"},success:{icon:hP,colorScheme:"green"},error:{icon:Ng,colorScheme:"red"},loading:{icon:Qp,colorScheme:"blue"}};function wP(e){return T2[e].colorScheme}function SP(e){return T2[e].icon}var F2=N(function(t,n){var u;const{status:r="info",addRole:o=!0,...a}=Ie(t),i=(u=t.colorScheme)!=null?u:wP(r),s=Wr("Alert",{...t,colorScheme:i}),l={width:"100%",display:"flex",alignItems:"center",position:"relative",overflow:"hidden",...s.container};return R.createElement(yP,{value:{status:r}},R.createElement(vP,{value:s},R.createElement(L.div,{role:o?"alert":void 0,ref:n,...a,className:_u("chakra-alert",t.className),__css:l})))});F2.displayName="Alert";var E2=N(function(t,n){const r=Jp(),o={display:"inline",...r.description};return R.createElement(L.div,{ref:n,...t,className:_u("chakra-alert__desc",t.className),__css:o})});E2.displayName="AlertDescription";function A2(e){const{status:t}=bP(),n=SP(t),r=Jp(),o=t==="loading"?r.spinner:r.icon;return R.createElement(L.span,{display:"inherit",...e,className:_u("chakra-alert__icon",e.className),__css:o},e.children||F(n,{h:"100%",w:"100%"}))}A2.displayName="AlertIcon";var P2=N(function(t,n){const r=Jp();return R.createElement(L.div,{ref:n,...t,className:_u("chakra-alert__title",t.className),__css:r.title})});P2.displayName="AlertTitle";function xP(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function CP(e){const{loading:t,src:n,srcSet:r,onLoad:o,onError:a,crossOrigin:i,sizes:s,ignoreFallback:l}=e,[u,c]=w.exports.useState("pending");w.exports.useEffect(()=>{c(n?"loading":"pending")},[n]);const d=w.exports.useRef(),f=w.exports.useCallback(()=>{if(!n)return;p();const y=new Image;y.src=n,i&&(y.crossOrigin=i),r&&(y.srcset=r),s&&(y.sizes=s),t&&(y.loading=t),y.onload=v=>{p(),c("loaded"),o==null||o(v)},y.onerror=v=>{p(),c("failed"),a==null||a(v)},d.current=y},[n,i,r,s,o,a,t]),p=()=>{d.current&&(d.current.onload=null,d.current.onerror=null,d.current=null)};return sr(()=>{if(!l)return u==="loading"&&f(),()=>{p()}},[u,f,l]),l?"loaded":u}var kP=(e,t)=>e!=="loaded"&&t==="beforeLoadOrError"||e==="failed"&&t==="onError",Rl=N(function(t,n){const{htmlWidth:r,htmlHeight:o,alt:a,...i}=t;return F("img",{width:r,height:o,ref:n,alt:a,...i})});Rl.displayName="NativeImage";var em=N(function(t,n){const{fallbackSrc:r,fallback:o,src:a,srcSet:i,align:s,fit:l,loading:u,ignoreFallback:c,crossOrigin:d,fallbackStrategy:f="beforeLoadOrError",referrerPolicy:p,...y}=t,v=r!==void 0||o!==void 0,k=u!=null||c||!v,g=CP({...t,ignoreFallback:k}),m=kP(g,f),h={ref:n,objectFit:l,objectPosition:s,...k?y:xP(y,["onError","onLoad"])};return m?o||R.createElement(L.img,{as:Rl,className:"chakra-image__placeholder",src:r,...h}):R.createElement(L.img,{as:Rl,src:a,srcSet:i,crossOrigin:d,loading:u,referrerPolicy:p,className:"chakra-image",...h})});em.displayName="Image";N((e,t)=>R.createElement(L.img,{ref:t,as:Rl,className:"chakra-image",...e}));function tm(e){return w.exports.Children.toArray(e).filter(t=>w.exports.isValidElement(t))}var Tu=(...e)=>e.filter(Boolean).join(" "),Bg=e=>e?"":void 0,[_P,TP]=Xt({strict:!1,name:"ButtonGroupContext"});function df(e){const{children:t,className:n,...r}=e,o=w.exports.isValidElement(t)?w.exports.cloneElement(t,{"aria-hidden":!0,focusable:!1}):t,a=Tu("chakra-button__icon",n);return R.createElement(L.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...r,className:a},o)}df.displayName="ButtonIcon";function ff(e){const{label:t,placement:n,spacing:r="0.5rem",children:o=F(Qp,{color:"currentColor",width:"1em",height:"1em"}),className:a,__css:i,...s}=e,l=Tu("chakra-button__spinner",a),u=n==="start"?"marginEnd":"marginStart",c=w.exports.useMemo(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[u]:t?r:0,fontSize:"1em",lineHeight:"normal",...i}),[i,t,u,r]);return R.createElement(L.div,{className:l,...s,__css:c},o)}ff.displayName="ButtonSpinner";function FP(e){const[t,n]=w.exports.useState(!e);return{ref:w.exports.useCallback(a=>{!a||n(a.tagName==="BUTTON")},[]),type:t?"button":void 0}}var nm=N((e,t)=>{const n=TP(),r=gt("Button",{...n,...e}),{isDisabled:o=n==null?void 0:n.isDisabled,isLoading:a,isActive:i,children:s,leftIcon:l,rightIcon:u,loadingText:c,iconSpacing:d="0.5rem",type:f,spinner:p,spinnerPlacement:y="start",className:v,as:k,...g}=Ie(e),m=w.exports.useMemo(()=>{const A={...r==null?void 0:r._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...r,...!!n&&{_focus:A}}},[r,n]),{ref:h,type:S}=FP(k),T={rightIcon:u,leftIcon:l,iconSpacing:d,children:s};return R.createElement(L.button,{disabled:o||a,ref:D_(t,h),as:k,type:f!=null?f:S,"data-active":Bg(i),"data-loading":Bg(a),__css:m,className:Tu("chakra-button",v),...g},a&&y==="start"&&F(ff,{className:"chakra-button__spinner--start",label:c,placement:"start",spacing:d,children:p}),a?c||R.createElement(L.span,{opacity:0},F(Dg,{...T})):F(Dg,{...T}),a&&y==="end"&&F(ff,{className:"chakra-button__spinner--end",label:c,placement:"end",spacing:d,children:p}))});nm.displayName="Button";function Dg(e){const{leftIcon:t,rightIcon:n,children:r,iconSpacing:o}=e;return W(ml,{children:[t&&F(df,{marginEnd:o,children:t}),r,n&&F(df,{marginStart:o,children:n})]})}var EP={horizontal:{"> *:first-of-type:not(:last-of-type)":{borderEndRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderStartRadius:0}},vertical:{"> *:first-of-type:not(:last-of-type)":{borderBottomRadius:0},"> *:not(:first-of-type):not(:last-of-type)":{borderRadius:0},"> *:not(:first-of-type):last-of-type":{borderTopRadius:0}}},AP={horizontal:e=>({"& > *:not(style) ~ *:not(style)":{marginStart:e}}),vertical:e=>({"& > *:not(style) ~ *:not(style)":{marginTop:e}})},PP=N(function(t,n){const{size:r,colorScheme:o,variant:a,className:i,spacing:s="0.5rem",isAttached:l,isDisabled:u,orientation:c="horizontal",...d}=t,f=Tu("chakra-button__group",i),p=w.exports.useMemo(()=>({size:r,colorScheme:o,variant:a,isDisabled:u}),[r,o,a,u]);let y={display:"inline-flex",...l?EP[c]:AP[c](s)};const v=c==="vertical";return R.createElement(_P,{value:p},R.createElement(L.div,{ref:n,role:"group",__css:y,className:f,"data-attached":l?"":void 0,"data-orientation":c,flexDir:v?"column":void 0,...d}))});PP.displayName="ButtonGroup";var qP=N((e,t)=>{const{icon:n,children:r,isRound:o,"aria-label":a,...i}=e,s=n||r,l=w.exports.isValidElement(s)?w.exports.cloneElement(s,{"aria-hidden":!0,focusable:!1}):null;return F(nm,{padding:"0",borderRadius:o?"full":void 0,ref:t,"aria-label":a,...i,children:l})});qP.displayName="IconButton";var Zo=(...e)=>e.filter(Boolean).join(" "),ws=e=>e?"":void 0,Dc=e=>e?!0:void 0;function Og(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}var[IP,q2]=Xt({name:"FormControlStylesContext",errorMessage:`useFormControlStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormControl />" `}),[RP,Xo]=Xt({strict:!1,name:"FormControlContext"});function zP(e){const{id:t,isRequired:n,isInvalid:r,isDisabled:o,isReadOnly:a,...i}=e,s=w.exports.useId(),l=t||`field-${s}`,u=`${l}-label`,c=`${l}-feedback`,d=`${l}-helptext`,[f,p]=w.exports.useState(!1),[y,v]=w.exports.useState(!1),[k,g]=w.exports.useState(!1),m=w.exports.useCallback((E={},q=null)=>({id:d,...E,ref:hi(q,j=>{!j||v(!0)})}),[d]),h=w.exports.useCallback((E={},q=null)=>{var j,V;return{...E,ref:q,"data-focus":ws(k),"data-disabled":ws(o),"data-invalid":ws(r),"data-readonly":ws(a),id:(j=E.id)!=null?j:u,htmlFor:(V=E.htmlFor)!=null?V:l}},[l,o,k,r,a,u]),S=w.exports.useCallback((E={},q=null)=>({id:c,...E,ref:hi(q,j=>{!j||p(!0)}),"aria-live":"polite"}),[c]),T=w.exports.useCallback((E={},q=null)=>({...E,...i,ref:q,role:"group"}),[i]),A=w.exports.useCallback((E={},q=null)=>({...E,ref:q,role:"presentation","aria-hidden":!0,children:E.children||"*"}),[]);return{isRequired:!!n,isInvalid:!!r,isReadOnly:!!a,isDisabled:!!o,isFocused:!!k,onFocus:()=>g(!0),onBlur:()=>g(!1),hasFeedbackText:f,setHasFeedbackText:p,hasHelpText:y,setHasHelpText:v,id:l,labelId:u,feedbackId:c,helpTextId:d,htmlProps:i,getHelpTextProps:m,getErrorMessageProps:S,getRootProps:T,getLabelProps:h,getRequiredIndicatorProps:A}}var MP=N(function(t,n){const r=Wr("Form",t),o=Ie(t),{getRootProps:a,htmlProps:i,...s}=zP(o),l=Zo("chakra-form-control",t.className);return R.createElement(RP,{value:s},R.createElement(IP,{value:r},R.createElement(L.div,{...a({},n),className:l,__css:r.container})))});MP.displayName="FormControl";var VP=N(function(t,n){const r=Xo(),o=q2(),a=Zo("chakra-form__helper-text",t.className);return R.createElement(L.div,{...r==null?void 0:r.getHelpTextProps(t,n),__css:o.helperText,className:a})});VP.displayName="FormHelperText";function LP(e){const{isDisabled:t,isInvalid:n,isReadOnly:r,isRequired:o,...a}=I2(e);return{...a,disabled:t,readOnly:r,required:o,"aria-invalid":Dc(n),"aria-required":Dc(o),"aria-readonly":Dc(r)}}function I2(e){var y,v,k;const t=Xo(),{id:n,disabled:r,readOnly:o,required:a,isRequired:i,isInvalid:s,isReadOnly:l,isDisabled:u,onFocus:c,onBlur:d,...f}=e,p=e["aria-describedby"]?[e["aria-describedby"]]:[];return(t==null?void 0:t.hasFeedbackText)&&(t==null?void 0:t.isInvalid)&&p.push(t.feedbackId),t!=null&&t.hasHelpText&&p.push(t.helpTextId),{...f,"aria-describedby":p.join(" ")||void 0,id:n!=null?n:t==null?void 0:t.id,isDisabled:(y=r!=null?r:u)!=null?y:t==null?void 0:t.isDisabled,isReadOnly:(v=o!=null?o:l)!=null?v:t==null?void 0:t.isReadOnly,isRequired:(k=a!=null?a:i)!=null?k:t==null?void 0:t.isRequired,isInvalid:s!=null?s:t==null?void 0:t.isInvalid,onFocus:Og(t==null?void 0:t.onFocus,c),onBlur:Og(t==null?void 0:t.onBlur,d)}}var[jP,NP]=Xt({name:"FormErrorStylesContext",errorMessage:`useFormErrorStyles returned is 'undefined'. Seems you forgot to wrap the components in "<FormError />" `}),BP=N((e,t)=>{const n=Wr("FormError",e),r=Ie(e),o=Xo();return o!=null&&o.isInvalid?R.createElement(jP,{value:n},R.createElement(L.div,{...o==null?void 0:o.getErrorMessageProps(r,t),className:Zo("chakra-form__error-message",e.className),__css:{display:"flex",alignItems:"center",...n.text}})):null});BP.displayName="FormErrorMessage";var DP=N((e,t)=>{const n=NP(),r=Xo();if(!(r!=null&&r.isInvalid))return null;const o=Zo("chakra-form__error-icon",e.className);return F(Hr,{ref:t,"aria-hidden":!0,...e,__css:n.icon,className:o,children:F("path",{fill:"currentColor",d:"M11.983,0a12.206,12.206,0,0,0-8.51,3.653A11.8,11.8,0,0,0,0,12.207,11.779,11.779,0,0,0,11.8,24h.214A12.111,12.111,0,0,0,24,11.791h0A11.766,11.766,0,0,0,11.983,0ZM10.5,16.542a1.476,1.476,0,0,1,1.449-1.53h.027a1.527,1.527,0,0,1,1.523,1.47,1.475,1.475,0,0,1-1.449,1.53h-.027A1.529,1.529,0,0,1,10.5,16.542ZM11,12.5v-6a1,1,0,0,1,2,0v6a1,1,0,1,1-2,0Z"})})});DP.displayName="FormErrorIcon";var OP=N(function(t,n){var f;const r=gt("FormLabel",t),o=Ie(t),{className:a,children:i,requiredIndicator:s=F(R2,{}),optionalIndicator:l=null,...u}=o,c=Xo(),d=(f=c==null?void 0:c.getLabelProps(u,n))!=null?f:{ref:n,...u};return R.createElement(L.label,{...d,className:Zo("chakra-form__label",o.className),__css:{display:"block",textAlign:"start",...r}},i,c!=null&&c.isRequired?s:l)});OP.displayName="FormLabel";var R2=N(function(t,n){const r=Xo(),o=q2();if(!(r!=null&&r.isRequired))return null;const a=Zo("chakra-form__required-indicator",t.className);return R.createElement(L.span,{...r==null?void 0:r.getRequiredIndicatorProps(t,n),__css:o.requiredIndicator,className:a})});R2.displayName="RequiredIndicator";function pf(e,t){const n=w.exports.useRef(!1),r=w.exports.useRef(!1);w.exports.useEffect(()=>{if(n.current&&r.current)return e();r.current=!0},t),w.exports.useEffect(()=>(n.current=!0,()=>{n.current=!1}),[])}var rm={border:"0",clip:"rect(0, 0, 0, 0)",height:"1px",width:"1px",margin:"-1px",padding:"0",overflow:"hidden",whiteSpace:"nowrap",position:"absolute"},$P=L("span",{baseStyle:rm});$P.displayName="VisuallyHidden";var WP=L("input",{baseStyle:rm});WP.displayName="VisuallyHiddenInput";var $g=!1,Fu=null,$o=!1,mf=new Set,HP=typeof window<"u"&&window.navigator!=null?/^Mac/.test(window.navigator.platform):!1;function UP(e){return!(e.metaKey||!HP&&e.altKey||e.ctrlKey)}function om(e,t){mf.forEach(n=>n(e,t))}function Wg(e){$o=!0,UP(e)&&(Fu="keyboard",om("keyboard",e))}function Jr(e){Fu="pointer",(e.type==="mousedown"||e.type==="pointerdown")&&($o=!0,om("pointer",e))}function GP(e){e.target===window||e.target===document||($o||(Fu="keyboard",om("keyboard",e)),$o=!1)}function KP(){$o=!1}function Hg(){return Fu!=="pointer"}function YP(){if(typeof window>"u"||$g)return;const{focus:e}=HTMLElement.prototype;HTMLElement.prototype.focus=function(...n){$o=!0,e.apply(this,n)},document.addEventListener("keydown",Wg,!0),document.addEventListener("keyup",Wg,!0),window.addEventListener("focus",GP,!0),window.addEventListener("blur",KP,!1),typeof PointerEvent<"u"?(document.addEventListener("pointerdown",Jr,!0),document.addEventListener("pointermove",Jr,!0),document.addEventListener("pointerup",Jr,!0)):(document.addEventListener("mousedown",Jr,!0),document.addEventListener("mousemove",Jr,!0),document.addEventListener("mouseup",Jr,!0)),$g=!0}function ZP(e){YP(),e(Hg());const t=()=>e(Hg());return mf.add(t),()=>{mf.delete(t)}}var[XP,QP]=Xt({name:"CheckboxGroupContext",strict:!1}),JP=(...e)=>e.filter(Boolean).join(" ");function Ug(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}var Je=e=>e?"":void 0;function Pt(...e){return function(n){e.some(r=>(r==null||r(n),n==null?void 0:n.defaultPrevented))}}function eq(...e){return function(n){e.forEach(r=>{r==null||r(n)})}}function Gg(e){return e&&Ug(e)&&Ug(e.target)}function tq(e={}){const{defaultValue:t,value:n,onChange:r,isDisabled:o,isNative:a}=e,i=lr(r),[s,l]=O_({value:n,defaultValue:t||[],onChange:i}),u=w.exports.useCallback(d=>{if(!s)return;const f=Gg(d)?d.target.checked:!s.includes(d),p=Gg(d)?d.target.value:d,y=f?[...s,p]:s.filter(v=>String(v)!==String(p));l(y)},[l,s]),c=w.exports.useCallback((d={})=>({...d,[a?"checked":"isChecked"]:s.some(p=>String(d.value)===String(p)),onChange:u}),[u,a,s]);return{value:s,isDisabled:o,onChange:u,setValue:l,getCheckboxProps:c}}function z2(e){const{colorScheme:t,size:n,variant:r,children:o,isDisabled:a}=e,{value:i,onChange:s}=tq(e),l=w.exports.useMemo(()=>({size:n,onChange:s,colorScheme:t,value:i,variant:r,isDisabled:a}),[n,s,t,i,r,a]);return F(XP,{value:l,children:o})}z2.displayName="CheckboxGroup";function nq(e){return R.createElement(L.svg,{width:"1.2em",viewBox:"0 0 12 10",style:{fill:"none",strokeWidth:2,stroke:"currentColor",strokeDasharray:16},...e},F("polyline",{points:"1.5 6 4.5 9 10.5 1"}))}function rq(e){return R.createElement(L.svg,{width:"1.2em",viewBox:"0 0 24 24",style:{stroke:"currentColor",strokeWidth:4},...e},F("line",{x1:"21",x2:"3",y1:"12",y2:"12"}))}function oq(e){const{isIndeterminate:t,isChecked:n,...r}=e,o=t?rq:nq;return n||t?R.createElement(L.div,{style:{display:"flex",alignItems:"center",justifyContent:"center",height:"100%"}},F(o,{...r})):null}function aq(e,t=[]){const n=Object.assign({},e);for(const r of t)r in n&&delete n[r];return n}function iq(e={}){const t=I2(e),{isDisabled:n,isReadOnly:r,isRequired:o,isInvalid:a,id:i,onBlur:s,onFocus:l,"aria-describedby":u}=t,{defaultChecked:c,isChecked:d,isFocusable:f,onChange:p,isIndeterminate:y,name:v,value:k,tabIndex:g=void 0,"aria-label":m,"aria-labelledby":h,"aria-invalid":S,...T}=e,A=aq(T,["isDisabled","isReadOnly","isRequired","isInvalid","id","onBlur","onFocus","aria-describedby"]),E=lr(p),q=lr(s),j=lr(l),[V,_e]=w.exports.useState(!1),[we,De]=w.exports.useState(!1),[lt,yt]=w.exports.useState(!1),[ce,Le]=w.exports.useState(!1);w.exports.useEffect(()=>ZP(_e),[]);const I=w.exports.useRef(null),[O,$]=w.exports.useState(!0),[de,fe]=w.exports.useState(!!c),K=d!==void 0,Se=K?d:de,Vn=w.exports.useCallback(U=>{if(r||n){U.preventDefault();return}K||fe(Se?U.target.checked:y?!0:U.target.checked),E==null||E(U)},[r,n,Se,K,y,E]);sr(()=>{I.current&&(I.current.indeterminate=Boolean(y))},[y]),pf(()=>{n&&De(!1)},[n,De]),sr(()=>{const U=I.current;!(U!=null&&U.form)||(U.form.onreset=()=>{fe(!!c)})},[]);const Ge=n&&!f,Qt=w.exports.useCallback(U=>{U.key===" "&&Le(!0)},[Le]),Ln=w.exports.useCallback(U=>{U.key===" "&&Le(!1)},[Le]);sr(()=>{if(!I.current)return;I.current.checked!==Se&&fe(I.current.checked)},[I.current]);const Ri=w.exports.useCallback((U={},gn=null)=>{const yn=Kr=>{we&&Kr.preventDefault(),Le(!0)};return{...U,ref:gn,"data-active":Je(ce),"data-hover":Je(lt),"data-checked":Je(Se),"data-focus":Je(we),"data-focus-visible":Je(we&&V),"data-indeterminate":Je(y),"data-disabled":Je(n),"data-invalid":Je(a),"data-readonly":Je(r),"aria-hidden":!0,onMouseDown:Pt(U.onMouseDown,yn),onMouseUp:Pt(U.onMouseUp,()=>Le(!1)),onMouseEnter:Pt(U.onMouseEnter,()=>yt(!0)),onMouseLeave:Pt(U.onMouseLeave,()=>yt(!1))}},[ce,Se,n,we,V,lt,y,a,r]),Qo=w.exports.useCallback((U={},gn=null)=>({...A,...U,ref:hi(gn,yn=>{!yn||$(yn.tagName==="LABEL")}),onClick:Pt(U.onClick,()=>{var yn;O||((yn=I.current)==null||yn.click(),requestAnimationFrame(()=>{var Kr;(Kr=I.current)==null||Kr.focus()}))}),"data-disabled":Je(n),"data-checked":Je(Se),"data-invalid":Je(a)}),[A,n,Se,a,O]),zi=w.exports.useCallback((U={},gn=null)=>({...U,ref:hi(I,gn),type:"checkbox",name:v,value:k,id:i,tabIndex:g,onChange:Pt(U.onChange,Vn),onBlur:Pt(U.onBlur,q,()=>De(!1)),onFocus:Pt(U.onFocus,j,()=>De(!0)),onKeyDown:Pt(U.onKeyDown,Qt),onKeyUp:Pt(U.onKeyUp,Ln),required:o,checked:Se,disabled:Ge,readOnly:r,"aria-label":m,"aria-labelledby":h,"aria-invalid":S?Boolean(S):a,"aria-describedby":u,"aria-disabled":n,style:rm}),[v,k,i,Vn,q,j,Qt,Ln,o,Se,Ge,r,m,h,S,a,u,n,g]),Mi=w.exports.useCallback((U={},gn=null)=>({...U,ref:gn,onMouseDown:Pt(U.onMouseDown,Kg),onTouchStart:Pt(U.onTouchStart,Kg),"data-disabled":Je(n),"data-checked":Je(Se),"data-invalid":Je(a)}),[Se,n,a]);return{state:{isInvalid:a,isFocused:we,isChecked:Se,isActive:ce,isHovered:lt,isIndeterminate:y,isDisabled:n,isReadOnly:r,isRequired:o},getRootProps:Qo,getCheckboxProps:Ri,getInputProps:zi,getLabelProps:Mi,htmlProps:A}}function Kg(e){e.preventDefault(),e.stopPropagation()}var sq={display:"inline-flex",alignItems:"center",justifyContent:"center",verticalAlign:"top",userSelect:"none",flexShrink:0},lq={cursor:"pointer",display:"inline-flex",alignItems:"center",verticalAlign:"top",position:"relative"},uq=mu({from:{opacity:0,strokeDashoffset:16,transform:"scale(0.95)"},to:{opacity:1,strokeDashoffset:0,transform:"scale(1)"}}),cq=mu({from:{opacity:0},to:{opacity:1}}),dq=mu({from:{transform:"scaleX(0.65)"},to:{transform:"scaleX(1)"}}),Os=N(function(t,n){const r=QP(),o={...r,...t},a=Wr("Checkbox",o),i=Ie(t),{spacing:s="0.5rem",className:l,children:u,iconColor:c,iconSize:d,icon:f=F(oq,{}),isChecked:p,isDisabled:y=r==null?void 0:r.isDisabled,onChange:v,inputProps:k,...g}=i;let m=p;(r==null?void 0:r.value)&&i.value&&(m=r.value.includes(i.value));let h=v;(r==null?void 0:r.onChange)&&i.value&&(h=eq(r.onChange,v));const{state:S,getInputProps:T,getCheckboxProps:A,getLabelProps:E,getRootProps:q}=iq({...g,isDisabled:y,isChecked:m,onChange:h}),j=w.exports.useMemo(()=>({animation:S.isIndeterminate?`${cq} 20ms linear, ${dq} 200ms linear`:`${uq} 200ms linear`,fontSize:d,color:c,...a.icon}),[c,d,,S.isIndeterminate,a.icon]),V=w.exports.cloneElement(f,{__css:j,isIndeterminate:S.isIndeterminate,isChecked:S.isChecked});return R.createElement(L.label,{__css:{...lq,...a.container},className:JP("chakra-checkbox",l),...q()},F("input",{className:"chakra-checkbox__input",...T(k,n)}),R.createElement(L.span,{__css:{...sq,...a.control},className:"chakra-checkbox__control",...A()},V),u&&R.createElement(L.span,{className:"chakra-checkbox__label",...E(),__css:{marginStart:s,...a.label}},u))});Os.displayName="Checkbox";function fq(e){return F(Hr,{focusable:"false","aria-hidden":!0,...e,children:F("path",{fill:"currentColor",d:"M.439,21.44a1.5,1.5,0,0,0,2.122,2.121L11.823,14.3a.25.25,0,0,1,.354,0l9.262,9.263a1.5,1.5,0,1,0,2.122-2.121L14.3,12.177a.25.25,0,0,1,0-.354l9.263-9.262A1.5,1.5,0,0,0,21.439.44L12.177,9.7a.25.25,0,0,1-.354,0L2.561.44A1.5,1.5,0,0,0,.439,2.561L9.7,11.823a.25.25,0,0,1,0,.354Z"})})}var M2=N(function(t,n){const r=gt("CloseButton",t),{children:o,isDisabled:a,__css:i,...s}=Ie(t),l={outline:0,display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0};return R.createElement(L.button,{type:"button","aria-label":"Close",ref:n,disabled:a,__css:{...l,...r,...i},...s},o||F(fq,{width:"1em",height:"1em"}))});M2.displayName="CloseButton";var V2=`
  :root {
    --chakra-vh: 100vh;
  }

  @supports (height: -webkit-fill-available) {
    :root {
      --chakra-vh: -webkit-fill-available;
    }
  }

  @supports (height: -moz-fill-available) {
    :root {
      --chakra-vh: -moz-fill-available;
    }
  }

  @supports (height: 100dvh) {
    :root {
      --chakra-vh: 100dvh;
    }
  }
`,pq=()=>F(pu,{styles:V2}),mq=()=>F(pu,{styles:`
      html {
        line-height: 1.5;
        -webkit-text-size-adjust: 100%;
        font-family: system-ui, sans-serif;
        -webkit-font-smoothing: antialiased;
        text-rendering: optimizeLegibility;
        -moz-osx-font-smoothing: grayscale;
        touch-action: manipulation;
      }

      body {
        position: relative;
        min-height: 100%;
        font-feature-settings: 'kern';
      }

      *,
      *::before,
      *::after {
        border-width: 0;
        border-style: solid;
        box-sizing: border-box;
      }

      main {
        display: block;
      }

      hr {
        border-top-width: 1px;
        box-sizing: content-box;
        height: 0;
        overflow: visible;
      }

      pre,
      code,
      kbd,
      samp {
        font-family: SFMono-Regular,  Menlo, Monaco, Consolas, monospace;
        font-size: 1em;
      }

      a {
        background-color: transparent;
        color: inherit;
        text-decoration: inherit;
      }

      abbr[title] {
        border-bottom: none;
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
      }

      b,
      strong {
        font-weight: bold;
      }

      small {
        font-size: 80%;
      }

      sub,
      sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
      }

      sub {
        bottom: -0.25em;
      }

      sup {
        top: -0.5em;
      }

      img {
        border-style: none;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        font-family: inherit;
        font-size: 100%;
        line-height: 1.15;
        margin: 0;
      }

      button,
      input {
        overflow: visible;
      }

      button,
      select {
        text-transform: none;
      }

      button::-moz-focus-inner,
      [type="button"]::-moz-focus-inner,
      [type="reset"]::-moz-focus-inner,
      [type="submit"]::-moz-focus-inner {
        border-style: none;
        padding: 0;
      }

      fieldset {
        padding: 0.35em 0.75em 0.625em;
      }

      legend {
        box-sizing: border-box;
        color: inherit;
        display: table;
        max-width: 100%;
        padding: 0;
        white-space: normal;
      }

      progress {
        vertical-align: baseline;
      }

      textarea {
        overflow: auto;
      }

      [type="checkbox"],
      [type="radio"] {
        box-sizing: border-box;
        padding: 0;
      }

      [type="number"]::-webkit-inner-spin-button,
      [type="number"]::-webkit-outer-spin-button {
        -webkit-appearance: none !important;
      }

      input[type="number"] {
        -moz-appearance: textfield;
      }

      [type="search"] {
        -webkit-appearance: textfield;
        outline-offset: -2px;
      }

      [type="search"]::-webkit-search-decoration {
        -webkit-appearance: none !important;
      }

      ::-webkit-file-upload-button {
        -webkit-appearance: button;
        font: inherit;
      }

      details {
        display: block;
      }

      summary {
        display: list-item;
      }

      template {
        display: none;
      }

      [hidden] {
        display: none !important;
      }

      body,
      blockquote,
      dl,
      dd,
      h1,
      h2,
      h3,
      h4,
      h5,
      h6,
      hr,
      figure,
      p,
      pre {
        margin: 0;
      }

      button {
        background: transparent;
        padding: 0;
      }

      fieldset {
        margin: 0;
        padding: 0;
      }

      ol,
      ul {
        margin: 0;
        padding: 0;
      }

      textarea {
        resize: vertical;
      }

      button,
      [role="button"] {
        cursor: pointer;
      }

      button::-moz-focus-inner {
        border: 0 !important;
      }

      table {
        border-collapse: collapse;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-size: inherit;
        font-weight: inherit;
      }

      button,
      input,
      optgroup,
      select,
      textarea {
        padding: 0;
        line-height: inherit;
        color: inherit;
      }

      img,
      svg,
      video,
      canvas,
      audio,
      iframe,
      embed,
      object {
        display: block;
      }

      img,
      video {
        max-width: 100%;
        height: auto;
      }

      [data-js-focus-visible] :focus:not([data-focus-visible-added]):not([data-focus-visible-disabled]) {
        outline: none;
        box-shadow: none;
      }

      select::-ms-expand {
        display: none;
      }

      ${V2}
    `});function am(e){const t=Object.assign({},e);for(let n in t)t[n]===void 0&&delete t[n];return t}var im=N(function(t,n){const{htmlSize:r,...o}=t,a=Wr("Input",o),i=Ie(o),s=LP(i),l=Ae("chakra-input",t.className);return R.createElement(L.input,{size:r,...s,__css:a.field,ref:n,className:l})});im.displayName="Input";im.id="Input";var[hq,L2]=Xt({name:"InputGroupStylesContext",errorMessage:`useInputGroupStyles returned is 'undefined'. Seems you forgot to wrap the components in "<InputGroup />" `}),gq=N(function(t,n){const r=Wr("Input",t),{children:o,className:a,...i}=Ie(t),s=Ae("chakra-input__group",a),l={},u=tm(o),c=r.field;u.forEach(f=>{var p,y;!r||(c&&f.type.id==="InputLeftElement"&&(l.paddingStart=(p=c.height)!=null?p:c.h),c&&f.type.id==="InputRightElement"&&(l.paddingEnd=(y=c.height)!=null?y:c.h),f.type.id==="InputRightAddon"&&(l.borderEndRadius=0),f.type.id==="InputLeftAddon"&&(l.borderStartRadius=0))});const d=u.map(f=>{var p,y;const v=am({size:((p=f.props)==null?void 0:p.size)||t.size,variant:((y=f.props)==null?void 0:y.variant)||t.variant});return f.type.id!=="Input"?w.exports.cloneElement(f,v):w.exports.cloneElement(f,Object.assign(v,l,f.props))});return R.createElement(L.div,{className:s,ref:n,__css:{width:"100%",display:"flex",position:"relative"},...i},F(hq,{value:r,children:d}))});gq.displayName="InputGroup";var yq={left:{marginEnd:"-1px",borderEndRadius:0,borderEndColor:"transparent"},right:{marginStart:"-1px",borderStartRadius:0,borderStartColor:"transparent"}},bq=L("div",{baseStyle:{flex:"0 0 auto",width:"auto",display:"flex",alignItems:"center",whiteSpace:"nowrap"}}),sm=N(function(t,n){var s;const{placement:r="left",...o}=t,a=(s=yq[r])!=null?s:{},i=L2();return F(bq,{ref:n,...o,__css:{...i.addon,...a}})});sm.displayName="InputAddon";var j2=N(function(t,n){return F(sm,{ref:n,placement:"left",...t,className:Ae("chakra-input__left-addon",t.className)})});j2.displayName="InputLeftAddon";j2.id="InputLeftAddon";var N2=N(function(t,n){return F(sm,{ref:n,placement:"right",...t,className:Ae("chakra-input__right-addon",t.className)})});N2.displayName="InputRightAddon";N2.id="InputRightAddon";var vq=L("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center",position:"absolute",top:"0",zIndex:2}}),Eu=N(function(t,n){var u,c;const{placement:r="left",...o}=t,a=L2(),i=a.field,l={[r==="left"?"insetStart":"insetEnd"]:"0",width:(u=i==null?void 0:i.height)!=null?u:i==null?void 0:i.h,height:(c=i==null?void 0:i.height)!=null?c:i==null?void 0:i.h,fontSize:i==null?void 0:i.fontSize,...a.element};return F(vq,{ref:n,__css:l,...o})});Eu.id="InputElement";Eu.displayName="InputElement";var B2=N(function(t,n){const{className:r,...o}=t,a=Ae("chakra-input__left-element",r);return F(Eu,{ref:n,placement:"left",className:a,...o})});B2.id="InputLeftElement";B2.displayName="InputLeftElement";var D2=N(function(t,n){const{className:r,...o}=t,a=Ae("chakra-input__right-element",r);return F(Eu,{ref:n,placement:"right",className:a,...o})});D2.id="InputRightElement";D2.displayName="InputRightElement";function wq(e){const t=typeof e;return e!=null&&(t==="object"||t==="function")&&!Array.isArray(e)}Object.freeze(["base","sm","md","lg","xl","2xl"]);function fr(e,t){return Array.isArray(e)?e.map(n=>n===null?null:t(n)):wq(e)?Object.keys(e).reduce((n,r)=>(n[r]=t(e[r]),n),{}):e!=null?t(e):null}var Sq=N(function(e,t){const{ratio:n=4/3,children:r,className:o,...a}=e,i=w.exports.Children.only(r),s=Ae("chakra-aspect-ratio",o);return R.createElement(L.div,{ref:t,position:"relative",className:s,_before:{height:0,content:'""',display:"block",paddingBottom:fr(n,l=>`${1/l*100}%`)},__css:{"& > *:not(style)":{overflow:"hidden",position:"absolute",top:"0",right:"0",bottom:"0",left:"0",display:"flex",justifyContent:"center",alignItems:"center",width:"100%",height:"100%"},"& > img, & > video":{objectFit:"cover"}},...a},i)});Sq.displayName="AspectRatio";var O2=N(function(t,n){const r=gt("Badge",t),{className:o,...a}=Ie(t);return R.createElement(L.span,{ref:n,className:Ae("chakra-badge",t.className),...a,__css:{display:"inline-block",whiteSpace:"nowrap",verticalAlign:"middle",...r}})});O2.displayName="Badge";var nt=L("div");nt.displayName="Box";var $2=N(function(t,n){const{size:r,centerContent:o=!0,...a}=t;return F(nt,{ref:n,boxSize:r,__css:{...o?{display:"flex",alignItems:"center",justifyContent:"center"}:{},flexShrink:0,flexGrow:0},...a})});$2.displayName="Square";var xq=N(function(t,n){const{size:r,...o}=t;return F($2,{size:r,ref:n,borderRadius:"9999px",...o})});xq.displayName="Circle";var Cq=L("div",{baseStyle:{display:"flex",alignItems:"center",justifyContent:"center"}});Cq.displayName="Center";var kq={horizontal:{insetStart:"50%",transform:"translateX(-50%)"},vertical:{top:"50%",transform:"translateY(-50%)"},both:{insetStart:"50%",top:"50%",transform:"translate(-50%, -50%)"}};N(function(t,n){const{axis:r="both",...o}=t;return R.createElement(L.div,{ref:n,__css:kq[r],...o,position:"absolute"})});var _q=N(function(t,n){const r=gt("Code",t),{className:o,...a}=Ie(t);return R.createElement(L.code,{ref:n,className:Ae("chakra-code",t.className),...a,__css:{display:"inline-block",...r}})});_q.displayName="Code";var Tq=N(function(t,n){const{className:r,centerContent:o,...a}=Ie(t),i=gt("Container",t);return R.createElement(L.div,{ref:n,className:Ae("chakra-container",r),...a,__css:{...i,...o&&{display:"flex",flexDirection:"column",alignItems:"center"}}})});Tq.displayName="Container";var hf=N(function(t,n){const{borderLeftWidth:r,borderBottomWidth:o,borderTopWidth:a,borderRightWidth:i,borderWidth:s,borderStyle:l,borderColor:u,...c}=gt("Divider",t),{className:d,orientation:f="horizontal",__css:p,...y}=Ie(t),v={vertical:{borderLeftWidth:r||i||s||"1px",height:"100%"},horizontal:{borderBottomWidth:o||a||s||"1px",width:"100%"}};return R.createElement(L.hr,{ref:n,"aria-orientation":f,...y,__css:{...c,border:"0",borderColor:u,borderStyle:l,...v[f],...p},className:Ae("chakra-divider",d)})});hf.displayName="Divider";var Fq=N(function(t,n){const{direction:r,align:o,justify:a,wrap:i,basis:s,grow:l,shrink:u,...c}=t,d={display:"flex",flexDirection:r,alignItems:o,justifyContent:a,flexWrap:i,flexBasis:s,flexGrow:l,flexShrink:u};return R.createElement(L.div,{ref:n,__css:d,...c})});Fq.displayName="Flex";var W2=N(function(t,n){const{templateAreas:r,gap:o,rowGap:a,columnGap:i,column:s,row:l,autoFlow:u,autoRows:c,templateRows:d,autoColumns:f,templateColumns:p,...y}=t,v={display:"grid",gridTemplateAreas:r,gridGap:o,gridRowGap:a,gridColumnGap:i,gridAutoColumns:f,gridColumn:s,gridRow:l,gridAutoFlow:u,gridAutoRows:c,gridTemplateRows:d,gridTemplateColumns:p};return R.createElement(L.div,{ref:n,__css:v,...y})});W2.displayName="Grid";function Yg(e){return fr(e,t=>t==="auto"?"auto":`span ${t}/span ${t}`)}var Eq=N(function(t,n){const{area:r,colSpan:o,colStart:a,colEnd:i,rowEnd:s,rowSpan:l,rowStart:u,...c}=t,d=am({gridArea:r,gridColumn:Yg(o),gridRow:Yg(l),gridColumnStart:a,gridColumnEnd:i,gridRowStart:u,gridRowEnd:s});return R.createElement(L.div,{ref:n,__css:d,...c})});Eq.displayName="GridItem";var $s=N(function(t,n){const r=gt("Heading",t),{className:o,...a}=Ie(t);return R.createElement(L.h2,{ref:n,className:Ae("chakra-heading",t.className),...a,__css:r})});$s.displayName="Heading";N(function(t,n){const r=gt("Mark",t),o=Ie(t);return F(nt,{ref:n,...o,as:"mark",__css:{bg:"transparent",whiteSpace:"nowrap",...r}})});var Aq=N(function(t,n){const r=gt("Kbd",t),{className:o,...a}=Ie(t);return R.createElement(L.kbd,{ref:n,className:Ae("chakra-kbd",o),...a,__css:{fontFamily:"mono",...r}})});Aq.displayName="Kbd";var Pq=N(function(t,n){const r=gt("Link",t),{className:o,isExternal:a,...i}=Ie(t);return R.createElement(L.a,{target:a?"_blank":void 0,rel:a?"noopener":void 0,ref:n,className:Ae("chakra-link",o),...i,__css:r})});Pq.displayName="Link";N(function(t,n){const{isExternal:r,target:o,rel:a,className:i,...s}=t;return R.createElement(L.a,{...s,ref:n,className:Ae("chakra-linkbox__overlay",i),rel:r?"noopener noreferrer":a,target:r?"_blank":o,__css:{position:"static","&::before":{content:"''",cursor:"inherit",display:"block",position:"absolute",top:0,left:0,zIndex:0,width:"100%",height:"100%"}}})});N(function(t,n){const{className:r,...o}=t;return R.createElement(L.div,{ref:n,position:"relative",...o,className:Ae("chakra-linkbox",r),__css:{"a[href]:not(.chakra-linkbox__overlay), abbr[title]":{position:"relative",zIndex:1}}})});var[qq,H2]=Xt({name:"ListStylesContext",errorMessage:`useListStyles returned is 'undefined'. Seems you forgot to wrap the components in "<List />" `}),Si=N(function(t,n){const r=Wr("List",t),{children:o,styleType:a="none",stylePosition:i,spacing:s,...l}=Ie(t),u=tm(o),d=s?{["& > *:not(style) ~ *:not(style)"]:{mt:s}}:{};return R.createElement(qq,{value:r},R.createElement(L.ul,{ref:n,listStyleType:a,listStylePosition:i,role:"list",__css:{...r.container,...d},...l},u))});Si.displayName="List";var Iq=N((e,t)=>{const{as:n,...r}=e;return F(Si,{ref:t,as:"ol",styleType:"decimal",marginStart:"1em",...r})});Iq.displayName="OrderedList";var Rq=N(function(t,n){const{as:r,...o}=t;return F(Si,{ref:n,as:"ul",styleType:"initial",marginStart:"1em",...o})});Rq.displayName="UnorderedList";var gf=N(function(t,n){const r=H2();return R.createElement(L.li,{ref:n,...t,__css:r.item})});gf.displayName="ListItem";var zq=N(function(t,n){const r=H2();return F(Hr,{ref:n,role:"presentation",...t,__css:r.icon})});zq.displayName="ListIcon";var lm=N(function(t,n){const{columns:r,spacingX:o,spacingY:a,spacing:i,minChildWidth:s,...l}=t,u=rv(),c=s?Vq(s,u):Lq(r);return F(W2,{ref:n,gap:i,columnGap:o,rowGap:a,templateColumns:c,...l})});lm.displayName="SimpleGrid";function Mq(e){return typeof e=="number"?`${e}px`:e}function Vq(e,t){return fr(e,n=>{const r=P_("sizes",n,Mq(n))(t);return n===null?null:`repeat(auto-fit, minmax(${r}, 1fr))`})}function Lq(e){return fr(e,t=>t===null?null:`repeat(${t}, minmax(0, 1fr))`)}var jq=L("div",{baseStyle:{flex:1,justifySelf:"stretch",alignSelf:"stretch"}});jq.displayName="Spacer";var yf="& > *:not(style) ~ *:not(style)";function Nq(e){const{spacing:t,direction:n}=e,r={column:{marginTop:t,marginEnd:0,marginBottom:0,marginStart:0},row:{marginTop:0,marginEnd:0,marginBottom:0,marginStart:t},"column-reverse":{marginTop:0,marginEnd:0,marginBottom:t,marginStart:0},"row-reverse":{marginTop:0,marginEnd:t,marginBottom:0,marginStart:0}};return{flexDirection:n,[yf]:fr(n,o=>r[o])}}function Bq(e){const{spacing:t,direction:n}=e,r={column:{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},"column-reverse":{my:t,mx:0,borderLeftWidth:0,borderBottomWidth:"1px"},row:{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0},"row-reverse":{mx:t,my:0,borderLeftWidth:"1px",borderBottomWidth:0}};return{"&":fr(n,o=>r[o])}}var U2=e=>R.createElement(L.div,{className:"chakra-stack__item",...e,__css:{display:"inline-block",flex:"0 0 auto",minWidth:0,...e.__css}});U2.displayName="StackItem";var Au=N((e,t)=>{const{isInline:n,direction:r,align:o,justify:a,spacing:i="0.5rem",wrap:s,children:l,divider:u,className:c,shouldWrapChildren:d,...f}=e,p=n?"row":r!=null?r:"column",y=w.exports.useMemo(()=>Nq({direction:p,spacing:i}),[p,i]),v=w.exports.useMemo(()=>Bq({spacing:i,direction:p}),[i,p]),k=!!u,g=!d&&!k,m=w.exports.useMemo(()=>{const S=tm(l);return g?S:S.map((T,A)=>{const E=typeof T.key<"u"?T.key:A,q=A+1===S.length,V=d?F(U2,{children:T},E):T;if(!k)return V;const _e=w.exports.cloneElement(u,{__css:v}),we=q?null:_e;return W(w.exports.Fragment,{children:[V,we]},E)})},[u,v,k,g,d,l]),h=Ae("chakra-stack",c);return R.createElement(L.div,{ref:t,display:"flex",alignItems:o,justifyContent:a,flexDirection:y.flexDirection,flexWrap:s,className:h,__css:k?{}:{[yf]:y[yf]},...f},m)});Au.displayName="Stack";var Un=N((e,t)=>F(Au,{align:"center",...e,direction:"row",ref:t}));Un.displayName="HStack";var um=N((e,t)=>F(Au,{align:"center",...e,direction:"column",ref:t}));um.displayName="VStack";var re=N(function(t,n){const r=gt("Text",t),{className:o,align:a,decoration:i,casing:s,...l}=Ie(t),u=am({textAlign:t.align,textDecoration:t.decoration,textTransform:t.casing});return R.createElement(L.p,{ref:n,className:Ae("chakra-text",t.className),...u,...l,__css:r})});re.displayName="Text";function Zg(e){return typeof e=="number"?`${e}px`:e}var Dq=N(function(t,n){const{spacing:r="0.5rem",spacingX:o,spacingY:a,children:i,justify:s,direction:l,align:u,className:c,shouldWrapChildren:d,...f}=t,p=w.exports.useMemo(()=>{const{spacingX:v=r,spacingY:k=r}={spacingX:o,spacingY:a};return{"--chakra-wrap-x-spacing":g=>fr(v,m=>Zg(Md("space",m)(g))),"--chakra-wrap-y-spacing":g=>fr(k,m=>Zg(Md("space",m)(g))),"--wrap-x-spacing":"calc(var(--chakra-wrap-x-spacing) / 2)","--wrap-y-spacing":"calc(var(--chakra-wrap-y-spacing) / 2)",display:"flex",flexWrap:"wrap",justifyContent:s,alignItems:u,flexDirection:l,listStyleType:"none",padding:"0",margin:"calc(var(--wrap-y-spacing) * -1) calc(var(--wrap-x-spacing) * -1)","& > *:not(style)":{margin:"var(--wrap-y-spacing) var(--wrap-x-spacing)"}}},[r,o,a,s,u,l]),y=w.exports.useMemo(()=>d?w.exports.Children.map(i,(v,k)=>F(G2,{children:v},k)):i,[i,d]);return R.createElement(L.div,{ref:n,className:Ae("chakra-wrap",c),overflow:"hidden",...f},R.createElement(L.ul,{className:"chakra-wrap__list",__css:p},y))});Dq.displayName="Wrap";var G2=N(function(t,n){const{className:r,...o}=t;return R.createElement(L.li,{ref:n,__css:{display:"flex",alignItems:"flex-start"},className:Ae("chakra-wrap__listitem",r),...o})});G2.displayName="WrapItem";var Oq={body:{classList:{add(){},remove(){}}},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:""},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}}},K2=Oq,eo=()=>{},$q={document:K2,navigator:{userAgent:""},CustomEvent:function(){return this},addEventListener:eo,removeEventListener:eo,getComputedStyle(){return{getPropertyValue(){return""}}},matchMedia(){return{matches:!1,addListener:eo,removeListener:eo}},requestAnimationFrame(e){return typeof setTimeout>"u"?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>"u"||clearTimeout(e)},setTimeout:()=>0,clearTimeout:eo,setInterval:()=>0,clearInterval:eo},Wq=$q,Hq={window:Wq,document:K2},Y2=typeof window<"u"?{window,document}:Hq,Z2=w.exports.createContext(Y2);Z2.displayName="EnvironmentContext";function X2(e){const{children:t,environment:n}=e,[r,o]=w.exports.useState(null),[a,i]=w.exports.useState(!1);w.exports.useEffect(()=>i(!0),[]);const s=w.exports.useMemo(()=>{if(n)return n;const l=r==null?void 0:r.ownerDocument,u=r==null?void 0:r.ownerDocument.defaultView;return l?{document:l,window:u}:Y2},[r,n]);return W(Z2.Provider,{value:s,children:[t,!n&&a&&F("span",{id:"__chakra_env",hidden:!0,ref:l=>{w.exports.startTransition(()=>{l&&o(l)})}})]})}X2.displayName="EnvironmentProvider";var[Uq,Gq]=Xt({strict:!1,name:"PortalManagerContext"});function Q2(e){const{children:t,zIndex:n}=e;return F(Uq,{value:{zIndex:n},children:t})}Q2.displayName="PortalManager";var[J2,Kq]=Xt({strict:!1,name:"PortalContext"}),cm="chakra-portal",Yq=".chakra-portal",Zq=e=>F("div",{className:"chakra-portal-zIndex",style:{position:"absolute",zIndex:e.zIndex,top:0,left:0,right:0},children:e.children}),Xq=e=>{const{appendToParentPortal:t,children:n}=e,[r,o]=w.exports.useState(null),a=w.exports.useRef(null),[,i]=w.exports.useState({});w.exports.useEffect(()=>i({}),[]);const s=Kq(),l=Gq();sr(()=>{if(!r)return;const c=r.ownerDocument,d=t&&s!=null?s:c.body;if(!d)return;a.current=c.createElement("div"),a.current.className=cm,d.appendChild(a.current),i({});const f=a.current;return()=>{d.contains(f)&&d.removeChild(f)}},[r]);const u=l!=null&&l.zIndex?F(Zq,{zIndex:l==null?void 0:l.zIndex,children:n}):n;return a.current?zl.exports.createPortal(F(J2,{value:a.current,children:u}),a.current):F("span",{ref:c=>{c&&o(c)}})},Qq=e=>{const{children:t,containerRef:n,appendToParentPortal:r}=e,o=n.current,a=o!=null?o:typeof window<"u"?document.body:void 0,i=w.exports.useMemo(()=>{const l=o==null?void 0:o.ownerDocument.createElement("div");return l&&(l.className=cm),l},[o]),[,s]=w.exports.useState({});return sr(()=>s({}),[]),sr(()=>{if(!(!i||!a))return a.appendChild(i),()=>{a.removeChild(i)}},[i,a]),a&&i?zl.exports.createPortal(F(J2,{value:r?i:null,children:t}),i):null};function Ii(e){const{containerRef:t,...n}=e;return t?F(Qq,{containerRef:t,...n}):F(Xq,{...n})}Ii.defaultProps={appendToParentPortal:!0};Ii.className=cm;Ii.selector=Yq;Ii.displayName="Portal";function Jq(e,t){const n=lr(e);w.exports.useEffect(()=>{if(t==null)return;let r=null;return r=window.setTimeout(()=>{n()},t),()=>{r&&window.clearTimeout(r)}},[t,n])}function eI(e,...t){return tI(e)?e(...t):e}var tI=e=>typeof e=="function",nI=(e,t)=>e.find(n=>n.id===t);function Xg(e,t){const n=ew(e,t),r=n?e[n].findIndex(o=>o.id===t):-1;return{position:n,index:r}}function ew(e,t){for(const[n,r]of Object.entries(e))if(nI(r,t))return n}function rI(e){const t=e.includes("right"),n=e.includes("left");let r="center";return t&&(r="flex-end"),n&&(r="flex-start"),{display:"flex",flexDirection:"column",alignItems:r}}function oI(e){const n=e==="top"||e==="bottom"?"0 auto":void 0,r=e.includes("top")?"env(safe-area-inset-top, 0px)":void 0,o=e.includes("bottom")?"env(safe-area-inset-bottom, 0px)":void 0,a=e.includes("left")?void 0:"env(safe-area-inset-right, 0px)",i=e.includes("right")?void 0:"env(safe-area-inset-left, 0px)";return{position:"fixed",zIndex:5500,pointerEvents:"none",display:"flex",flexDirection:"column",margin:n,top:r,bottom:o,right:a,left:i}}var aI={top:[],"top-left":[],"top-right":[],"bottom-left":[],bottom:[],"bottom-right":[]},$a=iI(aI);function iI(e){let t=e;const n=new Set,r=o=>{t=o(t),n.forEach(a=>a())};return{getState:()=>t,subscribe:o=>(n.add(o),()=>{r(()=>e),n.delete(o)}),removeToast:(o,a)=>{r(i=>({...i,[a]:i[a].filter(s=>s.id!=o)}))},notify:(o,a)=>{const i=sI(o,a),{position:s,id:l}=i;return r(u=>{var f,p;const d=s.includes("top")?[i,...(f=u[s])!=null?f:[]]:[...(p=u[s])!=null?p:[],i];return{...u,[s]:d}}),l},update:(o,a)=>{!o||r(i=>{const s={...i},{position:l,index:u}=Xg(s,o);return l&&u!==-1&&(s[l][u]={...s[l][u],...a,message:uI(a)}),s})},closeAll:({positions:o}={})=>{r(a=>{const i=["bottom","bottom-right","bottom-left","top","top-left","top-right"];return(o!=null?o:i).reduce((l,u)=>(l[u]=a[u].map(c=>({...c,requestClose:!0})),l),{...a})})},close:o=>{r(a=>{const i=ew(a,o);return i?{...a,[i]:a[i].map(s=>s.id==o?{...s,requestClose:!0}:s)}:a})},isActive:o=>Boolean(Xg($a.getState(),o).position)}}var Qg=0;function sI(e,t={}){var o,a;Qg+=1;const n=(o=t.id)!=null?o:Qg,r=(a=t.position)!=null?a:"bottom";return{id:n,message:e,position:r,duration:t.duration,onCloseComplete:t.onCloseComplete,onRequestRemove:()=>$a.removeToast(String(n),r),status:t.status,requestClose:!1,containerStyle:t.containerStyle}}var lI=e=>{const{status:t,variant:n="solid",id:r,title:o,isClosable:a,onClose:i,description:s,icon:l}=e,u=r?{root:`toast-${r}`,title:`toast-${r}-title`,description:`toast-${r}-description`}:void 0;return R.createElement(F2,{addRole:!1,status:t,variant:n,id:u==null?void 0:u.root,alignItems:"start",borderRadius:"md",boxShadow:"lg",paddingEnd:8,textAlign:"start",width:"auto"},F(A2,{children:l}),R.createElement(L.div,{flex:"1",maxWidth:"100%"},o&&F(P2,{id:u==null?void 0:u.title,children:o}),s&&F(E2,{id:u==null?void 0:u.description,display:"block",children:s})),a&&F(M2,{size:"sm",onClick:i,position:"absolute",insetEnd:1,top:1}))};function uI(e={}){const{render:t,toastComponent:n=lI}=e;return o=>typeof t=="function"?t({...o,...e}):F(n,{...o,...e})}var cI={initial:e=>{const{position:t}=e,n=["top","bottom"].includes(t)?"y":"x";let r=["top-right","bottom-right"].includes(t)?1:-1;return t==="bottom"&&(r=1),{opacity:0,[n]:r*24}},animate:{opacity:1,y:0,x:0,scale:1,transition:{duration:.4,ease:[.4,0,.2,1]}},exit:{opacity:0,scale:.85,transition:{duration:.2,ease:[.4,0,1,1]}}},tw=w.exports.memo(e=>{const{id:t,message:n,onCloseComplete:r,onRequestRemove:o,requestClose:a=!1,position:i="bottom",duration:s=5e3,containerStyle:l,motionVariants:u=cI,toastSpacing:c="0.5rem"}=e,[d,f]=w.exports.useState(s),p=dF();pf(()=>{p||r==null||r()},[p]),pf(()=>{f(s)},[s]);const y=()=>f(null),v=()=>f(s),k=()=>{p&&o()};w.exports.useEffect(()=>{p&&a&&o()},[p,a,o]),Jq(k,d);const g=w.exports.useMemo(()=>({pointerEvents:"auto",maxWidth:560,minWidth:300,margin:c,...l}),[l,c]),m=w.exports.useMemo(()=>rI(i),[i]);return R.createElement(aP.li,{layout:!0,className:"chakra-toast",variants:u,initial:"initial",animate:"animate",exit:"exit",onHoverStart:y,onHoverEnd:v,custom:{position:i},style:m},R.createElement(L.div,{role:"status","aria-atomic":"true",className:"chakra-toast__inner",__css:g},eI(n,{id:t,onClose:k})))});tw.displayName="ToastComponent";var dI=e=>{const t=w.exports.useSyncExternalStore($a.subscribe,$a.getState,$a.getState),{children:n,motionVariants:r,component:o=tw,portalProps:a}=e,s=Object.keys(t).map(l=>{const u=t[l];return F("ul",{role:"region","aria-live":"polite",id:`chakra-toast-manager-${l}`,style:oI(l),children:F(fP,{initial:!1,children:u.map(c=>F(o,{motionVariants:r,...c},c.id))})},l)});return W(ml,{children:[n,F(Ii,{...a,children:s})]})},fI=e=>{const{children:t,colorModeManager:n,portalZIndex:r,resetCSS:o=!0,theme:a={},environment:i,cssVarsRoot:s}=e,l=F(X2,{environment:i,children:t});return F(q_,{theme:a,cssVarsRoot:s,children:W(hb,{colorModeManager:n,options:a.config,children:[o?F(mq,{}):F(pq,{}),F(R_,{}),r?F(Q2,{zIndex:r,children:l}):l]})})},pI=e=>function({children:n,theme:r=e,toastOptions:o,...a}){return W(fI,{theme:r,...a,children:[n,F(dI,{...o})]})},mI=pI(S_);const hI=({recipes:e=[],onSelectRecipe:t,selectedHealthLabels:n=[],setSelectedHealthLabels:r})=>{const[o,a]=w.exports.useState(""),i=e.filter(s=>{const{recipe:l}=s,u=l.label.toLowerCase().includes(o.toLowerCase()),c=n.length===0||n.every(d=>l.healthLabels&&l.healthLabels.includes(d));return u&&c});return F(nt,{padding:"20px",children:W(um,{spacing:4,align:"stretch",children:[F(im,{placeholder:"Search for recipes...",value:o,onChange:s=>a(s.target.value)}),F(z2,{value:n,onChange:r,children:W(Un,{spacing:4,children:[F(Os,{value:"Vegan",children:"Vegan"}),F(Os,{value:"Vegetarian",children:"Vegetarian"}),F(Os,{value:"Pescatarian",children:"Pescatarian"})]})}),i.length===0?F(re,{children:"No recipes found"}):F(lm,{columns:{base:1,md:2,lg:3},spacing:10,children:i.map((s,l)=>{const u=s.recipe;return W(nt,{borderWidth:"1px",borderRadius:"lg",overflow:"hidden",onClick:()=>t(u),cursor:"pointer",boxShadow:"md",children:[F(nt,{height:"200px",width:"100%",display:"flex",justifyContent:"center",alignItems:"center",bg:"gray.100",children:F(em,{src:u.image,alt:u.label,boxSize:"180px",objectFit:"cover"})}),W(nt,{p:"6",children:[F(re,{fontWeight:"bold",isTruncated:!0,children:u.label}),W(re,{children:["Calories: ",u.calories.toFixed(2)]})]})]},l)})})]})})},gI=({recipe:e,setRecipe:t})=>W(nt,{padding:"20px",children:[F(nm,{onClick:()=>t(null),mb:4,children:"Back to Recipes"}),W(um,{spacing:4,align:"start",children:[F($s,{children:e.label}),F(em,{src:e.image,alt:e.label,boxSize:"400px",objectFit:"cover"}),W(lm,{columns:[1,2],spacing:10,width:"100%",children:[W(nt,{children:[F(re,{fontSize:"lg",fontWeight:"bold",children:"Meal Type:"}),F(re,{children:e.mealType.join(", ")})]}),W(nt,{children:[F(re,{fontSize:"lg",fontWeight:"bold",children:"Dish Type:"}),F(re,{children:e.dishType.join(", ")})]}),W(nt,{children:[F(re,{fontSize:"lg",fontWeight:"bold",children:"Total Cooking Time:"}),W(re,{children:[e.totalTime," minutes"]})]}),W(nt,{children:[F(re,{fontSize:"lg",fontWeight:"bold",children:"Diet Label:"}),F(re,{children:e.dietLabels.join(", ")||"None"})]}),W(nt,{children:[F(re,{fontSize:"lg",fontWeight:"bold",children:"Health Labels:"}),F(Si,{spacing:2,children:e.healthLabels.map((n,r)=>F(gf,{children:F(O2,{children:n})},r))})]}),W(nt,{children:[F(re,{fontSize:"lg",fontWeight:"bold",children:"Cautions:"}),F(re,{children:e.cautions.join(", ")||"None"})]}),W(nt,{children:[F(re,{fontSize:"lg",fontWeight:"bold",children:"Servings:"}),F(re,{children:e.yield})]})]}),F(hf,{}),F($s,{as:"h2",size:"md",children:"Ingredients:"}),F(Si,{spacing:2,children:e.ingredientLines.map((n,r)=>F(gf,{children:n},r))}),F(hf,{}),F($s,{as:"h2",size:"md",children:"Total Nutrients:"}),W(Au,{spacing:2,children:[W(Un,{children:[F(re,{fontWeight:"bold",children:"Energy:"}),W(re,{children:[e.totalNutrients.ENERC_KCAL.quantity.toFixed(2)," kcal"]})]}),W(Un,{children:[F(re,{fontWeight:"bold",children:"Protein:"}),W(re,{children:[e.totalNutrients.PROCNT.quantity.toFixed(2)," g"]})]}),W(Un,{children:[F(re,{fontWeight:"bold",children:"Fat:"}),W(re,{children:[e.totalNutrients.FAT.quantity.toFixed(2)," g"]})]}),W(Un,{children:[F(re,{fontWeight:"bold",children:"Carbs:"}),W(re,{children:[e.totalNutrients.CHOCDF.quantity.toFixed(2)," g"]})]}),W(Un,{children:[F(re,{fontWeight:"bold",children:"Cholesterol:"}),W(re,{children:[e.totalNutrients.CHOLE.quantity.toFixed(2)," mg"]})]}),W(Un,{children:[F(re,{fontWeight:"bold",children:"Sodium:"}),W(re,{children:[e.totalNutrients.NA.quantity.toFixed(2)," mg"]})]})]})]})]}),yI=JSON.parse(`{
  "from": 1,
  "to": 20,
  "count": 10000,
  "_links": {},
  "hits": [
    {
      "recipe": {
        "label": "Paleo Chocolate Covered Caramels",
        "image": "https://media.wincacademy.nl/react/images/final-project/chocolate-caramel.jpeg",
        "url": "http://ourfineday.com/happy-birthday-travis-and-a-recipe-for-chocolate-covered-chocolates/",
        "yield": 12,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Gluten-Free",
          "Wheat-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Tree-Nuts",
          "Sulfites"
        ],
        "ingredientLines": [
          "1/2 cup honey",
          "1 1/2 Tbsp almond butter",
          "3 tsp butter or coconut butter for dairy free",
          "1 tsp water",
          "1/2 tsp vanilla",
          "1 cup chocolate chips",
          "1/2 tsp coconut oil"
        ],
        "ingredients": [
          {
            "text": "1/2 cup honey",
            "quantity": 0.5,
            "measure": "cup",
            "food": "honey",
            "weight": 169.5,
            "foodCategory": null,
            "foodId": "food_bn6aoj9atkqx8fbkli859bbbxx62",
            "image": "https://www.edamam.com/food-img/198/198c7b25c23b4235b4cc33818c7b335f.jpg"
          },
          {
            "text": "1 1/2 Tbsp almond butter",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "almond butter",
            "weight": 24,
            "foodCategory": "plant-based protein",
            "foodId": "food_ae9575obgo01yta6szkvqab50hhl",
            "image": "https://www.edamam.com/food-img/5dd/5ddf70b59f27c03902b5d5a3c4574b37.png"
          },
          {
            "text": "3 tsp butter or coconut butter for dairy free",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "coconut butter",
            "weight": 14.000000000710095,
            "foodCategory": null,
            "foodId": "food_bkx1ggcaouz8qob002t72ay33jbo",
            "image": "https://www.edamam.com/food-img/0d0/0d0a27d667f0b7930bdda17da8ea7dc7.jpg"
          },
          {
            "text": "1 tsp water",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "water",
            "weight": 4.928921594,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "1/2 tsp vanilla",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "1 cup chocolate chips",
            "quantity": 1,
            "measure": "cup",
            "food": "chocolate chips",
            "weight": 224,
            "foodCategory": "chocolate",
            "foodId": "food_b0camz2asgzienbko2epvbzzv6qj",
            "image": "https://www.edamam.com/food-img/36c/36ce336d10d51259f365ec2dbc1e28c4.jpg"
          },
          {
            "text": "1/2 tsp coconut oil",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "coconut oil",
            "weight": 2.25,
            "foodCategory": "Oils",
            "foodId": "food_b40ubq8a0enoidbcr1tmfbwgs6aw",
            "image": "https://www.edamam.com/food-img/3c9/3c97284c57e76e16093d51572b558be8.jpg"
          }
        ],
        "calories": 1912.5630000050721,
        "totalWeight": 440.7789215947101,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1912.5630000050721,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 76.8976600004565,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 35.34678,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4121600000000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.917509999999998,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.307704,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 301.1664500001775,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 290.8074500001014,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 10.359000000076083,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 280.61185,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 279.283,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 17.247360000050723,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 33.6,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 168.71615686414296,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 353.66886764782004,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 70.65128921593998,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 270.768,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.668120000018259,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 1.1653028921594002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 128.826,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.1915,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.010071,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.291765,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.97122,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.065946,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 16.11,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 16.11,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.812424999999999,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 0.01125,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 38.766272672406004,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Grilled Pork Chops with Chipotle Sauce",
        "image": "https://media.wincacademy.nl/react/images/final-project/Grilled-Pork-Chop-with-Chipotle-Sauce.jpeg",
        "url": "https://grumpyshoneybunch.com/2009/07/grilled-pork-chops-chipotle-sauce.html",
        "yield": 8,
        "dietLabels": [
          "Low-Carb"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "* 8 pork chops",
          "* 1/2 cup sugar free ketchup",
          "* 1/3 cup Seasoned Rice Vinegar, original",
          "* 1/3 cup Swerve Brown Sweetener",
          "* 1 Tablespoon ground cumin",
          "* 1 teaspoons chipotle chili powder"
        ],
        "ingredients": [
          {
            "text": "* 8 pork chops",
            "quantity": 8,
            "measure": "<unit>",
            "food": "pork chops",
            "weight": 1592,
            "foodCategory": "meats",
            "foodId": "food_a6yuw2wan806yxaem8uqza91rjmb",
            "image": "https://www.edamam.com/food-img/499/49977aabc381bd3889ad9100978e1bb6.jpg"
          },
          {
            "text": "* 1/2 cup sugar free ketchup",
            "quantity": 0.5,
            "measure": "cup",
            "food": "ketchup",
            "weight": 120,
            "foodCategory": "condiments and sauces",
            "foodId": "food_au7jthtab0n3era9uue8pauakroe",
            "image": "https://www.edamam.com/food-img/257/257207c446011b849001ae596390341c.jpeg"
          },
          {
            "text": "* 1/3 cup Seasoned Rice Vinegar, original",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Seasoned Rice Vinegar",
            "weight": 79.66666666666666,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bhk02bwbp4x7kkbeajj2pbnj15cp",
            "image": "https://www.edamam.com/food-img/c7d/c7dbd1846c5d08e9739930d70a404d50.jpg"
          },
          {
            "text": "* 1/3 cup Swerve Brown Sweetener",
            "quantity": 0.3333333333333333,
            "measure": "<unit>",
            "food": "Sweetener",
            "weight": 0.3333333333333333,
            "foodCategory": "sugars",
            "foodId": "food_b3755atafogvz2ac74adra225skl",
            "image": "https://www.edamam.com/food-img/0e3/0e3edc39fe123b516c4c758f4f09e99f.jpg"
          },
          {
            "text": "* 1 Tablespoon ground cumin",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cumin",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "* 1 teaspoons chipotle chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          }
        ],
        "calories": 2875.644,
        "totalWeight": 1800.7,
        "totalTime": 0,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2875.644,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 145.59936,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 47.823934,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.46464,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 57.431257,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 19.406902,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 37.914233333333335,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 35.984633333333335,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 1.9296,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 26.455763333333334,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.28396666666666665,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 332.3863533333334,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1098.48,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2056.899,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 390.8266666666667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 443.5663333333334,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6015.86,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.057766666666668,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 28.8184,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3402.8933333333334,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 106.92099999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 5.400899999999999,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 7.77883,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.25308,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 107.68321999999998,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 11.368478,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 12.155999999999999,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 12.155999999999999,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 8.4376,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 7.96,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 4.89198,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 6.7779,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1267.3743166666668,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Slow Cooker Turkey Dip Sandwiches recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/turkey-sandwich.jpeg",
        "url": "http://www.bobbiskozykitchen.com/2015/03/slow-cooker-turkey-dip-sandwiches.html",
        "yield": 4,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "7 tablespoons room temperature unsalted butter, divided",
          "3 tablespoons fresh thyme leaves, chopped",
          "4 cloves garlic, minced",
          "1 lemon, zested",
          "kosher salt",
          "cracked black pepper",
          "1 large onion, chopped",
          "1/2 cup chicken stock",
          "3 tablespoons Worcestershire sauce",
          "1 (4-pound) bone-in turkey breast",
          "4 demi French baguettes, sliced in half",
          "12 slices Swiss Cheese"
        ],
        "ingredients": [
          {
            "text": "7 tablespoons room temperature unsalted butter, divided",
            "quantity": 7,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 99.39999999999999,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "3 tablespoons fresh thyme leaves, chopped",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "fresh thyme",
            "weight": 7.19999999951308,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b3o3cj7a5gskecb0ufphtadnbfqb",
            "image": "https://www.edamam.com/food-img/3e7/3e7cf3c8d767a90b906447f5e74059f7.jpg"
          },
          {
            "text": "4 cloves garlic, minced",
            "quantity": 4,
            "measure": "clove",
            "food": "garlic",
            "weight": 12,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lemon, zested",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lemon",
            "weight": 58,
            "foodCategory": "fruit",
            "foodId": "food_a6uzc62astrxcgbtzyq59b6fncrr",
            "image": "https://www.edamam.com/food-img/70a/70acba3d4c734d7c70ef4efeed85dc8f.jpg"
          },
          {
            "text": "kosher salt",
            "quantity": 0,
            "measure": null,
            "food": "kosher salt",
            "weight": 23.087816879997078,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "cracked black pepper",
            "quantity": 0,
            "measure": null,
            "food": "black pepper",
            "weight": 11.543908439998539,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 large onion, chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 150,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup chicken stock",
            "quantity": 0.5,
            "measure": "cup",
            "food": "chicken stock",
            "weight": 120,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "3 tablespoons Worcestershire sauce",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "Worcestershire sauce",
            "weight": 51,
            "foodCategory": "canned soup",
            "foodId": "food_ahb8mscbejo58ubexo0itam1i74g",
            "image": "https://www.edamam.com/food-img/072/072b61dd1ad5bb641f05b14f716ba6d0.jpg"
          },
          {
            "text": "1 (4-pound) bone-in turkey breast",
            "quantity": 4,
            "measure": "pound",
            "food": "turkey breast",
            "weight": 1814.36948,
            "foodCategory": "Poultry",
            "foodId": "food_aijy334arptsr3b4zwpdrajqapl8",
            "image": "https://www.edamam.com/food-img/3d8/3d80f3f4fcb0efcf54d094c857d74926.jpg"
          },
          {
            "text": "4 demi French baguettes, sliced in half",
            "quantity": 4,
            "measure": "<unit>",
            "food": "baguettes",
            "weight": 1200,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_bz1n7y8bupmgp0anvyqmda9dwufz",
            "image": "https://www.edamam.com/food-img/470/47053c77e167539c64fef3f2a3249bb2.jpg"
          },
          {
            "text": "12 slices Swiss Cheese",
            "quantity": 12,
            "measure": "slice",
            "food": "Swiss Cheese",
            "weight": 336,
            "foodCategory": "Cheese",
            "foodId": "food_am9c0zybyfhgn9brc0imabzslets",
            "image": "https://www.edamam.com/food-img/419/419f6ce36db411c072d0dbf6c8510897.jpg"
          }
        ],
        "calories": 8031.129285423905,
        "totalWeight": 3859.513388439512,
        "totalTime": 375,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "sandwiches"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 8031.129285423905,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 320.02449516153575,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 149.01005856668252,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.318332,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.9322608345712,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.1734542374286,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 687.3825694472602,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 652.6279606120087,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 34.75460883525146,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 74.95002101401599,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 585.4535633416888,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1587.8361458,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 9117.120975567957,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 3727.6667435472214,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 970.9018911116184,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7255.567006164616,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 73.40638389343889,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 53.81769326282717,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 6386.241884854681,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1476.3375059176406,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 63.98119999922044,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.893574289674964,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 8.318519446989704,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 145.90443453746033,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 9.910386927158704,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 2227.9697416745803,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 859.9697416745806,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 804,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 18.2496966344,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 3.171,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.426336647775984,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 44.209378116277605,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2031.4894896573069,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Blueberry Basil Margarita Cocktail recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/blueberry-margarita.jpeg",
        "url": "http://drinkwire.liquor.com/post/blueberry-basil-margarita-cocktail-recipe/",
        "yield": 4,
        "dietLabels": [
          "Low-Fat",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher",
          "Alcohol-Cocktail"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "2.0 oz. Tres Agaves Blanco Tequila",
          "1.0 oz. agave nectar",
          "12-15 blueberries",
          "1 lime squeezed",
          "A couple sprigs of basil"
        ],
        "ingredients": [
          {
            "text": "2.0 oz. Tres Agaves Blanco Tequila",
            "quantity": 2,
            "measure": "ounce",
            "food": "Tequila",
            "weight": 56.69904625,
            "foodCategory": "liquors and cocktails",
            "foodId": "food_ajguqpia53yz3oah6w2frad3tz65",
            "image": "https://www.edamam.com/food-img/c7f/c7fcc63de96b349534aade3de3f9fa7d.jpg"
          },
          {
            "text": "1.0 oz. agave nectar",
            "quantity": 1,
            "measure": "ounce",
            "food": "agave nectar",
            "weight": 28.349523125,
            "foodCategory": "sugar syrups",
            "foodId": "food_bj8pkd1bgey1rlbp58zagbjhpfi0",
            "image": "https://www.edamam.com/food-img/3b5/3b5425ed8e35a486b4138cc8720ae9e4.jpg"
          },
          {
            "text": "12-15 blueberries",
            "quantity": 13.5,
            "measure": "<unit>",
            "food": "blueberries",
            "weight": 18.360000000000003,
            "foodCategory": "fruit",
            "foodId": "food_bgkl0cuasoeomtbolalmcauhha54",
            "image": "https://www.edamam.com/food-img/f55/f55705a2a9ea9f7abf449a05fa968139.png"
          },
          {
            "text": "1 lime squeezed",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "A couple sprigs of basil",
            "quantity": 2,
            "measure": "sprig",
            "food": "basil",
            "weight": 4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          }
        ],
        "calories": 243.539632975,
        "totalWeight": 174.408569375,
        "totalTime": 15,
        "cuisineType": [
          "world"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "alcohol cocktail"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 243.539632975,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 0.22018800000000005,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 0.0215208,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 0.0248792,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 0.07921560000000001,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 31.37380157500001,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 27.57568541875001,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 3.7981161562500003,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 23.101117418750007,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 20.128161418750004,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 0.7308640000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2.2505904625000004,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 30.291600000000003,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 7.681600000000001,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 95.41118092500001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 0.6028876185,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.1581556185,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 18.771161850000006,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12.450800000000001,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 21.997920000000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.031655142775000006,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.026235561850000005,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.25419567601250004,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.0451241904625,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 9.181600000000001,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 9.181600000000001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 0.28405199999999997,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 20.537480000000002,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 116.03912080250001,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Potato Gratin",
        "image": "https://media.wincacademy.nl/react/images/final-project/potatoes-gratin.webp",
        "url": "http://www.cookstr.com/recipes/potato-gratin-2",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegetarian",
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "1 cup milk",
          "1 cup heavy cream",
          "2 cups finely sliced leeks, white part only",
          "1 tablespoon roasted garlic pur\xE9e (see note)",
          "1 tablespoon chopped rosemary leaves",
          "Pinch freshly ground nutmeg",
          "Coarse salt and freshly ground white pepper to taste",
          "5 tablespoons unsalted butter, at room temperature",
          "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices"
        ],
        "ingredients": [
          {
            "text": "1 cup milk",
            "quantity": 1,
            "measure": "cup",
            "food": "milk",
            "weight": 244,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "1 cup heavy cream",
            "quantity": 1,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 238,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "2 cups finely sliced leeks, white part only",
            "quantity": 2,
            "measure": "cup",
            "food": "leeks",
            "weight": 178,
            "foodCategory": "vegetables",
            "foodId": "food_a27jevnb06c1m9ax7k41xbbcwcuo",
            "image": "https://www.edamam.com/food-img/4ae/4ae9e09d029a28e0e2c64bdfdbf3f6ae.jpg"
          },
          {
            "text": "1 tablespoon roasted garlic pur\xE9e (see note)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "garlic",
            "weight": 8.499999999856291,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 tablespoon chopped rosemary leaves",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "rosemary",
            "weight": 1.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6tm2t2blxi7okaeiv91wb8bmygq",
            "image": "https://www.edamam.com/food-img/0ac/0ac8f7cf6f2d0ad7b1a2f9900fae44f3.jpg"
          },
          {
            "text": "Pinch freshly ground nutmeg",
            "quantity": 1,
            "measure": "pinch",
            "food": "ground nutmeg",
            "weight": 0.14583333352071937,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aa8vp2kadkkiiubgpp48fazrqiq2",
            "image": "https://www.edamam.com/food-img/b9e/b9e54f78ae18cf99a6504b472ba25e7b.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "Coarse salt",
            "weight": 13.304075000000262,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "Coarse salt and freshly ground white pepper to taste",
            "quantity": 0,
            "measure": null,
            "food": "white pepper",
            "weight": 0,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a443px0bncpqa5avv80p3anrp26k",
            "image": "https://www.edamam.com/food-img/4f0/4f0e35fe6c042996408b337fb550324a.jpg"
          },
          {
            "text": "5 tablespoons unsalted butter, at room temperature",
            "quantity": 5,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 71,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "4 large Yukon Gold potatoes, peeled and cut, crosswise, into 1/8-inch-thick slices",
            "quantity": 4,
            "measure": "<unit>",
            "food": "Yukon Gold potatoes",
            "weight": 1476,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          }
        ],
        "calories": 2739.76762500077,
        "totalWeight": 2229.800431236176,
        "totalTime": 120,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2739.76762500077,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 155.63557208340066,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 96.38664016671514,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 2.32738,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 42.400860833339344,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 6.873602416666964,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 304.67288125004484,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 268.54834791667554,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 36.12453333336929,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 37.54896041667083,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.259086666668466,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 503.11,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5156.393388500102,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 753.6314368300897,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 435.86342097933505,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 7098.92778449897,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 15.712683506415825,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.138100014571826,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1287.6176250001793,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1726.289291666676,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 316.5869749999608,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.4738665833336944,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.2360371249999487,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 16.685738375001428,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 5.0317103333318585,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.14883333347143,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.14883333347143,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.6471,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 5.9030000000000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.132799999999884,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 125.16649999999754,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1690.0881846123998,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Seafood Casserole",
        "image": "https://media.wincacademy.nl/react/images/final-project/seafood-casserol.jpeg",
        "url": "http://www.bigoven.com/recipe/Seafood-Casserole/296427",
        "yield": 6,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "6 oz pasta or noodles",
          "1/2 cup mayonnaise or salad dressing",
          "1/2 cup white wine",
          "1 can condensed cream of mushroom soup",
          "1 cup cheddar cheese",
          "1/2 tsp dry mustard",
          "8 oz, can tuna, shrimp or crab",
          "1 cup breadcrumbs"
        ],
        "ingredients": [
          {
            "text": "6 oz pasta or noodles",
            "quantity": 6,
            "measure": "ounce",
            "food": "pasta",
            "weight": 170.09713875,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          },
          {
            "text": "1/2 cup mayonnaise or salad dressing",
            "quantity": 0.5,
            "measure": "cup",
            "food": "salad dressing",
            "weight": 125,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a67f1v3boelh4wasob4qib34t5bv",
            "image": "https://www.edamam.com/food-img/241/24178db68d42001caf980f8f209534cb.jpg"
          },
          {
            "text": "1/2 cup white wine",
            "quantity": 0.5,
            "measure": "cup",
            "food": "white wine",
            "weight": 117.6,
            "foodCategory": "wines",
            "foodId": "food_bn44h7baron9ufaoxinmya8l0yye",
            "image": "https://www.edamam.com/food-img/a71/a718cf3c52add522128929f1f324d2ab.jpg"
          },
          {
            "text": "1 can condensed cream of mushroom soup",
            "quantity": 1,
            "measure": "can",
            "food": "condensed cream of mushroom soup",
            "weight": 303,
            "foodCategory": "canned soup",
            "foodId": "food_b628l7bbpw7rnqa1ri8egb0xetpn",
            "image": "https://www.edamam.com/food-img/545/545d0db4311588977bed0aabfa530c58.jpg"
          },
          {
            "text": "1 cup cheddar cheese",
            "quantity": 1,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 132,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "1/2 tsp dry mustard",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dry mustard",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b0xqxo3a93nsz8a6ppdilau4ujwt",
            "image": "https://www.edamam.com/food-img/9ff/9ff9e6d04cbc71ff884f3212afa0adfd.jpg"
          },
          {
            "text": "8 oz, can tuna, shrimp or crab",
            "quantity": 8,
            "measure": "ounce",
            "food": "can tuna",
            "weight": 226.796185,
            "foodCategory": "canned seafood",
            "foodId": "food_a0jj77zb6yprvtasct45abh6qkxp",
            "image": "https://www.edamam.com/food-img/b53/b53adeb03d265a094fb598dd89f33450.jpg"
          },
          {
            "text": "1 cup breadcrumbs",
            "quantity": 1,
            "measure": "cup",
            "food": "breadcrumbs",
            "weight": 108,
            "foodCategory": "bread, rolls and tortillas",
            "foodId": "food_ata1dxza443wfda7jb4e5b3zwt9p",
            "image": "https://www.edamam.com/food-img/349/349f852497885b9d9c0b195ad0d0db8f.jpg"
          }
        ],
        "calories": 2690.7571038625,
        "totalWeight": 1183.49332375,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2690.7571038625,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 134.158510171125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 42.130519024687494,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.6305059237000001,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 35.1820880252125,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 44.719843295,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 233.57303350462502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 221.026925064625,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 12.546108440000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.141053604625,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 116.85426525700001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 216.28662660000003,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4312.022405275,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1212.5197505875,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 248.9446060875,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1392.0777905625002,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.290660619250001,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.592083332875001,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1541.4582893875,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 391.79535145,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.071,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.351416280375,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.3694170786500002,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 34.31560067035,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.2685977671750002,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 259.985332375,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 109.86533237500001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 88.56,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 7.322902717500002,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.11955422,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.379734263125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 194.99208950874998,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 668.15201569525,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Green coconut curry with salmon",
        "image": "https://media.wincacademy.nl/react/images/final-project/coconut-curry-salmon.jpeg",
        "url": "http://www.aliceincookingland.com/recipe/green-coconut-curry-salmon/",
        "yield": 18,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Pescatarian",
          "Dairy-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Tree-Nuts",
          "Shellfish",
          "Sulfites",
          "FODMAP"
        ],
        "ingredientLines": [
          "1 1/2 lb salmon",
          "1 zuchinni finely chopped",
          "2 green peppers",
          "2 cloves garlic diced",
          "1 lb mushrooms sliced",
          "2 heads baby bok choy cut into fourths",
          "3 tsp ginger finely grated",
          "4 tbsp grapeseed oil",
          "2 14-oz cans coconut milk",
          "4 tbsp green curry paste",
          "2 tbsp fish sauce",
          "1 lime juiced",
          "1/2 cup fresh basil chopped",
          "2 green onions sliced",
          "1 tsp salt",
          "1 tsp pepper",
          "1 package Aisian noodles we used Soba"
        ],
        "ingredients": [
          {
            "text": "1 1/2 lb salmon",
            "quantity": 1.5,
            "measure": "pound",
            "food": "salmon",
            "weight": 680.388555,
            "foodCategory": "seafood",
            "foodId": "food_bhncugnadgibupafbeeapbislbom",
            "image": "https://www.edamam.com/food-img/9a0/9a0f38422e9f21dcedbc2dca0d8209ac.jpg"
          },
          {
            "text": "1 zuchinni finely chopped",
            "quantity": 1,
            "measure": "<unit>",
            "food": "zuchinni",
            "weight": 196,
            "foodCategory": "vegetables",
            "foodId": "food_avpihljbuwpd8ibbmahcabaros5s",
            "image": "https://www.edamam.com/food-img/f63/f637280594e4a731eccc1199194a8847.jpg"
          },
          {
            "text": "2 green peppers",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green peppers",
            "weight": 232.57777777777778,
            "foodCategory": "vegetables",
            "foodId": "food_bz8rcwobbzm7zhb3wh2n7aznivou",
            "image": "https://www.edamam.com/food-img/629/629dc9fddc1f8aec27fa337dd6ce2b7c.jpg"
          },
          {
            "text": "2 cloves garlic diced",
            "quantity": 2,
            "measure": "clove",
            "food": "garlic",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 lb mushrooms sliced",
            "quantity": 1,
            "measure": "pound",
            "food": "mushrooms",
            "weight": 453.59237,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "2 heads baby bok choy cut into fourths",
            "quantity": 2,
            "measure": "head",
            "food": "bok choy",
            "weight": 151.99999999999983,
            "foodCategory": "vegetables",
            "foodId": "food_bq7w3usaxapk30b8utp6lasy79lv",
            "image": "https://www.edamam.com/food-img/c76/c7698a4dc6baecd186476820b6b91cdc.jpg"
          },
          {
            "text": "3 tsp ginger finely grated",
            "quantity": 3,
            "measure": "teaspoon",
            "food": "ginger",
            "weight": 6,
            "foodCategory": "vegetables",
            "foodId": "food_bi2ki2xb5zmmvbaiwf7ztbgktzp6",
            "image": "https://www.edamam.com/food-img/b9c/b9c06ef451ef29513880af0a53ebbaa6.jpg"
          },
          {
            "text": "4 tbsp grapeseed oil",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "grapeseed oil",
            "weight": 54.4,
            "foodCategory": "Oils",
            "foodId": "food_br8vwihb5tm7wybd4ppzjaox5089",
            "image": "https://www.edamam.com/food-img/88b/88bb3399c7bf214d2bce6bd86780eaf2.jpg"
          },
          {
            "text": "2 14-oz cans coconut milk",
            "quantity": 28,
            "measure": "ounce",
            "food": "coconut milk",
            "weight": 793.7866475000001,
            "foodCategory": "non-dairy beverages",
            "foodId": "food_by1k6v2adj7drhbq9w1rpbpen9ms",
            "image": "https://www.edamam.com/food-img/671/671f7528eadb1b01efb53243d0ef0f80.JPG"
          },
          {
            "text": "4 tbsp green curry paste",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "curry paste",
            "weight": 64,
            "foodCategory": "condiments and sauces",
            "foodId": "food_aojdol2are6zg7af2nincbe87jot",
            "image": "https://www.edamam.com/food-img/b6a/b6a9ebae5850f42eca0253827603ef9c.jpg"
          },
          {
            "text": "2 tbsp fish sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "fish sauce",
            "weight": 36,
            "foodCategory": "canned soup",
            "foodId": "food_ahlu6u3ab8bu1wap7cbqua3s1quk",
            "image": "https://www.edamam.com/food-img/7b5/7b58b769d8bf7b79acf12a76b79ea9bc.jpg"
          },
          {
            "text": "1 lime juiced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "lime",
            "weight": 67,
            "foodCategory": "fruit",
            "foodId": "food_av58muyb8kg92fbk0g8g8aui5knv",
            "image": "https://www.edamam.com/food-img/48a/48a123c9576647c4ada6a41df5eeb22a.jpg"
          },
          {
            "text": "1/2 cup fresh basil chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "fresh basil",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bfeht3obd58c3gak5ehpibxgbbs6",
            "image": "https://www.edamam.com/food-img/5f1/5f1b05685ac2b404236a5d1c1f3c8c10.jpg"
          },
          {
            "text": "2 green onions sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "green onions",
            "weight": 30,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 tsp pepper",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 2.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 package Aisian noodles we used Soba",
            "quantity": 1,
            "measure": "package",
            "food": "noodles",
            "weight": 340,
            "foodCategory": "grains",
            "foodId": "food_aefg3gqa71nrtpbhjfo3yb36kd81",
            "image": "https://www.edamam.com/food-img/800/800c9c0d7cef6b5474723682ffa2878d.jpg"
          }
        ],
        "calories": 5112.068417170556,
        "totalWeight": 3132.645350277778,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5112.068417170556,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 336.96978048289225,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 181.28297571055614,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.2074,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.68709068526722,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 73.26260006699724,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 328.1063749712389,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 297.98885939653667,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 30.11751557470222,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 32.25989848546667,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 230.65632545302884,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 665.70150452552,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 6120.048996514333,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 673.4619165553777,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 988.5084524161775,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 8413.89930292511,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 51.18356467470444,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 18.335398636711112,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3885.2424455315554,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 246.90042395519998,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 345.5847355913334,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 6.220408624813333,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 4.799611279027777,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 114.07125079756834,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.403383890282219,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 1891.6150528181777,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 732.2150528181777,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 683.4000000000001,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 23.33407684378,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.9271847400000002,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 44.03291935599778,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 218.48374043807544,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2193.2876144164557,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Vegan Herb Crackers recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/herb-crackers.jpeg",        
        "url": "https://elanaspantry.com/herb-crackers/",
        "yield": 15,
        "dietLabels": [
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Keto-Friendly",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "FODMAP-Free",
          "Kosher"
        ],
        "cautions": [
          "FODMAP"
        ],
        "ingredientLines": [
          "2 cups blanched almond flour (not almond meal)",
          "\xBE teaspoon celtic sea salt",
          "2 tablespoons herbes de provence",
          "1 tablespoon olive oil",
          "2 tablespoons water"
        ],
        "ingredients": [
          {
            "text": "2 cups blanched almond flour (not almond meal)",
            "quantity": 2,
            "measure": "cup",
            "food": "blanched almond flour",
            "weight": 224,
            "foodCategory": "grains",
            "foodId": "food_aquymekalw81cfbcaho71btv3lnt",
            "image": "https://www.edamam.com/food-img/4ce/4ce26863cf14ffeb473cc6f9edcc60f0.jpg"
          },
          {
            "text": "\xBE teaspoon celtic sea salt",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "sea salt",
            "weight": 3.6406250001846567,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons herbes de provence",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "herbes de provence",
            "weight": 5.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "2 tablespoons water",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "water",
            "weight": 29.573529562,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 1445.316,
        "totalWeight": 274.08661383452016,
        "totalTime": 30,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "starter"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1445.316,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 125.81162,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 9.739500000000001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 9.875115000000001,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 1.484865,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 46.10236,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 20.920359999999995,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 25.182000000000002,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 7.8203400000000025,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 50.60074000000001,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 633.6317435258399,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 260.2693461122648,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 12.191866138345203,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1675.5672467418017,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.174523178099317,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 0.33829043722872015,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1074.4284000000002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 10.260000000000002,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 2.7,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.027702000000000004,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.021546000000000003,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 0.26676000000000005,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.029700000000000008,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 14.796000000000001,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 14.796000000000001,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.34117,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 100.71000000000001,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 29.967842200983043,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Baked Chicken Parm",
        "image": "https://media.wincacademy.nl/react/images/final-project/baked-chicken-parm.jpeg",
        "url": "https://food52.com/recipes/17016-baked-chicken-parm",
        "yield": 4,
        "dietLabels": [
          "High-Fiber",
          "Low-Fat"
        ],
        "healthLabels": [
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon oil",
          "1 1/2 cup panko",
          "1/2 cup grated parmesan cheese",
          "1/4 teaspoon salt",
          "1/4 teaspoon ground black pepper",
          "1/8 teaspoon garlic powder",
          "1 teaspoon dried italian seasoning",
          "2 large eggs",
          "2 large boneless, skinless chicken breast halves",
          "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
          "2 cups purchased marinara sauce",
          "4 servings angel hair pasta, prepared according to package instructions"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "1 1/2 cup panko",
            "quantity": 1.5,
            "measure": "cup",
            "food": "panko",
            "weight": 90,
            "foodCategory": "grains",
            "foodId": "food_a9tnk2lbj0xkckbytqnx1ajhpqbp",
            "image": null
          },
          {
            "text": "1/2 cup grated parmesan cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 74.353125,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/4 teaspoon ground black pepper",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "black pepper",
            "weight": 0.575,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1/8 teaspoon garlic powder",
            "quantity": 0.125,
            "measure": "teaspoon",
            "food": "garlic powder",
            "weight": 0.3875,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1 teaspoon dried italian seasoning",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "italian seasoning",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "2 large eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 100,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 large boneless, skinless chicken breast halves",
            "quantity": 2,
            "measure": "half",
            "food": "boneless, skinless chicken breast",
            "weight": 217.5,
            "foodCategory": "Poultry",
            "foodId": "food_bdrxu94aj3x2djbpur8dhagfhkcn",
            "image": "https://www.edamam.com/food-img/da5/da510379d3650787338ca16fb69f4c94.jpg"
          },
          {
            "text": "1/2 cup grated sharp cheddar cheese or grated mozzarella cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "cheddar cheese",
            "weight": 66,
            "foodCategory": "Cheese",
            "foodId": "food_bhppgmha1u27voagb8eptbp9g376",
            "image": "https://www.edamam.com/food-img/bcd/bcd94dde1fcde1475b5bf0540f821c5d.jpg"
          },
          {
            "text": "2 cups purchased marinara sauce",
            "quantity": 2,
            "measure": "cup",
            "food": "marinara sauce",
            "weight": 528,
            "foodCategory": "canned soup",
            "foodId": "food_a7hv5mybkkrs3ub78yhtxafs67bu",
            "image": "https://www.edamam.com/food-img/08b/08b3bb49c006689a458a8b9c4a4e0057.jpg"
          },
          {
            "text": "4 servings angel hair pasta, prepared according to package instructions",
            "quantity": 4,
            "measure": "serving",
            "food": "angel hair pasta",
            "weight": 1200,
            "foodCategory": "grains",
            "foodId": "food_a8hs60uayl5icia1qe8qoba1kwp8",
            "image": "https://www.edamam.com/food-img/296/296ff2b02ef3822928c3c923e22c7d19.jpg"
          }
        ],
        "calories": 6118.390125,
        "totalWeight": 2293.315625,
        "totalTime": 116,
        "cuisineType": [
          "mediterranean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 6118.390125,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 99.64538593750002,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 34.6237216875,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.913065,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 29.21728721875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 17.610497531249997,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 1004.0793118749999,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 952.744961875,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 51.33435000000001,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 65.13982125000001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 276.6349159375,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 659.2151250000001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 4683.3015000000005,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1981.3793750000002,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 857.972,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5363.8595000000005,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 25.297121875000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 25.1352396875,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 3941.5084375,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 679.0112187500001,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 11.06465,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.5054243437500001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.42291875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 62.323053718749996,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.66494884375,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 376.59959375,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 376.59959375,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.8197875000000003,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.767765625,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 19.466153125,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 106.57482812500001,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 863.4466100000002,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Parmesan grissini",
        "image": "https://media.wincacademy.nl/react/images/final-project/parmesan-grissini.jpeg",
        "url": "https://www.goodfood.com.au/recipes/parmesan-grissini-20121001-33zi8",
        "yield": 6,
        "dietLabels": [
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Low Potassium",
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon (3 g) instant dried yeast",
          "a pinch of caster (superfine) sugar",
          "1 tablespoon extra virgin olive oil",
          "250 g (9 oz/2 cups) white strong flour",
          "60 g (2\xBC oz/\u2154 cup) grated parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon (3 g) instant dried yeast",
            "quantity": 3,
            "measure": "gram",
            "food": "yeast",
            "weight": 3,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "a pinch of caster (superfine) sugar",
            "quantity": 1,
            "measure": "pinch",
            "food": "sugar",
            "weight": 0.2604166669968817,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 tablespoon extra virgin olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "extra virgin olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "250 g (9 oz/2 cups) white strong flour",
            "quantity": 250,
            "measure": "gram",
            "food": "flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "60 g (2\xBC oz/\u2154 cup) grated parmesan cheese",
            "quantity": 60,
            "measure": "gram",
            "food": "parmesan cheese",
            "weight": 60,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 1275.297812501278,
        "totalWeight": 326.7604166669969,
        "totalTime": 90,
        "cuisineType": [
          "french"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "biscuits and cookies"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1275.297812501278,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 31.676299999999998,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.12761,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 14.705504999999999,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 2.7950150000000002,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 194.2039645836635,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 186.64696458366348,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 7.557,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 1.414895833662888,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0.25989583366288793,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 48.48819999999999,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 40.8,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 832.40260416667,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 748.93760416667,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 83.02,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 351.4902083333399,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 3.557830208333498,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 3.6382260416667,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 705.51,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 124.19999999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.009,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6530999999999999,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.4192494791667294,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 4.4936,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.20959999999999995,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 139.39999999999998,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 139.39999999999998,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.7221,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.3,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.21925,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 9.909,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 47.4484520833334,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Easy Chili Almonds recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/easy-chili-almonds.jpeg",
        "url": "http://www.pumpkinnspice.com/2017/02/05/easy-chili-almonds/",
        "yield": 2,
        "dietLabels": [
          "High-Fiber",
          "Low-Carb"
        ],
        "healthLabels": [
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Paleo",
          "Mediterranean",
          "DASH",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 cups California Almonds",
          "1 tablespoon olive oil",
          "1 1/2 teaspoons chili powder",
          "1 tablespoon kosher salt",
          "2 tablespoons fresh cilantro, chopped"
        ],
        "ingredients": [
          {
            "text": "2 cups California Almonds",
            "quantity": 2,
            "measure": "cup",
            "food": "Almonds",
            "weight": 286,
            "foodCategory": "plant-based protein",
            "foodId": "food_bq4d2wras281i0br37nrnaglo3yc",
            "image": "https://www.edamam.com/food-img/6c2/6c2dc21adf11afc4c8d390ee2f651e56.jpg"
          },
          {
            "text": "1 tablespoon olive oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons chili powder",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 4.050000000000001,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "1 tablespoon kosher salt",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "kosher salt",
            "weight": 14.562499999753793,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a1vgrj1bs8rd1majvmd9ubz8ttkg",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "2 tablespoons fresh cilantro, chopped",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "cilantro",
            "weight": 1.999999999966186,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          }
        ],
        "calories": 1787.160999999992,
        "totalWeight": 307.0732646524249,
        "totalTime": 10,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1787.160999999992,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 156.88853999999984,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 12.837790999999994,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.042899999999999994,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 100.22114049999989,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 37.00658799999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 63.71924999999876,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 26.50384999999971,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 37.21539999999905,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.749594999999704,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 61.07672999999927,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 710.5504139999216,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 784.5455835165673,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 778.7697326465158,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2186.0318611720204,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.427276773352515,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.108873264652289,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1388.7699999999836,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 66.80149999988606,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0.5683499999908702,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.5977649999999773,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.2959899999999447,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 10.839559999999622,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.47960699999994966,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 128.21399999997902,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 128.21399999997902,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 76.83371999999916,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 18.60784999989518,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 14.895221529273739,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Korean Seasoned Potatoes (\uAC10\uC790 \uC870&",
        "image": "https://media.wincacademy.nl/react/images/final-project/korean-potatoes.webp",
        "url": "http://www.food.com/recipe/korean-seasoned-potatoes-44048-51088-51312-390718",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Sugar-Conscious",
          "Vegan",
          "Vegetarian",
          "Pescatarian",
          "Dairy-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 medium potatoes",
          "2 tablespoons soy sauce",
          "2 teaspoons sugar (or sweetener of your choice)",
          "1 teaspoon garlic, minced",
          "2 teaspoons sesame seeds",
          "1 -2 teaspoon sesame seed oil",
          "4 tablespoons scallions, minced"
        ],
        "ingredients": [
          {
            "text": "2 medium potatoes",
            "quantity": 2,
            "measure": "<unit>",
            "food": "potatoes",
            "weight": 426,
            "foodCategory": "vegetables",
            "foodId": "food_abiw5baauresjmb6xpap2bg3otzu",
            "image": "https://www.edamam.com/food-img/651/6512e82417bce15c2899630c1a2799df.jpg"
          },
          {
            "text": "2 tablespoons soy sauce",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "soy sauce",
            "weight": 32,
            "foodCategory": "plant-based protein",
            "foodId": "food_a5g9yevb1iactoaiimbvjbkrxueh",
            "image": "https://www.edamam.com/food-img/f56/f562e461eb0618f367f538b836c17b82.jpg"
          },
          {
            "text": "2 teaspoons sugar (or sweetener of your choice)",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sugar",
            "weight": 8.4,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1 teaspoon garlic, minced",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "garlic",
            "weight": 2.8,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "2 teaspoons sesame seeds",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "sesame seeds",
            "weight": 6.000000000304327,
            "foodCategory": "plant-based protein",
            "foodId": "food_bvxfnx8bwz2q3abs04kd6bbuf9w8",
            "image": "https://www.edamam.com/food-img/291/291b355a7a0948716243164427697279.jpg"
          },
          {
            "text": "1 -2 teaspoon sesame seed oil",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "oil",
            "weight": 6.75,
            "foodCategory": "Oils",
            "foodId": "food_bk9p9aaavhvoq4bqsnprobpsiuxs",
            "image": "https://www.edamam.com/food-img/07e/07e106ab3536d57428e5c46d009038f8.jpg"
          },
          {
            "text": "4 tablespoons scallions, minced",
            "quantity": 4,
            "measure": "tablespoon",
            "food": "scallions",
            "weight": 24,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          }
        ],
        "calories": 483.3900000017438,
        "totalWeight": 505.9500000003043,
        "totalTime": 20,
        "cuisineType": [
          "south east asian",
          "korean"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 483.3900000017438,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 10.35560000015116,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 1.058849500021172,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.026662500000000002,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 5.440138000057089,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.498037000066261,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 88.49240000007136,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 77.47360000003545,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.018800000035911,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 12.439200000000914,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 8.3832,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 12.891080000053957,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 0,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 1788.3800000000335,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 142.6120000029672,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 148.2200000010682,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2038.376000001424,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 5.06680000004428,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 2.105720000023585,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 346.8440000019142,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 12,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 89.3076,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.41762000000240723,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.22781600000075167,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 5.60926000001374,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.4006800000024042,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 93.9040000002952,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 93.9040000002952,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 1.3703900000007612,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 62.63435,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 384.2389200000143,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Oven Baked Mexican Rice recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/mexican-rice.webp",
        "url": "http://keciasflavorbreakthrough.com/oven-baked-mexican-rice/",
        "yield": 4,
        "dietLabels": [],
        "healthLabels": [
          "Pescatarian",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "No oil added",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 cup whole grain rice",
          "2 cup chicken or vegetable broth",
          "1 cup tomato sauce",
          "6 scallions chopped, divided",
          "1 jalapeno pepper, seeds, veins removed and diced",
          "\xBD bell pepper diced",
          "1 clove garlic minced",
          "\xBD cup frozen sweet corn kernels, thawed",
          "1 tsp cilantro",
          "2 tsp cumin",
          "1 tsp chili powder",
          "2 tsp salt",
          "1/2 cup shredded cheddar or Mexican blend cheese"
        ],
        "ingredients": [
          {
            "text": "1 cup whole grain rice",
            "quantity": 1,
            "measure": "cup",
            "food": "whole grain rice",
            "weight": 190,
            "foodCategory": "grains",
            "foodId": "food_aro09r9avsklizbsberuoaegj0uh",
            "image": "https://www.edamam.com/food-img/c45/c453c255234a6f7f798d3f2aaa74bbcd.jpg"
          },
          {
            "text": "2 cup chicken or vegetable broth",
            "quantity": 2,
            "measure": "cup",
            "food": "vegetable broth",
            "weight": 454,
            "foodCategory": "Vegan products",
            "foodId": "food_bb2qjrjamst0vmam39stubtkmrs4",
            "image": "https://www.edamam.com/food-img/e61/e6184a8681b772e5198ef0ca1919e1b7.jpg"
          },
          {
            "text": "1 cup tomato sauce",
            "quantity": 1,
            "measure": "cup",
            "food": "tomato sauce",
            "weight": 245,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 scallions chopped, divided",
            "quantity": 6,
            "measure": "<unit>",
            "food": "scallions",
            "weight": 90,
            "foodCategory": "vegetables",
            "foodId": "food_bknlkyzbuzo27pb11whr4bttkuy6",
            "image": "https://www.edamam.com/food-img/b89/b89986ed6aa466285bdd99bac34b3c46.jpg"
          },
          {
            "text": "1 jalapeno pepper, seeds, veins removed and diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "jalapeno pepper",
            "weight": 14,
            "foodCategory": "vegetables",
            "foodId": "food_b7txsnbadj6plsbq27zvwah80r6y",
            "image": "https://www.edamam.com/food-img/0df/0df9aa459870a6d477b0925c1fdb6d4c.jpg"
          },
          {
            "text": "\xBD bell pepper diced",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "bell pepper",
            "weight": 59.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1 clove garlic minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "\xBD cup frozen sweet corn kernels, thawed",
            "quantity": 0.5,
            "measure": "cup",
            "food": "corn kernels",
            "weight": 70.5,
            "foodCategory": "vegetables",
            "foodId": "food_bljsxw8akb9zr5aj5dahpay2gxsb",
            "image": "https://www.edamam.com/food-img/34c/34c09c7af85efb3a2025167cc38af8d1.jpg"
          },
          {
            "text": "1 tsp cilantro",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "cilantro",
            "weight": 0.33333333335024,
            "foodCategory": "vegetables",
            "foodId": "food_alhzhuwb4lc7jnb5s6f02by60bzp",
            "image": "https://www.edamam.com/food-img/d57/d57e375b6ff99a90c7ee2b1990a1af36.jpg"
          },
          {
            "text": "2 tsp cumin",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "cumin",
            "weight": 4.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8jjbx4biqndasapojdb5by3e92e",
            "image": "https://www.edamam.com/food-img/07e/07e2a4eb77ce46591033846504817d35.jpg"
          },
          {
            "text": "1 tsp chili powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "chili powder",
            "weight": 2.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aii2sclb4r123rbfr2ybjasrl3nc",
            "image": "https://www.edamam.com/food-img/e6f/e6f19043caefc23b5feda5520076617e.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 cup shredded cheddar or Mexican blend cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mexican blend cheese",
            "weight": 56,
            "foodCategory": "Cheese",
            "foodId": "food_ari4tsrahqllsdap5f2rkb5g60ng",
            "image": "https://www.edamam.com/food-img/8ee/8ee24c655103a961f2c48054b672a9db.jpg"
          }
        ],
        "calories": 1123.0241452052305,
        "totalWeight": 1192.4077378998313,
        "totalTime": 50,
        "cuisineType": [
          "mexican"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1123.0241452052305,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 24.70364773767342,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 10.97607104170667,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 7.384159168186714,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 3.43750068367334,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 192.94110791691398,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 175.34687236822018,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 17.594235548693803,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 17.516731647060148,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 36.73504390126037,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 53.2,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2765.5383320000396,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 612.3098797637601,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 393.489078675556,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2051.7486483513735,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.424348741549686,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 7.386391343193232,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 969.6826463092882,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 365.3858809112703,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 129.28132405812454,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 1.0456329733333447,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 0.6373697849600275,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 13.972286409053524,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.7363836725666917,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 160.10624152709713,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 186.89624152709712,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 0.6890773940000001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 0.28166164000000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 6.9083901328137545,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 211.47728196646577,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 922.7590471832152,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Swedish Pancakes",
        "image": "https://media.wincacademy.nl/react/images/final-project/swedish-pancakes.webp",
        "url": "http://scratchthiswithsandy.com/2014/01/19/swedish-pancakes/",
        "yield": 6,
        "dietLabels": [
          "Balanced",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Kidney-Friendly",
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [],
        "ingredientLines": [
          "* 4 egg",
          "* 2 cup milk",
          "* 3/4 cup flour",
          "* 1 tbl sugar",
          "* pinch of salt",
          "* 2 tbl melted butter"
        ],
        "ingredients": [
          {
            "text": "* 4 egg",
            "quantity": 4,
            "measure": "<unit>",
            "food": "egg",
            "weight": 172,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "* 2 cup milk",
            "quantity": 2,
            "measure": "cup",
            "food": "milk",
            "weight": 488,
            "foodCategory": "Milk",
            "foodId": "food_b49rs1kaw0jktabzkg2vvanvvsis",
            "image": "https://www.edamam.com/food-img/7c9/7c9962acf83654a8d98ea6a2ade93735.jpg"
          },
          {
            "text": "* 3/4 cup flour",
            "quantity": 0.75,
            "measure": "cup",
            "food": "flour",
            "weight": 93.75,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "* 1 tbl sugar",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "sugar",
            "weight": 12.4999999997887,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "* pinch of salt",
            "quantity": 1,
            "measure": "pinch",
            "food": "salt",
            "weight": 0.380208333815447,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "* 2 tbl melted butter",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "butter",
            "weight": 28.4,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          }
        ],
        "calories": 1136.8929999991822,
        "totalWeight": 795.030208333604,
        "totalTime": 0,
        "cuisineType": [
          "nordic"
        ],
        "mealType": [
          "breakfast"
        ],
        "dishType": [
          "pancake"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1136.8929999991822,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 56.171189999999996,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 29.211744500000002,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.9963119999999999,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 16.3058465,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 5.489919499999999,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 108.71756499978872,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 106.18631499978872,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 2.53125,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 38.02556499978912,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 12.474999999789123,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 46.900975,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 749.6999999999999,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 606.5651460201889,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 668.8547500001135,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 90.63680208333815,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 988.9289166667011,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 4.266459687501484,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 4.707840208333794,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 858.546,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 693.9359999999999,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 0,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.40719999999999995,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.66029099999996,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 1.747123,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.5101819999999999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 130.467,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 130.467,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 3.77508,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 10.21,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 2.86273,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 4.24925,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 577.3256204166676,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Pizza with taleggio, prosciutto and pear",
        "image": "https://media.wincacademy.nl/react/images/final-project/pizza-pear.jpeg",
        "url": "https://www.goodfood.com.au/recipes/pizza-with-taleggio-prosciutto-and-pear-20111018-29wks",
        "yield": 12,
        "dietLabels": [
          "Balanced"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "500g flour",
          "1 tbsp instant yeast",
          "1 tsp salt",
          "300ml warm water",
          "2 tbsp olive oil",
          "For the topping",
          "1-2 tbsp olive oil",
          "300g taleggio",
          "8 slices prosciutto",
          "2 pears, finely sliced",
          "handful fresh rocket"
        ],
        "ingredients": [
          {
            "text": "500g flour",
            "quantity": 500,
            "measure": "gram",
            "food": "flour",
            "weight": 500,
            "foodCategory": "grains",
            "foodId": "food_ahebfs0a985an4aubqaebbipra58",
            "image": "https://www.edamam.com/food-img/b4c/b4c739e76a6f2172b7ad49d0aa41d5aa.jpg"
          },
          {
            "text": "1 tbsp instant yeast",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "yeast",
            "weight": 12,
            "foodCategory": "condiments and sauces",
            "foodId": "food_a2xisx4br72i19btvvxgzayoelqj",
            "image": "https://www.edamam.com/food-img/433/433749733fd8a22560cdb451b1317be1.jpg"
          },
          {
            "text": "1 tsp salt",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 6,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "300ml warm water",
            "quantity": 300,
            "measure": "milliliter",
            "food": "water",
            "weight": 300,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 tbsp olive oil",
            "quantity": 2,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 27,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1-2 tbsp olive oil",
            "quantity": 1.5,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 20.25,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "300g taleggio",
            "quantity": 300,
            "measure": "gram",
            "food": "taleggio",
            "weight": 300,
            "foodCategory": "Cheese",
            "foodId": "food_b6s9dpea421339bjgiudnaoxh7nl",
            "image": "https://www.edamam.com/food-img/419/419fc950e8f2a589a11d63efb28b8bef.jpg"
          },
          {
            "text": "8 slices prosciutto",
            "quantity": 8,
            "measure": "slice",
            "food": "prosciutto",
            "weight": 120,
            "foodCategory": "cured meats",
            "foodId": "food_au1dzjfa990c8yap79k4nawq65y9",
            "image": "https://www.edamam.com/food-img/802/8029e7b80cce92694182b85a1ebd1822.jpg"
          },
          {
            "text": "2 pears, finely sliced",
            "quantity": 2,
            "measure": "<unit>",
            "food": "pears",
            "weight": 372.8888888888889,
            "foodCategory": "fruit",
            "foodId": "food_bq6stkiaxkwhxia9q4v7wanjnew0",
            "image": "https://www.edamam.com/food-img/65a/65aec51d264db28bbe27117c9fdaaca7.jpg"
          },
          {
            "text": "handful fresh rocket",
            "quantity": 1,
            "measure": "handful",
            "food": "rocket",
            "weight": 2.5,
            "foodCategory": "vegetables",
            "foodId": "food_a8z1kzrawhksuzav2g1irb6zf4zc",
            "image": "https://www.edamam.com/food-img/fa7/fa761a311efc0ec361a5eba4ed71870e.jpeg"
          }
        ],
        "calories": 3623.8616666666667,
        "totalWeight": 1654.638888888889,
        "totalTime": 120,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 3623.8616666666667,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 136.36574444444446,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 56.61658555555556,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 61.39480416666666,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 10.733648055555555,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 445.1186277777778,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 416.7910722222223,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 28.327555555555556,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 39.137916666666676,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 150.66970000000003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 300,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5793.4688888888895,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1301.6325,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 236.75722222222225,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 2264.848611111111,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 9.404700000000002,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 15.379438888888888,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2085.086666666667,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 729.7038888888889,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 16.445222222222224,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.729046666666667,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.533501111111111,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 18.229176111111112,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.6949627777777776,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 631.3272222222222,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 631.3272222222222,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.9644,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.2800000000000002,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 8.504591666666666,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 55.11461111111112,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 897.795861111111,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Strawberry Cheesecake recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/strawberry-cheesecake.webp",
        "url": "http://allrecipes.com/recipe/222588/strawberry-cheesecake/",
        "yield": 12,
        "dietLabels": [],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Kosher"
        ],
        "cautions": [
          "Gluten",
          "Wheat",
          "Sulfites"
        ],
        "ingredientLines": [
          "1 1/4 cups graham cracker crumbs",
          "1/4 cup white sugar",
          "2 teaspoons ground cinnamon",
          "1/3 cup butter, melted",
          "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
          "1 tablespoon cornstarch",
          "3 (8 ounce) packages cream cheese, softened",
          "1 (14 ounce) can sweetened condensed milk",
          "1/4 cup lemon juice",
          "1/2 teaspoon vanilla extract",
          "3 eggs",
          "1 tablespoon water (optional)"
        ],
        "ingredients": [
          {
            "text": "1 1/4 cups graham cracker crumbs",
            "quantity": 1.25,
            "measure": "cup",
            "food": "cracker crumbs",
            "weight": 65,
            "foodCategory": "crackers",
            "foodId": "food_bngjmfmb13ckgcaefl7gta8r5zx5",
            "image": "https://www.edamam.com/food-img/533/5335c3d911793785012a46379a6ad2d3.jpg"
          },
          {
            "text": "1/4 cup white sugar",
            "quantity": 0.25,
            "measure": "cup",
            "food": "white sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "2 teaspoons ground cinnamon",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "ground cinnamon",
            "weight": 5.2,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_atjxtznauw5zabaixm24xa787onz",
            "image": "https://www.edamam.com/food-img/d4d/d4daa18b92c596a1c99c08537c38e65b.jpg"
          },
          {
            "text": "1/3 cup butter, melted",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "butter",
            "weight": 75.66666666666666,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "2 (10 ounce) packages frozen sweetened sliced strawberries, thawed and drained",
            "quantity": 20,
            "measure": "ounce",
            "food": "strawberries",
            "weight": 566.9904625,
            "foodCategory": "fruit",
            "foodId": "food_b4s2ibkbrrucmbabbaxhfau8ay42",
            "image": "https://www.edamam.com/food-img/00c/00c8851e401bf7975be7f73499b4b573.jpg"
          },
          {
            "text": "1 tablespoon cornstarch",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "cornstarch",
            "weight": 7.999999999864745,
            "foodCategory": null,
            "foodId": "food_bevnfkfbvjm45pbbgj9nsb3ypntm",
            "image": "https://www.edamam.com/food-img/f9b/f9b74d9495b40c0aea955c37a1fc39dc.jpg"
          },
          {
            "text": "3 (8 ounce) packages cream cheese, softened",
            "quantity": 24,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 680.388555,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1 (14 ounce) can sweetened condensed milk",
            "quantity": 14,
            "measure": "ounce",
            "food": "sweetened condensed milk",
            "weight": 396.89332375000004,
            "foodCategory": "Milk",
            "foodId": "food_a89byenbz1jssabxmx7i6aa77jz1",
            "image": "https://www.edamam.com/food-img/bc9/bc97e9aa15ccef74dbad4d6267e30e3f.jpg"
          },
          {
            "text": "1/4 cup lemon juice",
            "quantity": 0.25,
            "measure": "cup",
            "food": "lemon juice",
            "weight": 61,
            "foodCategory": "100% juice",
            "foodId": "food_bglm6vxahuauteb0n6ynfbg9eryu",
            "image": "https://www.edamam.com/food-img/e31/e310952d214e78a4cb8b73f30ceeaaf2.jpg"
          },
          {
            "text": "1/2 teaspoon vanilla extract",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "vanilla extract",
            "weight": 2.1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bh1wvnqaw3q7ciascfoygaabax2a",
            "image": "https://www.edamam.com/food-img/90f/90f910b0bf82750d4f6528263e014cca.jpg"
          },
          {
            "text": "3 eggs",
            "quantity": 3,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 129,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "1 tablespoon water (optional)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "water",
            "weight": 14.786764781,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          }
        ],
        "calories": 5097.185375336985,
        "totalWeight": 2055.0257726975315,
        "totalTime": 645,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "desserts"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 5097.185375336985,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 360.2325051190833,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 199.67873967423336,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 3.2287733333333333,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 93.42800230728746,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 25.31875591992914,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 393.92277982837663,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 378.0717705783778,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 15.851009249998782,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 323.13166435175,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 97.1447459855413,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 1525.9344739083335,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 3659.6764554620613,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 2110.1749002934275,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 274.24919523113937,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 3641.375844637496,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 11.102928053707698,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 10.184514197728019,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2305.5836883874827,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 3514.3330755000006,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 367.5142183675,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.9711577467083332,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.5607334889666666,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 7.099651569875,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 1.0063791067374999,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 427.49071766249995,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 335.1907176625,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 54.599999999999994,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.724035345333334,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 8.5911179775,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 9.544035135416665,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 86.93748487916668,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 1181.137699732458,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Mushroom and Spinach Ravioli",
        "image": "https://media.wincacademy.nl/react/images/final-project/spinach-ravioli.jpeg",
        "url": "http://ourlifetastesgood.blogspot.com/2012/07/mushroom-and-spinach-ravioli-with-chive.html",
        "yield": 2,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Vegetarian",
          "Pescatarian",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 teaspoon olive oil",
          "1 1/2 teaspoons water (or more as needed)",
          "2 eggs",
          "2 cups all-purpose flour (or more as needed)",
          "1/4 teaspoon salt",
          "1 teaspoon olive oil",
          "1 clove garlic, minced",
          "1/2 chopped onion",
          "1 (8 ounce) package fresh mushrooms, chopped",
          "4 ounces cream cheese softened",
          "1/3 cup grated Parmesan Cheese",
          "1/2 cup Mozzarella Cheese",
          "1/2 cup frozen spinach, thawed and drained",
          "1 tablespoon chopped fresh chives",
          "1 tablespoon fresh parsley",
          "1/2 teaspoon ground cayenne pepper",
          "salt",
          "pepper",
          "1 egg white beaten",
          "3 tablespoons unsalted butter",
          "1 1/2 teaspoons chopped fresh chives"
        ],
        "ingredients": [
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 1/2 teaspoons water (or more as needed)",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "water",
            "weight": 7.393382391,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 eggs",
            "quantity": 2,
            "measure": "<unit>",
            "food": "eggs",
            "weight": 86,
            "foodCategory": "Eggs",
            "foodId": "food_bhpradua77pk16aipcvzeayg732r",
            "image": "https://www.edamam.com/food-img/a7e/a7ec7c337cb47c6550b3b118e357f077.jpg"
          },
          {
            "text": "2 cups all-purpose flour (or more as needed)",
            "quantity": 2,
            "measure": "cup",
            "food": "all-purpose flour",
            "weight": 250,
            "foodCategory": "grains",
            "foodId": "food_ar3x97tbq9o9p6b6gzwj0am0c81l",
            "image": "https://www.edamam.com/food-img/368/368077bbcab62f862a8c766a56ea5dd1.jpg"
          },
          {
            "text": "1/4 teaspoon salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 clove garlic, minced",
            "quantity": 1,
            "measure": "clove",
            "food": "garlic",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1/2 chopped onion",
            "quantity": 0.5,
            "measure": "<unit>",
            "food": "onion",
            "weight": 62.5,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1 (8 ounce) package fresh mushrooms, chopped",
            "quantity": 8,
            "measure": "ounce",
            "food": "mushrooms",
            "weight": 226.796185,
            "foodCategory": "vegetables",
            "foodId": "food_bvlose6arfl26ra396sjrb7hetqh",
            "image": "https://www.edamam.com/food-img/d63/d639cf4a2afc7407c1d1ce286028136b.jpg"
          },
          {
            "text": "4 ounces cream cheese softened",
            "quantity": 4,
            "measure": "ounce",
            "food": "cream cheese",
            "weight": 113.3980925,
            "foodCategory": "Cheese",
            "foodId": "food_a7rvc49a09a7yjbq3ekjbbauyoqa",
            "image": "https://www.edamam.com/food-img/ddd/dddce306e7ee41e8e07dc62e28cab94b.jpg"
          },
          {
            "text": "1/3 cup grated Parmesan Cheese",
            "quantity": 0.3333333333333333,
            "measure": "cup",
            "food": "Parmesan Cheese",
            "weight": 49.56875,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          },
          {
            "text": "1/2 cup Mozzarella Cheese",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Mozzarella Cheese",
            "weight": 129.9375,
            "foodCategory": "Cheese",
            "foodId": "food_acjhpy7bkl7a9qboztipaa2i9e4m",
            "image": "https://www.edamam.com/food-img/92d/92d92d4a4dfe8c025cea407c9ce764c3.jpg"
          },
          {
            "text": "1/2 cup frozen spinach, thawed and drained",
            "quantity": 0.5,
            "measure": "cup",
            "food": "spinach",
            "weight": 15,
            "foodCategory": "vegetables",
            "foodId": "food_aoceuc6bshdej1bbsdammbnj6l6o",
            "image": "https://www.edamam.com/food-img/e6e/e6e4be375c4554ce01c8ea75232efaa6.jpg"
          },
          {
            "text": "1 tablespoon chopped fresh chives",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "chives",
            "weight": 3,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          },
          {
            "text": "1 tablespoon fresh parsley",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "parsley",
            "weight": 3.8,
            "foodCategory": "vegetables",
            "foodId": "food_b244pqdazw24zobr5vqu2bf0uid8",
            "image": "https://www.edamam.com/food-img/46a/46a132e96626d7989b4d6ed8c91f4da0.jpg"
          },
          {
            "text": "1/2 teaspoon ground cayenne pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "cayenne pepper",
            "weight": 0.9,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a8iooz3aris8gba605l07brngnrx",
            "image": "https://www.edamam.com/food-img/374/3742b9434a0fb66a45e0dd6d227ba669.jpg"
          },
          {
            "text": "salt",
            "quantity": 0,
            "measure": null,
            "food": "salt",
            "weight": 6.193763459345999,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "pepper",
            "quantity": 0,
            "measure": null,
            "food": "pepper",
            "weight": 3.0968817296729996,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 egg white beaten",
            "quantity": 1,
            "measure": "<unit>",
            "food": "egg white",
            "weight": 26.4,
            "foodCategory": "Eggs",
            "foodId": "food_a7hurbpb20zs42bnwg2p8bca3ihs",
            "image": "https://www.edamam.com/food-img/b30/b304a020501418f9a63cf7f9359bc99d.jpg"
          },
          {
            "text": "3 tablespoons unsalted butter",
            "quantity": 3,
            "measure": "tablespoon",
            "food": "unsalted butter",
            "weight": 42.599999999999994,
            "foodCategory": "Dairy",
            "foodId": "food_awz3iefajbk1fwahq9logahmgltj",
            "image": "https://www.edamam.com/food-img/713/71397239b670d88c04faa8d05035cab4.jpg"
          },
          {
            "text": "1 1/2 teaspoons chopped fresh chives",
            "quantity": 1.5,
            "measure": "teaspoon",
            "food": "chives",
            "weight": 1.5,
            "foodCategory": "vegetables",
            "foodId": "food_btg1uzjak79lawbirsitkaeai60l",
            "image": "https://www.edamam.com/food-img/f3f/f3f48643a924ba174b894e979cb48620.jpg"
          }
        ],
        "calories": 2523.210560191479,
        "totalWeight": 1034.356009510093,
        "totalTime": 75,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2523.210560191479,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 139.10042037038735,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 76.66771694127705,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 1.4291079999999998,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 41.58860721698228,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.370521302387136,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 218.72712386187592,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 206.98745093426865,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 11.739672927607268,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 14.017192025319906,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 101.38330313846303,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 685.5990267500001,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 2404.2923580980423,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1609.214281027642,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 178.172863735545,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 1740.9563865685082,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 16.68506486148633,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 9.56972100746163,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1691.469395282883,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 1318.3283641170117,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 22.894819885000004,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 2.306116973118047,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.3985371664384116,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 23.86636554774516,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 0.8420161031083486,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 888.1944240190444,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 233.19442401904442,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 385,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 2.77916245525,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 4.3905121750000005,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 5.1493016567386,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 167.2074463239747,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 561.1935454974051,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Cajun Pork Pinwheels",
        "image": "https://media.wincacademy.nl/react/images/final-project/cayun-pork-pinwheel.jpeg",
        "url": "https://www.bigoven.com/recipe/cajun-pork-pinwheels/158806",
        "yield": 6,
        "dietLabels": [
          "High-Protein",
          "Low-Carb",
          "Low-Sodium"
        ],
        "healthLabels": [
          "Sugar-Conscious",
          "Keto-Friendly",
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Crustacean-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [],
        "ingredientLines": [
          "2 pork tenderloins ; about 1 pound each",
          "1 tablespoon Vegetable oil",
          "1 cup red bell pepper ; finely chopped",
          "1/2 cup Onion ; finely chopped",
          "1/2 cup celery ; finely chopped",
          "1 teaspoon dried thyme leaves ; crushed",
          "1/4 teaspoon Garlic salt",
          "1/2 teaspoon Ground red pepper",
          "1/2 teaspoon Paprika",
          "1 tablespoon fennel seed ; crushed",
          "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)"
        ],
        "ingredients": [
          {
            "text": "2 pork tenderloins ; about 1 pound each",
            "quantity": 2,
            "measure": "pound",
            "food": "pork tenderloins",
            "weight": 907.18474,
            "foodCategory": "meats",
            "foodId": "food_bgd2x5qbzpcbz0apfim52a8wr97x",
            "image": "https://www.edamam.com/food-img/4df/4dfc18749ffa490e3d4daf9dd2ea4d34.jpg"
          },
          {
            "text": "1 tablespoon Vegetable oil",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "Vegetable oil",
            "weight": 14,
            "foodCategory": "Oils",
            "foodId": "food_bt1mzi2ah2sfg8bv7no1qai83w8s",
            "image": "https://www.edamam.com/food-img/6e5/6e51a63a6300a8ea1b4c4cc68dfaba33.jpg"
          },
          {
            "text": "1 cup red bell pepper ; finely chopped",
            "quantity": 1,
            "measure": "cup",
            "food": "red bell pepper",
            "weight": 149,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 cup Onion ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "Onion",
            "weight": 80,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/2 cup celery ; finely chopped",
            "quantity": 0.5,
            "measure": "cup",
            "food": "celery",
            "weight": 50.5,
            "foodCategory": "vegetables",
            "foodId": "food_bffeoksbyyur8ja4da73ub2xs57g",
            "image": "https://www.edamam.com/food-img/d91/d91d2aed1c36d8fad54c4d7dc58f5a18.jpg"
          },
          {
            "text": "1 teaspoon dried thyme leaves ; crushed",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried thyme",
            "weight": 1,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_avsq22zadwyb5cb5sl1byaa4mbo8",
            "image": "https://www.edamam.com/food-img/89b/89b37a04e46e052671d73addcb84aa51.jpg"
          },
          {
            "text": "1/4 teaspoon Garlic salt",
            "quantity": 0.25,
            "measure": "teaspoon",
            "food": "Garlic salt",
            "weight": 0.775,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_boq94r1a036492bdup9u1beyph0l",
            "image": "https://www.edamam.com/food-img/5c3/5c3db1d5a1a16b1f0a74796f74dd5985.jpg"
          },
          {
            "text": "1/2 teaspoon Ground red pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "red pepper",
            "weight": 1.5520833334120565,
            "foodCategory": "vegetables",
            "foodId": "food_a8g63g7ak6bnmvbu7agxibp4a0dy",
            "image": "https://www.edamam.com/food-img/4dc/4dc48b1a506d334b4ab6671b9d56a18f.jpeg"
          },
          {
            "text": "1/2 teaspoon Paprika",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "Paprika",
            "weight": 1.15,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a9dpcnjb883g67b3lq82ca0421ql",
            "image": "https://www.edamam.com/food-img/474/474d63763b9d8b9da98c5f43a114648c.jpg"
          },
          {
            "text": "1 tablespoon fennel seed ; crushed",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "fennel seed",
            "weight": 5.8,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_a7gzoswb5qrepsa8xcla8bxm5wla",
            "image": "https://www.edamam.com/food-img/a40/a4059150e503052ae5a390af6e666873.jpg"
          },
          {
            "text": "1 teaspoon lemon-pepper seasoning ; (up to 3 teaspoons)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "seasoning",
            "weight": 1.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_aj7w3xab0epj7cbgkbkpwadysovd",
            "image": "https://www.edamam.com/food-img/c23/c23e20823b442067307aa436969358f1.jpg"
          }
        ],
        "calories": 1277.8849994333577,
        "totalWeight": 1212.4618233334124,
        "totalTime": 0,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "main course"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1277.8849994333577,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 46.243549005900235,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.316188002930023,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.41763718108000003,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.405505878150002,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 7.625709285193389,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 23.89075312500475,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 15.242159375003098,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 8.648593750001652,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 10.573730000003305,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 182.1281044945008,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 560.18657695,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 505.07734489333643,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 207.30192601333886,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 294.8478858100095,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 4104.8568726235,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 12.403798837433673,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 17.090634614433537,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 2208.340013956687,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 280.087270833457,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 201.65816041676715,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 8.631749814460042,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 3.1252729659434006,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 59.261679644134105,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 7.2544416604502295,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 108.37170833336955,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 108.37170833336955,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.481492615600001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.585476509,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 7.9135315232679115,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 52.6461020833372,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 905.3225831408392,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Fire Roasted Tomato Soup recipes",
        "image": "https://media.wincacademy.nl/react/images/final-project/tomato-soup.jpeg",
        "url": "http://therecipecritic.com/2013/02/fire-roasted-tomato-soup/",
        "yield": 8,
        "dietLabels": [
          "High-Fiber"
        ],
        "healthLabels": [
          "Mediterranean",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Red-Meat-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Alcohol-Free",
          "Sulfite-Free"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 medium onion, diced",
          "3 cloves garlic, minced",
          "1 T olive oil",
          "8 oz can tomato sauce",
          "6 oz can tomato paste",
          "28 oz can whole tomatoes",
          "2 14 oz cans fire roasted diced tomatoes",
          "2 cups water",
          "2 cups chicken broth",
          "2 tsp salt",
          "1/2 tsp pepper",
          "1 1/2 cups heavy cream",
          "1/4 cup parmesan cheese"
        ],
        "ingredients": [
          {
            "text": "1 medium onion, diced",
            "quantity": 1,
            "measure": "<unit>",
            "food": "onion",
            "weight": 110,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "3 cloves garlic, minced",
            "quantity": 3,
            "measure": "clove",
            "food": "garlic",
            "weight": 9,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 T olive oil",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "olive oil",
            "weight": 4.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "8 oz can tomato sauce",
            "quantity": 8,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 226.796185,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "6 oz can tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "28 oz can whole tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "whole tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 14 oz cans fire roasted diced tomatoes",
            "quantity": 28,
            "measure": "ounce",
            "food": "diced tomatoes",
            "weight": 793.7866475000001,
            "foodCategory": "canned vegetables",
            "foodId": "food_bnmkkwqa9h2p87bz171eoby0bsey",
            "image": "https://www.edamam.com/food-img/d4e/d4e8110d51db4311bc894167a8f77816.jpg"
          },
          {
            "text": "2 cups water",
            "quantity": 2,
            "measure": "cup",
            "food": "water",
            "weight": 474,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "2 cups chicken broth",
            "quantity": 2,
            "measure": "cup",
            "food": "chicken broth",
            "weight": 480,
            "foodCategory": "canned soup",
            "foodId": "food_bptblvzambd16nbhewqmhaw1rnh5",
            "image": "https://www.edamam.com/food-img/26a/26a10c4cb4e07bab54d8a687ef5ac7d8.jpg"
          },
          {
            "text": "2 tsp salt",
            "quantity": 2,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 12,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1/2 tsp pepper",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "pepper",
            "weight": 1.45,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_b6ywzluaaxv02wad7s1r9ag4py89",
            "image": "https://www.edamam.com/food-img/c6e/c6e5c3bd8d3bc15175d9766971a4d1b2.jpg"
          },
          {
            "text": "1 1/2 cups heavy cream",
            "quantity": 1.5,
            "measure": "cup",
            "food": "heavy cream",
            "weight": 357,
            "foodCategory": "Dairy",
            "foodId": "food_bgtkr21b5v16mca246x9ebnaswyo",
            "image": "https://www.edamam.com/food-img/484/4848d71f6a14dd5076083f5e17925420.jpg"
          },
          {
            "text": "1/4 cup parmesan cheese",
            "quantity": 0.25,
            "measure": "cup",
            "food": "parmesan cheese",
            "weight": 37.1765625,
            "foodCategory": "Cheese",
            "foodId": "food_a104ppxa06d3emb272fkcab3cugd",
            "image": "https://www.edamam.com/food-img/f58/f588658627c59d5041e4664119829aa9.jpg"
          }
        ],
        "calories": 2098.9340903750003,
        "totalWeight": 3463.8814151342513,
        "totalTime": 55,
        "cuisineType": [
          "american"
        ],
        "mealType": [
          "lunch/dinner"
        ],
        "dishType": [
          "soup"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 2098.9340903750003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 157.603754438375,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 91.36432640115001,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 47.8967418560875,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 8.816557503037501,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 141.57510001012503,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 98.60943194137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 42.96566806875,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 91.87988720825001,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 0,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 57.249755738250016,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 528.7700625,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 8040.563791133251,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 1367.2937993322207,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 345.2976253638426,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 6453.095646035741,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 18.285999876568027,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 6.353450237759252,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1129.2093990125002,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 2046.1006295250002,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 267.21124150624996,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 9.616240673275,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 2.2471676422875,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 26.833612026075002,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 3.018696610325001,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 230.128036275,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 230.128036275,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 1.0887187500000002,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 2.6848828125,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 24.64674290825,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 85.70992423,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 3072.464483754519,
            "unit": "g"
          }
        }
      }
    },
    {
      "recipe": {
        "label": "Homemade Sweet Spaghetti Sauce",
        "image": "https://media.wincacademy.nl/react/images/final-project/sweet-spaghetti-sauce.jpeg",
        "url": "https://www.recipezazz.com/recipe/homemade-sweet-spaghetti-sauce-4752",
        "yield": 8,
        "dietLabels": [],
        "healthLabels": [
          "Dairy-Free",
          "Gluten-Free",
          "Wheat-Free",
          "Egg-Free",
          "Peanut-Free",
          "Tree-Nut-Free",
          "Soy-Free",
          "Fish-Free",
          "Shellfish-Free",
          "Pork-Free",
          "Crustacean-Free",
          "Celery-Free",
          "Mustard-Free",
          "Sesame-Free",
          "Lupine-Free",
          "Mollusk-Free",
          "Kosher"
        ],
        "cautions": [
          "Sulfites"
        ],
        "ingredientLines": [
          "1 tablespoon olive oil (or coconut oil)",
          "1 to 2 garlic cloves, minced",
          "1 pound ground turkey (or 1 pound lean ground beef, optional)",
          "1 can (32 ounce) tomato sauce (no-salt-added)",
          "8 ounces red wine",
          "24 ounces water (or use all water and no wine)",
          "3 cans (6 ounce) tomato paste",
          "3 to 4 tablespoons instant minced onion",
          "1/4 cup granulated sugar (more less to your taste)",
          "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
          "1 teaspoon dried basil (see note)",
          "1/2 teaspoon dried oregano",
          "1 teaspoon onion powder"
        ],
        "ingredients": [
          {
            "text": "1 tablespoon olive oil (or coconut oil)",
            "quantity": 1,
            "measure": "tablespoon",
            "food": "olive oil",
            "weight": 13.5,
            "foodCategory": "Oils",
            "foodId": "food_b1d1icuad3iktrbqby0hiagafaz7",
            "image": "https://www.edamam.com/food-img/4d6/4d651eaa8a353647746290c7a9b29d84.jpg"
          },
          {
            "text": "1 to 2 garlic cloves, minced",
            "quantity": 1.5,
            "measure": "clove",
            "food": "garlic",
            "weight": 4.5,
            "foodCategory": "vegetables",
            "foodId": "food_avtcmx6bgjv1jvay6s6stan8dnyp",
            "image": "https://www.edamam.com/food-img/6ee/6ee142951f48aaf94f4312409f8d133d.jpg"
          },
          {
            "text": "1 pound ground turkey (or 1 pound lean ground beef, optional)",
            "quantity": 1,
            "measure": "pound",
            "food": "ground turkey",
            "weight": 453.59237,
            "foodCategory": "Poultry",
            "foodId": "food_av7gav4bs6txmfb85t0ruapws8if",
            "image": "https://www.edamam.com/food-img/c1a/c1a1663042ef7f4d6d50f1f6418aaac6.jpg"
          },
          {
            "text": "1 can (32 ounce) tomato sauce (no-salt-added)",
            "quantity": 32,
            "measure": "ounce",
            "food": "tomato sauce",
            "weight": 907.18474,
            "foodCategory": "canned vegetables",
            "foodId": "food_altklniaqmdz3eb1rlf1ybjv8ihn",
            "image": null
          },
          {
            "text": "8 ounces red wine",
            "quantity": 8,
            "measure": "ounce",
            "food": "red wine",
            "weight": 226.796185,
            "foodCategory": "wines",
            "foodId": "food_b5q0xv2ba8la5hbzdfzdgaca3fwu",
            "image": "https://www.edamam.com/food-img/82b/82b8d0db2d5c38fc7498a657c0afc4ee.JPG"
          },
          {
            "text": "24 ounces water (or use all water and no wine)",
            "quantity": 24,
            "measure": "ounce",
            "food": "water",
            "weight": 680.388555,
            "foodCategory": "water",
            "foodId": "food_a99vzubbk1ayrsad318rvbzr3dh0",
            "image": "https://www.edamam.com/food-img/5dd/5dd9d1361847b2ca53c4b19a8f92627e.jpg"
          },
          {
            "text": "3 cans (6 ounce) tomato paste",
            "quantity": 6,
            "measure": "ounce",
            "food": "tomato paste",
            "weight": 170.09713875,
            "foodCategory": "canned vegetables",
            "foodId": "food_auu2atfal07b6gbd1a5wsawy7u0s",
            "image": "https://www.edamam.com/food-img/aef/aef4e029118da71388e526086506053a.jpg"
          },
          {
            "text": "3 to 4 tablespoons instant minced onion",
            "quantity": 3.5,
            "measure": "tablespoon",
            "food": "onion",
            "weight": 35,
            "foodCategory": "vegetables",
            "foodId": "food_bmrvi4ob4binw9a5m7l07amlfcoy",
            "image": "https://www.edamam.com/food-img/205/205e6bf2399b85d34741892ef91cc603.jpg"
          },
          {
            "text": "1/4 cup granulated sugar (more less to your taste)",
            "quantity": 0.25,
            "measure": "cup",
            "food": "granulated sugar",
            "weight": 50,
            "foodCategory": "sugars",
            "foodId": "food_axi2ijobrk819yb0adceobnhm1c2",
            "image": "https://www.edamam.com/food-img/ecb/ecb3f5aaed96d0188c21b8369be07765.jpg"
          },
          {
            "text": "1/2 to 1 teaspoon salt (or 1/2 - 1 teaspoon salt substitute)",
            "quantity": 0.75,
            "measure": "teaspoon",
            "food": "salt",
            "weight": 4.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_btxz81db72hwbra2pncvebzzzum9",
            "image": "https://www.edamam.com/food-img/694/6943ea510918c6025795e8dc6e6eaaeb.jpg"
          },
          {
            "text": "1 teaspoon dried basil (see note)",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "dried basil",
            "weight": 0.7,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_abrithza96sev8ae5za0paqf42o0",
            "image": "https://www.edamam.com/food-img/49a/49a878702f9b654e1a965f2f2618a341.jpg"
          },
          {
            "text": "1/2 teaspoon dried oregano",
            "quantity": 0.5,
            "measure": "teaspoon",
            "food": "dried oregano",
            "weight": 0.5,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bkkw6v3bdf0sqiazmzyuiax7i8jr",
            "image": "https://www.edamam.com/food-img/1b0/1b0eaffb1c261606e0d82fed8e9747a7.jpg"
          },
          {
            "text": "1 teaspoon onion powder",
            "quantity": 1,
            "measure": "teaspoon",
            "food": "onion powder",
            "weight": 2.4,
            "foodCategory": "Condiments and sauces",
            "foodId": "food_bmv8z27b1o25vcbu41ooyawd2zj4",
            "image": "https://www.edamam.com/food-img/1e7/1e73e6f5dd96bb233abc0fcc05fb0ec8.jpg"
          }
        ],
        "calories": 1565.9824562250003,
        "totalWeight": 2544.6589887499995,
        "totalTime": 0,
        "cuisineType": [
          "italian"
        ],
        "mealType": [
          "snack",
          "lunch/dinner"
        ],
        "dishType": [
          "condiments and sauces"
        ],
        "totalNutrients": {
          "ENERC_KCAL": {
            "label": "Energy",
            "quantity": 1565.9824562250003,
            "unit": "kcal"
          },
          "FAT": {
            "label": "Fat",
            "quantity": 51.898536314125,
            "unit": "g"
          },
          "FASAT": {
            "label": "Saturated",
            "quantity": 11.633647450949999,
            "unit": "g"
          },
          "FATRN": {
            "label": "Trans",
            "quantity": 0.4672001411,
            "unit": "g"
          },
          "FAMS": {
            "label": "Monounsaturated",
            "quantity": 22.346231165462502,
            "unit": "g"
          },
          "FAPU": {
            "label": "Polyunsaturated",
            "quantity": 12.825390744512502,
            "unit": "g"
          },
          "CHOCDF": {
            "label": "Carbs",
            "quantity": 143.58068906012502,
            "unit": "g"
          },
          "CHOCDF.net": {
            "label": "Carbohydrates (net)",
            "quantity": 121.46823527137502,
            "unit": "g"
          },
          "FIBTG": {
            "label": "Fiber",
            "quantity": 22.112453788749995,
            "unit": "g"
          },
          "SUGAR": {
            "label": "Sugars",
            "quantity": 106.04028459075,
            "unit": "g"
          },
          "SUGAR.added": {
            "label": "Sugars, added",
            "quantity": 49.9,
            "unit": "g"
          },
          "PROCNT": {
            "label": "Protein",
            "quantity": 108.69633054550003,
            "unit": "g"
          },
          "CHOLE": {
            "label": "Cholesterol",
            "quantity": 312.97873530000004,
            "unit": "mg"
          },
          "NA": {
            "label": "Sodium",
            "quantity": 5948.538027925,
            "unit": "mg"
          },
          "CA": {
            "label": "Calcium",
            "quantity": 362.68973530000005,
            "unit": "mg"
          },
          "MG": {
            "label": "Magnesium",
            "quantity": 359.52818212500006,
            "unit": "mg"
          },
          "K": {
            "label": "Potassium",
            "quantity": 5900.798736575001,
            "unit": "mg"
          },
          "FE": {
            "label": "Iron",
            "quantity": 20.922087522749997,
            "unit": "mg"
          },
          "ZN": {
            "label": "Zinc",
            "quantity": 14.389442611625002,
            "unit": "mg"
          },
          "P": {
            "label": "Phosphorus",
            "quantity": 1372.8893675125003,
            "unit": "mg"
          },
          "VITA_RAE": {
            "label": "Vitamin A",
            "quantity": 420.25694225000007,
            "unit": "\xB5g"
          },
          "VITC": {
            "label": "Vitamin C",
            "quantity": 105.32690518625,
            "unit": "mg"
          },
          "THIA": {
            "label": "Thiamin (B1)",
            "quantity": 0.6680063943000001,
            "unit": "mg"
          },
          "RIBF": {
            "label": "Riboflavin (B2)",
            "quantity": 1.6646896178375001,
            "unit": "mg"
          },
          "NIA": {
            "label": "Niacin (B3)",
            "quantity": 45.40809048785001,
            "unit": "mg"
          },
          "VITB6A": {
            "label": "Vitamin B6",
            "quantity": 4.07339265715,
            "unit": "mg"
          },
          "FOLDFE": {
            "label": "Folate equivalent (total)",
            "quantity": 147.753711,
            "unit": "\xB5g"
          },
          "FOLFD": {
            "label": "Folate (food)",
            "quantity": 147.753711,
            "unit": "\xB5g"
          },
          "FOLAC": {
            "label": "Folic acid",
            "quantity": 0,
            "unit": "\xB5g"
          },
          "VITB12": {
            "label": "Vitamin B12",
            "quantity": 4.535923700000001,
            "unit": "\xB5g"
          },
          "VITD": {
            "label": "Vitamin D",
            "quantity": 1.8143694800000003,
            "unit": "\xB5g"
          },
          "TOCPHA": {
            "label": "Vitamin E",
            "quantity": 22.906400355250003,
            "unit": "mg"
          },
          "VITK1": {
            "label": "Vitamin K",
            "quantity": 69.2513312775,
            "unit": "\xB5g"
          },
          "Sugar.alcohol": {
            "label": "Sugar alcohol",
            "quantity": 0,
            "unit": "g"
          },
          "WATER": {
            "label": "Water",
            "quantity": 2191.2693134367505,
            "unit": "g"
          }
        }
      }
    }
  ]
}`),bI=()=>{const[e,t]=w.exports.useState(null),[n,r]=w.exports.useState([]);return F("div",{style:{padding:"20px"},children:e?F(gI,{recipe:e,setRecipe:t}):F(hI,{recipes:yI.hits,onSelectRecipe:t,selectedHealthLabels:n,setSelectedHealthLabels:r})})},vI=document.getElementById("root"),wI=pb(vI);wI.render(F(R.StrictMode,{children:F(mI,{children:F(bI,{})})}));
