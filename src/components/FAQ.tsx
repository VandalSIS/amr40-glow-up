import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "Cui i se adresează acest retreat?",
      answer: "Retreatul este destinat tuturor femeilor, atât cele care trec prin simptomele perimenopauzei și menopauzei cât și celor care vor să își pregătească corpul și mintea pentru această etapă. Nicio femeie nu scapă de consecințele diminuării hormonilor – cu simptome sau fără, ele se instalează dacă nu facem ceva să le prevenim."
    },
    {
      question: "Ce nivel de fitness este necesar?",
      answer: "Ideal este să fii o femeie activă, dar indiferent de nivelul tău actual, exercițiile sunt adaptate pentru fiecare. De la începătoare la avansate, vei primi sprijin și provocări pe măsura ta."
    },
    {
      question: "Ce este inclus în pachetul retreatului?",
      answer: "Cazare în camere de 5 stele, toate mesele, workshopuri zilnice, sesiuni de fitness personalizate, practici de recuperare, acces la saună și resurse exclusive. Apă și cafea incluse pe durata sesiunilor."
    },
    {
      question: "După cele 4 zile, voi putea continua singură ce am învățat?",
      answer: "Da! Scopul programului este să te împuternicesc să pui imediat in practica singură ceea ce primești. După retreat vei ști exact ce ai de făcut și cum să ceri sprijinul altora (de la antrenor, bucătar sau familie), atunci când ai nevoie."
    },
    {
      question: "Voi primi materiale de suport?",
      answer: "Da. Primești liste de cumpărături cu poze, meniuri și rețete simple, rutine de antrenament, diagrame explicative despre hormoni și macronutrienți, plus un rezumat practic cu tips & tricks."
    },
    {
      question: "Ce fel de mâncare vom avea la retreat?",
      answer: "Mesele sunt create special pentru nevoile femeilor. Simple, gustoase, hrănitoare, cu proteine de calitate (carne, pește, ouă), ca să îți fie ușor să le reproduci și acasă."
    },
    {
      question: "Pot să stau singură în cameră?",
      answer: "Da. Domeniul Toma are camere single și duble. Alegerea depinde de preferințe și de disponibilitate în momentul rezervării."
    },
    {
      question: "Este un retreat spiritual sau practic?",
      answer: "Este un program practic. Vei face antrenamente eficiente pentru mușchi, oase și inimă și vei primi educație simplă și aplicabilă, bazată pe știință."
    },
    {
      question: "Ce haine să îmi aduc?",
      answer: "Echipament sportiv comod, adidași de schimb, o bluză cu mânecă lungă și o geacă subțire pentru sesiunile în aer liber (dacă vremea permite). După înscriere vei primi lista completă."
    }
  ];

  return (
    <section id="faq" className="py-20 bg-section-bg">
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
      </div>
    </section>
  );
};

export default FAQ;