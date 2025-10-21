import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useCart } from "../context/CartContext";

import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const ProductsSlider = ({ title, products = [], slidesToShow = 4 }) => {
  const [liked, setLiked] = useState({});
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const { addToCart } = useCart();

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="relative pb-8">
      {title && (
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
          <div className="flex items-center gap-3">
            <button
              ref={prevRef}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              <FaArrowLeftLong />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              <FaArrowRightLong />
            </button>
          </div>
        </div>
      )}

      <Swiper
        modules={[Navigation]}
        spaceBetween={24}
        slidesPerView={slidesToShow}
        loop={true}
        onBeforeInit={(swiper) => {
          swiperRef.current = swiper;
        }}
        onSwiper={(swiper) => {
          setTimeout(() => {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.destroy();
            swiper.navigation.init();
            swiper.navigation.update();
          });
        }}
        breakpoints={{
          0: { slidesPerView: 1, spaceBetween: 16 },
          480: { slidesPerView: 2, spaceBetween: 16 },
          768: { slidesPerView: 3, spaceBetween: 20 },
          1024: { slidesPerView: slidesToShow, spaceBetween: 24 },
        }}
        className="overflow-hidden !pb-2"
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
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
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default ProductsSlider;
