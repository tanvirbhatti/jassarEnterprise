import React from 'react';

const ContactsectionLarge = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;

    const formattedBody = `Name: ${name}
Email: ${email}
Subject: ${subject}
Message: ${message}`;

    const mailtoLink = `mailto:info@jassarlandscaping.ca?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(formattedBody)}`;

    window.location.href = mailtoLink;
  };
  return (
    <section className="ftco-section bg-light">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-12">
            <div className="wrapper">
              <div className="row mb-5">
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-map-marker"></span>
                    </div>
                    <div className="text">
                      <p><span>Address:</span> Surrey, BC</p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-phone"></span>
                    </div>
                    <div className="text">
                      <p><span>Phone:</span> <a href="tel://7789298020">+1(778)-929-8020</a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-paper-plane"></span>
                    </div>
                    <div className="text">
                      <p><span>Email:</span> <a href="mailto:info@jassarlandscaping.ca
">info@jassarlandscaping.ca
                      </a></p>
                    </div>
                  </div>
                </div>
                <div className="col-md-3">
                  <div className="dbox w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fa fa-globe"></span>
                    </div>
                    <div className="text">
                      <p><span>Website</span> <a href="https://www.jassarlandscaping.ca/">jassarlandscaping.ca</a></p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row no-gutters">
                <div className="col-md-7">
                  <div className="contact-wrap w-100 p-md-5 p-4">
                    <h3 className="mb-4">Contact Us</h3>
                    <div id="form-message-warning" className="mb-4"></div>
                    <div id="form-message-success" className="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form onSubmit={handleSubmit} className="contactForm">
                      <div className="row">
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" htmlFor="name">Full Name</label>
                            <input type="text" className="form-control" name="name" id="name" placeholder="Name" />
                          </div>
                        </div>
                        <div className="col-md-6">
                          <div className="form-group">
                            <label className="label" htmlFor="email">Email Address</label>
                            <input type="email" className="form-control" name="email" id="email" placeholder="Email" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="subject">Subject</label>
                            <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <label className="label" htmlFor="message">Message</label>
                            <textarea name="message" className="form-control" id="message" cols="30" rows="4" placeholder="Message" />
                          </div>
                        </div>
                        <div className="col-md-12">
                          <div className="form-group">
                            <input type="submit" value="Send Message" className="btn btn-primary" />
                            <div className="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-md-5 d-flex align-items-stretch">
                  <div className="info-wrap w-100 p-5 img" style={{ backgroundImage: 'url(images/about.jpg)' }}>
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

export default ContactsectionLarge;
