import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const FeaturedProducts = () => {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const products = [
    {
      id: 1,
      name: "Library Stool Chair",
      price: "$20",
      oldPrice: null,
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
      oldPrice: null,
      image: "/image/product3.jpg",
      status: "",
      tagColor: "",
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: "$20",
      oldPrice: null,
      image: "/image/product4.jpg",
      status: "",
      tagColor: "",
    },
  ];

  return (
    <section className="relative pb-8">
      <div className="flex items-center justify-between mb-8">
        <h3 className="text-2xl font-bold text-gray-800">Featured Products</h3>
        <div className="flex items-center gap-3 ">
          <button className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300">
            <FaArrowLeftLong />
          </button>
          <button className="w-10 h-10 cursor-pointer flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300">
            <FaArrowRightLong />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 cursor-pointer">
        {products.map((item) => (
          <div
            key={item.id}
            className=" rounded-xl hover:shadow-md transition-all duration-300 p-4 relative"
          >
            <div className="absolute top-3 left-3 right-3 flex items-center justify-between z-10">
              {item.status && (
                <span
                  className={`text-white text-xs font-semibold px-2 py-1 rounded-md ${item.tagColor}`}
                >
                  {item.status}
                </span>
              )}
              <button
                onClick={() => toggleLike(item.id)}
                className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-full bg-gray-100 hover:bg-red-100 transition-all duration-300"
              >
                {liked[item.id] ? (
                  <AiFillHeart className="text-red-500 text-lg" />
                ) : (
                  <AiOutlineHeart className="text-gray-500 hover:text-red-500 text-lg transition" />
                )}
              </button>
            </div>

            <img
              src={item.image}
              alt={item.name}
              className="w-full h-[250px] object-cover rounded-lg mb-4"
            />

            <div className="flex flex-col">
              <p className="text-sm text-gray-800">{item.name}</p>

              <div className="flex items-center justify-between mt-2">
                <div className="flex items-center gap-2">
                  <span className="text-lg font-semibold text-gray-800">
                    {item.price}
                  </span>
                  {item.oldPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {item.oldPrice}
                    </span>
                  )}
                </div>
                <button className="w-11 h-11 flex items-center bg-gray-100 hover:bg-[#029FAE] justify-center rounded-md transition-all duration-300">
                  <FiShoppingCart className="text-[18px] hover:text-white" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FeaturedProducts;
