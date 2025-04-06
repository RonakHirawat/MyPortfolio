import { NavLink } from 'react-router-dom';
import { cn } from '../lib/utils';

const Header = () => {
  return (
    <header className={cn("bg-white dark:bg-gray-800 shadow-sm sticky top-0 z-50")}>
      <nav className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <NavLink 
            to="/" 
            className={cn(
              "text-2xl font-bold",
              "text-indigo-600 dark:text-indigo-400",
              "hover:text-indigo-700 dark:hover:text-indigo-300"
            )}
          >
            Ronak Hirawat
          </NavLink>
          <div className="flex space-x-6">
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
      </nav>
    </header>
  );
};

export default Header;