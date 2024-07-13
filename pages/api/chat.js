// pages/api/chat.js
import axios from 'axios';

const apiKey = process.env.NEXT_PUBLIC_OPENAI_API_KEY;

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/engines/davinci-codex/completions',
        {
          prompt: message,
          max_tokens: 150,
          n: 1,
          stop: null,
          temperature: 0.7,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        }
      );

      const botResponse = response.data.choices[0].text.trim();
      res.status(200).json({ message: botResponse });
    } catch (error) {
      console.error('Error communicating with OpenAI:', error);
      res.status(500).json({ error: 'Error communicating with OpenAI' });
    }
  } else {
    res.setHeader('Allow', ['POST']);
    res.status(405).end(`Method ${req.method} Not Allowed`);
  }
}
