import React from "react";
import "./Footer.css";
import Logo from "../../assets/Logo.png";
import Facebook from "../../assets/faceb.png";
import Twitter from "../../assets/Twitt.png";
import Instagram from "../../assets/Insta.png";
import LinkedIn from "../../assets/Linked.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-item">
        <div className="footer-contact">
          <h4>Contact Info</h4>
          <div className="p-tag">
            <span>Address:</span>
            <p id="contact-address">
              DCB-014, DLF Cybercity Rd, Chandaka Industrial Estate, Patia,
              Bhubaneswar, Odisha 751024, India
            </p>
          </div>
          <div className="p-tag">
            <span>Phone: </span>
            <h6>+91 9777798142</h6>
          </div>
          <div className="p-tag">
            <span>Email:</span>
            <h6>orivesolutions@gmail.com</h6>
          </div>
          <input
            type="text"
            name="email_address_"
            id="ftrEmailInput"
            className="input"
            placeholder="Enter Your email"
          />
          <input type="submit" className="button" value="Subscribe" />
        </div>

        <div className="services">
          <h4>IT Services</h4>
          <ul>
            <li>Bulk SMS</li>
            <br />
            <li>Business StartUp</li>
            <li>Web/App Development</li>
            <li>Enterprise Resources Planning</li>
            <li>Human Resource Management</li>
            <li>Customer Relationship Management</li>
          </ul>
        </div>

        <div className="links">
          <h4>Quick links</h4>
          <ul>
            <li>About</li>
            <li>Blog</li>
            <li>Terms &amp; Conditions</li>
            <li>Privacy Policy</li>
            <li>Help &amp; FAQ</li>
          </ul>
        </div>

        <div className="logo-footer">
          <h1>
            <img src={Logo} alt="" className="logo-image" />
          </h1>
          <p className="footer-p" id="footer-p-id">
            Orive Solutions, we believe in the transformative power of
            technology. Our mission is to revolutionize industries, empower
            business, and enhance lives through cutting-edge IT solutions. Your
            Vision, Our Expertise. Together we Achieve Limitless potential.
          </p>
          <div className="follow-us">
            <h5>Follow Us:</h5>
            <ul>
              <li>
                <a href="https://www.facebook.com/art.com" title="Facebook">
                  <img
                    height={30}
                    src={Facebook}
                    alt=""
                    className="facebook-image"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://plus.google.com/108089796661280870153"
                  title="Google+"
                >
                  <img
                    height={30}
                    src={Twitter}
                    alt=""
                    className="twitter-image"
                  />
                </a>
              </li>
              <li>
                <a href="https://pinterest.com/artdotcom/" target="_blank">
                  <img
                    height={30}
                    src={LinkedIn}
                    alt=""
                    className="linkedin-image"
                  />
                </a>
              </li>
              <li>
                <a target="_blank" href="http://instagram.com/artdotcom/">
                  <img
                    height={30}
                    src={Instagram}
                    alt=""
                    className="instagram-image"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <hr />

      <div className="copyright">
        <p>
          Copyright &copy; 2023 All Rights Reserved by{" "}
          <span>
            <a href="#">Orive Solutions</a>
          </span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
