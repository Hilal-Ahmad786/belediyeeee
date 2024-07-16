// pages/api/chat.js
import axios from 'axios';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { message } = req.body;

    try {
      const openaiResponse = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: [{ role: 'system', content: 'You are a helpful assistant.' }, { role: 'user', content: message }],
        },
        {
          headers: {
            'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
            'Content-Type': 'application/json',
          },
        }
      );

      const botMessage = openaiResponse.data.choices[0].message.content;
      res.status(200).json({ message: botMessage });
    } catch (error) {
      console.error('Error communicating with OpenAI:', error);
      res.status(500).json({ message: 'Internal Server Error' });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
