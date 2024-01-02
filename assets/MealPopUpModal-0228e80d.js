import{s as l,r as Ee,at as Ge,R as Je,au as Qe,b as G,u as Xe,j as v,x as Ze,d as et,F as tt,av as ot,n as ye,aw as nt}from"./index-9b7a50c1.js";var ke={exports:{}},rt="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED",at=rt,it=at;function Pe(){}function Me(){}Me.resetWarningCache=Pe;var lt=function(){function t(a,i,h,b,r,y){if(y!==it){var f=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw f.name="Invariant Violation",f}}t.isRequired=t;function e(){return t}var n={array:t,bigint:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:Me,resetWarningCache:Pe};return n.PropTypes=n,n};ke.exports=lt();var Re=ke.exports;const Wo=t=>t.dailyStatisticsFood.consumedFood.breakfast,jo=t=>t.dailyStatisticsFood.consumedFood.lunch,Ho=t=>t.dailyStatisticsFood.consumedFood.dinner,Bo=t=>t.dailyStatisticsFood.consumedFood.snack,$o=t=>t.dailyStatisticsFood.isOpen,zo=t=>t.dailyStatisticsFood.consumedFood.totalCalories,qo=t=>t.dailyStatisticsFood.consumedFood.totalCarbs,Ko=t=>t.dailyStatisticsFood.consumedFood.totalProtein,Vo=t=>t.dailyStatisticsFood.consumedFood.totalFat,Yo=l.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  justify-content: space-between;

  @media screen and (min-width: 834px) {
    flex-direction: row;
  }
`,st=l.div`
  display: flex;
  gap: 12px;
`,ct=l.h3`
  font-size: 18px;
  font-weight: 400;
  line-height: 1.44;

  @media screen and (min-width: 834px) {
    font-size: 22px;
    line-height: 1.45;
  }
`,pt=l.img`
  width: 32px;
  height: 32px;
`,Go=l.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 12px;

  @media screen and (min-width: 834px) {
    width: 100%;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    margin-right: 74px;
    gap: 30px;
  }

  @media screen and (min-width: 1440px) {
    display: flex;
    align-items: center;
    margin-right: 40px;
  }
`,Jo=l.p`
  width: 100%;
  @media screen and (min-width: 834px) {
    margin-top: 0px;
    width: 154px;
  }
`,Qo=l.p`
  @media screen and (min-width: 834px) {
    width: 92px;
    margin-top: 0px;
  }
`,Xo=l.span`
  color: var(--primary-color-grey);
  font-weight: 500;
  line-height: 1.42;
  margin-left: 4px;
`,Zo=l.div`
  margin-top: 12px;
  overflow-y: scroll;

  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 16px 12px;
  height: 232px;
  background-color: var(--primary-color-black-two);
  border-radius: 13px;
  width: 300px;
  position: relative;

  @media screen and (min-width: 834px) {
    width: 780px;
    height: 240px;
    padding: 32px 14px;
    gap: 32px;
    margin-top: 6px;
  }

  @media screen and (min-width: 1440px) {
    width: 676px;
    height: 240px;
  }

  &::-webkit-scrollbar {
    width: 6px;
    height: 20px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background: rgba(0, 0, 0, 0.1);
  }

  &::-webkit-scrollbar-thumb:hover {
    background: var(--secondary-color-grey-one);
  }
  &::-webkit-scrollbar-thumb:active {
    background: var(--secondary-color-grey-one);
  }
`,en=l.span`
  color: var(--primary-color-grey);
  font-weight: 400;
  line-height: 1.42;
  margin-right: 6px;

  @media screen and (min-width: 834px) {
    display: none;
  }
`,tn=l.div`
  display: flex;
  gap: 20px;
`,on=l.span`
  color: var(--primary-color-white);
  text-align: center;
  font-weight: 600;
  line-height: 1.42;
  margin-right: 16px;
`,nn=l.div`
  max-width: 780px;

  @media screen and (min-width: 834px) {
  }
  @media screen and (min-width: 1440px) {
    max-width: 676px;
  }
`,rn=l.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  column-gap: 12px;

  @media screen and (min-width: 834px) {
    flex-direction: row;
  }
`,an=l.p`
  color: var(--primary-color-white);
  line-height: 1.42;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
`,ln=l.p`
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.5;

  @media screen and (min-width: 834px) {
    font-size: 14px;
  }
`,sn=l.ul`
  display: flex;
  flex-direction: row;
  gap: 12px;
  margin-left: 24px;

  @media screen and (min-width: 834px) {
    position: absolute;
    right: 60px;
    gap: 32px;
    margin: 0;
  }

  @media screen and (min-width: 1440px) {
    right: 34px;
  }
`,cn=l.li`
  color: var(--primary-color-white);
  line-height: 1.42;
  max-height: 25px;
  width: 70px;

  @media screen and (min-width: 834px) {
    display: flex;
    justify-content: flex-start;
    width: 80px;
    position: relative;
  }
`,pn=l.button`
  display: flex;
  gap: 6px;
  height: 20px;
  position: absolute;
  top: 0;
  right: 0;
  background-color: transparent;
  border: none;
  padding: 0;
`,dn=l.svg`
  width: 16px;
  height: 16px;
   &:hover {
    stroke: var(--primary-color-green-lite);
  }
`,un=l.svg`
  width: 16px;
  height: 16px;
`,fn=l.button`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: center;
  max-height: 20px;
  background-color: transparent;
  border: none;
  flex-shrink: 0;
  padding: 0;
`,hn=l.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  margin-right: 6px;
  fill: var(--primary-color-green-lite);
`,mn=l.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  transition: opacity 500ms;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`,vn=l.div`
  position: relative;
  padding: 10px;
  width: 300px;
  height: 546px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    width: 676px;
    height: 280px;
    padding: 24px;
  }
`,dt=l.h2`
  color: var(--primary-color-white);
  font-family: 'Poppins500';
  font-size: 24px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.25;
`,yn=l.input`
  min-width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }

  @media screen and (min-width: 834px) {
    min-width: 255px;
  }
`,gn=l.input`
  min-width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    min-width: 100px;
  }
`,xn=l.input`
  min-width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    min-width: 86px;
  }
`,bn=l.input`
  min-width: 120px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    min-width: 61px;
  }
`,wn=l.input`
  min-width: 120px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    min-width: 78px;
  }
`;l.input`
  min-width: 276px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    min-width: 255px;
  }
`;const On=l.div`
  min-width: 660px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    gap: 12px;
  }
`,Cn=l.div`
  min-width: 276px;
  display: flex;
  align-items: center;
  gap: 8px;

  @media screen and (min-width: 834px) {
    gap: 12px;
  }
`;l.input`
  display: flex;
  min-width: 120px;
  padding: 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }
`;const ut=l.div`
  margin-top: 60px;
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  @media screen and (min-width: 834px) {
    flex-direction: row-reverse;
    position: absolute;
    right: 24px;
    bottom: 24px;
    gap: 86px;
  }
`,ft=l.button`
  display: block;
  width: 256px;
  padding: 8px 10px;
  border-radius: 12px;
  background: var(--primary-color-green-lite);
  color: var(--primary-color-black-two);
  text-align: center;
  font-family: 'Poppins500';
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.42;
  margin-left: auto;
  margin-right: auto;
  border: none;

  &:hover {
    background-color: var(--secondary-color-yellow);
  }
`,_n=l.p`
  color: var(--primary-color-green-lite);
  font-weight: 500;
  line-height: 1.42;
`,Sn=l.button`
  text-align: center;
  background-color: transparent;
  color: var(--primary-color-grey);
  border: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`;var ce={exports:{}},U={},pe={exports:{}},R={},de={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=x;/*!
 * Adapted from jQuery UI core
 *
 * http://jqueryui.com
 *
 * Copyright 2014 jQuery Foundation and other contributors
 * Released under the MIT license.
 * http://jquery.org/license
 *
 * http://api.jqueryui.com/category/ui-core/
 */var n="none",a="contents",i=/input|select|textarea|button|object|iframe/;function h(s,m){return m.getPropertyValue("overflow")!=="visible"||s.scrollWidth<=0&&s.scrollHeight<=0}function b(s){var m=s.offsetWidth<=0&&s.offsetHeight<=0;if(m&&!s.innerHTML)return!0;try{var g=window.getComputedStyle(s),S=g.getPropertyValue("display");return m?S!==a&&h(s,g):S===n}catch{return console.warn("Failed to inspect element style"),!1}}function r(s){for(var m=s,g=s.getRootNode&&s.getRootNode();m&&m!==document.body;){if(g&&m===g&&(m=g.host.parentNode),b(m))return!1;m=m.parentNode}return!0}function y(s,m){var g=s.nodeName.toLowerCase(),S=i.test(g)&&!s.disabled||g==="a"&&s.href||m;return S&&r(s)}function f(s){var m=s.getAttribute("tabindex");m===null&&(m=void 0);var g=isNaN(m);return(g||m>=0)&&y(s,!g)}function x(s){var m=[].slice.call(s.querySelectorAll("*"),0).reduce(function(g,S){return g.concat(S.shadowRoot?x(S.shadowRoot):[S])},[]);return m.filter(f)}t.exports=e.default})(de,de.exports);var Te=de.exports;Object.defineProperty(R,"__esModule",{value:!0});R.resetState=yt;R.log=gt;R.handleBlur=V;R.handleFocus=Y;R.markForFocusLater=xt;R.returnFocus=bt;R.popWithoutFocus=wt;R.setupScopedFocus=Ot;R.teardownScopedFocus=Ct;var ht=Te,mt=vt(ht);function vt(t){return t&&t.__esModule?t:{default:t}}var H=[],j=null,ue=!1;function yt(){H=[]}function gt(){}function V(){ue=!0}function Y(){if(ue){if(ue=!1,!j)return;setTimeout(function(){if(!j.contains(document.activeElement)){var t=(0,mt.default)(j)[0]||j;t.focus()}},0)}}function xt(){H.push(document.activeElement)}function bt(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,e=null;try{H.length!==0&&(e=H.pop(),e.focus({preventScroll:t}));return}catch{console.warn(["You tried to return focus to",e,"but it is not in the DOM anymore"].join(" "))}}function wt(){H.length>0&&H.pop()}function Ot(t){j=t,window.addEventListener?(window.addEventListener("blur",V,!1),document.addEventListener("focus",Y,!0)):(window.attachEvent("onBlur",V),document.attachEvent("onFocus",Y))}function Ct(){j=null,window.addEventListener?(window.removeEventListener("blur",V),document.removeEventListener("focus",Y)):(window.detachEvent("onBlur",V),document.detachEvent("onFocus",Y))}var fe={exports:{}};(function(t,e){Object.defineProperty(e,"__esModule",{value:!0}),e.default=b;var n=Te,a=i(n);function i(r){return r&&r.__esModule?r:{default:r}}function h(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:document;return r.activeElement.shadowRoot?h(r.activeElement.shadowRoot):r.activeElement}function b(r,y){var f=(0,a.default)(r);if(!f.length){y.preventDefault();return}var x=void 0,s=y.shiftKey,m=f[0],g=f[f.length-1],S=h();if(r===S){if(!s)return;x=g}if(g===S&&!s&&(x=m),m===S&&s&&(x=g),x){y.preventDefault(),x.focus();return}var F=/(\bChrome\b|\bSafari\b)\//.exec(navigator.userAgent),z=F!=null&&F[1]!="Chrome"&&/\biPod\b|\biPad\b/g.exec(navigator.userAgent)==null;if(z){var W=f.indexOf(S);if(W>-1&&(W+=s?-1:1),x=f[W],typeof x>"u"){y.preventDefault(),x=s?g:m,x.focus();return}y.preventDefault(),x.focus()}}t.exports=e.default})(fe,fe.exports);var _t=fe.exports,T={},St=function(){},Et=St,M={},Fe={exports:{}};/*!
  Copyright (c) 2015 Jed Watson.
  Based on code that is Copyright 2013-2015, Facebook, Inc.
  All rights reserved.
*/(function(t){(function(){var e=!!(typeof window<"u"&&window.document&&window.document.createElement),n={canUseDOM:e,canUseWorkers:typeof Worker<"u",canUseEventListeners:e&&!!(window.addEventListener||window.attachEvent),canUseViewport:e&&!!window.screen};t.exports?t.exports=n:window.ExecutionEnvironment=n})()})(Fe);var kt=Fe.exports;Object.defineProperty(M,"__esModule",{value:!0});M.canUseDOM=M.SafeNodeList=M.SafeHTMLCollection=void 0;var Pt=kt,Mt=Rt(Pt);function Rt(t){return t&&t.__esModule?t:{default:t}}var ae=Mt.default,Tt=ae.canUseDOM?window.HTMLElement:{};M.SafeHTMLCollection=ae.canUseDOM?window.HTMLCollection:{};M.SafeNodeList=ae.canUseDOM?window.NodeList:{};M.canUseDOM=ae.canUseDOM;M.default=Tt;Object.defineProperty(T,"__esModule",{value:!0});T.resetState=Lt;T.log=It;T.assertNodeList=Ne;T.setElement=Ut;T.validateElement=he;T.hide=Wt;T.show=jt;T.documentNotReadyOrSSRTesting=Ht;var Ft=Et,Nt=Dt(Ft),At=M;function Dt(t){return t&&t.__esModule?t:{default:t}}var k=null;function Lt(){k&&(k.removeAttribute?k.removeAttribute("aria-hidden"):k.length!=null?k.forEach(function(t){return t.removeAttribute("aria-hidden")}):document.querySelectorAll(k).forEach(function(t){return t.removeAttribute("aria-hidden")})),k=null}function It(){}function Ne(t,e){if(!t||!t.length)throw new Error("react-modal: No elements were found for selector "+e+".")}function Ut(t){var e=t;if(typeof e=="string"&&At.canUseDOM){var n=document.querySelectorAll(e);Ne(n,e),e=n}return k=e||k,k}function he(t){var e=t||k;return e?Array.isArray(e)||e instanceof HTMLCollection||e instanceof NodeList?e:[e]:((0,Nt.default)(!1,["react-modal: App element is not defined.","Please use `Modal.setAppElement(el)` or set `appElement={el}`.","This is needed so screen readers don't see main content","when modal is opened. It is not recommended, but you can opt-out","by setting `ariaHideApp={false}`."].join(" ")),[])}function Wt(t){var e=!0,n=!1,a=void 0;try{for(var i=he(t)[Symbol.iterator](),h;!(e=(h=i.next()).done);e=!0){var b=h.value;b.setAttribute("aria-hidden","true")}}catch(r){n=!0,a=r}finally{try{!e&&i.return&&i.return()}finally{if(n)throw a}}}function jt(t){var e=!0,n=!1,a=void 0;try{for(var i=he(t)[Symbol.iterator](),h;!(e=(h=i.next()).done);e=!0){var b=h.value;b.removeAttribute("aria-hidden")}}catch(r){n=!0,a=r}finally{try{!e&&i.return&&i.return()}finally{if(n)throw a}}}function Ht(){k=null}var B={};Object.defineProperty(B,"__esModule",{value:!0});B.resetState=Bt;B.log=$t;var q={},K={};function ge(t,e){t.classList.remove(e)}function Bt(){var t=document.getElementsByTagName("html")[0];for(var e in q)ge(t,q[e]);var n=document.body;for(var a in K)ge(n,K[a]);q={},K={}}function $t(){}var zt=function(e,n){return e[n]||(e[n]=0),e[n]+=1,n},qt=function(e,n){return e[n]&&(e[n]-=1),n},Kt=function(e,n,a){a.forEach(function(i){zt(n,i),e.add(i)})},Vt=function(e,n,a){a.forEach(function(i){qt(n,i),n[i]===0&&e.remove(i)})};B.add=function(e,n){return Kt(e.classList,e.nodeName.toLowerCase()=="html"?q:K,n.split(" "))};B.remove=function(e,n){return Vt(e.classList,e.nodeName.toLowerCase()=="html"?q:K,n.split(" "))};var $={};Object.defineProperty($,"__esModule",{value:!0});$.log=Gt;$.resetState=Jt;function Yt(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var Ae=function t(){var e=this;Yt(this,t),this.register=function(n){e.openInstances.indexOf(n)===-1&&(e.openInstances.push(n),e.emit("register"))},this.deregister=function(n){var a=e.openInstances.indexOf(n);a!==-1&&(e.openInstances.splice(a,1),e.emit("deregister"))},this.subscribe=function(n){e.subscribers.push(n)},this.emit=function(n){e.subscribers.forEach(function(a){return a(n,e.openInstances.slice())})},this.openInstances=[],this.subscribers=[]},oe=new Ae;function Gt(){console.log("portalOpenInstances ----------"),console.log(oe.openInstances.length),oe.openInstances.forEach(function(t){return console.log(t)}),console.log("end portalOpenInstances ----------")}function Jt(){oe=new Ae}$.default=oe;var me={};Object.defineProperty(me,"__esModule",{value:!0});me.resetState=eo;me.log=to;var Qt=$,Xt=Zt(Qt);function Zt(t){return t&&t.__esModule?t:{default:t}}var _=void 0,P=void 0,I=[];function eo(){for(var t=[_,P],e=0;e<t.length;e++){var n=t[e];n&&n.parentNode&&n.parentNode.removeChild(n)}_=P=null,I=[]}function to(){console.log("bodyTrap ----------"),console.log(I.length);for(var t=[_,P],e=0;e<t.length;e++){var n=t[e],a=n||{};console.log(a.nodeName,a.className,a.id)}console.log("edn bodyTrap ----------")}function xe(){I.length!==0&&I[I.length-1].focusContent()}function oo(t,e){!_&&!P&&(_=document.createElement("div"),_.setAttribute("data-react-modal-body-trap",""),_.style.position="absolute",_.style.opacity="0",_.setAttribute("tabindex","0"),_.addEventListener("focus",xe),P=_.cloneNode(),P.addEventListener("focus",xe)),I=e,I.length>0?(document.body.firstChild!==_&&document.body.insertBefore(_,document.body.firstChild),document.body.lastChild!==P&&document.body.appendChild(P)):(_.parentElement&&_.parentElement.removeChild(_),P.parentElement&&P.parentElement.removeChild(P))}Xt.default.subscribe(oo);(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=Object.assign||function(u){for(var d=1;d<arguments.length;d++){var w=arguments[d];for(var o in w)Object.prototype.hasOwnProperty.call(w,o)&&(u[o]=w[o])}return u},a=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(u){return typeof u}:function(u){return u&&typeof Symbol=="function"&&u.constructor===Symbol&&u!==Symbol.prototype?"symbol":typeof u},i=function(){function u(d,w){for(var o=0;o<w.length;o++){var c=w[o];c.enumerable=c.enumerable||!1,c.configurable=!0,"value"in c&&(c.writable=!0),Object.defineProperty(d,c.key,c)}}return function(d,w,o){return w&&u(d.prototype,w),o&&u(d,o),d}}(),h=Ee,b=Re,r=X(b),y=R,f=ie(y),x=_t,s=X(x),m=T,g=ie(m),S=B,F=ie(S),z=M,W=X(z),je=$,ve=X(je);function ie(u){if(u&&u.__esModule)return u;var d={};if(u!=null)for(var w in u)Object.prototype.hasOwnProperty.call(u,w)&&(d[w]=u[w]);return d.default=u,d}function X(u){return u&&u.__esModule?u:{default:u}}function He(u,d){if(!(u instanceof d))throw new TypeError("Cannot call a class as a function")}function Be(u,d){if(!u)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return d&&(typeof d=="object"||typeof d=="function")?d:u}function $e(u,d){if(typeof d!="function"&&d!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof d);u.prototype=Object.create(d&&d.prototype,{constructor:{value:u,enumerable:!1,writable:!0,configurable:!0}}),d&&(Object.setPrototypeOf?Object.setPrototypeOf(u,d):u.__proto__=d)}var le={overlay:"ReactModal__Overlay",content:"ReactModal__Content"},ze=function(d){return d.code==="Tab"||d.keyCode===9},qe=function(d){return d.code==="Escape"||d.keyCode===27},Z=0,se=function(u){$e(d,u);function d(w){He(this,d);var o=Be(this,(d.__proto__||Object.getPrototypeOf(d)).call(this,w));return o.setOverlayRef=function(c){o.overlay=c,o.props.overlayRef&&o.props.overlayRef(c)},o.setContentRef=function(c){o.content=c,o.props.contentRef&&o.props.contentRef(c)},o.afterClose=function(){var c=o.props,C=c.appElement,E=c.ariaHideApp,O=c.htmlOpenClassName,A=c.bodyOpenClassName,D=c.parentSelector,ee=D&&D().ownerDocument||document;A&&F.remove(ee.body,A),O&&F.remove(ee.getElementsByTagName("html")[0],O),E&&Z>0&&(Z-=1,Z===0&&g.show(C)),o.props.shouldFocusAfterRender&&(o.props.shouldReturnFocusAfterClose?(f.returnFocus(o.props.preventScroll),f.teardownScopedFocus()):f.popWithoutFocus()),o.props.onAfterClose&&o.props.onAfterClose(),ve.default.deregister(o)},o.open=function(){o.beforeOpen(),o.state.afterOpen&&o.state.beforeClose?(clearTimeout(o.closeTimer),o.setState({beforeClose:!1})):(o.props.shouldFocusAfterRender&&(f.setupScopedFocus(o.node),f.markForFocusLater()),o.setState({isOpen:!0},function(){o.openAnimationFrame=requestAnimationFrame(function(){o.setState({afterOpen:!0}),o.props.isOpen&&o.props.onAfterOpen&&o.props.onAfterOpen({overlayEl:o.overlay,contentEl:o.content})})}))},o.close=function(){o.props.closeTimeoutMS>0?o.closeWithTimeout():o.closeWithoutTimeout()},o.focusContent=function(){return o.content&&!o.contentHasFocus()&&o.content.focus({preventScroll:!0})},o.closeWithTimeout=function(){var c=Date.now()+o.props.closeTimeoutMS;o.setState({beforeClose:!0,closesAt:c},function(){o.closeTimer=setTimeout(o.closeWithoutTimeout,o.state.closesAt-Date.now())})},o.closeWithoutTimeout=function(){o.setState({beforeClose:!1,isOpen:!1,afterOpen:!1,closesAt:null},o.afterClose)},o.handleKeyDown=function(c){ze(c)&&(0,s.default)(o.content,c),o.props.shouldCloseOnEsc&&qe(c)&&(c.stopPropagation(),o.requestClose(c))},o.handleOverlayOnClick=function(c){o.shouldClose===null&&(o.shouldClose=!0),o.shouldClose&&o.props.shouldCloseOnOverlayClick&&(o.ownerHandlesClose()?o.requestClose(c):o.focusContent()),o.shouldClose=null},o.handleContentOnMouseUp=function(){o.shouldClose=!1},o.handleOverlayOnMouseDown=function(c){!o.props.shouldCloseOnOverlayClick&&c.target==o.overlay&&c.preventDefault()},o.handleContentOnClick=function(){o.shouldClose=!1},o.handleContentOnMouseDown=function(){o.shouldClose=!1},o.requestClose=function(c){return o.ownerHandlesClose()&&o.props.onRequestClose(c)},o.ownerHandlesClose=function(){return o.props.onRequestClose},o.shouldBeClosed=function(){return!o.state.isOpen&&!o.state.beforeClose},o.contentHasFocus=function(){return document.activeElement===o.content||o.content.contains(document.activeElement)},o.buildClassName=function(c,C){var E=(typeof C>"u"?"undefined":a(C))==="object"?C:{base:le[c],afterOpen:le[c]+"--after-open",beforeClose:le[c]+"--before-close"},O=E.base;return o.state.afterOpen&&(O=O+" "+E.afterOpen),o.state.beforeClose&&(O=O+" "+E.beforeClose),typeof C=="string"&&C?O+" "+C:O},o.attributesFromObject=function(c,C){return Object.keys(C).reduce(function(E,O){return E[c+"-"+O]=C[O],E},{})},o.state={afterOpen:!1,beforeClose:!1},o.shouldClose=null,o.moveFromContentToOverlay=null,o}return i(d,[{key:"componentDidMount",value:function(){this.props.isOpen&&this.open()}},{key:"componentDidUpdate",value:function(o,c){this.props.isOpen&&!o.isOpen?this.open():!this.props.isOpen&&o.isOpen&&this.close(),this.props.shouldFocusAfterRender&&this.state.isOpen&&!c.isOpen&&this.focusContent()}},{key:"componentWillUnmount",value:function(){this.state.isOpen&&this.afterClose(),clearTimeout(this.closeTimer),cancelAnimationFrame(this.openAnimationFrame)}},{key:"beforeOpen",value:function(){var o=this.props,c=o.appElement,C=o.ariaHideApp,E=o.htmlOpenClassName,O=o.bodyOpenClassName,A=o.parentSelector,D=A&&A().ownerDocument||document;O&&F.add(D.body,O),E&&F.add(D.getElementsByTagName("html")[0],E),C&&(Z+=1,g.hide(c)),ve.default.register(this)}},{key:"render",value:function(){var o=this.props,c=o.id,C=o.className,E=o.overlayClassName,O=o.defaultStyles,A=o.children,D=C?{}:O.content,ee=E?{}:O.overlay;if(this.shouldBeClosed())return null;var Ke={ref:this.setOverlayRef,className:this.buildClassName("overlay",E),style:n({},ee,this.props.style.overlay),onClick:this.handleOverlayOnClick,onMouseDown:this.handleOverlayOnMouseDown},Ve=n({id:c,ref:this.setContentRef,style:n({},D,this.props.style.content),className:this.buildClassName("content",C),tabIndex:"-1",onKeyDown:this.handleKeyDown,onMouseDown:this.handleContentOnMouseDown,onMouseUp:this.handleContentOnMouseUp,onClick:this.handleContentOnClick,role:this.props.role,"aria-label":this.props.contentLabel},this.attributesFromObject("aria",n({modal:!0},this.props.aria)),this.attributesFromObject("data",this.props.data||{}),{"data-testid":this.props.testId}),Ye=this.props.contentElement(Ve,A);return this.props.overlayElement(Ke,Ye)}}]),d}(h.Component);se.defaultProps={style:{overlay:{},content:{}},defaultStyles:{}},se.propTypes={isOpen:r.default.bool.isRequired,defaultStyles:r.default.shape({content:r.default.object,overlay:r.default.object}),style:r.default.shape({content:r.default.object,overlay:r.default.object}),className:r.default.oneOfType([r.default.string,r.default.object]),overlayClassName:r.default.oneOfType([r.default.string,r.default.object]),parentSelector:r.default.func,bodyOpenClassName:r.default.string,htmlOpenClassName:r.default.string,ariaHideApp:r.default.bool,appElement:r.default.oneOfType([r.default.instanceOf(W.default),r.default.instanceOf(z.SafeHTMLCollection),r.default.instanceOf(z.SafeNodeList),r.default.arrayOf(r.default.instanceOf(W.default))]),onAfterOpen:r.default.func,onAfterClose:r.default.func,onRequestClose:r.default.func,closeTimeoutMS:r.default.number,shouldFocusAfterRender:r.default.bool,shouldCloseOnOverlayClick:r.default.bool,shouldReturnFocusAfterClose:r.default.bool,preventScroll:r.default.bool,role:r.default.string,contentLabel:r.default.string,aria:r.default.object,data:r.default.object,children:r.default.node,shouldCloseOnEsc:r.default.bool,overlayRef:r.default.func,contentRef:r.default.func,id:r.default.string,overlayElement:r.default.func,contentElement:r.default.func,testId:r.default.string},e.default=se,t.exports=e.default})(pe,pe.exports);var no=pe.exports;function De(){var t=this.constructor.getDerivedStateFromProps(this.props,this.state);t!=null&&this.setState(t)}function Le(t){function e(n){var a=this.constructor.getDerivedStateFromProps(t,n);return a??null}this.setState(e.bind(this))}function Ie(t,e){try{var n=this.props,a=this.state;this.props=t,this.state=e,this.__reactInternalSnapshotFlag=!0,this.__reactInternalSnapshot=this.getSnapshotBeforeUpdate(n,a)}finally{this.props=n,this.state=a}}De.__suppressDeprecationWarning=!0;Le.__suppressDeprecationWarning=!0;Ie.__suppressDeprecationWarning=!0;function ro(t){var e=t.prototype;if(!e||!e.isReactComponent)throw new Error("Can only polyfill class components");if(typeof t.getDerivedStateFromProps!="function"&&typeof e.getSnapshotBeforeUpdate!="function")return t;var n=null,a=null,i=null;if(typeof e.componentWillMount=="function"?n="componentWillMount":typeof e.UNSAFE_componentWillMount=="function"&&(n="UNSAFE_componentWillMount"),typeof e.componentWillReceiveProps=="function"?a="componentWillReceiveProps":typeof e.UNSAFE_componentWillReceiveProps=="function"&&(a="UNSAFE_componentWillReceiveProps"),typeof e.componentWillUpdate=="function"?i="componentWillUpdate":typeof e.UNSAFE_componentWillUpdate=="function"&&(i="UNSAFE_componentWillUpdate"),n!==null||a!==null||i!==null){var h=t.displayName||t.name,b=typeof t.getDerivedStateFromProps=="function"?"getDerivedStateFromProps()":"getSnapshotBeforeUpdate()";throw Error(`Unsafe legacy lifecycles will not be called for components using new component APIs.

`+h+" uses "+b+" but also contains the following legacy lifecycles:"+(n!==null?`
  `+n:"")+(a!==null?`
  `+a:"")+(i!==null?`
  `+i:"")+`

The above lifecycles should be removed. Learn more about this warning here:
https://fb.me/react-async-component-lifecycle-hooks`)}if(typeof t.getDerivedStateFromProps=="function"&&(e.componentWillMount=De,e.componentWillReceiveProps=Le),typeof e.getSnapshotBeforeUpdate=="function"){if(typeof e.componentDidUpdate!="function")throw new Error("Cannot polyfill getSnapshotBeforeUpdate() for components that do not define componentDidUpdate() on the prototype");e.componentWillUpdate=Ie;var r=e.componentDidUpdate;e.componentDidUpdate=function(f,x,s){var m=this.__reactInternalSnapshotFlag?this.__reactInternalSnapshot:s;r.call(this,f,x,m)}}return t}const ao=Object.freeze(Object.defineProperty({__proto__:null,polyfill:ro},Symbol.toStringTag,{value:"Module"})),io=Ge(ao);Object.defineProperty(U,"__esModule",{value:!0});U.bodyOpenClassName=U.portalClassName=void 0;var be=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t},lo=function(){function t(e,n){for(var a=0;a<n.length;a++){var i=n[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(e,n,a){return n&&t(e.prototype,n),a&&t(e,a),e}}(),Ue=Ee,ne=J(Ue),so=Je,re=J(so),co=Re,p=J(co),po=no,we=J(po),uo=T,fo=mo(uo),N=M,Oe=J(N),ho=io;function mo(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function J(t){return t&&t.__esModule?t:{default:t}}function vo(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function Ce(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e&&(typeof e=="object"||typeof e=="function")?e:t}function yo(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}var go=U.portalClassName="ReactModalPortal",xo=U.bodyOpenClassName="ReactModal__Body--open",L=N.canUseDOM&&re.default.createPortal!==void 0,_e=function(e){return document.createElement(e)},Se=function(){return L?re.default.createPortal:re.default.unstable_renderSubtreeIntoContainer};function te(t){return t()}var Q=function(t){yo(e,t);function e(){var n,a,i,h;vo(this,e);for(var b=arguments.length,r=Array(b),y=0;y<b;y++)r[y]=arguments[y];return h=(a=(i=Ce(this,(n=e.__proto__||Object.getPrototypeOf(e)).call.apply(n,[this].concat(r))),i),i.removePortal=function(){!L&&re.default.unmountComponentAtNode(i.node);var f=te(i.props.parentSelector);f&&f.contains(i.node)?f.removeChild(i.node):console.warn('React-Modal: "parentSelector" prop did not returned any DOM element. Make sure that the parent element is unmounted to avoid any memory leaks.')},i.portalRef=function(f){i.portal=f},i.renderPortal=function(f){var x=Se(),s=x(i,ne.default.createElement(we.default,be({defaultStyles:e.defaultStyles},f)),i.node);i.portalRef(s)},a),Ce(i,h)}return lo(e,[{key:"componentDidMount",value:function(){if(N.canUseDOM){L||(this.node=_e("div")),this.node.className=this.props.portalClassName;var a=te(this.props.parentSelector);a.appendChild(this.node),!L&&this.renderPortal(this.props)}}},{key:"getSnapshotBeforeUpdate",value:function(a){var i=te(a.parentSelector),h=te(this.props.parentSelector);return{prevParent:i,nextParent:h}}},{key:"componentDidUpdate",value:function(a,i,h){if(N.canUseDOM){var b=this.props,r=b.isOpen,y=b.portalClassName;a.portalClassName!==y&&(this.node.className=y);var f=h.prevParent,x=h.nextParent;x!==f&&(f.removeChild(this.node),x.appendChild(this.node)),!(!a.isOpen&&!r)&&!L&&this.renderPortal(this.props)}}},{key:"componentWillUnmount",value:function(){if(!(!N.canUseDOM||!this.node||!this.portal)){var a=this.portal.state,i=Date.now(),h=a.isOpen&&this.props.closeTimeoutMS&&(a.closesAt||i+this.props.closeTimeoutMS);h?(a.beforeClose||this.portal.closeWithTimeout(),setTimeout(this.removePortal,h-i)):this.removePortal()}}},{key:"render",value:function(){if(!N.canUseDOM||!L)return null;!this.node&&L&&(this.node=_e("div"));var a=Se();return a(ne.default.createElement(we.default,be({ref:this.portalRef,defaultStyles:e.defaultStyles},this.props)),this.node)}}],[{key:"setAppElement",value:function(a){fo.setElement(a)}}]),e}(Ue.Component);Q.propTypes={isOpen:p.default.bool.isRequired,style:p.default.shape({content:p.default.object,overlay:p.default.object}),portalClassName:p.default.string,bodyOpenClassName:p.default.string,htmlOpenClassName:p.default.string,className:p.default.oneOfType([p.default.string,p.default.shape({base:p.default.string.isRequired,afterOpen:p.default.string.isRequired,beforeClose:p.default.string.isRequired})]),overlayClassName:p.default.oneOfType([p.default.string,p.default.shape({base:p.default.string.isRequired,afterOpen:p.default.string.isRequired,beforeClose:p.default.string.isRequired})]),appElement:p.default.oneOfType([p.default.instanceOf(Oe.default),p.default.instanceOf(N.SafeHTMLCollection),p.default.instanceOf(N.SafeNodeList),p.default.arrayOf(p.default.instanceOf(Oe.default))]),onAfterOpen:p.default.func,onRequestClose:p.default.func,closeTimeoutMS:p.default.number,ariaHideApp:p.default.bool,shouldFocusAfterRender:p.default.bool,shouldCloseOnOverlayClick:p.default.bool,shouldReturnFocusAfterClose:p.default.bool,preventScroll:p.default.bool,parentSelector:p.default.func,aria:p.default.object,data:p.default.object,role:p.default.string,contentLabel:p.default.string,shouldCloseOnEsc:p.default.bool,overlayRef:p.default.func,contentRef:p.default.func,id:p.default.string,overlayElement:p.default.func,contentElement:p.default.func};Q.defaultProps={isOpen:!1,portalClassName:go,bodyOpenClassName:xo,role:"dialog",ariaHideApp:!0,closeTimeoutMS:0,shouldFocusAfterRender:!0,shouldCloseOnEsc:!0,shouldCloseOnOverlayClick:!0,shouldReturnFocusAfterClose:!0,preventScroll:!1,parentSelector:function(){return document.body},overlayElement:function(e,n){return ne.default.createElement("div",e,n)},contentElement:function(e,n){return ne.default.createElement("div",e,n)}};Q.defaultStyles={overlay:{position:"fixed",top:0,left:0,right:0,bottom:0,backgroundColor:"rgba(255, 255, 255, 0.75)"},content:{position:"absolute",top:"40px",left:"40px",right:"40px",bottom:"40px",border:"1px solid #ccc",background:"#fff",overflow:"auto",WebkitOverflowScrolling:"touch",borderRadius:"4px",outline:"none",padding:"20px"}};(0,ho.polyfill)(Q);U.default=Q;(function(t,e){Object.defineProperty(e,"__esModule",{value:!0});var n=U,a=i(n);function i(h){return h&&h.__esModule?h:{default:h}}e.default=a.default,t.exports=e.default})(ce,ce.exports);var bo=ce.exports;const We=Qe(bo),wo=l(G)`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 1.4;
  }

  @media screen and (min-width: 834px) {
    width: 255px;
  }
`,Oo=l(G)`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 100px;
  }
`,Co=l(G)`
  width: 276px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 86px;
  }
`,_o=l(G)`
  width: 120px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 61px;
  }
`,So=l(G)`
  width: 120px;
  height: 36px;
  padding: 8px 10px;
  border-radius: 12px;
  border: 1px solid var(--primary-color-green-lite);
  background-color: var(--primary-color-black-two);
  color: var(--primary-color-grey);
  font-family: 'Poppins400';
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  outline-style: none;

  &:focus {
    border-color: var(--primary-color-violet);
  }

  &::placeholder {
    color: var(--primary-color-grey);
    font-family: 'Poppins400';
    font-size: 14px;
    font-weight: 400;
    line-height: 20px;
  }

  @media screen and (min-width: 834px) {
    width: 78px;
  }
`,Eo=l.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-top: 16px;
  @media screen and (min-width: 834px) {
    flex-direction: row;
    gap: 12px;
  }
`,ko=l.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  @media screen and (min-width: 834px) {
    gap: 12px;
  }
`,Po=l.svg`
  display: inline-block;
  width: 16px;
  height: 16px;
  fill: var(--primary-color-green-lite);
`,Mo=l.button`
  display: flex;
  align-items: center;
  background-color: transparent;
  gap: 6px;
  border: none;
  color: var(--primary-color-green-lite);
  font-family: 'Poppins400', sans-serif;
  margin-top: 40px;
  width: 150px;
  height: 20px;

  &:hover,
  &:focus {
    color: var(secondary-color-yellow);
  }
`,Ro=l.button`
  background-color: transparent;
  border: none;
  padding: 0px;
`,To=l.button`
  text-align: center;
  background-color: transparent;
  color: var(--primary-color-grey);
  border: none;

  &:hover,
  &:focus {
    text-decoration: underline;
  }
`,Fo=l.div`
  position: relative;
  width: 276px;
  height: 546px;
  border-radius: 12px;
  background-color: var(--primary-color-black-two);

  @media screen and (min-width: 834px) {
    width: 756px;
    height: 452px;
    padding: 24px;
  }

  @media screen and (min-width: 1440px) {
  }
`,No="/fs-84-react-node-va7ul/assets/Breakfast-ebbae9d6.png",Ao="/fs-84-react-node-va7ul/assets/Dinner-3e075f11.png",Do="/fs-84-react-node-va7ul/assets/Lunch-b9834f5c.png",Lo="/fs-84-react-node-va7ul/assets/Snack-986b08ce.png",Io={content:{maxWidth:"calc(100vw - 48px)",maxHeight:"calc(100vh - 24px)",top:"50%",left:"50%",right:"auto",bottom:"auto",marginRight:"-50%",transform:"translate(-50%, -50%)",border:"none",background:"#0F0F0F"},overlay:{backgroundColor:"rgba(0, 0, 0, 0.8)",zIndex:"1200",width:"100vw",height:"100vh"}};We.setAppElement("#root");const En=({stateModal:t,closeModal:e,typefood:n})=>{const a=Xe(),i={name:"",carbogidrate:"",protein:"",fat:"",calories:""},h=r=>{let y={typeFood:n,userFood:r.products.map(f=>({name:f.name,calories:f.calories,nutrition:{carbogidrate:f.carbogidrate,protein:f.protein,fat:f.fat}}))};a(nt(y)),e()},b=r=>{if(n==="breakfast")return No;if(n==="dinner")return Ao;if(n==="lunch")return Do;if(n==="snack")return Lo};return v.jsx(We,{isOpen:t,onRequestClose:e,style:Io,children:v.jsxs(Fo,{children:[v.jsx(dt,{children:"Record your meal"}),v.jsxs(st,{style:{marginTop:"24px"},children:[v.jsx(pt,{src:b(),alt:n}),v.jsx(ct,{children:Ze(n)})]}),v.jsx(et,{initialValues:{products:[i]},onSubmit:r=>h(r),children:({values:r})=>v.jsxs(tt,{children:[v.jsx(ot,{name:"products",children:({remove:y,push:f})=>v.jsxs("div",{children:[r.products.map((x,s)=>v.jsxs(Eo,{children:[v.jsx(wo,{name:`products.${s}.name`,placeholder:"The name of the product or dish",value:r.products[s].name}),v.jsx(Oo,{name:`products.${s}.carbogidrate`,placeholder:"Carbonoh.",value:r.products[s].carbogidrate,type:"number",min:1}),v.jsx(Co,{name:`products.${s}.protein`,placeholder:"Protein",value:r.products[s].protein,min:1,type:"number"}),v.jsxs(ko,{children:[v.jsx(_o,{name:`products.${s}.fat`,placeholder:"Fat",value:r.products[s].fat,min:1,type:"number"}),v.jsx(So,{name:`products.${s}.calories`,placeholder:"Calories",value:r.products[s].calories,min:1,type:"number"}),v.jsx(Ro,{"data-set":s,type:"button",onClick:m=>{const g=m.currentTarget.dataset.set;r.products.length===1&&e(),y(g)},children:v.jsx("svg",{style:{display:"inline-block",width:"20px",height:" 20px",fill:"#E3FFA8"},children:v.jsx("use",{href:`${ye}#trash-delete`})})})]})]},s)),v.jsxs(Mo,{type:"button",onClick:()=>f(i),children:[v.jsx(Po,{children:v.jsx("use",{href:`${ye}#icon-add-converted`})}),"Add more"]})]})}),v.jsxs(ut,{children:[v.jsx(ft,{type:"submit",children:"Confirm"}),v.jsx(To,{onClick:e,type:"button",children:"Cancel"})]})]})})]})})};export{_n as A,No as B,vn as C,Ao as D,Zo as E,rn as F,an as G,sn as H,On as I,cn as J,ln as K,Do as L,En as M,on as N,en as O,pn as P,dn as Q,yn as R,Lo as S,dt as T,un as U,fn as V,Yo as W,hn as X,$o as Y,qo as a,Ko as b,Vo as c,pt as d,Wo as e,jo as f,Ho as g,Bo as h,mn as i,st as j,ct as k,gn as l,xn as m,Cn as n,bn as o,wn as p,ut as q,ft as r,zo as s,Sn as t,nn as u,Go as v,Jo as w,Xo as x,tn as y,Qo as z};
