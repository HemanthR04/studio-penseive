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
     <AnimatedCursor
      innerSize={12}
      outerSize={12}
      color='47,47,47'
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      
      clickables={[
        'a',
        'input[type="text"]',
        'input[type="email"]',
        'input[type="number"]',
        'input[type="submit"]',
        'input[type="image"]',
        'label[for]',
        'select',
        'textarea',
        'button',
        '.link'
      ]}
    />
      <Header/>
      <Hero/>
      <AboutUs/>
      <Work/>

      <CTA1/>
      
      <Testimonials/>
      
      </>
  );
}
