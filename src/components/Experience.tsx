import { Target, Utensils, Heart, BookOpen, Star, Users } from "lucide-react";

const Experience = () => {
  const components = [
    {
      icon: Target,
      title: "Antrenamente inteligente și cu scop",
      description: "Îți arată cum să scapi de grăsimea de pe burtă, să construiești mușchi pentru forță și independență și să stopezi osteoporoza care afectează 60% dintre femeile de peste 50 de ani.",
    },
    {
      icon: Utensils,
      title: "Nutriție personalizată",
      description: "Îndrumare practică despre ce, când și cum să mănânci pentru a susține inteligent această transformare. Fără înfometare, fără restricții absurde – doar soluții aplicabile în propria bucătărie.",
    },
    {
      icon: Heart,
      title: "Fiziologia unică a femeii",
      description: "Explicată simplu, fără termeni complicați: cum funcționam înainte de 40 de ani și ce se schimbă după.",
    },
    {
      icon: BookOpen,
      title: "Workshopuri educaționale",
      description: "Sesiuni zilnice care simplifică teme complexe în lecții clare și aplicabile imediat.",
    },
    {
      icon: Star,
      title: "Cazare 5 stele",
      description: "Confort premium, într-un cadru luxos care îți susține transformarea.",
    },
    {
      icon: Users,
      title: "Atmosferă intimă și exclusivă",
      description: "Limitat la 20 de participante, pentru atenție personală și conexiune autentică.",
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
            Este o experiență educațională intensivă. Nu este o escapadă relaxantă, ci un program complet prin care îți iei corpul și viața înapoi. Pe scurt: pleci informată și la cârma vieții tale, cu soluții și un plan pe care le poți aplica imediat.
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