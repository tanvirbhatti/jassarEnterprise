import React from 'react'

const Testimonialcard = () => {
    return (
        <div className="item">
            <div className="testimony-wrap py-4">
                <div className="text">
                    <p className="mb-4">
                        Far far away, behind the word mountains, far from the
                        countries Vokalia and Consonantia, there live the blind
                        texts.
                    </p>
                    <div className="d-flex align-items-center">
                        <div className="user-img" style={{ backgroundImage: 'url(images/person_1.jpg)' }}></div>
                        <div className="pl-3">
                            <p className="name">Roger Scott</p>
                            <span className="position">Marketing Manager</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonialcard