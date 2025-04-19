import { Github, Linkedin, Mail, Heart } from "lucide-react";
import { motion } from "framer-motion";

export function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className="w-full py-12 px-6 glass-card mt-20 relative"
    >
      <div className="container mx-auto">
        <motion.div 
          className="flex flex-col md:flex-row justify-between items-center gap-8"
        >
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col items-center md:items-start space-y-4"
          >
            <p className="text-xl font-bold text-gradient">
              Ketaki Khanvilkar
            </p>
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © {currentYear} Made with <Heart className="inline-block w-4 h-4 text-red-500 animate-pulse" /> by Ketaki 
            </p>
            <p className="text-xs text-muted-foreground/70 text-center md:text-left max-w-xs">
              Big Data Analyst with a passion for deriving insights from complex datasets
            </p>
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col items-center md:items-end space-y-4"
          >
            <div className="text-sm font-medium text-gradient">Connect With Me</div>
            <div className="flex space-x-6">
              <motion.a 
                href="https://github.com/kkkkkkk24" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Github size={24} />
                <span className="sr-only">GitHub</span>
              </motion.a>
              <motion.a 
                href="https://www.linkedin.com/in/ketaki-khanvilkar-b36874297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: -5 }}
              >
                <Linkedin size={24} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a 
                href="mailto:ketakikhanvilkar@gmail.com" 
                className="text-muted-foreground hover:text-primary transition-colors"
                whileHover={{ scale: 1.2, rotate: 5 }}
              >
                <Mail size={24} />
                <span className="sr-only">Email</span>
              </motion.a>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
}
