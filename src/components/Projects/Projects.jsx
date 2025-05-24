import React from "react";
import ProjectCard from "./ProjectCard";
import projectData from "./projectsdata";
export default function Projects() {
  return (
    <section className="projects-container" id="projects">
      <h2 className="project-headline">PROJECTS</h2>
      <div className="projects">
        {projectData.map((project, id) => {
          return <ProjectCard key={id} {...project} />;
        })}
      </div>
    </section>
  );
}
