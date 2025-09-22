interface AboutMeProps {
    imageLink: string;
    insubriaLink: string;
    usiLink: string;
}

function AboutMe({ imageLink, insubriaLink, usiLink }: AboutMeProps) {
    return (
        <section className="max-w-6xl mx-auto px-4 pt-16 pb-0">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start">

                {/* First column - Image (1/3 width) */}
                <div className="md:col-span-1">
                    <img 
                        src={imageLink}
                        alt="Luca Airaghi"
                        className="w-full h-auto rounded-lg shadow-lg object-cover"
                    />
                </div>

                {/* Second and third columns - About Me */}
                <div className="md:col-span-2">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">
                        About Me
                    </h2>
                    <div className="text-lg text-gray-900 leading-relaxed space-y-4">
                        <p>
                            Hi everyone, I'm <b>Luca Airaghi</b>, a student of the Master in Software and Data Engineering at{" "}
                            <a
                                href={usiLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
                            >
                                Università della Svizzera Italiana (USI)
                            </a>
                            .
                        </p>
                        <p>
                            I completed my Bachelor's degree in Computer Science at{" "}
                            <a
                                href={insubriaLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
                            >
                                Università degli Studi dell'Insubria
                            </a>
                            .
                        </p>
                        <p>
                            I'm passionate about <b>software development</b>, <b>data management</b>, and <b>AI</b>.  
                            Throughout my academic journey, I've gained experience in programming languages such as <b>Java</b> and <b>Python</b>.
                        </p>
                        <p>
                            To improve my coding skills and practice continuously, I built this portfolio using <b>React</b> and <b>TypeScript</b> — even though I had never written a single line in either before starting this project.
                        </p>
                        <p>
                            The goal of this portfolio is to present my projects more clearly than GitHub alone, making them easier and faster for recruiters to review.
                        </p>
                    </div>

                    {/* Knowledge & Skills Section */}
                    <div className="mt-8">
                        <h3 className="text-xl font-semibold text-gray-900 mb-4">
                            Knowledge & Skills
                        </h3>
                        <div className="flex flex-wrap gap-3 text-lg">
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-lg shadow-sm flex items-center gap-2">
                                <img src="https://img.shields.io/badge/-Java-007396?style=flat-square&logo=java&logoColor=ffffff" alt="Java" />
                                <b>Java</b>
                            </span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-lg shadow-sm flex items-center gap-2">
                                <img src="https://img.shields.io/badge/-Python-3776AB?style=flat-square&logo=python&logoColor=ffffff" alt="Python" />
                                <b>Python</b>
                            </span>
                            <span className="px-3 py-1 bg-gray-100 text-gray-800 rounded-lg shadow-sm flex items-center gap-2">
                                <img src="https://img.shields.io/badge/-SQL-336791?style=flat-square&logo=postgresql&logoColor=ffffff" alt="SQL" />
                                <b>SQL</b>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
