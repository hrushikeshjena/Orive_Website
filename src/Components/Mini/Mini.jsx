import "./Mini.css";
import Cardlogo from "../../assets/01.png";
import Card1logo from "../../assets/02.png";
import Card3logo from "../../assets/03.png";

const Card = () => {
  return (
    <div className="main">
      <div
        className="home-page-cards"
      >
        <div className="card-top-wala card-top-wala-l">
          <img src={Cardlogo} alt="Card Image" />
          <div className="card-top-text">ERP</div>
        </div>
        <div className="card-top-wala">
          <img src={Card1logo} alt="Card Image" />
          <div className="card-top-text">CRM</div>
        </div>

        <div className="card-top-wala card-top-wala-r">
          <img src={Card3logo} alt="Card Image" />
          <div className="card-top-text">HRM</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
