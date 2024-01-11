import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import logo from "../../images/signature.png";
import { useState } from "react";
import telephoneSvg from "../../images/telephone.svg";

// SVG components for bars and times icons
const BarsIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M4 6h16M4 12h16m-7 6h7"
    ></path>
  </svg>
);

const TimesIcon = () => (
  <svg
    className="w-6 h-6"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M6 18L18 6M6 6l12 12"
    ></path>
  </svg>
);

export default function NavBar() {
  const [clicked, setClicked] = useState(false);

  const location = useLocation();

  const handleClick = () => {
    setClicked(!clicked);
  };

  const navItems = [
    {
      title: "Home",
      link: "/",
    },
    {
      title: "About Me",
      link: "/about",
    },
    {
      title: "What I Do",
      link: "/work",
    },
    {
      title: "Resume",
      link: "/resume",
    },
  ];

  return (
    <div className="sticky bg-slate-950 bg-opacity-80 z-50 top-0 py-3 backdrop-filter backdrop-blur  xl:mx-auto flex flex-wrap xl:flex-nowrap items-center justify-between px-1 xl:px-7">
      <NavLink to="/">
        <img
          src={logo}
          className="max-h-10 scale-[125%] ml-3 sm:max-h-16 md:max-h-20 xl:max-h-16 transition duration-500 ease-in-out transform hover:scale-105"
          alt="Logo"
        />
      </NavLink>
      <button
        className="text-white inline-flex py-2 hover:bg-slate-800 rounded h-10 w-10 justify-center align-middle xl:hidden"
        onClick={handleClick}
      >
        {clicked ? <TimesIcon /> : <BarsIcon />}
      </button>

      <div
        className={
          clicked
            ? "transition-transform ease-in-out duration-500  w-full xl:w-auto xl:flex"
            : "transition-transform ease-in-out duration-500  hidden w-full xl:w-auto xl:flex"
        }
      >
        <div className="flex flex-col xl:flex xl:flex-row">
          {navItems.map((item, index) => (
            <NavLink
              key={index}
              to={item.link}
              onClick={handleClick}
              className={
                location.pathname === item.link
                  ? `text-orange-500 font-primary font-medium text-lg px-5 text-center mt-6 xl:my-auto`
                  : `text-white font-primary font-medium text-sm px-5 text-center transition duration-500 ease-in-out hover:text-orange-500 mt-6 xl:my-auto`
              }
            >
              {item.title}
            </NavLink>
          ))}

          <NavLink to="/contact" onClick={handleClick}>
            <button className="w-sutol flex flex-row mx-auto bg-orange-500 hover:bg-orange-700 text-white font-medium text-center transition duration-500 ease-in-out py-3 px-4 rounded font-primary text-lg mt-6 mb-4 xl:mt-0 xl:mb-0">
              Contact Me{" "}
              <img
                src={telephoneSvg}
                className=" mx-2 mt-[0.12rem] w-5 h-5"
                alt="Telephone"
              />
             
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
