import React from "react";
import ProjectCardsList from "../components/ProjectCardsList";
import BackGroundImage from "../components/BackGroundImage";

const ViewMoreProjects = () => {
  return (
    <>
      
      <BackGroundImage text={"Dubai Hills Estate"}/>
      <div className="w-[80%] mx-auto mb-10 mt-6">
        <ProjectCardsList />
      </div>
    </>
  );
};

export default ViewMoreProjects;
