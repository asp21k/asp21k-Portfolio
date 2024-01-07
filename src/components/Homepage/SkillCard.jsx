import React from "react";

export const SkillCard = (props) => {
  const { name, url } = props.details;
  return (
    <div className="w-28 my-3 mx-auto bg-gray-600 py-4 rounded-md flex flex-col items-center transition duration-200 ease-in-out transform hover:scale-105 hover:-translate-y-1 hover:shadow-lg">
      <div className="w-12 mb-2 flex-grow">
        <img src={url} alt={name} />
      </div>
      <p className="font-secondary text-white font-medium text-center">
        {name}
      </p>
    </div>
  );
};
