import{a as u,S as d,i as n}from"./assets/vendor-GgwdjDaY.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&a(i)}).observe(document,{childList:!0,subtree:!0});function t(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=t(e);fetch(e.href,r)}})();const f="55987378-0f15016f4214d4089a58d5c81";function p(s){return u.get("https://pixabay.com/api/",{params:{key:f,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(o=>o.data)}const c=document.querySelector(".gallery"),m=new d(".gallery a",{captionsData:"alt",captionDelay:250});function h(s){const o=s.map(t=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${t.largeImageURL}">
          <img
            class="gallery-image"
            src="${t.webformatURL}"
            alt="${t.tags}"
          />
        </a>

        <div class="info">
          <p><b>Likes</b> ${t.likes}</p>
          <p><b>Views</b> ${t.views}</p>
          <p><b>Comments</b> ${t.comments}</p>
          <p><b>Downloads</b> ${t.downloads}</p>
        </div>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",o),m.refresh()}function y(){c.innerHTML=""}function g(){document.querySelector(".loader").classList.remove("hidden")}function b(){document.querySelector(".loader").classList.add("hidden")}const l=document.querySelector(".form");l.addEventListener("submit",s=>{s.preventDefault();const o=s.target.elements["search-text"].value.trim();if(!o){n.error({message:"Please fill in the field!",position:"topRight"});return}y(),g(),p(o).then(t=>{if(t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(t.hits)}).catch(t=>{n.error({message:"Something went wrong!",position:"topRight"}),console.log(t)}).finally(()=>{b(),l.reset()})});
//# sourceMappingURL=index.js.map
