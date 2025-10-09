import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface SimpleContactFormProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const SimpleContactForm = ({ isOpen, onClose, title = "Contactează-mă" }: SimpleContactFormProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    setFormData({ name: "", phone: "", email: "" });
    onClose();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0 }}>
      <div 
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 }}
      />
      
      <div className="bg-white rounded-3xl p-6 w-full max-w-md relative z-10 shadow-2xl border border-gray-100" style={{ position: 'relative', zIndex: 10, maxWidth: '28rem', width: '100%' }}>
        <button
          onClick={onClose}
          className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-gray-50 hover:bg-gray-100 border border-gray-200 transition-all duration-200"
          style={{ position: 'absolute', top: '1.5rem', right: '1.5rem' }}
        >
          <X className="h-5 w-5 text-gray-600" />
        </button>

        <div className="mb-6 text-center pr-10">
          <h2 className="font-serif text-2xl font-bold text-primary mb-2">
            {title}
          </h2>
          <p className="font-sans text-gray-600 text-sm leading-relaxed">
            Completează formularul și te voi contacta în cel mai scurt timp.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block font-accent font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
              Nume complet
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-primary transition-all duration-300 font-sans text-gray-800 placeholder-gray-400 bg-gray-50 focus:bg-white"
              placeholder="Introdu numele tău complet"
              style={{ width: '100%' }}
            />
          </div>

          <div>
            <label className="block font-accent font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
              Număr de telefon
            </label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-primary transition-all duration-300 font-sans text-gray-800 placeholder-gray-400 bg-gray-50 focus:bg-white"
              placeholder="+40 xxx xxx xxx"
              style={{ width: '100%' }}
            />
          </div>

          <div>
            <label className="block font-accent font-semibold text-gray-800 mb-3 text-sm uppercase tracking-wide">
              Adresa de email
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-0 focus:border-primary transition-all duration-300 font-sans text-gray-800 placeholder-gray-400 bg-gray-50 focus:bg-white"
              placeholder="nume@email.com"
              style={{ width: '100%' }}
            />
          </div>

          <div className="pt-4">
            <Button 
              type="submit" 
              variant="hero" 
              className="w-full h-12 text-base font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              style={{ width: '100%' }}
            >
              Trimite cererea
            </Button>
          </div>
        </form>

        <div className="mt-4 pt-4 border-t border-gray-100">
          <p className="text-xs text-gray-600 text-center leading-relaxed mb-1">
            Prin trimiterea acestui formular, accepți să fii contactat(ă) pentru detalii despre program.
          </p>
          <p className="text-xs text-gray-500 text-center font-medium">
            🔒 Datele tale sunt protejate conform GDPR
          </p>
        </div>
      </div>
    </div>
  );
};

export default SimpleContactForm;
