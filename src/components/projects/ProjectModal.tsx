import { createPortal } from 'react-dom';
import type { Project } from '../../data/projects';
import { X } from 'lucide-react';

type Props = {
  project: Project;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: Props) => {
  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative bg-gray-900 max-w-3xl w-full rounded-xl p-8 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        <h2 className="text-3xl font-bold mb-4 text-white">
          {project.title}
        </h2>

        <p className="text-gray-300 mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 text-cyan-400"
            >
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:underline font-medium"
            >
              View on GitHub →
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;
