import { useEffect, useRef, useState } from 'react';

export const useFullPageScroll = (sectionsLength: number) => {
    const [currentSection, setCurrentSection] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const scrollAccumulator = useRef(0);
    const SCROLL_THRESHOLD = 80;

    const handleScroll = (direction: 'up' | 'down') => {
    if (isScrolling) return; //If already true I exit, to avoid multiple scrolls at once
    
    setIsScrolling(true);
    if (direction === 'down' && currentSection < sectionsLength - 1) { //If going down AND not at last section
      setCurrentSection(prev => prev + 1); //Go into the next page
    } else if (direction === 'up' && currentSection > 0) { //If going up AND not at first section
      setCurrentSection(prev => prev - 1); //Go into the previous page
    }
    
    setTimeout(() => setIsScrolling(false), 1000); //Allow scrolling again after one second
  };

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

  return {
    currentSection,
    setCurrentSection,
    handleScroll,
    isScrolling,
  };
};