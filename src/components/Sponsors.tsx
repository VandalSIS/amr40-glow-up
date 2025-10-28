import inBodyLogo from "@/assets/inbody-logo.jpg";
import proNutritionLogo from "@/assets/pro-nutrition-logo.jpg";
import caffeCostadoroLogo from "@/assets/caffe-costadoro-logo.jpg";
import ginsima from "@/assets/ginsima.png";
import screenshot2 from "@/assets/Screenshot_7-10-2025_161025_.jpeg";
import obioLogo from "@/assets/LOGO_Obio(RGB)-01.png";
import biocyteLogo from "@/assets/WhatsApp Image 2025-10-25 at 08.19.40_2361d241.jpg";

const Sponsors = () => {
  const sponsors = [
    {
      logo: inBodyLogo,
    },
    {
      logo: proNutritionLogo,
    },
    {
      logo: caffeCostadoroLogo,
    },
    {
      logo: ginsima,
    },
    {
      logo: screenshot2,
    },
    {
      logo: obioLogo,
    },
    {
      logo: biocyteLogo,
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-primary mb-4">
            Partenerii noștri de încredere
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Colaborăm cu branduri de top pentru a-ți oferi cele mai bune produse și servicii
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto justify-items-center">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="group animate-fade-in bg-section-bg p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white rounded-xl p-4 mx-auto w-fit">
                <img 
                  src={sponsor.logo} 
                  alt={`Partener ${index + 1}`}
                  className="h-16 w-auto object-contain mx-auto"
                />
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="font-sans text-sm text-muted-foreground italic">
            Mulțumim partenerilor noștri pentru susținerea misiunii noastre de a ajuta femeile să își recapete controlul asupra sănătății
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;