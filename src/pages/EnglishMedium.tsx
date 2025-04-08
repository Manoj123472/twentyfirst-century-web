
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { motion } from "framer-motion";
import { BookOpen, Users, GraduationCap, Languages } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const EnglishMedium = () => {
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
              English Medium
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg max-w-3xl"
            >
              Comprehensive English medium education from Pre-KG to 12th standard, providing global exposure while maintaining strong connections to local culture.
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
                <h2 className="text-2xl md:text-3xl font-bold text-school-red">English Medium Education</h2>
                <p className="text-school-gray">
                  Our English medium instruction provides global exposure while maintaining strong connections 
                  to local culture and language. At 21st Century International Matriculation School, we offer:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                    <span>International curriculum standards</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                    <span>Tamil taught as second language</span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                    <span>Focus on global competencies</span>
                  </li>
                  <li className="flex items-start">
                    <Languages className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                    <span>Modern teaching methodologies and digital learning</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="rounded-lg overflow-hidden shadow-md"
                variants={itemVariants}
              >
                <img 
                  src="https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80" 
                  alt="English medium classroom" 
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
                English Medium Classes (Pre-KG to 12th)
              </motion.h2>
              
              <div className="grid md:grid-cols-3 gap-6">
                <motion.div 
                  variants={itemVariants}
                  className="bg-school-lightgray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-4 text-school-red">Pre-Primary (Pre-KG - KG)</h3>
                  <p className="text-school-gray mb-4">
                    Our pre-primary program focuses on developing fundamental skills through play-based 
                    learning in an English environment.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Activity-based learning</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>English phonics and vocabulary</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Basic numeracy skills</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Creative arts and music</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="bg-school-lightgray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-4 text-school-red">Primary (1st-5th)</h3>
                  <p className="text-school-gray mb-4">
                    Our primary program builds a strong foundation in core subjects taught in English
                    while nurturing critical thinking and creativity.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>English, Mathematics, Science</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Social Studies and Environmental Science</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Tamil as second language</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Computer education and digital literacy</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="bg-school-lightgray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-4 text-school-red">Middle School (6th-8th)</h3>
                  <p className="text-school-gray mb-4">
                    Our middle school program deepens students' knowledge and skills in an English 
                    medium environment with a focus on analytical thinking.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Advanced English literature and language</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Higher Mathematics and Science</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Social Sciences and Geography</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Computer science and programming basics</span>
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
                Higher Secondary (9th-12th)
              </motion.h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-6">
                <motion.div 
                  variants={itemVariants}
                  className="bg-school-lightgray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow"
                >
                  <h3 className="text-xl font-bold mb-4 text-school-red">Secondary (9th-10th)</h3>
                  <p className="text-school-gray mb-4">
                    Our secondary program prepares students for board examinations with comprehensive 
                    English medium instruction across all subjects.
                  </p>
                  <ul className="space-y-1">
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>English Literature and Language</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Mathematics and Science (Physics, Chemistry, Biology)</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Social Sciences and History</span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-school-red mr-2">•</span>
                      <span>Board exam preparation and practice tests</span>
                    </li>
                  </ul>
                </motion.div>
                
                <motion.div 
                  variants={itemVariants}
                  className="bg-school-lightgray p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow col-span-1 md:col-span-2"
                >
                  <h3 className="text-xl font-bold mb-4 text-school-red">Higher Secondary (11th-12th)</h3>
                  <p className="text-school-gray mb-4">
                    Our higher secondary program offers specialized streams to prepare students for college and career paths.
                  </p>
                  
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <h4 className="font-semibold text-school-red mb-2">Bio-Maths Group</h4>
                      <ul className="space-y-1 mb-4">
                        <li className="text-sm">Physics</li>
                        <li className="text-sm">Chemistry</li>
                        <li className="text-sm">Biology</li>
                        <li className="text-sm">Mathematics</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-school-red mb-2">Computer Science Group</h4>
                      <ul className="space-y-1 mb-4">
                        <li className="text-sm">Physics</li>
                        <li className="text-sm">Chemistry</li>
                        <li className="text-sm">Computer Science</li>
                        <li className="text-sm">Mathematics</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-school-red mb-2">Arts Group</h4>
                      <ul className="space-y-1 mb-4">
                        <li className="text-sm">History</li>
                        <li className="text-sm">Economics</li>
                        <li className="text-sm">Commerce</li>
                        <li className="text-sm">Political Science</li>
                      </ul>
                    </div>
                  </div>
                  
                  <p className="text-school-gray text-sm italic">
                    All streams include English, Tamil/Hindi as language subjects, with specialized curriculum for competitive exams.
                  </p>
                </motion.div>
              </div>
              
              <motion.div 
                className="mt-12 text-center"
                variants={itemVariants}
              >
                <Button asChild className="bg-school-red hover:bg-school-darkred">
                  <Link to="/admissions">Apply for English Medium</Link>
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

export default EnglishMedium;
