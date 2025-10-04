import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      setIsMobileMenuOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-lg shadow-luxury'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className={`text-3xl font-serif font-bold ${isScrolled ? 'text-primary' : 'text-white'}`}>
            Zouq
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('om-oss')}
              className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors font-medium`}
            >
              Om Zouq
            </button>
            <button
              onClick={() => scrollToSection('meny')}
              className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors font-medium`}
            >
              Meny
            </button>
            <button
              onClick={() => scrollToSection('opplevelsen')}
              className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors font-medium`}
            >
              Opplevelsen
            </button>
            <button
              onClick={() => scrollToSection('lokasjoner')}
              className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors font-medium`}
            >
              Lokasjoner
            </button>
            <button
              onClick={() => scrollToSection('kontakt')}
              className={`${isScrolled ? 'text-foreground' : 'text-white'} hover:text-primary transition-colors font-medium`}
            >
              Kontakt
            </button>
            <Button variant="default" className="bg-gradient-gold text-background font-semibold hover:opacity-90">
              Book Bord
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-foreground' : 'text-white'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-lg shadow-luxury">
            <div className="px-6 py-4 space-y-4">
              <button
                onClick={() => scrollToSection('om-oss')}
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                Om Zouq
              </button>
              <button
                onClick={() => scrollToSection('meny')}
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                Meny
              </button>
              <button
                onClick={() => scrollToSection('opplevelsen')}
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                Opplevelsen
              </button>
              <button
                onClick={() => scrollToSection('lokasjoner')}
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                Lokasjoner
              </button>
              <button
                onClick={() => scrollToSection('kontakt')}
                className="block text-foreground hover:text-primary transition-colors font-medium"
              >
                Kontakt
              </button>
              <Button className="w-full bg-gradient-gold text-background font-semibold hover:opacity-90">
                Book Bord
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;