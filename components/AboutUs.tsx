"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Man1 from "../public/Man1.png";
import Girl2 from "../public/Girl2.png";
import Gallery1 from '../public/Gallery1.png'
import Gallery2 from '../public/Gallery2.png'
import Gallery3 from '../public/Gallery3.png'
import Gallery4 from '../public/Gallery4.png'
import Gallery5 from '../public/Gallery5.png'
import Image from "next/image";

const people = [
  {
    id: 1,
    name: "Sanjan Hoode",
    designation: "Co-Founder",
    image: Man1,
  },
  {
    id: 2,
    name: "Shashank Shetty",
    designation: "Co-Founder",
    image: Man1,
  },
  {
    id: 3,
    name: "Sahana Prabhu",
    designation: "Architect",
    image: Girl2,
  },
  {
    id: 4,
    name: "Lakshmi S Nair",
    designation: "Interior Designer",
    image: Girl2,
  },
  {
    id: 5,
    name: "Diya",
    designation: "Interior Designer",
    image: Girl2,
  },
];

const AboutUS = () => {
  return (
    <div className="bg-primary">
      <HorizontalScrollCarousel />
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-75%"]);

  return (
    <>
    
    </>
  );
};

export default AboutUS;
