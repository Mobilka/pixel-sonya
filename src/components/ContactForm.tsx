
import { useState, useEffect } from 'react';
import { Phone, Mail } from 'lucide-react';

interface ContactFormProps {
  title?: string;
  phone?: string;
  email?: string;
}

export function ContactForm({ title, phone, email }: ContactFormProps) {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
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

    const element = document.getElementById('contact-section');
    if (element) observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Here you would normally send the form data to a backend
    // For now, we'll simulate a successful submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setName('');
      setContactInfo('');
      setMessage('');
      
      // Reset the success message after a delay
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  const openWhatsApp = () => {
    if (!phone) return;
    const phoneNumber = phone.replace(/\D/g, ''); // Remove non-digits
    window.open(`https://wa.me/${phoneNumber}`, '_blank');
  };

  const openEmail = () => {
    if (!email) return;
    window.open(`mailto:${email}`);
  };

  return (
    <section id="contact-section" className="py-12 md:py-16 px-4">
      <div 
        className={`max-w-4xl mx-auto transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {title && (
          <h2 className="text-3xl md:text-4xl font-light text-center mb-10 text-photo-text">
            {title}
          </h2>
        )}
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Contact Form */}
          <div className="bg-white shadow-lg rounded-lg p-6">
            <h3 className="text-xl font-medium mb-6 text-photo-text text-center">השאירו פרטים ואחזור אליכם</h3>
            
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-photo-text mb-1">שם מלא</label>
                <input
                  type="text"
                  id="name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-photo-accent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="contact" className="block text-sm font-medium text-photo-text mb-1">טלפון או מייל</label>
                <input
                  type="text"
                  id="contact"
                  value={contactInfo}
                  onChange={(e) => setContactInfo(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-photo-accent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="message" className="block text-sm font-medium text-photo-text mb-1">הודעה (אופציונלי)</label>
                <textarea
                  id="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={4}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-photo-accent"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-photo-accent text-white font-medium py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-photo-accent"
              >
                {isSubmitting ? 'שולח...' : 'שליחה'}
              </button>
              
              {isSubmitted && (
                <div className="mt-4 p-3 bg-green-100 text-green-800 rounded-md text-center">
                  ההודעה נשלחה בהצלחה! נחזור אליך בהקדם.
                </div>
              )}
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8">
            {phone && (
              <button 
                onClick={openWhatsApp}
                className="flex items-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <Phone className="h-10 w-10 text-photo-accent ml-4 rtl:ml-4 rtl:mr-0" />
                <div className="text-right rtl:text-right">
                  <p className="text-sm text-gray-500">יצירת קשר בוואטסאפ</p>
                  <p className="text-lg font-medium text-photo-text">{phone}</p>
                </div>
              </button>
            )}
            
            {email && (
              <button 
                onClick={openEmail}
                className="flex items-center p-4 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow"
              >
                <Mail className="h-10 w-10 text-photo-accent ml-4" />
                <div className="text-right">
                  <p className="text-sm text-gray-500">שליחת מייל</p>
                  <p className="text-lg font-medium text-photo-text">{email}</p>
                </div>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
