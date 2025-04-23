
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
      {/* Background with subtle pixel effect */}
      <div className="absolute inset-0 bg-photo-soft bg-opacity-90 z-0">
        <div className="absolute inset-0 opacity-10 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgZmlsbD0iIzMzMyIgZmlsbC1ydWxlPSJldmVub2RkIj48Y2lyY2xlIGN4PSIxIiBjeT0iMSIgcj0iMSIvPjwvZz48L3N2Zz4=')]"></div>
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
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-photo-text mb-4">
          {businessName}
        </h1>
        {subtitle && (
          <p className="text-xl md:text-2xl text-photo-text font-light max-w-lg mx-auto">
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
