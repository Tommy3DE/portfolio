import React, { useState } from "react";
import { AiOutlineCode } from "react-icons/ai";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav((prevstate) => !prevstate);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
      <div>
        <AiOutlineCode className="h-[80px] w-[80px]" />
      </div>
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li className="px-4 cursor-pointer">
            <Link to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="about" smooth={true} duration={500}>
              O mnie
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="skills" smooth={true} duration={500}>
              Technologie
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="work" smooth={true} duration={500}>
              Projekty
            </Link>
          </li>
          <li className="px-4 cursor-pointer">
            <Link to="kontakt" smooth={true} duration={500}>
              Kontakt
            </Link>
          </li>
        </ul>
      </div>
      <div className="md:hidden z-10" onClick={handleClick}>
        {nav ? <FaTimes /> : <FaBars />}
      </div>
      <ul
        className={
          nav
            ? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">
            <Link to="home" smooth={true} duration={500} onClick={handleClick}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="about" smooth={true} duration={500} onClick={handleClick}>
              O mnie
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="skills" smooth={true} duration={500} onClick={handleClick}>
              Technologie
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="work" smooth={true} duration={500} onClick={handleClick}>
              Projekty
            </Link>
          </li>
          <li className="py-6 text-4xl">
            <Link to="kontakt" smooth={true} duration={500} onClick={handleClick}>
              Kontakt
            </Link>
          </li>
      </ul>
    </div>
  );
};

export default Navbar;
