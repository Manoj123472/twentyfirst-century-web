
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Form Submitted!",
        description: "Thank you for your message. We'll get back to you soon.",
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-school-red py-12 md:py-24 text-white">
          <div className="school-container">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">Contact Us</h1>
            <p className="text-lg max-w-3xl">
              Get in touch with 21st Century International Matriculation School. 
              We're here to answer your questions.
            </p>
          </div>
        </div>
        
        <section className="py-16 bg-white">
          <div className="school-container">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl font-bold text-school-gray mb-6">Get In Touch</h2>
                <p className="text-school-gray mb-8">
                  Have questions about admissions, curriculum, or anything else? 
                  Fill out the form and we'll get back to you as soon as possible.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="name" className="block text-school-gray mb-1">Full Name *</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-red"
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-school-gray mb-1">Email Address *</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-red"
                        required
                      />
                    </div>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="phone" className="block text-school-gray mb-1">Phone Number</label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-red"
                      />
                    </div>
                    <div>
                      <label htmlFor="subject" className="block text-school-gray mb-1">Subject *</label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-red"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="Admission Inquiry">Admission Inquiry</option>
                        <option value="Fee Structure">Fee Structure</option>
                        <option value="Academic Programs">Academic Programs</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Feedback">Feedback</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-school-gray mb-1">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={5}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-school-red"
                      required
                    ></textarea>
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full sm:w-auto bg-school-red hover:bg-school-darkred"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
              
              <div>
                <h2 className="text-2xl font-bold text-school-gray mb-6">Contact Information</h2>
                
                <div className="bg-school-lightgray p-6 rounded-lg mb-8">
                  <div className="flex items-start space-x-4 mb-6">
                    <MapPin className="h-6 w-6 text-school-red flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-school-gray mb-1">Address</h3>
                      <address className="not-italic text-school-gray">
                        21st Century International Matriculation School,<br />
                        Sivagangai,<br />
                        Tamil Nadu, India
                      </address>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 mb-6">
                    <Phone className="h-6 w-6 text-school-red flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-school-gray mb-1">Phone</h3>
                      <p className="text-school-gray">+91 98765 43210</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4 mb-6">
                    <Mail className="h-6 w-6 text-school-red flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-school-gray mb-1">Email</h3>
                      <p className="text-school-gray">info@21stcenturyschool.edu</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <Clock className="h-6 w-6 text-school-red flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-school-gray mb-1">School Hours</h3>
                      <p className="text-school-gray">Monday - Friday: 8:00 AM - 4:30 PM</p>
                      <p className="text-school-gray">Saturday: 8:00 AM - 12:30 PM</p>
                      <p className="text-school-gray">Sunday: Closed</p>
                    </div>
                  </div>
                </div>
                
                <div className="rounded-lg overflow-hidden shadow-md">
                  {/* This would be a real map in production */}
                  <div className="bg-gray-300 h-72 flex items-center justify-center">
                    <p className="text-school-gray">Map will be displayed here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;
