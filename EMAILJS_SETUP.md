# Configurare EmailJS pentru Formularul de Contact

## 📧 Email destinație: menopauzactiva@gmail.com

Formularul de contact este deja configurat să trimită emailuri la adresa **menopauzactiva@gmail.com**. Trebuie doar să configurezi contul EmailJS.

## 🚀 Pași pentru Configurare

### 1. Creează un cont EmailJS (GRATUIT)
- Accesează [https://www.emailjs.com/](https://www.emailjs.com/)
- Click pe **Sign Up** și creează un cont gratuit
- Confirmă adresa de email

### 2. Adaugă Serviciul de Email (Gmail)
- Din dashboard-ul EmailJS, mergi la **Email Services**
- Click pe **Add New Service**
- Selectează **Gmail**
- Autentifică-te cu contul **menopauzactiva@gmail.com**
- Copiază **Service ID** (va arăta ceva de genul: `service_xxxxxxx`)

### 3. Creează DOUĂ Template-uri de Email

#### **TEMPLATE 1 - Notificare pentru tine**

- Mergi la **Email Templates**
- Click pe **Create New Template**
- Configurează primul template astfel:

**Subject (Subiect):**
```
Cerere nouă de contact - {{from_name}}
```

**Content (Conținut):**
```
Ai primit o nouă cerere de contact de pe site-ul Metoda AMR 35+:

Nume: {{from_name}}
Email: {{from_email}}
Telefon: {{from_phone}}

Detalii:
{{message}}

---
Acest mesaj a fost trimis automat de pe site-ul Metoda AMR 35+
```

- **To Email:** Setează la `menopauzactiva@gmail.com`
- Salvează template-ul
- Copiază **Template ID** (va arăta ceva de genul: `template_xxxxxxx`) - acesta e pentru **notificationTemplateId**

#### **TEMPLATE 2 - Email automat de mulțumire pentru client**

- Click pe **Create New Template** pentru al doilea template
- Configurează al doilea template astfel:

**Subject (Subiect):**
```
Mulțumim pentru interesul acordat - Metoda AMR 35+
```

**Content (Conținut):**
```
Bună {{from_name}},

Mulțumim că ne-ai contactat! 

Am primit cererea ta și vom reveni cu un răspuns în cel mai scurt timp posibil.

În între timp, poți afla mai multe despre Metoda AMR 35+ pe site-ul nostru sau ne poți urmări pe rețelele sociale pentru sfaturi și informații utile.

Cu drag,
Echipa Metoda AMR 35+

---
Acest email a fost trimis automat. Pentru întrebări, ne poți contacta la menopauzactiva@gmail.com
```

- **IMPORTANT - To Email:** Setează la `{{from_email}}` (nu hardcodat, ci variabila!)
- **Reply-To:** `menopauzactiva@gmail.com`
- Salvează template-ul
- Copiază **Template ID** - acesta e pentru **thankyouTemplateId**

### 4. Obține Public Key
- Mergi la **Account** > **General**
- Găsește secțiunea **Public Key**
- Copiază **Public Key** (va arăta ceva de genul: `xxxxxxxxxxxxxx`)

### 5. Actualizează Configurația în Cod
Deschide fișierul `src/config/emailjs.config.ts` și înlocuiește valorile:

```typescript
export const emailjsConfig = {
  serviceId: 'service_xxxxxxx',              // Service ID de la pasul 2
  notificationTemplateId: 'template_xxxxxxx', // Template ID 1 (notificare)
  thankyouTemplateId: 'template_yyyyyyy',    // Template ID 2 (mulțumire client)
  publicKey: 'xxxxxxxxxxxxxx',               // Public Key de la pasul 4
  toEmail: 'menopauzactiva@gmail.com',
};
```

### 6. Testează Formularul
- Rulează aplicația: `npm run dev`
- Deschide formularul de contact
- Completează și trimite un mesaj de test
- Verifică inbox-ul la **menopauzactiva@gmail.com**

## ✨ Caracteristici Implementate

✅ Trimitere email notificare la menopauzactiva@gmail.com  
✅ **Email automat de mulțumire către client** (la adresa lui de email)  
✅ Mesaj de mulțumire vizual după trimitere  
✅ Indicator de loading în timpul trimiterii  
✅ Mesaje de eroare descriptive  
✅ Auto-închidere formular după 3 secunde  
✅ Validare câmpuri  
✅ Dezactivare formular în timpul trimiterii  

## 🔧 Depanare

### Problema: Emailul nu se trimite
- Verifică că ai înlocuit toate valorile în `emailjs.config.ts`
- Verifică consola browser-ului pentru erori
- Asigură-te că Gmail-ul este autentificat corect în EmailJS
- Verifică limita de emailuri gratuite (200/lună pe planul free)

### Problema: Primesc eroare "Invalid Public Key"
- Asigură-te că ai copiat corect Public Key-ul din dashboard
- Verifică că nu ai spații sau caractere extra

### Problema: Template-ul nu se găsește
- Verifică că Template ID-ul este corect
- Asigură-te că template-ul este salvat în EmailJS

## 📝 Notițe Importante

- **Plan Gratuit EmailJS:** 200 emailuri/lună
- **Rate Limiting:** Poate fi nevoie să adaugi delay între trimiteri
- **Securitate:** Public Key-ul este sigur să fie public (de aceea se numește "public")
- **GDPR:** Formularul include deja notificare GDPR

## 🎯 Plan Alternativ (dacă nu vrei să folosești EmailJS)

Dacă preferi o soluție diferită, poți folosi:
- **Formspree** (https://formspree.io/)
- **Web3Forms** (https://web3forms.com/)
- **Netlify Forms** (dacă hostezi pe Netlify)
- **Backend propriu** cu Nodemailer

---

**Ajutor suplimentar?** Consultă documentația oficială EmailJS: https://www.emailjs.com/docs/

