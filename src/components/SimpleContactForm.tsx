import { useState } from "react";
import { X, CheckCircle, Loader2 } from "lucide-react";
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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError("");
    
    try {
      const response = await fetch('/api/send-contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (result.success) {
        setIsSuccess(true);
        setFormData({ name: "", phone: "", email: "" });
        
        // Închide formularul după 3 secunde
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 3000);
      } else {
        setError(result.message || 'A apărut o eroare la trimiterea mesajului.');
      }
    } catch (error) {
      console.error('Eroare la trimiterea formularului:', error);
      setError('Nu s-a putut conecta la server. Te rugăm să încerci din nou.');
    } finally {
      setIsSubmitting(false);
    }
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

        {/* Success Message */}
        {isSuccess && (
          <div className="mb-6 p-4 bg-green-50 border border-green-200 rounded-xl">
            <div className="flex items-center justify-center gap-3">
              <CheckCircle className="h-6 w-6 text-green-600" />
              <div className="text-center">
                <p className="font-semibold text-green-800 text-lg">Mulțumim!</p>
                <p className="text-green-700 text-sm">Mesajul a fost trimis cu succes. Te voi contacta în curând!</p>
              </div>
            </div>
          </div>
        )}

        {/* Error Message */}
        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl">
            <p className="text-red-700 text-sm text-center">{error}</p>
          </div>
        )}

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
              disabled={isSubmitting || isSuccess}
            >
              {isSubmitting ? (
                <div className="flex items-center gap-2">
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Se trimite...
                </div>
              ) : isSuccess ? (
                <div className="flex items-center gap-2">
                  <CheckCircle className="h-4 w-4" />
                  Trimis cu succes!
                </div>
              ) : (
                "Trimite cererea"
              )}
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
