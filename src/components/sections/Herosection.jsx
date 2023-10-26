import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

const Herosection = () => {
    const options = {
        loop: true,
        margin: 10,
        nav: false,
        dots: false,
        items: 1,
        autoplay: true,
        autoplayTimeout: 5000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
    };

    const commonStyles = {
        backgroundPosition: 'center center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        height: '80vh', // Increased height for the image
        perspective: '1000px', // Add a 3D effect by defining perspective
    };

    const slides = [
        {
            backgroundImage: '/images/snowremoval/snow_removal.avif',
            text: {
                subheading: 'Welcome to Jassar Enterprise',
                heading: 'Your Snow Removal Experts',
                description: "We'll clear the path for you!",
                button: {
                    text: 'Learn more',
                    link: '#',
                },
            },
        },
        {
            backgroundImage: '/images/landscaping/landscaping.jpeg',
            text: {
                subheading: 'Welcome to Jassar Enterprise',
                heading: 'Transforming Landscapes',
                description: 'Creating beautiful outdoor spaces for you!',
                button: {
                    text: 'Learn more',
                    link: '#',
                },
            },
        },
        {
            backgroundImage: '/images/construction/construction.avif',
            text: {
                subheading: 'Welcome to Jassar Enterprise',
                heading: 'Building Your Dreams',
                description: 'Quality construction services at your service!',
                button: {
                    text: 'Learn more',
                    link: '#',
                },
            },
        },
    ];

    return (
        <OwlCarousel className="" {...options}>
            {slides.map((slide, index) => (
                <div key={index} className="item d-flex align-align-items-center justify-content-center " style={{ ...commonStyles, backgroundImage: `url(${slide.backgroundImage})` }}>
                    <div className='dark-overlay'></div>
                    <div className="container d-flex align-align-items-center justify-content-start">
                        <div className="row no-gutters slider-text justify-content-start align-items-center ">
                            <div className="col-md-8 d-flex flex-column justify-content-start  align-items-start">
                                    <h2 className="subheading animate__animated animate__fadeInUp">
                                        {slide.text.subheading}
                                    </h2>
                                    <h1 className="animate__animated animate__fadeInUp">
                                        {slide.text.heading}
                                    </h1>
                                    <p className="mb-4 text-white  animate__animated animate__fadeInUp">
                                        {slide.text.description}
                                    </p>
                                    <p className="animate__animated animate__fadeInUp">
                                        <a href={slide.text.button.link} className="btn btn-primary mr-md-4 py-2 px-4">
                                            {slide.text.button.text} <span className="ion-ios-arrow-forward"></span>
                                        </a>
                                    </p>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </OwlCarousel>
    );
};

export default Herosection;
