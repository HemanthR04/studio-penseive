import React from "react";
import Link from "next/link";

const CTA1 = () => {
  return (
    <div className="w-full mt-[100px] text-secondary font-Switzer flex flex-col items-center justify-center">
      <h1 className="text-Heading-mobile tracking-tighter text-center md:text-8xl">
        Let us build your dream space.
      </h1>
      <Link href={"/"}>
        <div className="bg-secondary text-paragraph text-primary px-4 md:px-8 py-2 md:py-3 mt-[12px] rounded-3xl md:text-3xl">
          Contact Us
        </div>
      </Link>
    </div>
  );
};

export default CTA1;
