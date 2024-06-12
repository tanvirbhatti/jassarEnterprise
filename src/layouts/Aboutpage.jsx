import React, { useEffect } from 'react';
import Aboutsection from '../components/sections/Aboutsection';
import Contact from '../components/sections/Contact';
import Testimonials from '../components/sections/Testimonials';
import Herosection2 from '../components/sections/Herosection2';
import { Map } from '../components/sections/Map';
import TeamSection from '../components/sections/TeamSection';
import AboutSection2 from '../components/sections/AboutSection2';

const Aboutpage = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <Herosection2 title={"About us"} backgroundImage={"aboutbg.jpeg"}/>
      <Aboutsection />
      <AboutSection2/>
      <TeamSection/>
      <Contact />
      <Testimonials />

      <Map/>
    </>
  );
};

export default Aboutpage;
