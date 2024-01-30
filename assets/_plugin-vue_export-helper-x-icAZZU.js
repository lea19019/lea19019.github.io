import{ad as V,e as v,ae as x,af as ae,ag as G,ah as Te,ai as Ee,aj as xe,p as _,ab as L,h as b,I as Le,m as $e,g as z,r as ie,a as Pe,ak as ze,t as D,al as Re,am as Ne,c as d,_ as Ie,v as oe,Y as Ve,aa as le,y as W,s as k,i as I,X as Be,G as He,k as De,H as J,J as We,Q as ue,N as je,an as Q,ao as Oe,f as qe,ap as Ae,aq as Z,D as Fe,ar as Me,as as ee}from"./index-RaSI5PZj.js";import{m as j,a as Ue,u as O}from"./tag-07w1n3NP.js";const Ye=["top","bottom"],Xe=["start","end","left","right"];function Ct(e,t){let[n,r]=e.split(" ");return r||(r=V(Ye,n)?"start":V(Xe,n)?"top":"center"),{side:te(n,t),align:te(r,t)}}function te(e,t){return e==="start"?t?"right":"left":e==="end"?t?"left":"right":e}function q(e){return ae(()=>{const t=[],n={};if(e.value.background)if(G(e.value.background)){if(n.backgroundColor=e.value.background,!e.value.text&&Te(e.value.background)){const r=Ee(e.value.background);if(r.a==null||r.a===1){const s=xe(r);n.color=s,n.caretColor=s}}}else t.push(`bg-${e.value.background}`);return e.value.text&&(G(e.value.text)?(n.color=e.value.text,n.caretColor=e.value.text):t.push(`text-${e.value.text}`)),{colorClasses:t,colorStyles:n}})}function Ke(e,t){const n=v(()=>({text:x(e)?e.value:t?e[t]:null})),{colorClasses:r,colorStyles:s}=q(n);return{textColorClasses:r,textColorStyles:s}}function Ge(e,t){const n=v(()=>({background:x(e)?e.value:t?e[t]:null})),{colorClasses:r,colorStyles:s}=q(n);return{backgroundColorClasses:r,backgroundColorStyles:s}}const Je=["x-small","small","default","large","x-large"],Qe=_({size:{type:[String,Number],default:"default"}},"size");function Ze(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return ae(()=>{let n,r;return V(Je,e.size)?n=`${t}--size-${e.size}`:e.size&&(r={width:b(e.size),height:b(e.size)}),{sizeClasses:n,sizeStyles:r}})}const et=_({color:String,start:Boolean,end:Boolean,icon:Le,...j(),...Qe(),...Ue({tag:"i"}),...$e()},"VIcon"),wt=z()({name:"VIcon",props:et(),setup(e,t){let{attrs:n,slots:r}=t;const s=ie(),{themeClasses:a}=Pe(e),{iconData:c}=ze(v(()=>s.value||e.icon)),{sizeClasses:u}=Ze(e),{textColorClasses:f,textColorStyles:i}=Ke(D(e,"color"));return O(()=>{var g,h;const o=(g=r.default)==null?void 0:g.call(r);return o&&(s.value=(h=Re(o).filter(m=>m.type===Ne&&m.children&&typeof m.children=="string")[0])==null?void 0:h.children),d(c.value.component,{tag:e.tag,icon:c.value.icon,class:["v-icon","notranslate",a.value,u.value,f.value,{"v-icon--clickable":!!n.onClick,"v-icon--start":e.start,"v-icon--end":e.end},e.class],style:[u.value?void 0:{fontSize:b(e.size),height:b(e.size),width:b(e.size)},i.value,e.style],role:n.onClick?"button":void 0,"aria-hidden":!n.onClick},{default:()=>[o]})}),{}}}),tt=_({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function nt(e){return{dimensionStyles:v(()=>({height:b(e.height),maxHeight:b(e.maxHeight),maxWidth:b(e.maxWidth),minHeight:b(e.minHeight),minWidth:b(e.minWidth),width:b(e.width)}))}}function rt(e){return{aspectStyles:v(()=>{const t=Number(e.aspectRatio);return t?{paddingBottom:String(1/t*100)+"%"}:void 0})}}const ce=_({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...j(),...tt()},"VResponsive"),ne=z()({name:"VResponsive",props:ce(),setup(e,t){let{slots:n}=t;const{aspectStyles:r}=rt(e),{dimensionStyles:s}=nt(e);return O(()=>{var a;return d("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[s.value,e.style]},[d("div",{class:"v-responsive__sizer",style:r.value},null),(a=n.additional)==null?void 0:a.call(n),n.default&&d("div",{class:["v-responsive__content",e.contentClass]},[n.default()])])}),{}}}),st=_({rounded:{type:[Boolean,Number,String],default:void 0}},"rounded");function at(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{roundedClasses:v(()=>{const r=x(e)?e.value:e.rounded,s=[];if(r===!0||r==="")s.push(`${t}--rounded`);else if(typeof r=="string"||r===0)for(const a of String(r).split(" "))s.push(`rounded-${a}`);return s})}}const it=_({transition:{type:[Boolean,String,Object],default:"fade-transition",validator:e=>e!==!0}},"transition"),$=(e,t)=>{let{slots:n}=t;const{transition:r,disabled:s,...a}=e,{component:c=Ve,...u}=typeof r=="object"?r:{};return Ie(c,oe(typeof r=="string"?{name:s?"":r}:u,a,{disabled:s}),n)};function ot(e,t){if(!le)return;const n=t.modifiers||{},r=t.value,{handler:s,options:a}=typeof r=="object"?r:{handler:r,options:{}},c=new IntersectionObserver(function(){var g;let u=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[],f=arguments.length>1?arguments[1]:void 0;const i=(g=e._observe)==null?void 0:g[t.instance.$.uid];if(!i)return;const o=u.some(h=>h.isIntersecting);s&&(!n.quiet||i.init)&&(!n.once||o||i.init)&&s(o,u,f),o&&n.once?de(e,t):i.init=!0},a);e._observe=Object(e._observe),e._observe[t.instance.$.uid]={init:!1,observer:c},c.observe(e)}function de(e,t){var r;const n=(r=e._observe)==null?void 0:r[t.instance.$.uid];n&&(n.observer.unobserve(e),delete e._observe[t.instance.$.uid])}const lt={mounted:ot,unmounted:de},ut=lt,ct=_({alt:String,cover:Boolean,color:String,draggable:{type:[Boolean,String],default:void 0},eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},sizes:String,src:{type:[String,Object],default:""},crossorigin:String,referrerpolicy:String,srcset:String,position:String,...ce(),...j(),...st(),...it()},"VImg"),kt=z()({name:"VImg",directives:{intersect:ut},props:ct(),emits:{loadstart:e=>!0,load:e=>!0,error:e=>!0},setup(e,t){let{emit:n,slots:r}=t;const{backgroundColorClasses:s,backgroundColorStyles:a}=Ge(D(e,"color")),{roundedClasses:c}=at(e),u=W("VImg"),f=k(""),i=ie(),o=k(e.eager?"loading":"idle"),g=k(),h=k(),m=v(()=>e.src&&typeof e.src=="object"?{src:e.src.src,srcset:e.srcset||e.src.srcset,lazySrc:e.lazySrc||e.src.lazySrc,aspect:Number(e.aspectRatio||e.src.aspect||0)}:{src:e.src,srcset:e.srcset,lazySrc:e.lazySrc,aspect:Number(e.aspectRatio||0)}),C=v(()=>m.value.aspect||g.value/h.value||0);I(()=>e.src,()=>{R(o.value!=="idle")}),I(C,(l,p)=>{!l&&p&&i.value&&w(i.value)}),Be(()=>R());function R(l){if(!(e.eager&&l)&&!(le&&!l&&!e.eager)){if(o.value="loading",m.value.lazySrc){const p=new Image;p.src=m.value.lazySrc,w(p,null)}m.value.src&&He(()=>{var p;n("loadstart",((p=i.value)==null?void 0:p.currentSrc)||m.value.src),setTimeout(()=>{var S;if(!u.isUnmounted)if((S=i.value)!=null&&S.complete){if(i.value.naturalWidth||F(),o.value==="error")return;C.value||w(i.value,null),o.value==="loading"&&A()}else C.value||w(i.value),M()})})}}function A(){var l;u.isUnmounted||(M(),w(i.value),o.value="loaded",n("load",((l=i.value)==null?void 0:l.currentSrc)||m.value.src))}function F(){var l;u.isUnmounted||(o.value="error",n("error",((l=i.value)==null?void 0:l.currentSrc)||m.value.src))}function M(){const l=i.value;l&&(f.value=l.currentSrc||l.src)}let N=-1;De(()=>{clearTimeout(N)});function w(l){let p=arguments.length>1&&arguments[1]!==void 0?arguments[1]:100;const S=()=>{if(clearTimeout(N),u.isUnmounted)return;const{naturalHeight:X,naturalWidth:K}=l;X||K?(g.value=K,h.value=X):!l.complete&&o.value==="loading"&&p!=null?N=window.setTimeout(S,p):(l.currentSrc.endsWith(".svg")||l.currentSrc.startsWith("data:image/svg+xml"))&&(g.value=1,h.value=1)};S()}const U=v(()=>({"v-img__img--cover":e.cover,"v-img__img--contain":!e.cover})),be=()=>{var S;if(!m.value.src||o.value==="idle")return null;const l=d("img",{class:["v-img__img",U.value],style:{objectPosition:e.position},src:m.value.src,srcset:m.value.srcset,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable,sizes:e.sizes,ref:i,onLoad:A,onError:F},null),p=(S=r.sources)==null?void 0:S.call(r);return d($,{transition:e.transition,appear:!0},{default:()=>[J(p?d("picture",{class:"v-img__picture"},[p,l]):l,[[je,o.value==="loaded"]])]})},Se=()=>d($,{transition:e.transition},{default:()=>[m.value.lazySrc&&o.value!=="loaded"&&d("img",{class:["v-img__img","v-img__img--preload",U.value],style:{objectPosition:e.position},src:m.value.lazySrc,alt:e.alt,crossorigin:e.crossorigin,referrerpolicy:e.referrerpolicy,draggable:e.draggable},null)]}),Ce=()=>r.placeholder?d($,{transition:e.transition,appear:!0},{default:()=>[(o.value==="loading"||o.value==="error"&&!r.error)&&d("div",{class:"v-img__placeholder"},[r.placeholder()])]}):null,we=()=>r.error?d($,{transition:e.transition,appear:!0},{default:()=>[o.value==="error"&&d("div",{class:"v-img__error"},[r.error()])]}):null,ke=()=>e.gradient?d("div",{class:"v-img__gradient",style:{backgroundImage:`linear-gradient(${e.gradient})`}},null):null,Y=k(!1);{const l=I(C,p=>{p&&(requestAnimationFrame(()=>{requestAnimationFrame(()=>{Y.value=!0})}),l())})}return O(()=>{const l=ne.filterProps(e);return J(d(ne,oe({class:["v-img",{"v-img--booting":!Y.value},s.value,c.value,e.class],style:[{width:b(e.width==="auto"?g.value:e.width)},a.value,e.style]},l,{aspectRatio:C.value,"aria-label":e.alt,role:e.alt?"img":void 0}),{additional:()=>d(ue,null,[d(be,null,null),d(Se,null,null),d(ke,null,null),d(Ce,null,null),d(we,null,null)]),default:r.default}),[[We("intersect"),{handler:R,options:e.options},null,{once:!0}]])}),{currentSrc:f,image:i,state:o,naturalWidth:g,naturalHeight:h}}}),dt=[null,"default","comfortable","compact"],Tt=_({density:{type:String,default:"default",validator:e=>dt.includes(e)}},"density");function Et(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{densityClasses:v(()=>`${t}--density-${e.density}`)}}const mt=["elevated","flat","tonal","outlined","text","plain"];function xt(e,t){return d(ue,null,[e&&d("span",{key:"overlay",class:`${t}__overlay`},null),d("span",{key:"underlay",class:`${t}__underlay`},null)])}const Lt=_({color:String,variant:{type:String,default:"elevated",validator:e=>mt.includes(e)}},"variant");function $t(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();const n=v(()=>{const{variant:a}=Q(e);return`${t}--variant-${a}`}),{colorClasses:r,colorStyles:s}=q(v(()=>{const{variant:a,color:c}=Q(e);return{[["elevated","flat"].includes(a)?"background":"text"]:c}}));return{colorClasses:r,colorStyles:s,variantClasses:n}}const vt=_({defaults:Object,disabled:Boolean,reset:[Number,String],root:[Boolean,String],scoped:Boolean},"VDefaultsProvider"),Pt=z(!1)({name:"VDefaultsProvider",props:vt(),setup(e,t){let{slots:n}=t;const{defaults:r,disabled:s,reset:a,root:c,scoped:u}=Oe(e);return qe(r,{reset:a,root:c,scoped:u,disabled:s}),()=>{var f;return(f=n.default)==null?void 0:f.call(n)}}}),zt=_({border:[Boolean,Number,String]},"border");function Rt(e){let t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:L();return{borderClasses:v(()=>{const r=x(e)?e.value:e.border,s=[];if(r===!0||r==="")s.push(`${t}--border`);else if(typeof r=="string"||r===0)for(const a of String(r).split(" "))s.push(`border-${a}`);return s})}}const Nt=_({elevation:{type:[Number,String],validator(e){const t=parseInt(e);return!isNaN(t)&&t>=0&&t<=24}}},"elevation");function It(e){return{elevationClasses:v(()=>{const n=x(e)?e.value:e.elevation,r=[];return n==null||r.push(`elevation-${n}`),r})}}function ft(){const e=W("useRoute");return v(()=>{var t;return(t=e==null?void 0:e.proxy)==null?void 0:t.$route})}function Vt(){var e,t;return(t=(e=W("useRouter"))==null?void 0:e.proxy)==null?void 0:t.$router}function Bt(e,t){const n=Ae("RouterLink"),r=v(()=>!!(e.href||e.to)),s=v(()=>(r==null?void 0:r.value)||Z(t,"click")||Z(e,"click"));if(typeof n=="string")return{isLink:r,isClickable:s,href:D(e,"href")};const a=e.to?n.useLink(e):void 0,c=ft();return{isLink:r,isClickable:s,route:a==null?void 0:a.route,navigate:a==null?void 0:a.navigate,isActive:a&&v(()=>{var u,f,i;return e.exact?c.value?((i=a.isExactActive)==null?void 0:i.value)&&Fe(a.route.value.query,c.value.query):(f=a.isExactActive)==null?void 0:f.value:(u=a.isActive)==null?void 0:u.value}),href:v(()=>e.to?a==null?void 0:a.route.value.href:e.href)}}const Ht=_({href:String,replace:Boolean,to:[String,Object],exact:Boolean},"router"),B=Symbol("rippleStop"),gt=80;function re(e,t){e.style.transform=t,e.style.webkitTransform=t}function H(e){return e.constructor.name==="TouchEvent"}function me(e){return e.constructor.name==="KeyboardEvent"}const ht=function(e,t){var g;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},r=0,s=0;if(!me(e)){const h=t.getBoundingClientRect(),m=H(e)?e.touches[e.touches.length-1]:e;r=m.clientX-h.left,s=m.clientY-h.top}let a=0,c=.3;(g=t._ripple)!=null&&g.circle?(c=.15,a=t.clientWidth/2,a=n.center?a:a+Math.sqrt((r-a)**2+(s-a)**2)/4):a=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=`${(t.clientWidth-a*2)/2}px`,f=`${(t.clientHeight-a*2)/2}px`,i=n.center?u:`${r-a}px`,o=n.center?f:`${s-a}px`;return{radius:a,scale:c,x:i,y:o,centerX:u,centerY:f}},P={show(e,t){var m;let n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(!((m=t==null?void 0:t._ripple)!=null&&m.enabled))return;const r=document.createElement("span"),s=document.createElement("span");r.appendChild(s),r.className="v-ripple__container",n.class&&(r.className+=` ${n.class}`);const{radius:a,scale:c,x:u,y:f,centerX:i,centerY:o}=ht(e,t,n),g=`${a*2}px`;s.className="v-ripple__animation",s.style.width=g,s.style.height=g,t.appendChild(r);const h=window.getComputedStyle(t);h&&h.position==="static"&&(t.style.position="relative",t.dataset.previousPosition="static"),s.classList.add("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--visible"),re(s,`translate(${u}, ${f}) scale3d(${c},${c},${c})`),s.dataset.activated=String(performance.now()),setTimeout(()=>{s.classList.remove("v-ripple__animation--enter"),s.classList.add("v-ripple__animation--in"),re(s,`translate(${i}, ${o}) scale3d(1,1,1)`)},0)},hide(e){var a;if(!((a=e==null?void 0:e._ripple)!=null&&a.enabled))return;const t=e.getElementsByClassName("v-ripple__animation");if(t.length===0)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const r=performance.now()-Number(n.dataset.activated),s=Math.max(250-r,0);setTimeout(()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout(()=>{var u;e.getElementsByClassName("v-ripple__animation").length===1&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),((u=n.parentNode)==null?void 0:u.parentNode)===e&&e.removeChild(n.parentNode)},300)},s)}};function ve(e){return typeof e>"u"||!!e}function T(e){const t={},n=e.currentTarget;if(!(!(n!=null&&n._ripple)||n._ripple.touched||e[B])){if(e[B]=!0,H(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||me(e),n._ripple.class&&(t.class=n._ripple.class),H(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{P.show(e,n,t)},n._ripple.showTimer=window.setTimeout(()=>{var r;(r=n==null?void 0:n._ripple)!=null&&r.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)},gt)}else P.show(e,n,t)}}function se(e){e[B]=!0}function y(e){const t=e.currentTarget;if(t!=null&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),e.type==="touchend"&&t._ripple.showTimerCommit){t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,t._ripple.showTimer=window.setTimeout(()=>{y(e)});return}window.setTimeout(()=>{t._ripple&&(t._ripple.touched=!1)}),P.hide(t)}}function fe(e){const t=e.currentTarget;t!=null&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let E=!1;function ge(e){!E&&(e.keyCode===ee.enter||e.keyCode===ee.space)&&(E=!0,T(e))}function he(e){E=!1,y(e)}function pe(e){E&&(E=!1,y(e))}function ye(e,t,n){const{value:r,modifiers:s}=t,a=ve(r);if(a||P.hide(e),e._ripple=e._ripple??{},e._ripple.enabled=a,e._ripple.centered=s.center,e._ripple.circle=s.circle,Me(r)&&r.class&&(e._ripple.class=r.class),a&&!n){if(s.stop){e.addEventListener("touchstart",se,{passive:!0}),e.addEventListener("mousedown",se);return}e.addEventListener("touchstart",T,{passive:!0}),e.addEventListener("touchend",y,{passive:!0}),e.addEventListener("touchmove",fe,{passive:!0}),e.addEventListener("touchcancel",y),e.addEventListener("mousedown",T),e.addEventListener("mouseup",y),e.addEventListener("mouseleave",y),e.addEventListener("keydown",ge),e.addEventListener("keyup",he),e.addEventListener("blur",pe),e.addEventListener("dragstart",y,{passive:!0})}else!a&&n&&_e(e)}function _e(e){e.removeEventListener("mousedown",T),e.removeEventListener("touchstart",T),e.removeEventListener("touchend",y),e.removeEventListener("touchmove",fe),e.removeEventListener("touchcancel",y),e.removeEventListener("mouseup",y),e.removeEventListener("mouseleave",y),e.removeEventListener("keydown",ge),e.removeEventListener("keyup",he),e.removeEventListener("dragstart",y),e.removeEventListener("blur",pe)}function pt(e,t){ye(e,t,!1)}function yt(e){delete e._ripple,_e(e)}function _t(e,t){if(t.value===t.oldValue)return;const n=ve(t.oldValue);ye(e,t,n)}const Dt={mounted:pt,unmounted:yt,updated:_t},Wt=(e,t)=>{const n=e.__vccOpts||e;for(const[r,s]of t)n[r]=s;return n};export{$ as M,Dt as R,kt as V,Wt as _,Nt as a,st as b,Rt as c,It as d,at as e,Pt as f,Tt as g,Lt as h,Et as i,Qe as j,Ze as k,Ke as l,zt as m,tt as n,Ht as o,$t as p,nt as q,Bt as r,xt as s,wt as t,Ge as u,Vt as v,te as w,ne as x,Ct as y};