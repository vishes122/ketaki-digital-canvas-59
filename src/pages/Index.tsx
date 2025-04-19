
import { useEffect } from 'react';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';
import Certifications from '../components/sections/Certifications';

const Index = () => {
  useEffect(() => {
    document.title = "Ketaki Khanvilkar - Data Analyst Portfolio";
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Certifications />
      <Education />
      <Contact />
    </div>
  );
};

export default Index;
