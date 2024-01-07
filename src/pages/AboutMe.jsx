import AllProjects from "../components/AboutMe/AllProjects";
import Education from "../components/AboutMe/Education";
import Experience from "../components/AboutMe/Experience";
import Fade from "react-reveal/Fade";
import Hackathons from "../components/AboutMe/Hackathons";
import Organizations from "../components/AboutMe/Organizations";
import React from "react";

export default function AboutMe() {
  return (
    <div>
      <Fade up>
        <div>
          <h1 className="text-center mt-10 font-primary font-black text-3xl md:text-5xl capitalize text-gray-300 transition duration-500 ease-in-out transform hover:scale-105 hover:text-yellow-400">
            Bio
          </h1>
        </div>
      </Fade>
      <Fade up cascade>
        <div>
          <p className="mx-auto w-full lg:w-3/4 mt-4 font-secondary font-normal text-gray-400 text-xl text-center">
            I am a Computer Engineering undergraduate at Pune Institute of
            Computer Technology, currently working in the fields of Mobile App
            Development and Web Development.
          </p>
          <p className="mx-auto w-full lg:w-3/4 mt-2 font-secondary font-normal text-gray-400 text-xl text-center">
            A creative Graphic Designer and Developer. Skilled at writing
            well-designed, testable and efficient code using current best
            practices.
          </p>
          <p className="mx-auto w-full lg:w-3/4 mt-2 font-secondary font-normal text-gray-400 text-xl text-center">
            A fast learner, natural leader, hard worker and a team player who is
            proficient in an array of various technologies.
          </p>
        </div>
      </Fade>
      <Education />
      <Experience />
      <AllProjects />
      <Hackathons />
      <Organizations />
    </div>
  );
}
