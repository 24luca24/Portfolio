interface NavBarProps {
    name: string;
    surname: string;
    githubLink: string;
    linkedinLink: string;
    profession: string;
    downloadCVButton: () => void;
}

function NavBar({name, surname, githubLink, linkedinLink, profession, downloadCVButton}: NavBarProps) {
    return (        
        <header className="w-full bg-white shadow-md border-b">
            <div className="max-w-6xl mx-auto px-4 py-3 flex justify-between items-center">

                {/*Left side - name and surname*/}
                <div className="font-bold text-xl text-gray 900">
                    {name} {surname}
                </div>

                {/*Center - profession*/}
                <div className="font-medium text-lg text-gray-600">
                    {profession}
                </div>

                {/*Right side - links and button*/}
                <div className="flex items-center space-x-6">
                    <a
                        href={githubLink}
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >GitHub
                    </a>
                    <a 
                        href={linkedinLink}
                        className="text-gray-700 hover:text-blue-600 transition-colors"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        LinkedIn
                    </a>
                    <button 
                        onClick={downloadCVButton} 
                        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
                    >
                        Download CV
                    </button>
                </div>
            </div>
        </header>
    );
}

export default NavBar;

