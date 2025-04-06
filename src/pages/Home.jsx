import { Link } from 'react-router-dom';
import { TypewriterEffectSmooth } from '../components/ui/typewriter-effect';
import { cn } from '../lib/utils';

const Home = () => {
  const words = [
    // { text: "Hi," },
    // { text: "I'm" },
    { 
      text: "Hi I'm Ronak Hirawat",
      className: "text-indigo-600 dark:text-indigo-400" 
    },
    // { 
    //   text: "Hirawat",
    //   className: "text-indigo-600 dark:text-indigo-400" 
    // }
  ];

  return (
    <div className={cn(
      "flex flex-col items-center justify-center",
      "min-h-[calc(100vh-160px)] py-12 px-4"
    )}>
      <div className="text-center max-w-3xl w-full">
        {/* Profile Photo Section */}
        <div className="flex justify-center mb-8">
          <div className={cn(
            "relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48",
            "rounded-full overflow-hidden border-4",
            "border-indigo-500 dark:border-indigo-400",
            "shadow-lg hover:shadow-xl transition-shadow duration-300"
          )}>
            {/* Replace with your actual image path */}
            <img 
              src="profile.jpg" 
              alt="Ronak Hirawat"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.target.onerror = null; 
                e.target.src = "https://via.placeholder.com/200"; // Fallback image
              }}
            />
          </div>
        </div>

        <div className="mb-12">
          <p className={cn(
            "text-neutral-600 dark:text-neutral-300",
            "text-sm sm:text-base mb-4"
          )}>
            Welcome to my portfolio
          </p>
          <TypewriterEffectSmooth 
            words={words} 
            className="justify-center"
          />
        </div>
        
        <p className={cn(
          "text-gray-600 dark:text-gray-300 mb-8",
          "text-lg sm:text-xl leading-relaxed"
        )}>
          Computer Science Engineering student specializing in AI/ML at SRM KTR. 
          Passionate about web development and machine learning applications.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link 
            to="/projects" 
            className={cn(
              "px-6 py-3 rounded-xl text-center",
              "bg-indigo-600 text-white hover:bg-indigo-700",
              "transition-all duration-300",
              "text-sm sm:text-base"
            )}
          >
            View My Work
          </Link>
          <Link 
            to="/about" 
            className={cn(
              "px-6 py-3 rounded-xl text-center",
              "bg-white dark:bg-gray-800 text-indigo-600 dark:text-indigo-400",
              "border border-indigo-600 hover:bg-indigo-50 dark:hover:bg-gray-700",
              "transition-all duration-300",
              "text-sm sm:text-base"
            )}
          >
            About Me
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
