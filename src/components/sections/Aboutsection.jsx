import React from 'react';

const Aboutsection = () => {
  const imgStyle = {
    backgroundImage: 'url(images/about.jpg)',
  };

  return (
      <div className="container">
        <div className="row d-flex">
          <div className="col-md-6 d-flex">
            <div className="img img-video d-flex align-self-stretch align-items-center justify-content-center justify-content-md-end"
              style={imgStyle}>
              <a href="https://vimeo.com/45830194"
                className="icon-video popup-vimeo d-flex justify-content-center align-items-center">
                <span className="icon-play"></span>
              </a>
            </div>
          </div>
          <div className="col-md-6 pl-md-5">
            <div className="row justify-content-start py-5">
              <div className="col-md-12 heading-section ">
                <span className="subheading">Welcome to Lawn Care</span>
                <h2 className="mb-4">Welcome to Lawn Care Company</h2>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia
                </p>
                <div className="services-wrap">
                  <a href="#" className="services-list">Gutter cleaning
                    <div className="btn-custom d-flex align-items-center justify-content-center">
                      <span className="ion-ios-arrow-round-forward"></span>
                    </div>
                  </a>
                  <a href="#" className="services-list">Organic fertilization and weed control
                    <div className="btn-custom d-flex align-items-center justify-content-center">
                      <span className="ion-ios-arrow-round-forward"></span>
                    </div>
                  </a>
                  <a href="#" className="services-list">Compost top dressing &amp; compost tea application
                    <div className="btn-custom d-flex align-items-center justify-content-center">
                      <span className="ion-ios-arrow-round-forward"></span>
                    </div>
                  </a>
                  <a href="#" className="services-list">New lawn installation
                    <div className="btn-custom d-flex align-items-center justify-content-center">
                      <span className="ion-ios-arrow-round-forward"></span>
                    </div>
                  </a>
                  <a href="#" className="services-list">Mulch and other services available
                    <div className="btn-custom d-flex align-items-center justify-content-center">
                      <span className="ion-ios-arrow-round-forward"></span>
                    </div>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    // </section>
  );
};

export default Aboutsection;
