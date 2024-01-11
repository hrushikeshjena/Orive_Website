import "./Navbar.css";
import Logo from "../../assets/logo.png";
import phone from "../../assets/phone.png";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navbar">
      <Link to="/">
        <img src={Logo} alt="" className="logo" />
      </Link>
      <ul>
        <Link to="/">
          {" "}
          <li>Adobe Leaf</li>
        </Link>
        <Link to="/who">
          <li>Who We Are</li>
        </Link>
        <li className="dropdown">
          Resources
          <ul className="dropdown-content">
            <li>Submenu Item 1</li>
            <li>Submenu Item 2</li>
          </ul>
        </li>
        <Link to="/journal">
          <li className="dropdown">
            Journals
            <ul className="dropdown-content">
            <Link to="/journalD"> <li>Journal Details</li> </Link>
              <li>Submenu Item 2</li>
            </ul>
          </li>
        </Link>
        <Link to="/reachus">
          <li>Reach Us</li>
        </Link>
      </ul>
      <div className="contact-num">
        <img src={phone} alt="" className="contact-img" />
        <div className="phoneNo">
          <p>+91 9777798142</p>
          <p className="call">Make a Call</p>
        </div>
      </div>

      <div className="button-connect" type="button">
        <button>Let's Connect! </button>
      </div>
    </div>
  );
};

export default Navbar;
