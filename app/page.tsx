import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Work from "@/components/Work";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <Header/>
      <Hero/>
      
      <Work/>
      {/* <Gallery/> */}
      </>
  );
}
