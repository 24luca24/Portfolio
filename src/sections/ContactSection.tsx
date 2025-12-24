import { Download, Mail } from "lucide-react";

const ContactSection = () => {
    return (
        <section className="
          w-full
          min-h-screen 
          flex items-center justify-center
          px-4 sm:px-8 md:px-12 lg:px-16
          py-24 lg:py-32
         ">
          <div className="max-w-4xl w-full text-center">
            <h2 className="
            text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-bold 
                mb-16
                text-center 
                leading-[1.4]
                bg-gradient-to-r from-cyan-400 to-purple-400 
                bg-clip-text 
                text-transparent">
              Let's Connect
            </h2>
            <p className="text-2xl text-gray-300 mb-12">
              I'm always open to new opportunities and collaborations
            </p>
            
            {/* Mail and CV */}
            <div className="flex gap-8 justify-center mb-12">

              <a 
                href="mailto:luca.airaghi24@gmail.com"
                className="flex items-center gap-3 bg-gradient-to-r from-cyan-400 to-cyan-500 text-black px-8 py-4 rounded-full hover:scale-110 transition font-semibold text-lg"
              >
                <Mail className="w-6 h-6" />
                Email Me
              </a>

              <a 
                href='Airaghi_Luca_CV.pdf'
                className='flex items-center gap-3 bg-gradient-to-r from-purple-400 to-purple-500 text-black px-8 py-4 rounded-full hover:scale-110 transition font-semibold text-lg'
              >
                <Download className='w-6 h-6'/>
                Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-8 justify-center">
              <a 
                href="https://github.com/24luca24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition text-lg"
              >
                GitHub
              </a>
              <a 
                href="https://www.linkedin.com/in/lucaairaghi/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 transition text-lg"
              >
                LinkedIn
              </a>
            </div>
          </div>
        </section>
    )
};

export default ContactSection;