import React from 'react'
import { Link } from 'react-router-dom'

const Blogcard = () => {
  return (
    <div className="col-md-4 d-flex ">
            <div className="blog-entry justify-content-end">
              <a href="blog-single.html" className="block-20" style={{ backgroundImage: 'url(images/image_1.jpg)' }}>
              </a>
              <div className="text p-4 float-right d-block">
                <div className="topper d-flex align-items-center">
                  <div className="one py-2 pl-3 pr-1 align-self-stretch">
                    <span className="day">24</span>
                  </div>
                  <div className="two pl-0 pr-3 py-2 align-self-stretch">
                    <span className="yr">2020</span>
                    <span className="mos">January</span>
                  </div>
                </div>
                <h3 className="heading mb-0">
                  <a href="#">All you want to know about industrial laws</a>
                </h3>
                <p>
                  A small river named Duden flows by their place and supplies it
                  with the necessary regelialia.
                </p>
                <p><Link to="/blogsingle" className="btn btn-primary">Read more</Link></p>
              </div>
            </div>
          </div>
  )
}

export default Blogcard