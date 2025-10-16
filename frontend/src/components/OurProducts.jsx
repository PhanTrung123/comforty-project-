import React from "react";
import { useNavigate } from "react-router-dom";

const OurProducts = () => {
  const navigate = useNavigate();

  const tabItems = [
    { text: "All", path: "/" },
    { text: "Newest", path: "/newest" },
    { text: "Trending", path: "/trending" },
    { text: "Best Sellers", path: "/best-sellers" },
    { text: "Featured", path: "/featured" },
  ];

  return (
    <section className="relative pb-8">
      <div className="flex items-center justify-center mb-8">
        <h3 className="text-2xl font-bold text-gray-800">Our Product</h3>
      </div>
      <div className="flex gap-4 flex-1 justify-center items-center text-gray-500">
        {tabItems.map(({ text, path }, index) => (
        const isActive = location.pathname === path; 
          <span
            key={index}
            onClick={() => navigate(path)}
           className={`relative cursor-pointer font-medium transition-all duration-300
          ${isActive ? "font-bold text-gray-800" : "text-gray-500"}
          hover:font-bold hover:text-gray-800
        `}
          >
            {text}
            <span className="absolute left-0 bottom-0 w-0 h-[2px] bg-gray-800 transition-all duration-300 hover:w-full"></span>
          </span>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
