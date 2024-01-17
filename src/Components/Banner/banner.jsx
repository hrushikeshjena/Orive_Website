import React from "react";
import "./banner.css";
import groupimg from "../../assets/Group-p.png";
import Symbol from "../../assets/Symboll.png";
import direc from "../../assets/direct.png";

const banner = () => {
  return (
    <div style={{ paddingBottom:'50px'}} className="testimonial">
      <div
        id="carouselExampleInterval"
        class="carousel slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="0"
            class="active caro-btnn"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            className="caro-btnn"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            className="caro-btnn"
            type="button"
            data-bs-target="#carouselExampleInterval"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="10000">
            <div className="banner-i">
              <div className="test-w">
                <h6>TESTIMONIALS</h6>

                <h2>What Our Client Say’s</h2>
                <img src={Symbol} alt="" className="Symboll my-3" />

                <p>
                  <span>
                    There are many varation of paissages of Lorem as the Ipum
                    available but our majority have sufferied alterations in
                    some form, by our by injected hsumour randomised worids
                    which don't looks even slightly there as believable. If you
                    going to use a passage of Lorem Ipsum.
                  </span>
                </p>

                <div className="dir">
                  <img src={direc} alt="" className="direct" />
                  <div className="dir-d">
                    <h4 className="fw-bold">Darrell Steward</h4>

                    <p style={{marginTop:'-7px'}} className='md'>Managing Director</p>
                  </div>
                </div>
              </div>
              <div className="">
                <img src={groupimg} alt="" className="caro-img-side" />
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="2000">
            <div className="banner-i">
              <div className="test-w">
                <h6>TESTIMONIALS</h6>

                <h2>What Our Client Say’s</h2>
                <img src={Symbol} alt="" className="Symboll" />

                <p>
                  <span>
                    There are many varation of paissages of Lorem as the Ipum
                    available but our majority have sufferied alterations in
                    some form, by our by injected hsumour randomised worids
                    which don't looks even slightly there as believable. If you
                    going to use a passage of Lorem Ipsum.
                  </span>
                </p>

                <div className="dir">
                  <img src={direc} alt="" className="direct" />
                  <div className="dir-d">
                    <h4 className="fw-bold">Darrell Steward</h4>

                    <p style={{marginTop:'-7px'}} className='md'>Managing Director</p>
                  </div>
                </div>
              </div>
              <div className="">
                <img src={groupimg} alt="" className="caro-img-side" />
              </div>
            </div>
          </div>
          <div class="carousel-item">
            <div className="banner-i">
              <div className="test-w">
                <h6>TESTIMONIALS</h6>

                <h2>What Our Client Say’s</h2>
                <img src={Symbol} alt="" className="Symboll" />

                <p>
                  <span>
                    There are many varation of paissages of Lorem as the Ipum
                    available but our majority have sufferied alterations in
                    some form, by our by injected hsumour randomised worids
                    which don't looks even slightly there as believable. If you
                    going to use a passage of Lorem Ipsum.
                  </span>
                </p>

                <div className="dir">
                  <img src={direc} alt="" className="direct" />
                  <div className="dir-d">
                    <h4 className="fw-bold">Darrell Steward</h4>

                    <p style={{marginTop:'-7px'}} className='md'>Managing Director</p>
                  </div>
                </div>
              </div>
              <div className="">
                <img src={groupimg} alt="" className="caro-img-side" />
              </div>
            </div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleInterval"
          data-bs-slide="next"
        >
          <span
            class="carousel-control-next-icon"
            aria-hidden="true"
            style={{ color: "black" }}
          ></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default banner;
