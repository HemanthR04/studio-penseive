import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[60px] font-Switzer items-center flex  ">
      <div className="w-[50%]  px-8 text-Heading-mobile">
        <h1>hello!</h1>
      </div>
      <div>
        <ul className="gap-8 text-[18px] hidden md:flex">
          <li className="hover:underline">WORK</li>
          <li className="hover:underline">BLOG</li>
          <li className="hover:underline">CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
