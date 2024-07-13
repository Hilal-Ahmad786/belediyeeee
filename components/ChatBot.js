import { useState } from 'react';

const ChatBot = () => {
  const [query, setQuery] = useState('');
  const [response, setResponse] = useState('');

  const handleQueryChange = (e) => {
    setQuery(e.target.value);
  };

  const handleQuerySubmit = async () => {
    try {
      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query }),
      });

      if (res.ok) {
        const data = await res.json();
        setResponse(data.response);
      } else {
        console.error('Chat submission failed:', res.statusText);
        setResponse('Failed to get response.');
      }
    } catch (error) {
      console.error('Error during chat submission:', error);
      setResponse('Failed to get response.');
    }
  };

  return (
    <div>
      <input type="text" value={query} onChange={handleQueryChange} placeholder="Ask a question..." />
      <button onClick={handleQuerySubmit}>Submit</button>
      <p>{response}</p>
    </div>
  );
};

export default ChatBot;
