import React from 'react';
import OwlCarousel from 'react-owl-carousel';

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const TeamSection = () => {
  const options = {
    items: 1,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    responsive: {
      768: {
        items: 2, // Display 2 items on screens wider than 768px
      },
      992: {
        items: 3, // Display 3 items on screens wider than 992px
      },
    },
  };

  return (
    <section className="mt-5">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-10 text-center heading-section">
            <span className="subheading">Meet Our Team</span>
            <h2 className="mb-4">Dedicated Professionals</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <OwlCarousel className="carousel-seasonal" {...options}>
              <div className="item">
                <div className="wrap">
                  <div
                    className="seasonal img d-flex align-items-center justify-content-center"
                    style={{
                      backgroundImage: 'url(images/person.jpeg',
                      borderRadius: '30px',
                    }}
                  ></div>
                  <div className="text text-center px-4">
                    <h3>Jassar</h3>
                    <p>Founder & CEO</p>
                  </div>
                </div>
              </div>
              
              <div className="item">
                <div className="wrap">
                  <div
                    className="seasonal img d-flex align-items-center justify-content-center"
                    style={{
                      backgroundImage: 'url(images/person.jpeg',
                      borderRadius: '30px',
                    }}
                  ></div>
                  <div className="text text-center px-4">
                    <h3>Sift sihdu</h3>
                    <p>Team Member</p>
                  </div>
                </div>
              </div>
              
              <div className="item">
                <div className="wrap">
                  <div
                    className="seasonal img d-flex align-items-center justify-content-center"
                    style={{
                      backgroundImage: 'url(images/person.jpeg',
                      borderRadius: '30px',
                    }}
                  ></div>
                  <div className="text text-center px-4">
                    <h3>Mike</h3>
                    <p>Team Member</p>
                  </div>
                </div>
              </div>
              
              <div className="item">
                <div className="wrap">
                  <div
                    className="seasonal img d-flex align-items-center justify-content-center"
                    style={{
                      backgroundImage: 'url(images/person.jpeg',
                      borderRadius: '30px',
                    }}
                  ></div>
                  <div className="text text-center px-4">
                    <h3>Alex</h3>
                    <p>Tesm Member</p>
                  </div>
                </div>
              </div>
              
            </OwlCarousel>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
