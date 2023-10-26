import React from 'react'
import Herosection2 from '../components/sections/Herosection2'
import Newslettersection from '../components/sections/Newslettersection'
import BlogsingleSection from '../components/sections/BlogsingleSection'
import { useParams } from 'react-router-dom'
import blogs from "../assets/json/blogs.json"

const Blogsingle = () => {
  let{id} = useParams();
  if(!id){
    id ="1"
  }

  const blog = blogs.find((item)=>item.id === id)
  if (!blog) {
    return <div>blog not found</div>;
  }

  return (
    <>
        <Herosection2 title={blog.title || "Blog single"} backgroundImage={blog.header_img}/> 
        <BlogsingleSection id={id}/>
        <Newslettersection/>
    </>
  )
}

export default Blogsingle