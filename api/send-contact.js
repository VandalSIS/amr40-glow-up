const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  // Set CORS headers
  res.setHeader('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT');
  res.setHeader('Access-Control-Allow-Headers', 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version');

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  if (req.method !== 'POST') {
    return res.status(405).json({ success: false, message: 'Method not allowed' });
  }

  try {
    const { name, phone, email } = req.body;

    console.log('📧 Received contact form:', { name, phone, email });

    // Validare date
    if (!name || !phone || !email) {
      return res.status(400).json({ 
        success: false, 
        message: 'Toate câmpurile sunt obligatorii' 
      });
    }

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

    // Email pentru tine (contact@popaiulia.com)
    const mailOptions = {
      from: `"${name}" <${process.env.SMTP_USER || 'contact@popaiulia.com'}>`,
      to: process.env.SMTP_USER || 'contact@popaiulia.com',
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
    console.log('📧 Sending email...');
    await transporter.sendMail(mailOptions);

    console.log(`✅ Email trimis cu succes pentru: ${name} (${email})`);

    res.status(200).json({ 
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
}
