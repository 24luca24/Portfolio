import { createPortal } from 'react-dom';
import { useEffect, useState } from 'react';
import type { Project } from '../../data/projects';
import { X, Github } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

type Props = {
  project: Project;
  onClose: () => void;
};

const ProjectModal = ({ project, onClose }: Props) => {
  const [collapsed, setCollapsed] = useState(false);

  // Lock background scroll
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
  const scrollTop = e.currentTarget.scrollTop;

  setCollapsed((prev) => {
    if (!prev && scrollTop > 120) return true;   // collapse
    if (prev && scrollTop < 40) return false;    // expand
    return prev;                                 // no change
  });
};

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
      onClick={onClose}
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <div
        className="relative bg-gradient-to-br from-gray-900 to-gray-800 max-w-4xl w-full rounded-2xl shadow-2xl max-h-[90vh] flex flex-col animate-slideUp"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 z-40 bg-gray-800/60 p-2 rounded-full text-gray-300 hover:text-white transition"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Collapsing Header Image */}
        <div
          className={`relative overflow-hidden transition-all duration-300 ease-in-out ${
            collapsed ? 'h-28' : 'h-64'
          }`}
        >
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
        </div>

        {/* Scrollable Area */}
        <div
          className="relative flex-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
          onScroll={handleScroll}
          onWheel={(e) => e.stopPropagation()}
          onTouchMove={(e) => e.stopPropagation()}
        >
          {/* Sticky Header */}
          <div
            className={`sticky top-0 z-30 backdrop-blur border-b border-gray-700 transition-all duration-300 ${
              collapsed ? 'bg-gray-900/95 py-4' : 'bg-gray-900/85 py-8'
            } px-8`}
          >
            <h2
              className={`font-bold text-white transition-all duration-300 ${
                collapsed ? 'text-2xl' : 'text-4xl md:text-5xl'
              } mb-3`}
            >
              {project.title}
            </h2>

            <div
              className={`flex flex-wrap gap-2 transition-all duration-300 ${
                collapsed ? 'pb-2' : 'pb-6'
              }`}
            >
              {project.tech.map((t) => (
                <span
                  key={t}
                  className={`rounded-full border border-cyan-400/20 bg-cyan-400/10 text-cyan-400 transition-all duration-300 ${
                    collapsed
                      ? 'px-3 py-1 text-xs'
                      : 'px-4 py-2 text-sm'
                  }`}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

          {/* Scroll Content */}
          <div className="px-8 pt-6 pb-8">
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-3 text-gray-200">
                About This Project
              </h3>

              <div className="
                prose prose-invert max-w-none text-gray-300
                prose-p:my-6
                prose-ul:my-6
                prose-li:my-2
                prose-h3:mt-12 prose-h3:mb-4
                prose-hr:my-12
                prose-strong:text-white
                prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
                ">
                <ReactMarkdown>{project.longDescription}</ReactMarkdown>
              </div>
            </div>

            {project.github && (
              <div className="pt-6 border-t border-gray-700">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-300 transition-colors"
                >
                  <Github className="w-5 h-5" />
                  View on GitHub
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
};

export default ProjectModal;
