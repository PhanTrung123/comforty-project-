import React from "react";
import Navigation from "../components/Navigation";
import HeroSection from "../components/HeroSection";
import Testimonial from "../components/Testimonial";
import Footer from "./Footer";
import RecentlyAdd from "../components/RecentlyAdd";
import TopCategories from "../components/TopCatagories";
import CompanyLogo from "../components/CompanyLogo";
import Feature from "../components/Feature";
import FeaturedProducts from "../components/FeaturedProducts";
import OurProducts from "../components/OurProducts";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans overflow-x-hidden">
      <header className="w-full sm:h-[180px] lg:h-[204px]">
        <Navigation />
      </header>
      <section className="w-full mx-0 px-4 sm:px-0 md:max-w-[1740px] md:mx-auto">
        <HeroSection />
      </section>

      <section className="flex-1 w-full max-w-[1320px] mx-auto px-4 sm:px-0">
        <Feature />
      </section>

      <section className="flex-1 w-full max-w-[1320px] mx-auto px-4 sm:px-0">
        <CompanyLogo />
      </section>

      <section className="flex-1 w-full max-w-[1320px] mx-auto px-4 sm:px-0">
        <FeaturedProducts />
      </section>

      <section className="w-full flex justify-center mt-10 px-4 sm:px-0">
        <div className="w-full overflow-visible">
          <TopCategories />
        </div>
      </section>

      <section className="flex-1 w-full max-w-[1320px] mx-auto px-4 sm:px-0">
        <OurProducts />
      </section>

      <section className="flex-1 w-full mx-auto px-4 sm:px-0">
        <Testimonial />
      </section>

      <section className="w-full max-w-[1320px] mx-auto px-4 sm:px-0">
        <RecentlyAdd />
      </section>
      <footer className="w-full border-t border-b border-[#E1E3E5] bg-white">
        <div className="max-w-[1320px] w-full mx-auto ">
          <Footer />
        </div>
      </footer>
    </div>
  );
};

export default Layout;
