'use client'

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dark:bg-slate-925 py-3 pb-5">
      <div className="flex flex-wrap items-center justify-between mx-auto px-3 max-w-screen-2xl">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="flex items-center px-3 py-2 border 
            rounded hover:border-white">
              <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-6z" />
              </svg>
            </button>
          </div>
          <a href="/" className="text-xl font-semibold md:hover:text-indigo-400 transition ease-in-out">
            Rosemond Films
          </a>
        </div>

        <div className={`fixed top-0 left-0 w-full h-full bg-slate-925 z-10 transform transition duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          
          <ul className={`font-medium flex flex-col items-center justify-center space-y-8 pt-10 sm:pt-0`}>
            <li>
              <a href="about" onClick={toggleMenu} className='text-white text-lg hover:bg-transparent hover:text-indigo-400 md:p-0 transition ease-in-out'>
                Films
              </a>
            </li>

            <li>
              <a href="about" onClick={toggleMenu} className='text-white text-lg hover:bg-transparent hover:text-indigo-400 md:p-0 transition ease-in-out'>
                About
              </a>
            </li>

            <li>
              <a href="contact" onClick={toggleMenu} className='text-white text-lg hover:bg-transparent hover:text-indigo-400 md:p-0 transition ease-in-out'>
                Contact
              </a>
            </li>

            <li>
              <button onClick={toggleMenu} className='text-white text-lg hover:bg-transparent hover:text-indigo-400 md:p-0 transition ease-in-out'>
                Close
              </button>
            </li>
          </ul>

        </div>

        <ul className="hidden sm:flex flex-col mt-4 sm:flex-row sm:space-x-8 sm:mt-0 sm:border-0">
          <li>
            <a href="films" className='text-white text-lg hover:bg-transparent 
            hover:text-indigo-400 md:p-0 transition ease-in-out'>
              Films
            </a>
          </li>

          <li>
            <a href="about" className='text-white text-lg hover:bg-transparent 
            hover:text-indigo-400 md:p-0 transition ease-in-out'>
              About
            </a>
          </li>

          <li>
            <a href="contact" className='text-white text-lg hover:bg-transparent 
            hover:text-indigo-400 md:p-0 transition ease-in-out'>
              Contact
            </a>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
