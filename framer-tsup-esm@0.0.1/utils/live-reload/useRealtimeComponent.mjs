import{a as f}from"../../chunk-2Z3DBAZW.mjs";import"../../chunk-LF6WF6V2.mjs";import{b as u}from"../../chunk-XJVIZ2Q2.mjs";import*as e from"react";import{RenderTarget as o}from"framer";var d=[o.canvas,o.preview].includes(o.current());function w(c,t){if(!d)return c;let[,l]=e.useState(0),r=e.useRef(0),i=e.useRef(null);return e.useLayoutEffect(()=>{let s=n=>u(this,null,function*(){console.log(`[framer-live-esm] Build complete, refreshing ${t}`);let R=yield import(`http://127.0.0.1:8000/${t}.mjs?${r.current}`);r.current++,i.current=R[t.split("/").pop()],l(r.current)}),a=(n=0)=>{if(!window.framerRealtimeSocket){setTimeout(()=>a(n+1),n+500);return}window.framerRealtimeSocket.on("build",s)};return a(),()=>{window.framerRealtimeSocket&&window.framerRealtimeSocket.off("build",s)}},[t]),e.useEffect(()=>{f()},[]),i.current||c}export{d as isDev,w as useRealtimeComponent};