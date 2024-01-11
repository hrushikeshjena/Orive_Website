import "./ReachUs.css";
import Dot from "../../assets/Ellips-e.png";
import line from "../../assets/Vector 2.png";
import line1 from "../../assets/Vector 1.png";
const handleInput = () => {};
const ReachUs = () => {
  return (
    <div>
      <div className="Bann-y">
        <div className="top-main-y">
          <div className="who-y">
            <h1>Reach Us</h1>

            <div className="home-about-dot-y">
              <p>Home</p>
              <img src={Dot} alt="dot" />
              <p style={{ color: "#f76c24" }}>Reach Us</p>
            </div>
          </div>
        </div>
      </div>
      <div className="journal-blog-y">
        <div className="form-y">
          <form action="" className="form-iy">
            <h1>Reach Us</h1>

            <div className="form-m">
              <label htmlFor="name"></label>
              <input
                type="text"
                autoComplete="off"
                value=""
                onChange={handleInput}
                placeholder="Enter Your Name"
                name="name"
                id="name"
              ></input>
            </div>
            <div className="form-m">
              <label htmlFor="email"></label>
              <input
                type="email"
                autoComplete="off"
                value=""
                onChange={handleInput}
                placeholder="E-mail Address"
                name="email"
                id="email"
              ></input>
            </div>
            <div className="form-m">
              <label htmlFor="number"></label>
              <input
                type="number"
                autoComplete="off"
                value=""
                onChange={handleInput}
                placeholder="Phone Number"
                name="number"
                id="number"
              ></input>
            </div>
            <div className="form-m">
              <select>
                <option> Select Services</option>
                <option value="Mercedes"> Mercedes</option>
                <option value="Audi"> Audi</option>
                <option value="Skoda"> Skoda</option>
              </select>
            </div>
            <div className="form-m">
              <label htmlFor="name"></label>
              <input
                type="text"
                autoComplete="off"
                value=""
                onChange={handleInput}
                placeholder="Message"
                name="name"
                id="name"
              ></input>
            </div>
            <div className="button-sub">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
     
        <div className="midcontact">
            <img src={line1} alt="" />
          </div>
          <div className="contactRight">
            <div className="contactTxt">
              <span className="contactTitle">Address:</span>
              <span className="contactDesc">
                DCB-014, DLF Cyber City Rd, Chandaka Industrial Estate, Patia,
                Bhubaneswar, Odisha 751024,India
              </span>
            </div>
            <img src={line} alt="" />
            <div className="contactTxt">
              <span className="contactTitle">Phone Number:</span>
              <span className="contactDesc">+91-9777798142</span>
            </div>
            <img src={line} alt="" />

            <div className="contactTxt">
              <span className="contactTitle">Email Us:</span>
              <span className="contactDesc">
                {" "}
                orivesolutions@gmail.com
                <br />
                info@orivesolutions.com
              </span>
            </div>
          </div>
      
      </div>
    </div>
  );
};

export default ReachUs;
