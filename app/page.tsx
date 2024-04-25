import AboutUs from "@/components/AboutUs";
import CTA1 from "@/components/CTA1";

import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Testimonials from "@/components/Testimonials";
import Work from "@/components/Work";


import Image from "next/image";


export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      <AboutUs/>
      <Work/>

      <CTA1/>
      
      <Testimonials/>
      
      </>
  );
}
