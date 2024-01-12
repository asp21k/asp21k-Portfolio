import React, { useState } from "react";

import Modal from "react-modal";

Modal.setAppElement("body");

export const ProjectCard = (props) => {
  const {
    name,
    description,
    image,
    code,
    website,
    deployment,
    techStack,
    sysArch,
    status,
  } = props.project;

  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className="mt-4 w-full max-w-lg pt-4 lg:w-1/2 xl:w-1/3 ">
      <div className="mx-3 flex h-full transform flex-col rounded-lg bg-slate-900/40 shadow-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-orange-700/50">
        <img
          src={image}
          alt={name}
          className="h-64 w-full rounded-lg rounded-b-none object-cover"
        />
        <div className="mt-2 px-4 py-2">
          <h2 className="text-center font-primary text-2xl font-bold text-orange-600">
            {name}
          </h2>
          <p className="text-secondary px-2 py-2 text-center text-sm text-gray-300">
            {description}
          </p>
        </div>
        <div className="flex flex-grow flex-col"></div>
        <div className="mx-2 mb-6 justify-center space-y-2 text-center">
          {techStack.map((stack, index) => {
            return (
              <span
                className="mx-1 my-auto inline-block rounded-full bg-slate-700 px-4 py-1 text-center font-secondary text-sm font-normal text-gray-300"
                key={index}
              >
                {stack}
              </span>
            );
          })}
        </div>
        <div className="mx-6 flex flex-col border border-l-0 border-r-0 border-t-0 border-gray-700"></div>
        <div className="flex justify-around px-8 py-4">
          {code ? (
            <a href={code} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                className="circled-icon"
              >
                <path d="M 27.933594 7.9746094 A 2.0002 2.0002 0 0 0 26.076172 9.4511719 L 18.076172 37.451172 A 2.0005815 2.0005815 0 0 0 21.923828 38.548828 L 29.923828 10.548828 A 2.0002 2.0002 0 0 0 27.933594 7.9746094 z M 14.064453 12.957031 A 2.0002 2.0002 0 0 0 12.660156 13.490234 L 2.6601562 22.515625 A 2.0002 2.0002 0 0 0 2.6601562 25.484375 L 12.660156 34.509766 A 2.0002 2.0002 0 1 0 15.339844 31.541016 L 6.984375 24 L 15.339844 16.458984 A 2.0002 2.0002 0 0 0 14.064453 12.957031 z M 33.875 12.958984 A 2.0002 2.0002 0 0 0 32.660156 16.458984 L 41.015625 24 L 32.660156 31.541016 A 2.0002 2.0002 0 1 0 35.339844 34.509766 L 45.339844 25.484375 A 2.0002 2.0002 0 0 0 45.339844 22.515625 L 35.339844 13.490234 A 2.0002 2.0002 0 0 0 33.875 12.958984 z"></path>
              </svg>
            </a>
          ) : null}
          {website ? (
            <a href={website} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                className="circled-icon"
              >
                <path d="M 15 3 C 10.57 3 6.7010469 5.419 4.6230469 9 L 7.0136719 9 C 8.0576719 7.615 9.4495 6.5045469 11.0625 5.8105469 C 10.5385 6.7005469 10.101672 7.783 9.7636719 9 L 11.871094 9 C 12.661094 6.541 13.869 5 15 5 C 16.131 5 17.338906 6.541 18.128906 9 L 20.236328 9 C 19.898328 7.783 19.4615 6.7005469 18.9375 5.8105469 C 20.5515 6.5045469 21.944281 7.615 22.988281 9 L 25.376953 9 C 23.297953 5.419 19.43 3 15 3 z M 2.1855469 12 L 3.7539062 18 L 5.1914062 18 L 6.1777344 14.324219 L 6.2519531 14.324219 L 7.2539062 18 L 8.6835938 18 L 10.251953 12 L 8.6796875 12 L 7.8945312 15.978516 L 7.8183594 15.978516 L 6.8242188 12 L 5.6035156 12 L 4.6425781 15.978516 L 4.5664062 15.978516 L 3.7695312 12 L 2.1855469 12 z M 10.966797 12 L 12.533203 18 L 13.972656 18 L 14.958984 14.324219 L 15.033203 14.324219 L 16.035156 18 L 17.466797 18 L 19.033203 12 L 17.462891 12 L 16.675781 15.978516 L 16.601562 15.978516 L 15.607422 12 L 14.384766 12 L 13.423828 15.978516 L 13.347656 15.978516 L 12.550781 12 L 10.966797 12 z M 19.748047 12 L 21.316406 18 L 22.755859 18 L 23.740234 14.324219 L 23.814453 14.324219 L 24.816406 18 L 26.246094 18 L 27.814453 12 L 26.242188 12 L 25.457031 15.978516 L 25.382812 15.978516 L 24.388672 12 L 23.166016 12 L 22.205078 15.978516 L 22.130859 15.978516 L 21.332031 12 L 19.748047 12 z M 4.6230469 21 C 6.7010469 24.581 10.57 27 15 27 C 19.43 27 23.298953 24.581 25.376953 21 L 22.988281 21 C 21.944281 22.385 20.552453 23.495453 18.939453 24.189453 C 19.463453 23.299453 19.898328 22.217 20.236328 21 L 18.128906 21 C 17.339906 23.459 16.132953 25 15.001953 25 C 13.870953 25 12.663047 23.459 11.873047 21 L 9.7636719 21 C 10.101672 22.217 10.5385 23.299453 11.0625 24.189453 C 9.4485 23.495453 8.0576719 22.385 7.0136719 21 L 4.6230469 21 z"></path>
              </svg>
            </a>
          ) : null}
          {deployment ? (
            <a href={deployment} target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30 30"
                className="circled-icon"
              >
                <path d="M 26.978516 3.0214844 C 26.978516 3.0214844 18 3 11 10 C 10.676811 10.323189 10.395406 10.675024 10.140625 11.039062 C 8.8995439 10.939831 6.9997651 10.972248 6.0273438 11.945312 C 3.7573437 14.215312 3 18 3 18 L 8 17.285156 L 8 19 L 11 22 L 12.714844 22 L 12 27 C 12 27 15.784688 26.242656 18.054688 23.972656 C 19.027752 23.000235 19.060169 21.100456 18.960938 19.859375 C 19.324976 19.604594 19.676811 19.323189 20 19 C 27 12 26.978516 3.0214844 26.978516 3.0214844 z M 19 9 C 20.105 9 21 9.895 21 11 C 21 12.105 20.105 13 19 13 C 17.895 13 17 12.105 17 11 C 17 9.895 17.895 9 19 9 z M 7.1992188 19.996094 C 6.8192188 20.096094 6.4591094 20.286984 6.1621094 20.583984 C 4.7961094 21.949984 5.0136719 24.984375 5.0136719 24.984375 C 5.0136719 24.984375 8.0281094 25.219938 9.4121094 23.835938 C 9.7091094 23.538937 9.9 23.176875 10 22.796875 L 9.5429688 22.339844 C 9.4979688 22.403844 9.4701094 22.478156 9.4121094 22.535156 C 8.4371094 23.510156 6.9746094 23.023438 6.9746094 23.023438 C 6.9746094 23.023438 6.4868906 21.560938 7.4628906 20.585938 C 7.5208906 20.527938 7.59225 20.501078 7.65625 20.455078 L 7.1992188 19.996094 z"></path>
              </svg>
            </a>
          ) : null}
          {sysArch ? (
            <>
              <button onClick={() => toggleModal()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 48 48"
                  className="circled-icon"
                >
                  <path
                    xmlns="http://www.w3.org/2000/svg"
                    d="M13.45 42 13 38.7l6.35-17.5q.55.55 1.225.9t1.425.6l-6.15 16.95Zm21.1 0-2.4-2.35-6.25-16.9q.75-.25 1.45-.6t1.25-.9L35 38.7ZM24 22q-2.5 0-4.25-1.75T18 16q0-2.1 1.225-3.725T22.5 10.2V6h3v4.2q2.05.45 3.275 2.075Q30 13.9 30 16q0 2.5-1.75 4.25T24 22Zm0-3q1.25 0 2.125-.875T27 16q0-1.25-.875-2.125T24 13q-1.25 0-2.125.875T21 16q0 1.25.875 2.125T24 19Z"
                  />
                </svg>
              </button>
              <Modal
                isOpen={isModalOpen}
                onRequestClose={() => toggleModal()}
                style={{
                  overlay: {
                    zIndex: 20,
                    backgroundColor: "#000a",
                  },
                }}
                className="absolute bottom-40 left-10 right-10 top-20 my-auto h-auto rounded-xl bg-gray-800 md:bottom-20 md:left-40 md:right-40"
              >
                <div className="flex flex-row">
                  <button
                    className="ml-auto mr-6 mt-6"
                    onClick={() => toggleModal()}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 48 48"
                      className="h-8 w-8 fill-current stroke-current stroke-2 text-gray-200"
                    >
                      <path d="m12.45 37.65-2.1-2.1L21.9 24 10.35 12.45l2.1-2.1L24 21.9l11.55-11.55 2.1 2.1L26.1 24l11.55 11.55-2.1 2.1L24 26.1Z" />
                    </svg>
                  </button>
                </div>
                <div className="my-auto h-full">
                  <h1 className="mx-16 -mt-8 mb-6 text-center font-primary text-2xl font-bold text-gray-300 transition duration-500 ease-in-out hover:text-orange-400">
                    System Architecture
                  </h1>
                  <iframe
                    className="mx-auto h-2/3 w-5/6 cursor-pointer sm:w-3/4 md:h-3/4"
                    src={sysArch}
                    title="architechture"
                  />
                </div>
              </Modal>
            </>
          ) : null}
          {status ? (
            <p className="text-center font-secondary text-sm font-normal text-orange-600 hover:scale-110">
              {status}
            </p>
          ) : null}
        </div>
      </div>
    </div>
  );
};
