import{M as n}from"./modal-dialog.d553889f.js";import"./utils.d62a6586.js";import"./a11y.88ed79d0.js";customElements.get("quick-add-modal")||customElements.define("quick-add-modal",class extends n{constructor(){super(),this.modalContent=this.querySelector('[id^="QuickAddInfo-"]')}hide(e=!1){const t=document.querySelector("cart-notification")||document.querySelector("cart-drawer");t&&t.setActiveElement(this.openedBy),this.modalContent.innerHTML="",e&&(this.openedBy=null),super.hide()}show(e){e.setAttribute("aria-disabled",!0),e.classList.add("loading"),e.querySelector(".loading-overlay__spinner").classList.remove("hidden"),fetch(e.getAttribute("data-product-url")).then(t=>t.text()).then(t=>{const i=new DOMParser().parseFromString(t,"text/html");this.productElement=i.querySelector('section[id^="MainProduct-"]'),this.preventDuplicatedIDs(),this.removeDOMElements(),this.setInnerHTML(this.modalContent,this.productElement.innerHTML),window.Shopify&&Shopify.PaymentButton&&Shopify.PaymentButton.init(),window.ProductModel&&window.ProductModel.loadShopifyXR(),this.removeGalleryListSemantic(),this.preventVariantURLSwitching(),super.show(e)}).finally(()=>{e.removeAttribute("aria-disabled"),e.classList.remove("loading"),e.querySelector(".loading-overlay__spinner").classList.add("hidden")})}setInnerHTML(e,t){e.innerHTML=t,e.querySelectorAll("script").forEach(i=>{const r=document.createElement("script");Array.from(i.attributes).forEach(o=>{r.setAttribute(o.name,o.value)}),r.appendChild(document.createTextNode(i.innerHTML)),i.parentNode.replaceChild(r,i)})}preventVariantURLSwitching(){this.modalContent.querySelector("variant-radios,variant-selects").setAttribute("data-update-url","false")}removeDOMElements(){const e=this.productElement.querySelector("pickup-availability");e&&e.remove();const t=this.productElement.querySelector("product-modal");t&&t.remove()}preventDuplicatedIDs(){const e=this.productElement.dataset.section;this.productElement.innerHTML=this.productElement.innerHTML.replaceAll(e,`quickadd-${e}`),this.productElement.querySelectorAll("variant-selects, variant-radios").forEach(t=>{t.dataset.originalSection=e})}removeGalleryListSemantic(){const e=this.modalContent.querySelector('[id^="Slider-Gallery"]');!e||(e.setAttribute("role","presentation"),e.querySelectorAll('[id^="Slide-"]').forEach(t=>t.setAttribute("role","presentation")))}});
//# sourceMappingURL=quick-add.19922408.js.map
