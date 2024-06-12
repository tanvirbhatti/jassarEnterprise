import React, { useEffect } from 'react'
import Herosection2 from '../components/sections/Herosection2'
import Servicesection from '../components/sections/Servicesection'
import TeamSection from '../components/sections/TeamSection'

const Servicespage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
        <Herosection2 title={"Services"} backgroundImage='../homeImg.jpeg'/>
        <Servicesection/>
        {/* <TeamSection/> */}
    </>
  )
}

export default Servicespage