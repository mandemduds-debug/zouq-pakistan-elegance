import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Users, Utensils, Sparkles } from 'lucide-react';
import restaurantInterior from '@/assets/restaurant-interior.jpg';

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

const ExperienceSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="opplevelsen" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className={`relative ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="relative overflow-hidden rounded-lg shadow-luxury">
              <img
                src={restaurantInterior}
                alt="Zouq restaurant experience"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-gold/20" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gold/10 rounded-full blur-xl" />
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-primary/10 rounded-full blur-lg" />
          </div>

          {/* Content Side */}
          <div className={`space-y-8 ${isVisible ? 'animate-slide-left' : 'opacity-0'}`}>
            <div>
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
                Opplevelsen
              </h2>
              <div className="w-20 h-1 bg-gradient-gold mb-8" />
              <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                Mer enn et måltid – en opplevelse av smak, lyd og atmosfære som 
                tar deg med på en reise gjennom Pakistans rike kulturarv.
              </p>
            </div>

            {/* Experience Cards */}
            <div className="grid md:grid-cols-2 gap-6">
              {experiences.map((experience, index) => (
                <Card
                  key={index}
                  className={`group hover-lift transition-all duration-500 ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  }`}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gradient-emerald rounded-lg flex items-center justify-center">
                          <experience.icon className="h-6 w-6 text-white" />
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-2">
                          {experience.title}
                        </h3>
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

export default ExperienceSection;