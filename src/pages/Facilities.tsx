
import React from 'react';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Library, MonitorPlay, Dumbbell, Microscope, Bus, Shield } from 'lucide-react';

const Facilities = () => {
  const facilities = [
    {
      icon: <Microscope className="h-12 w-12 text-school-red" />,
      title: "Science Laboratories",
      description: "State-of-the-art physics, chemistry, and biology labs equipped with modern apparatus for practical learning."
    },
    {
      icon: <Library className="h-12 w-12 text-school-red" />,
      title: "Library",
      description: "Extensive collection of books, journals, and digital resources to foster a love for reading and research."
    },
    {
      icon: <MonitorPlay className="h-12 w-12 text-school-red" />,
      title: "Computer Lab",
      description: "Advanced computer lab with high-speed internet and latest software to develop digital literacy."
    },
    {
      icon: <Dumbbell className="h-12 w-12 text-school-red" />,
      title: "Sports Facilities",
      description: "Spacious playgrounds, indoor sports complex, and equipment for various sports activities."
    },
    {
      icon: <Bus className="h-12 w-12 text-school-red" />,
      title: "Transportation",
      description: "Safe and reliable bus service covering all major routes with GPS tracking for parents' peace of mind."
    },
    {
      icon: <Shield className="h-12 w-12 text-school-red" />,
      title: "Safety & Security",
      description: "CCTV surveillance, trained security personnel, and strict visitor screening for maximum safety."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-school-red py-12 md:py-24 text-white">
          <div className="school-container">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">Our Facilities</h1>
            <p className="text-lg max-w-3xl animate-slide-in">
              We provide world-class infrastructure and amenities to ensure a conducive learning environment for our students.
            </p>
          </div>
        </div>
        
        <section className="py-12 bg-white">
          <div className="school-container">
            <p className="text-school-gray mb-10 max-w-3xl">
              At 21st Century International Matriculation School, we believe that a well-equipped campus enhances 
              the learning experience. Our facilities are designed to support academic, physical, and creative development 
              of students.
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {facilities.map((facility, index) => (
                <Card key={index} className="border-school-lightred hover:shadow-lg transition-shadow animate-fade-in" style={{animationDelay: `${0.1 * (index + 1)}s`}}>
                  <CardContent className="pt-6">
                    <div className="mb-4 flex justify-center">
                      {facility.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-center mb-2 text-school-red">{facility.title}</h3>
                    <p className="text-school-gray text-center">
                      {facility.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-school-lightgray">
          <div className="school-container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-school-red text-center animate-fade-in">
              Classrooms & Learning Spaces
            </h2>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div className="rounded-lg overflow-hidden shadow-md animate-fade-in">
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80" 
                  alt="Modern classroom" 
                  className="w-full h-auto"
                />
              </div>
              
              <div className="space-y-4 animate-slide-in">
                <h3 className="text-xl font-bold text-school-red">Smart Classrooms</h3>
                <p className="text-school-gray">
                  Our classrooms are equipped with digital smart boards, projectors, and audio-visual aids 
                  to make learning interactive and engaging. The classrooms are spacious, well-ventilated, 
                  and designed to create an optimal learning environment.
                </p>
                <h3 className="text-xl font-bold text-school-red">Activity Centers</h3>
                <p className="text-school-gray">
                  Dedicated spaces for art, music, dance, and other creative activities allow students to 
                  explore their talents and interests. These centers are equipped with necessary materials 
                  and instruments to facilitate experiential learning.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-12 bg-white">
          <div className="school-container">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-school-red text-center animate-fade-in">
              Campus Highlights
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 animate-fade-in" style={{animationDelay: "0.2s"}}>
              <div className="p-6 bg-school-lightgray rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2 text-school-red">10+ Acres</h3>
                <p className="text-school-gray">Spacious green campus</p>
              </div>
              
              <div className="p-6 bg-school-lightgray rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2 text-school-red">100%</h3>
                <p className="text-school-gray">CCTV coverage for safety</p>
              </div>
              
              <div className="p-6 bg-school-lightgray rounded-lg text-center">
                <h3 className="text-xl font-semibold mb-2 text-school-red">Eco-friendly</h3>
                <p className="text-school-gray">Solar powered campus</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Facilities;
