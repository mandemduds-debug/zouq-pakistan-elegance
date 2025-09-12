import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Check, Clock, MapPin, Phone } from 'lucide-react';

const StavangerCateringSection = () => {
  return (
    <section id="catering" className="py-20 bg-gradient-to-br from-background to-secondary/10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Catering Stavanger - Bryllup, Konfirmasjon & Bedriftsarrangementer
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Zouq tilbyr eksklusiv pakistansk catering i Stavanger og omegn. Fra intime konfirmasjoner 
            til store bedriftsarrangementer - vi leverer autentiske smaker med profesjonell service.
          </p>
        </div>

        {/* Intro Section */}
        <div className="mb-16 text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-6">
              Hvorfor velge Zouq for catering i Stavanger?
            </h3>
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Check className="h-8 w-8 text-background" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Kvalitet & Tradisjon</h4>
                <p className="text-muted-foreground">Autentiske oppskrifter og førsteklasses ingredienser</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center">
                  <Clock className="h-8 w-8 text-background" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Pålitelig Levering</h4>
                <p className="text-muted-foreground">Punktlig levering til hele Stavanger-området</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-gold rounded-full flex items-center justify-center">
                  <MapPin className="h-8 w-8 text-background" />
                </div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Fleksible Løsninger</h4>
                <p className="text-muted-foreground">Tilpassede menyer for alle anledninger og budsjetter</p>
              </div>
            </div>
          </div>
        </div>

        {/* Catering Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="overflow-hidden hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Catering til Konfirmasjoner i Stavanger
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Gjør konfirmasjonen til en minneverdig dag med våre spesialtilpassede menyer. 
                Vi tilbyr både tradisjonelle pakistanske retter og tilpassede alternativer 
                for alle gjester i Stavanger og omegn.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  Buffét eller servert middag
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  Tilpasset unge gjester
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  Allergitilpassede alternativer
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Catering til Bryllup i Stavanger
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Feir kjærligheten med eksotiske smaker! Våre bryllupscatering-pakker 
                inkluderer alt fra forrett til dessert, perfekt for bryllup i Stavanger-området.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  Luksuriøse bryllupspakker
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  Profesjonell servering
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  Dekorativt oppsettt
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
                Fra bursdager til jubileer - vi leverer deilig catering til alle private 
                arrangementer i Stavanger. Velg mellom våre faste menyer eller lag din egen.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  Fleksible porsjonstørrelser
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  Takeaway eller levering
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  Konkurransedyktige priser
                </li>
              </ul>
            </CardContent>
          </Card>

          <Card className="overflow-hidden hover-lift">
            <CardContent className="p-8">
              <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
                Julebord Catering & Bedriftsarrangementer Stavanger
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Imponér kolleger og kunder med vår bedriftscatering i Stavanger. 
                Perfekt for julebord, kick-off møter, og andre bedriftsarrangementer.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  Profesjonelle løsninger
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  Fakturering til bedrift
                </li>
                <li className="flex items-center gap-2">
                  <Check className="h-4 w-4 text-gold" />
                  Pålitelig service
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
                Leveringsområder rundt Stavanger
              </h3>
              <p className="text-muted-foreground mb-6 max-w-3xl mx-auto leading-relaxed">
                Vi leverer catering til hele Stavanger-regionen, inkludert Sandnes, Sola, 
                Randaberg, Klepp, Time og andre nærliggende områder. Kontakt oss for å 
                sjekke om vi leverer til ditt arrangement.
              </p>
              <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4 text-gold" />
                <span>Hovedlokasjon: Øvre Holmegate 15, 4006 Stavanger</span>
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
              Klar for å bestille catering i Stavanger?
            </h3>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Kontakt oss i dag for et skreddersydd tilbud til ditt arrangement. 
              Vi gleder oss til å gjøre din feiring uforglemmelig!
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
                className="border-background text-background hover:bg-background/10 font-semibold text-lg px-8 py-6"
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