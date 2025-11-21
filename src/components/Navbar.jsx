import React, { useState } from 'react';
import { FiSun, FiMoon, FiMenu, FiX } from 'react-icons/fi';

const Navbar = ({ theme, handleThemeSwitch }) => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { href: '#about', title: 'About' },
    { href: '#skills', title: 'Skills' },
    { href: '#projects', title: 'Projects' },
    { href: '#contact', title: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-offWhite/90 dark:bg-[#020617]/90 backdrop-blur-md shadow-sm transition-all duration-300 border-b border-gray-200/50 dark:border-slate-800/50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        <a href="/" className="text-2xl font-bold text-darkBlue dark:text-offWhite font-heading group transition-transform duration-300 hover:scale-105">
          Khairun<span className="text-darkRed group-hover:animate-pulse">nisa</span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.href} 
              href={link.href} 
              className="relative group text-darkBlue dark:text-offWhite font-body font-medium transition-colors duration-300 hover:text-darkRed dark:hover:text-red-400"
            >
              {link.title}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-darkRed dark:bg-red-400 transition-all duration-300 group-hover:w-full"></span>
            </a>
          ))}

          <button 
            onClick={handleThemeSwitch} 
            className="relative p-2 rounded-full text-darkBlue dark:text-offWhite bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition-all duration-300 transform hover:rotate-12 shadow-sm hover:shadow-md active:scale-90"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? <FiSun className="text-xl" /> : <FiMoon className="text-xl" />}
          </button>
        </div>

        <div className="md:hidden flex items-center gap-4">
           <button 
             onClick={handleThemeSwitch} 
             className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 text-darkBlue dark:text-offWhite active:scale-95 transition-transform"
           >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button onClick={() => setIsOpen(!isOpen)} className="text-2xl text-darkBlue dark:text-offWhite p-1">
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-offWhite dark:bg-slate-900 shadow-lg border-t dark:border-slate-800 animate-fade-in-down">
          <div className="flex flex-col items-center py-4 font-body space-y-2">
            {navLinks.map((link) => (
              <a 
                key={link.href} 
                href={link.href} 
                className="py-3 w-[90%] text-center rounded-lg hover:bg-gray-100 dark:hover:bg-slate-800 hover:text-darkRed dark:hover:text-red-400 transition-all duration-300 text-darkBlue dark:text-offWhite"
                onClick={() => setIsOpen(false)}
              >
                {link.title}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;