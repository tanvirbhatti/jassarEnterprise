import React from 'react'
import Servicecard from '../cards/Servicecard'

const Servicesection = () => {
  return (
    <section className="ftco-section ftco-no-pt">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 py-5 order-md-last">
          <div className="heading-section ">
            <span className="subheading">Services</span>
            <h2 className="mb-4">Lawn Services</h2>
            <p>
              A small river named Duden flows by their place and supplies it
              with the necessary regelialia. It is a paradisematic country, in
              which roasted parts of sentences fly into your.
            </p>
            <p>
              <a href="#" className="btn btn-primary py-3 px-4">Get a Quote</a>
            </p>
          </div>
        </div>
        <div className="col-lg-9 services-wrap px-4 pt-5">
          <div className="row pt-md-3">
            
            <Servicecard/>
            <Servicecard/>
            <Servicecard/>
          </div>
        </div>
      </div>
    </div>
  </section>

  )
}

export default Servicesection