var n=Object.defineProperty;var C=Object.getOwnPropertyDescriptor;var i=Object.getOwnPropertyNames;var u=Object.prototype.hasOwnProperty;var a=(t,o)=>{for(var e in o)n(t,e,{get:o[e],enumerable:!0})},m=(t,o,e,p)=>{if(o&&typeof o=="object"||typeof o=="function")for(let r of i(o))!u.call(t,r)&&r!==e&&n(t,r,{get:()=>o[r],enumerable:!(p=C(o,r))||p.enumerable});return t};var f=t=>m(n({},"__esModule",{value:!0}),t);var d={};a(d,{Button:()=>s});module.exports=f(d);var l=require("framer"),y=require("react/jsx-runtime"),s=t=>(0,y.jsx)("button",{className:"bg-violet-700 p-3 text-green-200 font-bold text-xl rounded-sm",children:t.title}),c={title:{type:l.ControlType.String,defaultValue:"Hello World"}};s.propertyControls=c;