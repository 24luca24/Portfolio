import { useState, useEffect, useRef } from "react";
import { skills } from "../data/skills";
import { sections } from "../data/sections";
import { calculateExperience } from "../utils/calculateExperience";

type StatsSectionProps = {
  currentSection: number;
};

const StatsSection = ({ currentSection }: StatsSectionProps) => {
  const statsIndex = sections.indexOf('stats');
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Intersection Observer for mobile scroll detection
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.3 } // Trigger when 30% of section is visible
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Determine if bars should animate based on desktop or mobile
  const shouldAnimate = currentSection >= statsIndex || isVisible;

  return (
    <section 
      ref={sectionRef}
      className="
        w-full
        min-h-screen 
        flex items-center justify-center
        px-4 sm:px-8 md:px-12 lg:px-16
        py-24 lg:py-32        
      "
    >
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
                      width: shouldAnimate ? `${Math.min((years / 5) * 100, 100)}%` : '0%',
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
  );
};

export default StatsSection;