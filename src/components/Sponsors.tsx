import inBodyLogo from "@/assets/inbody-logo.jpg";
import proNutritionLogo from "@/assets/pro-nutrition-logo.jpg";
import caffeCostadoroLogo from "@/assets/caffe-costadoro-logo.jpg";

const Sponsors = () => {
  const sponsors = [
    {
      name: "InBody",
      logo: inBodyLogo,
      description: "Analiză corporală avansată"
    },
    {
      name: "Pro Nutrition",
      logo: proNutritionLogo,
      description: "Suplimente de calitate premium"
    },
    {
      name: "Caffè Costadoro",
      logo: caffeCostadoroLogo,
      description: "Cafea autentică italienească"
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
        
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {sponsors.map((sponsor, index) => (
            <div 
              key={index}
              className="group animate-fade-in bg-section-bg p-6 rounded-2xl shadow-card hover:shadow-elegant transition-all duration-300 hover:-translate-y-2 text-center"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="mb-4 bg-white rounded-xl p-4 mx-auto w-fit">
                <img 
                  src={sponsor.logo} 
                  alt={`Logo ${sponsor.name}`}
                  className="h-16 w-auto object-contain mx-auto"
                />
              </div>
              <h3 className="font-accent font-bold text-lg text-foreground mb-2">
                {sponsor.name}
              </h3>
              <p className="font-sans text-sm text-muted-foreground">
                {sponsor.description}
              </p>
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