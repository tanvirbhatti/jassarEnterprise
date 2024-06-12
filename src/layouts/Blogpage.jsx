import React, { useEffect } from 'react'
import Herosection2 from '../components/sections/Herosection2'
import Blogcard from '../components/cards/Blogcard'
import Newslettersection from '../components/sections/Newslettersection'
import blogs from '../assets/json/blogs.json'

const Blogpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
        <Herosection2 title={"Blogs"} backgroundImage='gallery-3.jpg'/>
        <section className="ftco-section bg-light">
      <div className="container">
        <div className="row d-flex">
        {blogs.map((item,index)=>(
            <Blogcard key={index} img={item.images[0]} title={item.title} id={item.id} tagline={item.tagline}/>  
          ))}        	
        </div>
        {/* <div className="row mt-5">
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
        </div> */}
      </div>
    </section>
    <Newslettersection/>
    </>
  )
}

export default Blogpage