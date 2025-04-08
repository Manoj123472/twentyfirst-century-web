
import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const images = [
  {
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80",
    alt: "Students in library",
    caption: "Our well-stocked library provides resources for all age groups"
  },
  {
    src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    alt: "Science lab",
    caption: "Modern science labs for practical learning experiences"
  },
  {
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Sports activities",
    caption: "Sports and physical education are integral to our curriculum"
  },
  {
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    alt: "Computer lab",
    caption: "Technology-enabled learning in our computer labs"
  }
];

const MediaHighlights = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextSlide = () => {
    setActiveIndex((current) => (current === images.length - 1 ? 0 : current + 1));
  };

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? images.length - 1 : current - 1));
  };

  return (
    <section className="py-16 bg-school-lightgray">
      <div className="school-container">
        <div className="text-center mb-12">
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
                <div key={index} className="w-full flex-shrink-0">
                  <img 
                    src={image.src} 
                    alt={image.alt} 
                    className="w-full h-80 object-cover"
                  />
                  <div className="bg-white p-4">
                    <p className="text-school-gray">{image.caption}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            onClick={prevSlide} 
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-school-red rounded-full p-2 shadow-md"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
          
          <button 
            onClick={nextSlide} 
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 hover:bg-white text-school-red rounded-full p-2 shadow-md"
            aria-label="Next slide"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
          
          <div className="flex justify-center mt-4 space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveIndex(index)}
                className={`h-2 w-2 rounded-full ${
                  activeIndex === index ? 'bg-school-red' : 'bg-gray-300'
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
