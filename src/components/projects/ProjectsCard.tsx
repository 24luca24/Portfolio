import type { Project } from '../../data/projects';

type Props = {
  project: Project;
  onOpen: (project: Project) => void;
};

const ProjectCard = ({ project, onOpen }: Props) => {
  return (
    <button
      onClick={() => {
        console.log('Clicked project:', project);
        onOpen(project);
      }}
      className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400 transition-all duration-300 hover:shadow-lg hover:shadow-cyan-400/20 hover:-translate-y-1 relative"
    >
      {/* Hover overlay indicator */}
      <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-10" />

      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover group-hover:scale-105 transition-transform duration-300"
      />
      
      <div className="p-6 text-left">
        <h3 className="text-xl font-bold mb-2 group-hover:text-cyan-400 transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-400 text-sm line-clamp-2">
          {project.description}
        </p>
        
        {/* Click hint at bottom */}
        <div className="mt-4 text-cyan-400 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Click to learn more →
        </div>
      </div>
    </button>
  );
};

export default ProjectCard;