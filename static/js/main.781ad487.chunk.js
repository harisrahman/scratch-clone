(this["webpackJsonpscratch-clone"]=this["webpackJsonpscratch-clone"]||[]).push([[0],{16:function(e,t,r){},18:function(e,t,r){"use strict";r.r(t);var n=r(1),s=r.n(n),i=r(10),o=r.n(i),c=(r(16),r(9)),a=Object(n.createContext)({code:[],setCode:function(e){return console.warn("no code yet")}}),d=function(){return Object(n.useContext)(a)},l=Object(n.createContext)({sprites:{count:1},setSprites:function(e){return console.warn("no code yet")}}),u=function(){return Object(n.useContext)(l)},j=r(2),f=r(3),p=r(5),h=r(4),b=r(0),x={event:"bg-yellow-500 text-white",motion:"bg-blue-500 text-white"};function C(e){var t=Object(n.useRef)(null);return Object(b.jsx)("div",{ref:t,className:"flex flex-row flex-wrap px-2 py-1 my-2 text-sm cursor-move ".concat(x[e.type]),draggable:"true",onDragStart:function(r){if(e.isOnEditor){var n=t.current;if(null===n)return;var s=Array.from(n.parentNode.children).indexOf(n);r.dataTransfer.setData("drag_index",String(s))}else r.dataTransfer.setData("block_index",String(e.index))},children:e.children})}function O(e){var t=e.name,r=e.size,n=void 0===r?20:r,s=e.className,i=void 0===s?"":s;return Object(b.jsx)("svg",{className:"fill-current ".concat(i),width:n.toString()+"px",height:n.toString()+"px",children:Object(b.jsx)("use",{xlinkHref:"icons/solid.svg#".concat(t)})})}var v=function(e){Object(p.a)(r,e);var t=Object(h.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(f.a)(r,[{key:"run",value:function(e,t){var r="rotate(".concat(e,"deg)"),n=t.style.transform.match(/rotate\((-?\d+)deg\)/i);if(n&&1 in n){var s=parseInt(n[1])+e;r=t.style.transform.replace(/(rotate\()(-?\d+)(deg\))/i,"$1".concat(s,"$3")),t.style.transform=r}else t.style.transform+=r}},{key:"render",value:function(){return Object(b.jsxs)(C,{type:"motion",value:this.props.value,index:this.props.index,isOnEditor:this.props.isOnEditor,children:["Turn",Object(b.jsx)(O,{name:this.props.value>0?"redo":"undo",size:15,className:"text-white mx-2"}),Math.abs(this.props.value)," degrees"]},this.props.key)}}]),r}(s.a.Component),k=function(e){Object(p.a)(r,e);var t=Object(h.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(f.a)(r,[{key:"run",value:function(e,t){var r="translateX(".concat(e,"px)"),n=t.style.transform.match(/translateX\((-?\d+)px\)/i);if(n&&1 in n){var s=parseInt(n[1])+e;r=t.style.transform.replace(/(translateX\()(-?\d+)(px\))/i,"$1".concat(s,"$3")),t.style.transform=r}else t.style.transform+=r}},{key:"render",value:function(){return Object(b.jsx)(C,{type:"motion",value:this.props.value,index:this.props.index,isOnEditor:this.props.isOnEditor,children:"Move 10 steps"},this.props.key)}}]),r}(s.a.Component),g=function(e){Object(p.a)(r,e);var t=Object(h.a)(r);function r(){return Object(j.a)(this,r),t.apply(this,arguments)}return Object(f.a)(r,[{key:"render",value:function(){return Object(b.jsxs)(C,{type:"event",trigger:this.props.trigger,index:this.props.index,isOnEditor:this.props.isOnEditor,children:["When","sprite"===this.props.trigger?" sprite ":Object(b.jsx)(O,{name:"flag",size:15,className:"text-green-600 mx-2"}),"clicked"]},this.props.key)}}]),r}(s.a.Component),m=[function(e,t){return new g({index:0,key:e,type:"event",trigger:"flag",isOnEditor:t})},function(e,t){return new g({index:1,key:e,type:"event",trigger:"sprite",isOnEditor:t})},function(e,t){return new k({index:2,key:e,type:"motion",value:10,isOnEditor:t})},function(e,t){return new v({index:3,key:e,type:"motion",value:15,isOnEditor:t})},function(e,t){return new v({index:4,key:e,type:"motion",value:-15,isOnEditor:t})}];function y(){return Object(b.jsxs)("div",{className:"w-60 flex-none h-full overflow-y-auto flex flex-col items-start p-2 border-r border-gray-200",children:[Object(b.jsx)("div",{className:"font-bold",children:"Events"}),m[0](0).render(),m[1](1).render(),Object(b.jsx)("div",{className:"font-bold",children:"Motion"}),m[2](2).render(),m[3](3).render(),m[4](4).render()]})}var F=r(11),w=function(e){return[].slice.call(e.children)},L=function(e,t,r,n){var s=!1;e.forEach((function(e){var i=t[e](e);"event"!==i.props.type?s&&n.current&&w(n.current).forEach((function(e,t){i.run(i.props.value,e)})):i.props.trigger===r&&(s=!0)}))};function N(e){var t=e.stageRef,r=d(),s=r.code,i=r.setCode,o=u(),c=(o.sprites,o.setSprites),a=Object(n.useRef)(null);return Object(b.jsxs)("div",{className:"flex flex-1 flex-col h-full items-center overflow-auto",onDrop:function(e){var t=e.dataTransfer.getData("block_index"),r=e.dataTransfer.getData("drag_index");if(t)i([].concat(Object(F.a)(s),[parseInt(t)]));else if(r&&a.current){var n=parseInt(r),o=function(e,t,r){var n=t,s=Number.POSITIVE_INFINITY;return w(e).forEach((function(e,i){if(i!==t){var o=e.getBoundingClientRect(),c=Math.abs(r-o.top);c<s&&(s=c,n=i)}})),n}(a.current,n,e.clientY);i(function(e,t,r){var n=e[t],s=e.slice();return s.splice(t,1),s.splice(r,0,n),s}(s,parseInt(r),o))}},onDragOver:function(e){e.preventDefault()},children:[Object(b.jsxs)("div",{className:"self-end",children:[Object(b.jsx)("button",{className:"p-3 m-1 border rounded-full cursor-pointer active:bg-gray-100",onClick:function(){i([]),t.current&&(c({count:1}),w(t.current).forEach((function(e){e.style.removeProperty("transform")})))},children:Object(b.jsx)(O,{name:"trash",size:20,className:"text-red-600 "})}),Object(b.jsx)("button",{className:"p-3 m-1 self-end border rounded-full cursor-pointer active:bg-gray-100",onClick:function(){L(s,m,"flag",t)},children:Object(b.jsx)(O,{name:"flag",size:20,className:"text-green-600 "})})]}),Object(b.jsx)("div",{ref:a,children:s.map((function(e,t){return m[e](t,!0).render()}))})]})}function M(e){var t=e.className,r=void 0===t?"":t;return console.log(r),Object(b.jsx)("svg",{className:r,xmlns:"http://www.w3.org/2000/svg",width:"95.17898101806641",height:"100.04156036376953",viewBox:"0.3210171699523926 0.3000000357627869 95.17898101806641 100.04156036376953",version:"1.1",xmlSpace:"preserve",children:Object(b.jsx)("g",{children:Object(b.jsx)("g",{id:"Page-1",stroke:"none",fillRule:"evenodd",children:Object(b.jsx)("g",{id:"costume1",children:Object(b.jsxs)("g",{id:"costume1.1",children:[Object(b.jsxs)("g",{id:"tail",children:[Object(b.jsx)("path",{d:"M 21.9 73.8 C 19.5 73.3 16.6 72.5 14.2 70.3 C 8.7 65.4 7 57.3 3.2 59.4 C -0.7 61.5 -0.6 74.6 11.6 78.6 C 15.8 80 19.6 80 22.7 79.9 C 23.5 79.9 30.4 79.2 32.8 75.8 C 35.2 72.4 33.5 71.5 32.7 71.1 C 31.8 70.6 25.3 74.4 21.9 73.8 Z ",stroke:"#001026",strokeWidth:"1.2",fill:"#FFAB19",strokeLinecap:"round",strokeLinejoin:"round"}),Object(b.jsx)("path",{d:"M 3.8 59.6 C 1.8 60.2 0.8 64.4 1.8 67.9 C 2.8 71.4 4.4 73.2 5.7 74.5 C 5.5 73.8 5.1 71.6 6.8 70.3 C 8.9 68.6 12.6 69.5 12.6 69.5 C 12.6 69.5 9.5 65.7 7.9 63 C 6.3 60.7 5.8 59.2 3.8 59.6 Z ",id:"detail",fill:"#FFFFFF",strokeWidth:"1"})]}),Object(b.jsx)("path",{d:"M37.7,81.5 C35.9,82.7 29.7,87.1 21.8,89.6 L21.4,89.7 C21,89.8 20.8,90.3 21,90.7 C22.7,93.1 25.8,97.9 20.3,99.6 C15,101.3 5.1,87.2 9.3,83.5 C11.2,82.1 12.9,82.8 13.8,83.2 C14.3,83.4 14.8,83.4 15.3,83.3 C16.5,82.9 18.7,82.1 20.4,81.2 C24.7,79 25.7,78.1 27.7,76.6 C29.7,75.1 34.3,71.4 38,74.6 C41.2,77.3 39.4,80.3 37.7,81.5 Z",id:"leg",stroke:"#001026",strokeWidth:"1.2",fill:"#FFAB19",strokeLinecap:"round",strokeLinejoin:"round"}),Object(b.jsx)("path",{d:"M53.6,60.7 C54.1,61.1 60.2,68.3 62.2,66.5 C64.6,64.4 67.9,60.3 71.5,63.6 C75.1,66.9 68.3,72.5 65.4,74 C58.5,77.1 52.9,71.2 51.7,69.6 C50.5,68 48.4,65.3 48.4,62.7 C48.5,59.9 51.9,59.2 53.6,60.7 Z",id:"arm",stroke:"#001026",strokeWidth:"1.2",fill:"#FFAB19",strokeLinecap:"round",strokeLinejoin:"round"}),Object(b.jsxs)("g",{id:"body-and-leg",children:[Object(b.jsx)("path",{d:"M 46.2 76.7 C 47.4 75.8 48.6 74.3 50.2 72 C 51.5 70.1 52.9 66.4 52.9 66.4 C 53.8 63.9 54.4 59.1 51.1 59.2 C 48.9 59.3 46.9 59 43.5 58.5 C 37.5 57.3 36.4 56.5 33.9 60.6 C 31.2 65.4 24.3 68.9 32.8 77.2 C 32.8 77.2 37.7 81 43.6 86.8 C 47.6 90.7 53.9 96.3 56.1 98.2 C 56.6 98.6 57.2 98.8 57.8 98.9 C 67.5 99.8 74.7 98.8 74.7 94.5 C 74.7 87.3 60.4 89.8 60.4 89.8 C 60.4 89.8 55.8 85.9 53.7 84 L 46.2 76.7 Z ",id:"body",stroke:"#001026",strokeWidth:"1.2",fill:"#FFAB19",strokeLinecap:"round",strokeLinejoin:"round"}),Object(b.jsx)("path",{d:"M 50.6 70 C 50.6 70 52.5 67.5 48.2 64.8 C 43.7 61.9 42 65.1 40.2 67.5 C 38.2 70.6 40.2 72.1 42.2 73.9 C 43.8 75.4 45.3 76.6 45.3 76.6 C 45.3 76.6 48.4 74.5 50.6 70 Z ",id:"tummy",fill:"#FFFFFF",strokeWidth:"1"})]}),Object(b.jsx)("path",{d:"M30.2,68.4 C32.4,71.2 35.8,74.7 31.5,77.6 C25.6,80.9 20.7,70.9 19.7,67.4 C18.8,64.3 21.4,62.3 23.6,60.6 C27.9,57.5 31.5,54.7 35.5,56.2 C40.5,58 36.9,62 34.4,63.8 C32.9,64.9 31.4,66.1 30.3,66.8 C30,67.3 29.9,67.9 30.2,68.4 Z",id:"arm",stroke:"#001026",strokeWidth:"1.2",fill:"#FFAB19",strokeLinecap:"round",strokeLinejoin:"round"}),Object(b.jsxs)("g",{id:"head",children:[Object(b.jsx)("path",{d:"M 53.1 9 C 50.8 8.6 48.4 8.4 45.6 8.6 C 40.9 8.8 36.4 10.5 36.4 10.5 L 24.3 2.6 C 23.9 2.4 23.4 2.7 23.5 3.1 L 25.6 21 C 26.2 20.2 15 33.8 22.1 45.2 C 29.2 56.6 44.3 61.7 63.1 58 C 81.9 54.3 86.3 43.5 85.1 37.8 C 83.9 32.1 76.8 30 76.8 30 C 76.8 30 76.7 25.5 73.5 20 C 71.6 16.7 65.2 12 65.2 12 L 62.6 1.3 C 62.5 0.9 62 0.8 61.7 1 L 53.1 9 Z ",stroke:"#001026",strokeWidth:"1.2",fill:"#FFAB19"}),Object(b.jsx)("path",{d:"M 76.5 30.4 C 76.5 30.4 83.4 32.2 84.6 37.9 C 85.8 43.6 81 53.9 62.4 57.5 C 38.2 62.5 26.7 48.1 33.4 37.5 C 40.1 26.8 51.6 35.9 60 35.3 C 67.2 34.8 68 28.5 76.5 30.4 Z ",id:"face",fill:"#FFFFFF",strokeWidth:"1"}),Object(b.jsx)("path",{d:"M 45 41.1 C 45 40.7 45.4 40.4 45.8 40.5 C 47.7 41.2 53.1 42.8 59.1 43.2 C 64.5 43.5 67.7 43.2 69.2 42.9 C 69.7 42.8 70.1 43.3 69.9 43.8 C 69 46.5 65.2 54 54.7 53.4 C 45.6 52.4 44.7 46 45 41.1 Z ",id:"mouth",stroke:"#001026",strokeWidth:"1.2",fill:"#FFFFFF",strokeLinecap:"round",strokeLinejoin:"round"}),Object(b.jsx)("path",{d:"M 83 35.4 C 83 35.4 90.2 35.3 94.9 31.5 ",id:"whisker",stroke:"#001026",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),Object(b.jsx)("path",{d:"M 83.4 41.3 C 83.4 41.3 87.3 43.2 93.6 42.7 ",id:"whisker",stroke:"#001026",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),Object(b.jsx)("path",{d:"M 59.6 32.7 C 61.7 32.7 63.9 32.9 64 33.6 C 64.1 35 62.6 37.8 61 37.9 C 59.2 38.1 55 35.6 55 34 C 54.9 32.8 57.6 32.7 59.6 32.7 Z ",id:"nose",stroke:"#001026",strokeWidth:"1.2",fill:"#001026",strokeLinecap:"round",strokeLinejoin:"round"}),Object(b.jsx)("path",{d:"M 14.6 31.2 C 14.6 31.2 23.2 34 26.7 37.1 ",id:"whisker",stroke:"#001026",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),Object(b.jsx)("path",{d:"M 15.3 41.2 C 15.3 41.2 22.7 42.3 27 40.6 ",id:"whisker",stroke:"#001026",strokeWidth:"1.2",strokeLinecap:"round",strokeLinejoin:"round",fill:"none"}),Object(b.jsxs)("g",{id:"eye",children:[Object(b.jsx)("path",{d:"M 71.4 21 C 74.3 25.5 74.4 30.6 71.6 32.4 C 68.8 34.2 64.2 32.1 61.2 27.6 C 58.3 23.1 58.2 18 61 16.2 C 63.8 14.3 68.5 16.5 71.4 21 Z ",id:"pupil",stroke:"#001026",strokeWidth:"1.2",fill:"#FFFFFF",strokeLinecap:"round",strokeLinejoin:"round"}),Object(b.jsx)("path",{d:"M 71 26.7 C 71 27.8 70.2 28.7 69.2 28.7 C 68.2 28.7 67.4 27.8 67.4 26.7 C 67.4 25.6 68.2 24.7 69.2 24.7 C 70.2 24.7 71 25.6 71 26.7 ",id:"pupil",fill:"#001026",strokeWidth:"1"})]}),Object(b.jsxs)("g",{id:"eye",children:[Object(b.jsx)("path",{d:"M 46.6 23.8 C 49.6 28.2 49.4 33.6 46.7 35.5 C 43.4 37.4 39 36 36 31.6 C 32.9 27.2 32.7 21.5 35.8 19.3 C 38.9 17 43.6 19.4 46.6 23.8 Z ",stroke:"#001026",strokeWidth:"1.2",fill:"#FFFFFF",strokeLinecap:"round",strokeLinejoin:"round"}),Object(b.jsx)("path",{d:"M 46 29.6 C 46 30.7 45.2 31.6 44.2 31.6 C 43.2 31.6 42.4 30.7 42.4 29.6 C 42.4 28.5 43.2 27.6 44.2 27.6 C 45.2 27.7 46 28.5 46 29.6 ",id:"pupil",fill:"#001026",strokeWidth:"1"})]})]})]})})})})})}function W(e){for(var t=e.stageRef,r=d().code,n=u(),s=n.sprites,i=n.setSprites,o=[],c=0;c<s.count;c++)o.push(Object(b.jsx)(M,{className:"transition-all duration-700"},c));return Object(b.jsxs)("div",{className:"w-full",children:[Object(b.jsx)("div",{className:"flex justify-end",children:Object(b.jsx)("button",{className:"p-3 m-1 border rounded-full cursor-pointer active:bg-gray-100",onClick:function(){i({count:s.count+1})},children:Object(b.jsx)(O,{name:"clone",size:20,className:"text-yellow-400 "})})}),Object(b.jsx)("div",{ref:t,className:"self-start p-2",onClick:function(){L(r,m,"sprite",t)},children:o})]})}function E(){var e=Object(n.useState)([]),t=Object(c.a)(e,2),r=t[0],s=t[1],i=Object(n.useState)({count:1}),o=Object(c.a)(i,2),d=o[0],u=o[1],j=Object(n.useRef)(null);return Object(b.jsx)("div",{className:"bg-blue-100 pt-6 font-sans",children:Object(b.jsx)("div",{className:"h-screen overflow-hidden flex flex-row  ",children:Object(b.jsx)(a.Provider,{value:{code:r,setCode:s},children:Object(b.jsxs)(l.Provider,{value:{sprites:d,setSprites:u},children:[Object(b.jsxs)("div",{className:"flex-1 h-screen overflow-hidden flex flex-row bg-white border-t border-r border-gray-200 rounded-tr-xl mr-2",children:[Object(b.jsx)(y,{})," ",Object(b.jsx)(N,{stageRef:j})]}),Object(b.jsx)("div",{className:"w-1/3 h-screen overflow-hidden flex flex-row bg-white border-t border-l border-gray-200 rounded-tl-xl ml-2",children:Object(b.jsx)(W,{stageRef:j})})]})})})})}var S=function(e){e&&e instanceof Function&&r.e(3).then(r.bind(null,19)).then((function(t){var r=t.getCLS,n=t.getFID,s=t.getFCP,i=t.getLCP,o=t.getTTFB;r(e),n(e),s(e),i(e),o(e)}))};o.a.render(Object(b.jsx)(s.a.StrictMode,{children:Object(b.jsx)(E,{})}),document.getElementById("root")),S()}},[[18,1,2]]]);
//# sourceMappingURL=main.781ad487.chunk.js.map