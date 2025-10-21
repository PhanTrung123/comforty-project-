// OurProducts.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";

const OurProducts = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("/");

  const tabItems = [
    { text: "All", path: "/" },
    { text: "Newest", path: "/newest" },
    { text: "Trending", path: "/trending" },
    { text: "Best Sellers", path: "/best-sellers" },
    { text: "Featured", path: "/featured" },
  ];

  const productsList = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: "$20",
      image: "/image/product1.jpg",
      status: "New",
      tagColor: "bg-teal-500",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: "$20",
      oldPrice: "$30",
      image: "/image/product2.jpg",
      status: "Sales",
      tagColor: "bg-red-500",
    },
    {
      id: 3,
      name: "Library Stool Chair",
      price: "$20",
      image: "/image/product3.jpg",
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: "$20",
      image: "/image/product4.jpg",
    },
    {
      id: 5,
      name: "Library Stool Chair",
      price: "$20",
      image: "/image/product5.jpg",
    },
    {
      id: 6,
      name: "Library Stool Chair",
      price: "$20",
      image: "/image/product6.jpg",
    },
    {
      id: 7,
      name: "Library Stool Chair",
      price: "$20",
      image: "/image/product7.jpg",
    },
    {
      id: 8,
      name: "Library Stool Chair",
      price: "$20",
      image: "/image/product8.jpg",
    },
  ];

  return (
    <section className="relative pb-8 mt-8">
      <div className="flex items-center justify-center mb-8">
        <h3 className="text-2xl font-semibold text-gray-800">Our Products</h3>
      </div>

      <div className="flex flex-wrap justify-center items-center gap-6 mb-10 text-gray-600 text-base font-medium">
        {tabItems.map(({ text, path }) => (
          <button
            key={path}
            onClick={() => {
              setActiveTab(path);
              navigate(path);
            }}
            className={`relative pb-1 transition-all duration-300 hover:text-teal-600 ${
              activeTab === path
                ? "text-teal-600 after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-full after:h-[2px] after:bg-teal-600"
                : ""
            }`}
          >
            {text}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-8">
        {productsList.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer"
          >
            <div className="relative w-full h-[250px]">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover"
              />
              {item.status && (
                <span
                  className={`absolute top-3 left-3 text-white text-xs font-semibold px-3 py-1 rounded-sm shadow-md ${item.tagColor}`}
                >
                  {item.status}
                </span>
              )}
            </div>

            <div className="p-4">
              <p className="text-sm font-medium text-gray-800">{item.name}</p>
              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-800">
                    {item.price}
                  </span>
                  {item.oldPrice && (
                    <span className="text-sm text-gray-400 line-through">
                      {item.oldPrice}
                    </span>
                  )}
                </div>
                <button className="w-10 h-10 flex items-center justify-center rounded-md bg-gray-100 hover:bg-[#029FAE] hover:text-white transition-all duration-300">
                  <FiShoppingCart />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurProducts;
