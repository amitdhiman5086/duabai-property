import { Button } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";

const ProjectCard = ({ info }) => {
  const { id, imageUrl, title, location } = info;
  return (
    <div
      className={`flex  my-4 lg:my-10 flex-col  gap-2 ${
        id % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
      } w-full border border-black lg:border-none pb-4 lg:pb-0 `}
    >
      {/* Image Part  */}
      <div className="lg:w-[33%]  w-full">
        <Link className="" to={"/offproperty/:propType/:propertyTitle"}>
          <img
            src={imageUrl}
            className="  w-full h-full p-6 lg:py-0 lg:px-4 hover:scale-105 transition-all ease-in-out object-cover"
            alt="Image"
          />
        </Link>
      </div>
      {/* Another Part  */}
      <div className="w-full lg:w-[66%] flex flex-col justify-between gap-3">
        <h1 className="lg:text-start text-center font-bold text-xl">{title}</h1>
        {/* <p className="px-6 lg:px-0 font-extralight ">{infromation}</p> */}
        <p className="px-6 lg:px-0 font-extralight">{location}</p>
        <div className="w-full flex justify-center lg:justify-start ">
          <Link
            className="w-full flex  justify-center lg:justify-start"
            to={"/offproperty/:propType/:propertyTitle"}
          >
            <Button className="w-[20%]  " gradientMonochrome="success" outline>
              View More
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
