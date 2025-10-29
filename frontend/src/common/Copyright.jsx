import React from "react";

const Copyright = () => {
  const copyrightData = {
    paymentImg: "/icons/Payment.png",
    copyright: "© 2021 - Blogy — Designed & Developed by Zakirsoft",
  };
  return (
    <div className="gap-4 py-4 flex flex-col sm:flex-row justify-between items-center text-[14px] text-[#9A9CAA] md:h-[75px] ">
      <p>
        {copyrightData.copyright.split("Zakirsoft")[0]}
        <span className="font-medium text-[14px] text-[#272343]">
          Zakirsoft
        </span>
      </p>
      <img
        src={copyrightData.paymentImg}
        className="hidden md:block w-56 opacity-50 object-contain h-auto grayscale"
        alt="Payment Methods"
      />
    </div>
  );
};

export default Copyright;
