
import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  {
    id: 1,
    src: "https://images.unsplash.com/photo-1577896851231-70ef18881754?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Students playing outdoors",
    category: "sports"
  },
  {
    id: 2,
    src: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1422&q=80",
    alt: "Library session",
    category: "academics"
  },
  {
    id: 3,
    src: "https://images.unsplash.com/photo-1564981797816-1043664bf78d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    alt: "Science experiment",
    category: "academics"
  },
  {
    id: 4,
    src: "https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
    alt: "Computer lab",
    category: "facilities"
  },
  {
    id: 5,
    src: "https://images.unsplash.com/photo-1511225317751-5c2d61819d58?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    alt: "Art class",
    category: "arts"
  },
  {
    id: 6,
    src: "https://images.unsplash.com/photo-1606761568499-6d2451b23c66?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    alt: "School building",
    category: "facilities"
  },
  {
    id: 7,
    src: "https://images.unsplash.com/photo-1560785237-9bdbe7ba7714?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1374&q=80",
    alt: "Classroom discussion",
    category: "academics"
  },
  {
    id: 8,
    src: "https://images.unsplash.com/photo-1422433555807-2559a27433bd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    alt: "Annual day celebration",
    category: "events"
  },
  {
    id: 9,
    src: "https://images.unsplash.com/photo-1510531704581-5b2870972060?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1473&q=80",
    alt: "Cultural performance",
    category: "events"
  },
];

const categories = [
  { id: "all", name: "All" },
  { id: "academics", name: "Academics" },
  { id: "sports", name: "Sports" },
  { id: "arts", name: "Arts" },
  { id: "events", name: "Events" },
  { id: "facilities", name: "Facilities" },
];

const GalleryGrid = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const filteredImages = selectedCategory === "all" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === selectedCategory);

  const openLightbox = (id: number) => {
    setSelectedImage(id);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'auto';
  };

  const getSelectedImage = () => {
    return galleryImages.find(img => img.id === selectedImage);
  };

  return (
    <div className="py-8">
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-full ${
              selectedCategory === category.id
                ? 'bg-school-red text-white'
                : 'bg-gray-100 text-school-gray hover:bg-gray-200'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {filteredImages.map((image) => (
          <div 
            key={image.id}
            className="overflow-hidden rounded-lg shadow-md cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => openLightbox(image.id)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-64 object-cover transition-transform hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {selectedImage && (
        <div 
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-4 right-4 text-white hover:text-gray-300"
            aria-label="Close lightbox"
          >
            <X className="h-8 w-8" />
          </button>
          
          <div className="max-w-4xl max-h-[90vh]" onClick={(e) => e.stopPropagation()}>
            <img 
              src={getSelectedImage()?.src} 
              alt={getSelectedImage()?.alt} 
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
            <p className="text-white text-center mt-4">{getSelectedImage()?.alt}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
