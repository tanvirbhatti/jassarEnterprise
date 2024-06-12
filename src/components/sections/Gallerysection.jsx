import React from 'react';
import Gallerycard from '../cards/Gallerycard';

const galleryData = [
  {
    imageUrl: "images/gallery/landscaping1.jpeg",
    heading: "Beautiful Work",
    spanText: "Landscaping"
  },
  {
    imageUrl: "images/gallery/backyard.jpeg",
    heading: "Stunning Architecture",
    spanText: "Architecture"
  },
  {
    imageUrl: "images/gallery/pavement.jpeg",
    heading: "Amazing Art",
    spanText: "Pavement"
  },
  {
    imageUrl: "images/gallery/snowremovel.jpeg",
    heading: "Wonderful Work",
    spanText: "Snow removel"
  },
  {
    imageUrl: "images/gallery/backyard2.jpeg",
    heading: "Incredible Design",
    spanText: "Design"
  },
  {
    imageUrl: "images/gallery/backyard3.jpeg",
    heading: "Magnificent View",
    spanText: "Architecture"
  }
];

const Gallerysection = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb">
      <div className="container-fluid px-md-0">
        <div className="row no-gutters">
          {galleryData.map((item, index) => (
            <Gallerycard 
              key={index}
              imageUrl={item.imageUrl}
              heading={item.heading}
              spanText={item.spanText}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallerysection;
