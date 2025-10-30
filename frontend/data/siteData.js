// Navigation
export const topBarData = {
  promo: { icon: "check", text: "Free Shipping on All Orders Over $50" },
  languages: [
    { label: "Eng", value: "en" },
    { label: "Vi", value: "vi" },
  ],
  links: [
    { label: "Faqs", href: "#" },
    { label: "Need Help?", href: "/help", icon: "alert" },
  ],
  navLinks: [
    { name: "Home", path: "/" },
    { name: "Shop", path: "/shop" },
    { name: "Product", path: "/product" },
    { name: "Pages", path: "/pages" },
    { name: "About", path: "/about" },
  ],
  contactNumber: "(808) 555-0111",

  icons: {
    logo: "/icons/Logo.png",
    check: "/icons/Check.png",
    alert: "icons/Alert_circle.png",
    cart: "/icons/Cart.png",
    heart: "/icons/Heart.png",
    user: "/icons/User.png",
    search: "/icons/Search.png",
  },
};

// -----------------------------------------------

// HeroSection
export const slides = [
  {
    id: 1,
    subtitle: "WELCOME TO CHAIREY",
    title: "Best Furniture Collection for your interior.",
    image: "/image/Product_image.png",
    imageAlt: "Best Furniture Collection",
    discount: 54,
    buttonText: "Shop Now",
  },
  {
    id: 2,
    subtitle: "MODERN DESIGN",
    title: "Timeless Wooden Collections That Inspire Warmth.",
    image: "/image/Product_01.jpg",
    imageAlt: "Timeless Wooden Collections",
    discount: 40,
    buttonText: "Shop Now",
  },
  {
    id: 3,
    subtitle: "LUXURY COMFORT",
    title: "Minimalist Sofas With Maximum Comfort.",
    image: "/image/Product_02.jpg",
    imageAlt: "Minimalist Sofas",
    discount: 45,
    buttonText: "Shop Now",
  },
];

// -----------------------------------------------

// Feature
export const features = [
  {
    id: 1,
    iconSrc: "/icons/Box.png",
    iconAlt: "Discount",
    iconWidth: 46,
    iconHeight: 46,
    title: "Discount",
    desc: "Every week new sales",
  },
  {
    id: 2,
    iconSrc: "/icons/Delivery_truck.png",
    iconAlt: "Free Delivery",
    iconWidth: 64,
    iconHeight: 38,
    title: "Free Delivery",
    desc: "100% Free for all orders",
  },
  {
    id: 3,
    iconSrc: "/icons/24_hours.png",
    iconAlt: "Great Support",
    iconWidth: 50,
    iconHeight: 50,
    title: "Great Support 24/7",
    desc: "We care your experiences",
  },
  {
    id: 4,
    iconSrc: "/icons/Shield.png",
    iconAlt: "Secure Payment",
    iconWidth: 50,
    iconHeight: 50,
    title: "Secure Payment",
    desc: "100% Secure Payment Method",
  },
];

// -----------------------------------------------

// CompanyLogo
export const logosCompany = [
  { src: "/icons/Logo_01.png", alt: "Logo Company 01" },
  { src: "/icons/Logo_02.png", alt: "Logo Company 02" },
  { src: "/icons/Logo_03.png", alt: "Logo Company 03" },
  { src: "/icons/Logo_04.png", alt: "Logo Company 04" },
  { src: "/icons/Logo_05.png", alt: "Logo Company 05" },
  { src: "/icons/Logo_06.png", alt: "Logo Company 06" },
  { src: "/icons/Logo_07.png", alt: "Logo Company 07" },
];

// -----------------------------------------------

// FeatureProduct
export const featuredProducts = {
  title: "Featured Products",
  items: [
    {
      id: 1,
      name: "Modern Chair",
      price: "$25",
      oldPrice: "$40",
      image: "/image/Product_01.jpg",
      status: "New",
      tagColor: "bg-[#01AD5A]",
    },
    {
      id: 2,
      name: "Office Chair Pro",
      price: "$35",
      image: "/image/Product_02.jpg",
      status: "Sale",
      tagColor: "bg-[#F5813F]",
    },
    {
      id: 3,
      name: "Wooden Armchair",
      price: "$30",
      image: "/image/Product_03.jpg",
    },
    {
      id: 4,
      name: "Lounge Chair",
      price: "$45",
      oldPrice: "$60",
      image: "/image/Product_04.jpg",
    },
    {
      id: 5,
      name: "Classic Rocking Chair",
      price: "$50",
      image: "/image/Product_05.jpg",
    },
    {
      id: 6,
      name: "Minimalist Desk Chair",
      price: "$38",
      oldPrice: "$50",
      image: "/image/Product_06.jpg",
      status: "Sale",
      tagColor: "bg-[#F5813F]",
    },
    {
      id: 7,
      name: "Velvet Armchair",
      price: "$70",
      image: "/image/Product_07.jpg",
      status: "New",
      tagColor: "bg-[#01AD5A]",
    },
    {
      id: 8,
      name: "Elegant Lounge",
      price: "$60",
      oldPrice: "$75",
      image: "/image/Product_08.jpg",
    },
  ],
};

// -----------------------------------------------

// topCategories
export const topCategories = {
  title: "Top Categories",
  items: [
    {
      id: 1,
      name: "Wing Chair",
      image: "/image/Product_05.jpg",
      quantity: "3,584 Products",
    },
    {
      id: 2,
      name: "Wooden Chair",
      image: "/image/Product_06.jpg",
      quantity: "157 Products",
    },
    {
      id: 3,
      name: "Desk Chair",
      image: "/image/Product_07.png",
      quantity: "154 Products",
    },
    {
      id: 4,
      name: "Park Bench",
      image: "/image/Product_08.jpg",
      quantity: "154 Products",
    },
    {
      id: 5,
      name: "Arm Chair",
      image: "/image/Product_09.jpg",
      quantity: "200 Products",
    },
    {
      id: 6,
      name: "Lounge Chair",
      image: "/image/Product_01.jpg",
      quantity: "120 Products",
    },
    {
      id: 7,
      name: "Rocking Chair",
      image: "/image/Product_02.jpg",
      quantity: "80 Products",
    },
  ],
};

// -----------------------------------------------

// ourProduct
export const ourProductsData = {
  title: "Our Products",
  tabItems: [
    { text: "All", path: "/" },
    { text: "Newest", path: "/newest" },
    { text: "Trending", path: "/trending" },
    { text: "Best Sellers", path: "/best-sellers" },
    { text: "Featured", path: "/featured" },
  ],
  productsList: [
    {
      id: 1,
      name: "Library Stool Chair",
      price: "$20",
      image: "/image/Product_01.jpg",
      status: "New",
      tagColor: "bg-[#01ad5a]",
    },
    {
      id: 2,
      name: "Library Stool Chair",
      price: "$20",
      oldPrice: "$30",
      image: "/image/Product_02.jpg",
      status: "Sales",
      tagColor: "bg-[#f5813f]",
    },
    {
      id: 3,
      name: "Library Stool Chair",
      price: "$20",
      image: "/image/Product_03.jpg",
    },
    {
      id: 4,
      name: "Library Stool Chair",
      price: "$20",
      image: "/image/Product_04.jpg",
    },
    {
      id: 5,
      name: "Library Stool Chair",
      price: "$20",
      image: "/image/Product_05.jpg",
    },
    {
      id: 6,
      name: "Library Stool Chair",
      price: "$20",
      image: "/image/Product_06.jpg",
    },
    {
      id: 7,
      name: "Library Stool Chair",
      price: "$20",
      image: "/image/Product_07.jpg",
    },
    {
      id: 8,
      name: "Library Stool Chair",
      price: "$20",
      image: "/image/Product_08.jpg",
    },
  ],
};

// -----------------------------------------------

// Testimonial

export const testimonialsData = {
  title: "What client says about us",
  comments: [
    {
      id: 1,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet mi nec massa tincidunt blandit et eu sem. Maecenas laoreet ultrices diam dignissim posuere. Aenean ultrices dui at ipsum sagittis, pharetra lacinia dui faucibus. In ac bibendum ex. Aenean dolor massa, euismod sit amet suscipit et.",
      avatar: "/image/User_01.png",
      name: "Kristin Watson",
      position: "Fashion Designer",
    },
    {
      id: 2,
      description:
        "Nullam sapien elit, dignissim eu viverra et, scelerisque et felis. Aliquam egestas dui elit, quis tincidunt lacus aliquam et. Duis nulla velit, dignissim ut odio ac, eleifend luctus leo. Ut ac imperdiet velit. Aliquam semper ex in volutpat rutrum.",
      avatar: "/image/User_02.png",
      name: "Esther Howard",
      position: "Fashion Designer",
    },
    {
      id: 3,
      description:
        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
      avatar: "/image/User_01.png",
      name: "Robert Fox",
      position: "Interior Designer",
    },
  ],
};

// -----------------------------------------------

// Recently Add

export const recentlyAddedData = {
  title: "Recently Added",
  products: [
    {
      id: 1,
      name: "Modern Chair",
      price: "$25",
      oldPrice: "$40",
      image: "/image/Product_01.jpg",
      status: "New",
      tagColor: "bg-[#01ad5a]",
    },
    {
      id: 2,
      name: "Office Chair Pro",
      price: "$35",
      image: "/image/Product_02.jpg",
      status: "Sale",
      tagColor: "bg-[#F5813F]",
    },
    {
      id: 3,
      name: "Wooden Armchair",
      price: "$30",
      image: "/image/Product_03.jpg",
    },
    {
      id: 4,
      name: "Lounge Chair",
      price: "$45",
      oldPrice: "$60",
      image: "/image/Product_04.jpg",
    },
    {
      id: 5,
      name: "Classic Rocking Chair",
      price: "$50",
      image: "/image/Product_05.jpg",
    },
    {
      id: 6,
      name: "Minimalist Desk Chair",
      price: "$38",
      oldPrice: "$50",
      image: "/image/Product_06.jpg",
      status: "Sale",
      tagColor: "bg-[#F5813F]",
    },
  ],
  config: {
    slidesToShow: 4,
    gridCols: "md:grid-cols-4",
    showPagination: true,
    extraMt: 48,
    disableTitleMt: true,
    disableNavMt: true,
  },
};

// -----------------------------------------------

// Footer

export const footerData = {
  logo: "/icons/Logo.png",
  description:
    "Vivamus tristique odio sit amet velit semper, eu posuere turpis interdum. Cras egestas purus.",
  socialLinks: [
    { icon: "/icons/Facebook.png", href: "#" },
    { icon: "/icons/Twitter.png", href: "#" },
    { icon: "/icons/Instagram.png", href: "#" },
    { icon: "/icons/Pinterest.png", href: "#" },
    { icon: "/icons/Youtube.png", href: "#" },
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
      items: ["Help & Support", "Terms & Conditions", "Privacy Policy", "Help"],
    },
    {
      title: "Newsletter",
      input: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam tincidunt erat enim.",
    },
  ],
};

// -----------------------------------------------

// Copyright

export const copyrightData = {
  paymentImg: "/icons/Payment.png",
  copyright: "© 2021 - Blogy — Designed & Developed by Zakirsoft",
};
