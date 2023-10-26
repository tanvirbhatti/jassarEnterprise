import React from 'react';
import { Link } from 'react-router-dom';

const Blogcard = ({ id, tagline, title, img }) => {
  const backgroundImageStyle = {
    backgroundImage: `url(/images/${img})`, // Removed the single quotes here
  };

  return (
    <div className="col-md-4 d-flex w-100">
      <div className="blog-entry justify-content-end w-100 h-100">
        <Link to={`/blog-single/${id}`} className="block-20" style={backgroundImageStyle}>
          {/* Background image */}
        </Link>
        <div className="text p-4 float-right d-block">
          <h3 className="heading mb-0">
            <Link to={`/blogsingle/${id}`}>{title}</Link>
          </h3>
          <p>{tagline}</p>
          <p>
            <Link to={`/blogsingle/${id}`} className="btn btn-primary">
              Read more
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blogcard;
