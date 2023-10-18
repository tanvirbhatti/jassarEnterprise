const Testimonialcard = ({ data }) => {
    return (
        <div className="item">
            <div className="testimony-wrap py-4">
                <div className="text">
                    <p className="mb-4">
                        {data.review}
                    </p>
                    <div className="d-flex align-items-center">
                        <div className="user-img" style={{ backgroundImage: `url(images/${data.image})` }}></div>
                        <div className="pl-3">
                            <p className="name">{data.name}</p>
                            <span className="position">{data.position}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Testimonialcard