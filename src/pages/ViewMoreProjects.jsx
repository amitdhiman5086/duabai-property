import React from "react";
import ProjectCardsList from "../components/ProjectCardsList";

const ViewMoreProjects = () => {
  return (
    <>
      <div className="relative ">
        <div className="absolute">
          <img
            src="https://dubai-hills-estate.ae/images/background/4.jpg"
            alt="Bg Image"
            className="w-screen h-40 md:h-52 object-cover -z-10 opacity-70 "
          />
        </div>
        <div className="flex h-52  justify-center items-center">
<h1 className="text-2xl md:text-4xl  w-full text-center items-center mt-14  text-black z-10 font-semibold ">Dubai Hills Estate</h1>

        </div>
      </div>
      <div className="w-[80%] mx-auto mb-10 mt-6">
        <ProjectCardsList />
      </div>
    </>
  );
};

export default ViewMoreProjects;
