import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import React from "react";

export default function CollabCTA() {
  return (
    <div className="mx-3">
      <div className="container transition ease-in-out hover:scale-105 transform">
        <Fade up>
          <div className="rounded-lg bg-gray-800 text-white p-8 my-12 flex flex-col md:flex-row space-between items-center justify-between relative overflow-hidden">
            <div className="flex flex-col my-auto lg:ml-14 xl:ml-32 max-w-sm lg:max-w-xl z-10">
              <h4 className="text-4xl text-center font-primary md:text-left font-bold text-white md:pb-2">
                Have an Idea?
              </h4>
              <p className="text-center font-secondary font-medium md:text-left text-white opacity-70">
                Interested in working together? We should queue up a chat!
              </p>
            </div>

            <div className="pt-8 md:pt-0 justify-center lg:ml-auto z-10">
              <Link to="/contact">
                <button className="flex items-center px-8 py-4 text-center font-primary font-semibold text-lg text-white bg-blue-500 font-display rounded-md transition duration-500 hover:bg-blue-700 hover:text-white">
                  <p>
                    <span className="font-thin" role="img" aria-label="emoji">
                      ☕
                    </span>{" "}
                    Let's Talk
                  </p>
                </button>
              </Link>
            </div>

            <div className="absolute bg-gray-700 opacity-60 w-80 h-80 sm:w-96 sm:h-96 -top-12 -right-16 md:w-[800px] md:h-[600px] md:left-[45%] md:top-[-150%] rounded-full shadow-2xl z-0"></div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
