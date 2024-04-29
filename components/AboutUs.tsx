"use client";
import React from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import Man1 from "../public/Man1.png";
import Girl2 from "../public/Girl2.png";
import Gallery1 from "../public/Gallery1.png";
import Gallery2 from "../public/Gallery2.png";
import Gallery3 from "../public/Gallery3.png";
import Gallery4 from "../public/Gallery4.png";
import Gallery5 from "../public/Gallery5.png";
import Image from "next/image";
const people = [
  {
    id: 1,
    name: "Sanjan Hoode",
    designation: "Co-Founder",
    image:
      "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
  },
  {
    id: 2,
    name: "Shashank Shetty",
    designation: "Co-Founder",
    image:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 3,
    name: "Sahana Prabhu",
    designation: "Architect",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 4,
    name: "Lakshmi S Nair",
    designation: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
  },
  {
    id: 5,
    name: "Diya",
    designation: "Interior Designer",
    image:
      "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
  },
];

const AboutUs = () => {
  return (
    <>
      <div className="aboutUs px-4 w-[100%] md:hidden ">
        <h1 className="text-Heading-mobile font-bold mt-[80px]">About</h1>
        <p className="text-paragraph mt-[12px]">
          Studio Pensieve is a distinguished architecture and interior design
          firm renowned for its innovative and visionary approach to creating
          spaces that captivate the imagination. With a commitment to excellence
          and attention to detail, Studio Pensieve crafts environments that
          seamlessly blend functionality with artistic flair. Through a
          meticulous process that combines creativity, sustainability, and
          cutting-edge technology, Studio Pensieve consistently delivers
          timeless and inspiring architectural solutions that leave a lasting
          impression.
        </p>
        <h1 className="text-Heading-mobile font-bold mt-[80px]">Team</h1>
        <div className="flex flex-row items-center justify-start mb-10 w-full mt-[20px]">
          <AnimatedTooltip items={people} />
        </div>
      </div>

      <div className="bg-primary hidden md:block">
        <HorizontalScrollCarousel />
      </div>
    </>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-200%"]);

  return (
    <>
      <section ref={targetRef} className="relative h-[300vh] bg-primary">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden">
          <motion.div style={{ x }} className="flex gap-4">
            <div className="page1 group relative h-[650px] w-[1500px] overflow-hidden bg-primary text-secondary">
              <div className="absolute inset-0 z-10 grid place-content-center">
                <p className=" p-8 font-Satoshi md:font-bold text-[200px] uppercase text-secondary backdrop-blur-lg">
                  ABOUT US
                </p>
              </div>
            </div>
          <div className="page2 group relative h-[650px] w-[1500px] overflow-hidden bg-primary text-secondary">
            <div className="absolute inset-0 z-10 grid place-content-center">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-4 px-12">
                  
                  <div className="h-[300px] w-[450px] ">
                  <Image src={Gallery4} alt="Property Image" className="rounded-md shadow-md w-[500px] h-[310px]"></Image>
                  </div>
                  
                  <div className="h-[300px] w-[450px] ">
                  <Image src={Gallery5} alt="Property Image" className="rounded-md shadow-md w-[500px] h-[310px]"></Image>
                  </div>
                </div>
                <div className="aboutUStext flex flex-col items-start gap-8">
                  <h1 className="text-[48px]">We are so and so</h1>
                  <p className="w-[70%] text">
                    Lorem ipsum dolor Lorem ipsum dolor sit amet consectetur
                    adipisicing elit. Officia eius mollitia iste amet aspernatur
                    iusto sint consectetur, ex in ratione inventore, sit eveniet
                    vero tenetur esse dolorum fuga perspiciatis dicta?sit amet
                    consectetur adipisicing elit. Eveniet debitis officiis a
                    accusamus doloremque amet atque harum cumque nobis
                    distinctio illum ex ad, necessitatibus quaerat! Aut,
                    dolorum. At, porro cupiditate?
                  </p>
                  <div>
                    <div className="flex flex-row items-center justify-center mb-10 w-full">
                      <AnimatedTooltip items={people} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="page3 group relative h-[650px] w-[1500px] overflow-hidden bg-primary text-secondary">
            <div className="relative inset-0 z-10 flex items-center justify-around ">
             
              <div className="w-[300px] h-[600px]  flex items-start justify-center">
                <div className="w-[300px] h-[300px] ">
                    <Image src={Gallery1} alt="Property Image" className="rounded-md shadow-md"></Image>
                </div>
              </div>
              
              <div className="w-[300px] h-screen  flex items-center justify-center">
                <div className="w-[300px] h-[300px] ">
                <Image src={Gallery2} alt="Property Image" className="rounded-md shadow-md"></Image>
                </div>
              </div>
             
              <div className="w-[300px] h-screen  flex items-start  justify-center">
                <div className="w-[300px] h-[300px] ">
                <Image src={Gallery3} alt="Property Image" className="rounded-md  shadow-md"></Image>
                </div>
              </div>
            </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;
