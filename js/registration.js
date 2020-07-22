class register extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <div class="row mr-0">
        <img src="./img/img.jpg" alt="trees" class="col-md-6 col-sm-6 d-none d-lg-block d-xl-block d-md-block col-xs-12 m-0 img-class-reg">
        <form class="col-md-6 col-sm-6 col-xs-12 p-3 align-items-center">
        <h3 class="display-4 my-4">Exam Registration</h3>
            <div class="form-row mx-0">
              <div class="form-group col-md-6">
                <label for="inputEmail4">First Name</label>
                <input type="text" class="form-control" placeholder="John">
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Last Name</label>
                <input type="text" class="form-control" placeholder="Doe">
              </div>
            </div>
            <div class="form-row mx-0">
              <div class="form-group col-md-6">
                <label for="inputEmail4">Email</label>
                <input type="email" class="form-control" id="inputEmail4" placeholder="Email">
              </div>
              <div class="form-group col-md-6">
                <label for="inputPassword4">Password</label>
                <input type="password" class="form-control" id="inputPassword4" placeholder="Password">
              </div>
            </div>
            <div class="form-row mx-0">
            <div class="form-group col-md-6">
                <label class="control-label" for="date">Date of Birth</label>
              <input class="form-control" id="date" name="date" placeholder="MM/DD/YYY" type="date"/>
            </div>
            <div class="form-group col-md-6">
              <label for="inputAddress2">Exam Code</label>
              <input type="text" class="form-control" placeholder="MCSL016">
            </div>
            </div>
            <button type="submit" class="btn col-md-6 mx-0 btn-primary">Register</button>
          </form>
        </div>
        `;
    }
}

window.customElements.define('register-content',register)