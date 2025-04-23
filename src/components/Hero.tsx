
import { useState, useEffect } from 'react';

interface HeroProps {
  businessName: string;
  subtitle?: string;
  photographerImage?: string;
}

export function Hero({ businessName, subtitle, photographerImage }: HeroProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative w-full h-[40vh] md:h-[50vh] flex items-center justify-center overflow-hidden">
      {/* Pixeled Background */}
      <div className="absolute inset-0 bg-cover bg-center z-0" 
           style={{ 
             backgroundImage: `url('https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7')`, 
             filter: 'brightness(0.5) contrast(1.2) grayscale(0.2)',
             backgroundBlendMode: 'multiply'
           }}>
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iNSIgaGVpZ2h0PSI1IiBmaWxsPSIjMDAwIj48L3JlY3Q+CjxyZWN0IHg9IjAiIHk9IjAiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIGZpbGw9IiMyMjIiPjwvcmVjdD4KPC9zdmc+')] bg-repeat"></div>
      </div>

      {/* Content */}
      <div className={`relative z-10 text-center px-4 transform transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        {photographerImage && (
          <div className="mx-auto mb-6 w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden shadow-lg">
            <img 
              src={photographerImage} 
              alt="Photographer" 
              className="w-full h-full object-cover"
            />
          </div>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-white mb-4">
          {businessName}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-white/90 font-light max-w-lg mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
