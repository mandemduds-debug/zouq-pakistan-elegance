import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { ShoppingCart, Phone, Users, Calendar, MapPin, Star } from 'lucide-react';
import biryaniDish from '@/assets/biryani-dish.jpg';
import authenticDesserts from '@/assets/authentic-desserts.jpg';

const menuItems = [
  {
    category: 'Grill & Tandoor',
    thumbnail: '/lovable-uploads/7dc4a78f-1f1e-4873-8f47-589c84560373.png',
    image: '/lovable-uploads/ebda083b-c1b2-45f2-9fe2-c395c1766af5.png',
    dishes: [
      { name: 'Chicken Tikka', description: 'Saftig kylling marinert i yoghurt og krydder', price: '285,-' },
      { name: 'Seekh Kebab', description: 'Krydret lammefarse grillet på spyd', price: '295,-' },
      { name: 'Lamb Chops', description: 'Møre lammekotelett med pakistanske krydder', price: '385,-' },
      { name: 'Tandoori Chicken', description: 'Hel kylling grillet i tandoor-ovn', price: '345,-' },
      { name: 'Fish Tikka', description: 'Marinert torsk grillet på spyd', price: '325,-' },
      { name: 'Mixed Grill Platter', description: 'Utvalg av våre beste grillretter', price: '445,-' }
    ]
  },
  {
    category: 'Risretter',
    thumbnail: biryaniDish,
    image: biryaniDish,
    dishes: [
      { name: 'Lamb Biryani', description: 'Aromatisk basmatiris med mørt lam og saffran', price: '345,-' },
      { name: 'Chicken Biryani', description: 'Klassisk biryani med saftig kylling', price: '325,-' },
      { name: 'Beef Biryani', description: 'Rik biryani med mørt storfekjøtt', price: '335,-' },
      { name: 'Prawn Biryani', description: 'Eksotisk biryani med reker og krydder', price: '365,-' }
    ]
  },
  {
    category: 'Desserter',
    thumbnail: authenticDesserts,
    image: authenticDesserts,
    dishes: [
      { name: 'Kheer', description: 'Kremet rispudding med pistasienøtter', price: '125,-' },
      { name: 'Gulab Jamun', description: 'Søte melkeboller i kardemomme-sirup', price: '135,-' },
      { name: 'Kulfi', description: 'Tradisjonell pakistansk is med mandler', price: '115,-' },
      { name: 'Ras Malai', description: 'Mjuke paneer-boller i søt melk', price: '145,-' }
    ]
  }
];

const cateringTypes = [
  {
    icon: Users,
    title: 'Konfirmasjoner',
    description: 'Perfekt for familiefeiringer med tradisjonelle retter'
  },
  {
    icon: Calendar,
    title: 'Bryllup',
    description: 'Spektakulære festmålltider for deres store dag'
  },
  {
    icon: Star,
    title: 'Bedriftsarrangementer',
    description: 'Imponér kunder og kolleger med luksuriøs catering'
  }
];

interface MenuCateringSectionProps {
  locationName?: string;
}

const MenuCateringSection = ({ locationName }: MenuCateringSectionProps) => {
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
    <section id="meny" ref={sectionRef} className="py-32 bg-secondary/50">
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className={`text-center mb-16 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Meny & Catering
          </h2>
          <div className="w-20 h-1 bg-gradient-gold mx-auto mb-8" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Opplev våre autentiske smaker både i restauranten og ved dine egne arrangementer
          </p>
        </div>

        <Tabs defaultValue="meny" className="w-full">
          <TabsList className="grid w-full grid-cols-2 mb-12">
            <TabsTrigger value="meny">Vår Meny</TabsTrigger>
            <TabsTrigger value="catering">Catering</TabsTrigger>
          </TabsList>

          {/* Menu Tab */}
          <TabsContent value="meny" className="space-y-8">
            {/* Menu Categories */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {menuItems.map((category, index) => (
                <Card
                  key={index}
                  className={`group cursor-pointer transition-all duration-300 hover-lift overflow-hidden ${
                    isVisible ? 'animate-scale-in' : 'opacity-0'
                  } ${activeCategory === index ? 'ring-2 ring-primary' : ''}`}
                  onClick={() => setActiveCategory(index)}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={category.thumbnail}
                      alt={category.category}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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

            {/* Order Button */}
            <div className="text-center mt-12">
              <Button asChild size="lg" className="hover-lift">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <ShoppingCart className="mr-2 h-5 w-5" />
                  Bestill Takeaway
                </a>
              </Button>
            </div>
          </TabsContent>

          {/* Catering Tab */}
          <TabsContent value="catering" className="space-y-12">
            {/* Hero Section */}
            <div className="text-center mb-12">
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                Catering i {locationName || 'Norge'}
              </h3>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                La oss skape uforglemmelige kulinariske opplevelser for dine gjester
              </p>
            </div>

            {/* Catering Types */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {cateringTypes.map((type, index) => (
                <Card key={index} className="hover-lift transition-all duration-300">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 bg-gradient-gold rounded-full flex items-center justify-center mx-auto mb-6">
                      <type.icon className="h-8 w-8 text-background" />
                    </div>
                    <h4 className="text-xl font-serif font-bold text-foreground mb-4">
                      {type.title}
                    </h4>
                    <p className="text-muted-foreground">
                      {type.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Features */}
            <div className="bg-background rounded-lg p-8">
              <h4 className="text-2xl font-serif font-bold text-foreground mb-6 text-center">
                Hvorfor velge Zouq Catering?
              </h4>
              <div className="grid md:grid-cols-3 gap-6 text-center">
                <div>
                  <Star className="h-8 w-8 text-gold mx-auto mb-3" />
                  <h5 className="font-semibold text-foreground mb-2">Premium Kvalitet</h5>
                  <p className="text-sm text-muted-foreground">Kun de beste ingredienser</p>
                </div>
                <div>
                  <Users className="h-8 w-8 text-gold mx-auto mb-3" />
                  <h5 className="font-semibold text-foreground mb-2">Fleksible Løsninger</h5>
                  <p className="text-sm text-muted-foreground">Tilpasset dine behov</p>
                </div>
                <div>
                  <MapPin className="h-8 w-8 text-gold mx-auto mb-3" />
                  <h5 className="font-semibold text-foreground mb-2">Pålitelig Levering</h5>
                  <p className="text-sm text-muted-foreground">Alltid til avtalt tid</p>
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="hover-lift">
                  <Calendar className="h-5 w-5 mr-2" />
                  Book Catering
                </Button>
                <Button variant="outline" size="lg" className="bg-background/20 border-background text-background hover:bg-background hover:text-gold hover-lift">
                  <Phone className="h-5 w-5 mr-2" />
                  Få et Tilbud
                </Button>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MenuCateringSection;