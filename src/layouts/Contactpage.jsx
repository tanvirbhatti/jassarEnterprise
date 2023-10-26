import React from 'react'
import Herosection2 from '../components/sections/Herosection2'
import ContactsectionLarge from '../components/sections/ContactsectionLarge'
import Newslettersection from '../components/sections/Newslettersection'

const Contactpage = () => {
  return (
    <>
        <Herosection2 title={"Contact"} backgroundImage='gallery-4.jpg'/>
        <ContactsectionLarge/>
        <Newslettersection/>
    </>
  )
}

export default Contactpage