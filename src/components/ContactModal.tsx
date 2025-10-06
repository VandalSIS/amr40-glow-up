import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
}

const ContactModal = ({ isOpen, onClose, title = "Contactează-mă" }: ContactModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: ""
  });

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

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-full items-center justify-center p-4">
        {/* Backdrop */}
        <div 
          className="fixed inset-0 bg-black/50"
          onClick={onClose}
        />
        
        {/* Modal */}
        <div className="relative bg-white rounded-2xl p-6 shadow-2xl w-full max-w-md max-h-[90vh] overflow-y-auto z-10">
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"
          >
            <X className="h-5 w-5" />
          </button>

          {/* Header */}
          <div className="mb-6 text-center pr-8">
            <h2 className="font-serif text-2xl font-bold text-primary mb-2">
              {title}
            </h2>
            <p className="font-sans text-gray-600 text-sm">
              Completează formularul și te voi contacta în cel mai scurt timp.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-accent font-medium text-gray-700 mb-2 text-sm">
                Nume complet
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="Introdu numele tău"
              />
            </div>

            <div>
              <label className="block font-accent font-medium text-gray-700 mb-2 text-sm">
                Telefon
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="+40 xxx xxx xxx"
              />
            </div>

            <div>
              <label className="block font-accent font-medium text-gray-700 mb-2 text-sm">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                placeholder="nume@email.com"
              />
            </div>

            <div className="pt-4">
              <Button 
                type="submit" 
                variant="hero" 
                className="w-full"
              >
                Trimite cererea
              </Button>
            </div>
          </form>

          <p className="text-xs text-gray-500 mt-4 text-center">
            Prin trimiterea formularului, accepți să fii contactat(ă) pentru detalii despre program.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
