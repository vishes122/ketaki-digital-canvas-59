
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-20 px-4 bg-white"
    >
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-8 text-center"
        >
          About Me
        </motion.h2>
        <motion.div 
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-lg text-gray-600 space-y-6"
        >
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
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
