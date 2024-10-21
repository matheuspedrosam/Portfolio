class ScrollToTopBtn extends HTMLElement {
    connectedCallback(){
        this.innerHTML = `
            <span class="material-symbols-rounded">arrow_warm_up</span>
        `

        this.classList.add("hide");

        this.addEventListener("click", () => window.scrollTo({
            left: 0,
            top: 0,
            behavior: "smooth"
        }))
    }
}

customElements.define("scroll-to-top-btn", ScrollToTopBtn);