// pages/api/chat.js

import axios from 'axios';

export default async function handler(req, res) {
  const { prompt } = req.body;

  try {
    const response = await axios.post(
      'https://api.gemini.com/v1/assistant',
      {
        prompt,
        model: 'Bursa Smart Assistant',
        language: 'tr',
        personality: {
          openness: 45,
          conscientiousness: 90,
          extraversion: 55,
          agreeableness: 75,
          neuroticism: 40,
          intellect: 80,
          imagination: 75,
          adventure_seeking: 60,
          intellect: 85,
          liberalism: 50,
          self_efficacy: 75,
          orderliness: 85,
          dominance: 90,
          assertiveness: 80,
          sentimentality: 70,
          cautiousness: 70,
          warmth: 65,
          gregariousness: 70,
          altruism: 70,
          emotional_stability: 45,
          challenge: 55,
          trust: 80,
          self_focus: 80,
          altruism: 60,
          compliance: 85,
          modesty: 70,
          traditionalism: 75,
          anxiety: 45,
          anger: 40,
          depression: 35,
          self_consciousness: 70,
          immoderation: 45,
          vulnerability: 50,
        },
      },
      {
        headers: {
          'Authorization': `Bearer ${process.env.GEMINI_API_KEY}`,
          'Content-Type': 'application/json',
        },
      }
    );

    res.status(200).json({ message: response.data.message });
  } catch (error) {
    console.error('Error fetching response from Gemini API:', error);
    if (error.response) {
      console.error('Response data:', error.response.data);
      console.error('Response status:', error.response.status);
      console.error('Response headers:', error.response.headers);
      res.status(error.response.status).json({ error: error.response.data });
    } else if (error.request) {
      console.error('Request data:', error.request);
      res.status(500).json({ error: 'No response received from Gemini API' });
    } else {
      console.error('Error message:', error.message);
      res.status(500).json({ error: error.message });
    }
  }
}
