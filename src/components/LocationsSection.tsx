import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone } from 'lucide-react';

const defaultLocations = [
  {
    name: 'Stavanger',
    address: 'Øvre Holmegate 15, 4006 Stavanger',
    phone: '+47 51 89 12 34',
    hours: 'Man-Søn: 15:00-23:00',
    image: 'lovable-uploads/ec48a68c-03e0-4922-9379-bbc1c48b412e.png',
    description: 'Vår flaggskiprestaurant i hjerte av Stavanger'
  },
  {
    name: 'Sandnes',
    address: 'Langgata 45, 4306 Sandnes',
    phone: '+47 51 68 45 67',
    hours: 'Man-Søn: 15:00-23:00',
    image: 'lovable-uploads/df1e41bf-c5fc-485b-a631-f0898f5169ab.png',
    description: 'Moderne eleganse i Sandnes sentrum'
  },
  {
    name: 'Sandvika',
    address: 'Sandvika Storsenter, 1338 Sandvika',
    phone: '+47 67 54 89 12',
    hours: 'Man-Søn: 15:00-23:00',
    image: 'lovable-uploads/40a3966a-253d-46ab-ab9d-de95a85989b9.png',
    description: 'Pakistansk luksus ved fjorden'
  }
];

interface LocationsSectionProps {
  locations?: typeof defaultLocations;
  title?: string;
}

const LocationsSection: React.FC<LocationsSectionProps> = ({ 
  locations = defaultLocations, 
  title = "Våre Lokasjoner" 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="lokasjoner" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            {title}
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Finn din nærmeste Zouq-restaurant og opplev autentisk pakistansk luksus 
            i elegante omgivelser over hele Norge.
          </p>
        </div>

        {/* Locations Grid */}
        <div className={`grid gap-8 ${
          locations.length === 2 ? 'md:grid-cols-2 max-w-4xl mx-auto' : 'md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {locations.map((location, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover-lift hover-red transition-all duration-500 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                {location.image.includes('placeholder') ? (
                  <div className="w-full h-full bg-gradient-red flex items-center justify-center">
                    <div className="text-white text-center">
                      <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                      <div className="text-sm opacity-75">Bilde kommer snart</div>
                    </div>
                  </div>
                ) : (
                  <img
                    src={location.image}
                    alt={`${location.name} restaurant`}
                    className="w-full h-full object-cover"
                  />
                )}
                <div className="absolute inset-0 bg-gradient-overlay opacity-20 group-hover:opacity-40 transition-opacity" />
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                  Zouq {location.name}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {location.description}
                </p>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-4 w-4 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{location.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Clock className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{location.hours}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{location.phone}</span>
                  </div>
                </div>
                
                <Button 
                  onClick={() => {
                    const address = encodeURIComponent(location.address);
                    window.open(`https://www.google.com/maps/dir/?api=1&destination=${address}`, '_blank');
                  }}
                  className="w-full bg-gradient-gold text-background font-semibold hover:opacity-90 transition-all"
                >
                  Få Veibeskrivelse
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Simple Map Link */}
        <div className={`mt-16 text-center ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <Button
            onClick={() => {
              const allAddresses = locations.map(loc => encodeURIComponent(loc.address)).join('/');
              window.open(`https://www.google.com/maps/search/Zouq+restaurant+Norge`, '_blank');
            }}
            variant="outline"
            size="lg"
            className="bg-background hover:bg-secondary/20"
          >
            <MapPin className="h-5 w-5 mr-2" />
            Se alle restauranter på kart
          </Button>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;