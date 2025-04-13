
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Hero = () => {
  return (
    <div className="relative bg-school-lightgray overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-school-red/90 to-school-red/70 z-10"></div>
      <div 
        className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] bg-cover bg-center"
        aria-hidden="true"
      ></div>
      
      <div className="relative z-20 school-container py-16 md:py-24 text-white">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">
            Educating Tomorrow's Leaders 78987
          </h1>
          <p className="text-lg md:text-xl mb-8 opacity-90 animate-slide-in">
            Welcome to 21st Century International Matriculation School in Sivagangai, 
            offering quality education from Pre-KG to 12th standard in both Tamil and English medium.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 animate-slide-in" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="bg-white text-school-red hover:bg-school-lightgray">
              <Link to="/admissions">Apply for Admission</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              <Link to="/about">Learn More</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
