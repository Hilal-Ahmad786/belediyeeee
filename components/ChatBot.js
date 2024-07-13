import { useState } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';

const ChatBotContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 300px;
  max-height: 400px;
  border: 1px solid #ddd;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

const ChatHeader = styled.div`
  background-color: #0070f3;
  color: white;
  padding: 10px;
  text-align: center;
`;

const ChatWindow = styled.div`
  flex: 1;
  padding: 10px;
  overflow-y: auto;
`;

const Message = styled.div`
  padding: 8px;
  background: ${({ isUser }) => (isUser ? '#0070f3' : '#e5e5ea')};
  color: ${({ isUser }) => (isUser ? 'white' : 'black')};
  border-radius: 5px;
  margin-bottom: 10px;
  align-self: ${({ isUser }) => (isUser ? 'flex-end' : 'flex-start')};
`;

const ChatInputContainer = styled.div`
  display: flex;
  padding: 10px;
  border-top: 1px solid #ddd;
`;

const ChatInput = styled.input`
  flex: 1;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
`;

const SendButton = styled.button`
  padding: 10px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 5px;
  margin-left: 10px;
  cursor: pointer;
`;

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (input.trim() === '') return;

    const newMessage = { text: input, isUser: true };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    setInput('');

    try {
      const response = await axios.post('/api/chat', { message: input });
      const botMessage = { text: response.data.message, isUser: false };
      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error('Error sending message:', error);
    }
  };

  return (
    <ChatBotContainer>
      <ChatHeader>ChatBot</ChatHeader>
      <ChatWindow>
        {messages.map((msg, index) => (
          <Message key={index} isUser={msg.isUser}>
            {msg.text}
          </Message>
        ))}
      </ChatWindow>
      <ChatInputContainer>
        <ChatInput
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSend()}
        />
        <SendButton onClick={handleSend}>Send</SendButton>
      </ChatInputContainer>
    </ChatBotContainer>
  );
};

export default ChatBot;
