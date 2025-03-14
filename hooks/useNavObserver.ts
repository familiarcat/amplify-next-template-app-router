import {useEffect, useState} from 'react';

export const useNavObserver = (selectors: string): string | null => {
  const [activeSection, setActiveSection] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll(selectors);
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      for (const section of Array.from(sections)) {
        const element = section as HTMLElement;
        if (!element) continue;

        const rect = element.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + rect.height;

        if (scrollPosition >= top && scrollPosition <= bottom) {
          setActiveSection(element.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [selectors]);

  return activeSection;
};