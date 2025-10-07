import { useState, useEffect } from 'react';

export function useScrollSection() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('[data-theme]');
      const navHeight = 100; // Height of the navbar
      
      let currentTheme = 'dark';

      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = section.getBoundingClientRect().bottom;

        if (sectionTop < navHeight && sectionBottom > navHeight) {
          currentTheme = section.getAttribute('data-theme') || 'dark';
        }
      });
      
      setTheme(currentTheme);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return theme;
}
