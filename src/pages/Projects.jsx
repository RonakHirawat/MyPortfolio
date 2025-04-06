import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "🚀 ASCEND AI - AI-Powered Efficiency",
      description: "ASCEND AI is an intelligent automation system designed to enhance workflow efficiency using cutting-edge AI algorithms. It provides predictive analytics, process automation, and real-time insights for businesses, education, and sustainability initiatives.",
      techStack: ["Python", "TensorFlow", "OpenAI API", "Flask", "React.js"],
      features: [
        "AI-powered automation to optimize tasks",
        "Predictive analytics for smarter decision-making",
        "NLP-driven chatbot for seamless interactions",
        "Custom AI models for business and education sectors"
      ]
    },
    {
      title: "⚡ Electricity Billing System",
      description: "A Java-based application designed to generate, manage, and store electricity bills efficiently. The system automates the billing process, tracks customer details, and ensures seamless data storage.",
      techStack: ["Java", "Java Swing", "JDBC", "ActionListener"],
      features: [
        "Customer data storage using MySQL",
        "Automated bill generation based on usage",
        "Interactive Java Swing UI for user-friendly navigation",
        "ActionListener-based event handling for smooth operation"
      ]
    }
  ];

  return (
    <div className="max-w-4xl mx-auto">
      <h2 className="text-3xl font-bold text-gray-800 dark:text-white mb-8">My Projects</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-8">
        Here are some of my best projects that showcase my expertise in AI, Web Development, and Software Engineering.
      </p>
      
      <div className="space-y-8">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;