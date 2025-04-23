
import { useState, useEffect, useRef } from 'react';

interface GalleryProps {
  images: string[];
  title?: string;
}

export function Gallery({ images, title }: GalleryProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const galleryRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById('gallery-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    // Scroll to gallery when opened
    if (isOpen && galleryRef.current) {
      galleryRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen]);

  const toggleGallery = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section id="gallery-section" className="py-12 md:py-16 px-4">
      <div 
        className={`max-w-5xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {title && (
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-photo-text">
            {title}
          </h2>
        )}
        
        <div className="flex justify-center mb-8">
          <button 
            onClick={toggleGallery}
            className="px-8 py-3 bg-photo-accent text-white rounded-md hover:bg-opacity-90 transition-all text-lg font-light"
          >
            {isOpen ? 'סגור גלריה' : 'צפייה בגלריה'}
          </button>
        </div>

        <div 
          ref={galleryRef}
          className={`transition-all duration-700 ease-in-out overflow-hidden ${
            isOpen ? 'max-h-[3000px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {images.map((image, index) => (
              <div 
                key={index}
                className="aspect-square overflow-hidden rounded-md shadow-md"
                style={{ 
                  animationDelay: `${index * 100}ms`,
                  opacity: 0,
                  animation: isOpen ? 'image-fade 0.8s ease-out forwards' : 'none',
                }}
              >
                <img 
                  src={image} 
                  alt={`Gallery image ${index + 1}`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
