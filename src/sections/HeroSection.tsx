import { Github, Linkedin, Mail } from "lucide-react"

const HeroSection = () => {
    return (
        <section className="h-screen flex items-center justify-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/20 via-black to-purple-900/20" />

          {/* Floating circles */}
          <div className="absolute inset-0">
            {[...Array(50)].map((_, i) => (
              <div
                key={i}
                className="absolute bg-cyan-400/10 rounded-full"
                style={{
                  width: Math.random() * 300 + 50 + 'px',
                  height: Math.random() * 300 + 50 + 'px',
                  left: Math.random() * 100 + '%',
                  top: Math.random() * 100 + '%',
                  filter: 'blur(40px)',
                  animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`
                }}
              />
            ))}
          </div>

          {/* Content */}
          <div className="relative z-10 text-center px-4 sm:px-8">
            <h1 className="text-6xl sm:text-7xl md:text-8xl font-bold mb-6 leading-[1.4] bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Luca Airaghi
            </h1>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-300 mb-8">Software & Data Engineer</p>

            {/* Social links */}
            <div className="flex gap-6 justify-center">
              <a href="mailto:luca.airaghi24@gmail.com" 
                 className="hover:text-cyan-400 transition"
                 target='_blank' //_blank -> open the link in a new tab. noopener -> protects your page from manipulation. noreferrer -> hides your URL and adds extra protection
                 rel='noopener noreferrer'>
                <Mail className="w-8 h-8" />
              </a>
              <a href="https://github.com/24luca24" 
                 className="hover:text-cyan-400 transition"
                 target='_blank'
                 rel='noopener noreferrer'>
                <Github className="w-8 h-8" />
              </a>
              <a href="https://www.linkedin.com/in/lucaairaghi/" 
                 className="hover:text-cyan-400 transition"
                 target='_blank'
                 rel='noopener noreferrer'>
                <Linkedin className="w-8 h-8" />
              </a>
            </div>
          </div>
        </section>
    )
};

export default HeroSection;