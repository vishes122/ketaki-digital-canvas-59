
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Book } from "lucide-react";

const Contact = () => {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <motion.h2 
          initial={{ y: -20 }}
          whileInView={{ y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl font-bold text-gray-900 mb-12 text-center"
        >
          Contact Me
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <Phone className="text-purple-700" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900">Phone</h3>
                <p className="text-gray-600">8657495370</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Mail className="text-purple-700" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900">Email</h3>
                <p className="text-gray-600">ketakikhanvilkar@gmail.com</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <Linkedin className="text-purple-700" size={24} />
              <div>
                <h3 className="font-semibold text-gray-900">LinkedIn</h3>
                <p className="text-gray-600">Ketaki Khanvilkar</p>
              </div>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-purple-50 p-6 rounded-lg"
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                <span className="font-semibold">Date of Birth:</span> 24/08/2003
              </p>
              <p>
                <span className="font-semibold">Languages Known:</span>
                <br />
                Marathi (R/W/S), Hindi (R/W/S), English (R/W/S)
              </p>
              <div className="flex items-center gap-2">
                <Book className="text-purple-700" size={20} />
                <p>
                  <span className="font-semibold">Hobbies:</span> Reading books, travelling, visiting art galleries and libraries
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
