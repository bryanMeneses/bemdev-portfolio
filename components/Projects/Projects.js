import React from "react";
import Project from "./Project";
import { projectsData } from "./projectsData";

function Projects() {
  return (
    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 isotope">
      {projectsData.map((cur, i) => (
        <Project
          key={i}
          imageName={cur.imageName}
          title={cur.title}
          description={cur.description}
          demo_link={cur.demo_link}
          code_link={cur.code_link}
        />
      ))}
    </div>
  );
}

export default Projects;
