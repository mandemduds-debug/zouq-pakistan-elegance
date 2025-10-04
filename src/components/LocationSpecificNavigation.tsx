import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Home } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface LocationSpecificNavigationProps {
  locationName: string;
}

const LocationSpecificNavigation: React.FC<LocationSpecificNavigationProps> = ({ locationName }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  const navigateToHome = () => {
    navigate('/');
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-sm shadow-luxury text-foreground' 
        : 'bg-white text-foreground'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <button 
              onClick={navigateToHome}
              className="flex items-center space-x-2 hover:opacity-80 transition-opacity"
            >
              <Home className="h-5 w-5" />
              <span className="text-sm">Alle avdelinger</span>
            </button>
            <span className="text-2xl font-serif font-bold">
              Zouq {locationName}
            </span>
          </div>

          {/* Book Bord Button & Burger Menu */}
          <div className="flex items-center gap-3">
            <Button 
              className="bg-gradient-gold text-background hover:opacity-90 transition-all font-semibold"
            >
              Book Bord
            </Button>
            <button
              className="p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Burger Menu */}
        {isMobileMenuOpen && (
          <div className="mt-6 py-6 px-6 rounded-xl bg-background/98 backdrop-blur-md shadow-luxury border border-gold/20">
            <div className="flex flex-col space-y-2">
              <button 
                onClick={navigateToHome}
                className="text-left px-4 py-3 rounded-lg hover:bg-gold/10 hover:text-gold transition-all flex items-center space-x-3 group"
              >
                <Home className="h-5 w-5 group-hover:scale-110 transition-transform" />
                <span className="font-medium">Alle avdelinger</span>
              </button>
              
              <div className="h-px bg-gold/20 my-2"></div>
              
              <button
                onClick={() => scrollToSection('meny')} 
                className="text-left px-4 py-3 rounded-lg hover:bg-gold/10 hover:text-gold transition-all font-medium"
              >
                Meny
              </button>
              <button 
                onClick={() => scrollToSection('catering')} 
                className="text-left px-4 py-3 rounded-lg hover:bg-gold/10 hover:text-gold transition-all font-medium"
              >
                Catering
              </button>
              <button 
                onClick={() => scrollToSection('opplevelsen')} 
                className="text-left px-4 py-3 rounded-lg hover:bg-gold/10 hover:text-gold transition-all font-medium"
              >
                Opplevelsen
              </button>
              <button 
                onClick={() => scrollToSection('om-oss')} 
                className="text-left px-4 py-3 rounded-lg hover:bg-gold/10 hover:text-gold transition-all font-medium"
              >
                Om Oss
              </button>
              <button 
                onClick={() => scrollToSection('kontakt')} 
                className="text-left px-4 py-3 rounded-lg hover:bg-gold/10 hover:text-gold transition-all font-medium"
              >
                Kontakt
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LocationSpecificNavigation;