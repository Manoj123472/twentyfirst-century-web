
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from "framer-motion";
import { BookOpen, Users, GraduationCap, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const TamilMedium = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.2
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-school-red py-12 md:py-24 text-white">
          <div className="school-container">
            <motion.h1 
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-5xl font-bold mb-4"
            >
              Tamil Medium
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg max-w-3xl"
            >
              Quality education in Tamil medium from 6th to 12th standard with a focus on preserving cultural heritage while preparing students for academic excellence.
            </motion.p>
          </div>
        </div>
        
        <section className="py-12 bg-white">
          <div className="school-container">
            <motion.div 
              className="grid md:grid-cols-2 gap-10 items-center mb-12"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              viewport={{ once: true }}
            >
              <motion.div className="space-y-4" variants={itemVariants}>
                <h2 className="text-2xl md:text-3xl font-bold text-school-red">Tamil Medium Education</h2>
                <p className="text-school-gray">
                  Our Tamil medium instruction follows the state curriculum with emphasis on preserving cultural heritage 
                  while preparing students for academic excellence. At 21st Century International Matriculation School, we offer:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                    <span>Strong foundation in Tamil language and literature</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                    <span>English taught as second language</span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                    <span>Cultural curriculum integration</span>
                  </li>
                  <li className="flex items-start">
                    <Languages className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                    <span>Focus on academic excellence and cultural pride</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="rounded-lg overflow-hidden shadow-md"
                variants={itemVariants}
              >
                <img 
                  src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80" 
                  alt="Tamil medium classroom" 
                  className="w-full h-auto"
                />
              </motion.div>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-12"
            >
              <motion.h2 
                variants={itemVariants} 
                className="text-2xl md:text-3xl font-bold mb-6 text-school-red text-center"
              >
                Tamil Medium Classes (6th to 12th)
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div 
                  variants={itemVariants}
                  className="bg-school-lightgray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-4 text-school-red">Middle School (6th-8th)</h3>
                  <p className="text-school-gray mb-4">
                    Our middle school program builds a strong foundation in Tamil language and literature 
                    while teaching all core subjects including Mathematics, Science, and Social Studies.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Subjects: Tamil, English, Mathematics, Science, Social Science</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Focus on state board curriculum</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Regular assessments and parental feedback</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="bg-school-lightgray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-4 text-school-red">High School (9th-10th)</h3>
                  <p className="text-school-gray mb-4">
                    Our high school program prepares students for board examinations with rigorous academic 
                    training while preserving cultural values and language skills.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Core subjects: Tamil, English, Mathematics, Science, Social Science</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Board exam preparation</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Career guidance and counseling</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
            </motion.div>
            
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.h2 
                variants={itemVariants} 
                className="text-2xl md:text-3xl font-bold mb-6 text-school-red text-center"
              >
                Higher Secondary (11th-12th)
              </motion.h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div 
                  variants={itemVariants}
                  className="bg-school-lightgray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-4 text-school-red">Bio-Maths Group</h3>
                  <p className="text-school-gray mb-4">
                    Ideal for students pursuing careers in medicine, engineering, and related fields.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Physics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Chemistry</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Biology</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Mathematics</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="bg-school-lightgray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-4 text-school-red">Computer Science Group</h3>
                  <p className="text-school-gray mb-4">
                    Perfect for students interested in technology, programming, and computer engineering.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Physics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Chemistry</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Computer Science</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Mathematics</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="bg-school-lightgray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-4 text-school-red">Arts Group</h3>
                  <p className="text-school-gray mb-4">
                    For students with interests in humanities, social sciences, and business studies.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>History</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Economics</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Commerce</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Political Science</span>
                    </li>
                  </ul>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-12 text-center"
                variants={itemVariants}
              >
                <Button asChild className="bg-school-red hover:bg-school-darkred">
                  <Link to="/admissions">Apply for Tamil Medium</Link>
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default TamilMedium;
