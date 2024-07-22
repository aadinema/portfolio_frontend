import React, { useContext, useState } from 'react';
import { MdOutlineLightMode, MdDarkMode } from 'react-icons/md';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { DarkModeContext } from '../darkMode/DarkModeContext';

const Header = () => {
  const { darkMode, toggleDarkMode } = useContext(DarkModeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="text-gray-900 bg-[#C4C4C1] dark:bg-[#111111] dark:text-gray-100 py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="shadow-2xl">
          {/* <span className=" text-[#111111] dark:text-[#C4C4C1] text-5xl font-bold">A</span> */}
        </div>
        <div className="hidden md:flex items-center space-x-4">
          <a href="/" className="hover:text-gray-400">Home</a>
          <a href="/about" className="hover:text-gray-400">About</a>
          <a href="/skills" className="hover:text-gray-400">Skills</a>
          <a href="/projects" className="hover:text-gray-400">Projects</a>
          <a href="/contact" className="hover:text-gray-400">Contact</a>
          <button
            onClick={toggleDarkMode}
            className="ml-4 p-2 bg-gray-100 dark:bg-gray-900 rounded-full"
          >
            {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
          </button>
        </div>
        <div className="md:hidden flex items-center">
          <button
            onClick={toggleMenu}
            className="p-2 bg-gray-100 dark:bg-gray-900 rounded-full"
          >
            {isMenuOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="md:hidden bg-[#C4C4C1] dark:bg-[#111111]">
          <a href="/" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800">Home</a>
          <a href="/about" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800">About</a>
          <a href="/skills" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800">Skills</a>
          <a href="/projects" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800">Projects</a>
          <a href="/contact" className="block px-4 py-2 hover:bg-gray-200 dark:hover:bg-gray-800">Contact</a>
          <button
            onClick={toggleDarkMode}
            className="block w-full px-4 py-2 mt-2 bg-gray-100 dark:bg-gray-900 rounded-full text-center"
          >
            {darkMode ? <MdOutlineLightMode /> : <MdDarkMode />}
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
