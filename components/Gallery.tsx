import React from "react";

import Gallery1 from "../public/Gallery1.png";
import Gallery2 from "../public/Gallery2.png";
import Gallery3 from "../public/Gallery3.png";
import Gallery4 from "../public/Gallery4.png";
import Gallery5 from "../public/Gallery5.png";
import { InfiniteMovingCards } from "./ui/gallery-ui";

const Gallery = () => {
  return (
    <>
     <div className="h-[40rem] rounded-md flex flex-col antialiased bg-primary items-center justify-center relative overflow-hidden">
    <InfiniteMovingCards
      items={Images}
      direction="right"
      speed="slow"
    />
    
  </div>
     <div className="rounded-md flex flex-col antialiased bg-primary  items-center justify-center relative overflow-hidden">
     <InfiniteMovingCards
       items={Images}
       direction="left"
       speed="slow"
     />
     
   </div>
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
  }
];
export default Gallery;
