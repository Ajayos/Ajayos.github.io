"use strict";(self.webpackChunkajayos_github_io=self.webpackChunkajayos_github_io||[]).push([[746],{9746:(e,r,t)=>{t.r(r),t.d(r,{default:()=>c});var a=t(9950),n=t(7208),o=t(1860),i=t(4414);const s=a.forwardRef(((e,r)=>{var t,a;let s,c,{children:l,type:u,direction:d,offset:f,scale:v}=e;switch(d){case"up":case"left":s=f,c=0;break;default:s=0,c=f}const[h,p]=(0,n.Y)(s,c),[y,w]=(0,n.Y)(s,c);switch(u){case"rotate":return(0,i.jsx)(o.P.div,{ref:r,animate:{rotate:360},transition:{repeat:1/0,repeatType:"loop",duration:2,repeatDelay:0},children:l});case"slide":return"up"===d||"down"===d?(0,i.jsx)(o.P.div,{ref:r,animate:{y:void 0!==y?y:""},onHoverEnd:()=>w(),onHoverStart:()=>w(),children:l}):(0,i.jsx)(o.P.div,{ref:r,animate:{x:void 0!==h?h:""},onHoverEnd:()=>p(),onHoverStart:()=>p(),children:l});default:return"number"===typeof v&&(v={hover:v,tap:v}),(0,i.jsx)(o.P.div,{ref:r,whileHover:{scale:null===(t=v)||void 0===t?void 0:t.hover},whileTap:{scale:null===(a=v)||void 0===a?void 0:a.tap},children:l})}}));s.defaultProps={type:"scale",offset:10,direction:"right",scale:{hover:1,tap:.9}};const c=s},7208:(e,r,t)=>{t.d(r,{Y:()=>o});var a=t(9950);const n=(e,r,t)=>{const a=r-e;return((t-e)%a+a)%a+e};function o(){for(var e=arguments.length,r=new Array(e),t=0;t<e;t++)r[t]=arguments[t];const o=(0,a.useRef)(0),[i,s]=(0,a.useState)(r[o.current]);return[i,(0,a.useCallback)((e=>{o.current="number"!==typeof e?n(0,r.length,o.current+1):e,s(r[o.current])}),[r.length,...r])]}}}]);