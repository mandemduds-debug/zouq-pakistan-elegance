import { useEffect, useRef, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Calendar, ArrowRight } from 'lucide-react';

const newsItems = [
  {
    title: 'Ny signaturmeny lansert',
    date: '15. mars 2024',
    excerpt: 'Opplev våre nyeste kulinariske kreasjoner med sesongens beste ingredienser og tradisjonelle pakistanske smaker.',
    image: '/api/placeholder/400/250',
    category: 'Meny'
  },
  {
    title: 'Kulturell kveld med live musikk',
    date: '22. mars 2024',
    excerpt: 'Hver fredag inviterer vi til en uforglemmelig kveld med autentisk pakistansk musikk og dans.',
    image: '/api/placeholder/400/250',
    category: 'Event'
  },
  {
    title: 'Zouq åpner i Kristiansand',
    date: '1. april 2024',
    excerpt: 'Vi utvider vår familie med en ny restaurant i Kristiansand. Samme luksuriøse opplevelse, ny lokasjon.',
    image: '/api/placeholder/400/250',
    category: 'Nyheter'
  }
];

const NewsSection = () => {
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
    <section id="nyheter" ref={sectionRef} className="py-20 bg-secondary/30">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Nyheter & Eventer
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hold deg oppdatert på våre nyeste menyer, spesielle arrangementer og 
            kulturelle kvelder som feirer pakistansk tradisjon.
          </p>
        </div>

        {/* News Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {newsItems.map((item, index) => (
            <Card
              key={index}
              className={`group overflow-hidden hover-lift hover-gold transition-all duration-500 ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="w-full h-full bg-gradient-emerald flex items-center justify-center">
                  <div className="text-white text-center">
                    <Calendar className="h-12 w-12 mx-auto mb-2 opacity-50" />
                    <div className="text-sm opacity-75">Bilde kommer snart</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-overlay opacity-20 group-hover:opacity-40 transition-opacity" />
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-gold text-background text-xs font-semibold rounded-full">
                    {item.category}
                  </span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground mb-3">
                  <Calendar className="h-4 w-4" />
                  <span>{item.date}</span>
                </div>
                
                <h3 className="text-xl font-serif font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  {item.excerpt}
                </p>
                
                <Button 
                  variant="ghost" 
                  className="p-0 h-auto text-primary hover:text-primary-light font-semibold group/btn"
                >
                  Les mer
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <Card className="bg-gradient-emerald text-white shadow-luxury">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-serif font-bold mb-4">
                Hold deg oppdatert
              </h3>
              <p className="text-white/90 mb-6 max-w-2xl mx-auto">
                Meld deg på vårt nyhetsbrev og få eksklusive tilbud, invitasjoner til spesielle 
                arrangementer og nyheter om nye retter før alle andre.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Din e-postadresse"
                  className="flex-1 px-4 py-3 rounded-lg text-foreground bg-white border-0 focus:ring-2 focus:ring-gold"
                />
                <Button className="bg-gold text-background hover:bg-gold-dark font-semibold">
                  Meld deg på
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default NewsSection;