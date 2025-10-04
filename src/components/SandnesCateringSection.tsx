import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, MapPin, Phone } from 'lucide-react';
import cateringBiryani from '@/assets/catering-biryani.png';
import cateringWrap from '@/assets/catering-wrap.png';
import cateringGrill from '@/assets/catering-grill.png';
import cateringTandoori from '@/assets/catering-tandoori.png';
import cateringKebab from '@/assets/catering-kebab.png';
import cateringPakora from '@/assets/catering-pakora.png';

const SandnesCateringSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('catering-contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="catering" className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header Section with Strong Contrast */}
        <div className="text-center mb-12">
          <div className="bg-card/95 backdrop-blur-md rounded-3xl p-8 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-4 border-gold/40">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 drop-shadow-lg">
              Catering Sandnes - Bryllup, Konfirmasjon & Bedriftsarrangementer
            </h2>
            <p className="text-xl text-foreground font-medium max-w-3xl mx-auto leading-relaxed mb-8">
              Opplev Zouqs eksklusive pakistanske catering i Sandnes sentrum og omegn. 
              Vi kombinerer tradisjonell smak med moderne eleganse for alle dine arrangementer.
            </p>
            <Button 
              onClick={scrollToContact}
              size="lg" 
              className="bg-gradient-gold text-background hover:opacity-90 font-semibold text-lg px-8 py-6 shadow-xl"
            >
              Bestill Catering
            </Button>
          </div>
        </div>

        {/* Why Choose Section with Strong Contrast */}
        <div className="mb-16">
          <div className="bg-card/95 backdrop-blur-md rounded-2xl p-8 md:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-4 border-gold/40">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-8 text-center drop-shadow-lg">
              Hvorfor velge Zouq for catering i Sandnes?
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center bg-background/90 backdrop-blur rounded-xl p-6 shadow-xl border-2 border-gold/30">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg">
                  <Check className="h-10 w-10 text-background" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Moderne Eleganse</h4>
                <p className="text-foreground font-medium leading-relaxed">Sofistikert presentasjon av autentiske pakistanske retter</p>
              </div>
              <div className="text-center bg-background/90 backdrop-blur rounded-xl p-6 shadow-xl border-2 border-gold/30">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg">
                  <Clock className="h-10 w-10 text-background" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Lokal Tilstedeværelse</h4>
                <p className="text-foreground font-medium leading-relaxed">Rask og pålitelig levering i hele Sandnes-området</p>
              </div>
              <div className="text-center bg-background/90 backdrop-blur rounded-xl p-6 shadow-xl border-2 border-gold/30">
                <div className="w-20 h-20 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center shadow-lg">
                  <MapPin className="h-10 w-10 text-background" />
                </div>
                <h4 className="text-xl font-bold text-foreground mb-3">Personlig Service</h4>
                <p className="text-foreground font-medium leading-relaxed">Skreddersydde løsninger for dine behov</p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Gallery Row */}
        <div className="mb-16">
          <div className="bg-card/95 backdrop-blur-md rounded-2xl p-8 shadow-[0_20px_60px_rgba(0,0,0,0.5)] border-4 border-gold/40">
            <h3 className="text-3xl font-serif font-bold text-foreground mb-8 text-center drop-shadow-lg">
              Smak av Zouq
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              <div className="overflow-hidden rounded-xl shadow-2xl hover-lift border-4 border-gold/50">
                <img src={cateringBiryani} alt="Biryani" className="w-full h-56 object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl shadow-2xl hover-lift border-4 border-gold/50">
                <img src={cateringWrap} alt="Wrap" className="w-full h-56 object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl shadow-2xl hover-lift border-4 border-gold/50">
                <img src={cateringGrill} alt="Grill" className="w-full h-56 object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl shadow-2xl hover-lift border-4 border-gold/50">
                <img src={cateringTandoori} alt="Tandoori" className="w-full h-56 object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl shadow-2xl hover-lift border-4 border-gold/50">
                <img src={cateringKebab} alt="Kebab" className="w-full h-56 object-cover" />
              </div>
              <div className="overflow-hidden rounded-xl shadow-2xl hover-lift border-4 border-gold/50">
                <img src={cateringPakora} alt="Pakora" className="w-full h-56 object-cover" />
              </div>
            </div>
          </div>
        </div>

        {/* Catering Categories with Strong Contrast */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden hover-lift bg-card shadow-xl border-2 border-gold/20">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Catering til Konfirmasjoner i Sandnes
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Feir konfirmasjonen med stil i Sandnes! Våre menyalternativer passer perfekt 
                for familiefeiringer med gjester i alle aldre, servert med varme og omsorg.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <span>Familievennlige menyer</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <span>Halal-sertifiserte ingredienser</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <span>Milde og krydrede alternativer</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-lift bg-card/90 backdrop-blur-sm border-border/50 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Catering til Bryllup i Sandnes
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Gjør bryllupsdagen magisk med våre luksuriøse bryllupspakker. 
                Perfekt for romantiske feiringer i Sandnes med familie og venner.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <span>Eksklusive bryllupsmennyer</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <span>Elegant presentasjon</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <span>Komplett serviceopplevelse</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-lift bg-card/90 backdrop-blur-sm border-border/50 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Catering til Selskaper & Private Anledninger
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Fra private middager til store familiefester i Sandnes - vi tilpasser 
                opplevelsen etter dine ønsker og budsjett.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <span>Fleksible pakkeløsninger</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <span>Hjemlevering tilgjengelig</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <span>Rimelige priser</span>
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-lift bg-card/90 backdrop-blur-sm border-border/50 shadow-lg">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Julebord Catering & Bedriftsarrangementer Sandnes  
              </h3>
              <p className="text-foreground/70 mb-6 leading-relaxed">
                Skap minneverdige bedriftsopplevelser i Sandnes med vår profesjonelle 
                catering. Ideelt for julebord, møter og teambuilding-events.
              </p>
              <ul className="space-y-3 text-sm">
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <span>Bedriftstilpassede menyer</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <span>Enkel bestillingsprosess</span>
                </li>
                <li className="flex items-center gap-3 text-foreground/80">
                  <Check className="h-5 w-5 text-gold shrink-0" />
                  <span>Profesjonell håndtering</span>
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Delivery Areas */}
        <div className="mb-16">
          <Card className="overflow-hidden bg-card/90 backdrop-blur-sm border-border/50 shadow-lg">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Leveringsområder rundt Sandnes
              </h3>
              <p className="text-foreground/70 mb-6 max-w-3xl mx-auto leading-relaxed">
                Vi leverer catering til hele Sandnes og nærområdene, inkludert Bryne, 
                Nærbø, Ålgård, Gjesdal og Stavanger. Ta kontakt for å bekrefte levering 
                til ditt arrangement.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-foreground/80">
                <MapPin className="h-5 w-5 text-gold" />
                <span className="font-medium">Hovedlokasjon: Langgata 45, Sandnes sentrum</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h3 className="text-3xl font-serif font-semibold text-center text-foreground mb-8">
            Ofte Stilte Spørsmål om Catering
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="bg-card/90 backdrop-blur-sm border-border/50 shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Hvor lang tid trenger dere på forhånd?
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Vi anbefaler minimum 48 timer for mindre arrangementer og 1 uke for større events. 
                  Kontakt oss for hasteoppdrag.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/90 backdrop-blur-sm border-border/50 shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Kan dere tilpasse menyen for allergier?
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Ja, vi tilpasser gjerne menyen for allergier og spesielle kostbehov. 
                  Gi oss beskjed ved bestilling.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/90 backdrop-blur-sm border-border/50 shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Hva er prisnivået på cateringen?
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
                  Prisene varierer etter meny og antall gjester. Kontakt oss for et 
                  skreddersydd tilbud til ditt arrangement.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-card/90 backdrop-blur-sm border-border/50 shadow-lg">
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-3">
                  Inkluderer dere oppsettet og servering?
                </h4>
                <p className="text-foreground/70 text-sm leading-relaxed">
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
            <h3 className="text-3xl md:text-4xl font-serif font-bold mb-4 text-white drop-shadow-md">
              Klar for å bestille catering i Sandnes?
            </h3>
            <p className="text-lg mb-8 max-w-2xl mx-auto leading-relaxed text-white/95 drop-shadow">
              La oss gjøre ditt neste arrangement i Sandnes til en kulinarisk opplevelse. 
              Kontakt oss for tilpasset tilbud!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-white text-gold hover:bg-white/95 font-semibold text-lg px-8 py-6 shadow-lg"
              >
                Bestill Catering Nå
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="bg-white/95 border-2 border-white text-gold hover:bg-white hover:text-gold/90 font-semibold text-lg px-8 py-6 shadow-md"
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

export default SandnesCateringSection;