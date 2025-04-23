
import { useState, useEffect } from 'react';

interface LocationProps {
  address: string;
  mapUrl: string;
  title?: string;
}

export function Location({ address, mapUrl, title }: LocationProps) {
  const [isVisible, setIsVisible] = useState(false);

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

    const element = document.getElementById('location-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const openMap = () => {
    window.open(mapUrl, '_blank');
  };

  return (
    <section id="location-section" className="py-12 md:py-16 px-4 bg-photo-beige bg-opacity-30">
      <div 
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {title && (
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-photo-text">
            {title}
          </h2>
        )}
        
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="p-6 text-center">
            <p className="text-photo-text text-lg mb-4">{address}</p>
            <button
              onClick={openMap}
              className="bg-photo-accent text-white font-medium py-2 px-6 rounded-md hover:bg-opacity-90 transition-colors"
            >
              פתיחה במפות
            </button>
          </div>
          
          <div className="aspect-video w-full cursor-pointer" onClick={openMap}>
            <iframe
              src={`${mapUrl}&output=embed`}
              className="w-full h-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio location map"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
