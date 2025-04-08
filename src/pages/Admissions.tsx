
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { CheckCircle, FileText, Calendar, Clock } from 'lucide-react';

const Admissions = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-school-red py-12 md:py-24 text-white">
          <div className="school-container">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">Admissions</h1>
            <p className="text-lg max-w-3xl animate-slide-in">
              Join 21st Century International Matriculation School and embark on a journey of academic excellence and holistic development.
            </p>
          </div>
        </div>
        
        <section className="py-12 bg-white">
          <div className="school-container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-school-red text-center">Admission Process</h2>
            
            <div className="grid md:grid-cols-4 gap-6 mb-12">
              <Card className="border-school-lightred hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: "0.1s"}}>
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
              
              <Card className="border-school-lightred hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: "0.2s"}}>
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
              
              <Card className="border-school-lightred hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: "0.3s"}}>
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
              
              <Card className="border-school-lightred hover:shadow-md transition-shadow animate-fade-in" style={{animationDelay: "0.4s"}}>
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
            </div>
            
            <div className="bg-school-lightgray p-6 md:p-8 rounded-lg max-w-4xl mx-auto animate-fade-in">
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
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-gradient-to-r from-school-red to-school-darkred text-white">
          <div className="school-container text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 animate-fade-in">Ready to Apply?</h2>
            <p className="max-w-2xl mx-auto mb-8 animate-fade-in" style={{animationDelay: "0.2s"}}>
              Applications for the 2025-26 academic year are now open. 
              Secure your child's future with quality education at 21st Century International Matriculation School.
            </p>
            <div className="space-y-4 sm:space-y-0 sm:flex sm:justify-center sm:space-x-4 animate-fade-in" style={{animationDelay: "0.3s"}}>
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
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="school-container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-school-red text-center animate-fade-in">Fee Structure</h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <Card className="border-school-lightred hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-center text-school-red">Pre-Primary</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Admission Fee</span>
                      <span className="font-medium">₹5,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tuition Fee (Per Term)</span>
                      <span className="font-medium">₹12,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Development Fee</span>
                      <span className="font-medium">₹3,000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-school-lightred hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-center text-school-red">Primary (1-5)</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Admission Fee</span>
                      <span className="font-medium">₹8,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tuition Fee (Per Term)</span>
                      <span className="font-medium">₹15,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Development Fee</span>
                      <span className="font-medium">₹4,000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
              
              <Card className="border-school-lightred hover:shadow-md transition-shadow">
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-4 text-center text-school-red">Secondary (6-12)</h3>
                  <ul className="space-y-2">
                    <li className="flex justify-between">
                      <span>Admission Fee</span>
                      <span className="font-medium">₹10,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Tuition Fee (Per Term)</span>
                      <span className="font-medium">₹18,000</span>
                    </li>
                    <li className="flex justify-between">
                      <span>Development Fee</span>
                      <span className="font-medium">₹5,000</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
            
            <p className="text-center text-school-gray mt-8 max-w-3xl mx-auto animate-fade-in" style={{animationDelay: "0.3s"}}>
              * Additional fees may apply for extracurricular activities, transportation, and uniforms. 
              Scholarships are available for meritorious students. Please contact the admissions office for detailed information.
            </p>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Admissions;
