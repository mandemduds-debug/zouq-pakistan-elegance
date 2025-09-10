import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone } from 'lucide-react';

const locations = [
  {
    name: 'Zouq Sandvika',
    address: 'Sandvika Storsenter, Storsenteret 2, 1338 Sandvika',
    phone: '+47 67 12 34 56',
    hours: 'Man-Søn: 16:00-23:00',
    image: '/lovable-uploads/df1e41bf-c5fc-485b-a631-f0898f5169ab.png',
    description: 'Tradisjonell pakistansk mat i hjertet av Sandvika'
  },
  {
    name: 'Zouq Stavanger',
    address: 'Øvre Holmegate 22, 4006 Stavanger',
    phone: '+47 51 12 34 56',
    hours: 'Man-Søn: 17:00-22:00',
    image: '/lovable-uploads/6449f5ba-b4d4-40dc-96c5-442acf6bdbed.png',
    description: 'Moderne eleganse i Oljehovedstaden'
  },
  {
    name: 'Zouq Sandnes',
    address: 'Kvadrat Storsenter, Kvadrat 4, 4306 Sandnes',
    phone: '+47 51 65 43 21',
    hours: 'Man-Søn: 16:30-22:30',
    image: '/lovable-uploads/3aac6634-81d7-42d6-9d70-b33f276fd4a1.png',
    description: 'Autentiske smaker ved Kvadrat Storsenter'
  }
];

const LocationsSection = () => {
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
            Våre Lokasjoner
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Finn din nærmeste Zouq-restaurant og opplev autentisk pakistansk luksus 
            i elegante omgivelser over hele Norge.
          </p>
        </div>

        {/* Locations Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover-lift hover-emerald transition-all duration-500 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                {location.image.includes('placeholder') ? (
                  <div className="w-full h-full bg-gradient-emerald flex items-center justify-center">
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
                  {location.name}
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