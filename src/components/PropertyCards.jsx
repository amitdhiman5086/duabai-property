import React from "react";
import PropertyCard from "./PropertyCard";
import { data } from "../config";

const PropertyCards = () => {
  return (
    <div className="my-5 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => (
        <PropertyCard key={item.id} info={item}/>
      ))}
    </div>
  );
};

export default PropertyCards;
