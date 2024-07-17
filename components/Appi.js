import React, { useState } from 'react';
import styles from '../app/App.css';
import axios from 'axios';

const Appi = () => {
  const [message, setMessage] = useState('');
  const [chatHistory, setChatHistory] = useState([]);
  const [processing, setProcessing] = useState(false);

  const OPENAI_API_KEY = 'sk-proj-yyYoDg5V6ISbOosSJKE6T3BlbkFJq7clVNMFdySNODGbSdNv';

  const handleSendMessage = async () => {
    if (message.trim() === '') return;

    setProcessing(true);
    const userMessage = { role: 'user', content: message };
    const updatedChatHistory = [...chatHistory, userMessage];

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-4',
          messages: updatedChatHistory,
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${OPENAI_API_KEY}`,
          },
        }
      );

      const assistantMessage = response.data.choices[0].message;
      setChatHistory([...updatedChatHistory, assistantMessage]);
      setMessage('');

      // Check if the message contains a request that should be redirected to the citizen panel
      if (assistantMessage.content.includes('Talep') || assistantMessage.content.includes('İstek') || assistantMessage.content.includes('Şikayet') || assistantMessage.content.includes('Öneri')) {
        // Redirect to the citizen panel (this is a placeholder, implement the actual redirection logic)
        redirectToCitizenPanel();
      }
    } catch (error) {
      console.error('Error communicating with OpenAI:', error);
    } finally {
      setProcessing(false);
    }
  };

  const redirectToCitizenPanel = () => {
    alert('Başvurunuzu oluşturmak için yönlendiriliyorsunuz.');
    // Implement actual redirection logic to the citizen panel
  };

  return (
    <div className="App">
      <h1>Bursa Smart Assistant</h1>
      <div className="chat-history">
        {chatHistory.map((msg, index) => (
          <div key={index} className={`message ${msg.role}`}>
            {msg.content}
          </div>
        ))}
      </div>
      <div className="input-area">
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Mesajınızı yazın..."
        />
        <button onClick={handleSendMessage} disabled={processing}>
          Gönder
        </button>
      </div>
    </div>
  );
};

export default Appi;
