
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Twitter, Instagram } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-school-red text-white">
      <div className="school-container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-12">
          <div>
            <h3 className="text-xl font-bold mb-4">21st Century International</h3>
            <p className="mb-2">Matriculation School</p>
            <p className="text-sm opacity-80 mb-4">Providing quality education in Tamil and English medium from Pre-KG to 12th standard.</p>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-school-lightred transition-colors" aria-label="Facebook">
                <Facebook />
              </a>
              <a href="#" className="hover:text-school-lightred transition-colors" aria-label="Twitter">
                <Twitter />
              </a>
              <a href="#" className="hover:text-school-lightred transition-colors" aria-label="Instagram">
                <Instagram />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-school-lightred transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-school-lightred transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/academics/primary" className="hover:text-school-lightred transition-colors">Academics</Link>
              </li>
              <li>
                <Link to="/gallery" className="hover:text-school-lightred transition-colors">Gallery</Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-school-lightred transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/admissions" className="hover:text-school-lightred transition-colors">Admissions</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4">Contact Us</h3>
            <address className="not-italic">
              <div className="flex items-start space-x-2 mb-2">
                <MapPin className="h-5 w-5 mt-0.5 flex-shrink-0" />
                <span>21st Century Inter. Matriculation School, Sivagangai, Tamil Nadu, India</span>
              </div>
              <div className="flex items-center space-x-2 mb-2">
                <Phone className="h-5 w-5" />
                <a href="tel:+919876543210" className="hover:text-school-lightred transition-colors">+91 98765 43210</a>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <a href="mailto:info@21stcenturyschool.edu" className="hover:text-school-lightred transition-colors">info@21stcenturyschool.edu</a>
              </div>
            </address>
          </div>
        </div>

        <div className="border-t border-white/20 py-6 text-center text-sm">
          <p>&copy; {currentYear} 21st Century International Matriculation School. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
