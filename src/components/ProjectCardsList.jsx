import React from "react";
import { data } from "../config";
import { Link } from "react-router-dom";
import ProjectCard from "./ProjectCard";

const ProjectCardsList = () => {
  return (
    <div>
      {data.map((item) => (
        <Link key={item.id} to={"/more-projects"}>
          <ProjectCard key={item.id} info={item} />
        </Link>
      ))}
    </div>
  );
};

export default ProjectCardsList;
