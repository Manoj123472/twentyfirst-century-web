
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Features from '../components/home/Features';
import MediaHighlights from '../components/home/MediaHighlights';
import MediumSection from '../components/home/MediumSection';
import { Calendar, Book, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Index = () => {
  const announcements = [
    {
      title: "Admissions Open for 2025-26",
      date: "April 8, 2025",
      description: "Applications are now being accepted for the upcoming academic year across all grades."
    },
    {
      title: "Annual Sports Day",
      date: "April 20, 2025",
      description: "Annual sports day celebrations will be held at the school grounds. Parents are welcome to attend."
    },
    {
      title: "Science Exhibition",
      date: "May 15, 2025",
      description: "Students will showcase their science projects at our annual science exhibition."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <Hero />
        
        <Features />
        
        <section className="py-16 bg-school-lightgray">
          <div className="school-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-school-gray mb-4">Latest Announcements</h2>
              <p className="text-school-gray max-w-2xl mx-auto">
                Stay updated with the latest news and events at 21st Century International Matriculation School.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {announcements.map((announcement, index) => (
                <div 
                  key={index} 
                  className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="bg-school-red p-3 text-white flex items-center justify-between">
                    <h3 className="font-semibold">{announcement.title}</h3>
                    <Calendar className="h-5 w-5" />
                  </div>
                  <div className="p-4">
                    <p className="text-sm text-school-red mb-2">{announcement.date}</p>
                    <p className="text-school-gray">{announcement.description}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-8">
              <Button asChild variant="outline" className="border-school-red text-school-red hover:bg-school-red hover:text-white">
                <Link to="/announcements">View All Announcements</Link>
              </Button>
            </div>
          </div>
        </section>
        
        <MediumSection />
        
        <MediaHighlights />
        
        <section className="py-16 bg-gradient-to-r from-school-red to-school-darkred text-white">
          <div className="school-container text-center">
            <h2 className="text-3xl font-bold mb-6">Begin Your Journey With Us</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Provide your child with a quality education that prepares them for future success. 
              Join the 21st Century International Matriculation School family today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="bg-white text-school-red hover:bg-school-lightgray">
                <Link to="/admissions">Apply for Admission</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white hover:bg-white/10">
                <Link to="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
