import coachImage from "@/assets/coach-portrait.jpg";
import { Quote } from "lucide-react";

const AboutCoach = () => {
  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Întâlnește-ți ghidul expert
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            O călătorie de transformare ghidată de experiență și pasiune
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1 animate-slide-in">
            <div className="relative">
              <img 
                src={coachImage} 
                alt="Iulia Popa - Menopause Coach & Fitness Specialist" 
                className="w-full max-w-md mx-auto lg:max-w-full rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-4 -right-4 bg-accent p-4 rounded-2xl shadow-soft">
                <p className="font-accent font-bold text-accent-foreground text-center">
                  <span className="text-2xl block">20+</span>
                  <span className="text-sm">ani experiență</span>
                </p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-primary mb-6">
              Iulia Popa
            </h3>
            <p className="font-accent text-lg font-semibold text-primary-light mb-6">
              Menopause Coach & Fitness Specialist
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="font-sans text-foreground">
                  <strong>Licențiată în Management</strong> cu specializare în optimizarea performanței
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="font-sans text-foreground">
                  <strong>Master în Nutriție și PR</strong> pentru o abordare holistică
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="font-sans text-foreground">
                  <strong>Antrenor certificat</strong> cu focus pe nevoile specifice ale femeilor 40+
                </p>
              </div>
            </div>
            
            <div className="relative bg-white p-6 rounded-xl shadow-card">
              <Quote className="h-8 w-8 text-secondary mb-4" />
              <blockquote className="font-sans text-foreground italic leading-relaxed">
                "Vreau să schimb conversația despre fitness și nutriție pentru femei. Nu mai este vorba 
                despre restricții și chin, ci despre înțelegerea corpului tău și oferirea exactului de 
                care are nevoie pentru a prospera în această nouă etapă a vieții."
              </blockquote>
              <cite className="font-accent font-semibold text-primary mt-4 block">
                — Iulia Popa
              </cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutCoach;