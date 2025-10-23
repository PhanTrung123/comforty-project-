import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaYoutube,
  FaPinterestP,
} from "react-icons/fa";

const Footer = () => {
  const footerData = {
    logo: "/Logo.png",
    description:
      "Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.",
    socialLinks: [
      { icon: <FaFacebookF size={20} />, href: "#" },
      { icon: <FaTwitter size={20} />, href: "#" },
      { icon: <FaInstagram size={20} />, href: "#" },
      { icon: <FaPinterestP size={20} />, href: "#" },
      { icon: <FaYoutube size={20} />, href: "#" },
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
    <footer>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 py-10">
        <div className="flex flex-col">
          <img
            src={footerData.logo}
            alt="Brand Logo"
            className="w-[120px] sm:w-[166px] h-[40px] object-contain"
          />
          <p className="text-[16px] text-gray-600 my-4">
            {footerData.description}
          </p>

          <div className="flex flex-row gap-3 items-center">
            {footerData.socialLinks.map((social, i) => (
              <a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-10 h-10 rounded-full flex items-center justify-center transition transform hover:scale-125 ${
                  social.color ? "" : "text-gray-600 hover:text-[#007580]"
                }`}
                style={{
                  color: social.color,
                }}
                onMouseEnter={(e) => {
                  if (social.color) {
                    e.currentTarget.style.backgroundColor = social.color;
                    e.currentTarget.style.color = "#fff";
                    e.currentTarget.style.border = `1px solid ${social.color}`;
                  } else {
                    e.currentTarget.style.color = "#007580";
                    e.currentTarget.style.border = "1px solid #007580";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "transparent";
                  e.currentTarget.style.color = social.color || "#333";
                  e.currentTarget.style.border = "none";
                }}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {footerData.footerLinks.map((link, index) => (
          <div key={index} className="flex flex-col">
            <h4 className="!text-[#9A9CAA] font-medium uppercase mb-3">
              {link.title}
            </h4>

            {link.input ? (
              <>
                <div className="flex flex-col lg:flex-row gap-3 w-full">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-grow min-w-0 border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-teal-500 w-full"
                  />
                  <button className="bg-[#029FAE] text-white px-5 py-2 rounded-md hover:bg-[#008490] transition w-full lg:w-auto">
                    Subscribe
                  </button>
                </div>

                <p className=" mt-3 font-inter font-normal text-[15px] leading-[150%] text-[#7d7b8e]">
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

      <div className="gap-4 py-4 flex flex-col sm:flex-row justify-between border-gray-200 items-center text-sm text-[#9A9CAA]">
        <p>
          {footerData.copyright.split("Zakirsoft")[0]}
          <span className="font-medium text-[#272343]">Zakirsoft</span>
        </p>
        <img
          src={footerData.paymentImg}
          className="hidden md:block w-56 opacity-50 object-contain h-auto grayscale"
        />
      </div>
    </footer>
  );
};

export default Footer;
