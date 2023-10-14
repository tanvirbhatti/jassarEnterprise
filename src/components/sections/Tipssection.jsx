import React from 'react'

const Tipssection = () => {
  return (
    <section className="">
      <div className="container">
        <div className="row justify-content-center mb-5">
          <div className="col-md-10 text-center heading-section ">
            <span className="subheading">Tips &amp; Techniques</span>
            <h2 className="mb-4">Seasonal Lawn Care Tips</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="carousel-seasonal owl-carousel">
              <div className="item">
                <div className="wrap">
                  <div
                    className="seasonal img d-flex align-items-center justify-content-center"
                    style={seasonalStyles}
                  ></div>
                  <div className="text text-center px-4">
                    <h3>
                      <a href="#">Spring</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="wrap">
                  <div
                    className="seasonal img d-flex align-items-center justify-content-center"
                    style={{
                      backgroundImage: 'url(images/seasonal-2.jpg)',
                    }}
                  ></div>
                  <div className="text text-center px-4">
                    <h3>
                      <a href="#">Summer</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="wrap">
                  <div
                    className="seasonal img d-flex align-items-center justify-content-center"
                    style={{
                      backgroundImage: 'url(images/seasonal-3.jpg)',
                    }}
                  ></div>
                  <div className="text text-center px-4">
                    <h3>
                      <a href="#">Winter</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
              <div className="item">
                <div className="wrap">
                  <div
                    className="seasonal img d-flex align-items-center justify-content-center"
                    style={{
                      backgroundImage: 'url(images/seasonal-4.jpg)',
                    }}
                  ></div>
                  <div className="text text-center px-4">
                    <h3>
                      <a href="#">Fall</a>
                    </h3>
                    <p>
                      Far far away, behind the word mountains, far from the
                      countries Vokalia and Consonantia, there live the blind
                      texts.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Tipssection