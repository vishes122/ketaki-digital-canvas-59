
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin } from "lucide-react";

const Hero = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-50 to-blue-50 px-4 py-16"
    >
      <motion.h1 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 text-center"
      >
        Ketaki Khanvilkar
      </motion.h1>
      <motion.h2 
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-2xl md:text-3xl text-purple-700 mb-8 text-center"
      >
        Big Data Analytics Student & Aspiring Data Analyst
      </motion.h2>
      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="flex flex-col md:flex-row gap-4 items-center justify-center text-gray-600"
      >
        <a href="tel:8657495370" className="flex items-center gap-2 hover:text-purple-700 transition-colors">
          <Phone size={20} />
          <span>8657495370</span>
        </a>
        <a href="mailto:ketakikhanvilkar@gmail.com" className="flex items-center gap-2 hover:text-purple-700 transition-colors">
          <Mail size={20} />
          <span>ketakikhanvilkar@gmail.com</span>
        </a>
        <a href="https://linkedin.com/in/ketaki-khanvilkar" target="_blank" rel="noopener noreferrer" 
           className="flex items-center gap-2 hover:text-purple-700 transition-colors">
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </a>
      </motion.div>
    </motion.section>
  );
};

export default Hero;
