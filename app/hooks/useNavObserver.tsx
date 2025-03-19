import {useEffect} from 'react';

import {SectionId} from '../data/data';

export const useNavObserver = (
  selectors: string,
  setActiveSection: (section: SectionId | null) => void,
): void => {
  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(selectors);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      let currentSection: SectionId | null = null;
      for (const section of Array.from(sections)) {
        const element = section as HTMLElement;
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        if (scrollPosition >= top && scrollPosition <= bottom) {
          currentSection = element.id as SectionId;
          break;
        }
      }

      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectors, setActiveSection]);
};
