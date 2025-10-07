import { AlertCircle, TrendingDown, Zap, RotateCcw, Star } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    {
      icon: TrendingDown,
      title: "Te antrenezi din ce în ce mai mult, dar mușchii refuză să se arate?",
      description: "",
      color: "text-primary"
    },
    {
      icon: AlertCircle,
      title: "Mănânci din ce în ce mai puțin, dar cântarul refuză să arate mai putine kilograme?",
      description: "",
      color: "text-destructive"
    },
    {
      icon: Zap,
      title: "Te simți permanent obosită, anxioasă sau parcă nu mai ești tu însăți?",
      description: "",
      color: "text-accent"
    },
    {
      icon: RotateCcw,
      title: "Ai impresia că ești un \"hamster\" într-o rotiță care tot aleargă și nu ajunge nicăieri?",
      description: "",
      color: "text-secondary-foreground"
    },
    {
      icon: Star,
      title: "Ai încercat totul și parcă nimic nu funcționează?",
      description: "",
      color: "text-primary"
    },
    {
      icon: AlertCircle,
      title: "Te simți singură, pierdută într-o mare de sfaturi contradictorii?",
      description: "",
      color: "text-destructive"
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
                  <point.icon className={`h-5 w-5 ${point.color}`} />
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
          <div className="inline-block bg-gradient-secondary p-6 rounded-2xl shadow-soft">
            <div className="flex items-center justify-center gap-3">
              <Star className="h-6 w-6 text-primary" />
              <p className="font-accent text-lg font-semibold text-foreground">
                Dacă te regăsești în aceste situații, ești în locul potrivit
              </p>
              <Star className="h-6 w-6 text-primary" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainPoints;