import { useState } from "react";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import IntroBanner from "@/components/IntroBanner";
import AboutCoach from "@/components/AboutCoach";
import PainPoints from "@/components/PainPoints";
import Experience from "@/components/Experience";
import Benefits from "@/components/Benefits";
import Sponsors from "@/components/Sponsors";
import AMRMethod from "@/components/AMRMethod";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import SimpleContactForm from "@/components/SimpleContactForm";
import Testimonials from "@/components/Testimonials";

const Index = () => {
  const [isContactPopupOpen, setIsContactPopupOpen] = useState(false);

  return (
    <div className="min-h-screen">
      <Navigation onOpenContact={() => setIsContactPopupOpen(true)} />
      <Hero />
      <IntroBanner />
      <AboutCoach />
      <PainPoints />
      <Experience />
      <Pricing />
      <Benefits />
      <AMRMethod />
      <Testimonials />
      <Sponsors />
      <FAQ />
      <Footer />
      
      {/* Global Contact Popup for Consultanță 1:1 */}
      <SimpleContactForm 
        isOpen={isContactPopupOpen}
        onClose={() => setIsContactPopupOpen(false)}
        title="Consultanță 1:1"
      />
    </div>
  );
};

export default Index;