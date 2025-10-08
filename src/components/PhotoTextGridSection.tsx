import { useState, useEffect, useRef } from 'react';
import showcaseVideo from '@/assets/zouq-showcase.mp4';
import biryaniImage from '@/assets/experience-biryani.png';
import grillImage from '@/assets/experience-grill.png';
import naan from '@/assets/experience-naan.png';
import appetizer from '@/assets/experience-appetizer.png';
import groupDining from '@/assets/experience-group-dining.png';
import sharing from '@/assets/experience-sharing.png';
import wrapImage from '@/assets/experience-wrap.png';
import dining from '@/assets/experience-dining.png';

const PhotoTextGridSection = () => {
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const sectionTop = rect.top;
        const sectionHeight = rect.height;
        const viewportHeight = window.innerHeight;
        
        // Calculate scroll progress when section is in view
        if (sectionTop < viewportHeight && sectionTop + sectionHeight > 0) {
          const progress = (viewportHeight - sectionTop) / (viewportHeight + sectionHeight);
          setScrollY(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial call
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax offset for images
  const leftParallax = scrollY * -150; // Move left images to the left
  const rightParallax = scrollY * 150; // Move right images to the right

  return (
    <section 
      ref={sectionRef}
      className="py-32 bg-background relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        <div className="relative flex items-center justify-center min-h-[600px]">
          {/* Left Images - Parallax */}
          <div className="absolute left-0 top-0 bottom-0 w-1/4 flex flex-col justify-center gap-6 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${leftParallax}px)` }}>
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={biryaniImage}
                alt="Zouq biryani"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={grillImage}
                alt="Zouq grill"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={naan}
                alt="Zouq naan"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={appetizer}
                alt="Zouq appetizer"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>

          {/* Center Video - Fixed */}
          <div className="relative z-10 w-full max-w-md mx-auto">
            <div className="relative overflow-hidden rounded-2xl shadow-elegant">
              <video 
                autoPlay 
                loop 
                muted 
                playsInline
                className="w-full h-[600px] object-cover"
              >
                <source src={showcaseVideo} type="video/mp4" />
              </video>
            </div>
            
            {/* Text Below Video */}
            <div className="mt-8 text-center">
              <h3 className="font-serif text-3xl md:text-4xl mb-4 text-foreground">
                Opplev Zouq
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed max-w-lg mx-auto">
                En kulinarisk reise gjennom autentiske smaker, moderne eleganse og uforglemmelige øyeblikk.
              </p>
            </div>
          </div>

          {/* Right Images - Parallax */}
          <div className="absolute right-0 top-0 bottom-0 w-1/4 flex flex-col justify-center gap-6 transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${rightParallax}px)` }}>
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={groupDining}
                alt="Zouq group dining"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={sharing}
                alt="Zouq sharing"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={wrapImage}
                alt="Zouq wrap"
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="relative overflow-hidden rounded-lg shadow-elegant">
              <img 
                src={dining}
                alt="Zouq dining"
                className="w-full h-48 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoTextGridSection;
