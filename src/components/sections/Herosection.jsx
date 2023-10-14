const Herosection = () => {
    const heroStyle = {
        backgroundImage: "url(/images/bg_1.jpg)",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        dataStellarBackgroundRatio: "0.5"
    };

    return (
        <>
            <div className="hero-wrap hero-wrap-2 js-fullheight" style={heroStyle}>
                <div className="overlay"></div>
                <div className="container">
                    <div className="row no-gutters slider-text js-fullheight align-items-center justify-content-start" data-scrollax-parent="true">
                        <div className="col-md-6 ">
                            <h2 className="subheading">Welcome to Lawn care</h2>
                            <h1>Lawn care for everyone</h1>
                            <p className="mb-4">Let us work on your yard</p>
                            
                            <p>
                                <a href="#" className="btn btn-primary mr-md-4 py-2 px-4">Learn more <span className="ion-ios-arrow-forward"></span></a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Herosection;
