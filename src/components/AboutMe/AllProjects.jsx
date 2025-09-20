import Fade from "react-reveal/Fade";
import { ProjectCard } from "../Homepage/ProjectCard";
import React from "react";
import { projectsData } from "../../data/projects";

export default function Projects() {
  return (
    <section className="mx-3 mt-16" id="all-projects">
      <Fade up>
        <div>
          <a href="https://www.github.com//" target="_blank" rel="noreferrer">
            <h1 className="heading-main">All Projects</h1>
          </a>
        </div>
      </Fade>
      <Fade up>
        <div className="flex w-full flex-wrap justify-center">
          {projectsData.map((project, index) => (
            <ProjectCard project={project} key={index} />
          ))}
        </div>
      </Fade>
    </section>
  );
}
