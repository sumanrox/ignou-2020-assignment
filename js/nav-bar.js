class navbar extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <nav class="navbar sticky-top navbar-expand-lg navbar-light bg-light">
        <a class="mx-4 navbar-brand pl-2" href="index.html">Axios</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse px-4 navbar-collapse" id="navbarSupportedContent">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="index.html">Home <span class="sr-only">(current)</span></a>
            <a class="nav-item nav-link" href="syllabus.html">Syllabus</a>
            <a class="nav-item nav-link" href="schedule.html">Schedule</a>
            <a class="nav-item nav-link" href="registration.html">Registration</a>
          </div>
        </div>
        </nav>
        `;
    }
}

window.customElements.define('nav-bar',navbar);