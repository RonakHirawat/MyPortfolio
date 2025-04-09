import { Link } from 'react-router-dom';
import { cn } from '../lib/utils';
import profileImage from '../assets/profile.jpg';
import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect';
const Home = () => {
  const words = [
    { 
      text: "Hi I'm Ronak Hirawat",
      className: "text-indigo-500 dark:text-indigo-400" 
    }
  ];
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-160px)] py-8 px-4 sm:px-6">
      <div className="text-center w-full max-w-3xl">
        {/* Profile Photo Section */}
        <div className="flex justify-center mb-6 sm:mb-8">
          <div className="relative w-28 h-28 sm:w-40 sm:h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-indigo-500 dark:border-indigo-400 shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img 
              src={profileImage}
              alt="Ronak Hirawat"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://via.placeholder.com/200";
              }}
            />
          </div>
        </div>

        <div className="mb-8 sm:mb-12">
          <p className="text-neutral-600 dark:text-neutral-300 text-sm sm:text-base mb-4">
            Welcome to my portfolio
          </p>
          <TypewriterEffectSmooth 
            words={words} 
            className="justify-center"
          />
        </div>
        
        <p className="text-gray-600 dark:text-gray-300 mb-6 sm:mb-8 text-base sm:text-lg leading-relaxed">
          Computer Science Engineering student specializing in AI/ML at SRM KTR. 
          Passionate about web development and machine learning applications.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4">
          <Link 
            to="/projects" 
            className="px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-indigo-600 text-white hover:bg-indigo-700 transition-all duration-300 text-sm sm:text-base"
          >
            View My Work
          </Link>
          <Link 
            to="/about" 
            className="px-4 py-2 sm:px-6 sm:py-3 rounded-xl bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400 border border-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700 transition-all duration-300 text-sm sm:text-base"
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;