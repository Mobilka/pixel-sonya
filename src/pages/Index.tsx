
import { useIsMobile } from "@/hooks/use-mobile";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Gallery } from "@/components/Gallery";
import { ImageSlideshow } from "@/components/ImageSlideshow";
import { PackageTable } from "@/components/PackageTable";
import { ContactForm } from "@/components/ContactForm";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

// Placeholder data - replace with actual content
const placeholderImages = [
  "https://images.unsplash.com/photo-1618160702438-9b02ab6515c9?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1721322800607-8c38375eef04?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1535268647677-300dbf3d78d1?auto=format&fit=crop&q=80",
  "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&q=80", 
  "https://images.unsplash.com/photo-1582562124811-c09040d0a901?auto=format&fit=crop&q=80"
];

const packages = [
  {
    name: "חבילה בסיסית",
    price: "₪600",
    features: [
      "צילום עד שעה",
      "15 תמונות ערוכות",
      "גלריה דיגיטלית",
      "משלוח תוך 7 ימים"
    ]
  },
  {
    name: "חבילה מורחבת",
    price: "₪900",
    features: [
      "צילום עד שעתיים",
      "30 תמונות ערוכות",
      "גלריה דיגיטלית",
      "משלוח תוך 5 ימים",
      "אלבום דיגיטלי"
    ],
    isPrimary: true
  },
  {
    name: "חבילה מלאה",
    price: "₪1200",
    features: [
      "צילום עד 3 שעות",
      "50 תמונות ערוכות",
      "גלריה דיגיטלית",
      "משלוח תוך 3 ימים",
      "אלבום דיגיטלי",
      "אלבום מודפס"
    ]
  }
];

const aboutContent = `אני צלמת משפחות המתמחה בלכידת הרגעים המיוחדים של המשפחה שלכם בדרך טבעית ואותנטית.

עם יותר מ-10 שנות ניסיון בצילום ילדים ומשפחות, אני יודעת כיצד להפיק את המיטב מהמפגש, תוך יצירת אווירה נינוחה ומהנה עבור כולם.

המטרה שלי היא לתעד את ההתרגשות, החיבור והרגעים הספונטניים של המשפחה שלכם, שיהפכו לזיכרונות יקרים לשנים רבות.`;

const Index = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen bg-photo-soft overflow-x-hidden">
      {/* Hero Section */}
      <Hero 
        businessName="סטודיו לצילומי משפחה" 
        subtitle="רגעים קסומים שנשארים לנצח"
      />
      
      {/* Main Content */}
      <div className="w-full flex flex-col md:flex-row">
        {/* Left Column (2/3) */}
        <div className="w-full md:w-2/3">
          <About 
            title="ברוכים הבאים" 
            content={aboutContent} 
          />
          
          <Gallery 
            title="הגלריה שלי" 
            images={placeholderImages} 
          />
          
          <PackageTable 
            title="חבילות צילום" 
            packages={packages} 
          />
          
          <ContactForm 
            title="יצירת קשר" 
            phone="+972 50-1234567" 
            email="contact@photography.com" 
          />
          
          <Location 
            title="המיקום שלנו" 
            address="רחוב הברוש 15, תל אביב" 
            mapUrl="https://maps.google.com?q=Tel+Aviv" 
          />
        </div>
        
        {/* Right Column (1/3) - Only visible on desktop */}
        {!isMobile && (
          <div className="hidden md:block md:w-1/3 sticky top-0 h-screen">
            <div className="h-full w-full">
              <ImageSlideshow images={placeholderImages} interval={7000} />
            </div>
          </div>
        )}
      </div>
      
      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
