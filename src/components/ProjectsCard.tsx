interface ProjectsCardProps {
    title: string;
    description: string;

    projectLink: string;
}

function ProjectsCard({title, description, projectLink}: ProjectsCardProps) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white flex flex-col h-full pt-0">


            {/*Content that grows */}
            <div className="px-6 py-4 flex-grow">
                <div className="font-bold text-xl mb-2 text-gray-900">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>

            {/* Button that stays at bottom*/}
            <div className="px-6 pt-4 pb-6 mt-auto">
                <a 
                    href={projectLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-full text-center"
                >
                    View Project
                </a>
            </div>
        </div>
    );
}

export default ProjectsCard;