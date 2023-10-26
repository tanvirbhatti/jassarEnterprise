import React from 'react';
import Blogcard from '../cards/Blogcard';
import blogs from '../../assets/json/blogs.json';

const Blogsection = () => {
  // Slice the first three blogs
  const recentBlogs = blogs.slice(0, 3);

  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center mb-5 pb-3">
          <div className="col-md-7 heading-section text-center">
            <span className="subheading">Our Blog</span>
            <h2>Recent Blog</h2>
          </div>
        </div>
        <div className="row d-flex">
          {recentBlogs.map((item, index) => (
            <Blogcard key={index} img={item.images[0]} title={item.title} id={item.id} tagline={item.tagline} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blogsection;
