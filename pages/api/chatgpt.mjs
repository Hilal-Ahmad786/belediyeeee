import fetch from 'node-fetch';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { başvuruTürü, birim, kişiselBilgiler, adresBilgileri, başvuruBilgileri } = req.body;

  // Google AI Studio API Key
  const apiKey = 'AIzaSyAdhb3foaX-w0EJlMM_BnZs0zCKGywwfdI';

  // API isteklerini işle
  try {
    const response = await fetch(
      'https://aiplatform.googleapis.com/v1/projects/YOUR_PROJECT_ID/locations/us-central1/endpoints/YOUR_ENDPOINT_NAME:predict', 
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          instances: [
            {
              // API isteği gövdesi
            }
          ]
        }),
      }
    );

    const data = await response.json();

    // API yanıtını işleme
    console.log('API Yanıtı:', data);

    // Verileri veritabanına kaydet veya başka bir işlemi gerçekleştir

    res.status(200).json({ message: 'Başvuru başarıyla gönderildi.' });
  } catch (error) {
    console.error('API Hatası:', error);
    res.status(500).json({ message: 'Başvuru gönderilemedi.' });
  }
}
