import React from "react";

export default function HackathonCard(props) {
  const { name, position, teamName, solution, date, description, website } =
    props.hackathon;

  return (
    <div className="pt-4 w-full xl:w-1/2 mt-4">
      <div className="flex flex-col h-full mx-3 my-2 bg-gray-800 shadow-2xl rounded-lg transition ease-in-out transform hover:scale-105 hover:-translate-y-1 duration-300">
        <div className="px-8 py-4 mt-2">
          <div className="flex flex-row justify-between">
            <h2 className="text-left font-bold font-primary text-2xl text-blue-500">
              {name}
            </h2>
            {website ? (
              <a href={website} target="_blank" rel="noreferrer">
                <i className="fas fa-external-link-alt fa-md my-auto text-gray-400"></i>
              </a>
            ) : null}
          </div>
          <div className="flex flex-row justify-between">
            <h4 className="font-secondary text-md font-normal text-white">
              {position}
            </h4>
            <h6 className="font-secondary text-md font-normal text-gray-400">
              {date}
            </h6>
          </div>
          <p className="text-left text-sm text-secondary text-gray-300 mt-2">
            <span className="font-bold">Team Name:</span> {teamName}
          </p>
          <p className="text-left text-sm text-secondary text-gray-300">
            <span className="font-bold">Proposed Solution:</span> {solution}
          </p>
          <p className="text-justify text-sm text-secondary text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
