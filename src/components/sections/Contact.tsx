
import { motion } from "framer-motion";
import { Mail, Phone, Linkedin, Book, MapPin, User, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
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
        Contact Me
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div
          initial={{ x: -30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Get In Touch</h3>
          
          <div className="space-y-6">
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Phone</h4>
                <p className="text-muted-foreground">8657495370</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Email</h4>
                <p className="text-muted-foreground">ketakikhanvilkar@gmail.com</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <Linkedin className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-foreground">LinkedIn</h4>
                <p className="text-muted-foreground">Ketaki Khanvilkar</p>
              </div>
            </motion.div>
            
            <motion.div 
              whileHover={{ x: 5 }}
              className="flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                <MapPin className="text-primary" size={20} />
              </div>
              <div>
                <h4 className="font-medium text-foreground">Location</h4>
                <p className="text-muted-foreground">Mumbai, India</p>
              </div>
            </motion.div>
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-8 space-y-4 bg-primary/5 p-6 rounded-xl"
          >
            <h4 className="text-lg font-medium text-foreground">Personal Information</h4>
            
            <div className="flex items-center gap-3">
              <Calendar className="text-primary flex-shrink-0" size={18} />
              <div>
                <span className="text-muted-foreground">Date of Birth:</span>
                <span className="ml-2">24/08/2003</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <User className="text-primary flex-shrink-0" size={18} />
              <div>
                <span className="text-muted-foreground">Languages:</span>
                <span className="ml-2">Marathi, Hindi, English</span>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Book className="text-primary flex-shrink-0 mt-1" size={18} />
              <div>
                <span className="text-muted-foreground">Hobbies:</span>
                <span className="ml-2">Reading books, traveling, visiting art galleries and libraries</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
        
        <motion.div
          initial={{ x: 30, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="glass-card p-8 rounded-xl"
        >
          <h3 className="text-2xl font-semibold mb-6 text-foreground">Send a Message</h3>
          
          <form className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-muted-foreground">
                  Your Name
                </label>
                <Input 
                  id="name" 
                  placeholder="John Doe" 
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                  Email Address
                </label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com" 
                  className="bg-background/50 border-primary/20 focus:border-primary"
                />
              </div>
            </div>
            
            <div className="space-y-2">
              <label htmlFor="subject" className="text-sm font-medium text-muted-foreground">
                Subject
              </label>
              <Input 
                id="subject" 
                placeholder="How can I help you?" 
                className="bg-background/50 border-primary/20 focus:border-primary"
              />
            </div>
            
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-muted-foreground">
                Your Message
              </label>
              <Textarea 
                id="message" 
                placeholder="Write your message here..." 
                className="min-h-[150px] bg-background/50 border-primary/20 focus:border-primary"
              />
            </div>
            
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity"
              >
                Send Message
              </Button>
            </motion.div>
          </form>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Contact;
