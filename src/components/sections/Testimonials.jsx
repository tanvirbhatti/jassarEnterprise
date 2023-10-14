import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Testimonialcard from '../cards/Testimonialcard';
// import './owl.css';  

const Testimonials = () => {
    return (
        <section className="ftco-section testimony-section">
            <div className="container">
                <div className="row justify-content-center mb-5">
                    <div className="col-md-7 text-center heading-section ">
                        <span className="subheading">Testimonial</span>
                        <h2 className="mb-4">Happy Clients</h2>
                    </div>
                </div>
                <div className="row ">
                    <div className="col-md-12">
                        {/* <div className="carousel-testimony owl-carousel "> */}
                        <OwlCarousel className="carousel-testimony owl-theme " loop nav  >
                               <Testimonialcard/>
                               <Testimonialcard/>
                               <Testimonialcard/>
                               <Testimonialcard/>
                               <Testimonialcard/>
                               <Testimonialcard/>Í
                        </OwlCarousel>
                        {/* </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
