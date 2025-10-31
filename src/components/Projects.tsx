import projectsData from "../data/projectsData.ts";
import CollapsibleSection from "./CollapsibleSection.tsx";
import ProjectsCard from "./ProjectsCard.tsx";

export default function Projects() {
    return (
        <CollapsibleSection title="Projects" defaultOpen>
            <section className="max-w-6xl mx-auto px-4 pb-16 pt-4">
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
        </CollapsibleSection>
    );
}
