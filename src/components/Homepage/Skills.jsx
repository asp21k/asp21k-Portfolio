import Fade from "react-reveal/Fade";
import React from "react";
import { SkillCard } from "./SkillCard";
import skillsData from "../../data/skills.json";

export default function Skills() {
  return (
    <section className="mx-3 mt-16 justify-center">
      <Fade up>
        <h1 className="heading-tagline">WHAT I KNOW</h1>
        <div>
          <h1 className="heading-main">Skills</h1>
        </div>
      </Fade>
      <Fade up>
        <div
          className="mt-8 items-center justify-center  rounded-md border border-gray-100 bg-gray-600 bg-opacity-10 bg-clip-padding px-4 py-4
 shadow-2xl backdrop-blur-md backdrop-filter "
        >
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8">
            {skillsData.map((skill, index) => {
              return <SkillCard details={skill} key={index} />;
            })}
          </div>
        </div>
      </Fade>
    </section>
  );
}
