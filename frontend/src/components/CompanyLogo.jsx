import React from "react";

const CompanyLogo = () => {
  const logos = [
    "/logo1.png",
    "/logo2.png",
    "/logo3.png",
    "/logo4.png",
    "/logo5.png",
    "/logo6.png",
    "/logo7.png",
  ];

  return (
    <section className="w-full flex justify-center bg-white py-6">
      <div
        className="
          w-full max-w-[1320px] 
          flex flex-wrap md:flex-nowrap 
          items-center justify-center md:justify-between
          gap-6 sm:gap-8 px-4
        "
      >
        {logos.map((logo, index) => (
          <div
            key={index}
            className="
              flex items-center justify-center 
              w-[120px] sm:w-[140px] md:w-auto
              transition-transform duration-300 hover:scale-105
            "
          >
            <img
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="
                w-[80px] sm:w-[90px] md:w-[100px] lg:w-[110px]
                h-auto object-contain opacity-80 hover:opacity-100
                transition-opacity duration-300
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyLogo;
