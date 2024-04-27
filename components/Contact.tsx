import * as React from "react";

interface NavItemProps {
  label: string;
}

const NavItem: React.FC<NavItemProps> = ({ label }) => {
  return <div className="mt-3.5 text-sm leading-5 text-white">{label}</div>;
};

const navItems = ["Home", "Work", "About", "Contact us"];

const MyComponent: React.FC = () => {
  return (
    <div className="flex flex-col items-start pt-10 pr-14 pb-4 pl-6 bg-zinc-800 max-w-[360px]">
      <div className="flex gap-5 justify-between py-px pr-9">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/bb93dff084d0e015237bff643e4a85bd2f0b80598be1dd2509f1c84aeaeb1897?apiKey=f1716b67ec4e483e95e723d993b0aceb&"
          alt="Social media icon"
          className="shrink-0 w-8 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/910a070ccf0401553d80b83917b2e719a049d077c029d3dff65e31378d21fb48?apiKey=f1716b67ec4e483e95e723d993b0aceb&"
          alt="Social media icon"
          className="shrink-0 w-8 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/81fd0dab87ea344300fbca0712035db7ae8c23fdc8be2c14fe398274aebef528?apiKey=f1716b67ec4e483e95e723d993b0aceb&"
          alt="Social media icon"
          className="shrink-0 w-8 aspect-square"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/35b9cacaf713e80ff40d30d9302daf6ad6403b3db1598d33b7a447abd573d6dc?apiKey=f1716b67ec4e483e95e723d993b0aceb&"
          alt="Social media icon"
          className="shrink-0 aspect-[0.81] w-[26px]"
        />
      </div>
      <h2 className="mt-16 text-2xl font-bold leading-10 text-zinc-100">
        Navigation
      </h2>
      {navItems.map((item) => (
        <NavItem key={item} label={item} />
      ))}
      <div className="mt-11 text-2xl font-bold leading-10 text-white">
        Call us @ +91923454432
      </div>
      <footer className="mt-20 text-sm leading-5 text-white">
        Designed and Developed
        <br /> by Hemanth{" "}
      </footer>
    </div>
  );
};

export default MyComponent;