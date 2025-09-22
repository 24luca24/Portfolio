import projectsData from "../data/projectsData.ts";
import ProjectsCard from "./ProjectsCard.tsx";

export default function Projects() {
    return (
        <section className="max-w-6xl mx-auto px-4 pb-16 pt-8">
            <span className="block w-full px-3 py-1 bg-indigo-100 rounded-lg mb-8">
                <h2 className="text-3xl font-bold text-gray-900 mb-3 mt-3 text-center">
                    Projects
                </h2>
            </span>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                    <ProjectsCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        projectLink={project.githubLink}
                    />
                ))}
            </div>
        </section>
    );
}
