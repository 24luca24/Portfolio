/*
  - useState -> let me store and update data in the component
  - useEffect -> runs code when component loads or when something changes
*/
import { useState, useEffect, useRef } from 'react';
import { ChevronDown, ChevronUp, Github, Linkedin, Mail, Calendar, Code2, Database, Brain, Download } from 'lucide-react';
import profilePic from './assets/profile.jpg'

//Navigation system, tracks which section you are in.
const FullPagePortfolio = () => {

  /*
    State variables returns an array with 2 element. For instance the first one returns:
      - currentSection -> the current value (start at 0)
      - setCurrentSection -> function to update the value
    When I call setCurrentSection(1), React will render the component with new value.
    I used state because they trigger re-renders, while normal variable does not.
  */
  const [currentSection, setCurrentSection] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  //Here I store sections, each one has an index (start from 0)
  const sections = ['hero', 'about', 'stats', 'experience', 'projects', 'contact'];

  //Calculate years and months of experience for each language
  const calculateExperience = (startDate: string): number => {
    const start = new Date(startDate).getTime();
    const now = Date.now();
    const diffTime = Math.abs(now - start);
    const diffYears = diffTime / (1000 * 60 * 60 * 24 * 365.25);
    return diffYears;
  };

  //Here I stored the skills as an array of objects (each object is one skill)
  const skills = [
    { 
      name: 'Java', 
      startDate: '2021-09-20', 
      color: '#f89820',
      icon: Code2,
      projects: 6 
    },
    { 
      name: 'SQL', 
      startDate: '2021-09-20', 
      color: '#00758f',
      icon: Database,
      projects: 2
    },
    { 
      name: 'Python', 
      startDate: '2024-09-16', 
      color: '#3776ab',
      icon: Code2,
      projects: 5
    },
    { 
      name: 'Typescript & React', 
      startDate: '2025-09-01', 
      color: '#61dafb',
      icon: Code2,
      projects: 1
    },
  ];

  //Function that handles scrolling
  const handleScroll = (direction: 'up' | 'down') => {
    if (isScrolling) return; //If already true I exit, to avoid multiple scrolls at once
    
    setIsScrolling(true);
    if (direction === 'down' && currentSection < sections.length - 1) { //If going down AND not at last section
      setCurrentSection(prev => prev + 1); //Go into the next page
    } else if (direction === 'up' && currentSection > 0) { //If going up AND not at first section
      setCurrentSection(prev => prev - 1); //Go into the previous page
    }
    
    setTimeout(() => setIsScrolling(false), 1000); //Allow scrolling again after one second
  };

  const scrollAccumulator = useRef(0);
  const SCROLL_THRESHOLD = 80;


  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();

      if (isScrolling) return; //do nothing if we are moving into the next page

      scrollAccumulator.current += e.deltaY;
      if (scrollAccumulator.current > SCROLL_THRESHOLD) {
        handleScroll('down');
        scrollAccumulator.current = 0;
      } else if (scrollAccumulator.current < - SCROLL_THRESHOLD) {
        handleScroll('up');
        scrollAccumulator.current = 0;
      }
    };

    //Function to handle keyboard arrow used to scroll
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowDown') handleScroll('down');
      if (e.key === 'ArrowUp') handleScroll('up');
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [currentSection, isScrolling]);

  return (
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">

      {/* ARROW NAVIGATION UP */}
      {currentSection > 0 && (
        <button
          onClick={() => handleScroll('up')}
          className="fixed top-8 right-8 z-50 animate-bounce"
          aria-label="Previous section"
        >
          <ChevronUp className="w-12 h-12 text-cyan-400" />
        </button>
      )}

      {/* NAVIGATION DOTS */}
      <div className="fixed right-8 top-1/2 transform -translate-y-1/2 z-50 flex flex-col gap-4">
        {sections.map((section, index) => (
          <button
            key={section}
            onClick={() => !isScrolling && setCurrentSection(index)} //If not scrolling, set section to this index
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              currentSection === index //Active dot is cyan and bigger, others are gray
                ? 'bg-cyan-400 scale-150' 
                : 'bg-gray-600 hover:bg-gray-400'
            }`}
            aria-label={`Go to ${section}`}
          />
        ))}
      </div>

      {/* ARROW NAVIGATION DOWN*/}
      {currentSection < sections.length - 1 && (
        <button
          onClick={() => handleScroll('down')}
          className="fixed bottom-8 right-8 z-50 animate-bounce"
          aria-label="Next section"
        >
          <ChevronDown className="w-12 h-12 text-cyan-400" />
        </button>
      )}
      
      {/* SECTIONS CONTAINER */}
      <div 
        className="h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >

        {/* Hero Section */}
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

        {/* About Section */}
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

        {/* Stats Section */}
        <section className="
          w-full
          min-h-screen 
          flex items-center justify-center
          px-4 sm:px-8 md:px-12 lg:px-16
          py-24 lg:py-32        
        ">
          <div className="max-w-screen-xl w-full">
            <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl
                font-bold 
                mb-16
                text-center 
                leading-[1.4]
                bg-gradient-to-r from-cyan-400 to-purple-400 
                bg-clip-text 
                text-transparent">
              Coding Journey
            </h2>
            
            <div className="grid gap-8">
              {skills.map((skill) => {
                const years = calculateExperience(skill.startDate);
                const months = Math.floor((years % 1) * 12);
                const fullYears = Math.floor(years);
                const Icon = skill.icon;
                
                return (
                  <div key={skill.name} className="group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center gap-4">
                        <Icon className="w-8 h-8" style={{ color: skill.color }} />
                        <span className="text-2xl font-semibold">{skill.name}</span>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold" style={{ color: skill.color }}>
                          {fullYears > 0 && `${fullYears}y `}
                          {months}m
                        </div>
                        <div className="text-sm text-gray-400">{skill.projects} projects</div>
                      </div>
                    </div>
                    
                    <div className="h-4 bg-gray-800 rounded-full overflow-hidden">
                      <div 
                        className="h-full rounded-full transition-all duration-1000 ease-out"
                        style={{ 
                          width: currentSection >= sections.indexOf('stats') ? `${Math.min((years / 5) * 100, 100)}%` : '0%',
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}dd)`
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-16 grid grid-cols-3 gap-8 text-center">
              <div className="bg-gray-900/50 rounded-xl p-6 border border-cyan-400/20">
                <div className="text-5xl font-bold text-cyan-400 mb-2">
                  {skills.reduce((acc, skill) => acc + skill.projects, 0)}
                </div>
                <div className="text-gray-400">Total Projects</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-purple-400/20">
                <div className="text-5xl font-bold text-purple-400 mb-2">
                  {skills.length}
                </div>
                <div className="text-gray-400">Technologies</div>
              </div>
              <div className="bg-gray-900/50 rounded-xl p-6 border border-cyan-400/20">
                <div className="text-5xl font-bold text-cyan-400 mb-2">
                  {Math.floor(calculateExperience('2020-09-01'))}+
                </div>
                <div className="text-gray-400">Years Coding</div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
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

        {/* Projects Section */}
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

        {/* Contact Section */}
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
      </div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translate(0, 0) scale(1); }
          50% { transform: translate(30px, -30px) scale(1.1); }
        }
      `}</style>
    </div>
  );
};

export default FullPagePortfolio;
