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

  const layer1Speed = scrollProgress * 400;
  const layer2Speed = scrollProgress * 300;
  const layer3Speed = scrollProgress * 220;
  const layer4Speed = scrollProgress * 100;
  const opacityFade = Math.min(1, scrollProgress * 2);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-[120vh] overflow-hidden bg-gradient-to-b from-background via-muted/20 to-background"
    >
      {/* Sticky Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        
        {/* Background Gradient Overlay */}
        <div 
          className="absolute inset-0 bg-gradient-radial from-transparent via-background/50 to-background pointer-events-none z-10"
          style={{ opacity: 0.8 }}
        />

        {/* Layer 1 - Background Images */}
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${-layer1Speed}px, ${layer1Speed * 0.5}px)` }}
        >
          <img
            src={naan}
            alt="Authentic cuisine"
            className="absolute top-[8%] left-[8%] w-80 h-96 object-cover rounded-xl shadow-2xl opacity-90"
          />
        </div>

        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${layer1Speed}px, ${layer1Speed * 0.5}px)` }}
        >
          <img
            src={sharing}
            alt="Dining experience"
            className="absolute bottom-[5%] right-[10%] w-96 h-[460px] object-cover rounded-xl shadow-2xl opacity-90"
          />
        </div>

        {/* Layer 2 - Mid Images */}
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${layer2Speed}px, ${-layer2Speed * 0.4}px)` }}
        >
          <img
            src={grillImage}
            alt="Grilled specialties"
            className="absolute top-[12%] right-[8%] w-[420px] h-[500px] object-cover rounded-xl shadow-2xl opacity-95"
          />
        </div>

        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${-layer2Speed}px, ${layer2Speed * 0.4}px)` }}
        >
          <img
            src={groupDining}
            alt="Group dining"
            className="absolute bottom-[8%] left-[10%] w-96 h-[460px] object-cover rounded-xl shadow-2xl opacity-95"
          />
        </div>

        {/* Layer 3 - Front Images */}
        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${-layer3Speed}px, ${layer3Speed * 0.3}px)` }}
        >
          <img
            src={biryaniImage}
            alt="Signature biryani"
            className="absolute top-[30%] left-[5%] w-[480px] h-[560px] object-cover rounded-2xl shadow-elegant"
          />
        </div>

        <div 
          className="absolute inset-0 transition-transform duration-300 ease-out"
          style={{ transform: `translate(${layer3Speed}px, ${-layer3Speed * 0.3}px)` }}
        >
          <img
            src={dining}
            alt="Premium dining"
            className="absolute top-[25%] right-[5%] w-[480px] h-[580px] object-cover rounded-2xl shadow-elegant"
          />
        </div>

        {/* Center Video Container */}
        <div className="relative z-15 w-[600px] h-[400px] bg-muted/70 backdrop-blur-sm rounded-2xl shadow-elegant flex items-center justify-center border-2 border-border/50">
          <div className="text-center p-8">
            <p className="text-muted-foreground text-sm mb-2">Video Container</p>
            <p className="text-xs text-muted-foreground/60">Add your video here</p>
          </div>
        </div>

        {/* Overlay Text - Above Everything */}
        <div 
          className="absolute inset-0 z-30 flex items-start justify-center pt-20 px-6 pointer-events-none"
        >
          <h2 className="font-serif text-3xl md:text-5xl lg:text-6xl text-black font-bold leading-tight max-w-4xl text-center" style={{ opacity: 1 }}>
            Noen ganger forstår du ikke verdien av et øyeblikk for det blir et minne.
          </h2>
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
