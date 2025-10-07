import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import logoImage from "@/assets/ChatGPT Image Oct 7, 2025, 07_11_32 PM.png";

interface NavigationProps {
  onOpenContact: () => void;
}

const Navigation = ({ onOpenContact }: NavigationProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleContactClick = () => {
    onOpenContact();
    setIsMenuOpen(false); // Close mobile menu if open
  };

  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <button
              onClick={() => scrollToSection('home')}
              className="transition-opacity hover:opacity-80"
            >
              <img 
                src={logoImage} 
                alt="Iulia Popa Logo" 
                className="h-32"
              />
            </button>
          </div>

          {/* Desktop Navigation - Left aligned */}
          <div className="hidden md:flex items-center space-x-8 ml-8">
            <button
              onClick={() => scrollToSection('despre')}
              className="font-sans text-foreground hover:text-primary transition-colors"
            >
              Despre
            </button>
            <button
              onClick={() => scrollToSection('retreat')}
              className="font-sans text-foreground hover:text-primary transition-colors"
            >
              Retreats
            </button>
            <button
              onClick={() => scrollToSection('faq')}
              className="font-sans text-foreground hover:text-primary transition-colors"
            >
              FAQ
            </button>
            <button
              onClick={handleContactClick}
              className="font-sans text-foreground hover:text-primary transition-colors"
            >
              Consultanță 1:1
            </button>
          </div>

          {/* Right side - Button */}
          <div className="flex-shrink-0">
            <div className="hidden md:flex justify-center items-center h-10 px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-elegant hover:shadow-soft hover:-translate-y-2 text-lg font-semibold border-2 border-accent/20 hover:border-accent/40 rounded-xl font-accent font-medium transition-all duration-300 cursor-pointer"
              onClick={() => scrollToSection('rezervare')}
            >
              <div className="text-center">Rezervă acum</div>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-foreground hover:text-primary transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white border-t border-border">
              <button
                onClick={() => scrollToSection('despre')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Despre
              </button>
              <button
                onClick={() => scrollToSection('retreat')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Retreats
              </button>
              <button
                onClick={() => scrollToSection('faq')}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                FAQ
              </button>
              <button
                onClick={handleContactClick}
                className="block px-3 py-2 text-foreground hover:text-primary transition-colors w-full text-left"
              >
                Consultanță 1:1
              </button>
              <div className="px-3 py-2">
                 <div 
                   onClick={() => scrollToSection('rezervare')}
                   className="w-full h-10 px-4 py-2 bg-accent text-accent-foreground hover:bg-accent/90 shadow-elegant hover:shadow-soft hover:-translate-y-2 text-lg font-semibold border-2 border-accent/20 hover:border-accent/40 rounded-xl font-accent font-medium transition-all duration-300 flex justify-center items-center cursor-pointer"
                 >
                   <div className="text-center">Rezervă acum</div>
                 </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
