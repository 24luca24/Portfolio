import { Code2, Brain, Database } from "lucide-react";

const ProjectsSection = () => {
    return (
        <section className="
          w-full
          min-h-screen 
          flex items-center justify-center
          px-4 sm:px-8 md:px-12 lg:px-16
          py-24 lg:py-32
          ">
          <div className="max-w-6xl w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-bold 
                mb-16
                text-center 
                leading-[1.4]
                bg-gradient-to-r from-cyan-400 to-purple-400 
                bg-clip-text 
                text-transparent">
              Featured Projects
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-cyan-400 transition group">
                <div className="h-48 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg mb-6 flex items-center justify-center">
                  <Code2 className="w-20 h-20 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">Software Analysis</h3>
                <p className="text-gray-400 mb-4">
                  Formal methods project demonstrating algorithm verification, static analysis, and concurrent system modeling.
                </p>
                <button className="w-full py-3 bg-cyan-400/10 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition font-semibold">
                  View Project
                </button>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-purple-400 transition group">
                <div className="h-48 bg-gradient-to-br from-purple-400/20 to-cyan-400/20 rounded-lg mb-6 flex items-center justify-center">
                  <Database className="w-20 h-20 text-purple-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-purple-400 transition">Visual Analytics</h3>
                <p className="text-gray-400 mb-4">
                  Data exploration with Python, Elasticsearch/Kibana dashboards, and big data processing with Spark.
                </p>
                <button className="w-full py-3 bg-purple-400/10 text-purple-400 rounded-lg hover:bg-purple-400 hover:text-black transition font-semibold">
                  View Project
                </button>
              </div>

              <div className="bg-gray-900/50 border border-gray-800 rounded-xl p-6 hover:border-cyan-400 transition group">
                <div className="h-48 bg-gradient-to-br from-cyan-400/20 to-purple-400/20 rounded-lg mb-6 flex items-center justify-center">
                  <Brain className="w-20 h-20 text-cyan-400" />
                </div>
                <h3 className="text-2xl font-bold mb-3 group-hover:text-cyan-400 transition">Find The Pitch</h3>
                <p className="text-gray-400 mb-4">
                  Application to find and book sports pitches with ranking, chat, and field booking features.
                </p>
                <button className="w-full py-3 bg-cyan-400/10 text-cyan-400 rounded-lg hover:bg-cyan-400 hover:text-black transition font-semibold">
                  View Project
                </button>
              </div>
            </div>
          </div>
        </section>
    )
};

export default ProjectsSection;