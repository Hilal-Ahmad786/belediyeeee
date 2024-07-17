export default function handler(req, res) {
    console.log('Request received:', req.method, req.body);
  
    if (req.method === 'POST') {
      console.log('Request body:', req.body);
      const { message } = req.body;
  
      if (!message) {
        console.log('Message is missing in the request body');
        return res.status(400).json({ error: 'Message is required' });
      }
  
      console.log('Message received:', message);
      res.status(200).json({ message: `Echo: ${message}` });
    } else {
      console.log('Invalid request method:', req.method);
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
    }
  }
  