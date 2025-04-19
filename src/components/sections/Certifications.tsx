
import { motion } from "framer-motion";
import { FileText } from "lucide-react";

const certifications = [
  {
    title: "Machine Learning Crash Course: Logistic Regression",
    issuer: "Google Developer Program",
    date: "January 2024",
    link: "https://developers.google.com/machine-learning/crash-course/logistic-regression/video-lecture"
  },
  {
    title: "Machine Learning Crash Course: Linear Regression",
    issuer: "Google Developer Program",
    date: "January 2024",
    link: "https://developers.google.com/machine-learning/crash-course/linear-regression/video-lecture"
  },
  {
    title: "Big Data Computing",
    issuer: "NPTEL",
    date: "2023",
    link: "#"
  }
];

const Certifications = () => {
  return (
    <section className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center"
        >
          Certifications
        </motion.h2>
        <div className="grid gap-8">
          {certifications.map((cert, index) => (
            <motion.a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={cert.title}
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              className="block p-6 bg-purple-50 dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-all"
            >
              <div className="flex items-start gap-4">
                <FileText className="w-6 h-6 text-purple-600 dark:text-purple-400 mt-1" />
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {cert.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {cert.issuer}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    {cert.date}
                  </p>
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
