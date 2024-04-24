'use client'

import React, { useRef } from 'react'
import { motion, useScroll, useTransform } from "framer-motion"

const Services = () => {
  const { scrollYProgress } = useScroll();
  return (
    <div className='h-full w-full relative'>
     <HorizontalScrollCarousel1 />
     <HorizontalScrollCarousel2 />
    
    </div>
  )
}

const HorizontalScrollCarousel1 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-30%", "80%"]);
  

  return (
    <section ref={targetRef} className="absolute h-[100vh] bg-primary text-secondary">
      <div className="sticky top-40 flex flex-col h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <h1 className='text-[100px]'>Architecture</h1>
        </motion.div>
        
        
      </div>
    </section>
  );
};
const HorizontalScrollCarousel2 = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["-30%", "80%"]);
  

  return (
    <section ref={targetRef} className="relative h-[200vh] bg-primary text-secondary">
      <div className="sticky top-0 flex flex-col h-screen items-center overflow-hidden">
        
        <motion.div style={{ x }} transition={{reverse:true}} className="flex gap-4">
          <h1 className='text-[100px]'>Interior Design</h1>
        </motion.div>
        
      </div>
    </section>
  );
};


export default Services