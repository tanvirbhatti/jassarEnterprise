import React from 'react';
import { Link } from 'react-router-dom';

const Herosection2 = ({ title, backgroundImage = 'bg_2.jpg' }) => {
  return (
    <section
      className="hero-wrap hero-wrap-2 mb-5"
      style={{
        backgroundImage: `url(/../images/${backgroundImage})`,
        backgroundPosition: 'center center', 
      }}
      data-stellar-background-ratio="0.5"
    >
      <div className="overlay"></div>
      <div className="container animate__animated animate__fadeInUp">
        <div className="row no-gutters slider-text align-items-end justify-content-center">
          <div className="col-md-9 pb-5 text-center">
            <h1 className="mb-3 bread">{title || 'About us'}</h1>
            <p className="breadcrumbs">
              <span className="mr-2">
                <Link to="/">Home <i className="ion-ios-arrow-forward"></i></Link>
              </span>
              <span>{title || 'About us'} <i className="ion-ios-arrow-forward"></i></span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Herosection2;
