import React from 'react';
import "./banner.css";
import groupimg from "../../assets/Group-p.png";
import Symbol from "../../assets/Symboll.png";
import direc from "../../assets/direct.png";

const banner = () => {
    return (
        <div>
            <div className='banner-i'>
                <div className='test-w'>
                    <h6>TESTIMONIALS</h6>

                    <h2>What Our Client Say’s
                    </h2>
                    <img src={Symbol} alt="" className="Symboll" />

                    <p><span>There are many varation of paissages of Lorem as the Ipum available but
                        our majority have sufferied alterations in some form, by our by injected
                        hsumour randomised worids which don't looks even slightly there as
                        believable. If you going to use a passage of Lorem Ipsum.</span></p>
                       
                    <div className='dir'>
                    <img src={direc} alt="" className="direct" />
                        <div className='dir-d'>

                            <h4>Darrell Steward</h4>

                            <p>Managing Director</p>
                        </div>
                    </div>
                </div>
                <div className=''>
                <img src={groupimg} alt="" className="" />
            </div>
            </div>
          
        </div>
    )
}

export default banner


