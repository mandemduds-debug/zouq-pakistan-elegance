import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, MapPin, Phone } from 'lucide-react';
import cateringFood1 from '@/assets/catering-food-1.png';
import cateringFood2 from '@/assets/catering-food-2.png';
import cateringFood3 from '@/assets/catering-food-3.png';
import cateringFood4 from '@/assets/catering-food-4.png';

const StavangerCateringSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('catering-contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="catering" className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section with Enhanced Contrast */}
        <div className="text-center mb-16">
          <div className="bg-card rounded-3xl p-10 md:p-14 shadow-2xl border-4 border-gold/30">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8 leading-tight">
              Catering Stavanger
            </h2>
            <p className="text-lg md:text-xl text-foreground/90 max-w-4xl mx-auto leading-relaxed mb-4">
              <span className="font-semibold text-foreground">Bryllup • Konfirmasjon • Bedriftsarrangementer</span>
            </p>
            <p className="text-base md:text-lg text-foreground/80 max-w-3xl mx-auto leading-relaxed mb-10">
              Zouq tilbyr eksklusiv pakistansk catering i Stavanger og omegn. Fra intime konfirmasjoner 
              til store bedriftsarrangementer - vi leverer autentiske smaker med profesjonell service.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-gold text-white hover:opacity-90 font-bold text-xl px-10 py-7 shadow-2xl transition-all hover:scale-105"
            >
              Bestill catering
            </Button>
          </div>
        </div>

        {/* Why Choose Section with Enhanced Contrast */}
        <div className="mb-16">
          <div className="bg-card rounded-3xl p-10 md:p-12 shadow-2xl border-4 border-gold/30">
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-10 text-center">
              Hvorfor velge Zouq?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="text-center bg-background rounded-2xl p-8 shadow-xl border-2 border-border">
                <div className="w-24 h-24 mx-auto mb-5 bg-gradient-gold rounded-full flex items-center justify-center shadow-xl">
                  <Check className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4">Kvalitet & Tradisjon</h4>
                <p className="text-foreground/90 leading-relaxed text-base">Autentiske oppskrifter og førsteklasses ingredienser</p>
              </div>
              <div className="text-center bg-background rounded-2xl p-8 shadow-xl border-2 border-border">
                <div className="w-24 h-24 mx-auto mb-5 bg-gradient-gold rounded-full flex items-center justify-center shadow-xl">
                  <Clock className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4">Pålitelig Levering</h4>
                <p className="text-foreground/90 leading-relaxed text-base">Punktlig levering til hele Stavanger-området</p>
              </div>
              <div className="text-center bg-background rounded-2xl p-8 shadow-xl border-2 border-border">
                <div className="w-24 h-24 mx-auto mb-5 bg-gradient-gold rounded-full flex items-center justify-center shadow-xl">
                  <MapPin className="h-12 w-12 text-white" />
                </div>
                <h4 className="text-xl md:text-2xl font-bold text-foreground mb-4">Fleksible Løsninger</h4>
                <p className="text-foreground/90 leading-relaxed text-base">Tilpassede menyer for alle anledninger og budsjetter</p>
              </div>
            </div>

            {/* Food Images Row */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-gold/40">
                <img src={cateringFood1} alt="Crispy Pakora" className="w-full h-64 object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-gold/40">
                <img src={cateringFood2} alt="Mixed Grill" className="w-full h-64 object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-gold/40">
                <img src={cateringFood3} alt="Tandoori Chicken" className="w-full h-64 object-cover" />
              </div>
              <div className="overflow-hidden rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-300 border-4 border-gold/40">
                <img src={cateringFood4} alt="Seekh Kebab" className="w-full h-64 object-cover" />
              </div>
            </div>
          </div>
        </div>


        {/* Catering Categories with Enhanced Contrast */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden hover-lift bg-card shadow-2xl border-4 border-gold/30">
            <CardContent className="p-10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-5">
                Catering til Konfirmasjoner i Stavanger
              </h3>
              <p className="text-foreground/90 mb-6 leading-relaxed text-base">
                Gjør konfirmasjonen til en minneverdig dag med våre spesialtilpassede menyer. 
                Vi tilbyr både tradisjonelle pakistanske retter og tilpassede alternativer 
                for alle gjester i Stavanger og omegn.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-foreground">
                  <Check className="h-6 w-6 text-gold shrink-0" />
                  <span className="font-semibold text-base">Buffét eller servert middag</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Check className="h-6 w-6 text-gold shrink-0" />
                  <span className="font-semibold text-base">Tilpasset unge gjester</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Check className="h-6 w-6 text-gold shrink-0" />
                  <span className="font-semibold text-base">Allergitilpassede alternativer</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-lift bg-card shadow-2xl border-4 border-gold/30">
            <CardContent className="p-10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-5">
                Catering til Bryllup i Stavanger
              </h3>
              <p className="text-foreground/90 mb-6 leading-relaxed text-base">
                Feir kjærligheten med eksotiske smaker! Våre bryllupscatering-pakker 
                inkluderer alt fra forrett til dessert, perfekt for bryllup i Stavanger-området.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-foreground">
                  <Check className="h-6 w-6 text-gold shrink-0" />
                  <span className="font-semibold text-base">Luksuriøse bryllupspakker</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Check className="h-6 w-6 text-gold shrink-0" />
                  <span className="font-semibold text-base">Profesjonell servering</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Check className="h-6 w-6 text-gold shrink-0" />
                  <span className="font-semibold text-base">Dekorativt oppsett</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-lift bg-card shadow-2xl border-4 border-gold/30">
            <CardContent className="p-10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-5">
                Catering til Selskaper & Private Anledninger
              </h3>
              <p className="text-foreground/90 mb-6 leading-relaxed text-base">
                Fra bursdager til jubileer - vi leverer deilig catering til alle private 
                arrangementer i Stavanger. Velg mellom våre faste menyer eller lag din egen.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-foreground">
                  <Check className="h-6 w-6 text-gold shrink-0" />
                  <span className="font-semibold text-base">Fleksible porsjonstørrelser</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Check className="h-6 w-6 text-gold shrink-0" />
                  <span className="font-semibold text-base">Takeaway eller levering</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Check className="h-6 w-6 text-gold shrink-0" />
                  <span className="font-semibold text-base">Konkurransedyktige priser</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-lift bg-card shadow-2xl border-4 border-gold/30">
            <CardContent className="p-10">
              <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-5">
                Julebord Catering & Bedriftsarrangementer Stavanger
              </h3>
              <p className="text-foreground/90 mb-6 leading-relaxed text-base">
                Imponér kolleger og kunder med vår bedriftscatering i Stavanger. 
                Perfekt for julebord, kick-off møter, og andre bedriftsarrangementer.
              </p>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-foreground">
                  <Check className="h-6 w-6 text-gold shrink-0" />
                  <span className="font-semibold text-base">Profesjonelle løsninger</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Check className="h-6 w-6 text-gold shrink-0" />
                  <span className="font-semibold text-base">Fakturering til bedrift</span>
                </li>
                <li className="flex items-center gap-3 text-foreground">
                  <Check className="h-6 w-6 text-gold shrink-0" />
                  <span className="font-semibold text-base">Pålitelig service</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Delivery Areas */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-card shadow-2xl border-4 border-gold/30">
            <CardContent className="p-10 text-center">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
                Leveringsområder rundt Stavanger
              </h3>
              <p className="text-foreground/90 mb-8 max-w-3xl mx-auto leading-relaxed text-base md:text-lg">
                Vi leverer catering til hele Stavanger-regionen, inkludert Sandnes, Sola, 
                Randaberg, Klepp, Time og andre nærliggende områder. Kontakt oss for å 
                sjekke om vi leverer til ditt arrangement.
              </p>
              <div className="flex items-center justify-center gap-3 text-foreground">
                <MapPin className="h-6 w-6 text-gold" />
                <span className="font-bold text-base md:text-lg">Hovedlokasjon: Øvre Holmegate 15, 4006 Stavanger</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-center text-foreground mb-10">
            Ofte Stilte Spørsmål om Catering
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card shadow-2xl border-4 border-gold/30">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Hvor lang tid trenger dere på forhånd?
                </h4>
                <p className="text-foreground/90 text-base leading-relaxed">
                  Vi anbefaler minimum 48 timer for mindre arrangementer og 1 uke for større events. 
                  Kontakt oss for hasteoppdrag.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-2xl border-4 border-gold/30">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Kan dere tilpasse menyen for allergier?
                </h4>
                <p className="text-foreground/90 text-base leading-relaxed">
                  Ja, vi tilpasser gjerne menyen for allergier og spesielle kostbehov. 
                  Gi oss beskjed ved bestilling.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-2xl border-4 border-gold/30">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Hva er prisnivået på cateringen?
                </h4>
                <p className="text-foreground/90 text-base leading-relaxed">
                  Prisene varierer etter meny og antall gjester. Kontakt oss for et 
                  skreddersydd tilbud til ditt arrangement.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card shadow-2xl border-4 border-gold/30">
              <CardContent className="p-8">
                <h4 className="text-xl font-bold text-foreground mb-4">
                  Inkluderer dere oppsettet og servering?
                </h4>
                <p className="text-foreground/90 text-base leading-relaxed">
                  Vi tilbyr både takeaway og full service med oppsett, servering og 
                  opprydning. Velg løsningen som passer best for deg.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div id="catering-contact" className="text-center">
          <div className="bg-gradient-gold rounded-2xl p-8 md:p-12 shadow-2xl">
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white drop-shadow-lg" style={{ color: '#FFFFFF' }}>
              Klar for å bestille catering i Stavanger?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-white drop-shadow-lg" style={{ color: '#FFFFFF' }}>
              Kontakt oss i dag for et skreddersydd tilbud til ditt arrangement. 
              Vi gleder oss til å gjøre din feiring uforglemmelig!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-gold hover:bg-white font-semibold text-lg px-8 py-6 shadow-lg"
                style={{ backgroundColor: '#FFFFFF' }}
              >
                Bestill Catering Nå
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white border-2 border-white text-gold hover:bg-white hover:text-gold/90 font-semibold text-lg px-8 py-6 shadow-md"
                style={{ backgroundColor: '#FFFFFF', borderColor: '#FFFFFF' }}
              >
                <Phone className="h-5 w-5 mr-2" />
                Få et Tilbud i Dag
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StavangerCateringSection;