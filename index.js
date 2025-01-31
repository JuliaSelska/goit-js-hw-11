import{S as u,i}from"./assets/vendor-3258E9zE.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const l of t.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&a(l)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f=r=>`
    <li class="gallery-card">
      <a class="gallery-link"  href="${r.largeImageURL}">
        <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" /> 
        <ul class="text-info">
          <li class="image-info">
            <h4>Likes</h4>
            <p>${r.likes}</p>
          </li>
          <li class="image-info">
            <h4>Views</h4>
            <p>${r.views}</p>
          </li>
          <li class="image-info">
            <h4>Comments</h4>
            <p>${r.comments}</p>
          </li>
          <li class="image-info">
            <h4>Downloads</h4>
            <p>${r.downloads}</p>
        </ul>
        </a>
    </li>
  `,m=r=>{const s=new URLSearchParams({q:r,key:"48482195-738aed504c51f4c8c5e491b18",image_type:"photo",orientation:"horizontal",safesearch:!0});return fetch(`https://pixabay.com/api/?${s}`).then(o=>{if(!o.ok)throw new Error(o.status);return o.json()})},n=document.querySelector(".js-search-form"),c=document.querySelector(".js-gallery"),d=new u(".js-gallery a"),h=r=>{const s=document.querySelector(".loader");r.preventDefault();const o=r.currentTarget.elements.user_query.value.trim();if(o===""){i.error({title:"",message:"Please enter your request",messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040"});return}document.querySelector(".loader").classList.remove("hidden"),m(o).then(a=>{if(a.total===0){i.error({title:"",message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#fafafb",position:"topRight",backgroundColor:"#ef4040"}),c.innerHTML="",n.reset();return}const e=a.hits.map(t=>f(t)).join("");c.innerHTML=e,d.refresh()}).catch(a=>{console.log(a)}).finally(()=>{s.classList.add("hidden")})};n.addEventListener("submit",h);
//# sourceMappingURL=index.js.map
