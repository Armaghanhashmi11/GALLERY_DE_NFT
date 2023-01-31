import React from "react";

import HeroSection from "../components/ui/HeroSection";

import LiveAuction from "../components/ui/Live-auction/LiveAuction";

import Trending from "../components/ui/Trending-section/Trending";


const Home = () => {
  return (
    <>
      <HeroSection />
      <LiveAuction />
      {/* <SellerSection /> */}
      <Trending />
      {/* <StepSection /> */}
    </>
  );
};

export default Home;
