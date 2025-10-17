import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

const Products = ({ title, products = [], gridCols = "md:grid-cols-4" }) => {
  const [liked, setLiked] = useState({});

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative pb-8 mt-8">
      {title && (
        <div className="flex items-center justify-center mb-8">
          <h3 className="text-2xl font-semibold text-gray-800">{title}</h3>
        </div>
      )}

      <div
        className={`grid grid-cols-2 sm:grid-cols-2 ${gridCols} gap-6 cursor-pointer`}
      >
        {products.map((item) => (
          <div
            key={item.id}
            className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 group"
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
              <button
                onClick={() => toggleLike(item.id)}
                className="absolute top-3 right-3 w-9 h-9 flex items-center justify-center rounded-sm bg-white/90 hover:bg-red-50 shadow-md transition-all duration-300"
              >
                {liked[item.id] ? (
                  <AiFillHeart className="text-red-500 text-[18px]" />
                ) : (
                  <AiOutlineHeart className="text-gray-600 hover:text-red-500 text-[18px] transition" />
                )}
              </button>
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

                <button className="w-11 h-11 flex items-center justify-center rounded-md bg-gray-100 hover:bg-[#029FAE] hover:text-white transition-all duration-300">
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

export default Products;
