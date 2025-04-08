
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import GalleryGrid from '../components/gallery/GalleryGrid';

const Gallery = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow">
        <div className="bg-school-red py-12 md:py-24 text-white">
          <div className="school-container">
            <h1 className="text-3xl md:text-5xl font-bold mb-4">School Gallery</h1>
            <p className="text-lg max-w-3xl">
              Take a visual journey through our campus, events, and student activities.
            </p>
          </div>
        </div>
        
        <section className="py-12 bg-white">
          <div className="school-container">
            <p className="text-school-gray mb-8 max-w-3xl">
              Explore photos from our school's facilities, academic programs, sports events, 
              cultural activities, and special celebrations. These images showcase the vibrant 
              life at 21st Century International Matriculation School.
            </p>
            
            <GalleryGrid />
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Gallery;
