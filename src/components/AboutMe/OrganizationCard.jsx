import React from "react";

export const OrganizationCard = (props) => {
  const { date, position, name, logo, link } = props.organization;
  return (
    <div className="w-full xl:w-1/2 my-4 hover:shadow-orange-700 ">
      <div className="bg-slate-900/40 rounded-lg px-8 py-6 m-4 h-full ">
        <div className="flex flex-col justify-between sm:flex-row sm:space-x-8 h-full">
        <div className="flex flex-col sm:flex-row sm:space-x-8 h-full">
          <img
            className="rounded-full h-24 w-24 bg-white my-auto mx-auto sm:mx-0 object-contain"
            src={logo}
            alt={name}
          />
          <div className="my-auto">
            <h3 className="text-orange-600 text-center sm:text-left font-primary font-bold text-2xl">
              {name}
            </h3>
            <h4 className="text-gray-300 text-center sm:text-left font-secondary font-medium text-lg">
              {position}
            </h4>
            <p className="text-gray-400 text-center sm:text-left font-secondary font-medium text-md">
              {date}
            </p>

            
          </div>
          </div>
          <div className="">
          <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-gray-400 text-center sm:text-left font-secondary font-medium text-md"
            >
              <button className="flex mt-8 w-auto mx-auto text-center font-secondary bg-transparent transition duration-500 ease-in-out hover:bg-orange-500 text-orange-500 font-semibold hover:text-white py-4 px-6 border border-orange-500 hover:border-transparent rounded">
                Visit Website
              </button>
            </a>
          </div>
          </div>
      </div>
    </div>
  );
};
