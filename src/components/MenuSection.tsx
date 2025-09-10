import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import biryaniDish from '@/assets/biryani-dish.jpg';
import desserts from '@/assets/desserts.jpg';

const menuItems = [
  {
    category: 'Grill & Tandoor',
    image: '/lovable-uploads/ebda083b-c1b2-45f2-9fe2-c395c1766af5.png',
    dishes: [
      { name: 'Chicken Tikka', description: 'Saftig kylling marinert i yoghurt og krydder', price: '285,-' },
      { name: 'Seekh Kebab', description: 'Krydret lammefarse grillet på spyd', price: '295,-' },
      { name: 'Mixed Grill Platter', description: 'Utvalg av våre beste grillretter', price: '445,-' },
    ]
  },
  {
    category: 'Risretter',
    image: biryaniDish,
    dishes: [
      { name: 'Lamb Biryani', description: 'Aromatisk basmatiris med mørt lam og saffran', price: '345,-' },
      { name: 'Chicken Biryani', description: 'Klassisk biryani med saftig kylling', price: '325,-' },
      { name: 'Vegetable Pulao', description: 'Krydret ris med sesongens grønnsaker', price: '265,-' },
    ]
  },
  {
    category: 'Desserter',
    image: desserts,
    dishes: [
      { name: 'Kheer', description: 'Kremet rispudding med pistasienøtter', price: '125,-' },
      { name: 'Gulab Jamun', description: 'Søte melkeboller i kardemomme-sirup', price: '135,-' },
      { name: 'Kulfi', description: 'Tradisjonell pakistansk is med mandler', price: '115,-' },
    ]
  }
];

const MenuSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState(0);
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
    <section id="meny" ref={sectionRef} className="py-20 bg-secondary/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Vår Meny
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Hver rett på vår meny er nøye utformet for å bringe deg de autentiske smakene 
            av Pakistan, tilberedt med de fineste ingredienser og presentert med moderne eleganse.
          </p>
        </div>

        {/* Menu Categories */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {menuItems.map((category, index) => (
            <Card
              key={index}
              className={`group cursor-pointer transition-all duration-500 hover-lift hover-emerald overflow-hidden ${
                isVisible ? 'animate-scale-in' : 'opacity-0'
              } ${activeCategory === index ? 'ring-2 ring-primary' : ''}`}
              onClick={() => setActiveCategory(index)}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.category}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-overlay opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <h3 className="text-2xl font-serif font-bold text-white text-center">
                    {category.category}
                  </h3>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Active Category Details */}
        <div className={`${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <Card className="bg-background shadow-luxury">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div>
                  <h3 className="text-3xl font-serif font-bold text-foreground mb-8">
                    {menuItems[activeCategory].category}
                  </h3>
                  <div className="space-y-6">
                    {menuItems[activeCategory].dishes.map((dish, index) => (
                      <div key={index} className="border-b border-border pb-4 last:border-b-0">
                        <div className="flex justify-between items-start mb-2">
                          <h4 className="text-xl font-semibold text-foreground">{dish.name}</h4>
                          <span className="text-xl font-serif font-bold text-gold">{dish.price}</span>
                        </div>
                        <p className="text-muted-foreground">{dish.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="relative aspect-square overflow-hidden rounded-lg shadow-luxury">
                  <img
                    src={menuItems[activeCategory].image}
                    alt={menuItems[activeCategory].category}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Download Menu Button */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="hover-lift border-primary text-primary hover:bg-primary hover:text-primary-foreground">
            <Download className="mr-2 h-5 w-5" />
            Last ned full meny (PDF)
          </Button>
        </div>
      </div>
    </section>
  );
};

export default MenuSection;