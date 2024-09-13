import React from "react";
import PropertyCard from "./PropertyCard";
import { data } from "../config";
import { Link } from "react-router-dom";

const PropertyCards = () => {
  return (
    <div className="my-5 w-[80%] mx-auto grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data.map((item) => (
        <Link key={item.id} to={"/offproperty/:propType/:propertyTitle"}>
          <PropertyCard key={item.id} info={item} />
        </Link>
      ))}
    </div>
  );
};

export default PropertyCards;
