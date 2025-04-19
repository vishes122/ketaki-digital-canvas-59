
import { motion } from "framer-motion";

const education = [
  {
    degree: "Post Graduation Program in Big Data Analytics",
    institution: "Jai Hind College",
    year: "2024",
    details: "Currently pursuing masters with focus on data analysis and machine learning"
  },
  {
    degree: "Bachelors Degree in Computer Science",
    institution: "",
    year: "2017",
    details: "CGPA: 7.6"
  },
  {
    degree: "XII",
    institution: "Pioneer Jr College",
    year: "2021",
    details: "Percentage: 76.00%"
  },
  {
    degree: "X",
    institution: "Rani Laxmibai Mulinchi Sainiki Shala",
    year: "2019",
    details: "Percentage: 80.20%"
  }
];

const Education = () => {
  return (
    <section className="py-20 px-4 bg-purple-50">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          Education
        </motion.h2>
        <div className="space-y-8">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex flex-col md:flex-row justify-between mb-2">
                <h3 className="text-xl font-semibold text-purple-700">
                  {edu.degree}
                </h3>
                <span className="text-gray-500">{edu.year}</span>
              </div>
              {edu.institution && (
                <p className="text-gray-600 mb-2">{edu.institution}</p>
              )}
              <p className="text-gray-600">{edu.details}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
