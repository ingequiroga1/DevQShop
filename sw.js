if(!self.define){let e,s={};const i=(i,r)=>(i=new URL(i+".js",r).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(r,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>i(e,l),u={module:{uri:l},exports:t,require:o};s[l]=Promise.all(r.map((e=>u[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-5ffe50d4"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/authLayout-TDTufBDb.js",revision:null},{url:"assets/browser-CofbRvYU.js",revision:null},{url:"assets/dashboardLayout-B7RqKrx3.js",revision:null},{url:"assets/index-CyaIyury.css",revision:null},{url:"assets/index-DEselH1G.js",revision:null},{url:"assets/inventarioPage-BZOR4W4S.js",revision:null},{url:"assets/registerPage-hv1c0I1J.js",revision:null},{url:"assets/ventasPage-CVbrUjxZ.js",revision:null},{url:"index.html",revision:"621d02907ab18f9844e5c1680905a64c"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icon-192x192.png",revision:"e86ed21db46a59c342ccf32384dfa943"},{url:"icon-512x512.png",revision:"d7a1e9676547714cbaa366997183e136"},{url:"manifest.webmanifest",revision:"99c020284aadd756286807130b902a00"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
