
import { useState, useEffect } from 'react';

interface PackageProps {
  name: string;
  price: string;
  features: string[];
  isPrimary?: boolean;
}

interface PackageTableProps {
  packages: PackageProps[];
  title?: string;
}

export function PackageTable({ packages, title }: PackageTableProps) {
  const [isVisible, setIsVisible] = useState(true);

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

    const element = document.getElementById('packages-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const packageColors = [
    'bg-[rgb(229,222,255)]',
    'bg-[rgb(253,225,211)]', 
    'bg-[rgb(254,247,205)]'
  ];

  return (
    <section id="packages-section" className="py-12 md:py-16 px-4 bg-photo-beige bg-opacity-30">
      <div 
        className={`max-w-5xl mx-auto transition-all duration-700 opacity-100 translate-y-0`}
      >
        {title && (
          <h2 className="text-3xl md:text-4xl font-light text-center mb-10 text-photo-text font-bold">
            {title}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`rounded-lg overflow-hidden shadow-lg ${
                pkg.isPrimary 
                  ? 'transform md:scale-105 z-10' 
                  : ''
              } ${packageColors[index % packageColors.length]} bg-opacity-70`}
              style={{
                opacity: 1,
                animation: 'none',
              }}
            >
              <div className={`p-6 ${pkg.isPrimary ? 'border-b-2 border-photo-accent' : 'border-b border-gray-200'}`}>
                <h3 className="text-xl md:text-2xl font-medium mb-2 text-center">{pkg.name}</h3>
                <p className="text-xl md:text-2xl font-light text-center">{pkg.price}</p>
              </div>
              <div className="p-6">
                <ul className="space-y-3">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-photo-accent mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-photo-text mr-2">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
