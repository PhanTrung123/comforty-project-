import React, { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import SliderSpecial from "../common/SliderSpecial";

const TopCategories = ({ categories }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const hasData =
    categories && (categories.items?.length > 0 || categories.length > 0);
  // if (!categories) return null;

  return (
    <section className="relative ">
      <div className="max-w-[1320px] w-full mx-auto flex items-center justify-between mt-20 mb-10">
        <h3 className="text-[18px] xs:text-[20px] sm:text-[24px] lg:text-[32px] font-semibold text-[#272343] leading-[110%] truncate tracking-normal">
          Top Categories
        </h3>

        <div className="flex items-center gap-3">
          <button
            ref={prevRef}
            className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            <FaArrowLeftLong className="text-[16px]" />
          </button>
          <button
            ref={nextRef}
            className="w-9 h-9 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-gray-200 hover:bg-teal-500 hover:text-white transition-all duration-300"
          >
            <FaArrowRightLong className="text-[16px]" />
          </button>
        </div>
      </div>

      {hasData ? (
        <SliderSpecial
          products={categories.items || categories}
          prevRef={prevRef}
          nextRef={nextRef}
        />
      ) : (
        <div className="w-full text-center py-10 text-gray-500  ">
          Không có dữ liệu sản phẩm nổi bật để hiển thị.
        </div>
      )}
    </section>
  );
};

export default TopCategories;
