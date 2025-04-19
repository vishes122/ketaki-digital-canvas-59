
import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Projects from '../components/sections/Projects';
import { Header } from '../components/layout/Header';
import { Footer } from '../components/layout/Footer';

const ProjectsPage = () => {
  useEffect(() => {
    document.title = "Projects - Ketaki Khanvilkar";
  }, []);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="min-h-screen bg-background text-foreground pt-16"
    >
      <Header />
      <main className="container mx-auto px-4 py-8">
        <Projects />
      </main>
      <Footer />
    </motion.div>
  );
};

export default ProjectsPage;
