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
    <div className="relative w-full h-screen bg-black text-white overflow-hidden">

      {/* Arrow navigation (up / down) */}
      <ArrowNavigation
        currentSection={currentSection}
        maxSections={sections.length}
        onScroll={handleScroll}
      />

      {/* Dot navigation */}
      <DotNavigation
        sections={sections}
        currentSection={currentSection}
        onSelect={setCurrentSection}
        disabled={isScrolling}
      />

      {/* Sections container */}
      <div
        className="h-full transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateY(-${currentSection * 100}vh)` }}
      >
        <HeroSection />
        <AboutSection />
        <StatsSection currentSection={currentSection} />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </div>
    </div>
  );
};

export default App;