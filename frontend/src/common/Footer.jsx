import React from "react";

const Footer = () => {
  const footerData = {
    logo: "/Logo.png",
    description:
      "Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.",
    socialLinks: [
      { icon: "/image/Facebook---Negative 2.png", href: "#" },
      { icon: "/image/Twitter---Negative 1@2x.png", href: "#" },
      { icon: "/image/Instagram 1.png", href: "#" },
      { icon: "/image/Pinterest---Negative 1.png", href: "#" },
      { icon: "/image/YouTube---Negative 1.png", href: "#" },
    ],
    footerLinks: [
      {
        title: "Category",
        items: [
          "Sofa",
          "Armchair",
          "Wing Chair",
          "Desk Chair",
          "Wooden Chair",
          "Park Bench",
        ],
      },
      {
        title: "Support",
        items: [
          "Help & Support",
          "Terms & Conditions",
          "Privacy Policy",
          "Help",
        ],
      },
      {
        title: "Newsletter",
        input: true,
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
      },
    ],
    paymentImg: "/payment.png",
    copyright: "© 2021 - Blogy — Designed & Developed by Zakirsoft",
  };

  return (
    <footer className="md:h-[343px] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_1fr_2.3fr]  gap-8 py-10 ">
        <div className="flex flex-col md:w-[350px]">
          <img
            src={footerData.logo}
            alt="Brand Logo"
            className="w-[120px] sm:w-[166px] h-[40px] object-contain"
          />
          <p className="text-[16px] text-gray-600 my-4">
            {footerData.description}
          </p>

          <div className="flex flex-row gap-1 items-center">
            {footerData.socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  group
                  w-[38px] h-[38px]
                  rounded-full
                  flex items-center justify-center
                  border border-transparent
                  transition-all duration-300 ease-in-out
                  hover:border-[#007580]
                "
              >
                <img
                  src={social.icon}
                  alt={`social-${i}`}
                  className="
                    w-[16px] h-[16px]
                    object-contain
                    transition-transform duration-300
                    group-hover:scale-110
                  "
                />
              </a>
            ))}
          </div>
        </div>

        {footerData.footerLinks.map((link, index) => (
          <div key={index} className="flex flex-col">
            <h4 className="!text-[#9A9CAA] font-medium leading-[110%] !text-[14px] uppercase mb-3">
              {link.title}
            </h4>

            {link.input ? (
              <>
                <div className="flex flex-col lg:flex-row gap-3 sm:w-full md:max-w-[424px]">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-grow min-w-0 md:text-[16px] text-[#a4a6b3] border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 w-full"
                  />
                  <button className="bg-[#029FAE] text-white px-5 py-2 rounded-md hover:bg-[#008490] transition w-full lg:w-auto">
                    Subscribe
                  </button>
                </div>

                <p className="mt-3 font-inter font-normal text-[15px] leading-[150%] text-[#7d7b8e]">
                  {link.description}
                </p>
              </>
            ) : (
              <ul className="space-y-2">
                {link.items.map((item, i) => (
                  <li
                    key={i}
                    className="hover:text-teal-600 hover:underline cursor-pointer text-[#272343] transition"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
