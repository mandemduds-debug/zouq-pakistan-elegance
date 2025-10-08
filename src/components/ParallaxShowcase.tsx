import { useState, useEffect, useRef } from 'react';
import biryaniImage from '@/assets/experience-biryani.png';
import grillImage from '@/assets/experience-grill.png';
import naan from '@/assets/experience-naan.png';
import groupDining from '@/assets/experience-group-dining.png';
import sharing from '@/assets/experience-sharing.png';
import dining from '@/assets/experience-dining.png';

const ParallaxShowcase = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;
      
      const rect = sectionRef.current.getBoundingClientRect();
      const sectionTop = rect.top;
      const sectionHeight = rect.height;
      const windowHeight = window.innerHeight;
      
      if (sectionTop < windowHeight && sectionTop + sectionHeight > 0) {
        const progress = Math.max(0, Math.min(1, 
          (windowHeight - sectionTop) / (windowHeight + sectionHeight)
        ));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const layer1Speed = scrollProgress * 200;
  const layer2Speed = scrollProgress * 150;
  const layer3Speed = scrollProgress * 100;
  const layer4Speed = scrollProgress * 50;
  const opacityFade = Math.min(1, scrollProgress * 2);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[200vh] overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background pointer-events-none z-10"
          style={{ opacity: 0.8 }}
        />

        {/* Layer 1 - Background Images (Slowest) */}
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${layer1Speed}px)` }}
        >
          <img
            src={naan}
            alt="Authentic cuisine"
            className="absolute top-[10%] left-[5%] w-64 h-80 object-cover rounded-2xl shadow-2xl opacity-40 blur-sm"
          />
          <img
            src={sharing}
            alt="Dining experience"
            className="absolute bottom-[15%] right-[8%] w-72 h-96 object-cover rounded-2xl shadow-2xl opacity-40 blur-sm"
          />
        </div>

        {/* Layer 2 - Mid Images */}
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transform: `translateY(${-layer2Speed}px)` }}
        >
          <img
            src={grillImage}
            alt="Grilled specialties"
            className="absolute top-[20%] right-[10%] w-80 h-96 object-cover rounded-2xl shadow-2xl opacity-60"
          />
          <img
            src={groupDining}
            alt="Group dining"
            className="absolute bottom-[10%] left-[12%] w-72 h-88 object-cover rounded-2xl shadow-2xl opacity-60"
          />
        </div>

        {/* Layer 3 - Front Images */}
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${layer3Speed - 100}px)` }}
        >
          <img
            src={biryaniImage}
            alt="Signature biryani"
            className="absolute top-[35%] left-[8%] w-96 h-[500px] object-cover rounded-3xl shadow-elegant"
          />
        </div>

        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${-layer3Speed + 100}px)` }}
        >
          <img
            src={dining}
            alt="Premium dining"
            className="absolute top-[30%] right-[6%] w-96 h-[520px] object-cover rounded-3xl shadow-elegant"
          />
        </div>

        {/* Center Content - Hero Text */}
        <div 
          className="relative z-20 text-center px-4 transition-all duration-500"
          style={{ 
            opacity: opacityFade,
            transform: `scale(${0.8 + (opacityFade * 0.2)})` 
          }}
        >
          <div className="mb-8">
            <span className="inline-block px-6 py-2 bg-primary/10 backdrop-blur-sm rounded-full text-sm font-medium text-primary border border-primary/20">
              Opplev Forskjellen
            </span>
          </div>
          
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl mb-6 text-foreground leading-tight max-w-4xl">
            Noen ganger vil du aldri forstå verdien av et øyeblikk før det blir et minne.
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mb-8">
            Fra hjertevarm gjestfrihet til autentiske smaker fra Pakistan – 
            hver opplevelse er skapt for å bli et minne som varer.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <div className="text-center">
              <div className="text-4xl font-serif text-foreground">20+</div>
              <div className="text-sm text-muted-foreground">Års Erfaring</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-4xl font-serif text-foreground">100+</div>
              <div className="text-sm text-muted-foreground">Unike Retter</div>
            </div>
            <div className="hidden sm:block w-px h-12 bg-border" />
            <div className="text-center">
              <div className="text-4xl font-serif text-foreground">3</div>
              <div className="text-sm text-muted-foreground">Restauranter</div>
            </div>
          </div>
        </div>

        {/* Floating Elements */}
        <div 
          className="absolute top-[15%] left-[50%] w-32 h-32 bg-primary/5 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translate(-50%, ${layer4Speed}px)` }}
        />
        <div 
          className="absolute bottom-[20%] right-[30%] w-40 h-40 bg-gold/5 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${-layer4Speed}px)`, animationDelay: '1s' }}
        />
      </div>
    </section>
  );
};

export default ParallaxShowcase;
