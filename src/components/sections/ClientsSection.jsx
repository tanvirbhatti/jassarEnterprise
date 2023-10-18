import React from 'react'

const ClientsSection = () => {
  return (
    <section className="ftco-intro bg-primary py-5 mt-3">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-md-6">
            <span className="contact-number">Our Achievements</span>
            <p>
              Jassar Enterprise takes pride in its remarkable achievements, reflecting our commitment and dedication to our clients and projects. With over 200 satisfied clients, 500 successfully completed projects, and more than 30 prestigious awards, we are your trusted partner for excellence.
            </p>
          </div>
          <div className="col-md-6 text-center">
            <div className="row">
              <div className="col-4">
                <div className="achievement">
                  <h3 className="number text-white">200+</h3>
                  <p className="label text-white">Clients</p>
                </div>
              </div>
              <div className="col-4 line-divider">
                <div className="achievement">
                  <h3 className="number text-white">500+</h3>
                  <p className="label text-white">Projects Done</p>
                </div>
              </div>
              <div className="col-4 line-divider">
                <div className="achievement">
                  <h3 className="number text-white">30+</h3>
                  <p className="label text-white">Awards</p>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default ClientsSection