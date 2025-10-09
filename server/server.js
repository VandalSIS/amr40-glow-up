const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors({
  origin: ['http://localhost:8080', 'http://localhost:3000', 'https://popaiulia.com'],
  credentials: true
}));
app.use(express.json());

// Configurează Nodemailer cu SMTP din cPanel
const transporter = nodemailer.createTransport({
  host: process.env.SMTP_HOST || 'mail.popaiulia.com',
  port: parseInt(process.env.SMTP_PORT) || 465,
  secure: true, // true pentru port 465 (SSL)
  auth: {
    user: process.env.SMTP_USER || 'contact@popaiulia.com',
    pass: process.env.SMTP_PASS || 'popaiulia2025'
  },
  tls: {
    rejectUnauthorized: false
  }
});

// Verifică conexiunea SMTP
transporter.verify((error, success) => {
  if (error) {
    console.log('❌ SMTP Connection Error:', error);
  } else {
    console.log('✅ SMTP Server ready to send emails');
  }
});

// Endpoint pentru trimiterea email-urilor
app.post('/api/send-contact', async (req, res) => {
  try {
    const { name, phone, email } = req.body;

    // Validare date
    if (!name || !phone || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Toate câmpurile sunt obligatorii' 
      });
    }

    // Email pentru tine (contact@popaiulia.com)
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER}>`,
      to: process.env.SMTP_USER, // contact@popaiulia.com
      subject: `🔔 Nouă cerere de contact - ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; text-align: center;">
            <h1 style="color: white; margin: 0; font-size: 24px;">🔔 Nouă cerere de contact</h1>
          </div>
          
          <div style="padding: 30px; background: #f8f9fa;">
            <h2 style="color: #333; margin-top: 0;">Detalii client:</h2>
            
            <div style="background: white; padding: 20px; border-radius: 8px; box-shadow: 0 2px 4px rgba(0,0,0,0.1);">
              <p style="margin: 10px 0; font-size: 16px;"><strong>👤 Nume:</strong> ${name}</p>
              <p style="margin: 10px 0; font-size: 16px;"><strong>📞 Telefon:</strong> <a href="tel:${phone}" style="color: #667eea;">${phone}</a></p>
              <p style="margin: 10px 0; font-size: 16px;"><strong>📧 Email:</strong> <a href="mailto:${email}" style="color: #667eea;">${email}</a></p>
            </div>
            
            <div style="margin-top: 20px; padding: 15px; background: #e3f2fd; border-radius: 8px; border-left: 4px solid #2196f3;">
              <p style="margin: 0; color: #1976d2; font-weight: 500;">💡 Acest mesaj a fost trimis automat din formularul de contact de pe site-ul popaiulia.com</p>
            </div>
          </div>
          
          <div style="background: #333; color: white; padding: 20px; text-align: center; font-size: 14px;">
            <p style="margin: 0;">© 2024 Popa Iulia - AMR 40+ Program</p>
          </div>
        </div>
      `
    };

    // Trimite email-ul
    await transporter.sendMail(mailOptions);

    console.log(`✅ Email trimis cu succes pentru: ${name} (${email})`);

    res.json({ 
      success: true, 
      message: 'Mesajul a fost trimis cu succes!' 
    });

  } catch (error) {
    console.error('❌ Eroare la trimiterea email-ului:', error);
    res.status(500).json({ 
      success: false, 
      message: 'A apărut o eroare la trimiterea mesajului. Te rugăm să încerci din nou.' 
    });
  }
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'Contact form backend is running',
    timestamp: new Date().toISOString()
  });
});

// Start server
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`📧 SMTP Host: ${process.env.SMTP_HOST}`);
  console.log(`📧 SMTP User: ${process.env.SMTP_USER}`);
});
