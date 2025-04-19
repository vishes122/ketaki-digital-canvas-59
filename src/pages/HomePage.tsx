
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
    <div className="relative min-h-screen overflow-hidden gradient-background">
      <Header />
      
      <motion.main 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="container mx-auto px-4 py-20 space-y-24 relative z-10"
      >
        <section id="home" className="min-h-screen flex items-center">
          <Hero />
        </section>
        
        <section id="about" className="pt-24">
          <About />
        </section>
        
        <section id="skills" className="pt-24">
          <Skills />
        </section>
        
        <section id="projects" className="pt-24">
          <Projects />
        </section>
        
        <section id="certifications" className="pt-24">
          <Certifications />
        </section>
        
        <section id="education" className="pt-24">
          <Education />
        </section>
        
        <section id="contact" className="pt-24">
          <Contact />
        </section>
      </motion.main>
      
      <Footer />
    </div>
  );
};

export default HomePage;
