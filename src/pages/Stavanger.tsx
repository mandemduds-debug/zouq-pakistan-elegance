import LocationSpecificNavigation from '@/components/LocationSpecificNavigation';
import ZouqAboutSection from '@/components/ZouqAboutSection';
import MenuCateringSection from '@/components/MenuCateringSection';
import GallerySection from '@/components/GallerySection';
import VisitUsSection from '@/components/VisitUsSection';
import Footer from '@/components/Footer';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown } from 'lucide-react';

// Location-specific locations (excluding current location)
const stavangerOtherLocations = [
  {
    name: 'Sandnes',
    address: 'Langgata 45, 4306 Sandnes',
    phone: '+47 51 68 45 67',
    hours: 'Man-Søn: 15:00-23:00',
    image: '/src/assets/restaurant-interior.jpg',
    description: 'Moderne eleganse i Sandnes sentrum'
  },
  {
    name: 'Sandvika',
    address: 'Sandvika Storsenter, 1338 Sandvika',
    phone: '+47 67 54 89 12',
    hours: 'Man-Søn: 15:00-23:00',
    image: '/src/assets/restaurant-interior.jpg',
    description: 'Pakistansk luksus ved fjorden'
  }
];

// Stavanger-specific Hero Section
const StavangerHeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const scrollToNext = () => {
    const element = document.getElementById('om-oss');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hjem" className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src="/src/assets/hero-image.jpg"
          alt="Zouq Stavanger"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-overlay" />
      </div>

      {/* Pattern Overlay */}
      <div className="absolute inset-0 pattern-overlay opacity-30" />

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Zouq Stavanger
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-4 font-light">
            Vår flaggskiprestaurant i hjerte av Stavanger
          </p>
          <p className="text-2xl md:text-3xl text-gold font-serif font-semibold mb-8">
            Øvre Holmegate 15
          </p>
          <p className="text-lg md:text-xl text-white/80 mb-12 max-w-2xl mx-auto leading-relaxed">
            Opplev autentiske smaker fra Pakistan i elegante og moderne omgivelser. 
            Vi kombinerer tradisjonell gjestfrihet med sofistikert kulinarisk kunstnerskap.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-gradient-gold text-background font-semibold hover:opacity-90 transition-all hover-lift text-lg px-8 py-6"
            >
              Book Bord
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="bg-white text-gold border-white hover:bg-white/90 hover:text-gold transition-all hover-lift text-lg px-8 py-6 font-semibold"
              onClick={() => document.getElementById('meny')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Bestill Takeaway
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors animate-bounce"
      >
        <ChevronDown className="h-8 w-8" />
      </button>

      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-2 h-2 bg-gold rounded-full opacity-50 animate-pulse" />
      <div className="absolute top-40 right-20 w-3 h-3 bg-primary rounded-full opacity-40 animate-pulse delay-1000" />
      <div className="absolute bottom-40 left-20 w-2 h-2 bg-gold rounded-full opacity-60 animate-pulse delay-500" />
    </section>
  );
};

const Stavanger = () => {
  return (
    <div className="min-h-screen bg-background">
      <LocationSpecificNavigation locationName="Stavanger" />
      <StavangerHeroSection />
      <ZouqAboutSection />
      <MenuCateringSection locationName="Stavanger" />
      <GallerySection />
      <VisitUsSection locations={stavangerOtherLocations} currentLocationName="Stavanger" />
      <Footer />
    </div>
  );
};

export default Stavanger;