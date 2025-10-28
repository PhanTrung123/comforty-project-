import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useCart } from "../context/CartContext";

import { FiShoppingCart } from "react-icons/fi";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

const ProductsSlider = ({
  title,
  products = [],
  slidesToShow = 4,
  className = "",
  extraMt = 0,
  disableTitleMt = false,
}) => {
  const [liked, setLiked] = useState({});
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const { addToCart } = useCart();

  const toggleLike = (id) => {
    setLiked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section
      className={`relative ${className}`}
      style={{ marginTop: extraMt ? `calc(32px + ${extraMt}px)` : undefined }}
    >
      {title && (
        <div
          className={`flex items-center justify-between flex-nowrap mb-[40px] ${
            disableTitleMt ? "" : "mt-[32px]"
          }`}
        >
          <h3 className="text-[18px] xs:text-[20px] sm:text-[24px] md:text-[32px] font-semibold text-[#272343] leading-[110%] truncate">
            {title}
          </h3>

          <div className="flex items-center gap-2 sm:gap-3 flex-shrink-0">
            <button
              ref={prevRef}
              className="w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              <FaArrowLeftLong className="text-[14px] sm:text-[16px]" />
            </button>
            <button
              ref={nextRef}
              className="w-8 h-8 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gray-100 hover:bg-teal-500 hover:text-white transition-all duration-300"
            >
              <FaArrowRightLong className="text-[14px] sm:text-[16px]" />
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
        className="overflow-hidden "
      >
        {products.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="group cursor-pointer overflow-hidden transition-all duration-300">
              <div className="relative w-full h-[220px] sm:h-[260px] md:h-[312px] rounded-[6px] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
                <div>
                  {item.status && (
                    <span
                      className={`absolute flex top-3 left-3 sm:top-4 sm:left-4 text-white text-[11px] sm:text-[13px] font-semibold px-2 sm:px-3 py-[2px] sm:py-1 rounded-sm shadow-md ${item.tagColor}`}
                    >
                      {item.status}
                    </span>
                  )}

                  <button
                    onClick={() => toggleLike(item.id)}
                    className="absolute top-3 right-3 sm:top-4 sm:right-5 w-8 h-8 sm:w-9 sm:h-9 flex items-center justify-center rounded-sm bg-white/90 hover:bg-red-50 shadow-md transition-all duration-300"
                  >
                    {liked[item.id] ? (
                      <AiFillHeart className="text-red-500 text-[16px] sm:text-[18px]" />
                    ) : (
                      <AiOutlineHeart className="text-gray-600 hover:text-red-500 text-[16px] sm:text-[18px]" />
                    )}
                  </button>
                </div>
              </div>

              <div className="">
                <span className="block mt-[14px] truncate font-normal text-[14px] sm:text-[16px] leading-[130%] text-[#272343] transition-colors duration-300 group-hover:text-[#029FAE]">
                  {item.name}
                </span>
                <div className="flex items-center justify-between mt-1 sm:mt-2">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-[16px] sm:text-[18px] text-[#272343] capitalize">
                      {item.price}
                    </span>

                    {item.oldPrice && (
                      <span className="text-xs sm:text-sm font-normal text-[#9A9CAA] line-through">
                        {item.oldPrice}
                      </span>
                    )}
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-md bg-gray-100 text-[#272343] transition-all duration-300 group-hover:bg-[#029FAE] group-hover:text-white -translate-y-[20%] sm:-translate-y-[30%]"
                  >
                    <FiShoppingCart className="text-[16px] sm:text-[18px]" />
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
