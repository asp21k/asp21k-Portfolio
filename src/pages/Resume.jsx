import Fade from "react-reveal/Fade";
import React from "react";

export default function Resume() {
  const resumeUrl =
    "/resume.pdf";
  return (
    <div className="mx-auto mt-16 max-w-5xl divide-gray-800 overflow-hidden rounded-lg shadow-md">
      <div className="h-full">
        <div className="flex items-center justify-between bg-gray-800 px-6 py-6">
          <Fade>
            <h1 className="text-md font-secondary font-semibold text-gray-300 md:text-xl">
              Resume | Atharva Pardeshi
            </h1>
          </Fade>
          <a
            href="/resume.pdf"
            target="_blank"
          >
            <Fade>
              <div className="flex flex-row rounded-md bg-orange-600 px-4 py-2 font-secondary text-white hover:bg-orange-700 ">
                <svg
                  className="-ml-1 mr-3 h-5 w-5 fill-current text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
                Download
              </div>
            </Fade>
          </a>
        </div>
        <iframe
          title="Atharva Pardeshi | Resume"
          className="mx-auto h-screen w-full bg-blue-800"
          src={resumeUrl}
        ></iframe>
      </div>
    </div>
  );
}
