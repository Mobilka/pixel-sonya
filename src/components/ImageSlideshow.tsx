import { useState, useEffect } from 'react';

interface ImageSlideshowProps {
  images: string[];
  interval?: number;
}

export function ImageSlideshow({ images, interval = 5000 }: ImageSlideshowProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    if (images.length <= 1) return;

    const timer = setInterval(() => {
      setIsTransitioning(true);
      
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        
        setTimeout(() => {
          setIsTransitioning(false);
        }, 100);
      }, 700);
    }, interval);

    return () => clearInterval(timer);
  }, [images, interval]);

  if (images.length === 0) return null;

  return (
    <div className="relative h-full bg-photo-soft">
      {images.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${
            index === currentIndex 
              ? isTransitioning ? 'opacity-0' : 'opacity-100' 
              : 'opacity-0'
          }`}
        >
          <img
            src={image}
            alt={`Slideshow image ${index + 1}`}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
}
