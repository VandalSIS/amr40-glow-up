import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Check, MapPin, Calendar, Users } from "lucide-react";
import SimpleContactForm from "./SimpleContactForm";
import { getRetreatOffer } from "@/config/retreatOffer";

const Pricing = () => {
  const offer = getRetreatOffer();
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("");
  const [selectedEditionId, setSelectedEditionId] = useState(offer.editions[0].id);

  const selectedEdition =
    offer.editions.find((edition) => edition.id === selectedEditionId) ?? offer.editions[0];

  const handleReservation = (optionType: string) => {
    setSelectedOption(`${optionType} – ${selectedEdition.sublabel} (${selectedEdition.label})`);
    setIsContactPopupOpen(true);
  };

  const pricingOptions = [
    {
      type: "Cameră single",
      price: offer.singlePrice,
      description: "Confort complet și intimitate pentru concentrare maximă",
      features: [
        "Camera single cu baie privată",
        "Toate mesele incluse",
        "Toate workshopurile și antrenamentele",
        "Materiale educaționale complete",
        "Suport 90 de zile post-program",
        "Acces la comunitatea exclusivă"
      ],
      popular: false
    },
    {
      type: "Cameră dublă",
      price: offer.doublePrice,
      description: "Experiență completă cu posibilitatea de a împărți cu o prietenă",
      features: [
        "Camera dublă cu baie privată",
        "Toate mesele incluse",
        "Toate workshopurile și antrenamentele",
        "Materiale educaționale complete",
        "Suport 90 de zile post-program",
        "Acces la comunitatea exclusivă"
      ],
      popular: true
    }
  ];

  return (
    <section id="rezervare" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Ești gata să îți transformi viața?
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
            Alătură-te unei experiențe all-inclusive de 4 zile, într-o locație luxoasă de 5 stele.
          </p>
          
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 ${offer.chooseEdition ? "mb-8" : "mb-12"}`}>
            {!offer.chooseEdition && (
              <div className="flex items-center gap-2 text-foreground">
                <Calendar className="h-5 w-5 text-accent" />
                <span className="font-accent font-medium">
                  {selectedEdition.label} — {selectedEdition.sublabel}
                </span>
              </div>
            )}
            <div className="flex items-center gap-2 text-foreground">
              <MapPin className="h-5 w-5 text-accent" />
              <span className="font-accent font-medium">Domeniul Toma, Covasna</span>
            </div>
            <div className="flex items-center gap-2 text-foreground">
              <Users className="h-5 w-5 text-accent" />
              <span className="font-accent font-medium">Maxim 18 participante</span>
            </div>
          </div>

          {offer.chooseEdition && (
            <div className="mb-12">
              <p className="font-accent font-semibold text-foreground mb-4 flex items-center justify-center gap-2">
                <Calendar className="h-5 w-5 text-accent" />
                Alege ediția din 2027:
              </p>
              <div className="grid sm:grid-cols-3 gap-3 max-w-3xl mx-auto">
                {offer.editions.map((edition) => {
                  const isSelected = selectedEditionId === edition.id;
                  return (
                    <button
                      key={edition.id}
                      type="button"
                      onClick={() => setSelectedEditionId(edition.id)}
                      className={`px-4 py-4 rounded-2xl border-2 transition-all duration-200 text-center ${
                        isSelected
                          ? "border-accent bg-accent text-white shadow-elegant"
                          : "border-border bg-white text-foreground hover:border-accent/60"
                      }`}
                    >
                      <p className="font-accent font-semibold text-sm leading-tight">{edition.label}</p>
                      <p className={`font-sans text-xs leading-tight mt-1 ${isSelected ? "text-white/80" : "text-muted-foreground"}`}>
                        {edition.sublabel}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto">
          {pricingOptions.map((option, index) => (
            <div 
              key={index}
              className={`relative animate-scale-in bg-white rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 overflow-hidden ${
                option.popular ? 'border-2 border-accent' : 'border border-border'
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              
              <div className="p-6 lg:p-8">
                <div className="text-center mb-6">
                  <h3 className="font-serif text-xl lg:text-2xl font-bold text-primary mb-2">
                    {option.type}
                  </h3>
                  <div className="mb-3">
                    <span className="font-serif text-3xl lg:text-4xl font-bold text-foreground">
                      {option.price}
                    </span>
                    <span className="font-sans text-muted-foreground ml-1 text-sm lg:text-base">
                      / persoană
                    </span>
                  </div>
                  <p className="font-sans text-muted-foreground text-sm lg:text-base">
                    {option.description}
                  </p>
                </div>
                
                <ul className="space-y-2 lg:space-y-3 mb-6 lg:mb-8">
                  {option.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-3">
                      <Check className="h-4 w-4 lg:h-5 lg:w-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="font-sans text-foreground text-sm lg:text-base">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                
                <Button 
                  size="lg" 
                  variant={option.popular ? "hero" : "outline"}
                  className="w-full text-sm lg:text-base"
                  onClick={() => handleReservation(option.type)}
                >
                  Rezervă {option.type}
                </Button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-primary p-6 rounded-2xl shadow-elegant text-white max-w-2xl">
            <div className="flex items-center justify-center gap-3 mb-3">
              <h3 className="font-serif text-xl font-bold">
                Locuri Limitate
              </h3>
            </div>
            <p className="font-sans leading-relaxed">
              Pentru a asigura atenția personalizată și calitatea experienței, 
              acceptăm maximum 18 participante. Nu rata această oportunitate unică!
            </p>
          </div>
        </div>
      </div>

      {/* Contact Popup */}
      <SimpleContactForm 
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
        title="Rezervare"
        reservationDetails={selectedOption}
      />
    </section>
  );
};

export default Pricing;