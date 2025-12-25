import { createPortal } from 'react-dom';
import type { Project } from '../../data/projects';
import { X, Github } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

type Props = {
  project: Project;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: Props) => {
  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative bg-gradient-to-br from-gray-900 to-gray-800 max-w-4xl w-full rounded-2xl shadow-2xl max-h-[90vh] overflow-y-auto animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-white transition-colors z-10 bg-gray-800/50 rounded-full p-2 hover:bg-gray-700"
          aria-label="Close modal"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Header Image */}
        <div className="relative h-64 rounded-t-2xl overflow-hidden">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="p-8 -mt-20 relative">
          {/* Title */}
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white relative z-10">
            {project.title}
          </h2>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-4 py-2 text-sm font-medium rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
              >
                {t}
              </span>
            ))}
          </div>

          {/* Long Description */}
          <div className="mb-8">
            <h3 className="text-xl font-semibold mb-3 text-gray-200">
              About This Project
            </h3>

            <div className="prose prose-invert max-w-none text-gray-300">
              <ReactMarkdown>
                {project.longDescription}
              </ReactMarkdown>
            </div>
          </div>

          {/* Links */}
          <div className="flex gap-4 pt-6 border-t border-gray-700">
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors"
              >
                <Github className="w-5 h-5" />
                View on GitHub
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;