import React from 'react';
import Gallerycard from '../cards/Gallerycard';

const Gallerysection = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb">
      <div className="container-fluid px-md-0">
        <div className="row no-gutters">

          <Gallerycard/>
          <Gallerycard/>
          <Gallerycard/>
          <Gallerycard/>
          <Gallerycard/>
          <Gallerycard/>
          

        </div>
      </div>
    </section>
  )
}

export default Gallerysection;
