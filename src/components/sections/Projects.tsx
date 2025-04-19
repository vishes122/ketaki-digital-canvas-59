
import { motion } from "framer-motion";

const projects = [
  {
    title: "Self Analysis of Spending Patterns",
    description: "Analyzed personal spending patterns using statistical methods to optimize expenditures. Created visualizations and implemented regression analysis for expense predictions.",
    technologies: ["Python", "Statistics", "Data Visualization"],
    highlights: [
      "Analyzed daily expenses across multiple categories",
      "Applied statistical analysis (mean, median, mode)",
      "Created regression plots and bar charts",
      "Provided budget optimization recommendations"
    ]
  },
  {
    title: "Statistical Analysis of Car Selling Price",
    description: "Conducted comprehensive analysis of factors influencing car prices using statistical methods and visualization techniques.",
    technologies: ["Statistical Analysis", "Data Visualization", "Regression Modeling"],
    highlights: [
      "Performed correlation analysis and chi-square tests",
      "Created line graphs and heat maps",
      "Analyzed pricing patterns across brands",
      "Studied impact of fuel types on pricing"
    ]
  },
  {
    title: "COVID-19 Data Analysis",
    description: "Analyzed global COVID-19 datasets to identify trends and predict future cases using time-series forecasting.",
    technologies: ["Python", "Apache Spark", "Tableau"],
    highlights: [
      "Applied ARIMA and Prophet models",
      "Built dynamic Tableau dashboards",
      "Optimized data processing with Apache Spark",
      "Provided resource allocation recommendations"
    ]
  }
];

const Projects = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <motion.h2 
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          Projects
        </motion.h2>
        <div className="grid grid-cols-1 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-purple-50 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-2xl font-semibold text-purple-700 mb-4">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {project.description}
              </p>
              <div className="mb-4 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-purple-200 text-purple-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {project.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {highlight}
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

export default Projects;
