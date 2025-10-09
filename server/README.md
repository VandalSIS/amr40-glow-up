# Contact Form Backend

Backend pentru formularul de contact care trimite email-uri prin SMTP-ul din cPanel.

## Setup

1. **Instalează dependențele:**
```bash
cd server
npm install
```

2. **Configurează variabilele de mediu:**
```bash
cp env.example .env
```

3. **Editează `.env` cu datele SMTP din cPanel:**
```
SMTP_HOST=mail.popaiulia.com
SMTP_PORT=587
SMTP_USER=contact@popaiulia.com
SMTP_PASS=your_email_password_here
PORT=3001
```

4. **Pornește serverul:**
```bash
# Development
npm run dev

# Production
npm start
```

## Endpoints

- `POST /api/send-contact` - Trimite email de contact
- `GET /api/health` - Health check

## Funcționalități

- ✅ Trimite email la contact@popaiulia.com
- ✅ Validare date
- ✅ Email HTML frumos formatat
- ✅ Error handling
- ✅ CORS configurat pentru frontend
