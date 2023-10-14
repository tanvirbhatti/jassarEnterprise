import React from 'react'

const Newslettersection = () => {
  return (
    <section className="ftco-section ftco-no-pt ftco-no-pb bg-primary">
		<div className="container">
			<div className="row d-flex justify-content-center">
				<div className="col-lg-8 py-4">
					<div className="row">
						<div className="col-md-6  d-flex align-items-center">
							<h2 className="mb-0" style={{color: 'white', 'font-size': '24px'}}>
								Subcribe to our Newsletter
							</h2>
						</div>
						<div className="col-md-6 d-flex align-items-center">
							<form action="#" className="subscribe-form">
								<div className="form-group d-flex">
									<input type="text" className="form-control" placeholder="Enter email address" />
									<input type="submit" value="Subscribe" className="submit px-3" />
								</div>
							</form>
						</div>
					</div>
				</div>
			</div>
		</div>
	</section>
  )
}

export default Newslettersection