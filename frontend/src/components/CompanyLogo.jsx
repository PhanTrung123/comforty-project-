import React from "react";

const CompanyLogo = () => {
  const logos = [
    "/icons/Logo_01.png",
    "/icons/Logo_02.png",
    "/icons/Logo_03.png",
    "/icons/Logo_04.png",
    "/icons/Logo_05.png",
    "/icons/Logo_06.png",
    "/icons/Logo_07.png",
  ];

  return (
    <section className="w-full flex justify-center bg-white mt-0 sm:mt-30 md:mt-0">
      <div
        className="
          w-full max-w-[1320px] md:max-h-[139px]
          flex flex-wrap md:flex-nowrap 
          items-center justify-center md:justify-between
          gap-6 md:gap-10 xl:gap-[106px] px-4
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
                h-auto object-contain 
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
