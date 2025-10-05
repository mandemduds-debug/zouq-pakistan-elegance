import { useEffect, useRef, useState } from 'react';
import restaurantInterior from '@/assets/zouq-dining-experience.png';
import foodImage from '@/assets/zouq-about-food.png';

interface ZouqAboutSectionProps {
  imageSrc?: 'interior' | 'food';
  customImage?: string;
  customAlt?: string;
}

const ZouqAboutSection = ({ imageSrc = 'interior', customImage, customAlt }: ZouqAboutSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  
  const selectedImage = customImage || (imageSrc === 'food' ? foodImage : restaurantInterior);
  const altText = customAlt || (imageSrc === 'food' ? 'Zouq autentisk pakistansk mat' : 'Zouq restaurant interior');
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
      }
    }, {
      threshold: 0.2
    });
    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
    return () => observer.disconnect();
  }, []);
  return <section id="om-oss" ref={sectionRef} className="py-32 bg-background">
      <div className="container mx-auto px-6">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-20 items-center">
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
                På Zouq serverer vi autentisk pakistansk mat, laget etter tradisjonelle oppskrifter. Hos oss møter du også den ekte gjestfriheten og den levende matkulturen Pakistan er kjent for.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 pt-8">
              <div className="text-center">
                <div className="text-3xl font-serif font-bold text-gold mb-2">12+</div>
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
              <img src={selectedImage} alt={altText} className="w-full h-full object-cover hover-lift" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default ZouqAboutSection;