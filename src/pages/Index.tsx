import { useIsMobile } from "@/hooks/use-mobile";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { ImageSlideshow } from "@/components/ImageSlideshow";
import { PackageTable } from "@/components/PackageTable";
import { ContactForm } from "@/components/ContactForm";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useState, useEffect, useRef } from 'react';

const placeholderImages = [
  "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80", 
  "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80"
];

const packages = [
  {
    name: "חבילת ילדים",
    price: "₪650",
    features: [
      "כשעה צילומים",
      "כ-100 תמונות",
      "כ-10 תמונות ערוכות"
    ]
  },
  {
    name: "חבילה בסיסית",
    price: "₪1,150",
    features: [
      "כשעה וחצי צילומים",
      "כ-150 תמונות",
      "כ-10 תמונות ערוכות לכל בן משפחה"
    ],
    isPrimary: true
  },
  {
    name: "חבילה יוקרתית",
    price: "₪1,350",
    features: [
      "כשעתיים צילומים",
      "כ-200 תמונות",
      "כ-15 תמונות ערוכות לכל משפחה"
    ]
  }
];

const aboutContent = `אני צלמת משפחות המתמחה בלכידת הרגעים המיוחדים של המשפחה שלכם בדרך טבעית ואותנטית.

עם יותר מ-10 שנות ניסיון בצילום ילדים ומשפחות, אני יודעת כיצד להפיק את המיטב מהמפגש, תוך יצירת אווירה נינוחה ומהנה עבור כולם.

המטרה שלי היא לתעד את ההתרגשות, החיבור והרגעים הספונטניים של המשפחה שלכם, שיהפכו לזיכרונות יקרים לשנים רבות.`;

const Index = () => {
  const isMobile = useIsMobile();
  const [visibleSections, setVisibleSections] = useState<string[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => 
              prev.includes(entry.target.id) ? prev : [...prev, entry.target.id]
            );
          }
        });
      },
      { 
        threshold: 0.15,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    setTimeout(() => {
      const sections = document.querySelectorAll('.scroll-section');
      sections.forEach(section => {
        if (observerRef.current) {
          observerRef.current.observe(section);
        }
      });
    }, 100);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  const sectionClass = (id: string) => `
    scroll-section relative transition-all duration-1000 ease-in-out
    ${visibleSections.includes(id) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}
  `;

  return (
    <div className="min-h-screen bg-photo-soft overflow-hidden">
      <Header />
      
      <div className="flex flex-col md:flex-row pt-32">
        <ScrollArea className="w-full md:w-2/3 h-screen pt-8 pb-8">
          <div className="px-6 space-y-16">
            <div id="hero-section" className={sectionClass('hero-section')}>
              <Hero 
                businessName="סטודיו לצילומי משפחה" 
                subtitle="רגעים קסומים שנשארים לנצח"
              />
            </div>
            
            {isMobile && (
              <div id="mobile-slideshow" className={sectionClass('mobile-slideshow')}>
                <div className="h-[300px] mb-8">
                  <ImageSlideshow images={placeholderImages} interval={7000} />
                </div>
              </div>
            )}
            
            <div id="about-section" className={sectionClass('about-section')}>
              <About 
                title="ברוכים הבאים" 
                content={aboutContent} 
              />
            </div>
            
            <div id="gallery-section" className={sectionClass('gallery-section')}>
              <Gallery 
                title="הגלריה שלי" 
                images={placeholderImages} 
              />
            </div>
            
            <div id="packages-section" className={sectionClass('packages-section')}>
              <PackageTable 
                title="חבילות צילום" 
                packages={packages} 
              />
            </div>
            
            <div id="contact-section" className={sectionClass('contact-section')}>
              <ContactForm 
                title="יצירת קשר" 
                phone="+972 50-1234567" 
                email="contact@photography.com" 
              />
            </div>
            
            <div id="location-section" className={sectionClass('location-section')}>
              <Location 
                title="המיקום שלנו" 
                address="רחוב הברוש 15, תל אביב" 
                mapUrl="https://maps.google.com?q=Tel+Aviv" 
              />
            </div>
            
            <div id="footer-section" className={sectionClass('footer-section')}>
              <Footer />
            </div>
          </div>
        </ScrollArea>
        
        {!isMobile && (
          <div className="hidden md:block md:w-1/3 h-screen">
            <div className="sticky top-0 h-screen">
              <ImageSlideshow images={placeholderImages} interval={7000} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
