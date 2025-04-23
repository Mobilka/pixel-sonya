
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
  const [isVisible, setIsVisible] = useState(true); // Always visible initially

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

  return (
    <section
      id="packages-section"
      className="py-16 md:py-20 px-4 bg-gradient-to-b from-[#fff5ea] to-[#fce6d3] border-t-2 border-[#ffe0c0] relative"
    >
      <div
        className="max-w-5xl mx-auto transition-all duration-700 opacity-100 translate-y-0"
      >
        {title && (
          <div className="mb-12 flex flex-col items-center">
            <h2 className="text-4xl md:text-5xl font-bold text-[#BA876B] tracking-tight mb-2 drop-shadow-sm">
              {title}
            </h2>
            <div className="w-24 h-1 rounded-full bg-[#FFD49C] mb-2" />
            <p className="text-lg md:text-xl text-[#A78364] font-light">
              בחרי את החבילה שמתאימה בדיוק לך
            </p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`relative rounded-2xl overflow-hidden shadow-xl border transition-all duration-300
                ${pkg.isPrimary
                  ? 'bg-gradient-to-br from-[#fde3bd]/80 to-[#ffd8be]/90 border-[#f3be84] scale-105 z-10 ring-2 ring-[#ffd49c]'
                  : 'bg-white border-[#f7ded6]'
                }`}
              style={{
                opacity: 1,
                animation: isVisible ? 'none' : 'none',
              }}
            >
              {pkg.isPrimary && (
                <span className="absolute top-4 left-0 right-0 mx-auto bg-[#ffedd6] text-[#d4a96a] shadow font-semibold text-xs py-1 px-4 rounded-full w-fit z-20 border border-[#fff1df]">
                  הכי פופולרי
                </span>
              )}
              <div className={`p-8 border-b ${pkg.isPrimary ? 'border-[#ffd49c]/80' : 'border-[#f7ded6]'}`}>
                <h3 className="text-2xl font-bold text-[#B07B58] text-center mb-2">{pkg.name}</h3>
                <p className="text-xl font-extrabold text-[#AC7E50] text-center">
                  {pkg.price}
                </p>
              </div>
              <div className="p-8">
                <ul className="space-y-4">
                  {pkg.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg className="w-5 h-5 text-[#FFD49C] mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      <span className="text-[#8E7257] mr-2 font-medium">{feature}</span>
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
