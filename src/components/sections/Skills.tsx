
import { motion } from "framer-motion";

const skillCategories = [
  {
    title: "Statistical Analysis",
    skills: [
      "Central Tendency Measures",
      "Hypothesis Testing",
      "Z-test & T-test",
      "Correlation Analysis"
    ]
  },
  {
    title: "Programming & Tools",
    skills: [
      "Python (Scikit-Learn, Pandas, NumPy)",
      "SQL (Learning)",
      "Tableau",
      "Machine Learning Algorithms"
    ]
  },
  {
    title: "Data Processing",
    skills: [
      "Data Cleaning",
      "Feature Scaling",
      "Dimensionality Reduction",
      "Data Visualization"
    ]
  }
];

const Skills = () => {
  return (
    <section className="py-20 px-4 bg-purple-50">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          Skills & Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <h3 className="text-xl font-semibold text-purple-700 mb-4">
                {category.title}
              </h3>
              <ul className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.li
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: skillIndex * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2 text-gray-600"
                  >
                    <span className="w-2 h-2 bg-purple-500 rounded-full"></span>
                    {skill}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
