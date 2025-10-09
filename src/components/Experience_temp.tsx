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
      title: "Antrenamente inteligente È™i cu scop",
      description: "â€¦pentru cÄƒ nu faci miÈ™care la Ã®ntÃ¢mplare, ci un program gÃ¢ndit special pentru femei, adaptat vÃ¢rstei, nivelului tÄƒu de fitness È™i obiectivelor tale â€“ ca sÄƒ arzi grÄƒsimea abdominalÄƒ, sÄƒ construieÈ™ti masÄƒ muscularÄƒ È™i sÄƒ Ã®È›i protejezi oasele.",
      image: workoutImage,
      imagePosition: "center center",
    },
    {
      icon: Utensils,
      title: "NutriÈ›ie personalizatÄƒ",
      description: "â€¦pentru cÄƒ ai nevoie sÄƒ È™tii clar ce, cÃ¢nd È™i cum sÄƒ mÄƒnÃ¢nci ca sÄƒ Ã®È›i susÈ›ii inteligent transformarea. FÄƒrÄƒ Ã®nfometare, fÄƒrÄƒ restricÈ›ii absurde â€“ doar soluÈ›ii simple, aplicabile imediat Ã®n propria bucÄƒtÄƒrie.",
      image: nutritionImage,
      imagePosition: "center center",
    },
    {
      icon: Heart,
      title: "Fiziologia unicÄƒ a femeii",
      description: "â€¦pentru cÄƒ doar dacÄƒ Ã®nÈ›elegi ce se schimbÄƒ Ã®n corpul tÄƒu dupÄƒ 40 de ani vei putea sÄƒ susÈ›ii schimbÄƒrile necesare Ã®n stilul de viaÈ›Äƒ, ca sÄƒ combaÈ›i pierderea masei musculare, densitÄƒÈ›ii osoase È™i acumularea de grÄƒsime Ã®n jurul taliei.",
      image: physiologyImage,
      imagePosition: "center 30%",
    },
    {
      icon: BookOpen,
      title: "Workshopuri educaÈ›ionale",
      description: "â€¦pentru cÄƒ este nevoie sÄƒ È™tii È™i sÄƒ Ã®nÈ›elegi, Ã®ntr-un limbaj simplu È™i nemedical, ce se Ã®ntÃ¢mplÄƒ Ã®n corpul tÄƒu dupÄƒ 40 de ani â€“ ca sÄƒ transformi informaÈ›iile Ã®n lecÈ›ii clare È™i aplicabile imediat pentru alimentaÈ›ie, antrenament È™i recuperare.",
      image: workshopImage,
      imagePosition: "center 20%",
    },
    {
      icon: Star,
      title: "Cazare 5 stele",
      description: "â€¦pentru cÄƒ transformarea are nevoie de un cadru pe mÄƒsurÄƒ. Stai Ã®ntr-o locaÈ›ie exclusivistÄƒ, cu camere elegante, spa, saunÄƒ È™i ciubÄƒr, unde confortul premium È™i liniÈ™tea naturii se Ã®mbinÄƒ perfect pentru a-È›i susÈ›ine energia È™i echilibrul.",
      image: accommodationImage,
      imagePosition: "center center",
    },
    {
      icon: Users,
      title: "SpaÈ›iu exclusiv pentru transformare",
      description: "â€¦pentru cÄƒ doar rupÃ¢ndu-te de agitaÈ›ia È™i responsabilitÄƒÈ›ile zilnice Ã®È›i poÈ›i muta atenÈ›ia spre tine. ÃŽn acest cadru restrÃ¢ns, cu doar 20 de participante, primeÈ™ti atenÈ›ia personalÄƒ È™i liniÈ™tea necesarÄƒ ca sÄƒ Ã®nveÈ›i, sÄƒ integrezi È™i sÄƒ te reconectezi cu propriul corp.",
      image: atmosphereImage,
      imagePosition: "center center",
    },
  ];

  return (
    <section id="retreat" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            ExperienÈ›a de 4 zile care Ã®È›i va schimba viaÈ›a
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            Este o experienÈ›Äƒ educaÈ›ionalÄƒ intensivÄƒ. Nu este o escapadÄƒ relaxantÄƒ, ci un program complet prin care Ã®È›i iei corpul È™i viaÈ›a Ã®napoi. Pe scurt: pleci informatÄƒ È™i la cÃ¢rma vieÈ›ii tale, cu soluÈ›ii È™i un plan pe care le poÈ›i aplica imediat.
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
              Pentru cÄƒ transformarea realÄƒ nu vine din sÄƒptÄƒmÃ¢ni de informaÈ›ii confuze, 
              ci din claritate concentratÄƒ, strategii precise È™i implementare imediatÄƒ. 
              ÃŽn 4 zile intensive vei Ã®nvÄƒÈ›a ceea ce altele cautÄƒ ani Ã®ntregi.
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
            aria-label="ÃŽnchide"
          >
            <X className="h-6 w-6 text-white group-hover:scale-110 transition-transform duration-300" />
          </button>
          <img 
            src={selectedImage} 
            alt="Imagine mÄƒritÄƒ"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}
    </section>
  );
};

export default Experience;
