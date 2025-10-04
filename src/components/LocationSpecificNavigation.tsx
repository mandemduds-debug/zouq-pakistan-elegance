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

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('hjem')} 
              className="hover:text-gold transition-colors"
            >
              Hjem
            </button>
            <button 
              onClick={() => scrollToSection('meny')} 
              className="hover:text-gold transition-colors"
            >
              Meny
            </button>
            <button 
              onClick={() => scrollToSection('catering')} 
              className="hover:text-gold transition-colors"
            >
              Catering
            </button>
            <button 
              onClick={() => scrollToSection('opplevelsen')} 
              className="hover:text-gold transition-colors"
            >
              Opplevelsen
            </button>
            <button 
              onClick={() => scrollToSection('om-oss')} 
              className="hover:text-gold transition-colors"
            >
              Om Oss
            </button>
            <button 
              onClick={() => scrollToSection('lokasjoner')} 
              className="hover:text-gold transition-colors"
            >
              Andre avdelinger
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')} 
              className="hover:text-gold transition-colors"
            >
              Kontakt
            </button>
            <Button 
              className="bg-gradient-gold text-background hover:opacity-90 transition-all font-semibold"
            >
              Book Bord
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className={`md:hidden mt-4 py-4 rounded-lg ${
            isScrolled ? 'bg-background/95' : 'bg-black/50'
          }`}>
            <div className="flex flex-col space-y-4">
              <button 
                onClick={navigateToHome}
                className="text-left py-2 hover:text-gold transition-colors flex items-center space-x-2"
              >
                <Home className="h-4 w-4" />
                <span>Alle avdelinger</span>
              </button>
              <button 
                onClick={() => scrollToSection('hjem')} 
                className="text-left py-2 hover:text-gold transition-colors"
              >
                Hjem
              </button>
              <button 
                onClick={() => scrollToSection('meny')} 
                className="text-left py-2 hover:text-gold transition-colors"
              >
                Meny
              </button>
              <button 
                onClick={() => scrollToSection('catering')} 
                className="text-left py-2 hover:text-gold transition-colors"
              >
                Catering
              </button>
              <button 
                onClick={() => scrollToSection('opplevelsen')} 
                className="text-left py-2 hover:text-gold transition-colors"
              >
                Opplevelsen
              </button>
              <button 
                onClick={() => scrollToSection('om-oss')} 
                className="text-left py-2 hover:text-gold transition-colors"
              >
                Om Oss
              </button>
              <button 
                onClick={() => scrollToSection('lokasjoner')} 
                className="text-left py-2 hover:text-gold transition-colors"
              >
                Andre avdelinger
              </button>
              <button 
                onClick={() => scrollToSection('kontakt')} 
                className="text-left py-2 hover:text-gold transition-colors"
              >
                Kontakt
              </button>
              <Button 
                className="bg-gradient-gold text-background hover:opacity-90 transition-all font-semibold mt-4"
              >
                Book Bord
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default LocationSpecificNavigation;