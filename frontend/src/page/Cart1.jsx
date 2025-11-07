import React from "react";
import Navigation from "../components/Navigation";
import Footer from "../common/Footer";
import Copyright from "../common/Copyright";

const Cart1 = () => {
  const cartItems = [
    {
      id: 1,
      name: "Italy Pizza",
      desc: "Extra cheese and topping",
      price: 681,
      qty: 1,
      img: "/public/image/Cake_01.jpg",
    },
    {
      id: 2,
      name: "Combo Plate",
      desc: "Extra cheese and topping",
      price: 681,
      qty: 1,
      img: "/public/image/Cake_02.jpg",
    },
    {
      id: 3,
      name: "Spanish Rice",
      desc: "Extra garlic",
      price: 681,
      qty: 1,
      img: "/public/image/Cake_03.jpg",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col">
      <header>
        <Navigation data={{}} />
      </header>
      <div className="w-full  my-10">
        <div className="lg:shadow rounded-[15px]  mx-auto  xl:flex max-w-[1320px] justify-between gap-[55px]">
          <div className="py-[25px] px-[25px] lg:py-[50px]  lg:px-[45px] bg-white w-full  ">
            <div className="flex items-center">
              <img src="/public/icons/arrow.png" alt="arrow" />
              <h3 className="font-semibold text-[18px] leading-[100%] text-[#1E1E1E]">
                Shopping Continue
              </h3>
            </div>
            <div className="my-[23px]">
              <div className=" h-[1.5px] bg-[#D0CFCF] "></div>
            </div>
            <div className="mt-[29px]">
              <h2 className=" font-medium text-[18px] leading-[100%] ">
                Shopping cart
              </h2>
              <span className=" flex items-center font-medium text-[14px] leading-[100%] mt-1">
                You have {cartItems.length} item in your cart
              </span>
            </div>
            {cartItems.map((item) => (
              <div className="w-full flex items-center  max-h-[100px] rounded-[15px] shadow mt-[29px]">
                <div
                  key={item.id}
                  className="w-full flex md:flex-1 items-center px-[10px] py-[9px] pl-[9px] pr-0 lg:pr-[23px] "
                >
                  <img
                    src={item.img}
                    className="w-[80px] h-auto aspect-square object-cover rounded-[8px]"
                  />
                  <div className="pl-[16px] lg:px-[18px]">
                    <h3 className=" text-[rgba(30,30,30,1)] font-medium text-[16px] lg:text-[18px] leading-[100%]">
                      {item.name}
                    </h3>
                    <p className=" mt-[3px] font-medium text-[12px] lg:text-[14px] leading-[100%] flex-nowrap">
                      {item.desc}
                    </p>
                    <div className=" items-center ml-auto flex md:hidden mt-1  gap-[6px]">
                      <span className="font-semibold text-[18px] lg:text-[22px] lining-nums proportional-nums ">
                        {item.qty}
                      </span>
                      <img src="/public/icons/Scale.png" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-1 justify-between items-center mr-[23px]">
                  <div className="hidden md:flex items-center ml-auto  gap-[6px]">
                    <span className="font-semibold text-[22px] lining-nums proportional-nums ">
                      {item.qty}
                    </span>
                    <img src="/public/icons/Scale.png" />
                  </div>
                  <span className="font-medium ml-auto text-[14px] leading-[100%] ">
                    ${item.price}
                  </span>
                  <button className="w-[20px] h-[20px] md:w-[25px] md:h-[25px] ml-[20px] lg:ml-[38px] items-center flex cursor-pointer  ">
                    <img src="/public/icons/trash.png" className="" />
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="w-[90%] xl:w-[388px] mx-auto rounded-[20px] h-auto bg-[rgba(86,90,187,1)] my-[50px]">
            <div className="flex flex-col  py-[21px] xl:py-0 lg:mt-[27px] mb-[21px] mx-[19px]">
              <div className="flex items-center justify-between">
                <h3 className="text-[rgba(254,252,252,1)] font-semibold text-[22px] leading-[100%]">
                  Card Details
                </h3>
                <img
                  src="/public/image/User.jpg"
                  className="w-[50px] h-[50px] object-cover rounded-[8px]"
                />
              </div>
              <div className="mt-[15px]">
                <span className="text-[rgba(254,252,252,1)] font-medium size-[16px] leading-[100%]">
                  Card type
                </span>
                <div className="w-full flex-wrap lg:flex-nowrap gap-[17px] flex flex-row mt-[14px] mx-auto justify-center ">
                  <div className="">
                    <div className="w-[75px] h-[55px] flex items-center bg-[rgba(217,217,217,0.2)] rounded-[5px]">
                      <img src="/public/image/Icon_bank_01.png" />
                    </div>
                  </div>
                  <div className="">
                    <div className="w-[75px] h-[55px] flex items-center bg-[rgba(217,217,217,0.2)] rounded-[5px]">
                      <img src="/public/image/Icon_bank_02.png" />
                    </div>
                  </div>{" "}
                  <div className="">
                    <div className="w-[75px] h-[55px] flex items-center bg-[rgba(217,217,217,0.2)] rounded-[5px]">
                      <img src="/public/image/Icon_bank_03.png" />
                    </div>
                  </div>{" "}
                  <div>
                    <div className="w-[75px] h-[55px] flex items-center justify-center bg-[rgba(217,217,217,0.2)] rounded-[5px]">
                      <span className="font-bold text-[14px] text-[rgba(254,252,252,1)]">
                        See All
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-[27px] ">
                <span className="text-[rgba(254,252,252,1)] font-medium text-[14px] leading-[100%]">
                  {" "}
                  Name on card
                </span>
                <input
                  type="text"
                  placeholder="Name"
                  className="bg-[rgba(98,104,198,1)] w-full py-[11px] pl-[18px] mt-[5px] text-[rgba(196,196,196,1)] rounded-[6px]"
                />
              </div>
              <div className="mt-[14px] ">
                <span className="text-[rgba(254,252,252,1)] font-medium text-[14px] leading-[100%]">
                  {" "}
                  Card Number
                </span>
                <input
                  type="text"
                  placeholder="1111 2222 3333 4444"
                  className="bg-[rgba(98,104,198,1)] w-full py-[11px] pl-[18px] mt-[5px] text-[rgba(196,196,196,1)] rounded-[6px]"
                />
              </div>
              <div className="mt-[14px] ">
                <div className="w-full flex gap-[8px]">
                  <div className="w-1/2">
                    <span className="text-[rgba(254,252,252,1)] font-medium text-[14px] leading-[100%]">
                      {" "}
                      Expiration date
                    </span>
                    <input
                      type="text"
                      placeholder="mm/yy"
                      className="bg-[rgba(98,104,198,1)] w-full py-[11px] pl-[18px] mt-[5px] text-[rgba(196,196,196,1)] rounded-[6px]"
                    />
                  </div>
                  <div className="w-1/2">
                    <span className="text-[rgba(254,252,252,1)] font-medium text-[14px] leading-[100%]">
                      {" "}
                      CVV
                    </span>
                    <input
                      type="text"
                      placeholder="123"
                      className="bg-[rgba(98,104,198,1)] w-full py-[11px] pl-[18px] mt-[5px] text-[rgba(196,196,196,1)] rounded-[6px]"
                    />
                  </div>
                </div>
              </div>
              <div className="mt-[23px] mb-[15px] w-full h-[1px] bg-[rgba(95,101,195,1)] "></div>
              <div className="flex flex-col gap-[6px]">
                <div className="flex justify-between text-[rgba(254,252,252,1)]">
                  <span>Subtotal</span>
                  <span>$1,668</span>
                </div>
                <div className="flex justify-between text-[rgba(254,252,252,1)]">
                  <span>Shipping</span>
                  <span>$4</span>
                </div>{" "}
                <div className="flex justify-between text-[rgba(254,252,252,1)]">
                  <span>Total (Tax incl.)</span>
                  <span>$1,672</span>
                </div>
              </div>
              <div className="mt-[26px]">
                <div className="w-full flex justify-between items-center h-[60px] bg-[rgba(77,225,193,1)] rounded-[12px] px-[24px]">
                  <span className="text-[rgba(254,252,252,1)]">$1,672</span>
                  <div className="flex items-center gap-2 text-[rgba(254,252,252,1)]">
                    <span>Checkout</span>
                    <img
                      src="/public/icons/Right_02.png"
                      className="w-[25px] h-[25px]"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <footer className="w-full border-t border-b border-[#e9eaec] bg-white">
        <div className="max-w-[1320px] w-full mx-auto px-4 xl:px-0">
          <Footer />
        </div>
        <section className="flex-1 border-t border-[#e9eaec] w-full mx-auto px-4 sm:px-0">
          <div className="max-w-[1320px] w-full mx-auto px-4 xl:px-0">
            <Copyright />
          </div>
        </section>
      </footer> */}
    </div>
  );
};

export default Cart1;
