import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import stavangerImage from '@/assets/stavanger-location.png';
import sandnesImage from '@/assets/sandnes-location.png';
import sandvikaImage from '@/assets/sandvika-location.png';
import zouqLogo from '@/assets/zouq-logo.png';

const locations = [
  {
    id: 'stavanger',
    name: 'Stavanger',
    address: 'Øvre Holmegate 15, 4006 Stavanger',
    phone: '+47 51 89 12 34',
    hours: 'Man-Søn: 15:00-23:00',
    image: stavangerImage,
    description: 'Vår flaggskiprestaurant i hjerte av Stavanger',
    route: '/stavanger'
  },
  {
    id: 'sandnes',
    name: 'Sandnes',
    address: 'Langgata 45, 4306 Sandnes',
    phone: '+47 51 68 45 67',
    hours: 'Man-Søn: 15:00-23:00',
    image: sandnesImage,
    description: 'Moderne eleganse i Sandnes sentrum',
    route: '/sandnes'
  },
  {
    id: 'sandvika',
    name: 'Sandvika',
    address: 'Sandvika Storsenter, 1338 Sandvika',
    phone: '+47 67 54 89 12',
    hours: 'Man-Søn: 15:00-23:00',
    image: sandvikaImage,
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
    <div className="bg-background flex flex-col">
      {/* Kompakt Header */}
      <header className="relative py-6 flex items-center justify-center bg-primary">
        <div className="relative z-10 text-center px-6">
          <img 
            src={zouqLogo} 
            alt="Zouq Restaurant Logo" 
            className="h-16 md:h-20 mx-auto"
          />
        </div>
      </header>

      {/* Restauranter - Synlige Umiddelbart */}
      <main className="py-12 pb-4" style={{ backgroundColor: '#f4e9da' }}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {locations.map((location, index) => (
              <Card 
                key={location.id}
                className={`overflow-hidden hover-lift cursor-pointer group border-2 hover:border-primary transition-all duration-300 ${
                  isVisible ? 'animate-fade-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleLocationSelect(location.route)}
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={location.image}
                    alt={`Zouq ${location.name}`}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <CardContent className="p-5">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-4">
                    {location.name}
                  </h2>
                  
                  <div className="space-y-2 mb-5">
                    <div className="flex items-start text-sm text-muted-foreground">
                      <MapPin className="h-4 w-4 mr-2 mt-0.5 text-primary flex-shrink-0" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Clock className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      {location.hours}
                    </div>
                    <div className="flex items-center text-sm text-muted-foreground">
                      <Phone className="h-4 w-4 mr-2 text-primary flex-shrink-0" />
                      {location.phone}
                    </div>
                  </div>
                  
                  <Button 
                    className="w-full bg-gradient-gold font-semibold hover:opacity-90 transition-all"
                    style={{ color: '#f4e9da' }}
                  >
                    Velg Restaurant
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center text-foreground text-base md:text-lg mt-10 mb-8 max-w-2xl mx-auto">
            Spis ekte pakistansk mat. Vi tilbyr både dine-in og takeaway. Velg din restaurant for å utforske menyen vår.
          </p>
        </div>
      </main>

      {/* Kompakt Footer */}
      <footer className="bg-primary text-primary-foreground py-6">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <div className="flex flex-wrap justify-center gap-4 text-sm">
              <a href="tel:+4751891234" className="hover:text-gold transition-colors">
                Tlf: +47 51 89 12 34
              </a>
              <span className="text-primary-foreground/50">•</span>
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