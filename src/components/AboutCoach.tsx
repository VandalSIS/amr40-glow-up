import coachImage from "@/assets/12345.jpg";
import { Quote } from "lucide-react";

const AboutCoach = () => {
  return (
    <section id="despre" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Întâlnește-ți ghidul expert
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Descoperă îndrumarea, suportul personalizat și instrumentele bazate pe știință de care ai nevoie prin această experiență transformatoare
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center max-w-6xl mx-auto">
          <div className="order-2 lg:order-1 animate-slide-in">
            <div className="relative">
              <img 
                src={coachImage} 
                alt="Iulia Popa - Menopause Coach & Fitness Specialist" 
                className="w-full max-w-md mx-auto lg:max-w-full rounded-2xl shadow-elegant"
              />
              <div className="absolute -bottom-2 -right-2 bg-white/90 backdrop-blur-sm p-3 rounded-xl shadow-soft">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                  <p className="font-accent font-bold text-accent text-sm">
                    20+ ani experiență
                  </p>
                  <div className="w-2 h-2 bg-accent rounded-full animate-pulse"></div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2 animate-fade-in">
            <h3 className="font-serif text-xl sm:text-2xl lg:text-3xl font-bold text-primary mb-4 lg:mb-6">
              Iulia Popa
            </h3>
            <p className="font-accent text-base lg:text-lg font-semibold text-primary-light mb-4 lg:mb-6">
              Menopause Coach & Fitness Specialist
            </p>
            
            <div className="space-y-3 lg:space-y-4 mb-6 lg:mb-8">
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="font-sans text-foreground text-sm lg:text-base">
                  <strong>Peste 20 de ani experiență</strong> în fitness și nutriție, fostă atletă de performanță
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="font-sans text-foreground text-sm lg:text-base">
                  <strong>Licențiată în Management</strong>, Master în Nutriție și PR
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="font-sans text-foreground text-sm lg:text-base">
                  <strong>Antrenor personal certificat</strong>, cu multiple specializări, inclusiv Menopause Coaching Specialist
                </p>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                <p className="font-sans text-foreground text-sm lg:text-base">
                  <strong>Manager de Fitness</strong> și formator a peste 500 de antrenori personali
                </p>
              </div>
            </div>
            
            <div className="relative bg-white p-4 lg:p-6 rounded-xl shadow-card">
              <Quote className="h-6 w-6 lg:h-8 lg:w-8 text-secondary mb-3 lg:mb-4" />
              <blockquote className="font-sans text-foreground italic leading-relaxed text-sm lg:text-base">
                "Vreau să schimb conversația despre fitness și nutriție pentru femei, să te ajut să preiei controlul asupra vieții tale, atunci când hormonii tăi, vor altceva. Pentru că femeile sunt diferite de bărbați și pentru că după 40 de ani, când toți din jurul tău îți spun să o lași mai moale… că e cazul să te uiți în buletin… noi, femeile, de fapt trebuie să sprintăm. Pentru că putem!"
              </blockquote>
              <cite className="font-accent font-semibold text-primary mt-3 lg:mt-4 block text-sm lg:text-base">
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