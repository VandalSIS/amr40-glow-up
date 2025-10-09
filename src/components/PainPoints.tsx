import { Dumbbell, Scale, Battery, Repeat, HelpCircle, Users, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PainPoints = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const painPoints = [
    {
      icon: Dumbbell,
      title: "Te antrenezi din ce în ce mai mult, dar mușchii refuză să se arate?",
      description: "",
      color: "text-primary"
    },
    {
      icon: Scale,
      title: "Mănânci din ce în ce mai puțin, dar cântarul refuză să arate mai putine kilograme?",
      description: "",
      color: "text-primary"
    },
    {
      icon: Battery,
      title: "Te simți permanent obosită, anxioasă sau parcă nu mai ești tu însăți?",
      description: "",
      color: "text-primary"
    },
    {
      icon: Repeat,
      title: "Ai impresia că ești un \"hamster\" într-o rotiță care tot aleargă și nu ajunge nicăieri?",
      description: "",
      color: "text-primary"
    },
    {
      icon: HelpCircle,
      title: "Ai încercat totul și parcă nimic nu funcționează?",
      description: "",
      color: "text-primary"
    },
    {
      icon: Users,
      title: "Te simți singură, pierdută într-o mare de sfaturi contradictorii?",
      description: "",
      color: "text-primary"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Ești și tu aici, la fel ca milioane de femei din întreaga lume?
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            Aceste provocări sunt reale și comune pentru femeile de peste 35 de ani. 
            Nu ești singura și, mai important, există soluții.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="group animate-scale-in bg-white p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-section-bg group-hover:bg-primary/10 transition-colors duration-300`}>
                  <point.icon className={`h-7 w-7 ${point.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-accent font-semibold text-base text-foreground leading-relaxed">
                    {point.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="font-accent text-2xl font-semibold text-foreground mb-6">
            Dacă te regăsești în aceste situații, ești în locul potrivit
          </p>
          <Button 
            size="lg" 
            variant="hero"
            onClick={() => scrollToSection('rezervare')}
          >
            Rezervă acum
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;