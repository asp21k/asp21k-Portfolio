import AllProjects from "../components/AboutMe/AllProjects";
import Education from "../components/AboutMe/Education";
import Experience from "../components/AboutMe/Experience";
import Fade from "react-reveal/Fade";
import Hackathons from "../components/AboutMe/Hackathons";
import Organizations from "../components/AboutMe/Organizations";
import React from "react";

export default function AboutMe() {
  return (
    <div className="px-2 xl:px-16">
      <Fade up>
        <div>
          <h1 className="mt-10 transform text-center font-primary text-3xl font-black capitalize text-gray-300 transition duration-500 ease-in-out hover:scale-105 hover:text-yellow-400 md:text-5xl">
            Bio
          </h1>
        </div>
      </Fade>
      <Fade up cascade>
        <div>
          <p className="mx-auto mt-4 w-full text-center font-secondary text-xl font-normal text-gray-400 lg:w-3/4">
            I am a Computer Engineering undergraduate at Pune Institute of
            Computer Technology, currently working in the fields of Full Stack
            Web Development and UI/UX Design.
          </p>
          <p className="mx-auto mt-2 w-full text-center font-secondary text-xl font-normal text-gray-400 lg:w-3/4">
            A creative Graphic Designer and Developer. Skilled at writing
            well-designed, testable and efficient code using current best
            practices.
          </p>
          <p className="mx-auto mt-2 w-full text-center font-secondary text-xl font-normal text-gray-400 lg:w-3/4">
            A fast learner, natural leader, hard worker and a team player who is
            proficient in an array of various technologies.
          </p>
        </div>
      </Fade>
      <Education />
      <Experience />
      <AllProjects />
      {/* <Hackathons /> */}
      <Organizations />
    </div>
  );
}
