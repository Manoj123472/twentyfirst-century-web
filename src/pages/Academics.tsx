
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from '@/components/ui/card';
import { BookOpen, Users, GraduationCap, Languages } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Academics = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-school-red py-12 md:py-24 text-white">
          <div className="school-container">
            <motion.h1 
              className="text-3xl md:text-5xl font-bold mb-4"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Academics
            </motion.h1>
            <motion.p 
              className="text-lg max-w-3xl"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Discover our comprehensive curriculum designed to nurture intellectual growth and holistic development.
            </motion.p>
          </div>
        </div>
        
        <section className="py-12 bg-white">
          <div className="school-container">
            <div className="grid md:grid-cols-2 gap-10 items-center mb-12">
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl md:text-3xl font-bold text-school-red">Our Educational Approach</h2>
                <p className="text-school-gray">
                  At 21st Century International Matriculation School, we follow a balanced curriculum that 
                  integrates academic rigor with co-curricular activities. Our educational approach focuses on:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <BookOpen className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                    <span>Conceptual understanding through experiential learning</span>
                  </li>
                  <li className="flex items-start">
                    <Users className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                    <span>Collaborative learning and teamwork</span>
                  </li>
                  <li className="flex items-start">
                    <GraduationCap className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                    <span>Critical thinking and problem-solving skills</span>
                  </li>
                  <li className="flex items-start">
                    <Languages className="h-5 w-5 text-school-red mr-2 flex-shrink-0 mt-0.5" />
                    <span>Bilingual proficiency in Tamil and English</span>
                  </li>
                </ul>
              </motion.div>
              
              <motion.div 
                className="rounded-lg overflow-hidden shadow-md"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Students in classroom" 
                  className="w-full h-auto"
                />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: 0.3 }}
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-8 text-school-red text-center">Our Programs</h2>
              
              <Tabs defaultValue="pre-primary" className="w-full">
                <TabsList className="grid grid-cols-2 md:grid-cols-4 w-full mb-8">
                  <TabsTrigger value="pre-primary">Pre-Primary</TabsTrigger>
                  <TabsTrigger value="primary">Primary</TabsTrigger>
                  <TabsTrigger value="middle">Middle School</TabsTrigger>
                  <TabsTrigger value="high">High School</TabsTrigger>
                </TabsList>
                
                <TabsContent value="pre-primary">
                  <motion.div {...fadeIn}>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-4 text-school-red">Pre-Primary (Pre-KG)</h3>
                        <p className="text-school-gray mb-4">
                          Our pre-primary program focuses on developing fundamental skills through play-based 
                          learning. We emphasize physical, cognitive, and social-emotional development in a 
                          nurturing environment.
                        </p>
                        <h4 className="font-semibold text-school-gray mb-2">Key Focus Areas:</h4>
                        <ul className="space-y-1 mb-4">
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Motor skills development</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Language acquisition</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Basic numeracy</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Creative expression</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Social skills</span>
                          </li>
                        </ul>
                        <p className="text-school-gray italic text-sm">
                          Available in English Medium only
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="primary">
                  <motion.div {...fadeIn}>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-4 text-school-red">Primary (Grades 1-5)</h3>
                        <p className="text-school-gray mb-4">
                          The primary program builds a strong foundation in core subjects while encouraging 
                          curiosity and independent thinking. Students develop essential academic skills.
                        </p>
                        <h4 className="font-semibold text-school-gray mb-2">Curriculum Includes:</h4>
                        <ul className="space-y-1 mb-4">
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Language Arts (Tamil and English)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Mathematics</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Science</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Social Studies</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Art, Music, and Physical Education</span>
                          </li>
                        </ul>
                        <p className="text-school-gray italic text-sm">
                          Available in English Medium only
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="middle">
                  <motion.div {...fadeIn}>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-4 text-school-red">Middle School (Grades 6-8)</h3>
                        <p className="text-school-gray mb-4">
                          The middle school program deepens students' knowledge and skills while preparing them 
                          for high school. Focus is placed on analytical thinking and practical application of concepts.
                        </p>
                        <h4 className="font-semibold text-school-gray mb-2">Academic Structure:</h4>
                        <ul className="space-y-1 mb-4">
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Advanced Language Studies</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Higher Mathematics</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Physical and Biological Sciences</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>History and Geography</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Computer Science</span>
                          </li>
                        </ul>
                        <p className="text-school-gray italic text-sm">
                          Available in both Tamil Medium and English Medium
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
                
                <TabsContent value="high">
                  <motion.div {...fadeIn}>
                    <Card>
                      <CardContent className="pt-6">
                        <h3 className="text-xl font-bold mb-4 text-school-red">High School (Grades 9-12)</h3>
                        <p className="text-school-gray mb-4">
                          Our high school program follows the Matriculation curriculum with a focus on college 
                          preparation. Students receive specialized instruction to excel in board examinations 
                          and competitive tests.
                        </p>
                        <h4 className="font-semibold text-school-gray mb-2">Streams Offered (11th-12th):</h4>
                        <ul className="space-y-1 mb-4">
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Bio-Maths (Physics, Chemistry, Biology, Mathematics)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Computer Science (Physics, Chemistry, Computer Science, Mathematics)</span>
                          </li>
                          <li className="flex items-start">
                            <span className="text-school-red mr-2">•</span>
                            <span>Arts (History, Economics, Commerce, Political Science)</span>
                          </li>
                        </ul>
                        <p className="text-school-gray mb-2">
                          Additional focus on competitive exam preparation for JEE, NEET, and other entrance examinations.
                        </p>
                        <p className="text-school-gray italic text-sm">
                          Available in both Tamil Medium and English Medium
                        </p>
                      </CardContent>
                    </Card>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>
        
        <section className="py-12 bg-school-lightgray">
          <div className="school-container">
            <motion.h2 
              className="text-2xl md:text-3xl font-bold mb-8 text-school-red text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              Medium of Instruction
            </motion.h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <Card className="border-school-lightred hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 text-center text-school-red">Tamil Medium</h3>
                    <p className="text-school-gray mb-4">
                      Our Tamil medium instruction follows the state curriculum with emphasis on 
                      preserving cultural heritage while preparing students for academic excellence.
                    </p>
                    <ul className="space-y-1 mb-6">
                      <li className="flex items-start">
                        <span className="text-school-red mr-2">•</span>
                        <span>Strong foundation in Tamil language and literature</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-red mr-2">•</span>
                        <span>English taught as second language</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-red mr-2">•</span>
                        <span>Cultural curriculum integration</span>
                      </li>
                    </ul>
                    <p className="text-school-gray mb-4 font-semibold">
                      Available for Classes 6th to 12th
                    </p>
                    <div className="text-center">
                      <Button asChild variant="outline" className="border-school-red text-school-red hover:bg-school-red hover:text-white">
                        <Link to="/tamil-medium">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <Card className="border-school-lightred hover:shadow-md transition-shadow h-full">
                  <CardContent className="pt-6">
                    <h3 className="text-xl font-bold mb-4 text-center text-school-red">English Medium</h3>
                    <p className="text-school-gray mb-4">
                      Our English medium instruction provides global exposure while maintaining 
                      strong connections to local culture and language.
                    </p>
                    <ul className="space-y-1 mb-6">
                      <li className="flex items-start">
                        <span className="text-school-red mr-2">•</span>
                        <span>International curriculum standards</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-red mr-2">•</span>
                        <span>Tamil taught as second language</span>
                      </li>
                      <li className="flex items-start">
                        <span className="text-school-red mr-2">•</span>
                        <span>Focus on global competencies</span>
                      </li>
                    </ul>
                    <p className="text-school-gray mb-4 font-semibold">
                      Available for Pre-KG to 12th
                    </p>
                    <div className="text-center">
                      <Button asChild variant="outline" className="border-school-red text-school-red hover:bg-school-red hover:text-white">
                        <Link to="/english-medium">Learn More</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Academics;
