import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
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
    <section id="om-oss" ref={sectionRef} className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
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
                om teknikker overført gjennom generasjoner, om familier som samles rundt bordet.
              </p>
              
              <p>
                På Zouq tar vi denne rike arven og løfter den til nye høyder. Vi kombinerer 
                <span className="text-gold font-semibold"> autentiske smaker</span> med moderne 
                kulinarisk innovasjon, tradisjonelle oppskrifter med elegante presentasjoner.
              </p>
              
              <p>
                Vårt navn, "Zouq", betyr smak og raffinement på urdu – en perfekt beskrivelse 
                av vår filosofi. Vi skaper ikke bare måltider, men 
                <span className="text-primary font-semibold"> opplevelser som engasjerer alle sanser</span>.
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
            
            {/* Decorative elements */}
            <div className="absolute -top-6 -right-6 w-24 h-24 border-2 border-gold/30 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-16 h-16 bg-primary/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;