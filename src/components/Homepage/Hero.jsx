import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import React from "react";
import Typewriter from "typewriter-effect";
import photo from "../../images/my.png";

export default function Hero() {
  return (
    <div className="mt-10 grid grid-cols-1 lg:grid-cols-2">
      <Fade>
        <div className="my-auto px-5 flex flex-col justify-start md:justify-center lg:justify-start">
          <h1 className="font-primary font-bold text-white text-5xl text-left">
            Hey there,
          </h1>
          <h1 className="mt-2 font-primary font-bold text-white text-5xl text-left">
            I'm Atharva Pardeshi
          </h1>
          <div className="mt-4 font-primary font-medium text-orange-500 text-4xl text-left">
            <Typewriter
              options={{
                loop: true,
              }}
              onInit={(typewriter) => {
                typewriter
                  .typeString("Full Stack Developer")
                  .pauseFor(500)
                  .deleteAll()
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
          <h1 className="mt-4 font-secondary font-normal text-gray-400 text-xl text-left">
            I am a Computer Engineering Undergraduate at Pune Institute of
            Computer Technology with a keen interest in the field of Mobile App
            Development, Web Development and Graphic Design.
          </h1>
          <div className="flex flex-col lg:flex-row lg:justify-around">
            <Link to="/resume">
              <button className="w-full mt-8 font-secondary bg-transparent transition duration-500 ease-in-out hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-4 px-6 border border-orange-500 hover:border-transparent rounded lg:w-auto">
                See my Resume
              </button>
            </Link>
            <Link to="/contact">
              <button className="w-full mt-4 font-secondary bg-transparent transition duration-500 ease-in-out hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-4 px-6 border border-orange-500 hover:border-transparent rounded lg:mt-8 lg:w-auto">
                Reach out
              </button>
            </Link>
          </div>
        </div>
      </Fade>
      <Fade>
        <div className="px-5 flex flex-col items-center">
          <img
            src={photo}
            className="overflow-hidden rounded-full shadow-2xl mt-8 lg:mt-0"
            alt="Rohin Bhat"
          />
        </div>
      </Fade>
    </div>
  );
}
