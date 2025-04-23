
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="w-full bg-photo-soft/80 backdrop-blur-sm py-4 px-6 fixed top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        <Link to="/" className="block">
          <img 
            src="/lovable-uploads/696b3217-048d-431f-b7b0-85fc08f00f8a.png" 
            alt="Pixel Sonya - Professional Photographer" 
            className="h-24 object-contain"
          />
        </Link>
      </div>
    </header>
  );
}
