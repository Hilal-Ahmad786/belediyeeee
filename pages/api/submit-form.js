// pages/api/submit-form.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const { ad, soyad, tcKimlikNo, cinsiyet, cepTelefonu, eposta, basvuruKonusu, ilce, basvuruAdresi, dosya, approval } = req.body;
  
      // Process the form data here
      // For example, save to a database or send an email
  
      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  