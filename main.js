(()=>{"use strict";var n={262:(n,a,e)=>{n.exports=e.p+"assets/images/7556ec5440635251dddb.jpg"}},a={};function e(t){var r=a[t];if(void 0!==r)return r.exports;var i=a[t]={exports:{}};return n[t](i,i.exports,e),i.exports}e.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(n){if("object"==typeof window)return window}}(),(()=>{var n;e.g.importScripts&&(n=e.g.location+"");var a=e.g.document;if(!n&&a&&(a.currentScript&&(n=a.currentScript.src),!n)){var t=a.getElementsByTagName("script");t.length&&(n=t[t.length-1].src)}if(!n)throw new Error("Automatic publicPath is not supported in this browser");n=n.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),e.p=n})(),(()=>{const n="https://rickandmortyapi.com/api/character/",a=async(a,e)=>{const t=a?`${n}${a}`:e?`${n}${e}`:`${n}`;try{const n=await fetch(t);return await n.json()}catch(n){console.log("Fetch error:"+n)}},t=()=>location.hash.match(/[^(#\/)]?/g).join("").toLowerCase()||"/";let r="/".match(/[^(\/)]+/g),i="/".split("/");console.log(r),console.log(i),"/".match(/[^(#\/)]?/g),console.log("/".match(/[^(#\/)]?/g).join(""));var c=e(262);const s=()=>`\n    <div class="Error404">\n      <h2>HUY!!!! No encontramos tu direccion</h2>\n      <figure class="figure-Error404">\n        <img src="${c}" alt="Imagen De ERROR">\n      </figure>\n    </div>\n  `,o={"/":async()=>`\n    <div class="Characters">\n      ${(await a()).results.map((n=>`\n          <article class="Character-item">\n          <a href="#/${n.id}/">\n            <img src="${n.image}" alt="${n.name}"/>\n            <h2>${n.name}</h2>\n          </a>\n        </article>\n        `)).join("")}\n\n    </div>\n  `,"/:id":async()=>{let n=t();location.hash.match(/[\d]+/).join("");const e=await a(n);return`\n    <div class="Characters-inner">\n      <article class="Characters-card">\n        <img src="${e.image}" alt="${e.name}"/>\n        <h2>${e.name}</h2>\n      </article>\n      <article class="Characters-card">\n        <h3>Episodios: ${e.episode.length}</h3>\n        <h3>Status: <span>${e.status}</span></h3>\n        <h3>Species: ${e.species}</h3>\n        <h3>Gender:  ${e.gender}</h3>\n        <h3>Origin: ${e.origin.name}</h3>\n        <h3>last location: ${e.location.name}</h3>\n      </article>\n    </div>\n  \n  `},"/contact":"Error404"},l=async()=>{const n=document.getElementById("loading");document.getElementById("header").innerHTML=await'\n    <div class="Header-main">\n        <div class="Header-logo">\n          <h1>\n            <a href="/Volter-JSvanilla">Volter</a>\n          </h1>\n        </div>\n        <div class="Header-nav">\n          <a href="#/about/">about</a>\n        </div>\n    </div>\n  ';let a=t(),e=await(n=>n.length<=3?"/"===n?n:"/:id":`/${n}`)(a),r=o[e]?o[e]:s;n.innerHTML=await r()};window.addEventListener("load",l),window.addEventListener("hashchange",l)})()})();