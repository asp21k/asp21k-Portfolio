import { NavLink, useLocation } from "react-router-dom";
import React from "react";
import logo from "../../images/signature.png";
import { useState } from "react";
import telephoneSvg from "../../images/telephone.svg";

// SVG components for bars and times icons
const BarsIcon = () => (
  <svg
    className="h-6 w-6"
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
    className="h-6 w-6"
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
    <div className="sticky top-0 z-50 flex flex-wrap items-center justify-between bg-slate-950  bg-opacity-80 px-1 py-3 backdrop-blur backdrop-filter xl:mx-auto xl:flex-nowrap xl:px-7">
      <NavLink to="/">
        <img
          src={logo}
          className="ml-3 max-h-12 scale-[125%] transform transition duration-500 ease-in-out hover:scale-150 sm:max-h-16 md:max-h-20 xl:max-h-16"
          alt="Logo"
        />
      </NavLink>
      <button
        className="inline-flex h-10 w-10 justify-center rounded py-2 align-middle text-white hover:bg-slate-800 xl:hidden"
        onClick={handleClick}
      >
        {clicked ? <TimesIcon /> : <BarsIcon />}
      </button>

      <div
        className={
          clicked
            ? "w-full transition-transform duration-500  ease-in-out xl:flex xl:w-auto"
            : "hidden w-full transition-transform  duration-500 ease-in-out xl:flex xl:w-auto"
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
                  ? `mt-6 px-5 text-center font-primary text-lg font-medium text-orange-500 xl:my-auto`
                  : `mt-6 px-5 text-center font-primary text-base font-medium text-white transition duration-500 ease-in-out hover:text-orange-500 xl:my-auto`
              }
            >
              {item.title}
            </NavLink>
          ))}

          <NavLink to="/contact" onClick={handleClick}>
            <button className="mx-auto mb-4 mt-6 flex w-auto flex-row rounded bg-orange-500 px-4 py-3 text-center font-primary text-base font-medium text-white transition duration-500 ease-in-out hover:bg-orange-700 xl:mb-0 xl:mt-0">
              Contact Me{" "}
              <img
                src={telephoneSvg}
                className=" mx-2 mt-[0.12rem] h-5 w-5"
                alt="Telephone"
              />
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
