import { Configuration, OpenAIApi } from 'openai';

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
  const { prompt } = req.body;

  try {
    const response = await openai.createCompletion({
      model: "text-davinci-003",
      prompt: prompt,
      max_tokens: 150,
      temperature: 0.7,
    });

    res.status(200).json({ result: response.data.choices[0].text });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}
