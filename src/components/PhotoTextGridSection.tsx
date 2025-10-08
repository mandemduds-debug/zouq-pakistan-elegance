import { useState, useEffect, useRef } from 'react';
import diningImage from '@/assets/experience-dining.png';
import grillImage from '@/assets/experience-grill.png';
import groupImage from '@/assets/experience-group.png';

const PhotoTextGridSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2,
      rootMargin: '0px',
    });

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="py-24 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h2 className="font-serif text-4xl md:text-5xl mb-6 text-foreground">
            Om Zouq
          </h2>
          <div className="max-w-3xl mx-auto space-y-4">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Zouq er mer enn bare en restaurant - det er en opplevelse hvor autentisk pakistansk matkultur møter moderne eleganse. Navnet Zouq betyr "smak" og "stil", og det er nettopp dette vi leverer til hver gjest.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Vi tror at å dele god mat er en av de beste måtene å tilbringe tid med familie, venner og kjære på. Hver rett lages med lidenskap, kjærlighet og respekt for tradisjonelle oppskrifter.
            </p>
          </div>
        </div>

        {/* Quote */}
        <div className={`text-center my-16 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <p className="font-serif text-2xl md:text-3xl italic text-gold">
            "Mat er ikke bare næring - det er kjærlighet på en tallerken"
          </p>
        </div>

        {/* Image Grid */}
        <div className={`grid md:grid-cols-3 gap-4 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}>
          <div className="md:col-span-2 relative overflow-hidden rounded-lg group">
            <img 
              src={diningImage}
              alt="Zouq restaurant interiør"
              className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="grid grid-rows-2 gap-4">
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src={grillImage}
                alt="Zouq grillretter"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
            <div className="relative overflow-hidden rounded-lg group">
              <img 
                src={groupImage}
                alt="Sosial middag på Zouq"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          </div>
        </div>

        {/* Bottom Content */}
        <div className={`max-w-4xl mx-auto text-center transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <h3 className="font-serif text-3xl md:text-4xl mb-6 text-foreground">
            Pakistansk & Indisk Cusine
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            I dagens hektiske hverdag kan det være vanskelig å finne tid til å slappe av og nyte livets enkle gleder. Vi ønsket å skape et rom hvor våre gjester kan unnslippe hverdagen - et sted med feriefølelse og autentisk atmosfære. Utforsk vår meny og oppdag den beste pakistanske og indiske maten Norge har å by på.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PhotoTextGridSection;
