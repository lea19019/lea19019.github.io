import{p as o,j as m,J as t,m as c,g as l,u,a as s}from"./index-paJ4Zt-H.js";const g=o({height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},"dimension");function h(e){return{dimensionStyles:m(()=>({height:t(e.height),maxHeight:t(e.maxHeight),maxWidth:t(e.maxWidth),minHeight:t(e.minHeight),minWidth:t(e.minWidth),width:t(e.width)}))}}function v(e){return{aspectStyles:m(()=>{const n=Number(e.aspectRatio);return n?{paddingBottom:String(1/n*100)+"%"}:void 0})}}const S=o({aspectRatio:[String,Number],contentClass:String,inline:Boolean,...c(),...g()},"VResponsive"),N=l()({name:"VResponsive",props:S(),setup(e,n){let{slots:i}=n;const{aspectStyles:r}=v(e),{dimensionStyles:d}=h(e);return u(()=>{var a;return s("div",{class:["v-responsive",{"v-responsive--inline":e.inline},e.class],style:[d.value,e.style]},[s("div",{class:"v-responsive__sizer",style:r.value},null),(a=i.additional)==null?void 0:a.call(i),i.default&&s("div",{class:["v-responsive__content",e.contentClass]},[i.default()])])}),{}}});export{N as V,S as m};
