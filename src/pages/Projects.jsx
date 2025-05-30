import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  const projects = [
    {
      title: "💼 ASCEND AI – Smarter Career Guidance",
      description: "ASCEND AI is an intelligent career guidance system that leverages AI to predict salaries based on educational qualifications and work experience. It also assists users in selecting optimal job roles aligned with their background and goals—empowering better career decisions across education, business, and sustainability domains.",
      techStack: ["Python", "OpenAI API", "Flask", "React.js"],
      features: [
        "AI-powered career prediction based on education and experience",
        "Smart job role recommendations tailored to individual profiles",
        "NLP-driven chatbot for real-time career assistance",
        "Custom AI models built for education, recruitment, and workforce planning"

      ]
    },
      {
      title: "🌐AppWorkSolutions: Custom Web & Mobile Solutions for Modern Businesses",
      description: "A professional-grade website built for a digital solutions company offering custom websites, web applications, mobile apps, and IT consulting. The platform showcases services through a clean UI and seamless UX, built with modern web technologies.",
      techStack: ["Vite", "TypeScript", "React", "shadcn/ui", "Tailwind CSS"],
      features: [
        "Responsive custom websites and scalable web applications",
        "Cross-platform mobile app development using React Native and Flutter",
        "Elegant UI/UX design with interactive prototyping",
        "Secure e-commerce integrations with payment and inventory systems",
        "IT consulting, code review, and performance optimization"
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
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white mb-6">My Projects</h2>
      <p className="text-gray-600 dark:text-gray-400 mb-6 text-sm sm:text-base">
        Here are some of my best projects that showcase my expertise in AI, Web Development, and Software Engineering.
      </p>

      <div className="space-y-6">
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;