import Image from "next/image";
import * as React from "react";
import Heroimage from "../public/Gallery1.png";
import Gallery from "./Gallery";
import { InfiniteMovingCards } from "./ui/gallery-ui";

import Gallery1 from "../public/Gallery1.png";
import Gallery2 from "../public/Gallery2.png";
import Gallery3 from "../public/Gallery3.png";
import Gallery4 from "../public/Gallery4.png";
import Gallery5 from "../public/Gallery5.png";
import Testimonials from "./Testimonials";
import { motion } from "framer-motion";
interface TextBlockProps {
  text: string;
  className?: string;
}

const TextBlock: React.FC<TextBlockProps> = ({ text, className }) => {
  return <div className={`w-full ${className}`}>{text}</div>;
};

const MyComponent: React.FC = () => {
  return (
    <>
     
      <div className="hero-section w-full md:mt-[160px] px-4 flex flex-col  items-end gap-[100px] justify-end ">
        <motion.div className="hero-heading text-Heading-mobile md:text-Heading-PC leading-Heading-mobile font-bold font-Satoshi mt-[80px] md:w-[50%] ">
          Distinguished architecture and interior design firm renowned for its
          innovative approach to creating spaces that captivate the imagination.
        </motion.div>
        <div className="hero-subheading-logol md:flex md:flex-row-reverse md:w-full justify-end md:items-end">
          <div><p className="font-Satoshi md:text-paragraph-PC text-paragraph leading-paragraph mt-[80px] md:w-[50%]">
            consistently delivering timeless and inspiring architectural
            solutions that leave a lasting impression.
          </p>
          </div>
          <div className="text-MassiveHeading md:text-MassiveHeading-PC md:leading-MassiveHeading-PC leading-MassiveHeading font-extrabold font-Satoshi mt-[24px] md:mt-[0px] md:w-[50%]">
            <h1>
              STUDIO
              <br />
              PENSIEVE
            </h1>
          </div>
        </div>
      
       
      </div>
      <Gallery/>
    </>
  );
};
const Images = [
  {
    id: 1,
    image: Gallery1,
  },
  {
    id: 1,
    image: Gallery2,
  },
  {
    id: 1,
    image: Gallery3,
  },
  {
    id: 1,
    image: Gallery4,
  },
  {
    id: 1,
    image: Gallery3,
  },
  {
    id: 1,
    image: Gallery1,
  },
  {
    id: 1,
    image: Gallery2,
  },
  {
    id: 1,
    image: Gallery3,
  },
  {
    id: 1,
    image: Gallery4,
  },
  {
    id: 1,
    image: Gallery1,
  },
];
export default MyComponent;
