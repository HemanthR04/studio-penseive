'use client'
import AboutUs from "@/components/AboutUs";
import CTA1 from "@/components/CTA1";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";


import Image from "next/image";
import AnimatedCursor from "react-animated-cursor";


export default function Home() {
  return (
    <>
     
      <Header/>
      <Hero/>
       <AboutUs/>
      {/* <Work/>

      <CTA1/>
      
      <Testimonials/>  */}
      
      </>
  );
}
