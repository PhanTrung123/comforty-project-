import { useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import styles from "./SliderSpecial.module.css";

const SliderSpecial = ({ products = [], prevRef, nextRef }) => {
  const swiperRef = useRef(null);

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
    <div className="relative w-full flex justify-center overflow-visible ">
      <Swiper
        modules={[Navigation]}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
          setTimeout(() => {
            swiper.update();
            swiper.slideToLoop(0, 0);
          }, 400);
        }}
        slidesPerView="auto"
        centeredSlides={true}
        loop={true}
        spaceBetween={24}
        onSlideChange={(swiper) => {
          const total = products.length;
          const activeIndex =
            typeof swiper.realIndex === "number" ? swiper.realIndex : 0;

          const leftIndex = (activeIndex - 1 + total) % total;
          const rightIndex = (activeIndex + 1) % total;

          swiper.slides.forEach((slide) => {
            const realIndex = parseInt(slide.dataset.swiperSlideIndex);
            const inner = slide.querySelector(".slide-content");
            if (!inner || isNaN(realIndex)) return;

            if (realIndex === leftIndex || realIndex === rightIndex) {
              inner.style.opacity = 1;
            } else if (realIndex === activeIndex) {
              inner.style.opacity = 1;
            } else {
              inner.style.opacity = 0.4;
            }
          });
        }}
        className="!overflow-visible w-full mx-auto"
        breakpoints={{
          // 320: { slidesPerView: 1, spaceBetween: 12 },
          // 640: { slidesPerView: 3, spaceBetween: 16 },
          // 1024: { slidesPerView: 3, spaceBetween: 20 },
          // 1300: { slidesPerView: "auto", spaceBetween: 24 },
          320: { slidesPerView: 1, spaceBetween: 12 },
          480: { slidesPerView: 1.2, spaceBetween: 14 }, // thêm để mobile mượt hơn
          640: { slidesPerView: 2.2, spaceBetween: 16 }, // tablet nhỏ
          768: { slidesPerView: 2.5, spaceBetween: 18 }, // tablet lớn
          1024: { slidesPerView: 3, spaceBetween: 20 },
          1300: { slidesPerView: "auto", spaceBetween: 24 },
        }}
      >
        {products.map((item) => (
          <SwiperSlide
            key={item.id}
            className={`!flex justify-center ${styles.swiperSlide}`}
          >
            <div className="slide-content rounded-xl overflow-hidden shadow-md cursor-pointer transition-all duration-500 w-[424px] aspect-[1/1] sm:w-[340px] md:w-[360px] lg:w-[424px]">
              <div className="relative w-full h-full">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover rounded-xl"
                />
                <div className="absolute bottom-0 left-0 w-full bg-black/50 text-white p-4">
                  <h4 className="font-semibold text-lg">{item.name}</h4>
                  <p className="text-sm">{item.quantity}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="pointer-events-none absolute inset-0 flex justify-between">
        <div className="w-[120px] hidden lg:block bg-gradient-to-r from-white via-white/60 to-transparent" />
        <div className="w-[120px] hidden lg:block bg-gradient-to-l from-white via-white/60 to-transparent" />
      </div>
    </div>
  );
};

export default SliderSpecial;
