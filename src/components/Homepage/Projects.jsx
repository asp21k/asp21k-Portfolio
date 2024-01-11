import Fade from "react-reveal/Fade";
import { HashLink } from "react-router-hash-link";
import { ProjectCard } from "./ProjectCard";
import React from "react";
import { projectsData } from "../../data/projects";

export default function Projects() {
  return (
    <section className="mt-16 mx-3">
      <Fade up>
        <h1 className="heading-tagline">TAKE A LOOK</h1>
        <div>
          <a
            href="https://www.github.com/asp21k/"
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="heading-main">Projects</h1>
          </a>
        </div>
      </Fade>
      <Fade up>
        <div className="flex flex-wrap w-full justify-center">
          {projectsData.map((project, index) =>
            index < 3 ? <ProjectCard project={project} key={index} /> : null
          )}
        </div>
        
      </Fade>
    </section>
  );
}
