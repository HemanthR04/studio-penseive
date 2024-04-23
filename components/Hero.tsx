"use client";
import React from "react";
import { motion } from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";
import { useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroImg from '../public/hero.png'
import Image from "next/image";


const Word = styled(motion.span)`
  display: inline-block;
  margin-right: 0.25em;
  white-space: nowrap;
`;

const Character = styled(motion.span)`
  display: inline-block;
  margin-right: -0.05em;
`;

const Hero = () => {
  const text = "Studio Penseive";

  const ctrls = useAnimation();

  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      ctrls.start("visible");
    }
    if (!inView) {
      ctrls.start("hidden");
    }
  }, [ctrls, inView]);
  const wordAnimation = {
    hidden: {},
    visible: {},
  };

  const characterAnimation = {
    hidden: {
      opacity: 0,
      y: `0.25em`,
    },
    visible: {
      opacity: 1,
      y: `0em`,
      transition: {
        duration: 1,
        ease: [0.2, 0.65, 0.3, 0.9],
      },
    },
  };

  return (
    <main className="hero w-full h-screen  flex">
      <div className="Logo flex h-screen flex-col justify-end w-[50%]">
      
        <h1
          aria-label={text}
          role="heading"
          className="text-[180px] py-[100px]  px-8 font-Gambarin  leading-[130px]"
        >
          {text.split(" ").map((word, index) => {
            return (
              <Word
                ref={ref}
                aria-hidden="true"
                key={index}
                initial="hidden"
                animate={ctrls}
                variants={wordAnimation}
                transition={{
                  delayChildren: index * 0.25,
                  staggerChildren: 0.05,
                }}
              >
                {word.split("").map((character, index) => {
                  return (
                    <Character
                      aria-hidden="true"
                      key={index}
                      variants={characterAnimation}
                    >
                      {character}
                    </Character>
                  );
                })}
              </Word>
            );
          })}
        </h1>
      </div>
      <div className="w-[50%] flex flex-col justify-around">
        <motion.div
          initial={{ y: 0.25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, type: "tween" }}
          className=" "
        >
          <p className="text-[38.6px] font-normal font-Switzer  leading-[38px] py-10 ">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Facilis
            dolorem provident, omnis. Natus repellat neque omnis..
          </p>
        </motion.div>
        <motion.div
          initial={{ y: 0.25, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.75, type: "tween" }}
          className=" "
        >
          <p className="text-[14px]  font-Switzer  w-[30%] leading-[20px]">
            Lorem ipsum, dolor illum est elit. i blanditiis iste illum est
            placeat eaque!
          </p>
        </motion.div>
      </div>
    </main>
  );
};

export default Hero;
