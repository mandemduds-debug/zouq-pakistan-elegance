import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Music, Users, Utensils, Sparkles } from 'lucide-react';
import experienceNaan from '@/assets/experience-naan.png';
import experienceGroupDining from '@/assets/experience-group-dining.png';
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

const ZouqExperienceSection = () => {
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
    <section id="opplevelsen" ref={sectionRef} className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Experience Section */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Experience Image Grid */}
          <div className={`relative order-2 lg:order-1 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
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
                  src={experienceGroupDining}
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
                        <div className="w-10 h-10 bg-gradient-gold rounded-lg flex items-center justify-center">
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

export default ZouqExperienceSection;
