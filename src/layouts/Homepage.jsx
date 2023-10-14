import React from 'react'
import Navbar from '../components/static/navbar'
import Herosection from '../components/sections/Herosection'
import Servicesection from '../components/sections/Servicesection'
import Aboutsection from '../components/sections/Aboutsection'
import Tipssection from '../components/sections/Tipssection'
import Footer from '../components/static/footer'
import Contact from '../components/sections/Contact'
import Testimonials from '../components/sections/Testimonials'
import Blogsection from '../components/sections/Blogsection'
import Newslettersection from '../components/sections/Newslettersection'

const Homepage = () => {
  return (
    <>
      
      <Herosection />
      <Servicesection/>
      <Aboutsection/>
      {/* <Tipssection/> */}
      <Testimonials/>
      <Contact/>
      <Blogsection/>
      <Newslettersection/>
      
    </>
  )
}

export default Homepage