import React from "react";

const Spinner = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="animate-spin">
        <i className="fas fa-spinner text-6xl text-blue-500"></i>
      </div>
    </div>
  );
};

export { Spinner };
