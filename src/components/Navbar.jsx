import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoIosArrowDown } from "react-icons/io";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }; 

  const [isServiceOpen, setIsServiceOpen] = useState(false);

  const serviceMenu = () => {
    setIsServiceOpen(!isServiceOpen);
  };

  return (
    <nav className="w-full fixed top-0  bg-white h-[100px]  z-10 py-5 lg:px-40 px-5">
      <div className="w-full flex items-center justify-between ">
        
        <Link to="/">
        <img src="/trucklogo1.png" className="w-[200px] mr-[20px] " alt="" />
        </Link>

        <div className="hidden md:flex space-x-10 text-black font-semibold items-center">
          <Link className="hover:text-primaryColors transition-all ease-out duration-300 hover:scale-110" to="/">Home</Link>
          <Link className="hover:text-primaryColors transition-all ease-out duration-300 hover:scale-110" to="/about-us">About us</Link>
          <Link className="hover:text-primaryColors transition-all ease-out duration-300 hover:scale-110" to="/contact-us">Contact Us</Link>

          <Link className="hover:text-primaryColors transition-all ease-out duration-300 hover:scale-110" to="/services" onMouseOver={() => serviceMenu()}>
            Services
          </Link>
        </div>

        <button onClick={() => handleMenu()} className="md:hidden">
          {isMenuOpen ? (
            <FaTimes className="text-2xl" />
          ) : (
            <FaBars className="text-2xl" />
          )}
        </button>
      </div>

      <div
        className={`md:hidden absolute w-screen transition-transform transform duration-500 ease-in-out  flex flex-col right-[20px]  left-0 bg-primaryColors text-white p-10  space-y-10 ${
          isMenuOpen ? 'translate-y-5' : "-translate-y-[500px]"
        } `}
      >
        <Link to="/">Home</Link>
        <Link to="/about-us">About us</Link>
        <Link to="/contact-us">Contact Us</Link>

        <Link to="/services">Services </Link>
      </div>

      
    </nav>
  );
};

export default Navbar;
