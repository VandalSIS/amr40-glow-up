import { useState, useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const cardRef = useRef<HTMLDivElement>(null);

  const scrollToCard = () => {
    if (cardRef.current) {
      const yOffset = -100; // offset pentru navbar
      const y = cardRef.current.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  const testimonials = [
    {
      name: "Ioana",
      age: "41 ani",
      role: "antrenor, mamă",
      type: "Povestea personală",
      featured: true,
      quote: `Sunt o femeie de 41 de ani, antrenor și mamă. Fac sport de la 5 ani și nu m-am oprit niciodată.

Anul acesta am simțit însă că mi-am pierdut resursele și că nu le mai pot recupera, indiferent câte soluții sau câtă educație aveam.

Am intrat în A.M.R. 35+ cu oboseală fizică extremă, oboseală psihică, randament scăzut în antrenamente, dureri articulare, incapacitate de recuperare post-antrenament și creștere în greutate.

La finalul programului, toate aceste simptome s-au atenuat. Analizele mi-au arătat că energia corpului meu s-a reechilibrat în doar câteva zile.

Mi s-a schimbat complet abordarea față de antrenament.`,
      results: [
        "Mi-a crescut părul pe cap, unde nu mai creștea de ani de zile",
        "Cuperoza s-a oprit",
        "Agitația din deficitul de atenție s-a redus semnificativ",
        "Mă relaxez mult mai ușor",
        "HRV-ul a crescut de la 42 la 60",
        "M-am recuperat dintr-o răceală în 2 zile",
        "Candida die-off fără tratament",
        "Am dat jos cele 3 kg de 'puf'",
        "Nu mai adorm la 3 după-amiaza",
        "Nu mai am ochii uscați (aveam blefarită, acum nu mai am nevoie de picături)",
        "Nu mai am keratoze",
        "Sânii sunt din nou plini, deși am slăbit"
      ],
      conclusion: "Nu am obținut nimic din toate acestea în 9 luni de substituție hormonală. A.M.R. 35+ a fost punctul real de schimbare."
    },
    {
      name: "Rodica",
      age: "50 ani",
      role: "",
      type: "Ce mi-a plăcut cel mai mult în acest retreat?",
      featured: false,
      quote: `Cel mai mult mi-a plăcut conectarea cu celelalte participante.

Faptul că nu m-am simțit singură și că am fost într-un grup de femei care trec prin lucruri similare.

Partea teoretică a fost livrată pe înțelesul non-specialistului și a clarificat multe aspecte pe care nu le știam sau nu le înțelegeam.

Demonstrațiile practice despre ce înseamnă, concret, o 'farfurie de mâncare' corectă sau cum trebuie să se simtă un antrenament care creează efectiv schimbare, au fost extrem de utile.

În plus, cadrul în care s-a desfășurat retreatul, natura, liniștea, cazarea, a contribuit enorm la experiență.`,
      results: [],
      conclusion: ""
    },
    {
      name: "Ioana",
      age: "41 ani",
      role: "",
      type: "Ce mi-a plăcut cel mai mult în acest retreat?",
      featured: false,
      quote: `Ceea ce a făcut diferența pentru mine a fost reorganizarea nutriției, ajustarea antrenamentelor și faptul că am avut alături un specialist care a integrat totul și a transmis informația clar, logic și ușor de aplicat.`,
      results: [],
      conclusion: ""
    },
    {
      name: "Ioana",
      age: "41 ani",
      role: "",
      type: "Ce le-ai spune altor femei ca să le faci curioase să încerce acest Retreat?",
      featured: false,
      quote: `Le-aș spune că există un specialist care știe exact cum să implementeze corect informația și care obține rezultate reale, sustenabile, pe termen lung.`,
      results: [],
      conclusion: ""
    }
  ];

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(scrollToCard, 50);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(scrollToCard, 50);
  };

  const selectTestimonial = (index: number) => {
    setActiveIndex(index);
    setTimeout(scrollToCard, 50);
  };

  const currentTestimonial = testimonials[activeIndex];

  return (
    <section id="testimoniale" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-6">
            Ce spun participantele noastre
          </h2>
          <p className="font-sans text-lg text-muted-foreground max-w-3xl mx-auto">
            Povești reale de la femei care și-au transformat viața prin Metoda A.M.R. 35+
          </p>
        </div>

        {/* Main Testimonial Card */}
        <div className="max-w-4xl mx-auto" ref={cardRef}>
          <div className="relative bg-white rounded-3xl shadow-elegant overflow-hidden">
            {/* Header */}
            <div className="bg-gradient-primary p-6 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-accent text-sm uppercase tracking-wider opacity-90 mb-1">
                    {currentTestimonial.type}
                  </p>
                  <h3 className="font-serif text-2xl font-bold">
                    {currentTestimonial.name}, {currentTestimonial.age}
                    {currentTestimonial.role && ` – ${currentTestimonial.role}`}
                  </h3>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-current text-accent" />
                  ))}
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8">
              <Quote className="h-10 w-10 text-primary/20 mb-4" />
              
              <div className="font-sans text-foreground leading-relaxed whitespace-pre-line mb-6">
                {currentTestimonial.quote}
              </div>

              {/* Results List (for featured testimonial) */}
              {currentTestimonial.results.length > 0 && (
                <div className="mt-6 p-6 bg-section-bg rounded-2xl">
                  <p className="font-accent font-semibold text-primary mb-4">
                    La o lună după retreat, aplicând instrumentele învățate:
                  </p>
                  <ul className="grid md:grid-cols-2 gap-3">
                    {currentTestimonial.results.map((result, index) => (
                      <li key={index} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                        <span className="font-sans text-sm text-foreground">{result}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Conclusion */}
              {currentTestimonial.conclusion && (
                <div className="mt-6 p-4 bg-primary/5 rounded-xl border-l-4 border-primary">
                  <p className="font-accent font-semibold text-primary italic">
                    "{currentTestimonial.conclusion}"
                  </p>
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between px-8 pb-8">
              <button
                onClick={prevTestimonial}
                className="flex items-center gap-2 px-4 py-2 bg-section-bg hover:bg-primary/10 rounded-xl transition-colors duration-300 group"
              >
                <ChevronLeft className="h-5 w-5 text-primary group-hover:-translate-x-1 transition-transform duration-300" />
                <span className="font-accent font-medium text-primary">Anterior</span>
              </button>

              {/* Dots */}
              <div className="flex gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => selectTestimonial(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === activeIndex 
                        ? 'bg-primary w-8' 
                        : 'bg-primary/30 hover:bg-primary/50'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={nextTestimonial}
                className="flex items-center gap-2 px-4 py-2 bg-section-bg hover:bg-primary/10 rounded-xl transition-colors duration-300 group"
              >
                <span className="font-accent font-medium text-primary">Următor</span>
                <ChevronRight className="h-5 w-5 text-primary group-hover:translate-x-1 transition-transform duration-300" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonial Thumbnails */}
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <button
              key={index}
              onClick={() => selectTestimonial(index)}
              className={`p-4 rounded-xl text-left transition-all duration-300 ${
                index === activeIndex
                  ? 'bg-primary text-white shadow-elegant'
                  : 'bg-white hover:bg-primary/5 shadow-card'
              }`}
            >
              <p className={`font-accent font-semibold text-sm ${
                index === activeIndex ? 'text-white' : 'text-foreground'
              }`}>
                {testimonial.name}
              </p>
              <p className={`font-sans text-xs ${
                index === activeIndex ? 'text-white/80' : 'text-muted-foreground'
              }`}>
                {testimonial.age}
              </p>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

