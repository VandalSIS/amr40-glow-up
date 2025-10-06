import { Target, Utensils, Heart, BookOpen, Star, Users } from "lucide-react";
import workoutImage from "@/assets/a-lifestyle-advertisement-featuring-a-co_obg-5ApAQlC_Mh-Le6Btow_ewUDtxURSvyWFZE0e4a32A.jpeg";
import nutritionImage from "@/assets/a-photograph-of-a-vibrant-caesar-salad-p_Ievn_zxJS2CEWSqivkHcXA_Z8PLVjdfSaK0-eKednC8-g.jpeg";
import physiologyImage from "@/assets/JdQS5e9zivePKYOMffl1AiD5qVCA95YdfbELj1jE.jpg";
import workshopImage from "@/assets/a-photograph-of-a-strong-woman-mid-exerc_oT35sv77QbqvJQca93rfoA_x_lgRgjnRzmpagG68igCYQ.jpeg";
import accommodationImage from "@/assets/5-Star-Accomodation-1-scaled.jpg";
import atmosphereImage from "@/assets/a-serene-lifestyle-advertisement-promoti_ykK-OdfPSMGjx0MvscVCQA_02LLfFT_SU-1zkJGh1j8fw.jpeg";

const Experience = () => {
  const components = [
    {
      icon: Target,
      title: "Antrenamente inteligente și cu scop",
      description: "…pentru că nu faci mișcare la întâmplare, ci un program gândit special pentru femei, adaptat vârstei, nivelului tău de fitness și obiectivelor tale – ca să arzi grăsimea abdominală, să construiești masă musculară și să îți protejezi oasele.",
      image: workoutImage,
    },
    {
      icon: Utensils,
      title: "Nutriție personalizată",
      description: "…pentru că ai nevoie să știi clar ce, când și cum să mănânci ca să îți susții inteligent transformarea. Fără înfometare, fără restricții absurde – doar soluții simple, aplicabile imediat în propria bucătărie.",
      image: nutritionImage,
    },
    {
      icon: Heart,
      title: "Fiziologia unică a femeii",
      description: "…pentru că doar dacă înțelegi ce se schimbă în corpul tău după 35 de ani vei putea să susții schimbările necesare în stilul de viață, ca să combați pierderea masei musculare, densității osoase și acumularea de grăsime în jurul taliei.",
      image: physiologyImage,
    },
    {
      icon: BookOpen,
      title: "Workshopuri educaționale",
      description: "…pentru că este nevoie să știi și să înțelegi, într-un limbaj simplu și nemedical, ce se întâmplă în corpul tău după 35 de ani – ca să transformi informațiile în lecții clare și aplicabile imediat pentru alimentație, antrenament și recuperare.",
      image: workshopImage,
    },
    {
      icon: Star,
      title: "Cazare 5 stele",
      description: "…pentru că transformarea are nevoie de un cadru pe măsură. Stai într-o locație exclusivistă, cu camere elegante, spa, saună și ciubăr, unde confortul premium și liniștea naturii se îmbină perfect pentru a-ți susține energia și echilibrul.",
      image: accommodationImage,
    },
    {
      icon: Users,
      title: "Spațiu exclusiv pentru transformare",
      description: "…pentru că doar rupându-te de agitația și responsabilitățile zilnice îți poți muta atenția spre tine. În acest cadru restrâns, cu doar 20 de participante, primești atenția personală și liniștea necesară ca să înveți, să integrezi și să te reconectezi cu propriul corp.",
      image: atmosphereImage,
    },
  ];

  return (
    <section id="retreat" className="py-20 bg-section-bg">
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
              className="group animate-scale-in bg-white rounded-2xl shadow-card hover:shadow-elegant transition-all duration-500 hover:-translate-y-3 border border-border overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={component.image} 
                  alt={component.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 left-4">
                  <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <component.icon className="h-6 w-6 text-primary" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="font-accent font-bold text-base text-foreground mb-2">
                  {component.title}
                </h3>
                <p className="font-sans text-sm text-muted-foreground leading-snug">
                  {component.description}
                </p>
              </div>
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