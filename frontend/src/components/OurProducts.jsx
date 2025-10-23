import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { useCart } from "../context/CartContext";

const OurProducts = () => {
  const [liked, setLiked] = useState({});
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("/");
  const { addToCart } = useCart();

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

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
        <h3 className="text-[32px] font-semibold text-[#272343] leading-[110%]">
          Our Products
        </h3>
      </div>

      <div className="font-medium mb-9 text-[16px] leading-[110%] gap-4 tracking-[0.05em] text-center text-[#9A9CAA] flex justify-center">
        {tabItems.map(({ text, path }) => (
          <button
            key={path}
            onClick={() => {
              setActiveTab(path);
              navigate(path);
            }}
            className={`relative pb-1 uppercase transition-all duration-300 hover:text-[#272343] ${
              activeTab === path
                ? "text-[#272343] after:content-[''] after:absolute after:left-0 after:-bottom-[3px] after:w-full after:h-[2px] after:bg-teal-600"
                : ""
            }`}
          >
            {text}
          </button>
        ))}
      </div>

      {/* Danh sách sản phẩm */}
      <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4 md:px-8">
        {productsList.map((item) => (
          <div
            key={item.id}
            className="group overflow-hidden transition-all duration-300 cursor-pointer"
          >
            {/* Ảnh */}
            <div className="relative w-[auto] h-[312px] rounded-[6px] overflow-hidden">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
              {item.status && (
                <span
                  className={`absolute flex top-4 left-4 text-white text-[13px] font-semibold px-3 py-1 items-center rounded-sm shadow-md ${item.tagColor}`}
                >
                  {item.status}
                </span>
              )}
              <button
                onClick={() => toggleLike(item.id)}
                className="absolute top-4 right-5 w-9 h-9 flex items-center justify-center rounded-sm bg-white/90 hover:bg-red-50 shadow-md transition-all duration-300"
              >
                {liked[item.id] ? (
                  <AiFillHeart className="text-red-500 text-[18px]" />
                ) : (
                  <AiOutlineHeart className="text-gray-600 hover:text-red-500 text-[18px]" />
                )}
              </button>
            </div>

            {/* Thông tin sản phẩm */}
            <div className="py-4">
              <span className="font-normal text-[16px] leading-[130%] text-[#272343] transition-colors duration-300 group-hover:text-[#029FAE]">
                {item.name}
              </span>
              <div className="flex items-center justify-between mt-1">
                <div className="flex items-center gap-2">
                  <span className="font-inter font-semibold text-[18px] leading-[110%] text-[#272343] capitalize">
                    {item.price}
                  </span>
                  {item.oldPrice && (
                    <span className="text-sm font-normal text-[#9A9CAA] line-through">
                      {item.oldPrice}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => addToCart()}
                  className="w-11 h-11 flex items-center justify-center rounded-md bg-gray-100 text-[#272343] transition-all duration-300 group-hover:bg-[#029FAE] group-hover:text-white -translate-y-[30%]"
                >
                  <FiShoppingCart className="text-[18px]" />
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
