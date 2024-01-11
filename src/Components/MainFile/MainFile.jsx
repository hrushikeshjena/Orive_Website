import "./MainFile.css";
import arrow from "../../assets/arrow-top.png";
import Mini from "../Mini/Mini";
import facebook from "../../assets/fb.png";
import twitter from "../../assets/twitter.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/instagram.png";
const MainFile = () => {
  return (
    <div className="mainfile">
      <div className="top-main-page">
      <div className="all-logo-side">
        <div className="side-logo-main">
          <img src={facebook} />
        </div>
        <div className="side-logo-main">
          <img src={twitter} />
        </div>
        <div className="side-logo-main">
          <img src={linkedin} />
        </div>
        <div className="side-logo-main">
          <img src={instagram} />
        </div>
      </div>
      <div className="bigheader">
        <h1>Affordable Big IT & Technology Solutions</h1>
        <div className="paragraph">
          <p>
            Orive Solutions brings the innovative requirements, conduct through
            research, assess your needs, and consider consulting
          </p>
          <p>
            {" "}
            with IT professionals or experts to find the most suitable and
            cost-effective options for your business.
          </p>
        </div>
      </div>
      </div>

      <div className="button-consultation" type="button">
        <button>
          Request Free Consultation <img src={arrow} className="arrow-top" />
        </button>
      </div>
      <div className="top-page-cards">
        <Mini />
      </div>
    </div>
  );
};

export default MainFile;
