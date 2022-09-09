import React, { useState } from "react";
import { navLinks } from "../constants";
import { UCL_logo } from "../assets";
import { BsList, BsXLg } from "react-icons/bs";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="navbar flex w-full items-center justify-between py-4 px-2 pr-20">
      <img src={UCL_logo} alt="UCL" className="bg-logo-gradient w-1/5"></img>
      <ul className="z-[9] hidden flex-1 list-none items-center justify-end  pt-6 sm:flex">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`cursor-pointer font-poppins text-sm font-normal ${
              index === navLinks.length - 1 ? "mr-0" : "mr-10"
            } text-white`}
          >
            {nav.id === "/" ? (
              <Link to={`${nav.id}`}>{nav.title}</Link>
            ) : (
              <HashLink to={`/#${nav.id}`}>{nav.title}</HashLink>
            )}
          </li>
        ))}
      </ul>

      <div className="flex flex-1 items-center justify-end sm:hidden">
        {toggle ? (
          <button
            className="h-6 w-6 object-contain"
            onClick={() => setToggle((prev) => !prev)}
          >
            <BsXLg className="fill-white" />
          </button>
        ) : (
          <button
            className="h-6 w-6 object-contain"
            onClick={() => setToggle((prev) => !prev)}
          >
            <BsList className="fill-white" />
          </button>
        )}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-black-gradient sidebar absolute top-16 right-0 mx-2 my-2 min-w-[140px] rounded-xl p-4`}
        >
          <ul className="flex flex-1 list-none flex-col items-center justify-end">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`cursor-pointer font-poppins text-sm font-normal ${
                  index === navLinks.length - 1 ? "mr-0" : "mb-4"
                } text-white`}
              >
                {nav.id === "/" ? (
                  <Link to={`${nav.id}`}> {nav.title}</Link>
                ) : (
                  <a href={`#${nav.id}`}>{nav.title}</a>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
