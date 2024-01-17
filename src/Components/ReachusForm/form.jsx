import "./form.css";

const form = () => {
  return (
    <div className="pura-form">
      <div className="form-modal">
        <h3 className="fw-bold" class="reach-us-head">
          Reach Us
        </h3>
        <form action="">
          <div>
            <div className="mb-3 name-wa">
              <label>Select One:</label>
              <div class="form-check" style={{marginLeft:'40px'}}>
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label class="form-check-label fw-light" style={{marginRight:'8px'}}>IT Offerings</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label class="form-check-label fw-light" style={{marginRight:'8px'}}>Partnership</label>
              </div>
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="radio"
                  name="flexRadioDefault"
                />
                <label class="form-check-label fw-light">
                  Digital Marketing
                </label>
              </div>
            </div>
          </div>
          <div class="mb-3 name-wa">
            <label>Name:</label>
            <input
              type="text"
              class="form-control mx-3"
              placeholder="Enter your name"
            />
          </div>
          <div class="mb-3 name-wa">
            <label class="form-label">Designation:</label>
            <input
              type="text"
              class="form-control mx-3"
              placeholder="Designation:"
            />
          </div>
          <div class="mb-3 name-wa">
            <label class="form-label">Org Name:</label>
            <input
              type="text"
              class="form-control mx-3"
              placeholder="Organisation Name:"
            />
          </div>
          <div class="mb-3 name-wa">
            <label class="form-label">Email</label>
            <input
              type="email"
              class="form-control mx-3"
              placeholder="Email address"
            />
          </div>
          <div class="mb-3 name-wa">
            <label class="form-label">Phone No:</label>
            <input
              type="number"
              class="form-control mx-3"
              placeholder="Phone Number"
            />
          </div>
          <div className="mb-3 name-wa">
            <label>Services:</label>
            <select
              class="form-select form-control mx-3"
              aria-label="Default select example"
            >
              <option selected>Select service</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </select>
          </div>
          <div class="mb-3 name-wa">
            <label class="form-label">Message:</label>
            <textarea
              class="form-control mx-3"
              placeholder="Message"
              style={{height:'100px'}}
            ></textarea>
          </div>
          <div class="mb-3 name-wa">
            <label class="form-label">City:</label>
            <input type="text" class="form-control mx-3" placeholder="City" />
          </div>
          <button className="submit-btn-ru">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default form;
