import React from 'react';
import { Link, useParams } from 'react-router-dom';
import data from '../../assets/json/services.json';

const SingleServiceSection = () => {
  const { id } = useParams();
  const service = data.find((item) => item.id === id);

  if (!service) {
    return <div>Service not found</div>;
  }

  return (
    <div>
      {service.data.map((s, index) => (
        <div key={index} className="container mb-4 mt-">
          <div className="row d-flex">
            {index % 2 === 0 ? (
              // Even index: Image on the left, text on the right
              <>
                <div className="col-md-6 d-flex mt-4">
                  <div
                    className="img d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end"
                    style={{
                      backgroundImage: `url(/../images/${s.image})`,
                      borderRadius: '30px',
                    }}
                  ></div>
                </div>
                <div className="col-md-6 pl-md-5">
                  <div className="row justify-content-start py-5">
                    <div className="col-md-12 heading-section">
                      <span className="subheading">{s.heading}</span>
                      <h2 className="mb-4">{s.tagline}</h2>
                      <p>{s.text}</p>
                      <p>
                        <Link to="/about" className="btn btn-primary py-3 px-4 mt-2">
                          Know more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              // Odd index: Text on the left, image on the right
              <>
                <div className="col-md-6 pl-md-5 mt-4">
                  <div className="row justify-content-start py-5">
                    <div className="col-md-12 heading-section">
                      <span className="subheading">{s.heading}</span>
                      <h2 className="mb-4">{s.tagline}</h2>
                      <p>{s.text}</p>
                      <p>
                        <Link to="/about" className="btn btn-primary py-3 px-4 mt-2">
                          Know more
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-md-6 d-flex">
                  <div
                    className="img d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end"
                    style={{
                      backgroundImage: `url(/../images/${s.image})`,
                      borderRadius: '30px',
                    }}
                  ></div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SingleServiceSection;
