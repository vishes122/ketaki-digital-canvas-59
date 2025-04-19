
import { motion } from "framer-motion";
import { PieChart, BarChart, FileCheck, Database } from "lucide-react";

const skillCategories = [
  {
    title: "Statistical Analysis",
    icon: <PieChart className="w-8 h-8 text-primary" />,
    skills: [
      "Central Tendency Measures",
      "Hypothesis Testing",
      "Z-test & T-test",
      "Correlation Analysis",
      "Regression Analysis"
    ]
  },
  {
    title: "Programming & Tools",
    icon: <FileCheck className="w-8 h-8 text-primary" />,
    skills: [
      "Python (Scikit-Learn, Pandas, NumPy)",
      "SQL (Learning)",
      "Tableau",
      "Machine Learning Algorithms",
      "Data Visualization"
    ]
  },
  {
    title: "Data Processing",
    icon: <Database className="w-8 h-8 text-primary" />,
    skills: [
      "Data Cleaning",
      "Feature Scaling",
      "Dimensionality Reduction",
      "Data Visualization",
      "ETL Processes"
    ]
  },
  {
    title: "Machine Learning",
    icon: <BarChart className="w-8 h-8 text-primary" />,
    skills: [
      "Supervised Learning",
      "Unsupervised Learning",
      "Model Evaluation",
      "Feature Engineering",
      "Hyperparameter Tuning"
    ]
  }
];

const Skills = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 }
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
        Skills & Expertise
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {skillCategories.map((category, index) => (
          <motion.div
            key={category.title}
            variants={itemVariants}
            whileHover={{ scale: 1.03 }}
            className="glass-card p-8 rounded-xl relative overflow-hidden group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="flex items-center mb-6">
              <motion.div 
                initial={{ rotate: 0 }}
                whileHover={{ rotate: [0, -10, 10, -5, 5, 0], transition: { duration: 0.5 } }}
              >
                {category.icon}
              </motion.div>
              <h3 className="text-xl font-semibold ml-3 text-foreground">
                {category.title}
              </h3>
            </div>
            
            <ul className="space-y-3">
              {category.skills.map((skill, skillIndex) => (
                <motion.li
                  key={skill}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 text-muted-foreground"
                >
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  {skill}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      <motion.div 
        variants={itemVariants}
        className="mt-16 glass-card p-8 rounded-xl"
      >
        <h3 className="text-2xl font-semibold mb-6 text-center">Technical Proficiency</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { name: "Python", level: 80 },
            { name: "Statistical Analysis", level: 85 },
            { name: "Data Visualization", level: 75 },
            { name: "SQL", level: 60 },
            { name: "Tableau", level: 70 },
            { name: "Machine Learning", level: 75 }
          ].map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: index * 0.1 }}
              viewport={{ once: true }}
              className="space-y-2"
            >
              <div className="flex justify-between">
                <span className="font-medium">{skill.name}</span>
                <span className="text-primary">{skill.level}%</span>
              </div>
              <div className="w-full h-3 bg-secondary/50 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  transition={{ duration: 1, delay: 0.2 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="h-full bg-gradient-to-r from-primary/60 to-primary rounded-full"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Skills;
