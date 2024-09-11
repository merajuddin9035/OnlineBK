import React from "react";
import HeroSection from "../../components/HeroSection/HeroSection";
import OfferService from "../../components/OfferService/OfferService";
import CategoryBanner from "../../components/CategoryBanner/CategoryBanner";
import BestProduct from "../../components/BestProducts/BestProduct";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";

const Home = () => {
  return (
    <div className="">
      <HeroSection />
      <OfferService />
      <CategoryBanner />
      <BestProduct />
      <FeaturedProducts />
    </div>
  );
};

export default Home;
