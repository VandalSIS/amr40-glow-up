// EmailJS Configuration
// Follow these steps to set up EmailJS:
// 
// 1. Create a free account at https://www.emailjs.com/
// 2. Add your Gmail service (menopauzactiva@gmail.com):
//    - Go to Email Services
//    - Click "Add New Service"
//    - Select Gmail
//    - Follow the authentication steps
// 3. Create TWO Email Templates:
//    
//    TEMPLATE 1 - Notificare pentru tine (menopauzactiva@gmail.com):
//    - To Email: menopauzactiva@gmail.com
//    - Subject: Cerere nouă de contact - {{from_name}}
//    - Variables: {{from_name}}, {{from_email}}, {{from_phone}}, {{message}}
//    
//    TEMPLATE 2 - Email automat de mulțumire pentru client:
//    - To Email: {{from_email}} (important!)
//    - Subject: Mulțumim pentru interesul acordat - Metoda AMR 40+
//    - Variables: {{from_name}}
//
// 4. Get your Public Key:
//    - Go to Account > General
//    - Find your Public Key
// 5. Replace the values below with your actual EmailJS credentials

export const emailjsConfig = {
  serviceId: 'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
  notificationTemplateId: 'YOUR_NOTIFICATION_TEMPLATE_ID', // Template pentru notificare către tine
  thankyouTemplateId: 'YOUR_THANKYOU_TEMPLATE_ID', // Template pentru email automat către client
  publicKey: 'YOUR_PUBLIC_KEY', // Replace with your EmailJS public key
  toEmail: 'menopauzactiva@gmail.com', // Email unde primești notificările
};

// Template example for EmailJS:
/*
Subject: Cerere nouă de contact - {{from_name}}

Ai primit o nouă cerere de contact:

Nume: {{from_name}}
Email: {{from_email}}
Telefon: {{from_phone}}

Mesaj:
{{message}}

---
Acest mesaj a fost trimis de pe site-ul Metoda AMR 40+
*/

