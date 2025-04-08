
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Calendar, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const Admissions = () => {
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
              Admissions
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg max-w-3xl"
            >
              Join 21st Century International Matriculation School and embark on a journey of academic excellence and holistic development.
            </motion.p>
          </div>
        </div>
        
        <section className="py-12 bg-white">
          <div className="school-container">
            <motion.h2 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-8 text-school-red text-center"
            >
              Admission Process
            </motion.h2>
            
            <motion.div 
              className="grid md:grid-cols-4 gap-6 mb-12"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <motion.div variants={itemVariants}>
                <Card className="border-school-lightred hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <FileText className="h-12 w-12 text-school-red" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Application</h3>
                    <p className="text-school-gray text-center">
                      Complete the online application form or visit our administrative office.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card className="border-school-lightred hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <Clock className="h-12 w-12 text-school-red" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Entrance Test</h3>
                    <p className="text-school-gray text-center">
                      Schedule and complete the entrance assessment appropriate for your grade level.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card className="border-school-lightred hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <Calendar className="h-12 w-12 text-school-red" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Interview</h3>
                    <p className="text-school-gray text-center">
                      Attend a personal interview with our academic coordinators and principal.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div variants={itemVariants}>
                <Card className="border-school-lightred hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      <CheckCircle className="h-12 w-12 text-school-red" />
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2">Confirmation</h3>
                    <p className="text-school-gray text-center">
                      Receive acceptance notification and complete the admission formalities.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
            
            <motion.div 
              className="bg-school-lightgray p-6 md:p-8 rounded-lg max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-xl font-bold mb-4 text-school-red">Required Documents</h3>
              <ul className="space-y-2 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                  <span>Birth Certificate</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                  <span>School Transfer Certificate (for students from other schools)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                  <span>Previous Academic Records</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                  <span>Passport Size Photographs</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                  <span>Aadhaar Card</span>
                </li>
              </ul>
              
              <p className="text-school-gray italic">
                Note: Additional documents may be required based on specific circumstances.
              </p>
            </motion.div>
          </div>
        </section>
        
        <section className="py-12 bg-gradient-to-r from-school-red to-school-darkred text-white">
          <div className="school-container text-center">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-6"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
            >
              Ready to Apply?
            </motion.h2>
            <motion.p 
              className="max-w-2xl mx-auto mb-8"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Applications for the 2025-26 academic year are now open. 
              Secure your child's future with quality education at 21st Century International Matriculation School.
            </motion.p>
            <motion.div 
              className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Button size="lg" className="bg-white text-school-red hover:bg-school-lightgray">
                <a href="#" className="flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  Download Application Form
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white hover:bg-white/10">
                <Link to="/contact" className="flex items-center">
                  Contact Admissions Office
                </Link>
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admissions;
