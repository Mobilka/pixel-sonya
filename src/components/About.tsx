
import { useState, useEffect } from 'react';

interface AboutProps {
  content: string;
  title?: string;
}

export function About({ content, title }: AboutProps) {
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

    const element = document.getElementById('about-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about-section" className="py-12 md:py-16 px-4">
      <div 
        className={`max-w-3xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {title && (
          <h2 className="text-3xl md:text-4xl font-light text-center mb-8 text-photo-text">
            {title}
          </h2>
        )}
        <div className="prose prose-lg max-w-none text-photo-text font-light leading-relaxed">
          {content.split('\n').map((paragraph, idx) => (
            <p key={idx} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
