import { Button } from "@/components/ui/button";
import heroImage from "@/assets/poza primul fundal.jpg";
import { Calendar, MapPin } from "lucide-react";

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Wellness pentru femei - Metoda AMR 40+"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center center' }}
        />
        <div className="absolute inset-0 bg-black/40"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-8 drop-shadow-2xl">
            Te invit să trăiești 4 zile care îți pot schimba următorii 40 de ani!
          </h1>
          
          <div className="mb-8">
            <h2 className="font-accent text-2xl sm:text-3xl font-bold mb-4 text-accent whitespace-nowrap">
              Metoda A.M.R. 35+ by Iulia Popa
            </h2>
            <p className="font-accent text-lg sm:text-xl tracking-wide">
              Antrenament • Mâncare • Recuperare
            </p>
          </div>
          
          <div className="flex flex-col items-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-lg">
              <MapPin className="h-5 w-5 text-accent flex-shrink-0" />
              <span className="font-accent font-medium">Domeniul Toma, Covasna</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-3">
              {[
                { date: "12-15 martie 2026", editie: "Ediția a II-a" },
                { date: "2-5 iulie 2026", editie: "Ediția a III-a" },
                { date: "1-4 octombrie 2026", editie: "Ediția a IV-a" },
                { date: "5-8 noiembrie 2026", editie: "Ediția a V-a" },
              ].map((e) => (
                <div key={e.editie} className="flex items-center gap-2 bg-white/15 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-2">
                  <Calendar className="h-4 w-4 text-accent flex-shrink-0" />
                  <div className="text-left">
                    <p className="font-accent font-semibold text-sm leading-tight">{e.date}</p>
                    <p className="font-accent text-xs text-white/70 leading-tight">{e.editie}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <Button 
            size="lg" 
            variant="hero" 
            className="animate-scale-in"
            onClick={() => scrollToSection('rezervare')}
          >
            Rezervă-ți locul acum
          </Button>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;