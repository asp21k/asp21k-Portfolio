import React from "react";

export const SkillCard = (props) => {
  const { name, url } = props.details;

  return (
    <div className="mx-auto my-3 flex w-28 transform flex-col items-center rounded-md bg-slate-900/50 py-4 transition duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-lg hover:shadow-orange-700/60 ">
      <div className="mb-2 w-12 flex-grow border-orange-600">
        <img src={url} alt={name} />
      </div>
      <p className="text-center font-secondary font-medium text-white">
        {name}
      </p>
    </div>
  );
};
