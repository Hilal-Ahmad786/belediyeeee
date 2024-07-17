const express = require('express');
const next = require('next');
const cors = require('cors');
const fetch = require('node-fetch'); // Import node-fetch for making API requests

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const server = express();
server.use(cors());
server.use(express.json());

server.post('/api/basvuru', async (req, res) => {
  const { başvuruTürü, birim, kişiselBilgiler, adresBilgileri, başvuruBilgileri } = req.body;

  // Google AI Studio API Key
  const apiKey = 'AIzaSyAdhb3foaX-w0EJlMM_BnZs0zCKGywwfdI';

  // API request processing
  try {
    const response = await fetch(`https://aiplatform.googleapis.com/v1/projects/YOUR_PROJECT_ID/locations/us-central1/endpoints/YOUR_ENDPOINT_NAME:predict`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        instances: [
          {
            // API request body content
          }
        ]
      }),
    });

    const data = await response.json();

    // Process API response
    console.log('API Response:', data);

    // Save data to the database or perform another operation

    res.status(200).json({ message: 'Başvuru başarıyla gönderildi.' });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ message: 'Başvuru gönderilemedi.' });
  }
});

app.prepare().then(() => {
  server.all('*', (req, res) => {
    return handle(req, res);
  });

  const PORT = process.env.PORT || 5000;
  server.listen(PORT, (err) => {
    if (err) throw err;
    console.log(`Server running on port ${PORT}`);
  });
});
