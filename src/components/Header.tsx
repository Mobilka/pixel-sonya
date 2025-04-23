
import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="w-full bg-photo-soft/80 backdrop-blur-sm py-4 px-6 fixed top-0 z-50">
      <div className="w-full flex items-center justify-center">
        <Link to="/" className="w-full flex justify-center">
          <img 
            src="/lovable-uploads/696b3217-048d-431f-b7b0-85fc08f00f8a.png" 
            alt="Pixel Sonya - Professional Photographer" 
            className="w-full max-w-screen-lg h-24 object-contain"
          />
        </Link>
      </div>
    </header>
  );
}
