import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Users, Utensils, Sparkles } from 'lucide-react';

const experiences = [
  {
    icon: Utensils,
    title: 'Kulinarisk Kunstnerskap',
    description: 'Hver rett er nøye komponert av våre erfarne kokker som kombinerer tradisjon med innovasjon.'
  },
  {
    icon: Music,
    title: 'Atmosfære & Stemning',
    description: 'Opplev autentisk pakistansk musikk og design som skaper den perfekte rammen for ditt måltid.'
  },
  {
    icon: Users,
    title: 'Gjestfrihet',
    description: 'Vår varme og personlige service gjør hver gjest til familie fra det øyeblikket de trer inn.'
  },
  {
    icon: Sparkles,
    title: 'Luksuriøs Eleganse',
    description: 'Moderne design møter pakistanske tradisjoner i våre nøye utformede restaurantlokaler.'
  }
];

const ZouqAboutSection = () => {
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
    <section id="om-oss" ref={sectionRef} className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center mb-24">
          {/* Text Content */}
          <div className={`space-y-8 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Om Zouq
              </h2>
              <div className="w-20 h-1 bg-gradient-gold mb-8" />
            </div>
            
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p>
                I hjertet av pakistansk matkultur ligger en dyptfølt tradisjon for 
                <span className="text-primary font-semibold"> gjestfrihet, fellesskap og kjærlighet til mat</span>. 
                Hver rett forteller en historie – om krydder som har reist tusenvis av kilometer, 
                om teknikker overført gjennom generasjoner.
              </p>
              
              <p>
                På Zouq tar vi denne rike arven og løfter den til nye høyder. Vi kombinerer 
                <span className="text-gold font-semibold"> autentiske smaker</span> med moderne 
                kulinarisk innovasjon, tradisjonelle oppskrifter med elegante presentasjoner.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-gold mb-2">15+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">År erfaring</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-primary mb-2">50+</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Signaturretter</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-gold mb-2">3</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">Lokasjoner</div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className={`relative ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-lg shadow-luxury">
              <img
                src="lovable-uploads/02c9a918-de9d-4f45-9445-4599a3958732.png"
                alt="Zouq restaurant interior"
                className="w-full h-full object-cover hover-lift"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>

        {/* Experience Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Experience Image */}
          <div className={`relative order-2 lg:order-1 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-lg shadow-luxury">
              <img
                src="lovable-uploads/7155ae80-fe93-479c-a432-96b8038af0d3.png"
                alt="Zouq restaurant experience"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-gold/20" />
            </div>
          </div>

          {/* Experience Content */}
          <div className={`space-y-8 order-1 lg:order-2 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <div>
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Opplevelsen
              </h3>
              <div className="w-16 h-1 bg-gradient-gold mb-6" />
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                Mer enn et måltid – en opplevelse av smak, lyd og atmosfære som 
                tar deg med på en reise gjennom Pakistans rike kulturarv.
              </p>
            </div>

            {/* Experience Cards */}
            <div className="grid gap-4">
              {experiences.map((experience, index) => (
                <Card
                  key={index}
                  className={`group hover-lift transition-all duration-300 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-4">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-gradient-red rounded-lg flex items-center justify-center">
                          <experience.icon className="h-5 w-5 text-white" />
                        </div>
                      </div>
                      <div>
                        <h4 className="text-base font-semibold text-foreground mb-1">
                          {experience.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {experience.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ZouqAboutSection;