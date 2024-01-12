import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import React from "react";
import submitsvg from "/submit.svg";

export default function Submission() {
  return (
    <div className="mx-auto w-full py-32 ">
        <div>
          <h3 className="mt-12 transform text-center font-primary text-5xl font-black text-white transition duration-500 ease-in-out hover:scale-105 hover:text-orange-400">
            Thank You for Getting in Touch.
          </h3>
        </div>
      <img
        className="mx-auto h-auto w-auto max-w-lg"
        src={submitsvg}
        alt="Not Found"
      />
      <Fade up>

        <div>
          <a
            href="https://storyset.com/web"
            target="_blank"
            rel="noreferrer"
            className="text-center font-secondary text-sm font-normal text-gray-400"
          >
            <p>Illustration by Storyset</p>
          </a>
        </div>
        
        
        <div className="text-center">
          <Link to="/">
            <button className="mt-4 w-full rounded border border-orange-500 bg-transparent px-6 py-4 font-semibold text-orange-600 transition duration-500 ease-in-out hover:border-transparent hover:bg-orange-500 hover:text-white lg:w-auto">
              Back to Home
            </button>
          </Link>
        </div>
      </Fade>
    </div>
  );
}
