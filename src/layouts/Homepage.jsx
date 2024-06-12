import React, { useEffect } from 'react'
import Herosection from '../components/sections/Herosection'
import Servicesection from '../components/sections/Servicesection'
import Aboutsection from '../components/sections/Aboutsection'
import TeamSection from '../components/sections/TeamSection'
import Contact from '../components/sections/Contact'
import Testimonials from '../components/sections/Testimonials'
import Blogsection from '../components/sections/Blogsection'
import Newslettersection from '../components/sections/Newslettersection'
import { Map } from '../components/sections/Map'
import ClientsSection from '../components/sections/ClientsSection'

const Homepage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      
      <Herosection />
      <Servicesection/>
      <Aboutsection/>
      {/* <TeamSection/> */}
      <Testimonials />
      <ClientsSection/>
      <Blogsection/>
      <Contact/>
      <Map/>
      <Newslettersection/>
      
    </>
  )
}

export default Homepage