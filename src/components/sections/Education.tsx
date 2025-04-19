
import { motion } from "framer-motion";
import { GraduationCap, Calendar, School, Award } from "lucide-react";

const education = [
  {
    degree: "Post Graduation Program in Big Data Analytics",
    institution: "Jai Hind College",
    year: "2024",
    details: "Currently pursuing masters with focus on data analysis and machine learning",
    icon: <GraduationCap />
  },
  {
    degree: "Bachelors Degree in Computer Science",
    institution: "",
    year: "2017",
    details: "CGPA: 7.6",
    icon: <School />
  },
  {
    degree: "XII",
    institution: "Pioneer Jr College",
    year: "2021",
    details: "Percentage: 76.00%",
    icon: <Award />
  },
  {
    degree: "X",
    institution: "Rani Laxmibai Mulinchi Sainiki Shala",
    year: "2019",
    details: "Percentage: 80.20%",
    icon: <Award />
  }
];

const Education = () => {
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
        Education
      </motion.h2>

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-[15px] md:left-1/2 top-0 bottom-0 w-[1px] bg-gradient-to-b from-primary/80 via-primary/50 to-primary/20 transform md:-translate-x-[0.5px]" />

        <div className="space-y-12">
          {education.map((edu, index) => (
            <div key={edu.degree} className="relative">
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className={`flex flex-col ${
                  index % 2 === 0 
                    ? 'md:flex-row' 
                    : 'md:flex-row-reverse'
                }`}
              >
                <div className="hidden md:flex w-1/2 justify-center items-center" />
                
                <div className="pl-10 md:pl-0 relative">
                  {/* Timeline dot */}
                  <div className="absolute left-0 md:left-[1px] top-0 w-[30px] h-[30px] bg-background rounded-full border-4 border-primary flex items-center justify-center transform md:-translate-x-[15px]">
                    <motion.div
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1 }}
                      className="text-primary"
                    >
                      {edu.icon}
                    </motion.div>
                  </div>

                  <motion.div
                    whileHover={{ scale: 1.03 }}
                    className={`glass-card p-6 rounded-xl w-full md:w-5/6 ${
                      index % 2 === 0 
                        ? 'md:ml-8' 
                        : 'md:mr-8'
                    }`}
                  >
                    <div className="flex items-center gap-3 mb-3">
                      <Calendar className="text-primary flex-shrink-0" size={20} />
                      <span className="text-muted-foreground font-medium">{edu.year}</span>
                    </div>
                    
                    <h3 className="text-xl font-semibold mb-2 text-foreground">
                      {edu.degree}
                    </h3>
                    
                    {edu.institution && (
                      <p className="text-muted-foreground mb-2">{edu.institution}</p>
                    )}
                    
                    <p className="text-muted-foreground">{edu.details}</p>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default Education;
