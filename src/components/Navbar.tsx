import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="dark:bg-slate-925 py-3">
    
      <div className="flex flex-wrap items-center justify-between mx-auto p-3 max-w-screen-2xl">
        
        <ul className="font-medium flex flex-col md:p-0 mt-4 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-slate-925 md:dark:bg-slate-925 dark:border-slate-925">

          <li>
            <a href="about" className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-400 md:p-0 transition ease-in-out">
              Films
            </a>
          </li>


          <li>
            <a href="about" className="block py-2 pl-3 pr-4 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-indigo-400 md:p-0 transition ease-in-out">
              About
            </a>
          </li>

          <li>
            <a href="contact" className="block py-2 pl-3 pr-4 hover:bg-gray-100 
            md:hover:bg-transparent md:border-0 md:hover:text-indigo-400 md:p-0 transition ease-in-out">
              Contact
            </a>
          </li>
            
        </ul>

        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <a href="/" className="flex items-center">
            <span className="text-xl font-semibold md:hover:text-indigo-400 transition 
            ease-in-out">
              Rosemond Films
            </span>
          </a>
        </div>
      </div>
    
    </nav>
  );
};

export default Navbar;
