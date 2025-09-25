import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import AboutCoach from "@/components/AboutCoach";
import PainPoints from "@/components/PainPoints";
import Experience from "@/components/Experience";
import Benefits from "@/components/Benefits";
import Sponsors from "@/components/Sponsors";
import AMRMethod from "@/components/AMRMethod";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <AboutCoach />
      <PainPoints />
      <Experience />
      <AMRMethod />
      <Benefits />
      <Sponsors />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;