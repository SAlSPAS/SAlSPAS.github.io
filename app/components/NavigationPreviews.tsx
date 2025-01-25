import { useState, useEffect } from 'react';

export default function NavigationPreviews() {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const windowHeight = window.innerHeight;
      const currentSection = Math.floor(scrollPosition / windowHeight);
      setActiveSection(currentSection);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // const sections = ['Landing', 'Home', 'Promo', 'iPod', 'Scene', 'Thoughts'];
  const sections = ['Landing', 'Home', 'Promo', 'Scene'];

  return (
    <div className="fixed right-4 top-1/2 transform -translate-y-1/2">
      {sections.map((section, index) => (
        <div
          key={section}
          className={`w-12 h-8 mb-2 border border-black cursor-pointer ${
            index === activeSection ? 'bg-black border-white' : 'bg-white'
          }`}
          onClick={() => window.scrollTo({ top: index * window.innerHeight, behavior: 'smooth' })}
        />
      ))}
    </div>
  );
}