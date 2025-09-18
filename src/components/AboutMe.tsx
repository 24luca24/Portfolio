interface AboutMeProps {
    imageLink: string;
    insubriaLink: string;
    usiLink: string;
}

function AboutMe({imageLink, insubriaLink, usiLink}: AboutMeProps) {
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
                            Hi everyone, I'm Luca Airaghi a student of the master in Software and Data Engineering at {''}
                            <a
                            href={usiLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
                            >
                            Università della Svizzera Italiana (USI)
                            </a>
                            . 
                            I completed my bachelor's degree in Computer Science at {''}
                            <a
                            href={insubriaLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 underline font-medium transition-colors"
                            >
                            Università degli Studi dell'Insubria
                            </a>
                            .
                            I'm passionate about software development, data management and AI. Throughout my academic journey,
                            I've gained experience in some programming languages such as <b>Java</b> and <b>Python</b>. 
                            Since I want to improve my coding skills, and practice continuously, I decided to create this portfolio website using <b>React</b> and <b>TypeScript</b> to showcase my work.
                            (Before this moment I never wrote a single line in both React and TypeScript).
                            The aim of this portfolio is also to explain in details, the projects I have on GitHub and make it more faster to read for recruiters.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutMe;
