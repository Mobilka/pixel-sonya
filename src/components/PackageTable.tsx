
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
    'bg-[#E5DEFF]',   // Soft Purple
    'bg-[#FDE1D3]',   // Soft Peach 
    'bg-[#FEF7CD]'    // Soft Yellow
  ];

  return (
    <section id="packages-section" className="py-12 md:py-16 px-4 bg-photo-beige bg-opacity-30">
      <div className="max-w-5xl mx-auto">
        {title && (
          <h2 className="text-3xl md:text-4xl font-light text-center mb-10 text-photo-text font-bold">
            {title}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {packages.map((pkg, index) => (
            <div 
              key={index}
              className={`
                rounded-lg 
                overflow-hidden 
                shadow-lg 
                flex 
                flex-col 
                ${pkg.isPrimary ? 'transform md:scale-105 z-10 border-2 border-photo-accent' : ''}
                ${packageColors[index % packageColors.length]} 
                bg-opacity-70
                h-full
              `}
            >
              <div className={`p-6 text-center ${pkg.isPrimary ? 'border-b-2 border-photo-accent' : 'border-b border-gray-200'}`}>
                <h3 className="text-xl md:text-2xl font-medium mb-2">{pkg.name}</h3>
                <p className="text-xl md:text-2xl font-light">{pkg.price}</p>
              </div>
              <div className="p-6 flex-grow">
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
