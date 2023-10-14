import React from 'react';
import Blogcard from '../cards/Blogcard';

const Blogsection = () => {
  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center ">
            <span className="subheading">Our Blog</span>
            <h2>Recent Blog</h2>
          </div>
        </div>
        <div className="row d-flex">
          <Blogcard/>            
          <Blogcard/>            
          <Blogcard/>            
        </div>
      </div>
    </section>
  )
}

export default Blogsection;
