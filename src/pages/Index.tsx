import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IntroBanner from "@/components/IntroBanner";
import AboutCoach from "@/components/AboutCoach";
import PainPoints from "@/components/PainPoints";
import Experience from "@/components/Experience";
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
      <IntroBanner />
      <AboutCoach />
      <PainPoints />
      <Experience />
      <AMRMethod />
      <Sponsors />
      <Pricing />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;