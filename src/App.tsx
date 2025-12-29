import { sections } from "./data/sections";
import { useFullPageScroll } from "./hooks/useFullPageScroll";
//Sections
import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import StatsSection from "./sections/StatsSection";
import ExperienceSection from "./sections/ExperienceSection";
import ProjectsSection from "./sections/ProjectsSection";
import ContactSection from "./sections/ContactSection";
//Navigation
import ArrowNavigation from './components/navigation/ArrowNavigation';
import DotNavigation from './components/navigation/DotNavigation';

const App = () => {
  const {
    currentSection,
    setCurrentSection,
    handleScroll,
    isScrolling,
  } = useFullPageScroll(sections.length);

  return (
    <>
      {/* Desktop: Full-page scroll with fixed sections */}
      <div className="hidden md:block relative w-full h-screen bg-black text-white overflow-hidden" style={{ height: '100dvh '}}>
        <ArrowNavigation
          currentSection={currentSection}
          maxSections={sections.length}
          onScroll={handleScroll}
        />
        
        <DotNavigation
          sections={sections}
          currentSection={currentSection}
          onSelect={setCurrentSection}
          disabled={isScrolling}
        />
        
        <div
          className="h-full transition-transform duration-1000 ease-in-out"
          style={{ transform: `translateY(-${currentSection * 100}vh)` ,
          WebkitTransform: `translateY(-${currentSection * 100}vh)`
          }}
        >
          <HeroSection />
          <AboutSection />
          <StatsSection currentSection={currentSection} />
          <ExperienceSection />
          <ProjectsSection />
          <ContactSection />
        </div>
      </div>

      {/* Mobile: Normal scrolling */}
      <div className="md:hidden relative w-full bg-black text-white">
        <HeroSection />
        <AboutSection />
        <StatsSection currentSection={0} />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </>
  );
};

export default App;