import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Pentru cine este potrivit acest program?",
      answer: "Programul este dedicat femeilor de peste 40 de ani care se confruntă cu schimbări hormonale, metabolice și de energie. Fie că ești la începutul perimenopuzei sau în plină menopauză, Metoda AMR 40+ te va ajuta să îți recapeți controlul asupra corpului."
    },
    {
      question: "Am nevoie de experiență anterioară în fitness?",
      answer: "Nu! Programul este adaptat pentru toate nivelurile. Fie că ești începătoare sau ai experiență în fitness, vei primi strategii personalizate pentru situația ta specifică."
    },
    {
      question: "Ce este inclus în preț?",
      answer: "Prețul include: cazarea pentru 4 zile la Domeniul Toma (5 stele), toate mesele, toate workshopurile și antrenamentele, materialele educaționale, planul tău personalizat, suportul pentru 90 de zile și accesul la comunitatea exclusivă."
    },
    {
      question: "Pot veni cu o prietenă?",
      answer: "Absolut! Multe participante aleg să vină cu o prietenă pentru suport suplimentar. Poți rezerva o cameră dublă și să împarți experiența cu cineva apropiat."
    },
    {
      question: "Ce dacă am restricții alimentare?",
      answer: "Echipa noastră culinară poate accommoda majoritatea restricțiilor alimentare. Te rugăm să ne informezi la momentul rezervării despre orice alergii sau preferințe dietetice."
    },
    {
      question: "Cum arată o zi tipică în program?",
      answer: "Fiecare zi include: sesiuni educaționale dimineața, antrenamente personalizate, mese nutritive, workshopuri practice și timp pentru relaxare și networking cu celelalte participante."
    },
    {
      question: "Există o politică de rambursare?",
      answer: "Da, oferim o garanție de satisfacție de 30 de zile. Dacă nu ești complet mulțumită de experiența ta, îți returnăm integral investiția."
    },
    {
      question: "Cum mă pregătesc pentru program?",
      answer: "Odată ce îți rezervi locul, vei primi un ghid de pregătire cu toate informațiile necesare, inclusiv ce să împachetezi și cum să îți pregătești mintea pentru transformare."
    }
  ];

  return (
    <section className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Întrebări Frecvente
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            Răspunsuri la cele mai comune întrebări despre programul AMR 40+
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="bg-white rounded-2xl shadow-card border border-border px-6 py-2 animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <AccordionTrigger className="font-accent font-semibold text-left text-foreground hover:text-primary hover:no-underline py-6">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="font-sans text-muted-foreground leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
        
        <div className="text-center mt-12">
          <p className="font-sans text-muted-foreground mb-4">
            Nu îți găsești răspunsul la întrebare?
          </p>
          <a 
            href="mailto:contact@amr40plus.ro" 
            className="font-accent font-semibold text-primary hover:text-primary-light transition-colors duration-300"
          >
            Contactează-ne direct →
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQ;