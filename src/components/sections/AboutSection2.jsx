import React from 'react';
import { Link } from 'react-router-dom';

const AboutSection2 = () => {
    return (
        <div className="container">
            <div className="mt-5">
                <div className="">
                    <div className="img d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end">
                        <img
                            src="jassarTeam.jpeg"
                            alt="About Us"
                            style={{
                                width: '100%',  
                                height: '50%',
                                borderRadius: '30px'  
                            }}
                        />
                    </div>
                </div>
                <div className="">
                    <div className="py-5">
                        <div className="col-md-12 heading-section">
                            <div className='text-center'>
                                <span className="subheading">Our Commitment to Excellence</span>
                                <h2 className="mb-4">Your Trusted Outdoor Solutions Provider</h2>
                            </div>
                            <p>
                                Welcome to Jassar Enterprise, your partner for outdoor solutions in Vancouver, BC. We are passionate about enhancing outdoor living and offer a variety of services, including snow removal, landscaping, and construction. Our dedicated team strives to create safe, beautiful, and functional outdoor spaces.
                            </p>
                            <p>
                                Whether you need snow cleared from your driveway, dream of transforming your backyard into a serene oasis, or have construction projects in mind, Jassar Enterprise is here to bring your vision to life. We take pride in delivering top-quality services that surpass your expectations.
                            </p>
                            <p>
                                Join us on a journey to create outdoor spaces that you'll cherish. Your satisfaction is our top priority, and we're eager to turn your dreams into reality.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutSection2;
