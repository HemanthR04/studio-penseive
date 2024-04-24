"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

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
        <h1 className="text-primary text-[48px] py-10 font-Switzer font-bold tracking-widest">NIRVANA</h1>
        <motion.div
          whileInView={{ scaleX: 1.2}}
          transition={{ duration: 2 }}
          className="w-[50%] h-[70%] bg-white rounded-lg "
        ></motion.div>
      </motion.div>
      <motion.div
        style={{ scaleX: x }}
        className=" w-[96%] rounded-md mx-auto  h-[90vh]  sticky top-20 -z-10 flex flex-col justify-center items-center text-[200px] text-secondary bg-[#808080] shadow-2xl"
      >
        <h1 className="text-primary text-[48px] py-10 font-Switzer font-bold tracking-widest">NIRVANA</h1>
        <motion.div
          whileInView={{ scaleX: 1.2}}
          transition={{ duration: 2,delay:0.2  }}
          className="w-[50%] h-[70%] bg-white rounded-lg"
        ></motion.div>
      </motion.div>
      <motion.div
        style={{ scaleX: x }}
        className="w-[98%] rounded-md mx-auto  h-[90vh]  flex sticky top-32 -z-10  flex-col justify-center items-center text-[200px] text-secondary bg-[#c2beb6] shadow-2xl"
      >
        <h1 className="text-secondary text-[48px] py-10 font-Switzer font-bold tracking-widest">NIRVANA</h1>
        <motion.div
          whileInView={{ scaleX: 1.2}}
          transition={{ duration: 2,delay:0.2  }}
          className="w-[50%] h-[70%] bg-white rounded-lg"
        ></motion.div>
      </motion.div>
      <motion.div
        style={{ scaleX: x }}
        className="w-[100%] rounded-md mx-auto  h-screen  flex  -z-10 justify-center flex-col items-center text-[200px] text-secondary bg-[#dbdbd9] shadow-2xl"
      >
        <h1 className="text-secondary text-[48px] py-10 font-Switzer font-bold tracking-widest">NIRVANA</h1>
        <motion.div
          whileInView={{ scaleX: 1.2}}
          transition={{ duration: 2 ,delay:0.2}}
          className="w-[50%] h-[70%] bg-white rounded-lg shadow-lg"
        ></motion.div>
      </motion.div>

     
      </div>
      
    </>
  );
};

export default Work;
