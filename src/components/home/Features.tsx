
import { School, BookOpen, Users, Award } from 'lucide-react';

const features = [
  {
    icon: <School className="h-12 w-12 text-school-red" />,
    title: "Dual Medium Instruction",
    description: "Education in both Tamil and English mediums to support diverse learning needs."
  },
  {
    icon: <BookOpen className="h-12 w-12 text-school-red" />,
    title: "Comprehensive Curriculum",
    description: "From Pre-KG to 12th standard with focus on academic excellence and holistic development."
  },
  {
    icon: <Users className="h-12 w-12 text-school-red" />,
    title: "Experienced Faculty",
    description: "Dedicated teachers committed to bringing out the best in every student."
  },
  {
    icon: <Award className="h-12 w-12 text-school-red" />,
    title: "Modern Facilities",
    description: "State-of-the-art infrastructure designed to enhance the learning experience."
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="school-container">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-school-gray mb-4">Why Choose Us?</h2>
          <p className="text-school-gray max-w-2xl mx-auto">
            At 21st Century International Matriculation School, we provide a nurturing environment 
            where students can excel academically and grow personally.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-school-gray mb-2">{feature.title}</h3>
              <p className="text-school-gray">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
