export default async function handler(req, res) {
  const { message } = req.body;

  try {
    const response = await fetch('https://api.openai.com/v1/completions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${process.env.OPENAI_API_KEY}`,
      },
      body: JSON.stringify({
        model : "gpt-3.5-turbo",
        messages : [],
        temperature : 1,
        max_tokens : 256,
        top_p : 1,
        frequency_penalty : 0,
        presence_penalty : 0
      }),
    });

    if (!response.ok) {
      const error = await response.json();
      res.status(response.status).json({ error: error });
      return;
    }

    const data = await response.json();
    const reply = data.choices[0].text.trim();

    res.status(200).json({ message: reply });
  } catch (error) {
    console.error('Error occurred while fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
