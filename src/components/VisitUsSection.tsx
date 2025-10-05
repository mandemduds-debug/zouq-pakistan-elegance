import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Instagram, Facebook, ExternalLink } from 'lucide-react';

interface Location {
  name: string;
  address: string;
  phone: string;
  hours: string;
  image: string;
  description: string;
}

interface VisitUsSectionProps {
  locations: Location[];
  currentLocationName: string;
}

const VisitUsSection = ({ locations, currentLocationName }: VisitUsSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="kontakt" ref={sectionRef} className="py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Besøk oss
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Kom og opplev Zouq på våre tre unike lokasjoner eller ta kontakt med oss
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Contact Information */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-6">
                Kontakt Zouq {currentLocationName}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-red rounded-lg flex items-center justify-center">
                      <Phone className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Telefon</h4>
                    <p className="text-muted-foreground">+47 22 12 34 56</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                      <Mail className="h-6 w-6 text-background" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">E-post</h4>
                    <p className="text-muted-foreground">hei@zouq.no</p>
                    <p className="text-sm text-muted-foreground">Vi svarer innen 24 timer</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-gold rounded-lg flex items-center justify-center">
                      <Clock className="h-6 w-6 text-background" />
                    </div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground mb-1">Åpningstider</h4>
                    <p className="text-muted-foreground">Mandag - Søndag</p>
                    <p className="text-muted-foreground">16:00 - 23:00</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Other Locations */}
            {locations.length > 0 && (
              <div>
                <h4 className="text-xl font-serif font-bold text-foreground mb-6">
                  Andre Lokasjoner
                </h4>
                <div className="space-y-4">
                  {locations.map((location, index) => (
                    <Card key={index} className="hover-lift transition-all duration-300">
                      <CardContent className="p-4">
                        <div className="flex items-center space-x-4">
                          <img
                            src={location.image}
                            alt={location.name}
                            className="w-16 h-16 object-cover rounded-lg"
                          />
                          <div className="flex-1">
                            <h5 className="font-semibold text-foreground mb-1">
                              Zouq {location.name}
                            </h5>
                            <p className="text-sm text-muted-foreground mb-1">
                              {location.address}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {location.hours}
                            </p>
                          </div>
                          <ExternalLink className="h-4 w-4 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            )}

            {/* Social Media */}
            <div>
              <h4 className="font-semibold text-foreground mb-4">Følg oss</h4>
              <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center hover-lift transition-all">
                  <Instagram className="h-5 w-5 text-white" />
                </a>
                <a href="#" className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center hover-lift transition-all">
                  <Facebook className="h-5 w-5 text-white" />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={`${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <Card className="shadow-luxury">
              <CardContent className="p-6">
                <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
                  Send oss en melding
                </h3>
                
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-3">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-1">
                        Navn *
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        type="text" 
                        required 
                        value={formData.name} 
                        onChange={handleInputChange} 
                        className="border-border focus:ring-primary focus:border-primary" 
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-foreground mb-1">
                        Telefon
                      </label>
                      <Input 
                        id="phone" 
                        name="phone" 
                        type="tel" 
                        value={formData.phone} 
                        onChange={handleInputChange} 
                        className="border-border focus:ring-primary focus:border-primary" 
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-1">
                      E-post *
                    </label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      required 
                      value={formData.email} 
                      onChange={handleInputChange} 
                      className="border-border focus:ring-primary focus:border-primary" 
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-1">
                      Melding *
                    </label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      required 
                      rows={3} 
                      value={formData.message} 
                      onChange={handleInputChange} 
                      className="border-border focus:ring-primary focus:border-primary resize-none max-h-32" 
                      placeholder="Fortell oss hvordan vi kan hjelpe deg..." 
                    />
                  </div>
                  
                  <Button type="submit" className="w-full bg-gradient-gold text-background font-semibold hover:opacity-90 transition-all hover-lift text-base py-4">
                    Send Melding
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisitUsSection;
