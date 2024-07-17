const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.post('/api/basvuru', async (req, res) => {
  const { başvuruTürü, birim, kişiselBilgiler, adresBilgileri, başvuruBilgileri } = req.body;

  // Google AI Studio API Key
  const apiKey = 'AIzaSyAdhb3foaX-w0EJlMM_BnZs0zCKGywwfdI';

  // API isteklerini işle
  try {
    const response = await fetch(https://aiplatform.googleapis.com/v1/projects/YOUR_PROJECT_ID/locations/us-central1/endpoints/YOUR_ENDPOINT_NAME:predict, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': Bearer ${apiKey},
      },
      body: JSON.stringify({
        instances: [
          {
            // API isteği gövdesi 
          }
        ]
      }),
    });

    const data = await response.json();

    // API yanıtını işleme
    console.log('API Yanıtı:', data);

    // Verileri veritabanına kaydet veya başka bir işlemi gerçekleştir

    res.status(200).json({ message: 'Başvuru başarıyla gönderildi.' });
  } catch (error) {
    console.error('API Hatası:', error);
    res.status(500).json({ message: 'Başvuru gönderilemedi.' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(Server running on port ${PORT});
});