import React from "react";

const Header = () => {
  return (
    <div className="w-full h-[60px] font-Switzer flex items-center">
      <div className="w-[50%] h-[60px] flex items-center font-Switzer text-md px-8">
        <h1>hello!</h1>
      </div>
      <div>
        <ul className="flex gap-8 text-md py-4 ">
          <li className="hover:underline">WORK</li>
          <li className="hover:underline">BLOG</li>
          <li className="hover:underline">CONTACT</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
