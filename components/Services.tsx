import * as React from "react";

interface ServiceCardProps {
  number: string;
  title: string;
  imageUrl: string;
  description: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ number, title, imageUrl, description }) => {
  return (
    <>
    
    <div className="mt-8">
      <div className="text-2xl md:text-4xl font-bold">{number}</div>
      <h3 className="mt-2 text-2xl md:text-4xl font-bold leading-6">{title}</h3>
     
      <p className="mt-3 text-sm md:text-[16px] md:max-w-[600px] leading-5">{description}</p>
    </div>
    </>
  );
};

const Services: React.FC = () => {
  const services = [
    {
      number: "01",
      title: "Architectural Design",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/9f77848b52cd7246d88296a931342602aaa4a10bd67df4dda6c93e3301e41cf9?apiKey=f1716b67ec4e483e95e723d993b0aceb&",
      description: `conceptualization, planning, and design of buildings and structures. It includes creating blueprints, 3D models, and construction drawings.`,
    },
    {
      number: "02", 
      title: "Interior Design",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/677c8ad402be6ff79a2056dee6477eb8d77366a754c99850c55c87f4e261f40b?apiKey=f1716b67ec4e483e95e723d993b0aceb&",
      description: `Focused on creating functional and aesthetically pleasing interior spaces, interior design services cover everything from layout planning to selecting furniture, materials, colors, and lighting.`,
    },
    {
      number: "03",
      title: "Renovation and remodeling",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/b49e069fee1726eb2d8e1bf01b6b3c1929cb3507f4955c142590912137f352e1?apiKey=f1716b67ec4e483e95e723d993b0aceb&",
      description: `We offer services for renovating existing buildings or spaces, including structural modifications, interior upgrades, and exterior enhancements.`,
    },
    {
      number: "04",
      title: "Consulting",
      imageUrl: "https://cdn.builder.io/api/v1/image/assets/TEMP/620f0c9833a83a69a7108f21f7455c2d45d5fedf33ac5be23c7bdc1187f89d42?apiKey=f1716b67ec4e483e95e723d993b0aceb&",
      description: `We offer consulting services related to architecture and interior design, such as feasibility studies, code compliance, building regulations, and project planning.`,
    },
  ];

  return (
    <section className="flex flex-col px-5 text-secondary max-w-[316px] md:max-w-full md:mt-[200px]">
      
      {services.map((service, index) => (
        <ServiceCard key={index} {...service} />
      ))}
    </section>
  );
};

export default Services;