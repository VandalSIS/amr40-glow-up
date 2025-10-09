# 📧 Template-uri Email pentru EmailJS

Aici găsești template-urile exacte pe care trebuie să le configurezi în EmailJS.

---

## 📨 TEMPLATE 1: Notificare pentru Business

**Nume template:** `AMR35 - Notificare Contact`

### Configurare EmailJS:
- **To Email:** `menopauzactiva@gmail.com`
- **From Name:** `{{from_name}}`
- **Reply To:** `{{from_email}}`

### Subject (Subiect):
```
🔔 Cerere nouă de contact - {{from_name}}
```

### Content (Conținut HTML):
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                  color: white; padding: 30px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #f9f9f9; padding: 30px; border-radius: 0 0 10px 10px; }
        .info-box { background: white; padding: 20px; margin: 15px 0; border-left: 4px solid #667eea; }
        .footer { text-align: center; padding: 20px; color: #666; font-size: 12px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🎯 Cerere Nouă de Contact</h1>
            <p>Metoda AMR 35+</p>
        </div>
        
        <div class="content">
            <p>Ai primit o nouă cerere de contact de pe site-ul Metoda AMR 35+!</p>
            
            <div class="info-box">
                <h3>📋 Detalii Client:</h3>
                <p><strong>Nume:</strong> {{from_name}}</p>
                <p><strong>Email:</strong> {{from_email}}</p>
                <p><strong>Telefon:</strong> {{from_phone}}</p>
            </div>
            
            <div class="info-box">
                <h3>💬 Mesaj:</h3>
                <p>{{message}}</p>
            </div>
            
            <p style="margin-top: 20px;">
                <strong>Next Steps:</strong><br>
                Contactează clientul în cel mai scurt timp pentru a răspunde la cererea sa.
            </p>
        </div>
        
        <div class="footer">
            <p>Acest email a fost trimis automat de pe site-ul Metoda AMR 35+</p>
            <p>© 2025 Metoda AMR 35+ | Iulia Popa</p>
        </div>
    </div>
</body>
</html>
```

---

## 💌 TEMPLATE 2: Email Automat de Mulțumire pentru Client

**Nume template:** `AMR35 - Confirmare Contact`

### Configurare EmailJS:
- **To Email:** `{{from_email}}` ⚠️ **IMPORTANT: Folosește variabila, nu hardcodat!**
- **From Name:** `Metoda AMR 35+ - Iulia Popa`
- **Reply To:** `menopauzactiva@gmail.com`

### Subject (Subiect):
```
✨ Mulțumim pentru interesul acordat - Metoda AMR 35+
```

### Content (Conținut HTML):
```html
<!DOCTYPE html>
<html>
<head>
    <style>
        body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
        .container { max-width: 600px; margin: 0 auto; padding: 20px; }
        .header { background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                  color: white; padding: 40px; text-align: center; border-radius: 10px 10px 0 0; }
        .content { background: #ffffff; padding: 40px; }
        .highlight-box { background: #f0f4ff; padding: 20px; margin: 20px 0; 
                         border-radius: 8px; border-left: 4px solid #667eea; }
        .cta-button { display: inline-block; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); 
                      color: white; padding: 15px 30px; text-decoration: none; border-radius: 25px; 
                      margin: 20px 0; font-weight: bold; }
        .social-links { text-align: center; margin: 30px 0; }
        .social-links a { display: inline-block; margin: 0 10px; color: #667eea; text-decoration: none; }
        .footer { background: #f9f9f9; padding: 30px; text-align: center; 
                  border-radius: 0 0 10px 10px; color: #666; font-size: 14px; }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>✨ Mulțumim, {{from_name}}!</h1>
            <p style="font-size: 18px; margin-top: 10px;">
                Am primit cererea ta de contact
            </p>
        </div>
        
        <div class="content">
            <p style="font-size: 16px;">Bună {{from_name}},</p>
            
            <p>Mulțumim că ne-ai contactat și pentru interesul acordat <strong>Metodei AMR 35+</strong>!</p>
            
            <div class="highlight-box">
                <h3 style="margin-top: 0; color: #667eea;">🎯 Ce urmează?</h3>
                <p>
                    Am primit cererea ta și vom reveni cu un răspuns personalizat în 
                    <strong>cel mai scurt timp posibil</strong> (de obicei în maxim 24 de ore).
                </p>
            </div>
            
            <h3 style="color: #667eea;">💪 Despre Metoda AMR 35+</h3>
            <p>
                Metoda AMR 35+ este programul dedicat femeilor 35+ pentru recuperarea controlului 
                asupra corpului prin <strong>antrenament personalizat</strong>, <strong>nutriție 
                echilibrată</strong> și <strong>recuperare optimă</strong>.
            </p>
            
            <ul style="line-height: 2;">
                <li>✅ Program personalizat pentru vârsta ta</li>
                <li>✅ Coaching individual și suport constant</li>
                <li>✅ Abordare holistică: corp, minte, nutriție</li>
                <li>✅ Rezultate sustenabile pe termen lung</li>
            </ul>
            
            <div style="text-align: center; margin: 30px 0;">
                <p style="font-size: 18px; font-weight: bold; color: #667eea;">
                    Urmărește-ne pentru sfaturi și inspirație zilnică!
                </p>
            </div>
            
            <div class="social-links">
                <a href="https://www.facebook.com/share/1DMF5WLDiL/?mibextid=wwXIfr" 
                   style="font-size: 16px;">📘 Facebook</a>
                <a href="https://www.instagram.com/iulia__popa?igsh=NnduZjdkNWpoa3lj" 
                   style="font-size: 16px;">📸 Instagram</a>
            </div>
        </div>
        
        <div class="footer">
            <p style="margin-bottom: 15px;">
                Dacă ai întrebări urgente, ne poți contacta direct la:
            </p>
            <p style="font-size: 16px; font-weight: bold; color: #667eea; margin: 10px 0;">
                📧 menopauzactiva@gmail.com
            </p>
            
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            
            <p style="font-size: 12px; color: #999;">
                Acest email a fost trimis automat ca răspuns la cererea ta de contact.<br>
                © 2025 Metoda AMR 35+ | Iulia Popa | Toate drepturile rezervate
            </p>
        </div>
    </div>
</body>
</html>
```

---

## 🔧 Cum să Folosești Template-urile

### Pasul 1: Creează Template-ul în EmailJS

1. Mergi la **Email Templates** în dashboard-ul EmailJS
2. Click pe **Create New Template**
3. Copiază și lipește codul HTML de mai sus în editorul de template
4. **Important:** Setează corect **To Email** pentru fiecare template:
   - Template 1: `menopauzactiva@gmail.com`
   - Template 2: `{{from_email}}` (variabilă)

### Pasul 2: Testează Template-ul

EmailJS are opțiune de **Test** - folosește-o pentru a verifica:
- ✅ Variabilele se înlocuiesc corect
- ✅ Design-ul arată bine pe desktop și mobile
- ✅ Emailul ajunge în inbox (nu în spam)

### Pasul 3: Copiază Template ID

După salvare, copiază **Template ID** și adaugă-l în `src/config/emailjs.config.ts`

---

## 📝 Variabile Disponibile

### Pentru TEMPLATE 1 (Notificare Business):
- `{{from_name}}` - Numele clientului
- `{{from_email}}` - Email-ul clientului
- `{{from_phone}}` - Telefonul clientului
- `{{message}}` - Mesajul complet
- `{{to_email}}` - Email destinație (menopauzactiva@gmail.com)

### Pentru TEMPLATE 2 (Mulțumire Client):
- `{{from_name}}` - Numele clientului (pentru personalizare)
- `{{from_email}}` - Email-ul clientului (pentru To Email)
- `{{reply_to}}` - Email pentru răspuns (menopauzactiva@gmail.com)

---

## 💡 Tips & Tricks

### Personalizare Design
Poți modifica culorile în stilul CSS:
- Culoare primară: `#667eea` (albastru-violet)
- Culoare secundară: `#764ba2` (violet)
- Background: `#f9f9f9` (gri deschis)

### Adăugare Logo
Dacă vrei să adaugi logo-ul Metodei AMR 35+:
```html
<img src="URL_LOGO" alt="Metoda AMR 35+" style="max-width: 200px; margin: 20px auto;">
```

### Verificare Spam
Pentru a evita spam folder-ul:
- ✅ Folosește text + HTML (nu doar imagini)
- ✅ Evită cuvinte spam: "gratuit", "câștigă", "urgent"
- ✅ Include link de dezabonare dacă trimiți newslettere
- ✅ Autentifică domeniul în EmailJS

---

## 🚨 Probleme Comune

### Emailul nu ajunge la client?
- Verifică că **To Email** pentru Template 2 este setat ca `{{from_email}}` (variabilă)
- Nu pune ghilimele sau spații în variabilă

### Design-ul nu arată bine?
- Testează în preview-ul EmailJS
- Verifică că HTML-ul este valid
- Unii clienți de email nu suportă CSS avansat

### Primesc emailuri în spam?
- Configurează SPF și DKIM pentru domeniul tău
- Evită link-uri excesive
- Păstrează un raport text/HTML echilibrat

---

**Succes cu configurarea! 🎉**

Pentru ajutor suplimentar, vezi `EMAILJS_SETUP.md` sau documentația EmailJS.

