
import { motion } from "framer-motion";
import { UserCircle, FileText, Briefcase, Globe } from "lucide-react";

const About = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="container mx-auto"
    >
      <motion.h2 
        initial={{ y: -20 }}
        whileInView={{ y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-center text-gradient mb-16"
      >
        About Me
      </motion.h2>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="lg:order-1 order-2"
        >
          <h3 className="text-2xl font-semibold mb-6 flex items-center gap-3">
            <UserCircle className="text-primary" size={28} />
            <span>Who I Am</span>
          </h3>
          
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              I am a student at Jai Hind College, pursuing a Master's in Big Data Analytics. As an aspiring Big Data analyst,
              I have developed a strong foundation in data analysis, Machine Learning, and statistical concepts along with
              data visualization techniques.
            </p>
            <p>
              I am passionate about deriving actionable insights from complex datasets and leveraging big data technologies
              to solve real-world problems. My expertise includes statistical analysis, data preprocessing, and machine
              learning algorithms implementation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            <motion.div 
              whileHover={{ scale: 1.03, rotateZ: 1 }}
              className="glass-card p-5 rounded-xl hover:border-primary/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <FileText className="text-primary" size={20} />
                <h4 className="font-semibold">Education</h4>
              </div>
              <p className="text-muted-foreground">Master's in Big Data Analytics</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03, rotateZ: -1 }}
              className="glass-card p-5 rounded-xl hover:border-primary/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <Briefcase className="text-primary" size={20} />
                <h4 className="font-semibold">Experience</h4>
              </div>
              <p className="text-muted-foreground">Data Analysis Projects</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03, rotateZ: 1 }}
              className="glass-card p-5 rounded-xl hover:border-primary/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <Globe className="text-primary" size={20} />
                <h4 className="font-semibold">Languages</h4>
              </div>
              <p className="text-muted-foreground">English, Hindi, Marathi</p>
            </motion.div>
            
            <motion.div 
              whileHover={{ scale: 1.03, rotateZ: -1 }}
              className="glass-card p-5 rounded-xl hover:border-primary/20"
            >
              <div className="flex items-center gap-3 mb-3">
                <UserCircle className="text-primary" size={20} />
                <h4 className="font-semibold">Birth Date</h4>
              </div>
              <p className="text-muted-foreground">24/08/2003</p>
            </motion.div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
          className="lg:order-2 order-1 flex justify-center"
        >
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="relative w-full max-w-md p-8 glass-card rounded-2xl overflow-hidden"
          >
            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-gradient">Professional Summary</h3>
              <p className="text-muted-foreground">
                Passionate about deriving actionable insights from complex datasets 
                and leveraging big data technologies to solve real-world problems. 
                My expertise includes statistical analysis, data preprocessing, and 
                machine learning algorithms implementation.
              </p>
              <div className="h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
              <p className="text-muted-foreground">
                Currently pursuing Master's in Big Data Analytics at Jai Hind College,
                focusing on developing strong foundations in data analysis, Machine Learning,
                and statistical concepts along with data visualization techniques.
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default About;
