import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50">
      <nav className="container mx-auto px-4 sm:px-6 py-4">
        <div className="flex justify-between items-center">
          <NavLink 
            to="/" 
            className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300"
          >
            Ronak Hirawat
          </NavLink>
          
          {/* Mobile menu button */}
          <button 
            className="md:hidden text-gray-700 dark:text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {isMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {['/', '/About', '/Projects', '/Skills', '/Certifications'].map((path) => (
              <NavLink
                key={path}
                to={path}
                className={({ isActive }) => cn(
                  "text-gray-700 dark:text-gray-300",
                  "hover:text-indigo-600 dark:hover:text-indigo-400",
                  isActive ? "text-indigo-600 dark:text-indigo-400 font-medium" : ""
                )}
              >
                {path === '/' ? 'Home' : path.slice(1)}
              </NavLink>
            ))}
          </div>
        </div>
        
        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 space-y-2 pb-2">
            {['/', '/About', '/Projects', '/Skills', '/Certifications'].map((path) => (
              <NavLink
                key={path}
                to={path}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) => cn(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  isActive 
                    ? "bg-indigo-50 dark:bg-gray-700 text-indigo-600 dark:text-indigo-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
                )}
              >
                {path === '/' ? 'Home' : path.slice(1)}
              </NavLink>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;