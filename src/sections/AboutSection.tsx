import profilePic from '../assets/profile.jpg';

const AboutSection = () => {
    return (
        <section className="
          w-full
          min-h-screen 
          flex items-center justify-center
          px-4 sm:px-8 md:px-12 lg:px-16
          py-24 lg:py-32">
          <div className="max-w-screen-xl grid md:grid-cols-2 gap-12 items-center">

            {/* Profile Image */}
            <div className="relative w-full max-w-md mx-auto md:mx-0">
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-2xl blur-xl opacity-30" />
              <img 
                src={profilePic} 
                alt="Luca Airaghi"
                className="relative rounded-2xl shadow-2xl"
              />
            </div>
            
            <div>
              <h2 className="
                text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-bold 
                mb-16
                text-center 
                leading-[1.4]
                bg-gradient-to-r from-cyan-400 to-purple-400 
                bg-clip-text 
                text-transparent">
                About Me
              </h2>
              <div className="space-y-4 text-gray-300 text-lg">
                <p>
                  Master's student in Software and Data Engineering at <span className='from-cyan-400'>Università della Svizzera Italiana (USI)</span>.
                </p>
                <p>
                  I completed Bachelor's in Computer Science at <span className='from-cyan-400'>Università degli Studi dell'Insubria</span>.
                </p>
                <p>
                  I am very passionate about <span className="text-purple-400">software development</span>, <span className="text-purple-400">data management</span>, and <span className="text-purple-400">AI</span>.
                </p>
                <p>
                  In particular, for my master's thesis in AI, I am developing an agent system capable of almost-autonomously performing complex tasks.
                </p>
                <p>
                  I enjoy facing challenging problems especially in group, were each member contribute in a meaningful way to achieve the best possible solution. 
                </p>
              </div>
            </div>
          </div>
        </section>
    )
};

export default AboutSection;