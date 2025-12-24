type DotNavigationProps = {
  sections: string[];
  currentSection: number;
  onSelect: (index: number) => void;
  disabled?: boolean;
};

const DotNavigation = ({
  sections,
  currentSection,
  onSelect,
  disabled = false,
}: DotNavigationProps) => {
  return (
    <div className="fixed right-8 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4">
      {sections.map((section, index) => (
        <button
          key={section}
          onClick={() => !disabled && onSelect(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            currentSection === index
              ? 'bg-cyan-400 scale-150'
              : 'bg-gray-600 hover:bg-gray-400'
          }`}
          aria-label={`Go to ${section}`}
        />
      ))}
    </div>
  );
};

export default DotNavigation;
