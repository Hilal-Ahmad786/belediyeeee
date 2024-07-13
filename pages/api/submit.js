// pages/api/submit.js
export default function handler(req, res) {
    if (req.method === 'POST') {
      const data = req.body;
      // Handle data submission to Odoo here
      console.log('Form data received:', data);
  
      res.status(200).json({ message: 'Form submitted successfully' });
    } else {
      res.status(405).json({ message: 'Method not allowed' });
    }
  }
  

  