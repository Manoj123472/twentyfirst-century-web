
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const MediumSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="school-container">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold text-school-gray mb-4">
              Dual Medium Education: <span className="text-school-red">Tamil & English</span>
            </h2>
            <p className="text-school-gray mb-4">
              We offer education in both Tamil and English mediums, allowing students to 
              learn in the language they are most comfortable with while still gaining 
              proficiency in both languages.
            </p>
            <p className="text-school-gray mb-6">
              Our bilingual approach ensures that students develop strong language skills 
              while preserving cultural identity and preparing them for global opportunities.
            </p>
            <div className="flex space-x-4">
              <Button asChild variant="outline" className="border-school-red text-school-red hover:bg-school-red hover:text-white">
                <Link to="/tamil-medium">Tamil Medium</Link>
              </Button>
              <Button asChild variant="outline" className="border-school-red text-school-red hover:bg-school-red hover:text-white">
                <Link to="/english-medium">English Medium</Link>
              </Button>
            </div>
          </motion.div>
          
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-md mb-4 hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80" 
                  alt="Tamil medium classroom" 
                  className="w-full h-40 object-cover transform hover:scale-105 transition-transform"
                />
                <div className="p-3 bg-school-lightgray">
                  <h3 className="font-medium text-school-red">Tamil Medium</h3>
                  <p className="text-sm text-school-gray">6th to 12th</p>
                </div>
              </div>
            </motion.div>
            <motion.div 
              className="mt-6"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow">
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="English medium classroom" 
                  className="w-full h-40 object-cover transform hover:scale-105 transition-transform"
                />
                <div className="p-3 bg-school-lightgray">
                  <h3 className="font-medium text-school-red">English Medium</h3>
                  <p className="text-sm text-school-gray">Pre-KG to 12th</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediumSection;
