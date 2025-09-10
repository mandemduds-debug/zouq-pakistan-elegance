import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { MapPin, Clock, Phone } from 'lucide-react';

const locations = [
  {
    name: 'Zouq Oslo',
    address: 'Karl Johans gate 12, 0154 Oslo',
    phone: '+47 22 12 34 56',
    hours: 'Man-Søn: 16:00-23:00',
    image: '/api/placeholder/400/300',
    description: 'Vår flaggskiprestaurant i hjertet av Oslo'
  },
  {
    name: 'Zouq Bergen',
    address: 'Bryggen 8, 5003 Bergen',
    phone: '+47 55 12 34 56',
    hours: 'Man-Søn: 17:00-22:30',
    image: '/api/placeholder/400/300',
    description: 'Autentisk pakistansk mat ved historiske Bryggen'
  },
  {
    name: 'Zouq Trondheim',
    address: 'Munkegata 15, 7011 Trondheim',
    phone: '+47 73 12 34 56',
    hours: 'Man-Søn: 16:30-23:00',
    image: '/api/placeholder/400/300',
    description: 'Luksuriøs spisestue i Trondheims gamle bydel'
  },
  {
    name: 'Zouq Stavanger',
    address: 'Øvre Holmegate 22, 4006 Stavanger',
    phone: '+47 51 12 34 56',
    hours: 'Man-Søn: 17:00-22:00',
    image: '/api/placeholder/400/300',
    description: 'Moderne eleganse på Oljehovedstaden'
  },
  {
    name: 'Zouq Tromsø',
    address: 'Storgata 45, 9008 Tromsø',
    phone: '+47 77 12 34 56',
    hours: 'Man-Søn: 16:00-22:30',
    image: '/api/placeholder/400/300',
    description: 'Varme smaker under nordlyset'
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
                <div className="w-full h-full bg-gradient-emerald flex items-center justify-center">
                  <div className="text-white text-center">
                    <MapPin className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <div className="text-sm opacity-75">Bilde kommer snart</div>
                  </div>
                </div>
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
                  className="w-full bg-gradient-gold text-background font-semibold hover:opacity-90 transition-all"
                >
                  Book Bord
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map Integration Placeholder */}
        <div className={`mt-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <Card className="overflow-hidden shadow-luxury">
            <div className="h-96 bg-secondary/50 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="h-16 w-16 mx-auto mb-4 opacity-50" />
                <p className="text-lg font-semibold mb-2">Interaktivt kart</p>
                <p className="text-sm">Google Maps integrasjon kommer snart</p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default LocationsSection;