import React from "react";

const CompanyLogo = () => {
  const logos = [
    { src: "/icons/Logo_01.png", alt: "Logo Company 01" },
    { src: "/icons/Logo_02.png", alt: "Logo Company 02" },
    { src: "/icons/Logo_03.png", alt: "Logo Company 03" },
    { src: "/icons/Logo_04.png", alt: "Logo Company 04" },
    { src: "/icons/Logo_05.png", alt: "Logo Company 05" },
    { src: "/icons/Logo_06.png", alt: "Logo Company 06" },
    { src: "/icons/Logo_07.png", alt: "Logo Company 07" },
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
              src={logo.src}
              alt={logo.alt}
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
