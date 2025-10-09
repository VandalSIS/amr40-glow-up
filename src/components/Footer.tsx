import { MapPin, Mail, Phone, Calendar, Facebook, Instagram } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-6 py-16">
        <div className="grid lg:grid-cols-3 gap-12 mb-12">
          {/* Program Info */}
          <div className="space-y-6">
            <div>
              <h3 className="font-serif text-2xl font-bold mb-4">
                Metoda A.M.R. 40+
              </h3>
              <p className="font-sans text-primary-foreground/80 leading-relaxed">
                Programul de coaching dedicat femeilor 40+ pentru recuperarea controlului 
                asupra corpului prin antrenament, nutriție și recuperare.
              </p>
            </div>
            <div className="pt-4">
              <Button 
                variant="secondary" 
                size="lg"
                onClick={() => scrollToSection('rezervare')}
              >
                Rezervă-ți locul acum
              </Button>
            </div>
          </div>
          
          {/* Event Details */}
          <div className="space-y-6">
            <h4 className="font-accent font-bold text-lg">
              Detalii Eveniment
            </h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="font-accent font-semibold">06–09 noiembrie 2025</p>
                  <p className="font-sans text-sm text-primary-foreground/70">
                    4 zile intensive de transformare
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-accent mt-1" />
                <div>
                  <p className="font-accent font-semibold">Domeniul Toma, Covasna</p>
                  <p className="font-sans text-sm text-primary-foreground/70">
                    Cazare 5 stele în natură
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-accent font-bold text-lg">
              Contact & Suport
            </h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-accent" />
                <a 
                  href="mailto:menopauzactiva@gmail.com" 
                  className="font-sans text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  menopauzactiva@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-accent" />
                <a 
                  href="tel:+40123456789" 
                  className="font-sans text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  +40 123 456 789
                </a>
              </div>
            </div>
            
            <div className="pt-4">
              <p className="font-sans text-sm text-primary-foreground/80 mb-4 font-medium">
                Urmărește-ne pentru updates și sfaturi zilnice:
              </p>
              <div className="flex gap-4">
                <a 
                  href="https://www.facebook.com/share/1DMF5WLDiL/?mibextid=wwXIfr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group border border-white/20"
                  aria-label="Facebook"
                >
                  <Facebook className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
                <a 
                  href="https://www.instagram.com/iulia__popa?igsh=NnduZjdkNWpoa3lj&utm_source=qr" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-white/20 transition-all duration-300 group border border-white/20"
                  aria-label="Instagram"
                >
                  <Instagram className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
                </a>
              </div>
              <p className="font-sans text-xs text-primary-foreground/60 mt-3">
                Conținut exclusiv pentru femeile 40+ • Sfaturi nutriționale • Antrenamente personalizate
              </p>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="text-center">
            <p className="font-sans text-sm text-primary-foreground/60">
              © 2025 Metoda AMR 40+ by Iulia Popa. Toate drepturile rezervate.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;