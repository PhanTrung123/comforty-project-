import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const SliderSpecial = ({ products = [], prevRef, nextRef }) => {
  const swiperRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    if (!swiperRef.current || !prevRef?.current || !nextRef?.current) return;
    const swiper = swiperRef.current;
    swiper.params.navigation.prevEl = prevRef.current;
    swiper.params.navigation.nextEl = nextRef.current;
    swiper.navigation.destroy();
    swiper.navigation.init();
    swiper.navigation.update();
  }, [prevRef, nextRef]);

  return (
    <Swiper
      modules={[Navigation]}
      onSwiper={(swiper) => (swiperRef.current = swiper)}
      slidesPerView={1}
      centeredSlides={true}
      loop={true}
      spaceBetween={20}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 3 },
        1024: { slidesPerView: 5 },
      }}
      onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
      className="w-full py-6 overflow-hidden"
    >
      {products.map((item, index) => {
        const total = products.length;
        let diff = Math.abs(activeIndex - index);
        diff = Math.min(diff, total - diff);

        let opacity = 1;
        let scale = 1;
        if (diff === 0) scale = 1;
        else if (diff === 1) {
          scale = 0.92;
          opacity = 0.9;
        } else if (diff === 2) {
          scale = 0.85;
          opacity = 0.7;
        } else {
          scale = 0.8;
          opacity = 0.5;
        }

        return (
          <SwiperSlide key={item.id}>
            <div
              className="rounded-xl overflow-hidden shadow-md cursor-pointer transition-all duration-500"
              style={{
                transform: `scale(${scale})`,
                opacity: opacity,
              }}
            >
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-[300px] md:h-[320px] object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-3 md:p-4">
                  <h4 className="!text-white font-semibold text-base md:text-lg">
                    {item.name}
                  </h4>
                  <p className="text-xs md:text-sm">{item.quantity}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderSpecial;
