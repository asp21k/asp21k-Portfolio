import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import React from "react";

export default function CollabCTA() {
  return (
    <div className="mx-3">
      <div className="container transform transition ease-in-out hover:scale-105">
        <Fade up>
          <div className="space-between relative my-12 flex flex-col items-center justify-between overflow-hidden rounded-lg bg-slate-900/50 p-8 text-white md:flex-row">
            <div className="z-10 my-auto flex max-w-sm flex-col lg:ml-14 lg:max-w-xl xl:ml-32">
              <h4 className="text-center font-primary text-4xl font-bold text-white md:pb-2 md:text-left">
                Have an Idea?
              </h4>
              <p className="text-center font-secondary font-medium text-white opacity-70 md:text-left">
                Interested in working together? We should queue up a chat!
              </p>
            </div>

            <div className="z-10 justify-center pt-8 md:pt-0 lg:ml-auto">
              <Link to="/contact">
                <button className="font-display flex items-center rounded-md bg-orange-600 px-8 py-4 text-center font-primary text-lg font-semibold text-white transition duration-500 hover:bg-orange-800 hover:text-white">
                  <p>
                    <span className="font-thin" role="img" aria-label="emoji">
                      ☕
                    </span>{" "}
                    Let's Talk
                  </p>
                </button>
              </Link>
            </div>

            <div className="absolute -right-16 -top-12 z-0 h-80 w-80 rounded-full bg-slate-800/50 opacity-60 shadow-2xl sm:h-96 sm:w-96 md:left-[45%] md:top-[-150%] md:h-[600px] md:w-[800px]"></div>
          </div>
        </Fade>
      </div>
    </div>
  );
}
