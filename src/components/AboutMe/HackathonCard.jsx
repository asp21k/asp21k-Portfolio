import React from "react";

export default function HackathonCard(props) {
  const { name, position, teamName, solution, date, description, website } =
    props.hackathon;

  return (
    <div className="mt-4 w-full pt-4 xl:w-1/2">
      <div className="mx-3 my-2 flex h-full transform flex-col rounded-lg bg-gray-800 shadow-2xl transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
        <div className="mt-2 px-8 py-4">
          <div className="flex flex-row justify-between">
            <h2 className="text-left font-primary text-2xl font-bold text-blue-500">
              {name}
            </h2>
            {website ? (
              <a href={website} target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt fa-md my-auto text-gray-400"></i>
              </a>
            ) : null}
          </div>
          <div className="flex flex-row justify-between">
            <h4 className="text-md font-secondary font-normal text-white">
              {position}
            </h4>
            <h6 className="text-md font-secondary font-normal text-gray-400">
              {date}
            </h6>
          </div>
          <p className="text-secondary mt-2 text-left text-sm text-gray-300">
            <span className="font-bold">Team Name:</span> {teamName}
          </p>
          <p className="text-secondary text-left text-sm text-gray-300">
            <span className="font-bold">Proposed Solution:</span> {solution}
          </p>
          <p className="text-secondary text-justify text-sm text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
