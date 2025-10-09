import { useState } from "react";
import { X, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import emailjs from "@emailjs/browser";
import { useToast } from "@/hooks/use-toast";
import { emailjsConfig } from "@/config/emailjs.config";

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
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Email 1: Notificare către menopauzactiva@gmail.com
      const notificationParams = {
        from_name: formData.name,
        from_email: formData.email,
        from_phone: formData.phone,
        to_email: emailjsConfig.toEmail,
        message: `Nume: ${formData.name}\nEmail: ${formData.email}\nTelefon: ${formData.phone}`
      };

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.notificationTemplateId,
        notificationParams,
        emailjsConfig.publicKey
      );

      // Email 2: Mesaj de mulțumire automat către client
      const thankyouParams = {
        from_name: formData.name,
        from_email: formData.email,
        reply_to: emailjsConfig.toEmail
      };

      await emailjs.send(
        emailjsConfig.serviceId,
        emailjsConfig.thankyouTemplateId,
        thankyouParams,
        emailjsConfig.publicKey
      );

      setShowSuccess(true);
      setFormData({ name: "", phone: "", email: "" });
      
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 3000);

    } catch (error) {
      console.error("Error sending email:", error);
      toast({
        title: "Eroare",
        description: `A apărut o eroare la trimiterea mesajului. Te rog încearcă din nou sau contactează-ne direct la ${emailjsConfig.toEmail}`,
        variant: "destructive",
      });
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

          {showSuccess ? (
            <div className="text-center py-8">
              <div className="mb-4 flex justify-center">
                <CheckCircle2 className="h-16 w-16 text-green-500" />
              </div>
              <h3 className="font-serif text-2xl font-bold text-primary mb-3">
                Mulțumim!
              </h3>
              <p className="font-sans text-gray-700 text-base leading-relaxed mb-2">
                Mesajul tău a fost trimis cu succes.
              </p>
              <p className="font-sans text-gray-600 text-sm leading-relaxed">
                Te vom contacta în cel mai scurt timp posibil.
              </p>
            </div>
          ) : (
            <>
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
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
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
                    disabled={isSubmitting}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent disabled:opacity-50"
                    placeholder="nume@email.com"
                  />
                </div>

                <div className="pt-4">
                  <Button 
                    type="submit" 
                    variant="hero" 
                    disabled={isSubmitting}
                    className="w-full disabled:opacity-50"
                  >
                    {isSubmitting ? "Se trimite..." : "Trimite cererea"}
                  </Button>
                </div>
              </form>

              <p className="text-xs text-gray-500 mt-4 text-center">
                Prin trimiterea formularului, accepți să fii contactat(ă) pentru detalii despre program.
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContactModal;
