import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className="font-serif text-xl font-bold text-primary">
              Iulia Popa
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
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
            <Button 
              onClick={() => scrollToSection('rezervare')}
              variant="outline"
              size="sm"
            >
              Rezervă acum
            </Button>
            <Button 
              onClick={() => scrollToSection('consultanta')}
              variant="hero"
              size="sm"
            >
              Consultanță 1:1
            </Button>
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
              <div className="px-3 py-2 space-y-2">
                <Button 
                  onClick={() => scrollToSection('rezervare')}
                  variant="outline"
                  size="sm"
                  className="w-full"
                >
                  Rezervă acum
                </Button>
                <Button 
                  onClick={() => scrollToSection('consultanta')}
                  variant="hero"
                  size="sm"
                  className="w-full"
                >
                  Consultanță 1:1
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
