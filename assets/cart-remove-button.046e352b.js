class e extends HTMLElement{constructor(){super(),this.addEventListener("click",t=>{t.preventDefault(),(this.closest("cart-items")||this.closest("cart-drawer-items")).updateQuantity(this.dataset.index,0)})}}customElements.define("cart-remove-button",e);
//# sourceMappingURL=cart-remove-button.046e352b.js.map
