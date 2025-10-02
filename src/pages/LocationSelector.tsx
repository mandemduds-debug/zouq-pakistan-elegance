import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const locations = [
  {
    id: 'stavanger',
    name: 'Stavanger',
    address: 'Øvre Holmegate 15, 4006 Stavanger',
    phone: '+47 51 89 12 34',
    hours: 'Man-Søn: 15:00-23:00',
    image: '/src/assets/restaurant-interior.jpg',
    description: 'Vår flaggskiprestaurant i hjerte av Stavanger',
    route: '/stavanger'
  },
  {
    id: 'sandnes',
    name: 'Sandnes',
    address: 'Langgata 45, 4306 Sandnes',
    phone: '+47 51 68 45 67',
    hours: 'Man-Søn: 15:00-23:00',
    image: '/src/assets/restaurant-interior.jpg',
    description: 'Moderne eleganse i Sandnes sentrum',
    route: '/sandnes'
  },
  {
    id: 'sandvika',
    name: 'Sandvika',
    address: 'Sandvika Storsenter, 1338 Sandvika',
    phone: '+47 67 54 89 12',
    hours: 'Man-Søn: 15:00-23:00',
    image: '/src/assets/restaurant-interior.jpg',
    description: 'Pakistansk luksus ved fjorden',
    route: '/sandvika'
  }
];

const LocationSelector = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleLocationSelect = (route: string) => {
    navigate(route);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/src/assets/hero-image.jpg"
            alt="Zouq Restaurant"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-overlay" />
        </div>

        {/* Pattern Overlay */}
        <div className="absolute inset-0 pattern-overlay opacity-30" />

        {/* Content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
          <div className={`transition-all duration-1000 ${isVisible ? 'animate-fade-up' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-4 leading-tight">
              Zouq
            </h1>
            <p className="text-xl md:text-2xl text-gold font-serif font-semibold mb-3">
              Velg din restaurant
            </p>
            <p className="text-base md:text-lg text-white/80 max-w-2xl mx-auto leading-relaxed">
              Opplev autentiske smaker fra Pakistan i elegante og moderne omgivelser
            </p>
          </div>
        </div>
      </section>

      {/* Location Selection */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6">
          <div className={`text-center mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-3">
              Våre Restauranter
            </h2>
            <div className="w-24 h-1 bg-gradient-gold mx-auto mb-4"></div>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Velg den restauranten som passer deg best. Hver lokasjon tilbyr den samme høye kvaliteten og autentiske smaken.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {locations.map((location, index) => (
              <Card 
                key={location.id}
                className={`overflow-hidden hover-lift cursor-pointer group shadow-luxury ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onClick={() => handleLocationSelect(location.route)}
              >
                <div className="aspect-[4/3] overflow-hidden">
                  <img
                    src={location.image}
                    alt={`Zouq ${location.name}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="text-2xl font-serif font-bold text-foreground mb-2">
                    Zouq {location.name}
                  </h3>
                  <p className="text-muted-foreground mb-4 text-sm">
                    {location.description}
                  </p>
                  
                  <div className="space-y-2 mb-6">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 text-primary" />
                      {location.address}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-primary" />
                      {location.hours}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2 text-primary" />
                      {location.phone}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-gold text-background font-semibold hover:opacity-90 transition-all"
                    size="lg"
                  >
                    Velg Restaurant
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-12">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <h3 className="text-2xl font-serif font-bold mb-4">Zouq Restaurant</h3>
            <p className="text-primary-foreground/80 mb-6">
              En smak av Pakistan, løftet til luksus
            </p>
            <div className="flex justify-center space-x-6">
              <a href="tel:+4751891234" className="hover:text-gold transition-colors">
                Tlf: +47 51 89 12 34
              </a>
              <span className="text-primary-foreground/50">|</span>
              <a href="mailto:post@zouq.no" className="hover:text-gold transition-colors">
                post@zouq.no
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LocationSelector;