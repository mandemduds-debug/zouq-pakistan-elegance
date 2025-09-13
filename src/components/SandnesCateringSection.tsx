import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, MapPin, Phone } from 'lucide-react';

const SandnesCateringSection = () => {
  return (
    <section id="catering" className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Catering Sandnes - Bryllup, Konfirmasjon & Bedriftsarrangementer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Opplev Zouqs eksklusive pakistanske catering i Sandnes sentrum og omegn. 
            Vi kombinerer tradisjonell smak med moderne eleganse for alle dine arrangementer.
          </p>
        </div>

        {/* Intro Section */}
        <div className="mb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Hvorfor velge Zouq for catering i Sandnes?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Check className="h-8 w-8 text-background" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Moderne Eleganse</h4>
                <p className="text-muted-foreground">Sofistikert presentasjon av autentiske pakistanske retter</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-background" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Lokal Tilstedeværelse</h4>
                <p className="text-muted-foreground">Rask og pålitelig levering i hele Sandnes-området</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-background" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Personlig Service</h4>
                <p className="text-muted-foreground">Skreddersydde løsninger for dine behov</p>
              </div>
            </div>
          </div>
        </div>

        {/* Catering Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Catering til Konfirmasjoner i Sandnes
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Feir konfirmasjonen med stil i Sandnes! Våre menyalternativer passer perfekt 
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
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Catering til Bryllup i Sandnes
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Gjør bryllupsdagen magisk med våre luksuriøse bryllupspakker. 
                Perfekt for romantiske feiringer i Sandnes med familie og venner.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  Eksklusive bryllupsmennyer
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  Elegant presentasjon
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  Komplett serviceopplevelse
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Catering til Selskaper & Private Anledninger
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Fra private middager til store familiefester i Sandnes - vi tilpasser 
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
                  Rimelige priser
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Julebord Catering & Bedriftsarrangementer Sandnes  
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Skap minneverdige bedriftsopplevelser i Sandnes med vår profesjonelle 
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
                  Profesjonell håndtering
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>

        {/* Delivery Areas */}
        <div className="mb-16">
          <Card className="overflow-hidden">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Leveringsområder rundt Sandnes
              </h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                Vi leverer catering til hele Sandnes og nærområdene, inkludert Bryne, 
                Nærbø, Ålgård, Gjesdal og Stavanger. Ta kontakt for å bekrefte levering 
                til ditt arrangement.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-gold" />
                <span>Hovedlokasjon: Langgata 45, Sandnes sentrum</span>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* FAQ */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-semibold text-center text-foreground mb-8">
            Ofte Stilte Spørsmål om Catering
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Hvor lang tid trenger dere på forhånd?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Vi anbefaler minimum 48 timer for mindre arrangementer og 1 uke for større events. 
                  Kontakt oss for hasteoppdrag.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Kan dere tilpasse menyen for allergier?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Ja, vi tilpasser gjerne menyen for allergier og spesielle kostbehov. 
                  Gi oss beskjed ved bestilling.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Hva er prisnivået på cateringen?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Prisene varierer etter meny og antall gjester. Kontakt oss for et 
                  skreddersydd tilbud til ditt arrangement.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6">
                <h4 className="text-lg font-semibold text-foreground mb-2">
                  Inkluderer dere oppsettet og servering?
                </h4>
                <p className="text-muted-foreground text-sm">
                  Vi tilbyr både takeaway og full service med oppsett, servering og 
                  opprydning. Velg løsningen som passer best for deg.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-gold rounded-2xl p-8 md:p-12 text-background">
            <h3 className="text-2xl md:text-3xl font-serif font-bold mb-4">
              Klar for å bestille catering i Sandnes?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              La oss gjøre ditt neste arrangement i Sandnes til en kulinarisk opplevelse. 
              Kontakt oss for tilpasset tilbud!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                size="lg" 
                className="bg-background text-gold hover:bg-background/90 font-semibold text-lg px-8 py-6"
              >
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
      </div>
    </section>
  );
};

export default SandnesCateringSection;