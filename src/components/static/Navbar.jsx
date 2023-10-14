import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
	return (
		<>
			<div className="container pt-2 ">
				<div className="row justify-content-between">
					<div className="col-md-8 order-md-last">
						<div className="row ">
							<div className="col-md-6 text-center">
								<Link className="navbar-brand" to="/"><img className="navLogo" src={"/final-logo.png"} alt='Jassar enterprise'></img></Link>
								{/* <a className="navbar-brand" href="index.html">Lawn<span>Care</span></a> */}
							</div>
							<div className="col-md-6 d-md-flex justify-content-end mb-md-0  align-items-center">
								{/* <form action="#" className="searchform order-lg-last">
							<div className="form-group d-flex">
								<input type="text" className="form-control pl-3" placeholder="Search" />
								<button type="submit" placeholder="" className="form-control search">
									<span className="fa fa-search"></span>
								</button>
							</div>
						</form> */}

								<div className=" w-100 text-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<span className="fa fa-phone"></span>
									</div>
									<div className="text">
										<p><a href="tel://1234567920">+ 1235 2355 98</a></p>
									</div>
								</div>


								<div className=" w-100 text-center">
									<div className="icon d-flex align-items-center justify-content-center">
										<span className="fa fa-paper-plane"></span>
									</div>
									<div className="text">
										<p> <a href="mailto:info@yoursite.com">info@yoursite.com</a></p>
									</div>
								</div>

							</div>
						</div>
					</div>
					<div className="col-md-4 d-flex">
						<div className="social-media d-flex align-items-center">
							<p className="mb-0 d-flex">
								<a href="#" className="d-flex align-items-center justify-content-center"><span
									className="fa fa-facebook"><i className="sr-only">Facebook</i></span></a>
								<a href="#" className="d-flex align-items-center justify-content-center"><span
									className="fa fa-twitter"><i className="sr-only">Twitter</i></span></a>
								<a href="#" className="d-flex align-items-center justify-content-center"><span
									className="fa fa-instagram"><i className="sr-only">Instagram</i></span></a>
								<a href="#" className="d-flex align-items-center justify-content-center"><span
									className="fa fa-dribbble"><i className="sr-only">Dribbble</i></span></a>
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
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar