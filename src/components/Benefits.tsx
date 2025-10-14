import { CheckCircle2, FileText, Video, Users2, Clock, Shield, Utensils } from "lucide-react";

const Benefits = () => {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "O metodă CLARĂ și SIMPLĂ, pe care o poți aplica imediat",
      description: ""
    },
    {
      icon: FileText,
      title: "Structură și strategie pentru ceea ce ai de făcut în continuare",
      description: ""
    },
    {
      icon: Utensils,
      title: "Reguli simple de alimentație care îți schimbă relația cu mâncarea",
      description: ""
    },
    {
      icon: Video,
      title: "ANTRENAMENT care construiește mușchi, arde grăsimi și întărește oasele",
      description: ""
    },
    {
      icon: Clock,
      title: "Liste de cumpărături clare: ce să alegi, de unde și ce să ai mereu în frigider",
      description: ""
    },
    {
      icon: Shield,
      title: "Curajul de a acționa, pentru că acum știi exact ce să faci",
      description: ""
    },
    {
      icon: FileText,
      title: "Un rezumat practic cu tips & tricks, îl lipești pe frigider pentru aplicare imediată",
      description: ""
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Planul tău complet pentru viață
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            Nu primești doar inspirație, ci și pași concreți care fac diferența în corpul și viața ta de acum înainte:
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {benefits.map((benefit, index) => (
            <div 
              key={index}
              className="group animate-fade-in bg-white p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 border border-border"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 bg-section-bg rounded-xl group-hover:bg-primary/10 transition-colors duration-300">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-accent font-semibold text-base text-foreground leading-relaxed">
                    {benefit.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
