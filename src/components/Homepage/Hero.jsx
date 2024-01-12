import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import React from "react";
import Typewriter from "typewriter-effect";
import photo from "../../images/my.png";
import style from "./hero.module.css";

export default function Hero() {
  return (
    <div className="W-full mt-10 grid grid-cols-1 lg:grid-cols-2">
      <Fade>
        <div className="my-auto flex flex-col justify-start px-5 md:justify-center lg:justify-start">
          <h1 className="text-left font-primary text-5xl font-bold text-white">
            Hey there,
          </h1>
          <h1 className="mt-2 text-left font-primary text-5xl font-bold text-white">
            I'm Atharva Pardeshi
          </h1>
          <div className="mt-4 text-left font-primary  text-2xl font-medium text-orange-500 md:block md:text-4xl">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Web Developer")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("Graphic Designer")
                  .pauseFor(500)
                  .deleteAll()
                  .typeString("UI/UX Designer")
                  .pauseFor(500)
                  .deleteAll()
                  .start();
              }}
            />
          </div>
          <h1 className="mt-4 text-left font-secondary text-xl font-normal text-gray-400">
            I am a Computer Engineering Undergraduate at Pune Institute of
            Computer Technology with a keen interest in the field of Full Stack
            Development, Frontend Development and Graphic Design.
          </h1>
          <div className="flex flex-col lg:flex-row lg:justify-start lg:space-x-24">
            <Link to="/resume">
              <button className="mt-8 w-full rounded border border-orange-500 bg-transparent px-6 py-4 font-secondary font-semibold text-orange-500 transition duration-500 ease-in-out hover:border-transparent hover:bg-orange-500 hover:text-white lg:w-auto">
                See my Resume
              </button>
            </Link>
            <Link to="/contact">
              <button className="mt-4 w-full rounded border border-orange-500 bg-transparent px-6 py-4 font-secondary font-semibold text-orange-500 transition duration-500 ease-in-out hover:border-transparent hover:bg-orange-500 hover:text-white lg:mt-8 lg:w-auto">
                Reach out
              </button>
            </Link>
          </div>
        </div>
      </Fade>
      <Fade>
        <div
          className={
            style.container +
            "  mx-5 mb-7 mt-8 flex flex-col items-center justify-center rounded-full xl:ml-12 "
          }
        >
          <div className={style.GradientBorder + " flex flex-col items-center"}>
            <img
              src={photo}
              className="mt-0 w-[30rem] overflow-hidden rounded-full  shadow-2xl"
              alt="Atharva pardeshi"
              loading="lazy"
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}
