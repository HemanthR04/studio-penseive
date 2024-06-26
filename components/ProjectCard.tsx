'use client'
import Image from "next/image";
import Gallery1 from "../public/Gallery1.png";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const ProjectCard = ({
    
  items,
}: {
  items: {
    id: number;
    name: string;
    image: any;
    classname:string;
  }[];
}) => {

    const targetRef = useRef<HTMLDivElement | null>(null);
    const { scrollYProgress } = useScroll({
      target: targetRef,
    });
  
    const x = useTransform(scrollYProgress, [0, 1], ["110%", "90%"]);
  return (
    <>
      {items.map((item, idx) => (
        <motion.div
        style={{ scaleX: x }}
          key={item.name}
          className={item.classname}
        >
          <h1 className="text-Heading-mobile font-bold tracking-wider text-primary text-center py-[20px]">
            {item.name}
          </h1>
          <Image
            src={item.image}
            alt="/"
            className="w-[90%] h-[350px] mx-auto mt-[40px] rounded-2xl"
          />
        </motion.div>
      ))}
    </>
  );
};

export default ProjectCard;
