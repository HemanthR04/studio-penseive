"use client";
import Gallery1 from '../public/Gallery1.png'
import Gallery2 from '../public/Gallery2.png'
import Gallery3 from '../public/Gallery3.png'
import Gallery4 from '../public/Gallery4.png'
import Gallery5 from '../public/Gallery5.png'

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

const Work = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["98%", "80%"]);
  return (
    <>
    
    <div className="flex flex-col items-center justify-center">

    
      <div className="w-full h-screen sticky top-0 -z-20 flex justify-center items-center text-[200px] text-secondary bg-primary">
        <h1>WORK</h1>
      </div>
      <motion.div
        style={{ scaleX: x }}
        className="w-[94%] rounded-md mx-auto h-[90vh] sticky top-10 -z-10 flex flex-col justify-center items-center text-[200px] text-secondary bg-[#1b1c1f] shadow-2xl"
      >
        <h1 className="text-primary text-[48px] py-10 font-Switzer font-bold tracking-widest">NORTH</h1>
        <motion.div 
        initial={{scale:0.8}}
          whileInView={{ scale: 1.2}}
          transition={{ duration: 1 }}
          className="w-[30%] h-[70%] bg-white rounded-lg "
        >
          <Image src={Gallery4} alt="Property Image" className="rounded-md shadow-md w-[100%] h-[100%]"></Image>
        </motion.div>
      </motion.div>
      <motion.div
        style={{ scaleX: x }}
        className=" w-[96%] rounded-md mx-auto  h-[90vh]  sticky top-20 -z-10 flex flex-col justify-center items-center text-[200px] text-secondary bg-[#808080] shadow-2xl"
      >
        <h1 className="text-primary text-[48px] py-10 font-Switzer font-bold tracking-widest">SOUTH</h1>
        <motion.div
          initial={{scale:0.8}}
          whileInView={{ scale: 1.2}}
          transition={{ duration: 0.5 }}
          className="w-[30%] h-[70%] bg-white rounded-lg "
        >
          <Image src={Gallery3} alt="Property Image" className="rounded-md shadow-md w-[100%] h-[100%]"></Image>
        </motion.div>
      </motion.div>
      <motion.div
        style={{ scaleX: x }}
        className="w-[98%] rounded-md mx-auto  h-[90vh]  flex sticky top-32 -z-10  flex-col justify-center items-center text-[200px] text-secondary bg-[#c2beb6] shadow-2xl"
      >
        <h1 className="text-secondary text-[48px] py-10 font-Switzer font-bold tracking-widest">EAST</h1>
        <motion.div
          initial={{scale:0.8}}
          whileInView={{ scale: 1.2}}
          transition={{ duration: 0.5 }}
          className="w-[30%] h-[70%] bg-white rounded-lg "
        >
          <Image src={Gallery2} alt="Property Image" className="rounded-md shadow-md w-[100%] h-[100%]"></Image>
        </motion.div>
      </motion.div>
      <motion.div
        style={{ scaleX: x }}
        className="w-[100%] rounded-md mx-auto  h-screen  flex  -z-10 justify-center flex-col items-center text-[200px] text-secondary bg-[#dbdbd9] shadow-2xl"
      >
        <h1 className="text-secondary text-[48px] py-10 font-Switzer font-bold tracking-widest">WEST</h1>
        <motion.div
          initial={{scale:0.8}}
          whileInView={{ scale: 1.2}}
          transition={{ duration: 0.5 }}
          className="w-[30%] h-[70%] bg-white rounded-lg "
        >
          <Image src={Gallery1} alt="Property Image" className="rounded-md shadow-md w-[100%] h-[100%]"></Image>
        </motion.div>
      </motion.div>

     
      </div>
      
    </>
  );
};

export default Work;
