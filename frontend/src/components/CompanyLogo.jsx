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
    <section className="w-full flex justify-center ">
      <div className="md:max-w-[1320px] bg-white py-6 flex flex-wrap md:flex-nowrap items-center justify-between md:gap-10">
        {logos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center justify-center w-[120px] sm:w-[160px] opacity-70 hover:opacity-100 transition-opacity duration-300"
          >
            <img
              src={logo}
              alt={`Company Logo ${index + 1}`}
              className="w-[85px] h-auto object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default CompanyLogo;
