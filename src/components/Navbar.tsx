'use client'

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="dark:bg-slate-925 py-3 font-jost text-white z-30">
      <div className="flex flex-wrap items-center justify-between mx-auto px-3 max-w-screen-2xl">
        <div className="flex items-center justify-between w-full md:w-auto">
          <div className="block md:hidden">
            <button onClick={toggleMenu} className="flex items-center px-3 py-2hover:border-white">
              <svg className="fill-current h-5 w-5" viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-6z" />
              </svg>
            </button>
          </div>
          <a href="/" className="text-2xl md:hover:text-indigo-400 transition ease-in-out">
            Rosemond Films
          </a>
        </div>

        {/* Mobile view menu */}
        <div className={`fixed lg:hidden top-0 left-0 w-full h-full bg-slate-925 z-30 transform transition duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          
          <ul className={`font-medium flex flex-col items-center justify-center space-y-8 pt-10 sm:pt-0`}>
            <li>
              <Link href={"#films"} legacyBehavior>
                <a onClick={toggleMenu} className='text-white text-xl hover:bg-transparent 
                hover:text-indigo-400 md:p-0 transition ease-in-out'>
                  Films
                </a>
              </Link>
            </li>

            <li>
              <Link href={"#about"} legacyBehavior>
                <a onClick={toggleMenu} className='text-white text-xl hover:bg-transparent 
              hover:text-indigo-400 md:p-0 transition ease-in-out'>
                  About
                </a>
              </Link>
            </li>

            <li>
              <Link href={"/contact"} legacyBehavior>
                <a onClick={toggleMenu} className='text-white text-xl hover:bg-transparent 
              hover:text-indigo-400 md:p-0 transition ease-in-out'>
                  Contact
                </a>
              </Link>
            </li>

            <li>
              <button onClick={toggleMenu} className='text-white text-xl hover:bg-transparent hover:text-indigo-400 md:p-0 transition ease-in-out'>
                X
              </button>
            </li>

          </ul>

        </div>

        {/* Desktop view menu */}
        <ul className="hidden md:flex flex-col mt-4 md:flex-row md:space-x-8 sm:mt-0 sm:border-0">
          <li>
            <Link href={"#films"} legacyBehavior>
              <a href="films" className='text-white text-xl hover:bg-transparent 
              hover:text-indigo-400 md:p-0 transition ease-in-out'>
                Films
              </a>
            </Link>
          </li>

          <li>
            <Link href={"#about"} legacyBehavior scroll={false}>
              <a className='text-white text-xl hover:bg-transparent 
              hover:text-indigo-400 md:p-0 transition ease-in-out'>
                About
              </a>
            </Link>
          </li>

          <li>
            <Link href={"/contact"} legacyBehavior>
              <a className='text-white text-xl hover:bg-transparent 
              hover:text-indigo-400 md:p-0 transition ease-in-out'>
                Contact
              </a>
            </Link>
          </li>

        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
