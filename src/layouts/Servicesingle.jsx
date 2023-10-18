import React from 'react'
import SingleServiceSection from '../components/sections/SingleServiceSection'
import Herosection2 from '../components/sections/Herosection2'
import Contact from '../components/sections/Contact'
import data from '../assets/json/services.json'
import {  useParams } from 'react-router-dom';


const Servicesingle = () => {
  const { id } = useParams();
  
  const service = data.find((item) => item.id === id);
  if (!service) {
    return <div>Service not found</div>;
  }
    

  return (
    <>
        <Herosection2 title={service.title || "Service not found"} backgroundImage={service.backgroundImage}/>
        <SingleServiceSection id={id}/>
        <Contact/>
    </>
  )
}

export default Servicesingle