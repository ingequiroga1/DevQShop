if(!self.define){let s,e={};const i=(i,n)=>(i=new URL(i+".js",n).href,e[i]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=i,s.onload=e,document.head.appendChild(s)}else s=i,importScripts(i),e()})).then((()=>{let s=e[i];if(!s)throw new Error(`Module ${i} didn’t register its module`);return s})));self.define=(n,r)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let u={};const o=s=>i(s,l),t={module:{uri:l},exports:u,require:o};e[l]=Promise.all(n.map((s=>t[s]||o(s)))).then((s=>(r(...s),u)))}}define(["./workbox-5ffe50d4"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/authLayout-xAqDBOk6.js",revision:null},{url:"assets/browser-BMScsH7c.js",revision:null},{url:"assets/confirmPass-BoVWl-wD.js",revision:null},{url:"assets/dashboardLayout--THKBXBu.js",revision:null},{url:"assets/dashboardLayout-BVR7Gjy_.css",revision:null},{url:"assets/homePage-u80TafDN.js",revision:null},{url:"assets/html2canvas.esm-CBrSDip1.js",revision:null},{url:"assets/index-BHT4AnmL.js",revision:null},{url:"assets/index-DBGfkfUC.css",revision:null},{url:"assets/index.es-BKClPiDD.js",revision:null},{url:"assets/inventarioPage-BpnJR7zu.css",revision:null},{url:"assets/inventarioPage-Cy_r6VAS.js",revision:null},{url:"assets/pedidos-CUH0op-_.js",revision:null},{url:"assets/productoService-y4-AcEEO.js",revision:null},{url:"assets/purify.es-a-CayzAK.js",revision:null},{url:"assets/registerPage-DxGKJtFn.js",revision:null},{url:"assets/ventasPage-d0LQ7Zvv.js",revision:null},{url:"assets/ventasPage-DvDwOg-i.css",revision:null},{url:"assets/ventasService-_KBJXKeC.js",revision:null},{url:"index.html",revision:"c2472a387ea53665a5ce5789da6baed4"},{url:"registerSW.js",revision:"1872c500de691dce40960bb85481de07"},{url:"icon-192x192.png",revision:"e86ed21db46a59c342ccf32384dfa943"},{url:"icon-512x512.png",revision:"d7a1e9676547714cbaa366997183e136"},{url:"manifest.webmanifest",revision:"99c020284aadd756286807130b902a00"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
