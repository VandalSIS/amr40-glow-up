import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-wellness-women.jpg";
import { Calendar, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Femei active 40+ într-un cadru natural wellness"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Te invit să trăiești 4 zile care îți pot schimba următorii 40 de ani!
          </h1>
          
          <p className="font-sans text-lg sm:text-xl lg:text-2xl mb-8 leading-relaxed max-w-4xl mx-auto opacity-95">
            Alătură-te primului program de coaching one-to-many din România dedicat 
            <span className="font-accent font-semibold"> EXCLUSIV femeilor</span>, 
            unde te învăț cum să îți recuperezi controlul asupra corpului – folosind exact ceea ce 
            funcționează <span className="font-accent font-semibold">DUPĂ vârsta de 40</span>.
          </p>
          
          <div className="mb-8">
            <h2 className="font-accent text-2xl sm:text-3xl font-bold mb-4 text-accent">
              Metoda A.M.R. 40+ by Iulia Popa
            </h2>
            <p className="font-accent text-lg sm:text-xl tracking-wide">
              Antrenament • Mâncare • Recuperare
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10 text-lg">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-accent" />
              <span className="font-accent font-medium">16–19 octombrie 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="font-accent font-medium">Domeniul Toma, Covasna</span>
            </div>
          </div>
          
          <Button size="lg" variant="hero" className="animate-scale-in">
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