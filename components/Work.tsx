"use client";
import Gallery1 from '../public/Gallery1.png'
import Gallery2 from '../public/Gallery2.png'
import Gallery3 from '../public/Gallery3.png'
import Gallery4 from '../public/Gallery4.png'
import Gallery5 from '../public/Gallery5.png'
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import ProjectCard from './ProjectCard';

const data = [{
  id:1,
  name:"NORTH",
  image:Gallery1,
  classname:"w-[94%] h-[500px] bg-black rounded-2xl my-[40px] sticky top-20 -z-10 mx-auto"
},
{
  id:1,
  name:"SOUTH",
  image:Gallery2,
  classname:"w-[96%] h-[500px] bg-[#808080] rounded-2xl my-[40px] sticky top-28 -z-10 mx-auto"
},
{
  id:1,
  name:"EAST",
  image:Gallery3,
  classname:"w-[98%] h-[500px] text-secondary  bg-[#C2BEB6] rounded-2xl my-[40px] sticky top-40 -z-10 mx-auto"
},
{
  id:1,
  name:"WEST",
  image:Gallery4,
  classname:"w-full h-[500px] text-secondary bg-[#DBDBD9] rounded-2xl my-[40px] mx-auto"
},]

const Work = () => {


  return (
    <>
    
    
    <div className='work-section w-full px-4 mt-[100px] flex flex-col items-center md:justify-center md:h-screen'>
      <div className='w-[100%] '>
      <h1 className='text-Heading-mobile font-bold md:text-[200px]  md:text-center md:uppercase'>Work</h1>
        </div>
        <ProjectCard items={data}/> 
    </div>
     
     </>
  )
}

export default Work