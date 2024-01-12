import { useRef } from "react";
import Logo from "../../assets/Logo.png"
import phone from "../../assets/phone.png"
import { FaBars } from "react-icons/fa";
import "../Navbar/Navbar.css";

function Navbar() {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  return (
    <header>
		<img src={Logo} alt="" className="logo"></img>
      <nav ref={navRef}>
        <a href="/">Adobe Leaf</a>
        <a href="/who">Who we are</a>
        <div className="dropdown">
           <a> Resources
          <div class="dropdown-content">
            <a href="#">Services</a>
            <a href="#">Products</a>
          </div>
		  </a>
        </div>
        <a href="/journal">Journal</a>
        <a href="/reachus">Reach Us</a>
      

	  <div className="contact-num">
        <img src={phone} alt="" className="contact-img" />
        <div className="phoneNo">
          <p>+91 9777798142</p>
          <p className="call">Make a Call</p>
        </div>
      </div>

	  <div className="button-connect" type="button">
        <button>Let's Connect!</button>
      </div>
	</nav>

      <button className="nav-btn" onClick={showNavbar}>
        <FaBars />
      </button>
    </header>
  );
}

export default Navbar;
