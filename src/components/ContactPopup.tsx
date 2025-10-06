import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactPopupProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const ContactPopup = ({ isOpen, onClose, title = "Contactează-mă" }: ContactPopupProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you can add form submission logic
    console.log("Form submitted:", formData);
    // Reset form
    setFormData({ name: "", phone: "", email: "" });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-md"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-white rounded-3xl p-10 max-w-lg w-full shadow-2xl border border-gray-100">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800 transition-all duration-200"
        >
          <X className="h-5 w-5" />
        </button>

        {/* Header */}
        <div className="mb-8 text-center">
          <h2 className="font-serif text-3xl font-bold text-primary mb-3">
            {title}
          </h2>
          <p className="font-sans text-gray-600 text-lg leading-relaxed">
            Completează formularul și te voi contacta în cel mai scurt timp pentru a discuta detaliile.
          </p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block font-accent font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
              Nume complet
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-0 focus:border-primary transition-all duration-300 font-sans text-gray-800 placeholder-gray-400"
              placeholder="Introdu numele tău complet"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block font-accent font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
              Număr de telefon
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-0 focus:border-primary transition-all duration-300 font-sans text-gray-800 placeholder-gray-400"
              placeholder="+40 xxx xxx xxx"
            />
          </div>

          <div>
            <label htmlFor="email" className="block font-accent font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
              Adresa de email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-5 py-4 border-2 border-gray-200 rounded-2xl focus:ring-0 focus:border-primary transition-all duration-300 font-sans text-gray-800 placeholder-gray-400"
              placeholder="nume@email.com"
            />
          </div>

          <div className="pt-6">
            <Button 
              type="submit" 
              variant="hero" 
              size="lg" 
              className="w-full h-14 text-lg font-semibold rounded-2xl"
            >
              Trimite cererea
            </Button>
          </div>
        </form>

        <div className="mt-6 pt-6 border-t border-gray-100">
          <p className="text-sm text-gray-500 text-center leading-relaxed">
            Prin trimiterea acestui formular, accepți să fii contactat(ă) de către echipa noastră pentru detalii despre program. Datele tale sunt protejate conform GDPR.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPopup;
