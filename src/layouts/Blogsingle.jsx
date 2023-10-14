import React from 'react'
import Herosection2 from '../components/sections/Herosection2'
import Newslettersection from '../components/sections/Newslettersection'
import BlogsingleSection from '../components/sections/BlogsingleSection'

const Blogsingle = () => {
  return (
    <>
        <Herosection2 title={"Blog single"}/> 
        <BlogsingleSection/>
        <Newslettersection/>
    </>
  )
}

export default Blogsingle