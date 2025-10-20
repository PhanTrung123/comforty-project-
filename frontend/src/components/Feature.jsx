import React from "react";
import { FaBox, FaTruck, FaClock, FaShieldAlt } from "react-icons/fa";

const features = [
  {
    id: 1,
    icon: <FaBox />,
    title: "Discount",
    desc: "Every week new sales",
  },
  {
    id: 2,
    icon: <FaTruck />,
    title: "Free Delivery",
    desc: "100% Free for all orders",
  },
  {
    id: 3,
    icon: <FaClock />,
    title: "Great Support 24/7",
    desc: "We care your experiences",
  },
  {
    id: 4,
    icon: <FaShieldAlt />,
    title: "Secure Payment",
    desc: "100% Secure Payment Method",
  },
];

const Feature = () => {
  return (
    <section
      className="
        z-20 
        max-w-[1320px] 
        w-full 
        mx-auto 
        px-4 sm:px-6 lg:px-10 
        relative 
        lg:left-1/2 lg:-translate-x-1/2 lg:bottom-16
      "
    >
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
              lg:hover:scale-105 transition-transform duration-300
            "
          >
            <span className="text-3xl ">{item.icon}</span>
            <div className="text-left">
              <h3 className="font-semibold text-black text-lg">{item.title}</h3>
              <p className="text-gray-500 text-sm">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Feature;
