// import React from 'react';
import "./Card.css";
import Cardlogo from "../../assets/Group 32 (1).png";
import Card1logo from "../../assets/13.png";
import Card3logo from "../../assets/31.png";

const Card = () => {
  return (    
    <div className="main-p">
      <div className="text-card-home">
        <h
          style={{
            display: "flex",
            justifyContent: "space-evenly",
            textAlign: "center",
          }}
        >
          WE PROVIDES SERVICES
        </h>
        <h2>The kind of services that our company provides to our clients.</h2>
      </div>
      <div
        className="cards-home-all"
      >
        <div className="card">
          <img src={Card1logo} alt="Card Image" />
          <div className="card-content">
            <h2>ERP</h2>
            <p>
              ERP software meticulously utilizes all the resources in the
              industry to ensure that these operations are executed successfully
              and keeps the workflow smoother.
            </p>
            {/* <button id="toggleButton" class="read-more-btn">Read More</button> */}
          </div>
        </div>
        <div className="card">
          <img src={Cardlogo} alt="Card Image" />
          <div className="card-content">
            <h2>CRM</h2>
            <p>
              CRM software manage customer email,phone numbers,live chat,
              company website,and social media to company data from these
              channels to improve sales.
            </p>
          </div>
        </div>

        <div className="card">
          <img src={Card3logo} alt="Card Image" />
          <div className="card-content">
            <h2>HRM</h2>
            <p>
              Effective HRM contributes to the overall success of an
              organization by aligning its human resources with its business
              stratergie and objectives.
            </p>
            {/* <button onClick={toggleDetails}>{showDetails ? "Read Less" : "Read More"}</button> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
