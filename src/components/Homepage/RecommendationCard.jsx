import React from "react";

export const RecommendationCard = (props) => {
  const { name, designation, quote, image, linkedin } = props.recommendation;
  return (
    <div className="w-full mx-auto rounded-lg bg-gray-800 shadow-lg px-5 pt-5 pb-10 transition ease-in-out hover:scale-105 transform -translate-y-2">
      <div className="w-full pt-1 pb-5">
        <div className="overflow-hidden rounded-full border-4 border-full transition duration-300 ease-in-out transform hover:scale-110 border-yellow-400 w-24 h-24 -mt-16 mx-auto shadow-lg">
          <a href={linkedin ? linkedin : null} target="_blank" rel="noreferrer">
            <img src={image} alt={name} />
          </a>
        </div>
      </div>
      <div className="w-full">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="relative top-0 left-0 transform translate-x-2 translate-y-6 h-12 w-12 fill-current text-white opacity-10"
        >
          <path d="M42.991,9.131L42.991,9.131c0,0.459-0.28,0.882-0.712,1.036C38.619,11.472,33,16.271,33,24	c0,1.328,0.227,2,0.74,2c0.601,0,1.554-1,4.26-1c3.289,0,7,2.622,7,7.059C45,35.942,42.088,40,37,40c-4.135,0-10-3.083-10-12.093	c0-12.478,9.397-17.774,14.432-19.811C42.175,7.796,42.991,8.329,42.991,9.131z"></path>
          <path d="M18.991,9.131L18.991,9.131c0,0.459-0.28,0.882-0.712,1.036C14.619,11.472,9,16.271,9,24	c0,1.328,0.227,2,0.74,2c0.601,0,1.554-1,4.26-1c3.289,0,7,2.622,7,7.059C21,35.942,18.088,40,13,40C8.865,40,3,36.917,3,27.907	c0-12.478,9.397-17.774,14.432-19.811C18.175,7.796,18.991,8.329,18.991,9.131z"></path>
        </svg>
        <p className="text-md font-secondary text-gray-300 text-center mx-8 sm:mx-16 px-5">
          {quote}
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 48 48"
          className="relative transform -translate-x-full -translate-y-6 h-12 left-full  fill-current text-white opacity-10"
        >
          <path d="M5.009,38.88L5.009,38.88c0-0.459,0.28-0.882,0.712-1.036C9.381,36.539,15,31.74,15,24.011	c0-1.328-0.227-2-0.74-2c-0.601,0-1.554,1-4.26,1c-3.289,0-7-2.622-7-7.059c0-3.883,2.912-7.941,8-7.941c4.135,0,10,3.083,10,12.093	c0,12.478-9.397,17.774-14.432,19.811C5.825,40.215,5.009,39.682,5.009,38.88z"></path>
          <path d="M29.009,38.88L29.009,38.88c0-0.459,0.28-0.882,0.712-1.036C33.381,36.539,39,31.74,39,24.011	c0-1.328-0.227-2-0.74-2c-0.601,0-1.554,1-4.26,1c-3.289,0-7-2.622-7-7.059c0-3.883,2.912-7.941,8-7.941c4.135,0,10,3.083,10,12.093	c0,12.478-9.397,17.774-14.432,19.811C29.825,40.215,29.009,39.682,29.009,38.88z"></path>
        </svg>
      </div>
      <div className="w-full">
        <p className="text-xl font-primary text-blue-500 font-bold text-center">
          {name}
        </p>
        <p className="text-md font-secondary text-gray-300 text-center">
          {designation}
        </p>
      </div>
    </div>
  );
};
