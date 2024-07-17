// components/Chatbox.js

import { useState } from 'react';

const Chatbox = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ role: 'system', content: 'You are a helpful assistant.' }]);
  const [input, setInput] = useState('');
  const [error, setError] = useState(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');

    try {
      const response = await fetch('/api/chatgpt', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ messages: newMessages }),
      });

      const data = await response.json();
      if (response.ok) {
        setMessages([...newMessages, { role: 'assistant', content: data.content }]);
      } else {
        setError(data.error);
        console.error('Error from API:', data.error);
      }
    } catch (error) {
      setError(error.message);
      console.error('Error:', error.message);
    }
  };

  return (
    <div style={{ position: 'fixed', bottom: 0, right: 0, margin: 20, zIndex: 1000 }}>
      <button
        onClick={handleToggle}
        style={{
          position: 'absolute',
          bottom: 70,
          right: 30,
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '50%',
          width: 50,
          height: 50,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {isOpen ? '-' : '+'}
      </button>
      {isOpen && (
        <div
          style={{
            backgroundColor: '#fff',
            border: '1px solid #ddd',
            borderRadius: 8,
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            overflow: 'hidden',
            width: 300,
          }}
        >
          <div style={{ padding: 10, borderBottom: '1px solid #ddd' }}>
            <strong>ChatGPT</strong>
          </div>
          <div style={{ height: 300, overflowY: 'scroll', padding: 10 }}>
            {messages.map((message, index) => (
              <div key={index} style={{ marginBottom: 10 }}>
                <strong>{message.role === 'user' ? 'You' : 'ChatGPT'}:</strong>
                <p>{message.content}</p>
              </div>
            ))}
            {error && <p style={{ color: 'red' }}>{error}</p>}
          </div>
          <form onSubmit={handleSubmit} style={{ padding: 10, borderTop: '1px solid #ddd', display: 'flex', gap: 10 }}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              style={{ flex: 1, padding: 8, borderRadius: 4, border: '1px solid #ddd' }}
            />
            <button type="submit" style={{ backgroundColor: '#007bff', color: '#fff', border: 'none', padding: 8, borderRadius: 4 }}>
              Send
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Chatbox;
