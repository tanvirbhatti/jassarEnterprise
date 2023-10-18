import React from 'react';
import Servicecard from '../cards/Servicecard';
import { Link } from 'react-router-dom';

const Servicesection = () => {
  const servicesData = [
    {
      icon: 'fa-solid fa-snowplow',
      title: 'Snow Removal',
      tagline: 'Expert snow removal services to keep your paths and driveways clear.',
      id:1
    },
    {
      icon: 'flaticon-fence',
      title: 'Landscaping',
      tagline: 'Transforming landscapes to create beautiful outdoor spaces for you.',
      id:2
    },
    {
      icon: 'fa-solid fa-truck-pickup',
      title: 'Construction',
      tagline: 'Quality construction services to build your dreams into reality.',
      id:3
    },
  ];

  return (
    <section className="ftco-section ftco-no-pt">
      <div className="container mt-3">
        <div className="row">
          <div className="col-lg-3 py-5 order-md-last">
            <div className="heading-section">
              <span className="subheading">Our Services</span>
              {/* <h2 className="mb-4">Our Services</h2> */}
              <p>
              Jassar Enterprise offers a range of expert services to enhance your outdoor living space. 
              From snow removal to landscaping and construction, we're here to transform your dreams into reality.

              </p>
              <p>
                <Link to="/contact" className="btn btn-primary py-3 px-4">Get a Quote</Link>
              </p>
            </div>
          </div>
          <div className="col-lg-9 services-wrap px-4 pt-4">
            <div className="row pt-md-3">
              {servicesData.map((service, index) => (
                <Servicecard
                  key={index}
                  icon={service.icon}
                  title={service.title}
                  tagline={service.tagline}
                  id={service.id}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Servicesection;
