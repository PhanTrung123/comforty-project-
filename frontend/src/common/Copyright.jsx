import React from "react";

const Copyright = ({ data }) => {
  return (
    <div className="gap-4 py-4 flex flex-col sm:flex-row justify-between items-center text-[14px] text-[#9A9CAA] md:h-[75px]">
      <p>
        {data.copyright.split("Zakirsoft")[0]}
        <span className="font-medium text-[14px] text-[#272343]">
          Zakirsoft
        </span>
      </p>
      <img
        src={data.paymentImg}
        className="hidden md:block w-56 opacity-50 object-contain h-auto grayscale"
        alt="Payment Methods"
      />
    </div>
  );
};

export default Copyright;
