import{a as r}from"./chunk-LF6WF6V2.mjs";import{b as o}from"./chunk-XJVIZ2Q2.mjs";var t="http://127.0.0.1:8001";function n(){return o(this,null,function*(){if(!window.framerRealtimeSocket)try{console.log(`[framer-live-esm] Connecting on ${t}`);let e=yield r.connect(t);console.log("[framer-live-esm] Created socket"),window.framerRealtimeSocket=e}catch(e){console.error("[framer-live-esm] Error trying to create socket ",e)}})}export{n as a};