import React from 'react'
import Herosection2 from '../components/sections/Herosection2'
import Blogcard from '../components/cards/Blogcard'
import Newslettersection from '../components/sections/Newslettersection'

const Blogpage = () => {
  return (
    <>
        <Herosection2 title={"Blogs"}/>
        <section className="ftco-section bg-light">
      <div className="container">
        <div className="row d-flex">
          <Blogcard/>          	
          <Blogcard/>          	
          <Blogcard/>          	
          <Blogcard/>          	
          <Blogcard/>          	
          <Blogcard/>          	
        </div>
        <div className="row mt-5">
          <div className="col text-center">
            <div className="block-27">
              <ul>
                <li><a href="#">&lt;</a></li>
                <li className="active"><span>1</span></li>
                <li><a href="#">2</a></li>
                <li><a href="#">3</a></li>
                <li><a href="#">4</a></li>
                <li><a href="#">5</a></li>
                <li><a href="#">&gt;</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
    <Newslettersection/>
    </>
  )
}

export default Blogpage