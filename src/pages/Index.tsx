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

  return (
    <div className="min-h-screen bg-photo-soft overflow-hidden">
      <Header />
      
      {/* Main Content */}
      <div className="flex h-screen">
        {/* Left Content (scrollable) */}
        <div className="w-full md:w-2/3 h-screen overflow-y-auto pt-32 pb-8">
          <Hero 
            businessName="סטודיו לצילומי משפחה" 
            subtitle="רגעים קסומים שנשארים לנצח"
          />
          
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
          
          <Footer />
        </div>
        
        {/* Right Column (1/3) - Only visible on desktop */}
        {!isMobile && (
          <div className="hidden md:block md:w-1/3 h-screen fixed right-0">
            <ImageSlideshow images={placeholderImages} interval={7000} />
          </div>
        )}
      </div>
    </div>
  );
};

export default Index;
