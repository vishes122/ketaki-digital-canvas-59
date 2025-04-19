
import { motion } from "framer-motion";
import { BarChart, TrendingUp, Database, PieChart } from "lucide-react";

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
    ],
    icon: <PieChart className="w-12 h-12" />
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
    ],
    icon: <TrendingUp className="w-12 h-12" />
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
    ],
    icon: <Database className="w-12 h-12" />
  },
  {
    title: "Predictive Analysis of Customer Behavior",
    description: "Developed predictive models to analyze and forecast customer purchasing patterns and preferences.",
    technologies: ["Machine Learning", "Python", "Scikit-Learn"],
    highlights: [
      "Implemented classification algorithms",
      "Achieved 87% prediction accuracy",
      "Created customer segmentation models",
      "Developed interactive visualization dashboard"
    ],
    icon: <BarChart className="w-12 h-12" />
  }
];

const Projects = () => {
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
        Projects
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {projects.map((project, index) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            whileHover={{ y: -10 }}
            className="glass-card rounded-xl overflow-hidden group h-full"
          >
            <div className="h-32 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-accent/30 flex items-center justify-center">
                <motion.div 
                  initial={{ scale: 0.8 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-white/90 transform group-hover:scale-110 transition-transform duration-300"
                >
                  {project.icon}
                </motion.div>
              </div>
            </div>
            
            <div className="p-8">
              <h3 className="text-xl font-semibold mb-3 group-hover:text-gradient transition-colors duration-300">
                {project.title}
              </h3>
              
              <p className="text-muted-foreground mb-4 text-sm">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-medium"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <ul className="space-y-2">
                {project.highlights.map((highlight, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.5 + i * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2 text-muted-foreground text-sm"
                  >
                    <span className="w-2 h-2 bg-primary rounded-full mt-1.5 flex-shrink-0" />
                    <span>{highlight}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default Projects;
