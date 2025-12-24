import { Calendar } from "lucide-react";

const ExperienceSection = () => {
    return (
        <section className="
          w-full
          min-h-screen 
          flex items-center justify-center
          px-4 sm:px-8 md:px-12 lg:px-16
          py-24 lg:py-32
          ">
          <div className="max-w-5xl w-full">
            <h2 className="
              text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-bold 
                mb-16
                text-center 
                leading-[1.4]
                bg-gradient-to-r from-cyan-400 to-purple-400 
                bg-clip-text 
                text-transparent">
              Experience
            </h2>
            
            <div className="space-y-8">
              <div className="bg-gradient-to-r from-cyan-900/20 to-transparent border-l-4 border-cyan-400 p-8 rounded-r-xl hover:from-cyan-900/40 transition">
                <h3 className="text-3xl font-bold mb-4">Teacher Assistant - Programming Fundamentals 1</h3>
                <div className="text-cyan-400 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  September 2025 - January 2026
                </div>
                <p className="text-gray-300 mb-4">Università della Svizzera Italiana (USI)</p>
                <p className="text-gray-400">
                  Assisted in teaching Programming Fundamentals 1, helping students with laboratory exercises and grading assignments using Racket.
                </p>
              </div>

              <div className="bg-gradient-to-r from-purple-900/20 to-transparent border-l-4 border-purple-400 p-8 rounded-r-xl hover:from-purple-900/40 transition">
                <h3 className="text-3xl font-bold mb-4">Intern - LowCode Developer</h3>
                <div className="text-purple-400 mb-4 flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  February 2024 - May 2024
                </div>
                <p className="text-gray-300 mb-4">Webratio</p>
                <p className="text-gray-400">
                  Developed an e-learning application from scratch using the Webratio platform, focusing on both front-end and back-end development.
                </p>
              </div>
            </div>
          </div>
        </section>
    )
};

export default ExperienceSection;