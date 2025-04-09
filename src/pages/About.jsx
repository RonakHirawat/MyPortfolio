const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6">About Me</h2>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6 mb-6">
        <p className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
          Hey there! I'm Ronak Hirawat, a passionate and driven Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at SRM KTR. Currently in my second year, I thrive at the intersection of tech, creativity, and community.
        </p>
        <p className="text-gray-700 dark:text-gray-300 mb-3 sm:mb-4 text-sm sm:text-base">
          I'm deeply interested in web development and exploring how machine learning can be used to solve real-world problems—especially in the fields of sustainability, education, and community well-being.
        </p>
        <p className="text-gray-700 dark:text-gray-300 text-sm sm:text-base">
          I also serve as the Associate Lead of Corporate Domain at the QwikLabs Developer Club, where I get to collaborate with peers and work on exciting initiatives that bridge innovation and impact.
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3">Education</h3>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base">SRM Institute of Science and Technology</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">B.Tech in Computer Science (AI & ML)</p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">2022 - 2026</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 sm:p-6">
          <h3 className="text-lg sm:text-xl font-semibold text-gray-800 dark:text-white mb-3">Experience</h3>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <h4 className="font-medium text-gray-700 dark:text-gray-300 text-sm sm:text-base">QwikLabs Developer Club</h4>
              <p className="text-gray-600 dark:text-gray-400 text-sm sm:text-base">Associate Lead - Corporate Domain</p>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">2023 - Present</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;