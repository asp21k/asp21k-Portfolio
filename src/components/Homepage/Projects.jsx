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
            href="https://www.github.com/RohinBhat/"
            target="_blank"
            rel="noreferrer"
          >
            <h1 className="heading-main">Recent Projects</h1>
          </a>
        </div>
      </Fade>
      <Fade up>
        <div className="flex flex-wrap w-full justify-center">
          {projectsData.map((project, index) =>
            index < 3 ? <ProjectCard project={project} key={index} /> : null
          )}
        </div>
        <HashLink to="/about#all-projects">
          <button className="flex mt-8 w-auto mx-auto text-center font-secondary bg-transparent transition duration-500 ease-in-out hover:bg-blue-500 text-blue-500 font-semibold hover:text-white py-4 px-6 border border-blue-500 hover:border-transparent rounded">
            See all projects
          </button>
        </HashLink>
      </Fade>
    </section>
  );
}
