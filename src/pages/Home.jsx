import React from "react";
import CustomCarousel from "../components/Crousal";
import DubaiHillsInfo from "../components/DubaiHillsInfo";
import PropertyCards from "../components/PropertyCards";
import Features from "../components/Features";

const Home = () => {
  return (
    <>
      <div className="overflow-x-hidden">
        <CustomCarousel />
      </div>
      <div>
        <DubaiHillsInfo />
      </div>
      <div>
        <PropertyCards />
      </div>
      <div>
        <Features />
      </div>
    </>
  );
};

export default Home;
