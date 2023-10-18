import React from 'react';

const Gallerycard = () => {
  const cardStyle = {
    borderRadius: '30px', // Apply a border radius of 30px
    overflow:"hidden"
  };

  return (
    <div className="col-md-4 p-3 rounded-4">
      <div
        className="gallery img d-flex align-items-end"
        style={{
          backgroundImage: 'url(images/gallery-1.jpg)',
          ...cardStyle, // Merge the border radius style
        }}
      >
        <a href="images/gallery-1.jpg" className="icon image-popup d-flex justify-content-center align-items-center">
          <span className="icon-expand"></span>
        </a>
        <div className="desc w-100 px-4">
          <div className="text w-100 mb-3">
            <span>Nature</span>
            <h2>
              <a href="work-single.html">Beautiful Work</a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallerycard;
