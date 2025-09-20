import Fade from "react-reveal/Fade";
import { Link } from "react-router-dom";
import React from "react";
import Shake from "react-reveal/Shake";
import notfound from "/404.svg";

export default function NotFound() {
  return (
    <div className="mx-auto w-full">
      <img
        className="mx-auto h-auto w-auto max-w-lg"
        src={notfound}
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
        <div>
          <h3 className="mt-4 transform text-center font-primary text-5xl font-black text-white transition duration-500 ease-in-out hover:scale-105 hover:text-orange-400">
            Looks like you've reached a Dead End!
          </h3>
        </div>
        <p className="mt-4 text-center font-secondary text-xl font-normal text-gray-400">
          The page you are looking for does not exist. Please check the URL for
          spelling mistakes or capitalization and try again.
        </p>
        <p className="text-center font-secondary text-xl font-normal text-gray-400">
          If you are having trouble locating your destination, try to visit the
          <span className="text-orange-500 hover:text-orange-700">
            <Link to="/"> Home Page</Link>
          </span>
          .
        </p>
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
