class schedule extends HTMLElement{
    constructor(){
        super();
        this.innerHTML=`
        <div class="m-5">
        <h4 style="font-weight: 400; font-size : 2em">Exam Schedule</h4>
        <table class="table">
            <thead class="thead-dark">
              <tr>
                <th scope="col">#</th>
                <th scope="col">Course Code</th>
                <th scope="col">Date</th>
                <th scope="col">Venue</th>
                <th scope="col">Fees</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">1</th>
                <td>MCSL-016</td>
                <td>4th August</td>
                <td>9:00 AM</td>
                <td>Rs. 150</td>
              </tr>
              <tr>
                <th scope="row">2</th>
                <td>BCSL-064</td>
                <td>8th August</td>
                <td>9:00 AM</td>
                <td>Rs. 150</td>
              </tr>
              <tr>
                <th scope="row">3</th>
                <td>BCS-064</td>
                <td>12th August</td>
                <td>9:00 AM</td>
                <td>Rs. 150</td>
              </tr>
              <tr>
                <th scope="row">4</th>
                <td>MCS-034</td>
                <td>13th August</td>
                <td>9:00 AM</td>
                <td>Rs. 150</td>
              </tr>
              <tr>
                <th scope="row">5</th>
                <td>MCS-014</td>
                <td>15th August</td>
                <td>9:00 AM</td>
                <td>Rs. 150</td>
              </tr>
              <tr>
                <th scope="row">6</th>
                <td>ECO-02</td>
                <td>19th August</td>
                <td>9:00 AM</td>
                <td>Rs. 150</td>
              </tr>
              <tr>
                <th scope="row">7</th>
                <td>MCSL-057</td>
                <td>25th August</td>
                <td>9:00 AM</td>
                <td>Rs. 150</td>
              </tr>
            </tbody>
          </table>
    </div>
        `;
    }
}

window.customElements.define('schedule-content',schedule);