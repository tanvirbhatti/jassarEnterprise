import React from 'react';
import { useParams } from 'react-router-dom'; // Import useParams from React Router
import blogData from '../../assets/json/blogs.json';

const BlogsingleSection = ({id}) => {
  const blog = blogData.find((blog) => blog.id === id);

  if (!blog) {
    return <div>Blog not found </div>;
  }

  return (
    <section className="ftco-section ftco-degree-bg">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 d-flex flex-column ">
            {blog.images && (
              <p className="text-center">
                <img src={`/./images/${blog.images[0]}`} alt="" className="img-fluid" />
              </p>
            )}
            <h2 className="mb-3">{blog.title}</h2>
            {blog.content.map((content, index) => (
              <div key={index}>
                {content.image && (
                  <p className="text-center">
                    <img src={`/./images/${content.image}`} alt={`Image ${index}`} className="img-fluid" />
                  </p>
                )}
                <h2 className="mb-3 mt-5">{content.heading}</h2>
                <p>{content.text}</p>
              </div>
            ))}
            <div className="tag-widget post-tag-container mb-5 mt-5">
              <div className="tagcloud">
                {blog.tags.map((tag, index) => (
                  <a key={index} href="#" className="tag-cloud-link">
                    {tag}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogsingleSection;
