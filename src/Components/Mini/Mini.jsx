// import React from 'react';
import "./Mini.css";
import Cardlogo from "../../assets/01.png";
import Card1logo from "../../assets/02.png";
import Card3logo from "../../assets/03.png";

const Card = () => {
  // const [hover, setHover] = useState(false);
  return (
    <div className="main">
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div className="card-top-wala">
          <img src={Cardlogo} alt="Card Image" />
          <div className="card-top-text">ERP</div>
        </div>
        <div className="card-top-wala">
          <img src={Card1logo} alt="Card Image" />
          <div className="card-top-text">CRM</div>
        </div>

        <div className="card-top-wala">
          <img src={Card3logo} alt="Card Image" />
          <div className="card-top-text">HRM</div>
        </div>
        {/* <div className="hover-card-top-wala">
          <img src={Cardlogoh} alt="Card Image" />
        </div>
        <div className="hover-card-top-wala">
          <img src={Card1logoh} alt="Card Image" />
        </div>

        <div className="hover-card-top-wala">
          <img src={Card3logoh} alt="Card Image" />
        </div> */}
      </div>
    </div>
  );
};

export default Card;
