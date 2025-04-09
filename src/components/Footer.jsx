const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-4 sm:py-6">
      <div className="container mx-auto px-4 sm:px-6 text-center">
        <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">
          © {new Date().getFullYear()} Ronak Hirawat. All rights reserved.
        </p>
        <div className="flex justify-center space-x-3 sm:space-x-4 mt-2">
          <a href="https://www.linkedin.com/in/ronak-hirawat-2296672b5/" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm sm:text-base">
            LinkedIn
          </a>
          <a href="https://github.com/RonakHirawat" className="text-gray-500 hover:text-indigo-600 dark:hover:text-indigo-400 text-sm sm:text-base">
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;