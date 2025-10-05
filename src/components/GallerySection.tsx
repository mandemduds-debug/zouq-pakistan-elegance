import { useEffect, useRef, useState } from 'react';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import galleryNaan from '@/assets/gallery-naan.png';
import galleryDiningDrinks from '@/assets/gallery-dining-drinks.png';
import galleryGrillPlatter from '@/assets/gallery-grill-platter.png';
import gallerySharing from '@/assets/gallery-sharing.png';
import galleryGroupDining from '@/assets/gallery-group-dining.png';
import galleryWrap from '@/assets/gallery-wrap.png';
import galleryBiryani from '@/assets/gallery-biryani.png';
import galleryGrill from '@/assets/gallery-grill.png';
import galleryTandoori from '@/assets/gallery-tandoori.png';
import galleryseekhKebab from '@/assets/gallery-seekh-kebab.png';

const galleryImages = [
  { src: galleryNaan, alt: 'Fersk naan-brød serveres', category: 'Brød' },
  { src: galleryDiningDrinks, alt: 'Hygge og drikker', category: 'Opplevelse' },
  { src: galleryGrillPlatter, alt: 'Grillet kjøtt med grønnsaker', category: 'Grill' },
  { src: gallerySharing, alt: 'Deling av mat sammen', category: 'Opplevelse' },
  { src: galleryGroupDining, alt: 'Gruppemiddag', category: 'Opplevelse' },
  { src: galleryWrap, alt: 'Nyte en wrap', category: 'Wraps' },
  { src: galleryBiryani, alt: 'Tradisjonell biryani', category: 'Risretter' },
  { src: galleryGrill, alt: 'Grilling av kebabs', category: 'Grill' },
  { src: galleryTandoori, alt: 'Tandoori kylling', category: 'Tandoori' },
  { src: galleryseekhKebab, alt: 'Seekh kebabs', category: 'Kebab' }
];

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
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
    <section id="galleri" ref={sectionRef} className="py-20 bg-secondary/30 pattern-overlay">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Galleri & Kultur
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            En visuell reise gjennom våre retter, stemninger og den rike pakistanske matkulturen 
            som inspirerer alt vi gjør.
          </p>
        </div>

        {/* Gallery Carousel */}
        <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full"
          >
            <CarouselContent className="-ml-4">
              {galleryImages.map((image, index) => (
                <CarouselItem key={index} className="pl-4 md:basis-1/2 lg:basis-1/3">
                  <div
                    className="group relative overflow-hidden rounded-lg shadow-luxury cursor-pointer hover-lift"
                    onClick={() => setSelectedImage(index)}
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-center justify-center">
                      <div className="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                        <div className="text-sm uppercase tracking-wider font-semibold mb-2 text-gold">
                          {image.category}
                        </div>
                        <div className="w-12 h-0.5 bg-white mx-auto" />
                      </div>
                    </div>

                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-gold rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-4" />
            <CarouselNext className="right-4" />
          </Carousel>
        </div>

        {/* Modal for expanded view */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <div className="relative max-w-4xl max-h-full">
              <img
                src={galleryImages[selectedImage].src}
                alt={galleryImages[selectedImage].alt}
                className="w-full h-full object-contain rounded-lg"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-4 right-4 text-white/70 hover:text-white text-2xl"
              >
                ×
              </button>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-gold font-semibold">
                  {galleryImages[selectedImage].category}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Decorative Elements */}
        <div className="relative mt-16">
          <div className="absolute left-1/4 top-0 w-3 h-3 bg-gold/30 rounded-full animate-pulse" />
          <div className="absolute right-1/3 top-8 w-2 h-2 bg-primary/40 rounded-full animate-pulse delay-500" />
          <div className="absolute left-1/2 top-4 w-1 h-1 bg-gold/50 rounded-full animate-pulse delay-1000" />
        </div>
      </div>
    </section>
  );
};

export default GallerySection;