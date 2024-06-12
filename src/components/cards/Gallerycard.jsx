import React from 'react';
import PropTypes from 'prop-types';

const Gallerycard = ({ imageUrl, heading, spanText }) => {
  const cardStyle = {
    borderRadius: '30px',
    overflow: 'hidden',
    backgroundImage: `url(${imageUrl})`, // Use the image URL from props
  };

  return (
    <div className="col-md-4 p-3 rounded-4">
      <div
        className="gallery img d-flex align-items-end"
        style={cardStyle}
      >
        <div className="desc w-100 px-4">
          <div className="text w-100 mb-3">
            <span>{spanText}</span> {/* Use the span text from props */}
            <h2>
              <a href="work-single.html">{heading}</a> {/* Use the heading from props */}
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

Gallerycard.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  heading: PropTypes.string.isRequired,
  spanText: PropTypes.string.isRequired,
};

export default Gallerycard;
