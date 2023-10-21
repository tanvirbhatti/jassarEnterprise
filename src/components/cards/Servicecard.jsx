import React from 'react';
import { Link } from 'react-router-dom';

const Servicecard = ({ icon, title, tagline,id }) => {
  return (
    <div className="col-md-4 d-flex align-items-stretch">
      <div className="services text-center">
        <div className="icon d-flex justify-content-center align-items-center">
          <span className={icon}></span>
        </div>
        <div className="text">
          <h3>{title}</h3>
          <p>{tagline}</p>
        </div>
        <Link to={`singleservice/${id}`} className="btn-custom d-flex align-items-center justify-content-center">
          <span className="fa-solid fa-arrow-right"></span>
        </Link>
      </div>
    </div>
  );
};

export default Servicecard;
