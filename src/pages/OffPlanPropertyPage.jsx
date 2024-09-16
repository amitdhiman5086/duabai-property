import React from "react";
import BackGroundImage from "../components/BackGroundImage";
import ImageSlider from "../components/OffPlanCrousal";
import AnotherSection from "../components/AnotherSection";
import PaymentPlan from "../components/PaymentPlan";
import FloorPlans from "../components/Floors";

const OffPlanPropertyPage = () => {
  return (
    <div className="flex flex-col ">
      <BackGroundImage text={"Emaar Park Lane Interiors by Vida"} />{" "}
      <div className="w-[80%] flex flex-row justify-between gap-3 my-10 mx-auto">
        <div className="w-full h-auto lg:min-w-[80%] rounded-3xl">
          <ImageSlider />
          <AnotherSection />
          <FloorPlans/>
          <PaymentPlan/>
        </div>
        <div className=" hidden h-auto lg:inline min-w-[20%] space-y-3 ">
          <h1 className="text-xl font-semibold ">Specifications</h1>
          <ul className="font-light space-y-2 ">
            <li>Offers Residential Plots</li>
            <li>5% Down Payment</li>
          </ul>
        </div>
      </div>
      {/* Another Section  */}
    </div>
  );
};

export default OffPlanPropertyPage;
