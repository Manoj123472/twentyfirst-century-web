
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Calendar, Book, Bell } from 'lucide-react';
import { motion } from 'framer-motion';

const Announcements = () => {
  const announcements = [
    {
      title: "Admissions Open for 2025-26",
      date: "April 8, 2025",
      description: "Applications are now being accepted for the upcoming academic year across all grades. Early bird registrations receive fee concessions.",
      icon: Calendar,
      category: "Admissions"
    },
    {
      title: "Annual Sports Day",
      date: "April 20, 2025",
      description: "Annual sports day celebrations will be held at the school grounds. Parents are welcome to attend and cheer for their children.",
      icon: Calendar,
      category: "Events"
    },
    {
      title: "Science Exhibition",
      date: "May 15, 2025",
      description: "Students will showcase their science projects at our annual science exhibition. This year's theme is 'Innovation for Sustainability'.",
      icon: Book,
      category: "Academic"
    },
    {
      title: "Parent-Teacher Meeting",
      date: "May 25, 2025",
      description: "First term parent-teacher meeting will be conducted to discuss student progress and address parental concerns.",
      icon: Calendar,
      category: "Meetings"
    },
    {
      title: "School Annual Day",
      date: "June 10, 2025",
      description: "Join us for a day of cultural performances and prize distribution celebrating student achievements of the academic year.",
      icon: Calendar,
      category: "Events"
    },
    {
      title: "Summer Camp Registration",
      date: "March 30, 2025",
      description: "Register your children for our fun and educational summer camp activities including sports, arts, and skill development programs.",
      icon: Bell,
      category: "Activities"
    },
    {
      title: "Library Book Fair",
      date: "April 25, 2025",
      description: "Visit our school library's annual book fair with exclusive discounts on educational books and literary classics.",
      icon: Book,
      category: "Events"
    },
    {
      title: "Independence Day Celebrations",
      date: "August 15, 2025",
      description: "Special assembly and cultural program to commemorate India's independence day with flag hoisting ceremony.",
      icon: Calendar,
      category: "Events"
    }
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-school-red py-12 md:py-24 text-white">
          <div className="school-container">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">School Announcements</h1>
            <p className="text-lg max-w-3xl">
              Stay updated with the latest news, events, and activities at 21st Century International Matriculation School.
            </p>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="school-container">
            <p className="text-school-gray mb-12 max-w-3xl">
              Below you'll find important announcements about upcoming events, admissions, 
              academic activities, and other important information for students and parents.
            </p>
            
            <motion.div 
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {announcements.map((announcement, index) => {
                const Icon = announcement.icon;
                return (
                  <motion.div 
                    key={index} 
                    className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow border border-gray-100"
                    variants={item}
                  >
                    <div className="bg-school-red p-3 text-white flex items-center justify-between">
                      <h3 className="font-semibold">{announcement.title}</h3>
                      <Icon className="h-5 w-5" />
                    </div>
                    <div className="p-4">
                      <div className="flex justify-between items-center mb-2">
                        <p className="text-sm text-school-red">{announcement.date}</p>
                        <span className="text-xs bg-school-lightred px-2 py-1 rounded-full text-school-darkred">
                          {announcement.category}
                        </span>
                      </div>
                      <p className="text-school-gray">{announcement.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Announcements;
