import "./form.css";
const form = () => {
  return (
    <div>
      <div className="form-r">
        <form action="" className="form-mir">
          <h1>Reach Us</h1>
          <div>
    <div className="form-ir"><label for="itOffering">Select One:</label></div>
    <div className="input-s">
      <input type="radio" name="itOffering" value="itOffering" />
      <label for="itOffering">IT Offfering</label>

      <input type="radio"name="contact" value="partnership" />
      <label for="partnershizp">Partnership</label>

      <input type="radio"name="contact" value="digitalmarketing" />
      <label for="digitalmarketing">Digital Marketing</label>
    </div>
  </div>
          <div className="form-ir">
            <label htmlFor="Name">Name:</label>
           <div className="input">
            <input
              type="text"
              autoComplete="off"
              value=""
              placeholder="Enter Your Name"
              name="name"
              id="name"
            ></input></div>
          </div>
          <div className="form-ir">
            <label htmlFor="Designation">Designation:</label>
            <div className="input">
            <input
              type="text"
              autoComplete="off"
              value=""
              placeholder="Enter Your Designation"
              name="designation"
              id="designation"
            ></input></div>
          </div>
          <div className="form-ir">
            <label htmlFor="Org Name">Org Name:</label>
            <div className="input">
            <input
              type="text"
              autoComplete="off"
              value=""
              placeholder="Org Name"
              name="org-name"
              id="org-name"
            ></input></div>
          </div>
          <div className="form-ir">
            <label htmlFor="Email">Email:</label>
            <div className="input">
            <input
              type="email"
              autoComplete="off"
              value=""
              placeholder="E-mail Address"
              name="email"
              id="email"
            ></input></div>
          </div>
          <div className="form-ir">
            <label htmlFor="Phone No">Phone No:</label>
            <div className="input">
            <input
              type="number"
              autoComplete="off"
              value=""
              placeholder="Mobile Number"
              name="number"
              id="number"
            ></input></div>
          </div>
          <div className="form-ir">
            <label htmlFor="services">Services:</label>
            <div className="input">
            <select>
              <option> Select Services</option>
              <option value="Mercedes"> Mercedes</option>
              <option value="Audi"> Audi</option>
              <option value="Skoda"> Skoda</option>
            </select></div>
          </div>
          <div className="form-ir">
            <label htmlFor="Name">City:</label>
            <div className="input">
            <input
              type="text"
              autoComplete="off"
              value=""
              placeholder="Enter Your City"
              name="city"
              id="city"
            ></input></div>
          </div>
          <div className="form-ir">
            <label htmlFor="Message">Message:</label>
            <div className="input">
            <textarea placeholder="Message"></textarea></div>
          </div>
          
          <div className="button-sub">
            <button type="submit">Submit</button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default form;
