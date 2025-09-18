interface ProjectsCardProps {
    title: string;
    description: string;
    imageUrl: string;
    projectLink: string;
}

function ProjectsCard({title, description, imageUrl, projectLink}: ProjectsCardProps) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg bg-white">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2 text-gray-900">{title}</div>
                <p className="text-gray-700 text-base">
                    {description}
                </p>
            </div>
            <div className="px-6 pt-4 pb-2">
                <a 
                    href={projectLink} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                >
                    View Project
                </a>
            </div>
        </div>
    );
}

export default ProjectsCard;