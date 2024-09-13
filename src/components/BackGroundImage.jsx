import React from "react";

const BackGroundImage = ({text}) => {
  return (
    <div className="relative ">
      <div className="absolute">
        <img
          src="https://dubai-hills-estate.ae/images/background/4.jpg"
          alt="Bg Image"
          className="w-screen h-40 md:h-52 object-cover -z-10 opacity-80 "
        />
      </div>
      <div className="flex h-52  justify-center items-center">
        <h1 className="text-2xl md:text-4xl  w-full text-center items-center mt-14  text-white z-10 font-semibold ">
          {text}
        </h1>
      </div>
    </div>
  );
};

export default BackGroundImage;
