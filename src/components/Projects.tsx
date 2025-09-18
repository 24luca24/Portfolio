import projectsData from "../data/projectsData.ts";
import ProjectsCard from "./ProjectsCard.tsx";

export default function Projects() {
    return (
        <section className="max-w-6xl mx-auto px-4 pb-16 pt-8">
            <h2 className="text-3xl font-bold mb-8 mt-8 text-gray-900">Projects</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {projectsData.map((project) => (
                    <ProjectsCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.image}
                        projectLink={project.githubLink}
                    />
                ))}
            </div>
        </section>
    );
}
