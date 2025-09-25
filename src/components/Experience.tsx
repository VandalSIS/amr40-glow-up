import { Target, Utensils, Heart, BookOpen, Star, Users } from "lucide-react";

const Experience = () => {
  const components = [
    {
      icon: Target,
      title: "Antrenamente inteligente și cu scop",
      description: "Programe specifice pentru femeile 40+, adaptate metabolismului și hormonilor în schimbare",
    },
    {
      icon: Utensils,
      title: "Nutriție personalizată",
      description: "Planuri alimentare care susțin energia și echilibrul hormonal, nu restricții extreme",
    },
    {
      icon: Heart,
      title: "Fiziologia unică a femeii",
      description: "Înțelegerea profundă a schimbărilor corporale și adaptarea strategiilor în consecință",
    },
    {
      icon: BookOpen,
      title: "Workshopuri educaționale",
      description: "Sesiuni interactive pentru a-ți înțelege corpul și a face alegeri informate",
    },
    {
      icon: Star,
      title: "Cazare 5 stele",
      description: "Confort și lux la Domeniul Toma, un cadru perfect pentru transformare",
    },
    {
      icon: Users,
      title: "Atmosferă intimă",
      description: "Maxim 20 participante pentru atenție personalizată și conexiuni autentice",
    },
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Experiența de 4 zile care îți va schimba viața
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            Acesta nu este un program de relaxare – este un program educațional intensiv 
            care îți va oferi toate instrumentele necesare pentru transformarea pe termen lung.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {components.map((component, index) => (
            <div 
              key={index}
              className="group animate-scale-in bg-white p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 border border-border"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-4">
                <div className="w-14 h-14 bg-gradient-secondary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <component.icon className="h-7 w-7 text-primary" />
                </div>
              </div>
              <h3 className="font-accent font-bold text-lg text-foreground mb-3">
                {component.title}
              </h3>
              <p className="font-sans text-muted-foreground leading-relaxed">
                {component.description}
              </p>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-16">
          <div className="inline-block bg-gradient-primary p-8 rounded-2xl shadow-elegant text-white max-w-3xl">
            <h3 className="font-serif text-2xl font-bold mb-4">
              De ce doar 4 zile?
            </h3>
            <p className="font-sans text-lg leading-relaxed">
              Pentru că transformarea reală nu vine din săptămâni de informații confuze, 
              ci din claritate concentrată, strategii precise și implementare imediată. 
              În 4 zile intensive vei învăța ceea ce altele caută ani întregi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;