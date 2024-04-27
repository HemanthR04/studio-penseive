import React from 'react'
import { AnimatedTooltip } from './ui/animated-tooltip';

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
    <div className='aboutUs px-4 w-[100%] '>
      <h1 className='text-Heading-mobile font-bold mt-[80px]'>About</h1>
      <p className='text-paragraph mt-[12px]'>Studio Pensieve is a distinguished architecture and interior design firm renowned for its innovative and visionary approach to creating spaces that captivate the imagination. With a commitment to excellence and attention to detail, Studio Pensieve crafts environments that seamlessly blend functionality with artistic flair. Through a meticulous process that combines creativity, sustainability, and cutting-edge technology, Studio Pensieve consistently delivers timeless and inspiring architectural solutions that leave a lasting impression.</p>
      <h1 className='text-Heading-mobile font-bold mt-[80px]'>Team</h1>
      <div className="flex flex-row items-center justify-start mb-10 w-full mt-[20px]">
      <AnimatedTooltip items={people} />
    </div>
    </div>
  )
}

export default AboutUs