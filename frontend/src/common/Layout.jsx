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
import Copyright from "./Copyright";

const Layout = ({ data = {} }) => {
  const {
    topBarData = {},
    slides = [],
    features = [],
    logosCompany = [],
    featuredProducts = [],
    topCategories = [],
    ourProductsData = {},
    testimonialsData = {},
    recentlyAddedData = {},
    footerData = {},
    copyrightData = {},
  } = data;

  return (
    <div className="flex flex-col min-h-screen bg-white overflow-x-hidden">
      <header className="w-full border-b border-b-[#e1e3e6]">
        <Navigation data={topBarData} className="h-full" />
      </header>

      <section className="w-full mx-0 px-4 xl:px-0 md:max-w-[1740px] md:mx-auto">
        <HeroSection slides={slides} />
      </section>

      <section className="flex-1 w-full max-w-[1320px] mx-auto sm:px-4 xl:px-0">
        <Feature features={features} />
      </section>

      <section className="flex-1 w-full max-w-[1320px] mx-auto px-4 xl:px-0 mt-[26px]">
        <CompanyLogo logos={logosCompany} />
      </section>

      <section className="flex-1 w-full max-w-[1320px] mx-auto px-4 xl:px-0">
        <FeaturedProducts products={featuredProducts} />
      </section>

      <section className="w-full flex justify-center px-4 xl:px-0">
        <div className="w-full overflow-visible">
          <TopCategories categories={topCategories} />
        </div>
      </section>

      <section className="flex-1 w-full max-w-[1320px] mx-auto px-4 xl:px-0">
        <OurProducts data={ourProductsData} />
      </section>

      <section className="flex-1 w-full mx-auto">
        <Testimonial testimonials={testimonialsData} />
      </section>

      <section className="w-full max-w-[1320px] mx-auto px-4 xl:px-0 sm:mb-[40px] lg:mb-[103px] mb-10 xs:mb-0">
        <RecentlyAdd data={recentlyAddedData} />
      </section>

      <footer className="w-full border-t border-b border-[#e9eaec] bg-white">
        <div className="max-w-[1320px] w-full mx-auto px-4 xl:px-0">
          <Footer data={footerData} />
        </div>
        <section className="flex-1 border-t border-[#e9eaec] w-full mx-auto px-4 sm:px-0">
          <div className="max-w-[1320px] w-full mx-auto px-4 xl:px-0">
            <Copyright data={copyrightData} />
          </div>
        </section>
      </footer>
    </div>
  );
};

export default Layout;
