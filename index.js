import{a as l,S as d,i as f}from"./assets/vendor-5YrzWRhu.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();l.defaults.baseURL="https://pixabay.com";function m(i){return l.get("/api/",{params:{key:"51813911-adef45491f9b881200172b027",q:i,image_type:"photo",orientation:"horizontal",safesearch:"true"}}).then(t=>t.data).catch(function(t){console.log(t)})}const c=document.querySelector(".gallery"),u=document.querySelector(".loader");function p(i){const t=h(i);c.innerHTML=t,g.refresh()}function h(i){return i.map(y).join("")}function y({likes:i,views:t,comments:n,downloads:s,largeImageURL:e,webformatURL:r,tags:o},b){return`<li class="gallery-item"><a class="gallery-link" href="${e}">
          <img class="image-item" src="${r}" alt="${o}" /></a>
          <div class="text-item">
            <div class="single-text">
              <h5>Likes</h5>
              <p>${i}</p>
            </div>
            <div class="single-text">
              <h5>Views</h5>
              <p>${t}</p>
            </div>
            <div class="single-text">
              <h5>Comments</h5>
              <p>${n}</p>
            </div>
            <div class="single-text">
              <h5>Downloads</h5>
              <p>${s}</p>
            </div>
          </div>
        </li>`}let g=new d(".gallery-link",{captions:!0,captionsData:"alt",captionDelay:250});function v(){c.innerHTML=""}function L(){u.style.display="flex"}function a(){u.style.display="none"}const x=document.querySelector(".js-form");document.addEventListener("DOMContentLoaded",i=>{a()});x.addEventListener("submit",i=>{i.preventDefault(),v(),L(),m(i.currentTarget.elements["search-text"].value.trim()).then(t=>{t.hits.length!=0?(p(t.hits),a()):(f.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!"}),a())}).catch(t=>console.log(t))});
//# sourceMappingURL=index.js.map
