import { AlertCircle, TrendingDown, Zap, RotateCcw, Star } from "lucide-react";

const PainPoints = () => {
  const painPoints = [
    {
      icon: TrendingDown,
      title: "Mușchii refuză să se arate",
      description: "Te antrenezi din ce în ce mai mult, dar mușchii refuză să se arate?",
      color: "text-primary"
    },
    {
      icon: AlertCircle,
      title: "Cântarul nu cedează",
      description: "Mănânci din ce în ce mai puțin, dar cântarul refuză să arate mai putine kilograme?",
      color: "text-destructive"
    },
    {
      icon: Zap,
      title: "Oboseală constantă",
      description: "Te simți permanent obosită, anxioasă sau parcă nu mai ești tu însăți?",
      color: "text-accent"
    },
    {
      icon: RotateCcw,
      title: "Roata hamsterului",
      description: "Ai impresia că ești un hamster într-o rotiță care tot aleargă și nu ajunge nicăieri?",
      color: "text-secondary-foreground"
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
            Aceste provocări sunt reale și comune pentru femeile de peste 40 de ani. 
            Nu ești singura și, mai important, există soluții.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {painPoints.map((point, index) => (
            <div 
              key={index}
              className="group animate-scale-in bg-white p-8 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 border border-border"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="flex items-start gap-4">
                <div className={`p-3 rounded-xl bg-section-bg group-hover:bg-primary/10 transition-colors duration-300`}>
                  <point.icon className={`h-6 w-6 ${point.color}`} />
                </div>
                <div className="flex-1">
                  <h3 className="font-accent font-semibold text-lg text-foreground mb-3">
                    {point.title}
                  </h3>
                  <p className="font-sans text-muted-foreground leading-relaxed">
                    {point.description}
                  </p>
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