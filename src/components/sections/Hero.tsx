import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, ArrowDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop - 80,
        behavior: "smooth"
      });
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full flex flex-col items-center justify-center text-center px-4 py-16 min-h-[calc(100vh-80px)]"
    >
      <motion.div 
        className="relative w-32 h-32 mb-8 rounded-full overflow-hidden animated-gradient-border"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 200 }}
      >
        <div className="absolute inset-[3px] rounded-full bg-gradient-to-br from-purple-400 to-pink-500 flex items-center justify-center">
          <span className="text-white text-4xl font-bold">KK</span>
        </div>
      </motion.div>

      <motion.h1 
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="text-5xl md:text-7xl font-bold mb-4 text-gradient"
      >
        Ketaki Khanvilkar
      </motion.h1>

      <motion.h2 
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-2xl md:text-3xl font-medium mb-8 text-foreground/80"
      >
        Big Data Analytics <span className="text-primary">•</span> Data Analysis <span className="text-primary">•</span> Machine Learning
      </motion.h2>

      <motion.p
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-2xl text-lg md:text-xl text-muted-foreground mb-12"
      >
        Transforming complex data into actionable insights. Exploring the world of big data analytics with a passion for uncovering patterns and driving data-informed decisions.
      </motion.p>

      <motion.div 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="flex flex-wrap gap-6 md:gap-8 items-center justify-center mb-16"
      >
        <motion.a 
          href="tel:8657495370" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-full glass-card"
        >
          <Phone size={20} />
          <span>8657495370</span>
        </motion.a>
        <motion.a 
          href="mailto:ketakikhanvilkar@gmail.com" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-full glass-card"
        >
          <Mail size={20} />
          <span>ketakikhanvilkar@gmail.com</span>
        </motion.a>
        <motion.a 
          href="https://www.linkedin.com/in/ketaki-khanvilkar-b36874297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
          target="_blank" 
          rel="noopener noreferrer" 
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors px-4 py-2 rounded-full glass-card"
        >
          <Linkedin size={20} />
          <span>LinkedIn</span>
        </motion.a>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute bottom-10"
      >
        <Button
          variant="ghost"
          size="lg"
          onClick={handleScrollToAbout}
          className="rounded-full glass-card"
        >
          <motion.div
            animate={{ y: [0, 5, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
          >
            <ArrowDown size={24} className="text-primary" />
          </motion.div>
        </Button>
      </motion.div>
    </motion.div>
  );
};

export default Hero;
