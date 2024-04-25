import React from "react";
import Link from "next/link";

const CTA1 = () => {
  return (
    <div className="w-full mt-[100px] text-secondary font-Switzer flex flex-col items-center justify-center">
      <h1 className="text-[80px] tracking-tighter">
        We will help you build your dream space.
      </h1>
      <Link href={"/"}>
        <div className="px-8 text-[24px] border-[1px] border-black rounded-2xl py-2 shadow-xl">
          Contact Us
        </div>
      </Link>
    </div>
  );
};

export default CTA1;
