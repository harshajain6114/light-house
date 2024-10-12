import React, { useState } from "react";
import { FaSun, FaBars } from 'react-icons/fa'; // Importing light mode and hamburger icons
import logo from '../assets/lighthouse.png'; // Update path to the local logo

const Navbar = ({ toggleTheme }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle mobile menu

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen); // Toggle the hamburger menu
  };

  return (
    <nav className="flex justify-between items-center p-4 bg-black"> {/* Reduced padding */}
      {/* Logo Section */}
      <div className="flex items-center space-x-1 ml-2"> {/* Reduced margin */}
        <img
          src={logo}
          alt="Lighthouse Logo"
          className="h-9 w-9" 
        />
        <span className="text-lg font-medium text-white">LIGHTHOUSE</span>
      </div>

      {/* Menu Items (Desktop and Mobile) */}
      <ul className={`flex flex-col lg:flex-row space-y-2 lg:space-y-0 lg:space-x-6 ml-2 ${isMenuOpen ? 'block' : 'hidden'} lg:block`}>
        <li className="text-white text-sm lg:text-lg cursor-pointer relative group"> {/* Adjusted text size */}
          Home
          <span className="block h-1 w-full bg-white absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
        <li className="text-white text-sm lg:text-lg cursor-pointer relative group"> {/* Adjusted text size */}
          Blogs
          <span className="block h-1 w-full bg-white absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
        <li className="text-white text-sm lg:text-lg cursor-pointer relative group"> {/* Adjusted text size */}
          FAQ
          <span className="block h-1 w-full bg-white absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
        <li className="text-white text-sm lg:text-lg cursor-pointer relative group"> {/* Adjusted text size */}
          Documentation
          <span className="block h-1 w-full bg-white absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
        <li className="text-white text-sm lg:text-lg cursor-pointer relative group"> {/* Adjusted text size */}
          Contact Us
          <span className="block h-1 w-full bg-white absolute bottom-0 left-0 scale-x-0 group-hover:scale-x-100 transition-transform duration-300"></span>
        </li>
      </ul>

      {/* Theme Toggle and Login Button */}
      <div className="flex items-center space-x-2 ml-2"> {/* Adjusted spacing */}
        <button onClick={toggleTheme} className="text-white">
          <FaSun className="text-lg" /> {/* Adjusted icon size */}
        </button>
        <button className="flex items-center justify-center w-20 h-8 text-center bg-indigo-600 text-white text-sm font-medium py-1 rounded-sm border border-indigo-600"> {/* Adjusted button size */}
          LOGIN
        </button>

        {/* Hamburger Menu Icon */}
        <button onClick={toggleMenu} className="lg:hidden text-white ml-2">
          <FaBars className="text-2xl" />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
