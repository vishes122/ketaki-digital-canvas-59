
import { motion } from "framer-motion";
import { FileText, ExternalLink, Award, Calendar } from "lucide-react";

const certifications = [
  {
    title: "Machine Learning Crash Course: Logistic Regression",
    issuer: "Google Developer Program",
    date: "January 2024",
    link: "https://developers.google.com/machine-learning/crash-course/logistic-regression/video-lecture",
    description: "Comprehensive training on logistic regression algorithms and their applications in machine learning models."
  },
  {
    title: "Machine Learning Crash Course: Linear Regression",
    issuer: "Google Developer Program",
    date: "January 2024",
    link: "https://developers.google.com/machine-learning/crash-course/linear-regression/video-lecture",
    description: "In-depth study of linear regression techniques for predictive modeling and data analysis."
  },
  {
    title: "Big Data Computing",
    issuer: "NPTEL",
    date: "2023",
    link: "#",
    description: "Comprehensive course covering big data frameworks, distributed computing, and data processing at scale."
  }
];

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, type: "spring" }
    }
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
      className="container mx-auto"
    >
      <motion.h2 
        variants={itemVariants}
        className="text-4xl font-bold text-center text-gradient mb-16"
      >
        Certifications
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {certifications.map((cert, index) => (
          <motion.a
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            key={cert.title}
            variants={itemVariants}
            whileHover={{ y: -10, scale: 1.02 }}
            className="glass-card rounded-xl overflow-hidden group h-full"
          >
            <div className="h-40 bg-gradient-to-r from-primary/40 to-accent/40 flex items-center justify-center">
              <Award className="w-20 h-20 text-white/80 group-hover:scale-110 transition-transform duration-300" />
            </div>
            
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-2 group-hover:text-gradient transition-all duration-300">
                {cert.title}
              </h3>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-1">
                <FileText size={16} />
                <span>{cert.issuer}</span>
              </div>
              
              <div className="flex items-center gap-2 text-muted-foreground mb-4">
                <Calendar size={16} />
                <span>{cert.date}</span>
              </div>
              
              <p className="text-muted-foreground text-sm mb-4">
                {cert.description}
              </p>
              
              <div className="flex items-center gap-2 text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span>View Certificate</span>
                <ExternalLink size={16} />
              </div>
            </div>
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
};

export default Certifications;
