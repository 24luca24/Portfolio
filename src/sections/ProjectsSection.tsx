import { useState, useEffect } from 'react';
import { projects } from '../data/projects';
import type { Project } from '../data/projects';

import ProjectCard from '../components/projects/ProjectsCard';
import ProjectModal from '../components/projects/ProjectModal';

const ProjectsSection = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Debug: log whenever a project is selected
  useEffect(() => {
    if (selectedProject) {
      console.log('Modal project:', selectedProject);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [selectedProject]);

  return (
    <>
      <section className="w-full min-h-screen flex items-center justify-center px-4 sm:px-8 md:px-12 lg:px-16 py-24 lg:py-32">
        <div className="max-w-6xl w-full">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-16 text-center leading-[1.4] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} onOpen={setSelectedProject} />
            ))}
          </div>
        </div>
      </section>

      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default ProjectsSection;
