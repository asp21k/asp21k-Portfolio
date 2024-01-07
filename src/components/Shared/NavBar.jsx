import { NavLink, useLocation } from "react-router-dom";

import React from "react";
import logo from "../../images/signature.png";
import { useState } from "react";

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
    <div className="sticky bg-slate-950 bg-opacity-80 z-10 top-0 py-4 backdrop-filter backdrop-blur mx-auto flex flex-wrap xl:flex-nowrap items-center justify-between px-8 sm:px-6">
      <NavLink to="/">
        <img
          src={logo}
          className="max-h-12 scale-125 ml-4 sm:max-h-16 md:max-h-20 xl:max-h-24 transition duration-500 ease-in-out transform hover:scale-105"
          alt="Logo"
        />
      </NavLink>
      <button
        className="text-white inline-flex p-3 hover:bg-gray-800 rounded h-10 w-10 justify-center align-middle xl:hidden"
        onClick={handleClick}
      >
        <i className={clicked ? "fas fa-times fa-lg" : "fas fa-bars fa-lg"}></i>
      </button>

      <div
        className={
          clicked
            ? "transition ease-in-out duration-500 transform w-full xl:w-auto xl:flex"
            : "transition ease-in-out duration-500 transform hidden w-full xl:w-auto xl:flex"
        }
      >
        <div className="flex flex-col xl:flex xl:flex-row">
          {navItems.map((item, index) => {
            return (
              <NavLink
                key={index}
                to={item.link}
                onClick={handleClick}
                className={
                  location.pathname === item.link
                    ? `text-orange-500 font-primary font-medium text-lg px-5 text-center mt-6 xl:my-auto`
                    : `text-white font-primary font-medium text-lg px-5 text-center transition duration-500 ease-in-out hover:text-orange-500 mt-6 xl:my-auto`
                }
              >
                {item.title}
              </NavLink>
            );
          })}

          <NavLink to="/contact" onClick={handleClick}>
            <button className="w-full bg-orange-500 hover:bg-orange-700 text-white font-medium text-center transition duration-500 ease-in-out py-3 px-4 rounded font-primary text-lg mt-6 mb-4 xl:mt-0 xl:mb-0">
              Contact Me{" "}
              <span className="font-thin" role="img" aria-label="emoji">
                ☎️
              </span>
            </button>
          </NavLink>
        </div>
      </div>
    </div>
  );
}
