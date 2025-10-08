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
        
        if (sectionTop < viewportHeight && sectionTop + sectionHeight > 0) {
          const progress = (viewportHeight - sectionTop) / (viewportHeight + sectionHeight);
          setScrollY(progress);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate parallax movements
  const parallaxLeft = scrollY * -100;
  const parallaxRight = scrollY * 100;

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen py-20 overflow-hidden"
      style={{ backgroundColor: '#F5F1E8' }}
    >
      {/* Text Overlay */}
      <div className="absolute top-20 left-8 md:left-16 z-20 max-w-md">
        <h2 className="font-serif text-4xl md:text-6xl leading-tight text-foreground">
          of a moment until it<br />becomes a memory.
        </h2>
      </div>

      <div className="relative h-screen flex items-center justify-center">
        {/* Left Side Images */}
        <div 
          className="absolute left-0 top-0 w-1/3 h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${parallaxLeft}px)` }}
        >
          <img 
            src={biryaniImage}
            alt="Zouq restaurant interior"
            className="absolute top-[10%] left-[5%] w-64 h-80 object-cover rounded-lg shadow-lg"
          />
          <img 
            src={naan}
            alt="Zouq dining atmosphere"
            className="absolute top-[55%] left-[15%] w-56 h-72 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Center Video - Fixed Position */}
        <div className="relative z-10">
          <div className="relative overflow-hidden rounded-lg shadow-2xl">
            <video 
              autoPlay 
              loop 
              muted 
              playsInline
              className="w-[600px] h-[700px] object-cover"
            >
              <source src={showcaseVideo} type="video/mp4" />
            </video>
          </div>
        </div>

        {/* Right Side Images */}
        <div 
          className="absolute right-0 top-0 w-1/3 h-full transition-transform duration-300 ease-out"
          style={{ transform: `translateX(${parallaxRight}px)` }}
        >
          <img 
            src={groupDining}
            alt="Zouq dining experience"
            className="absolute top-[5%] right-[5%] w-60 h-72 object-cover rounded-lg shadow-lg"
          />
          <img 
            src={dining}
            alt="Zouq group dining"
            className="absolute top-[60%] right-[12%] w-64 h-80 object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Bottom Side Images */}
        <div className="absolute bottom-10 left-0 right-0 flex justify-between px-20">
          <div 
            className="transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${parallaxLeft}px)` }}
          >
            <img 
              src={grillImage}
              alt="Zouq dishes"
              className="w-72 h-56 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div 
            className="transition-transform duration-300 ease-out"
            style={{ transform: `translateX(${parallaxRight}px)` }}
          >
            <img 
              src={sharing}
              alt="Zouq ambiance"
              className="w-80 h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PhotoTextGridSection;
