
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { BookOpen, Users, Award, Star } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-school-red py-12 md:py-24 text-white">
          <div className="school-container">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">About Our School</h1>
            <p className="text-lg max-w-3xl">
              Learn about 21st Century International Matriculation School's history, 
              mission, and our commitment to educational excellence.
            </p>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="school-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold text-school-gray mb-6">Our History</h2>
                <p className="text-school-gray mb-4">
                  21st Century International Matriculation School was established in 2001 
                  with a vision to provide quality education that balances academic excellence 
                  with character development.
                </p>
                <p className="text-school-gray mb-4">
                  Beginning with just a handful of students, we have grown to become one of 
                  the leading educational institutions in Sivagangai, serving hundreds of 
                  students from Pre-KG to 12th standard.
                </p>
                <p className="text-school-gray">
                  Throughout our journey, we have maintained our commitment to nurturing 
                  young minds and preparing them to be responsible, successful citizens of 
                  the 21st century.
                </p>
              </div>
              <div className="rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                  alt="School building" 
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-school-lightgray">
          <div className="school-container">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-school-gray mb-4">Our Mission & Values</h2>
              <p className="text-school-gray max-w-2xl mx-auto">
                Guided by our core values, we strive to create an environment where every student can thrive.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 text-school-red">
                  <BookOpen className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-school-gray mb-2">Academic Excellence</h3>
                <p className="text-school-gray">
                  We strive for the highest standards of academic achievement while fostering a love for learning.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 text-school-red">
                  <Users className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-school-gray mb-2">Cultural Integration</h3>
                <p className="text-school-gray">
                  We emphasize the importance of cultural values while preparing students for global citizenship.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 text-school-red">
                  <Award className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-school-gray mb-2">Character Development</h3>
                <p className="text-school-gray">
                  We believe in nurturing not just intelligent minds but also strong character and values.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="mb-4 text-school-red">
                  <Star className="h-10 w-10" />
                </div>
                <h3 className="text-xl font-semibold text-school-gray mb-2">Innovation</h3>
                <p className="text-school-gray">
                  We embrace innovative teaching methods and technologies to enhance the learning experience.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="py-16 bg-white">
          <div className="school-container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1">
                <div className="aspect-video rounded-lg overflow-hidden shadow-lg">
                  <img 
                    src="https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80" 
                    alt="Students in classroom" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="order-1 md:order-2">
                <h2 className="text-3xl font-bold text-school-gray mb-6">Our Approach</h2>
                <p className="text-school-gray mb-4">
                  At 21st Century International Matriculation School, we follow a holistic 
                  approach to education that balances academics, co-curricular activities, 
                  and value-based learning.
                </p>
                <p className="text-school-gray mb-4">
                  We offer both Tamil and English medium instruction, recognizing the 
                  importance of mother tongue education while also preparing students 
                  for a global environment.
                </p>
                <p className="text-school-gray">
                  Our curriculum is designed to develop critical thinking, creativity, 
                  collaboration, and communication skills – essential competencies for 
                  success in the 21st century.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;
