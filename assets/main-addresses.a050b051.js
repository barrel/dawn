var o=Object.defineProperty;var l=(n,e,t)=>e in n?o(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var d=(n,e,t)=>(l(n,typeof e!="symbol"?e+"":e,t),t);const s={customerAddresses:"[data-customer-addresses]",addressCountrySelect:"[data-address-country-select]",addressContainer:"[data-address]",toggleAddressButton:"button[aria-expanded]",cancelAddressButton:'button[type="reset"]',deleteAddressButton:"button[data-confirm-message]"},r={expanded:"aria-expanded",confirmMessage:"data-confirm-message"};class a{constructor(){d(this,"_handleAddEditButtonClick",({currentTarget:e})=>{this._toggleExpanded(e)});d(this,"_handleCancelButtonClick",({currentTarget:e})=>{this._toggleExpanded(e.closest(s.addressContainer).querySelector(`[${r.expanded}]`))});d(this,"_handleDeleteButtonClick",({currentTarget:e})=>{confirm(e.getAttribute(r.confirmMessage))&&Shopify.postLink(e.dataset.target,{parameters:{_method:"delete"}})});this.elements=this._getElements(),Object.keys(this.elements).length!==0&&(this._setupCountries(),this._setupEventListeners())}_getElements(){const e=document.querySelector(s.customerAddresses);return e?{container:e,addressContainer:e.querySelector(s.addressContainer),toggleButtons:document.querySelectorAll(s.toggleAddressButton),cancelButtons:e.querySelectorAll(s.cancelAddressButton),deleteButtons:e.querySelectorAll(s.deleteAddressButton),countrySelects:e.querySelectorAll(s.addressCountrySelect)}:{}}_setupCountries(){Shopify&&Shopify.CountryProvinceSelector&&(new Shopify.CountryProvinceSelector("AddressCountryNew","AddressProvinceNew",{hideElement:"AddressProvinceContainerNew"}),this.elements.countrySelects.forEach(e=>{const t=e.dataset.formId;new Shopify.CountryProvinceSelector(`AddressCountry_${t}`,`AddressProvince_${t}`,{hideElement:`AddressProvinceContainer_${t}`})}))}_setupEventListeners(){this.elements.toggleButtons.forEach(e=>{e.addEventListener("click",this._handleAddEditButtonClick)}),this.elements.cancelButtons.forEach(e=>{e.addEventListener("click",this._handleCancelButtonClick)}),this.elements.deleteButtons.forEach(e=>{e.addEventListener("click",this._handleDeleteButtonClick)})}_toggleExpanded(e){e.setAttribute(r.expanded,(e.getAttribute(r.expanded)==="false").toString())}}window.onload=()=>{new a};
//# sourceMappingURL=main-addresses.a050b051.js.map
