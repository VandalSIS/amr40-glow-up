import inBodyLogo from "@/assets/inbody-logo.jpg";
import proNutritionLogo from "@/assets/pro-nutrition-logo.jpg";
import caffeCostadoroLogo from "@/assets/caffe-costadoro-logo.jpg";
import ginsima from "@/assets/ginsima.png";
import artesanaLogo from "@/assets/artesana-logo.png";
import obioLogo from "@/assets/LOGO_Obio(RGB)-01.png";
import biocyteLogo from "@/assets/WhatsApp Image 2025-10-28 at 16.26.31_6eb9dedf.jpg";
import zimbriaLogo from "@/assets/Logo color.png";
import adyaLogo from "@/assets/adya-logo.png";
import hadriLogo from "@/assets/hadri-health-logo.png";
import uptownLogo from "@/assets/uptown-esthetics-logo.png";
import corneliaLogo from "@/assets/cornelia-olive-oil-logo.png";
import motricLogo from "@/assets/motric-recovery-logo.png";
import nucaLogo from "@/assets/nuca-organic-logo.jpg";

type Sponsor = {
  logo: string;
  name: string;
  url: string;
};

const Sponsors = () => {
  const sponsors: Sponsor[] = [
    { logo: inBodyLogo, name: "InBody", url: "" },
    { logo: proNutritionLogo, name: "Pro Nutrition", url: "https://www.pronutrition.ro/" },
    { logo: caffeCostadoroLogo, name: "Caffè Costadoro", url: "" },
    { logo: ginsima, name: "Ginissima", url: "https://ginissima.ro/" },
    { logo: artesanaLogo, name: "Artesana", url: "https://artesana.ro/" },
    { logo: obioLogo, name: "Obio", url: "https://www.obio.ro/" },
    { logo: biocyteLogo, name: "Biocyte", url: "https://www.biocyte.ro/" },
    { logo: zimbriaLogo, name: "Zimbria", url: "https://zimbria.ro/" },
    { logo: adyaLogo, name: "ADYA", url: "" },
    { logo: hadriLogo, name: "HADRI Health", url: "" },
    { logo: uptownLogo, name: "Uptown Esthetics", url: "" },
    { logo: corneliaLogo, name: "Cornelia Olive Oil", url: "" },
    { logo: nucaLogo, name: "Nuca Organic", url: "" },
    { logo: motricLogo, name: "Clinica Motric Recovery", url: "" },
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

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-5 max-w-5xl mx-auto">
          {sponsors.map((sponsor, index) => {
            const cardClass =
              "group flex items-center justify-center h-28 sm:h-32 rounded-2xl border border-border bg-white shadow-card transition-all duration-300 hover:-translate-y-1 hover:shadow-elegant";

            const image = (
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-14 sm:max-h-16 w-auto max-w-[75%] object-contain"
                loading="lazy"
                decoding="async"
              />
            );

            return sponsor.url ? (
              <a
                key={sponsor.name}
                href={sponsor.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`${cardClass} cursor-pointer`}
                style={{ animationDelay: `${Math.min(index * 0.05, 0.6)}s` }}
                aria-label={sponsor.name}
              >
                {image}
              </a>
            ) : (
              <div
                key={sponsor.name}
                className={cardClass}
                style={{ animationDelay: `${Math.min(index * 0.05, 0.6)}s` }}
                aria-label={sponsor.name}
              >
                {image}
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12">
          <p className="font-sans text-sm text-muted-foreground italic">
            Mulțumim partenerilor noștri pentru susținerea misiunii noastre de a ajuta femeile să își
            recapete controlul asupra sănătății
          </p>
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
