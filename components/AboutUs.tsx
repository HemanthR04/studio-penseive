"use client";
import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import Man1 from "../public/Man1.png";
import Girl2 from "../public/Girl2.png";

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

const Example = () => {
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

  const x = useTransform(scrollYProgress, [0, 1], ["1%", "-95%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-primary">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          <div className="page1 group relative h-[650px] w-[1500px] overflow-hidden bg-primary text-secondary">
            <div className="absolute inset-0 z-10 grid place-content-center">
              <p className=" p-8 font-Switzer text-[200px] uppercase text-secondary backdrop-blur-lg">
                ABOUT US
              </p>
            </div>
          </div>
          <div className="page2 group relative h-[650px] w-[1500px] overflow-hidden bg-primary text-secondary">
            <div className="absolute inset-0 z-10 grid place-content-center">
              <div className="flex justify-between items-center">
                <div className="flex flex-col gap-4 px-12">
                  <div className="h-[300px] w-[450px] bg-red-400">
                    {/* Image */}
                  </div>
                  <div className="h-[300px] w-[450px] bg-red-300">
                    {/* Image */}
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
              <div className="w-[300px] h-[600px] bg-red-100 flex items-start justify-center">
                <div className="w-[300px] h-[300px] bg-red-400"></div>
              </div>
              <div className="w-[300px] h-screen bg-red-100 flex items-end justify-center">
                <div className="w-[300px] h-[300px] bg-red-400"></div>
              </div>
              <div className="w-[300px] h-screen bg-red-100 flex items-center  justify-center">
                <div className="w-[300px] h-[300px] bg-red-400"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Example;
