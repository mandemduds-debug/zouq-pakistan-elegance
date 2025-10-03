import { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { ShoppingCart, Phone, Users, Calendar, MapPin, Star, Check, Clock, ChevronDown } from 'lucide-react';
import biryaniDish from '@/assets/biryani-dish.jpg';
import authenticDesserts from '@/assets/authentic-desserts.jpg';
import grillMenu from '@/assets/grill-menu.jpg';
import menuWrapDeal from '@/assets/menu-wrap-deal.jpg';
import menuVegetarDeal from '@/assets/menu-vegetar-deal.jpg';
import menuButterChicken from '@/assets/menu-butter-chicken.jpg';
import menuSnackDeal from '@/assets/menu-snack-deal.jpg';

const menuCategories = [
  {
    name: 'Meal deals',
    dishes: [
      { name: 'Wrap deal', description: 'Kylling Tikka wrap og valgfri 0,5 l brus', price: '180,-' },
      { name: 'Vegetar deal', description: 'Daal tarka, naan og valgfri 0,5 l brus', price: '275,-' },
      { name: 'Butter Chicken deal', description: 'Butter chicken, naan og valgfri brus', price: '299,-' },
      { name: 'Snack deal', description: 'Pakora vegetar, Potato cheese balls, samosa vegetar valgfri 0,5 l brus', price: '215,-' },
      { name: 'Naan dip deal', description: 'Naan, chutney mix valgfri 0,5 l brus', price: '129,-' },
      { name: 'Burger deal', description: 'Cheeseburger, pommes frites valgfri 0,5 l brus', price: '219,-' },
      { name: 'BBQ deal', description: 'Tandoori kyllinglår, naan valgfri 0,5 l brus', price: '299,-' },
      { name: 'Vegan deal', description: 'Chana masala, roti og valgfri 0,5 l brus', price: '275,-' }
    ]
  },
  {
    name: 'Street food, salat & supper',
    dishes: [
      { name: 'Samosa kylling', description: 'Sprø trekanter fylt med krydret kylling', price: '145,-' },
      { name: 'Samosa vegetar', description: 'Sprø trekanter fylt med krydrede grønnsaker', price: '135,-' },
      { name: 'Pakora kylling', description: 'Fritert kylling i kikertdeig', price: '155,-' },
      { name: 'Pakora vegetar', description: 'Friterte grønnsaker i kikertdeig', price: '145,-' },
      { name: 'Potato cheese balls', description: 'Friterte potetboller med ost', price: '145,-' },
      { name: 'Daal suppe', description: 'Kremet linsesuppe med krydder', price: '125,-' },
      { name: 'Kylling suppe', description: 'Varmende kyllingsuppe', price: '135,-' },
      { name: 'Grønn salat', description: 'Frisk salat med vår spesielle dressing', price: '95,-' }
    ]
  },
  {
    name: 'Naan-brød & Roti',
    dishes: [
      { name: 'Plain naan', description: 'Klassisk hvitt naan-brød', price: '45,-' },
      { name: 'Butter naan', description: 'Naan penslet med smør', price: '55,-' },
      { name: 'Garlic naan', description: 'Naan med hvitløk', price: '65,-' },
      { name: 'Cheese naan', description: 'Naan fylt med ost', price: '75,-' },
      { name: 'Keema naan', description: 'Naan fylt med krydret kjøttfarse', price: '85,-' },
      { name: 'Peshawari naan', description: 'Søtt naan med nøtter og rosiner', price: '75,-' },
      { name: 'Roti', description: 'Tradisjonelt fullkorn-flatbrød', price: '45,-' }
    ]
  },
  {
    name: 'Grill & Tandoori (inkl ris)',
    dishes: [
      { name: 'Chicken Tikka', description: 'Saftig kylling marinert i yoghurt og krydder', price: '285,-' },
      { name: 'Chicken Malai Tikka', description: 'Kremet kylling tikka', price: '295,-' },
      { name: 'Tandoori kyllinglår', description: 'Kyllinglår grillet i tandoor-ovn', price: '275,-' },
      { name: 'Seekh Kebab', description: 'Krydret lammefarse grillet på spyd', price: '295,-' },
      { name: 'Lamb Chops', description: 'Møre lammekotelett med pakistanske krydder', price: '385,-' },
      { name: 'Mixed Grill', description: 'Utvalg av våre beste grillretter', price: '445,-' },
      { name: 'Fish Tikka', description: 'Marinert fisk grillet på spyd', price: '325,-' },
      { name: 'Paneer Tikka', description: 'Grillet ost med krydder (vegetar)', price: '265,-' }
    ]
  },
  {
    name: 'Gruppemeny (inkl ris)',
    dishes: [
      { name: 'Chicken Karahi', description: 'Kylling i wok med paprika og tomat', price: '315,-' },
      { name: 'Butter Chicken', description: 'Kylling i kremet tomatsaus', price: '315,-' },
      { name: 'Chicken Korma', description: 'Kylling i mild kremet saus', price: '315,-' },
      { name: 'Lamb Karahi', description: 'Lam i wok med paprika og tomat', price: '345,-' },
      { name: 'Lamb Korma', description: 'Lam i mild kremet saus', price: '345,-' },
      { name: 'Beef Nihari', description: 'Langsomt kokt storfekjøtt', price: '335,-' },
      { name: 'Palak Paneer', description: 'Ost i spinatsaus (vegetar)', price: '285,-' },
      { name: 'Daal Tarka', description: 'Gule linser med krydder (vegetar)', price: '265,-' },
      { name: 'Chana Masala', description: 'Kikerter i krydret tomatsaus (vegan)', price: '265,-' }
    ]
  },
  {
    name: 'Naan wraps',
    dishes: [
      { name: 'Chicken Tikka wrap', description: 'Kylling tikka i naan med salat og dressing', price: '175,-' },
      { name: 'Seekh Kebab wrap', description: 'Lammekebab i naan med salat og dressing', price: '185,-' },
      { name: 'Paneer Tikka wrap', description: 'Grillet ost i naan med salat (vegetar)', price: '165,-' },
      { name: 'Falafel wrap', description: 'Falafel i naan med salat (vegan)', price: '155,-' }
    ]
  },
  {
    name: 'Pizza',
    dishes: [
      { name: 'Margherita', description: 'Tomat, ost', price: '165,-' },
      { name: 'Pepperoni', description: 'Tomat, ost, pepperoni', price: '185,-' },
      { name: 'Tikka Pizza', description: 'Tomat, ost, chicken tikka, løk, paprika', price: '195,-' },
      { name: 'Kebab Pizza', description: 'Tomat, ost, kebab, løk, paprika', price: '195,-' },
      { name: 'Vegetar Pizza', description: 'Tomat, ost, grønnsaker', price: '175,-' }
    ]
  },
  {
    name: 'Burgermeny',
    dishes: [
      { name: 'Hamburger', description: 'Burger med salat, tomat, løk, dressing', price: '165,-' },
      { name: 'Cheeseburger', description: 'Burger med ost, salat, tomat, løk, dressing', price: '179,-' },
      { name: 'Chicken Burger', description: 'Kyllingburger med salat og dressing', price: '175,-' },
      { name: 'Tikka Burger', description: 'Chicken tikka burger med spesialdressing', price: '189,-' },
      { name: 'Veggie Burger', description: 'Vegetarburger med salat (vegetar)', price: '165,-' }
    ]
  },
  {
    name: 'Chutneys & Dressinger',
    dishes: [
      { name: 'Raita', description: 'Yoghurt med agurk og mynte', price: '45,-' },
      { name: 'Mango chutney', description: 'Søt og syrlig mangochutney', price: '35,-' },
      { name: 'Mint chutney', description: 'Frisk myntesaus', price: '35,-' },
      { name: 'Tamarind chutney', description: 'Søt og syrlig tamarindsaus', price: '35,-' },
      { name: 'Chili sauce', description: 'Sterk chilisaus', price: '35,-' },
      { name: 'Hvitløksdressing', description: 'Kremet hvitløksdressing', price: '45,-' }
    ]
  },
  {
    name: 'Drikke',
    dishes: [
      { name: 'Coca-Cola 0,5L', description: 'Klassisk Coca-Cola', price: '45,-' },
      { name: 'Coca-Cola Zero 0,5L', description: 'Sukkerfri Coca-Cola', price: '45,-' },
      { name: 'Fanta 0,5L', description: 'Appelsin brus', price: '45,-' },
      { name: 'Sprite 0,5L', description: 'Sitron/lime brus', price: '45,-' },
      { name: 'Vann 0,5L', description: 'Flaskevann', price: '35,-' },
      { name: 'Lassi Sweet', description: 'Søt yoghurtdrikk', price: '65,-' },
      { name: 'Lassi Salt', description: 'Salt yoghurtdrikk', price: '65,-' },
      { name: 'Mango Lassi', description: 'Yoghurtdrikk med mango', price: '75,-' }
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
            <TabsTrigger value="meny">Meny</TabsTrigger>
            <TabsTrigger value="catering">Catering</TabsTrigger>
          </TabsList>

          {/* Menu Tab */}
          <TabsContent value="meny" className="space-y-8">
            {/* Menu Images Gallery */}
            <div className={`grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover-lift">
                <img src={menuWrapDeal} alt="Wrap Deal" className="w-full h-full object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover-lift">
                <img src={menuVegetarDeal} alt="Vegetar Deal" className="w-full h-full object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover-lift">
                <img src={menuButterChicken} alt="Butter Chicken Deal" className="w-full h-full object-cover" />
              </div>
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-lg hover-lift">
                <img src={menuSnackDeal} alt="Snack Deal" className="w-full h-full object-cover" />
              </div>
            </div>

            {/* Complete Menu with All Categories */}
            <div className={`space-y-6 ${isVisible ? 'animate-fade-up' : 'opacity-0'}`}>
              {menuCategories.map((category, categoryIndex) => (
                <Collapsible key={categoryIndex}>
                  <Card className="overflow-hidden">
                    <CollapsibleTrigger className="w-full">
                      <div className="flex items-center justify-between p-6 hover:bg-secondary/30 transition-colors cursor-pointer">
                        <h3 className="text-2xl font-serif font-bold text-foreground text-left">
                          {category.name}
                        </h3>
                        <ChevronDown className="h-6 w-6 text-muted-foreground transition-transform duration-200" />
                      </div>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <CardContent className="p-6 pt-0">
                        <div className="space-y-4">
                          {category.dishes.map((dish, dishIndex) => (
                            <div 
                              key={dishIndex} 
                              className="border-b border-border pb-4 last:border-b-0 hover:bg-secondary/10 p-3 rounded-lg transition-colors"
                            >
                              <div className="flex justify-between items-start gap-4">
                                <div className="flex-1">
                                  <h4 className="text-lg font-semibold text-foreground mb-1">
                                    {dish.name}
                                  </h4>
                                  <p className="text-muted-foreground text-sm">
                                    {dish.description}
                                  </p>
                                </div>
                                <span className="text-xl font-serif font-bold text-gold whitespace-nowrap">
                                  {dish.price}
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </CollapsibleContent>
                  </Card>
                </Collapsible>
              ))}
            </div>

            {/* Order Button */}
            <div className="text-center mt-12">
              <Button asChild size="lg" className="hover-lift">
                <a href="https://stavanger.zouq.no/articles" target="_blank" rel="noopener noreferrer">
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
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                Catering {locationName ? `${locationName}` : 'Norge'} - Bryllup, Konfirmasjon & Bedriftsarrangementer
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Opplev Zouqs eksklusive pakistanske catering i {locationName ? `${locationName} sentrum og omegn` : 'Norge'}. 
                Vi kombinerer tradisjonell smak med moderne eleganse for alle dine arrangementer.
              </p>
            </div>

            {/* Why Choose Us - Expanded */}
            <div className="mb-16">
              <h4 className="text-2xl font-serif font-semibold text-foreground mb-8 text-center">
                Hvorfor velge Zouq for catering i {locationName || 'Norge'}?
              </h4>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Check className="h-8 w-8 text-background" />
                  </div>
                  <h5 className="text-lg font-semibold text-foreground mb-2">Moderne Eleganse</h5>
                  <p className="text-muted-foreground">Sofistikert presentasjon av autentiske pakistanske retter</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Clock className="h-8 w-8 text-background" />
                  </div>
                  <h5 className="text-lg font-semibold text-foreground mb-2">Lokal Tilstedeværelse</h5>
                  <p className="text-muted-foreground">Rask og pålitelig levering i hele {locationName || 'Norge'}-området</p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center">
                    <Star className="h-8 w-8 text-background" />
                  </div>
                  <h5 className="text-lg font-semibold text-foreground mb-2">Premium Kvalitet</h5>
                  <p className="text-muted-foreground">Kun de beste ingredienser og halal-sertifiserte råvarer</p>
                </div>
              </div>
            </div>

            {/* Detailed Catering Categories */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <Card className="overflow-hidden hover-lift">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-serif font-semibold text-foreground mb-4">
                    Catering til Konfirmasjoner i {locationName || 'Norge'}
                  </h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Feir konfirmasjonen med stil i {locationName || 'Norge'}! Våre menyalternativer passer perfekt 
                    for familiefeiringer med gjester i alle aldre, servert med varme og omsorg.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Familievennlige menyer
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Halal-sertifiserte ingredienser
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Milde og krydrede alternativer
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Fleksible porsjonstørrelser
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover-lift">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-serif font-semibold text-foreground mb-4">
                    Catering til Bryllup i {locationName || 'Norge'}
                  </h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Gjør bryllupsdagen magisk med våre luksuriøse bryllupspakker. 
                    Perfekt for romantiske feiringer i {locationName || 'Norge'} med familie og venner.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Eksklusive bryllupsmennyer
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Elegant presentasjon og servering
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Komplett serviceopplevelse
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Skreddersydde pakkeløsninger
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover-lift">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-serif font-semibold text-foreground mb-4">
                    Catering til Selskaper & Private Anledninger
                  </h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Fra private middager til store familiefester i {locationName || 'Norge'} - vi tilpasser 
                    opplevelsen etter dine ønsker og budsjett.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Fleksible pakkeløsninger
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Hjemlevering tilgjengelig
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Rimelige og konkurransedyktige priser
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Personlig kundeservice
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover-lift">
                <CardContent className="p-8">
                  <h4 className="text-2xl font-serif font-semibold text-foreground mb-4">
                    Julebord Catering & Bedriftsarrangementer {locationName || 'Norge'}
                  </h4>
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    Skap minneverdige bedriftsopplevelser i {locationName || 'Norge'} med vår profesjonelle 
                    catering. Ideelt for julebord, møter og teambuilding-events.
                  </p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Bedriftstilpassede menyer
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Enkel bestillingsprosess
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Profesjonell håndtering og servering
                    </li>
                    <li className="flex items-center gap-2">
                      <Check className="h-4 w-4 text-gold" />
                      Fakturaordning for bedrifter
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Delivery Areas */}
            <div className="mb-16">
              <Card className="overflow-hidden">
                <CardContent className="p-8 text-center">
                  <h4 className="text-2xl font-serif font-semibold text-foreground mb-4">
                    Leveringsområder rundt {locationName || 'Norge'}
                  </h4>
                  <p className="text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                    {locationName === 'Sandnes' && (
                      <>Vi leverer catering til hele Sandnes og nærområdene, inkludert Bryne, 
                      Nærbø, Ålgård, Gjesdal og Stavanger. Ta kontakt for å bekrefte levering 
                      til ditt arrangement.</>
                    )}
                    {locationName === 'Stavanger' && (
                      <>Vi leverer catering til hele Stavanger og nærområdene, inkludert Sandnes, 
                      Sola, Randaberg, Klepp og Gjesdal. Ta kontakt for å bekrefte levering 
                      til ditt arrangement.</>
                    )}
                    {locationName === 'Sandvika' && (
                      <>Vi leverer catering til hele Oslo-området, inkludert Bærum, Asker, 
                      Oslo sentrum, Lysaker og Fornebu. Ta kontakt for å bekrefte levering 
                      til ditt arrangement.</>
                    )}
                    {!locationName && (
                      <>Vi leverer catering til våre lokalområder. Ta kontakt for å bekrefte levering 
                      til ditt arrangement.</>
                    )}
                  </p>
                  <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                    <MapPin className="h-4 w-4 text-gold" />
                    <span>
                      {locationName === 'Sandnes' && 'Hovedlokasjon: Langgata 45, Sandnes sentrum'}
                      {locationName === 'Stavanger' && 'Hovedlokasjon: Stavanger sentrum'}
                      {locationName === 'Sandvika' && 'Hovedlokasjon: Sandvika sentrum'}
                      {!locationName && 'Kontakt oss for nærmeste lokasjon'}
                    </span>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Pricing Information */}
            <div className="mb-16">
              <h4 className="text-2xl font-serif font-semibold text-center text-foreground mb-8">
                Catering Priser & Pakker
              </h4>
              <div className="grid md:grid-cols-3 gap-6">
                <Card className="hover-lift">
                  <CardContent className="p-6 text-center">
                    <h5 className="text-xl font-serif font-semibold text-foreground mb-3">
                      Standard Pakke
                    </h5>
                    <p className="text-2xl font-bold text-gold mb-4">Fra 295,-</p>
                    <p className="text-sm text-muted-foreground mb-4">per person</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• 3-retters meny</li>
                      <li>• Grunnleggende servering</li>
                      <li>• Minimum 20 personer</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover-lift border-gold">
                  <CardContent className="p-6 text-center">
                    <h5 className="text-xl font-serif font-semibold text-foreground mb-3">
                      Premium Pakke
                    </h5>
                    <p className="text-2xl font-bold text-gold mb-4">Fra 495,-</p>
                    <p className="text-sm text-muted-foreground mb-4">per person</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• 5-retters luksusmeny</li>
                      <li>• Full service og servering</li>
                      <li>• Elegant borddekning</li>
                    </ul>
                  </CardContent>
                </Card>
                <Card className="hover-lift">
                  <CardContent className="p-6 text-center">
                    <h5 className="text-xl font-serif font-semibold text-foreground mb-3">
                      Skreddersydd
                    </h5>
                    <p className="text-2xl font-bold text-gold mb-4">På forespørsel</p>
                    <p className="text-sm text-muted-foreground mb-4">Tilpasset dine behov</p>
                    <ul className="text-sm text-muted-foreground space-y-2">
                      <li>• Personlig konsultasjon</li>
                      <li>• Fleksible løsninger</li>
                      <li>• Alle budsjetter</li>
                    </ul>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* FAQ Section with Collapsible */}
            <div className="mb-16">
              <h4 className="text-2xl font-serif font-semibold text-center text-foreground mb-8">
                Ofte Stilte Spørsmål om Catering
              </h4>
              <div className="space-y-4 max-w-4xl mx-auto">
                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <h5 className="text-lg font-semibold text-foreground">
                            Hvor lang tid trenger dere på forhånd?
                          </h5>
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <Card className="border-t-0 rounded-t-none">
                      <CardContent className="p-6 pt-0">
                        <p className="text-muted-foreground">
                          Vi anbefaler minimum 48 timer for mindre arrangementer (under 30 personer) 
                          og 1 uke for større events. For bryllup og større bedriftsarrangementer 
                          anbefaler vi 2-3 ukers varsel. Kontakt oss for hasteoppdrag - vi gjør vårt beste!
                        </p>
                      </CardContent>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <h5 className="text-lg font-semibold text-foreground">
                            Kan dere tilpasse menyen for allergier og kostbehov?
                          </h5>
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <Card className="border-t-0 rounded-t-none">
                      <CardContent className="p-6 pt-0">
                        <p className="text-muted-foreground">
                          Absolutt! Vi tilpasser gjerne menyen for allergier, vegetariske/veganske behov, 
                          og andre kostrestriksjoner. Alle våre retter er halal-sertifiserte. 
                          Gi oss detaljert beskjed ved bestilling så lager vi en perfekt meny for alle gjestene.
                        </p>
                      </CardContent>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <h5 className="text-lg font-semibold text-foreground">
                            Inkluderer dere oppsett, servering og opprydning?
                          </h5>
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <Card className="border-t-0 rounded-t-none">
                      <CardContent className="p-6 pt-0">
                        <p className="text-muted-foreground">
                          Vi tilbyr både takeaway-løsninger og full service. Vår full service inkluderer 
                          oppsett av buffet/bordservering, profesjonell servering under arrangementet, 
                          og komplett opprydning etterpå. Velg løsningen som passer best for ditt arrangement og budsjett.
                        </p>
                      </CardContent>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>

                <Collapsible>
                  <CollapsibleTrigger asChild>
                    <Card className="cursor-pointer hover:bg-accent/50 transition-colors">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between">
                          <h5 className="text-lg font-semibold text-foreground">
                            Hvor langt leverer dere catering?
                          </h5>
                          <ChevronDown className="h-5 w-5 text-muted-foreground" />
                        </div>
                      </CardContent>
                    </Card>
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <Card className="border-t-0 rounded-t-none">
                      <CardContent className="p-6 pt-0">
                        <p className="text-muted-foreground">
                          Vi leverer hovedsakelig innenfor en radius på 30-50 km fra våre restauranter. 
                          For spesielle anledninger kan vi vurdere lengre distanser. 
                          Kontakt oss for å bekrefte levering til ditt ønskede sted - vi finner alltid en løsning!
                        </p>
                      </CardContent>
                    </Card>
                  </CollapsibleContent>
                </Collapsible>
              </div>
            </div>

            {/* Enhanced CTA */}
            <div className="text-center">
              <div className="bg-gradient-gold rounded-2xl p-8 md:p-12 text-background">
                <h4 className="text-2xl md:text-3xl font-serif font-bold mb-4">
                  Klar for å bestille catering i {locationName || 'Norge'}?
                </h4>
                <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                  La oss gjøre ditt neste arrangement i {locationName || 'Norge'} til en kulinarisk opplevelse. 
                  Kontakt oss for skreddersydd tilbud og personlig service!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button 
                    size="lg" 
                    className="bg-background text-gold hover:bg-background/90 font-semibold text-lg px-8 py-6"
                  >
                    <Calendar className="h-5 w-5 mr-2" />
                    Bestill Catering Nå
                  </Button>
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-background/20 border-background text-background hover:bg-background hover:text-gold font-semibold text-lg px-8 py-6"
                  >
                    <Phone className="h-5 w-5 mr-2" />
                    Få et Tilbud i Dag
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default MenuCateringSection;