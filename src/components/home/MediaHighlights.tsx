
import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
    alt: "Students studying in classroom",
    caption: "Our modern classrooms provide an ideal learning environment"
  },
  {
    src: "https://images.unsplash.com/photo-1588075592446-265fd1e6e76f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    alt: "Science lab experiment",
    caption: "Well-equipped science labs for practical learning experiences"
  },
  {
    src: "https://images.unsplash.com/photo-1540479859555-17af45c78602?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Sports activities",
    caption: "Sports and physical education are integral to our curriculum"
  },
  {
    src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    alt: "Library",
    caption: "Our extensive library provides resources for all age groups"
  },
  {
    src: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
    alt: "Computer lab",
    caption: "Technology-enabled learning in our state-of-the-art computer labs"
  }
];

const MediaHighlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  // Auto-slide functionality
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    
    return () => clearInterval(interval);
  }, [activeIndex]);

  const nextSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
    
    setTimeout(() => {
      setIsAnimating(false);
    }, 500);
  };

  return (
    <section className="py-16 bg-school-lightgray">
      <div className="school-container">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-3xl font-bold text-school-gray mb-4">Campus Highlights</h2>
          <p className="text-school-gray max-w-2xl mx-auto">
            Take a glimpse into our vibrant campus and its state-of-the-art facilities.
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden rounded-lg shadow-lg">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {images.map((image, index) => (
                <div key={index} className="w-full flex-shrink-0 relative">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <p className="text-lg font-medium">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide} 
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-school-red rounded-full p-2 shadow-md transition-transform hover:scale-110"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-school-red rounded-full p-2 shadow-md transition-transform hover:scale-110"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-8 rounded-full transition-all duration-300 ${
                  activeIndex === index ? 'bg-school-red w-8' : 'bg-gray-300 w-4'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MediaHighlights;
