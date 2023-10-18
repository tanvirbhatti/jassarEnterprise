import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Testimonialcard from '../cards/Testimonialcard';
import data from '../../assets/json/testimonials.json';

const Testimonials = () => {

    const options = {
        items: 1,
        loop: true,
        nav: true,
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
                    <div className="col-md-7 text-center heading-section">
                        <span className="subheading">Testimonial</span>
                        <h2 className="mb-4">Happy Clients</h2>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <OwlCarousel className="carousel-seasonal" {...options}>
                            {data.map((Testimonial, index) => (
                                <Testimonialcard key={index} data={Testimonial} />
                            ))}
                        </OwlCarousel>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Testimonials;
