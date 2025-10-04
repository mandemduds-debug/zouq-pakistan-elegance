import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Users, Utensils, Sparkles } from 'lucide-react';
import experienceNaan from '@/assets/experience-naan.png';
import experienceDining from '@/assets/experience-dining.png';
import experienceGrill from '@/assets/experience-grill.png';
import experienceSharing from '@/assets/experience-sharing.png';
import experienceGroup from '@/assets/experience-group.png';
import experienceAppetizer from '@/assets/experience-appetizer.png';

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
          {/* Image Grid */}
          <div className={`relative ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="relative overflow-hidden rounded-lg shadow-luxury">
                <img
                  src={experienceNaan}
                  alt="Autentisk naan brød"
                  className="w-full h-56 object-cover hover-lift"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-luxury">
                <img
                  src={experienceDining}
                  alt="Sosial spiseopplevelse"
                  className="w-full h-56 object-cover hover-lift"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-luxury">
                <img
                  src={experienceGrill}
                  alt="Grillretter"
                  className="w-full h-56 object-cover hover-lift"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-luxury">
                <img
                  src={experienceSharing}
                  alt="Deling av mat"
                  className="w-full h-56 object-cover hover-lift"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-luxury">
                <img
                  src={experienceGroup}
                  alt="Gruppemåltid"
                  className="w-full h-56 object-cover hover-lift"
                />
              </div>
              <div className="relative overflow-hidden rounded-lg shadow-luxury">
                <img
                  src={experienceAppetizer}
                  alt="Forretter"
                  className="w-full h-56 object-cover hover-lift"
                />
              </div>
            </div>
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
                        <div className="w-12 h-12 bg-gradient-red rounded-lg flex items-center justify-center">
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