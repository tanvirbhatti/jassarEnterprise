import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
	return (
		<footer className="ftco-footer ftco-bg-dark ftco-section pb-0">
			<div className="container ">
				<div className="row ">
					<div className="col-md-6 col-lg ">
						<div className="ftco-footer-widget mb-4 align-align-items-end  d-flex flex-column ">
							<div className="col-md-6 ">
								<Link className="navbar-brand" to="/"><img className="footerLogo" src={"/light-logo.png"} alt='Jassar enterprise'></img></Link>
							</div>
							
							<ul className="ftco-footer-social list-unstyled float-md-left w-100 justify-content-center  d-flex  float-lft mt-1">
								<li className="">
									<a href="#"><span className="fa-brands fa-facebook"></span></a>
								</li>
								<li className="">
									<a href="#"><span className="fa-brands fa-instagram"></span></a>
								</li>
								<li className="">
									<a href="#"><span className="fa-brands fa-twitter"></span></a>
								</li>
							</ul>
						</div>
					</div>
					<div className="col-md-6 col-lg">
						<div className="ftco-footer-widget mb-4 ml-md-5">
							<h2 className="ftco-heading-2">Services</h2>
							<ul className="list-unstyled">
								<li>
									<Link to="singleservice/1" className="py-1 d-block"><span className="fa-solid fa-snowplow mr-3"></span>Snow removal</Link>
								</li>
								<li>
									<Link to="singleservice/2" className="py-1 d-block"><span className="flaticon-fence mr-3"></span>Landscaping</Link>
								</li>
								<li>
									<Link to="singleservice/3" className="py-1 d-block"><span className="fa-solid fa-truck-pickup mr-3"></span>Construction</Link>
								</li>
								
							</ul>
						</div>
					</div>
					<div className="col-md-6 col-lg">
						<div className="ftco-footer-widget mb-4">
							<h2 className="ftco-heading-2">Contact information</h2>
							<div className="block-23 mb-3">
								<ul>
									<li>
										<span className="icon fa fa-location-dot"></span><span className="text ">Surrey, BC</span>
									</li>
									<li>
										<a href="#"><span className="icon fa fa-phone"></span><span className="text">+1(778)-929-8020</span></a>
									</li>
									<li>
										<a href="#"><span className="icon fa fa-paper-plane"></span><span
											className="text">info@jassarlandscaping.ca</span></a>
									</li>
								</ul>
							</div>
						</div>
					</div>
					<div className="col-md-6 col-lg">
						<div className="ftco-footer-widget mb-4">
							<h2 className="ftco-heading-2">Business Hours</h2>
							<div className="opening-hours">
								<h4>Opening Days:</h4>
								<p className="pl-3">
									<span>Monday – Friday : 9am to 20 pm</span>
									<span>Saturday : 9am to 17 pm</span>
								</p>
								<h4>Vacations:</h4>
								<p className="pl-3">
									<span>All Sunday Days</span>
									<span>All Official Holidays</span>
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer