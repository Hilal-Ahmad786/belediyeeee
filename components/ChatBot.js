// components/Chatbot.js
import { useState } from 'react';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    applicationType: '',
    relevantUnit: '',
    personalInfo: {},
    addressInfo: {},
    applicationInfo: {},
    file: null
  });

  const handleSend = async () => {
    if (!input.trim() && step !== 5) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    let botMessageText = '';

    if (step === 1) {
      setFormData({ ...formData, applicationType: input });
      botMessageText = 'Step 2: Select the Relevant Unit for Application (General Secretariat, Information Technology, Human Resources, Parks and Gardens, Transportation, Other)';
      setStep(2);
    } else if (step === 2) {
      setFormData({ ...formData, relevantUnit: input });
      botMessageText = 'Step 3: Provide your Personal Information (Name, Surname, TR ID, Gender, Mobile, Email)';
      setStep(3);
    } else if (step === 3) {
      const personalInfo = parsePersonalInfo(input);
      setFormData({ ...formData, personalInfo });
      botMessageText = 'Step 4: Provide your Address Information (Select Location, Select Address, or type "I Do Not Want to Enter Address")';
      setStep(4);
    } else if (step === 4) {
      const addressInfo = parseAddressInfo(input);
      setFormData({ ...formData, addressInfo });
      botMessageText = 'Step 5: Provide your Application Information (Subject and detailed text)';
      setStep(5);
    } else if (step === 5) {
      const applicationInfo = parseApplicationInfo(input);
      setFormData({ ...formData, applicationInfo });
      botMessageText = 'Please upload a file if needed.';
      setStep(6);
    } else if (step === 6) {
      await submitApplication(formData);
      botMessageText = 'Your application has been submitted successfully. Thank you!';
      setStep(1);
      setFormData({
        applicationType: '',
        relevantUnit: '',
        personalInfo: {},
        addressInfo: {},
        applicationInfo: {},
        file: null
      });
    }

    const botMessage = { sender: 'bot', text: botMessageText };
    setMessages([...messages, userMessage, botMessage]);
    setInput('');
  };

  const parsePersonalInfo = (input) => {
    const [name, surname, trId, gender, mobile, email] = input.split(',');
    return { name, surname, trId, gender, mobile, email };
  };

  const parseAddressInfo = (input) => {
    const [location, address] = input.split(',');
    return { location, address };
  };

  const parseApplicationInfo = (input) => {
    const [subject, text] = input.split(',');
    return { subject, text };
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  const submitApplication = async (data) => {
    const formData = new FormData();
    Object.keys(data).forEach(key => {
      if (key === 'file' && data[key]) {
        formData.append(key, data[key]);
      } else {
        formData.append(key, JSON.stringify(data[key]));
      }
    });

    await axios.post('/api/submit', formData, {
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    });
  };

  return (
    <div>
      <h1>Citizen Panel</h1>
      <div style={{ border: '1px solid #ccc', padding: '10px', maxHeight: '300px', overflowY: 'auto' }}>
        {messages.map((msg, index) => (
          <div key={index} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <p><strong>{msg.sender === 'user' ? 'You' : 'ChatGPT'}:</strong> {msg.text}</p>
          </div>
        ))}
      </div>
      {step !== 6 && (
        <>
          <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            style={{ width: '80%' }} 
          />
          <button onClick={handleSend}>Send</button>
        </>
      )}
      {step === 6 && (
        <>
          <input type="file" onChange={handleFileChange} />
          <button onClick={handleSend}>Upload</button>
        </>
      )}
    </div>
  );
};

export default Chatbot;
