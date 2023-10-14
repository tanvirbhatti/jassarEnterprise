import React from 'react'

const Footer = () => {
  return (
    <footer className="ftco-footer ftco-bg-dark ftco-section">
		<div className="container">
			<div className="row mb-5">
				<div className="col-md-6 col-lg">
					<div className="ftco-footer-widget mb-4">
						<h2 className="logo">
							<a href="#">Lawn <span>Care</span></a>
						</h2>
						<p>
							Far far away, behind the word mountains, far from the countries
							Vokalia and Consonantia, there live the blind texts.
						</p>
						<ul className="ftco-footer-social list-unstyled float-md-left float-lft mt-5">
							<li className="ftco-animate">
								<a href="#"><span className="icon-twitter"></span></a>
							</li> 
							<li className="ftco-animate">
								<a href="#"><span className="icon-facebook"></span></a>
							</li>
							<li className="ftco-animate">
								<a href="#"><span className="icon-instagram"></span></a>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-md-6 col-lg">
					<div className="ftco-footer-widget mb-4 ml-md-5">
						<h2 className="ftco-heading-2">Services</h2>
						<ul className="list-unstyled">
							<li>
								<a href="#" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Garden
									Care</a>
							</li>
							<li>
								<a href="#" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Lawn
									mowing</a>
							</li>
							<li>
								<a href="#" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Lawn
									Care</a>
							</li>
							<li>
								<a href="#" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>Gutter
									Cleaning</a>
							</li>
							<li>
								<a href="#" className="py-1 d-block"><span className="ion-ios-arrow-forward mr-3"></span>New
									Lawn
									Installation</a>
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
									<span className="icon icon-map-marker"></span><span className="text">203 Fake St. Mountain
										View, San Francisco, California,
										USA</span>
								</li>
								<li>
									<a href="#"><span className="icon icon-phone"></span><span className="text">+2 392 3929
											210</span></a>
								</li>
								<li>
									<a href="#"><span className="icon icon-envelope"></span><span
											className="text">info@yourdomain.com</span></a>
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
			<div className="row">
				<div className="col-md-12 text-center">
					<p>
						Copyright &copy;
						<script>
							document.write(new Date().getFullYear());
						</script>
						All rights reserved | This template is made with
						<i className="icon-heart color-danger" aria-hidden="true"></i> by
						<a href="https://colorlib.com" target="_blank">Colorlib</a>
					</p>
				</div>
			</div>
		</div>
	</footer>
  )
}

export default Footer