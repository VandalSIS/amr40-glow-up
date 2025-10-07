import { useState } from "react";
import { Target, Utensils, Heart, BookOpen, Star, Users, X } from "lucide-react";
import workoutImage from "@/assets/iulia-training-photo.jpg";
import nutritionImage from "@/assets/mancare.jpg";
import physiologyImage from "@/assets/fiziologia.jpg";
import workshopImage from "@/assets/workshop.jpg";
import accommodationImage from "@/assets/5-Star-Accomodation-1-scaled.jpg";
import atmosphereImage from "@/assets/a-serene-lifestyle-advertisement-promoti_ykK-OdfPSMGjx0MvscVCQA_02LLfFT_SU-1zkJGh1j8fw.jpeg";

const Experience = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const components = [
    {
      icon: Target,
      title: "Antrenamente inteligente și cu scop",
      description: "…pentru că nu faci mișcare la întâmplare, ci un program gândit special pentru femei, adaptat vârstei, nivelului tău de fitness și obiectivelor tale – ca să arzi grăsimea abdominală, să construiești masă musculară și să îți protejezi oasele.",
      image: workoutImage,
      imagePosition: "center center",
    },
    {
      icon: Utensils,
      title: "Nutriție personalizată",
      description: "…pentru că ai nevoie să știi clar ce, când și cum să mănânci ca să îți susții inteligent transformarea. Fără înfometare, fără restricții absurde – doar soluții simple, aplicabile imediat în propria bucătărie.",
      image: nutritionImage,
      imagePosition: "center center",
    },
    {
      icon: Heart,
      title: "Fiziologia unică a femeii",
      description: "…pentru că doar dacă înțelegi ce se schimbă în corpul tău după 35 de ani vei putea să susții schimbările necesare în stilul de viață, ca să combați pierderea masei musculare, densității osoase și acumularea de grăsime în jurul taliei.",
      image: physiologyImage,
      imagePosition: "center 30%",
    },
    {
      icon: BookOpen,
      title: "Workshopuri educaționale",
      description: "…pentru că este nevoie să știi și să înțelegi, într-un limbaj simplu și nemedical, ce se întâmplă în corpul tău după 35 de ani – ca să transformi informațiile în lecții clare și aplicabile imediat pentru alimentație, antrenament și recuperare.",
      image: workshopImage,
      imagePosition: "center 20%",
    },
    {
      icon: Star,
      title: "Cazare 5 stele",
      description: "…pentru că transformarea are nevoie de un cadru pe măsură. Stai într-o locație exclusivistă, cu camere elegante, spa, saună și ciubăr, unde confortul premium și liniștea naturii se îmbină perfect pentru a-ți susține energia și echilibrul.",
      image: accommodationImage,
      imagePosition: "center center",
    },
    {
      icon: Users,
      title: "Spațiu exclusiv pentru transformare",
      description: "…pentru că doar rupându-te de agitația și responsabilitățile zilnice îți poți muta atenția spre tine. În acest cadru restrâns, cu doar 20 de participante, primești atenția personală și liniștea necesară ca să înveți, să integrezi și să te reconectezi cu propriul corp.",
      image: atmosphereImage,
      imagePosition: "center center",
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
              <div 
                className="relative h-64 overflow-hidden cursor-pointer"
                onClick={() => setSelectedImage(component.image)}
              >
                <img 
                  src={component.image} 
                  alt={component.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  style={{ objectPosition: component.imagePosition }}
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

      {/* Image Lightbox Popup */}
      {selectedImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-all duration-300 group z-10"
            aria-label="Închide"
          >
            <X className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
          <img 
            src={selectedImage} 
            alt="Imagine mărită"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Experience;