"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[794],{2440:function(t,e,r){r.d(e,{Z1:function(){return d}});var i=r(5893),a=(r(7294),r(7411));const s={"aria-busy":!0,role:"progressbar"},o=a.ZP.div`
  display: ${t=>t.$visible?"flex":"none"};
`,n="http://www.w3.org/2000/svg",l=242.776657104492,c=a.F4`
12.5% {
  stroke-dasharray: ${33.98873199462888}px, ${l}px;
  stroke-dashoffset: -${26.70543228149412}px;
}
43.75% {
  stroke-dasharray: ${84.97182998657219}px, ${l}px;
  stroke-dashoffset: -${84.97182998657219}px;
}
100% {
  stroke-dasharray: ${2.42776657104492}px, ${l}px;
  stroke-dashoffset: -${240.34889053344708}px;
}
`,h=(a.ZP.path`
  stroke-dasharray: ${2.42776657104492}px, ${l};
  stroke-dashoffset: 0;
  animation: ${c} ${1.6}s linear infinite;
`,a.F4`
to {
   transform: rotate(360deg);
 }
`),d=(a.ZP.svg`
  animation: ${h} 0.75s steps(12, end) infinite;
  animation-duration: 0.75s;
`,a.ZP.polyline`
  stroke-width: ${t=>t.width}px;
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`,({wrapperStyle:t={},visible:e=!0,wrapperClass:r="",height:a=100,width:l=100,color:c="#4fa94d",ariaLabel:h="three-circles-loading",outerCircleColor:d,innerCircleColor:p,middleCircleColor:f})=>(0,i.jsx)(o,{style:t,$visible:e,className:r,"data-testid":"three-circles-wrapper","aria-label":h,...s,children:(0,i.jsxs)("svg",{version:"1.1",height:`${a}`,width:`${l}`,xmlns:n,viewBox:"0 0 100 100",enableBackground:"new 0 0 100 100",xmlSpace:"preserve","data-testid":"three-circles-svg",children:[(0,i.jsx)("path",{fill:d||c,d:"M31.6,3.5C5.9,13.6-6.6,42.7,3.5,68.4c10.1,25.7,39.2,38.3,64.9,28.1l-3.1-7.9c-21.3,8.4-45.4-2-53.8-23.3 c-8.4-21.3,2-45.4,23.3-53.8L31.6,3.5z",children:(0,i.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})}),(0,i.jsx)("path",{fill:f||c,d:"M42.3,39.6c5.7-4.3,13.9-3.1,18.1,2.7c4.3,5.7,3.1,13.9-2.7,18.1l4.1,5.5c8.8-6.5,10.6-19,4.1-27.7 c-6.5-8.8-19-10.6-27.7-4.1L42.3,39.6z",children:(0,i.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"1s",from:"0 50 50",to:"-360 50 50",repeatCount:"indefinite"})}),(0,i.jsx)("path",{fill:p||c,d:"M82,35.7C74.1,18,53.4,10.1,35.7,18S10.1,46.6,18,64.3l7.6-3.4c-6-13.5,0-29.3,13.5-35.3s29.3,0,35.3,13.5 L82,35.7z",children:(0,i.jsx)("animateTransform",{attributeName:"transform",attributeType:"XML",type:"rotate",dur:"2s",from:"0 50 50",to:"360 50 50",repeatCount:"indefinite"})})]})})),p=a.F4`
to {
   stroke-dashoffset: 136;
 }
`;a.ZP.polygon`
  stroke-dasharray: 17;
  animation: ${p} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`,a.ZP.svg`
  transform-origin: 50% 65%;
`}}]);