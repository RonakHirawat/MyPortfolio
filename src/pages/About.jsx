const About = () => {
    return (
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">About Me</h2>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-8">
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Hey there! I'm Ronak Hirawat, a passionate and driven Computer Science Engineering student specializing in Artificial Intelligence and Machine Learning at SRM KTR. Currently in my second year, I thrive at the intersection of tech, creativity, and community.
          </p>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            I'm deeply interested in web development and exploring how machine learning can be used to solve real-world problems—especially in the fields of sustainability, education, and community well-being.
          </p>
          <p className="text-gray-700 dark:text-gray-300">
            I also serve as the Associate Lead of Corporate Domain at the QwikLabs Developer Club, where I get to collaborate with peers and work on exciting initiatives that bridge innovation and impact.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Education</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300">SRM Institute of Science and Technology</h4>
                <p className="text-gray-600 dark:text-gray-400">B.Tech in Computer Science (AI & ML)</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2022 - 2026</p>
              </div>
            </div>
          </div>
          
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-4">Experience</h3>
            <div className="space-y-4">
              <div>
                <h4 className="font-medium text-gray-700 dark:text-gray-300">QwikLabs Developer Club</h4>
                <p className="text-gray-600 dark:text-gray-400">Associate Lead - Corporate Domain</p>
                <p className="text-sm text-gray-500 dark:text-gray-400">2023 - Present</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;