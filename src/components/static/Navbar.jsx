import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
	return (
		<>
			<div className="container pt-2 px-0">
				<div className="row justify-content-between">
					<div className="col-md-8 order-md-last">
						<div className="row ">
							<div className="col-md-6 text-center">
								<Link className="navbar-brand" to="/"><img className="navLogo" src={"/final-logo.png"} alt='Jassar enterprise'></img></Link>
							</div>
							<div className="col-md-6 d-md-flex justify-content-end mb-md-0  align-items-center">
								

								<div className=" w-100 text-center ">
									<div className="icon d-flex align-items-center justify-content-center">
										<span className="fa fa-phone"></span>
									</div>
									<div className="text">
										<p><a href="tel://1234567920">+1 778 929 8020</a></p>
									</div>
								</div>


								<div className=" w-100 text-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<span className="fa fa-paper-plane"></span>
									</div>
									<div className="text">
										<p> <a href="mailto:info@yoursite.com">	info@jassarlandscaping.ca</a></p>
									</div>
								</div>

							</div>
						</div>
					</div>
					<div className="col-md-4 d-flex">
						<div className="social-media d-flex align-items-center">
							<p className="mb-0 d-flex">
								<a href="#" className="d-flex align-items-center justify-content-center"><span
									className="fa-brands fa-facebook"><i className="sr-only">Facebook</i></span></a>
								<a href="#" className="d-flex align-items-center justify-content-center"><span
									className="fa-brands fa-twitter"><i className="sr-only">Twitter</i></span></a>
								<a href="#" className="d-flex align-items-center justify-content-center"><span
									className="fa-brands fa-instagram"><i className="sr-only">Instagram</i></span></a>
								<a href="#" className="d-flex align-items-center justify-content-center"><span
									className="fa-brands fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
							</p>
						</div>
					</div>
				</div>
			</div>
			<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav"
                        aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span> Menu
                    </button>
                    <div className="collapse navbar-collapse" id="ftco-nav">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <NavLink exact to="/" className="nav-link">Home</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className="nav-link">About us</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/services" className="nav-link">Services</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/gallery" className="nav-link">Gallery</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/blogs" className="nav-link">Blog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className="nav-link">Contact</NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
		</>
	)
}

export default Navbar