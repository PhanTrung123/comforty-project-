import React from "react";

const features = [
  {
    id: 1,
    icon: (
      <img className="w-[46px] h-[46px]" src="/image/box.png" alt="Discount" />
    ),
    title: "Discount",
    desc: "Every week new sales",
  },
  {
    id: 2,
    icon: (
      <img
        className="w-[64px] h-[38px]"
        src="/image/delivery-truck.png"
        alt="Free Delivery"
      />
    ),
    title: "Free Delivery",
    desc: "100% Free for all orders",
  },
  {
    id: 3,
    icon: (
      <img
        className="w-[50px] h-[50px]"
        src="/image/24-hours.png"
        alt="Great Support"
      />
    ),
    title: "Great Support 24/7",
    desc: "We care your experiences",
  },
  {
    id: 4,
    icon: (
      <img
        className="w-[50px] h-[50px]"
        src="/image/shield.png"
        alt="Secure Payment"
      />
    ),
    title: "Secure Payment",
    desc: "100% Secure Payment Method",
  },
];

const Feature = () => {
  return (
    <section className="z-20 max-w-[1320px] w-full mx-auto mt-[-72px] max-md:mt-0 relative">
      <div
        className="
          w-full bg-white rounded-[12px] shadow-md
          grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4
          gap-6 sm:gap-8
          py-6 sm:py-8 lg:py-0
          px-6 sm:px-8 lg:px-10
          items-center justify-between
          lg:h-36
        "
      >
        {features.map((item) => (
          <div
            key={item.id}
            className="
              flex items-center gap-4 
              lg:hover:scale-105 transition-transform duration-300 h-[50px]
            "
          >
            <span className="">{item.icon}</span>
            <div className="text-left gap-6">
              <h3 className="font-medium text-[#272343] leading-[110%] text-14px md:text-[16px] lg:text-[18px]">
                {item.title}
              </h3>
              <p className="text-[#9A9CAA] text-[13px] mt-1 lg:text-[15px] leading-[110%] font-normal">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
