import React from "react";

export const OrganizationCard = (props) => {
  const { date, position, name, logo, link } = props.organization;
  return (
    <div className="my-4 w-full hover:shadow-orange-700 xl:w-1/2 ">
      <div className="m-4 h-full rounded-lg bg-slate-900/40 px-8 py-6 ">
        <div className="flex h-full flex-col justify-between sm:flex-row sm:space-x-8">
          <div className="flex h-full flex-col sm:flex-row sm:space-x-8">
            <img
              className="mx-auto my-auto h-24 w-24 rounded-full bg-white object-contain sm:mx-0"
              src={logo}
              alt={name}
            />
            <div className="my-auto">
              <h3 className="text-center font-primary text-2xl font-bold text-orange-600 sm:text-left">
                {name}
              </h3>
              <h4 className="text-center font-secondary text-lg font-medium text-gray-300 sm:text-left">
                {position}
              </h4>
              <p className="text-md text-center font-secondary font-medium text-gray-400 sm:text-left">
                {date}
              </p>
            </div>
          </div>
          <div className="">
            <a
              href={link}
              target="_blank"
              rel="noreferrer"
              className="text-md text-center font-secondary font-medium text-gray-400 sm:text-left"
            >
              <button className="mx-auto mt-8 flex w-auto rounded border border-orange-500 bg-transparent px-6 py-4 text-center font-secondary font-semibold text-orange-500 transition duration-500 ease-in-out hover:border-transparent hover:bg-orange-500 hover:text-white">
                Visit Website
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
