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
          <div className="px-8 md:px-12 pt-8 pb-12">
            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-6 text-white border-b border-gray-700 pb-3">
                About This Project
              </h3>

              <div className="
                prose prose-invert max-w-none text-white
                [&_p]:text-white [&_p]:leading-relaxed [&_p]:text-base [&_p]:my-5
                [&_ul]:my-6 [&_ul]:text-white
                [&_li]:my-2 [&_li]:leading-relaxed [&_li]:text-base [&_li]:text-white
                [&_h3]:text-2xl [&_h3]:font-semibold [&_h3]:text-cyan-400 [&_h3]:mt-12 [&_h3]:mb-5 [&_h3]:border-b [&_h3]:border-gray-700 [&_h3]:pb-2
                [&_hr]:my-10 [&_hr]:border-white/30 [&_hr]:border-t-2
                [&_strong]:text-cyan-300 [&_strong]:font-semibold
                [&_a]:text-cyan-400 [&_a]:no-underline hover:[&_a]:underline [&_a]:transition-colors
                [&_code]:text-cyan-300 [&_code]:bg-gray-800 [&_code]:px-2 [&_code]:py-1 [&_code]:rounded [&_code]:text-sm
                [&_blockquote]:border-l-4 [&_blockquote]:border-cyan-400 [&_blockquote]:pl-4 [&_blockquote]:italic [&_blockquote]:text-white
              ">
                <ReactMarkdown
                  components={{
                    p: ({ children }) => <p className="whitespace-pre-line">{children}</p>,
                  }}
                >
                  {project.longDescription}
                </ReactMarkdown>
              </div>
            </div>

            {project.github && (
              <div className="pt-8 border-t border-gray-700 mt-8">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-cyan-400 text-gray-900 font-semibold rounded-lg hover:bg-cyan-300 transition-all hover:scale-105 shadow-lg hover:shadow-cyan-400/50"
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