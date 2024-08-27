import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-gradient-to-r from-purple-600 via-pink-500 to-red-400 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center p-6">
        <h1 className="text-3xl font-bold text-white hover:text-yellow-300 transition-all duration-300 tracking-wider">
          My Portfolio
        </h1>
        <nav className="flex items-center space-x-8">
          <ul className="flex space-x-8 text-lg">
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 underline"
                    : "text-white hover:text-yellow-300 transition-all duration-300"
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 underline"
                    : "text-white hover:text-yellow-300 transition-all duration-300"
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "text-yellow-300 underline"
                    : "text-white hover:text-yellow-300 transition-all duration-300"
                }
              >
                Projects
              </NavLink>
            </li>
          </ul>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive
                ? "bg-yellow-300 text-gray-900 px-5 py-2 rounded-full text-lg font-semibold tracking-wider"
                : "bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-5 py-2 rounded-full text-lg font-semibold tracking-wider hover:from-orange-500 hover:to-yellow-400 transition-all duration-300"
            }
          >
            Contact Me
          </NavLink>
        </nav>
      </div>
    </header>
  );
};

export default Header;
