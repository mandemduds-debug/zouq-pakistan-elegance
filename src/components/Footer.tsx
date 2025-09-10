import { MapPin, Phone, Mail, Instagram, Facebook } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background py-16">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="text-3xl font-serif font-bold text-gold mb-4">
              Zouq
            </div>
            <p className="text-background/80 leading-relaxed mb-6">
              En smak av Pakistan, løftet til luksus. Vi skaper ikke bare måltider, 
              men opplevelser som engasjerer alle sanser.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center hover:bg-gold/30 transition-colors"
              >
                <Instagram className="h-5 w-5 text-gold" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-gold/20 rounded-lg flex items-center justify-center hover:bg-gold/30 transition-colors"
              >
                <Facebook className="h-5 w-5 text-gold" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-4">Navigasjon</h3>
            <ul className="space-y-2">
              <li>
                <a href="#hjem" className="text-background/80 hover:text-gold transition-colors">
                  Hjem
                </a>
              </li>
              <li>
                <a href="#om-oss" className="text-background/80 hover:text-gold transition-colors">
                  Om Zouq
                </a>
              </li>
              <li>
                <a href="#meny" className="text-background/80 hover:text-gold transition-colors">
                  Meny
                </a>
              </li>
              <li>
                <a href="#lokasjoner" className="text-background/80 hover:text-gold transition-colors">
                  Lokasjoner
                </a>
              </li>
              <li>
                <a href="#kontakt" className="text-background/80 hover:text-gold transition-colors">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-4">Tjenester</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-background/80 hover:text-gold transition-colors">
                  Bordbestilling
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-gold transition-colors">
                  Private Eventer
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-gold transition-colors">
                  Catering
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-gold transition-colors">
                  Selskaper
                </a>
              </li>
              <li>
                <a href="#" className="text-background/80 hover:text-gold transition-colors">
                  Takeaway
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-background mb-4">Kontakt</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-gold mt-0.5 flex-shrink-0" />
                <div className="text-background/80 text-sm">
                  Karl Johans gate 12<br />
                  0154 Oslo, Norge
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-background/80 text-sm">+47 22 12 34 56</span>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-gold flex-shrink-0" />
                <span className="text-background/80 text-sm">hei@zouq.no</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-background/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-background/60 text-sm">
              © {currentYear} Zouq Restaurant. Alle rettigheter forbeholdt.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-background/60 hover:text-gold transition-colors">
                Personvern
              </a>
              <a href="#" className="text-background/60 hover:text-gold transition-colors">
                Vilkår
              </a>
              <a href="#" className="text-background/60 hover:text-gold transition-colors">
                Cookies
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;