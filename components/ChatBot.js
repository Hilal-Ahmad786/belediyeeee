import { useState } from 'react';
import { Configuration, OpenAIApi } from 'openai';

const ChatBot = () => {
  const [message, setMessage] = useState('');
  const [response, setResponse] = useState('');

  const sendMessage = async () => {
    const configuration = new Configuration({
      apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
    });
    const openai = new OpenAIApi(configuration);

    try {
      const res = await openai.createCompletion({
        model: 'text-davinci-003',
        prompt: message,
        max_tokens: 150,
        temperature: 0.7,
      });
      setResponse(res.data.choices[0].text);
    } catch (error) {
      console.error(error);
      setResponse('An error occurred.');
    }
  };

  return (
    <div>
      <textarea
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button onClick={sendMessage}>Send</button>
      <p>{response}</p>
    </div>
  );
};

export default ChatBot;
