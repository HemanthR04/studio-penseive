import Image from "next/image";
import * as React from "react";
import Heroimage from '../public/Gallery1.png'
import Gallery from "./Gallery";

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
    <div className="hero-section w-full  px-4 flex flex-col  items-center gap-[100px] justify-start ">
        <div className="hero-heading text-Heading-mobile leading-Heading-mobile font-bold font-Satoshi mt-[80px]">Distinguished architecture and interior design firm renowned for its innovative  approach to creating spaces that captivate the imagination.</div>
        <div className="hero-subheading-logol md:flex md:flex-row-reverse md:w-full md:justify-between ">
            <p className="font-Satoshi text-paragraph leading-paragraph mt-[80px]">consistently delivering timeless and inspiring architectural solutions that leave a lasting impression.</p>
            <div className="text-MassiveHeading leading-MassiveHeading font-extrabold font-Satoshi mt-[24px]"><h1>STUDIO<br/>PENSIEVE</h1></div>
        </div>
        
        {/* <Gallery/>
              */}
    </div> 
    </>
  );
};

export default MyComponent;