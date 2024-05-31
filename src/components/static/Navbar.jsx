import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'

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

		// Set the active link initially
		setActiveLink();
	}, [location]);

	return (
		<>
			<div className="container px-0">
				<div className="row justify-content-between">
					<div className="col-md-12 order-md-last">
						<div className="row ">
							<div className="social-media d-flex align-items-center col-md-5">
								<p className="mb-0 d-flex">
									<a href="https://www.facebook.com/profile.php?id=100063689943465" target='_blank' className="d-flex align-items-center justify-content-center mr-4"><span
										className="fa-brands fa-facebook"><i className="sr-only">Facebook</i></span></a>
									<a href="https://www.instagram.com/jassar_ent_landscping/" target='_blank' className="d-flex align-items-center justify-content-center mr-4"><span
										className="fa-brands fa-instagram"><i className="sr-only">Twitter</i></span></a>
									<a href="https://twitter.com/" target='_blank' className="d-flex align-items-center justify-content-center"><span
										className="fa-brands fa-twitter"><i className="sr-only">Instagram</i></span></a>
								</p>
							</div>
							<div className="col-md-2 text-center p-3">
								<Link className="navbar-brand" to="/"><img className="navLogo" src={"/final-logo.png"} alt='Jassar enterprise'></img></Link>
							</div>
							<div className="col-md-5 d-md-flex justify-content-end mb-md-0  align-items-center">


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

					</div>
				</div>
			</div>
			<nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
				<div className="container-fluid">
					<button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
						<span className="fa fa-bars"></span> Menu
					</button>
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
					</div>
				</div>
			</nav>
		</>
	)
}

export default Navbar