import{p as d}from"./utils.d62a6586.js";class i extends HTMLElement{constructor(){super();const e=this.querySelector('[id^="Deferred-Poster-"]');!e||e.addEventListener("click",this.loadContent.bind(this))}loadContent(e=!0){if(d(),!this.getAttribute("loaded")){const t=document.createElement("div");t.appendChild(this.querySelector("template").content.firstElementChild.cloneNode(!0)),this.setAttribute("loaded",!0);const r=this.appendChild(t.querySelector("video, model-viewer, iframe"));e&&r.focus()}}}customElements.define("deferred-media",i);export{i as D};
//# sourceMappingURL=deferred-media.1611af0f.js.map
