import{d as n,f as s}from"./utils.d62a6586.js";customElements.get("cart-note")||customElements.define("cart-note",class extends HTMLElement{constructor(){super(),this.addEventListener("change",n(t=>{const e=JSON.stringify({note:t.target.value});fetch(`${routes.cart_update_url}`,{...s(),body:e})},300))}});
//# sourceMappingURL=cart-note.96da74bd.js.map
