import React from 'react'
import './aboutCompany.css'
import aboutimg from "../../assets/about-img.png";
import quality from "../../assets/quality.png";
import customerservices from "../../assets/customer-service.png";
const aboutCompany = () => {
    return (
        <div className='about-company'>
            <div className='img-content'>
                <img src={aboutimg} alt="" className="about-img" />
            </div>

            <div className='text-content'>
                <h6>About Our Company</h6>

                <h2>We formed the IT service in 2018
                    based on client requirements
                </h2>

                <p>We're not just service providers; we're strategic partners committed to propelling your business forward. Contact us for a transformative journey in the digital landscape.</p>

                <div className='sup-ex'>
                <img src={customerservices} alt="" className="customerservices" />
                    
                    <div className='support'>

                        <h2>24/7 User Support </h2>

                        <p>Vestibulum ac diam sit amet
                            quam vehicula elementum sed
                            sit amet dui.</p>
                    </div>
                    <img src={quality} alt="" className="quality" />
                    <div className='experience'>

                        <h2>5+ Years of experience</h2>

                        <p>Vestibulum ac diam sit amet
                            quam vehicula elementum sed
                            sit amet dui.</p>
                    </div>


                </div>

                <div className="learn-more" type="button">
                    <button>Learn More! </button>
                </div>

            </div>

        </div>
    )
}

export default aboutCompany
