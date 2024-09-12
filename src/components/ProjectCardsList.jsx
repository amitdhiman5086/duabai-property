import React from "react";
import { data } from "../config";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const ProjectCardsList = () => {
  return (
    <div>
      {data.map((item) => (
       <ProjectCard key={item.id} info={item}/>
      ))}
    </div>
  );
};

export default ProjectCardsList;
