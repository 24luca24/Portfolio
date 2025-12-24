import { ChevronDown, ChevronUp } from 'lucide-react';

type ArrowNavigationProps = {
  currentSection: number;
  maxSections: number;
  onScroll: (direction: 'up' | 'down') => void;
};

const ArrowNavigation = ({
  currentSection,
  maxSections,
  onScroll,
}: ArrowNavigationProps) => {
  return (
    <>
      {/* Arrow Up */}
      {currentSection > 0 && (
        <button
          onClick={() => onScroll('up')}
          className="fixed top-8 right-8 z-50 animate-bounce"
          aria-label="Previous section"
        >
          <ChevronUp className="w-12 h-12 text-cyan-400" />
        </button>
      )}

      {/* Arrow Down */}
      {currentSection < maxSections - 1 && (
        <button
          onClick={() => onScroll('down')}
          className="fixed bottom-8 right-8 z-50 animate-bounce"
          aria-label="Next section"
        >
          <ChevronDown className="w-12 h-12 text-cyan-400" />
        </button>
      )}
    </>
  );
};

export default ArrowNavigation;
