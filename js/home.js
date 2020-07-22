class home extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <section class="jumbotron m-0 row">
            <div class="col-md-8">
                <h4 class="display-4">
                    Welcome to Axios,
                </h4>
                <p class="lead mx-2">
                    We make amazing experiences possible
                </p>
                <hr class="my-5">
                <p><strong>Axios</strong> has helped more than <strong>2 Million Students</strong> worldwide,</p>
                <p>Bringing an immersive and <strong>safe examination</strong> system for any institute is now possible via Axios,
                    <strong>24/7 Customer Support</strong> with fault tollerant infrastructure, makes us the <strong>best online examination system</strong>
                    worldwide
                </p>
                <hr class="my-5">
                <p>Established in 2015, we have grown from 15 employees to 200+ workforce, engaging on different
                    digital product developement, management and services.
                    Axios still continues to be a top choice for many of our clients in terms of verstailty, compliant
                    and innovative eco-system
                </p>
                </div>
                <img class="img-fluid col-md-4" src="https://images.unsplash.com/photo-1554469384-e58fac16e23a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80" alt="">
            </section>
        `;
    }
}

window.customElements.define('home-content',home);