import { Dumbbell, Apple, Heart } from "lucide-react";

const AMRMethod = () => {
  const methods = [
    {
      icon: Dumbbell,
      letter: "A",
      title: "Antrenament",
      subtitle: "Inteligent și adaptat",
      description: "Programe de fitness specifice pentru femeile 40+, care respectă schimbările hormonale și metabolice. Nu mai mult, ci mai inteligent.",
      benefits: [
        "Antrenament de forță pentru menținerea masei musculare",
        "Exerciții funcționale pentru viața de zi cu zi",
        "Programe adaptate ciclului hormonal",
        "Recuperare optimizată între sesiuni"
      ]
    },
    {
      icon: Apple,
      letter: "M",
      title: "Mâncare",
      subtitle: "Nutriție personalizată",
      description: "Strategii alimentare care susțin echilibrul hormonal și energia, nu restricții extreme care îți sabotează metabolismul.",
      benefits: [
        "Planuri alimentare pentru echilibrul hormonal",
        "Strategii pentru accelerarea metabolismului",
        "Alimente care reduc inflamația",
        "Timing optim al meselor pentru energia maximă"
      ]
    },
    {
      icon: Heart,
      letter: "R",
      title: "Recuperare",
      subtitle: "Elementul secret",
      description: "Componenta cea mai neglijată dar cea mai importantă pentru femeile 40+. Fără recuperare adecvată, antrenamentul și nutriția nu pot funcționa.",
      benefits: [
        "Strategii pentru somn de calitate",
        "Managementul stresului și cortizolului",
        "Tehnici de relaxare și mindfulness",
        "Optimizarea recuperării hormonale"
      ]
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Metoda A.M.R. 40+
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            O abordare holistică și științifică, creată special pentru nevoile unice ale femeilor de peste 40 de ani.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {methods.map((method, index) => (
            <div 
              key={index}
              className="group animate-fade-in bg-white rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 border border-border overflow-hidden"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="p-8">
                <div className="text-center mb-6">
                  <div className="relative inline-block mb-4">
                    <div className="w-20 h-20 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <method.icon className="h-10 w-10 text-white" />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <span className="font-accent font-bold text-accent-foreground">
                        {method.letter}
                      </span>
                    </div>
                  </div>
                  <h3 className="font-serif text-2xl font-bold text-primary mb-2">
                    {method.title}
                  </h3>
                  <p className="font-accent text-lg font-semibold text-accent mb-4">
                    {method.subtitle}
                  </p>
                  <p className="font-sans text-muted-foreground leading-relaxed mb-6">
                    {method.description}
                  </p>
                </div>
                
                <ul className="space-y-3">
                  {method.benefits.map((benefit, benefitIndex) => (
                    <li key={benefitIndex} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                      <span className="font-sans text-foreground text-sm">
                        {benefit}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-secondary p-8 rounded-2xl shadow-soft max-w-4xl">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              De ce funcționează Metoda A.M.R.?
            </h3>
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              Pentru că nu tratează simptomele, ci cauza. Nu îți oferă soluții temporare, 
              ci îți creează un sistem sustenabil adaptat nevoilor specifice ale corpului tău după 40 de ani. 
              Când toate cele trei componente lucrează împreună, transformarea este inevitabilă.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AMRMethod;