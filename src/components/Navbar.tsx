import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="dark:bg-gray-900 py-3">
    
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        
        <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

          <li>
            <a href="about" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 transition ease-in-out">
              Films
            </a>
          </li>


          <li>
            <a href="about" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 transition ease-in-out">
              About
            </a>
          </li>

          <li>
            <a href="#" className="block py-2 pl-3 pr-4 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-300 md:p-0 transition ease-in-out">
              Contact
            </a>
          </li>
            
        </ul>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <a href="/" className="flex items-center">
            <span className="text-xl font-semibold whitespace-nowrap md:hover:text-blue-300 transition ease-in-out font">
              Rosemond Films
            </span>
          </a>
        </div>
      </div>
    
    </nav>
  );
};

export default Navbar;
