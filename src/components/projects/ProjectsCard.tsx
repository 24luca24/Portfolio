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
        onOpen(project)}}
      className="group bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-cyan-400 transition"
    >
      <img
        src={project.image}
        alt={project.title}
        className="h-48 w-full object-cover group-hover:scale-105 transition"
      />

      <div className="p-6 text-left">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm line-clamp-2">
          {project.description}
        </p>
      </div>
    </button>
  );
};

export default ProjectCard;
