import { cn } from '../lib/utils';

const ProjectCard = ({ project }) => {
  return (
    <div className={cn(
      "bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden",
      "transition-transform duration-300 hover:scale-[1.02] hover:shadow-lg"
    )}>
      <div className="p-6">
        <h3 className={cn(
          "text-xl font-bold text-gray-800 dark:text-white mb-2"
        )}>
          {project.title}
        </h3>
        <p className={cn(
          "text-gray-600 dark:text-gray-300 mb-4"
        )}>
          {project.description}
        </p>
        
        <div className="mb-4">
          <h4 className={cn(
            "font-semibold text-gray-700 dark:text-gray-200 mb-1"
          )}>
            Tech Stack:
          </h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, index) => (
              <span 
                key={index} 
                className={cn(
                  "px-2 py-1 text-xs rounded",
                  "bg-indigo-100 dark:bg-indigo-900",
                  "text-indigo-800 dark:text-indigo-100"
                )}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
        
        <div>
          <h4 className={cn(
            "font-semibold text-gray-700 dark:text-gray-200 mb-1"
          )}>
            Key Features:
          </h4>
          <ul className={cn(
            "list-disc list-inside space-y-1",
            "text-gray-600 dark:text-gray-400"
          )}>
            {project.features.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;