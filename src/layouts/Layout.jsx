import React from 'react'
import Navbar from '../components/static/navbar'
import Homepage from './Homepage'
import Footer from '../components/static/footer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Aboutpage from './Aboutpage'
import Blogpage from './Blogpage'
import Contactpage from './Contactpage'
import Servicespage from './Servicespage'
import Gallerypage from './Gallerypage'
import Blogsingle from './Blogsingle'

const Layout = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path='/' exact Component={Homepage} />
        <Route path='/about' Component={Aboutpage} />
        <Route path='/blogs' Component={Blogpage} />
        <Route path='/contact' Component={Contactpage} />
        <Route path='/gallery' Component={Gallerypage} />
        <Route path='/services' Component={Servicespage} />
        <Route path='/blogsingle' Component={Blogsingle} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default Layout