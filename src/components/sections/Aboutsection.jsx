import React from 'react';
import { Link } from 'react-router-dom';

const Aboutsection = () => {
  const imgStyle = {
    backgroundImage: 'url(images/about.jpg)',
    borderRadius: '30px',
  };

  return (
    <div className="container">
      <div className="row d-flex">
        <div className="col-md-6 d-flex">
          <div className="img d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end"
            style={imgStyle}>
          </div>
        </div>
        <div className="col-md-6 pl-md-5 ">
          <div className="row justify-content-start py-5">
            <div className="col-md-12 heading-section">
              <span className="subheading">Your Trusted Outdoor Solutions Provider</span>
              <h2 className="mb-4">About Jassar Enterprise</h2>
              <p>
                Jassar Enterprise is your trusted partner for outdoor solutions in Vancouver, BC. With a passion for enhancing outdoor living, we offer a range of services, including snow removal, landscaping, and construction. Our experienced team is dedicated to making your outdoor spaces safe, beautiful, and functional.
              </p>
              <p>
                Whether you need snow cleared from your driveway, want to transform your backyard into a serene oasis, or have construction dreams, Jassar Enterprise is here to turn your vision into reality. We take pride in delivering top-quality services that exceed your expectations.
              </p>
              <p>
                Join us on this journey to create outdoor spaces that you'll love. Your satisfaction is our priority, and we look forward to bringing your dreams to life.
              </p>
              <p>
                <Link to="/about" className="btn btn-primary py-3 px-4 mt-2">Know more</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aboutsection;
