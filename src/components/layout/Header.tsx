
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAcademicsOpen, setIsAcademicsOpen] = useState(false);
  const [isFacilitiesOpen, setIsFacilitiesOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAcademics = () => {
    setIsAcademicsOpen(!isAcademicsOpen);
  };

  const toggleFacilities = () => {
    setIsFacilitiesOpen(!isFacilitiesOpen);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="school-container">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="h-12 w-12 rounded-full bg-school-red flex items-center justify-center animate-pulse">
              <span className="text-white font-bold text-xl">21</span>
            </div>
            <div>
              <h1 className="text-lg md:text-xl font-bold text-school-red leading-tight">
                21st Century <span className="hidden sm:inline">Inter.</span>
                <span className="block sm:hidden">School</span>
                <span className="text-xs md:text-sm text-school-gray hidden sm:inline">Matriculation School, Sivagangai</span>
              </h1>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="text-school-gray hover:text-school-red font-medium transition-colors">
              Home
            </Link>
            <Link to="/about" className="text-school-gray hover:text-school-red font-medium transition-colors">
              About
            </Link>
            <div className="relative group">
              <button 
                className="flex items-center text-school-gray hover:text-school-red font-medium transition-colors" 
                onClick={toggleAcademics}
              >
                Academics <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block animate-fade-in">
                <Link to="/academics" className="block px-4 py-2 text-school-gray hover:bg-school-lightgray hover:text-school-red">
                  Overview
                </Link>
                <Link to="/academics#pre-primary" className="block px-4 py-2 text-school-gray hover:bg-school-lightgray hover:text-school-red">
                  Pre-Primary (Pre-KG)
                </Link>
                <Link to="/academics#primary" className="block px-4 py-2 text-school-gray hover:bg-school-lightgray hover:text-school-red">
                  Primary (1-5)
                </Link>
                <Link to="/academics#middle" className="block px-4 py-2 text-school-gray hover:bg-school-lightgray hover:text-school-red">
                  Middle School (6-8)
                </Link>
                <Link to="/academics#high" className="block px-4 py-2 text-school-gray hover:bg-school-lightgray hover:text-school-red">
                  High School (9-12)
                </Link>
              </div>
            </div>
            <div className="relative group">
              <button 
                className="flex items-center text-school-gray hover:text-school-red font-medium transition-colors" 
                onClick={toggleFacilities}
              >
                Facilities <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              <div className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 hidden group-hover:block animate-fade-in">
                <Link to="/facilities" className="block px-4 py-2 text-school-gray hover:bg-school-lightgray hover:text-school-red">
                  Campus Facilities
                </Link>
                <Link to="/facilities#classrooms" className="block px-4 py-2 text-school-gray hover:bg-school-lightgray hover:text-school-red">
                  Classrooms
                </Link>
                <Link to="/facilities#labs" className="block px-4 py-2 text-school-gray hover:bg-school-lightgray hover:text-school-red">
                  Laboratories
                </Link>
                <Link to="/facilities#sports" className="block px-4 py-2 text-school-gray hover:bg-school-lightgray hover:text-school-red">
                  Sports Facilities
                </Link>
              </div>
            </div>
            <Link to="/gallery" className="text-school-gray hover:text-school-red font-medium transition-colors">
              Gallery
            </Link>
            <Link to="/contact" className="text-school-gray hover:text-school-red font-medium transition-colors">
              Contact
            </Link>
          </nav>

          <Button className="hidden md:block bg-school-red hover:bg-school-darkred animate-scale-in">
            <Link to="/admissions">Admissions</Link>
          </Button>

          {/* Mobile menu button */}
          <button 
            className="md:hidden text-school-gray hover:text-school-red"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-slide-in">
            <div className="flex flex-col space-y-3">
              <Link to="/" className="text-school-gray hover:text-school-red font-medium py-2">
                Home
              </Link>
              <Link to="/about" className="text-school-gray hover:text-school-red font-medium py-2">
                About
              </Link>
              <div>
                <button 
                  className="flex items-center text-school-gray hover:text-school-red font-medium py-2 w-full text-left"
                  onClick={toggleAcademics}
                >
                  Academics <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isAcademicsOpen ? 'rotate-180' : ''}`} />
                </button>
                {isAcademicsOpen && (
                  <div className="pl-4 space-y-2 mt-1 animate-fade-in">
                    <Link to="/academics" className="block text-school-gray hover:text-school-red py-1">
                      Overview
                    </Link>
                    <Link to="/academics#pre-primary" className="block text-school-gray hover:text-school-red py-1">
                      Pre-Primary (Pre-KG)
                    </Link>
                    <Link to="/academics#primary" className="block text-school-gray hover:text-school-red py-1">
                      Primary (1-5)
                    </Link>
                    <Link to="/academics#middle" className="block text-school-gray hover:text-school-red py-1">
                      Middle School (6-8)
                    </Link>
                    <Link to="/academics#high" className="block text-school-gray hover:text-school-red py-1">
                      High School (9-12)
                    </Link>
                  </div>
                )}
              </div>
              <div>
                <button 
                  className="flex items-center text-school-gray hover:text-school-red font-medium py-2 w-full text-left"
                  onClick={toggleFacilities}
                >
                  Facilities <ChevronDown className={`ml-1 h-4 w-4 transition-transform ${isFacilitiesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isFacilitiesOpen && (
                  <div className="pl-4 space-y-2 mt-1 animate-fade-in">
                    <Link to="/facilities" className="block text-school-gray hover:text-school-red py-1">
                      Campus Facilities
                    </Link>
                    <Link to="/facilities#classrooms" className="block text-school-gray hover:text-school-red py-1">
                      Classrooms
                    </Link>
                    <Link to="/facilities#labs" className="block text-school-gray hover:text-school-red py-1">
                      Laboratories
                    </Link>
                    <Link to="/facilities#sports" className="block text-school-gray hover:text-school-red py-1">
                      Sports Facilities
                    </Link>
                  </div>
                )}
              </div>
              <Link to="/gallery" className="text-school-gray hover:text-school-red font-medium py-2">
                Gallery
              </Link>
              <Link to="/contact" className="text-school-gray hover:text-school-red font-medium py-2">
                Contact
              </Link>
              <Button className="bg-school-red hover:bg-school-darkred mt-2 w-full">
                <Link to="/admissions">Admissions</Link>
              </Button>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
