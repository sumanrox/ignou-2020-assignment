class footerbar extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <div class="footer m-0 row pt-4 d-flex flex-column justify-content-center align-items-center">
            <h5>Developed with ❤️ by Suman Roy</h5>
            <p>©️ Axios 2020</p>
        </div>
        `;
    }
}

window.customElements.define('footer-bar',footerbar);