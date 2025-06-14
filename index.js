import{S as m,a as p,i as c}from"./assets/vendor-CrlV4O_2.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&i(a)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const d=document.querySelector(".gallery"),u=document.querySelector(".loader");function h(s){return s.map(({largeImageURL:r,webformatURL:o,tags:i,likes:e,views:t,comments:a,downloads:f})=>`<li class="gallery-item">
        <a class="gallery-link" href="${r}">
        <img
      class="gallery-image"
      src="${o}"
      data-source="${r}"
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
  <p class="img-text">${t}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Comments</h3>
  <p class="img-text">${a}</p>
  </div>
  <div class="container-for-desc">
  <h3 class="img-heading">Downloads</h3>
  <p class="img-text">${f}</p>
  </div>
  </div>
</li>`).join("")}function g(){d.innerHTML=""}function y(){u.style.display="block"}function v(){u.style.display="none"}const b=new m(".gallery a",{captionsData:"alt",captionDelay:250}),L="50744753-f362bf6174861c1f1e53027f5";function w(s){y();const r=`"${s}"`,o=encodeURIComponent(r);return p.get(`https://pixabay.com/api/?key=${L}&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`)}const n=document.querySelector('[name="search-text"]'),l=document.querySelector(".form");n.addEventListener("keydown",()=>{n.style.borderColor="#4E75FF"});n.addEventListener("blur",()=>{n.style.borderColor="#808080"});l.addEventListener("submit",s=>{if(s.preventDefault(),n.value.trim()===""){c.show({message:"Please, write correct name of photo",position:"topRight",color:"red"});return}g(),w(n.value.trim()).then(r=>{const o=r.data.hits;if(o.length===0){c.show({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}const i=h(o);d.insertAdjacentHTML("beforeend",i),b.refresh()}).catch(r=>{c.show({message:`Sorry, something went wrong: ${r}`,position:"topRight",color:"red"})}).finally(()=>{v()}),l.reset()});
//# sourceMappingURL=index.js.map
