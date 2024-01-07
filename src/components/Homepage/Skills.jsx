import Fade from "react-reveal/Fade";
import React from "react";
import { SkillCard } from "./SkillCard";
import skillsData from "../../data/skills.json";

export default function Skills() {
  return (
    <section className="mt-16 mx-3 justify-center">
      <Fade up>
        <h1 className="heading-tagline">WHAT I KNOW</h1>
        <div>
          <h1 className="heading-main">Skills</h1>
        </div>
      </Fade>
      <Fade up>
        <div className="mt-8 py-4 px-4 bg-gray-800 items-center justify-center shadow-2xl rounded-md">
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
