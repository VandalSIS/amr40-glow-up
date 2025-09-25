import { CheckCircle2, FileText, Video, Users2, Clock, Shield, Utensils } from "lucide-react";
import { Button } from "@/components/ui/button";

const Benefits = () => {
  const benefits = [
    {
      icon: FileText,
      title: "Planul tău personalizat de antrenament",
      description: "Programe specifice adaptate vârstei și nevoilor tale unice"
    },
    {
      icon: Utensils,
      title: "Ghidul complet de nutriție 40+",
      description: "Strategii alimentare pentru echilibrul hormonal și energie optimă"
    },
    {
      icon: Video,
      title: "Acces la biblioteca de resurse",
      description: "Videouri, workshopuri și materiale educaționale pentru viață"
    },
    {
      icon: Users2,
      title: "Comunitatea AMR 40+",
      description: "Conexiuni cu femei care înțeleg călătoria ta și te susțin"
    },
    {
      icon: Clock,
      title: "Suport continuu 90 de zile",
      description: "Îndrumări și răspunsuri la întrebări în primele 3 luni"
    },
    {
      icon: Shield,
      title: "Garanție de satisfacție",
      description: "Dacă nu ești mulțumită, îți returnăm banii în primele 30 de zile"
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
            Nu primești doar o experiență de 4 zile – primești toate instrumentele 
            necesare pentru o transformare care durează toată viața.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-16">
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
                  <h3 className="font-accent font-semibold text-lg text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="font-sans text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center">
          <div className="inline-block bg-gradient-secondary p-8 rounded-2xl shadow-soft mb-8">
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Valoarea totală: peste 2.500€
            </h3>
            <p className="font-sans text-lg text-muted-foreground">
              Investiția ta de astăzi pentru următorii 40 de ani
            </p>
          </div>
          <Button size="lg" variant="premium" className="animate-scale-in">
            Rezervă-ți transformarea acum
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Benefits;