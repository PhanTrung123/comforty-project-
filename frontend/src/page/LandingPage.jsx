import React from "react";
import Layout from "../common/Layout";
import HeroSection from "../components/HeroSection";
import Feature from "../components/Feature";
import CompanyLogo from "../components/CompanyLogo";
import FeaturedProducts from "../components/FeaturedProducts";
import TopCatagories from "../components/TopCatagories";
import OurProducts from "../components/OurProducts";

const LandingPage = () => {
  return (
    <Layout>
      <Feature />
      <CompanyLogo />
      <FeaturedProducts />
      <TopCatagories />
      <OurProducts />
    </Layout>
  );
};

export default LandingPage;
