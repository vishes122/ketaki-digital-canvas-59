
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Projects from '../components/sections/Projects';
import Certifications from '../components/sections/Certifications';
import Education from '../components/sections/Education';
import Contact from '../components/sections/Contact';

const HomePage = () => {
  useEffect(() => {
    document.title = "Ketaki Khanvilkar - Data Analyst Portfolio";
  }, []);

  return (
    <div className="relative min-h-screen">
      <div className="fixed inset-0 gradient-background" />
      <Header />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
        className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24 relative"
      >
        <section id="home" className="min-h-[calc(100vh-4rem)] flex items-center">
          <Hero />
        </section>
        
        {['about', 'skills', 'projects', 'certifications', 'education', 'contact'].map((section) => (
          <section
            key={section}
            id={section}
            className="scroll-mt-16 py-16"
          >
            {(() => {
              switch (section) {
                case 'about': return <About />;
                case 'skills': return <Skills />;
                case 'projects': return <Projects />;
                case 'certifications': return <Certifications />;
                case 'education': return <Education />;
                case 'contact': return <Contact />;
                default: return null;
              }
            })()}
          </section>
        ))}
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
