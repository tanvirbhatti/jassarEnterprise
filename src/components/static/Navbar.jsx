import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Navbar = () => {
  const location = useLocation();

  useEffect(() => {
    // Function to set the active class to the parent li element
    const setActiveLink = () => {
      const links = document.querySelectorAll('.nav-item a');
      links.forEach((link) => {
        const li = link.parentElement;
        if (location.pathname === link.getAttribute('href')) {
          li.classList.add('active');
        } else {
          li.classList.remove('active');
        }
      });
    };

    // Function to handle link clicks and collapse the navbar
    const handleLinkClick = () => {
      const navbarCollapse = document.getElementById('ftco-nav');
      if (navbarCollapse && navbarCollapse.classList.contains('show')) {
        navbarCollapse.classList.remove('show');
      }
    };

    // Add click event listeners to the links
    const links = document.querySelectorAll('.nav-item a');
    links.forEach((link) => {
      link.addEventListener('click', handleLinkClick);
    });

    // Clean up event listeners on component unmount
    return () => {
      links.forEach((link) => {
        link.removeEventListener('click', handleLinkClick);
      });
    };

    // Set the active link initially
    setActiveLink();
  }, [location]);

  return (
    <>
      <div className="container px-0">
        <div className="row justify-content-between">
          <div className="col-md-12 order-md-last">
            <div className="row ">
              <div className="social-media d-flex align-items-center col-md-5 col-3 m-0">
                <div className='d-lg-none align-items-center'>
                  <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="fas fa-bars h2"></span>
                  </button>
                </div>
                <p className="mb-0 d-none d-lg-flex">
                  <a href="https://www.facebook.com/profile.php?id=100063689943465" target='_blank' className="d-flex align-items-center justify-content-center mr-4">
                    <span className="fab fa-facebook"><i className="sr-only">Facebook</i></span>
                  </a>
                  <a href="https://www.instagram.com/jassar_ent_landscping/" target='_blank' className="d-flex align-items-center justify-content-center mr-4">
                    <span className="fab fa-instagram"><i className="sr-only">Instagram</i></span>
                  </a>
                  <a href="https://twitter.com/" target='_blank' className="d-flex align-items-center justify-content-center">
                    <span className="fab fa-twitter"><i className="sr-only">Twitter</i></span>
                  </a>
                </p>
              </div>
              <div className="col-md-2 text-center p-3 col-6">
                <Link className="navbar-brand" to="/">
                  <img className="navLogo" src={"/final-logo.png"} alt='Jassar enterprise'></img>
                </Link>
              </div>
              <div className="col-md-5 col-3 d-flex justify-content-end mb-md-0 align-items-center">
                <div className='d-none d-lg-flex'>
                  <div className="w-100 text-center mr-3">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fas fa-phone"></span>
                    </div>
                    <div className="text">
                      <p><a href="tel://1234567920">+1 778 929 8020</a></p>
                    </div>
                  </div>
                  <div className="w-100 text-center">
                    <div className="icon d-flex align-items-center justify-content-center">
                      <span className="fas fa-paper-plane"></span>
                    </div>
                    <div className="text">
                      <p><a href="mailto:info@yoursite.com">info@jassarlandscaping.ca</a></p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-4 d-flex">
          </div>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="ftco-nav">
            <ul className="navbar-nav m-auto">
              <li className="nav-item">
                <Link to="/" className="nav-link">Home</Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">About us</Link>
              </li>
              <li className="nav-item">
                <Link to="/services" className="nav-link">Services</Link>
              </li>
              <li className="nav-item">
                <Link to="/gallery" className="nav-link">Gallery</Link>
              </li>
              <li className="nav-item">
                <Link to="/blogs" className="nav-link">Blog</Link>
              </li>
              <li className="nav-item">
                <Link to="/contact" className="nav-link">Contact</Link>
              </li>
            </ul>
            <div className="social-media d-flex align-items-center d-lg-none ">
              <p className="mb-0 d-flex">
                <a href="https://www.facebook.com/profile.php?id=100063689943465" target='_blank' className="d-flex align-items-center justify-content-center mr-4">
                  <span className="fab fa-facebook"><i className="sr-only">Facebook</i></span>
                </a>
                <a href="https://www.instagram.com/jassar_ent_landscping/" target='_blank' className="d-flex align-items-center justify-content-center mr-4">
                  <span className="fab fa-instagram"><i className="sr-only">Instagram</i></span>
                </a>
                <a href="https://twitter.com/" target='_blank' className="d-flex align-items-center justify-content-center">
                  <span className="fab fa-twitter"><i className="sr-only">Twitter</i></span>
                </a>
              </p>
            </div>
            <div className="d-flex justify-content-center mt-3 d-lg-none">
              <div className="text-center mx-3">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fas fa-phone"></span>
                </div>
                <div className="text">
                  <p><a href="tel://1234567920">+1 778 929 8020</a></p>
                </div>
              </div>
              <div className="text-center mx-3">
                <div className="icon d-flex align-items-center justify-content-center">
                  <span className="fas fa-paper-plane"></span>
                </div>
                <div className="text">
                  <p><a href="mailto:info@yoursite.com">info@jassarlandscaping.ca</a></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
