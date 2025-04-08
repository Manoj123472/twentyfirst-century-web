
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const MediumSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const imageHoverVariants = {
    rest: { scale: 1, transition: { duration: 0.3, ease: "easeOut" } },
    hover: { scale: 1.05, transition: { duration: 0.3, ease: "easeOut" } }
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: { scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } },
    tap: { scale: 0.95 }
  };

  return (
    <section className="py-16 bg-white overflow-hidden">
      <div className="school-container">
        <motion.div 
          className="grid md:grid-cols-2 gap-8 items-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
        >
          <motion.div variants={itemVariants}>
            <motion.h2 
              className="text-3xl font-bold text-school-gray mb-4"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              Dual Medium Education: <span className="text-school-red">Tamil & English</span>
            </motion.h2>
            <motion.p 
              className="text-school-gray mb-4"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
            >
              We offer education in both Tamil and English mediums, allowing students to 
              learn in the language they are most comfortable with while still gaining 
              proficiency in both languages.
            </motion.p>
            <motion.p 
              className="text-school-gray mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Our bilingual approach ensures that students develop strong language skills 
              while preserving cultural identity and preparing them for global opportunities.
            </motion.p>
            <motion.div 
              className="flex space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Button asChild variant="outline" className="border-school-red text-school-red hover:bg-school-red hover:text-white">
                  <Link to="/tamil-medium">Tamil Medium</Link>
                </Button>
              </motion.div>
              <motion.div
                variants={buttonVariants}
                initial="rest"
                whileHover="hover"
                whileTap="tap"
              >
                <Button asChild variant="outline" className="border-school-red text-school-red hover:bg-school-red hover:text-white">
                  <Link to="/english-medium">English Medium</Link>
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="rounded-lg overflow-hidden shadow-md mb-4 hover:shadow-lg transition-shadow"
                initial="rest"
                whileHover="hover"
                variants={imageHoverVariants}
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80" 
                  alt="Tamil medium classroom" 
                  className="w-full h-40 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="p-3 bg-school-lightgray"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-medium text-school-red">Tamil Medium</h3>
                  <p className="text-sm text-school-gray">6th to 12th</p>
                </motion.div>
              </motion.div>
            </motion.div>
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, x: 20, y: -20 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                initial="rest"
                whileHover="hover"
                variants={imageHoverVariants}
              >
                <motion.img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="English medium classroom" 
                  className="w-full h-40 object-cover"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.5 }}
                />
                <motion.div 
                  className="p-3 bg-school-lightgray"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  viewport={{ once: true }}
                >
                  <h3 className="font-medium text-school-red">English Medium</h3>
                  <p className="text-sm text-school-gray">Pre-KG to 12th</p>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MediumSection;
