import { MapPin, Mail, Phone, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
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
              <Button variant="secondary" size="lg">
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
                  <p className="font-accent font-semibold">16–19 octombrie 2025</p>
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
                  href="mailto:contact@amr40plus.ro" 
                  className="font-sans text-primary-foreground/80 hover:text-accent transition-colors duration-300"
                >
                  contact@amr40plus.ro
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
              <p className="font-sans text-sm text-primary-foreground/60 mb-3">
                Urmărește-ne pentru updates:
              </p>
              <div className="flex gap-3">
                <a 
                  href="#" 
                  className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition-colors duration-300"
                  aria-label="Facebook"
                >
                  📘
                </a>
                <a 
                  href="#" 
                  className="w-10 h-10 bg-accent/20 rounded-lg flex items-center justify-center hover:bg-accent/30 transition-colors duration-300"
                  aria-label="Instagram"
                >
                  📷
                </a>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row gap-4 md:gap-8">
              <a 
                href="/termeni-conditii" 
                className="font-sans text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300"
              >
                Termeni și Condiții
              </a>
              <a 
                href="/privacy-policy" 
                className="font-sans text-sm text-primary-foreground/70 hover:text-accent transition-colors duration-300"
              >
                Politică de Confidențialitate
              </a>
            </div>
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