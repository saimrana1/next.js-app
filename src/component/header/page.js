import { useState } from "react";
import {
  FaLinkedin,
  FaFacebookSquare,
  FaInstagram,
  FaTwitter,
} from "react-icons/fa";

const Navbar = ({ activeSection, onNavigate }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white dark:bg-gray-900 fixed w-full z-50 top-0 start-0 border-b border-gray-200 dark:border-gray-600">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a
          href="#home"
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            Portfolio
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <div className="flex space-x-4 sm:mt-3 mt-3 lg:mt-0 md:mt-0">
            <a
              href="https://linkedin.com"
              className="text-gray-500 hover:text-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://facebook.com"
              className="text-gray-500 hover:text-white"
            >
              <FaFacebookSquare />
            </a>
            <a
              href="https://instagram.com"
              className="text-gray-500 hover:text-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://twitter.com"
              className="text-gray-500 hover:text-white"
            >
              <FaTwitter />
            </a>
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-sticky"
            aria-expanded={isMenuOpen}
            onClick={handleToggleMenu}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            {[
              "home",
              "about",
              "resume",
              "services",
              "portfolio",
              "contact",
            ].map((section) => (
              <li key={section}>
                <a
                  href={`#${section}`}
                  onClick={() => {
                    onNavigate(section);
                    setIsMenuOpen(false); 
                  }}
                  className={`block py-2 px-3 ${
                    activeSection === section
                      ? "bg-blue-700 text-white"
                      : "text-gray-900 hover:bg-gray-100"
                  } rounded md:${
                    activeSection === section
                      ? "bg-transparent text-blue-700"
                      : "hover:bg-transparent hover:text-blue-700"
                  } md:p-0 dark:${
                    activeSection === section ? "text-blue-500" : "text-white"
                  } dark:hover:${
                    activeSection === section ? "text-white" : "bg-gray-700"
                  } dark:border-gray-700`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
