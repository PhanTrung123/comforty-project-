import React, { useState, useRef } from "react";
import Slider from "react-slick";
import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { useCart } from "../context/CartContext";

export const settings = {
  dots: false,
  arrows: false,
  infinite: true,
  speed: 600,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    { breakpoint: 1024, settings: { slidesToShow: 3 } },
    { breakpoint: 768, settings: { slidesToShow: 2 } },
    { breakpoint: 480, settings: { slidesToShow: 1 } },
  ],
};

const ProductsSlider = ({ title, products = [], slidesToShow = 4 }) => {
  const [liked, setLiked] = useState({});
  const sliderRef = useRef(null);
  const { addToCart } = useCart();

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const mergedSettings = {
    ...settings,
    slidesToShow: slidesToShow || settings.slidesToShow,
    responsive: settings.responsive,
  };

  return (
    <section className="relative pb-8">
      {title && (
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>

          <div className="flex items-center gap-3">
            <button
              onClick={() => sliderRef.current.slickPrev()}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              <FaArrowLeftLong />
            </button>
            <button
              onClick={() => sliderRef.current.slickNext()}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      )}
      <Slider ref={sliderRef} {...mergedSettings}>
        {products.map((item) => (
          <div key={item.id} className="px-3">
            <div className="rounded-xl overflow-hidden bg-white shadow-sm hover:shadow-lg transition-all duration-300 group cursor-pointer">
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
                    <AiOutlineHeart className="text-gray-600 hover:text-red-500 text-[18px]" />
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

                  <button
                    onClick={() => addToCart()}
                    className="w-11 h-11 flex items-center justify-center rounded-md bg-gray-100 hover:bg-[#029FAE] hover:text-white transition-all duration-300"
                  >
                    <FiShoppingCart className="text-[18px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default ProductsSlider;
