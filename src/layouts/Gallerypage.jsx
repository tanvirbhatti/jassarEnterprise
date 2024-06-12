import React, { useEffect } from 'react'
import Herosection2 from '../components/sections/Herosection2'
import Gallerysection from '../components/sections/Gallerysection'

const Gallerypage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
        <Herosection2 title={"Gallery"} backgroundImage='../gallerybg.jpeg'/>
        <Gallerysection/>
    </>
  )
}

export default Gallerypage