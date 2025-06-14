import{S as $,a as q,i as l}from"./assets/vendor-CrlV4O_2.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const d=document.querySelector(".gallery"),m=document.querySelector(".loader"),u=document.querySelector(".load-btn");function g(s){return s.map(({largeImageURL:t,webformatURL:r,tags:i,likes:e,views:o,comments:c,downloads:x})=>`<li class="gallery-item">
        <a class="gallery-link" href="${t}">
        <img
      class="gallery-image"
      src="${r}"
      data-source="${t}"
      alt="${i}"
    />
  </a>
  <div class="text-container">
  <div class="container-for-desc">
  <h3 class="img-heading">Likes</h3>
  <p class="img-text">${e}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Views</h3>
  <p class="img-text">${o}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Comments</h3>
  <p class="img-text">${c}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Downloads</h3>
  <p class="img-text">${x}</p>
  </div>
  </div>
</li>`).join("")}function P(){d.innerHTML=""}function E(){m.style.display="block"}function f(){m.style.display="none"}const p=new $(".gallery a",{captionsData:"alt",captionDelay:250});function M(){u.style.display="block"}function y(){u.style.display="none"}const B="50744753-f362bf6174861c1f1e53027f5",v=15;async function w(s,t){try{E();const r=new URLSearchParams({key:B,q:s,page:t,per_page:v,image_type:"photo",orientation:"horizontal",safesearch:!0});return q.get(`https://pixabay.com/api/?${r}`)}catch(r){console.log("Error:",r)}}const a=document.querySelector('[name="search-text"]'),h=document.querySelector(".form");let b=0,L,n=1,S;a.addEventListener("keydown",()=>{a.style.borderColor="#4E75FF"});a.addEventListener("blur",()=>{a.style.borderColor="#808080"});h.addEventListener("submit",s=>{if(s.preventDefault(),a.value.trim()===""){l.show({message:"Please, write correct name of photo",position:"topRight",color:"red"});return}n=1,y(),P(),w(a.value.trim(),n).then(t=>{const r=t.data.hits;if(r.length===0){l.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}const i=g(r);d.insertAdjacentHTML("beforeend",i),b=document.querySelector(".gallery-item").getBoundingClientRect().height,S=Math.ceil(t.data.totalHits/v),M(),p.refresh()}).catch(t=>{l.show({message:`Sorry, something went wrong: ${t}`,position:"topRight",color:"red"})}).finally(()=>{f(),n++}),L=a.value.trim(),h.reset(),console.log(n)});u.addEventListener("click",()=>{n>S?(y(),l.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",color:"blue"})):w(L,n).then(s=>{const t=s.data.hits,r=g(t);d.insertAdjacentHTML("beforeend",r),window.scrollBy({top:b,behavior:"smooth"}),p.refresh()}).catch(s=>{l.show({message:`Sorry, something went wrong: ${s}`,position:"topRight",color:"red"})}).finally(()=>{f(),n++})});
//# sourceMappingURL=index.js.map
