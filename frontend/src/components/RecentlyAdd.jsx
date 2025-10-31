import React, { useRef } from "react";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ProductsSlider from "../common/ProductsSlider";

const RecentlyAdd = ({ data }) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const products = data?.items || data?.products || data?.productsList || [];
  const hasProducts = Array.isArray(products) && products.length > 0;

  return (
    <section className="relative w-full py-10 md:py-12 lg:py-16 bg-[#fff]">
      <div className="w-full px-4 xl:px-0 max-w-[1320px] mx-auto">
        <div className="flex items-center justify-between flex-nowrap gap-3 sm:gap-6 mb-8 text-left">
          <h3 className="text-[18px] xs:text-[20px] sm:text-[24px] lg:text-[32px] font-semibold capitalize text-[#272343] truncate">
            Recently Added
          </h3>

          <div className="flex items-center gap-3 sm:gap-4 shrink-0">
            <button
              ref={prevRef}
              className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-sm border border-gray-200 hover:bg-[#029FAE] hover:text-white transition-all duration-300"
            >
              <FaArrowLeftLong className="text-[14px] sm:text-[16px]" />
            </button>
            <button
              ref={nextRef}
              className="w-10 h-10 sm:w-11 sm:h-11 flex items-center justify-center rounded-full bg-white text-gray-700 shadow-sm border border-gray-200 hover:bg-[#029FAE] hover:text-white transition-all duration-300"
            >
              <FaArrowRightLong className="text-[14px] sm:text-[16px]" />
            </button>
          </div>
        </div>

        {hasProducts ? (
          <ProductsSlider
            products={products}
            prevRef={prevRef}
            nextRef={nextRef}
            extraMt={48}
            disableTitleMt={true}
          />
        ) : (
          <div className="text-center text-gray-500 text-[15px] sm:text-[17px] font-medium py-12">
            Hiện chưa có sản phẩm nào được thêm gần đây.
          </div>
        )}
      </div>
    </section>
  );
};

export default RecentlyAdd;
