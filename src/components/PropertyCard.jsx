import { Card } from "flowbite-react";
import React from "react";

const PropertyCard = ({info}) => {
  return (
    <div className="w-full  ">
      <Card
        className="max-w-md   bg-transparent backdrop-blur-sm hover:scale-110 transition-all ease-in-out"
        renderImage={() => <img className="w-[500px] h-[200px] object-cover overflow-hidden"  src={info.imageUrl} alt="image 1" />}
      >
        <h1 className="text-xl font-bold">{info.title}</h1>
      </Card>
    </div>
  );
};

export default PropertyCard;
