import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from '../app/ChatBot.module.css';

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Merhaba! Ben Bursa Smart Assistant. Size Bursa hakkında bilgi vermek için buradayım. Nasıl yardımcı olabilirim?' }]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    applicationType: '',
    applicationSubType: '',
    relevantUnit: '',
    personalInfo: {},
    addressInfo: '',
    applicationInfo: ''
  });
  const messagesEndRef = useRef(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    const lowerInput = input.toLowerCase();
    if (step === 1 && (lowerInput.includes('şikayet') || lowerInput.includes('talep') || lowerInput.includes('öneri'))) {
      setStep(2);
      setFormData(prevFormData => ({ ...prevFormData, applicationType: lowerInput }));
    }

    let botMessageText = '';

    switch (step) {
      case 1:
        botMessageText = 'Size nasıl yardımcı olabilirim?';
        break;
      case 2:
        botMessageText = 'Başvuru Türünüzü Seçiniz:';
        setStep(3);
        break;
      case 3:
        botMessageText = 'Seçiniz:';
        break;
      case 4:
        setFormData(prevFormData => ({ ...prevFormData, applicationSubType: input }));
        botMessageText = 'Başvuru İçin İlgili Birimi Seçiniz:';
        setStep(5);
        break;
      case 5:
        setFormData(prevFormData => ({ ...prevFormData, relevantUnit: input }));
        botMessageText = 'İsim:';
        setStep(6);
        break;
      case 6:
        setFormData(prevFormData => ({ ...prevFormData, personalInfo: { ...prevFormData.personalInfo, name: input } }));
        botMessageText = 'Soyisim:';
        setStep(7);
        break;
      case 7:
        setFormData(prevFormData => ({ ...prevFormData, personalInfo: { ...prevFormData.personalInfo, surname: input } }));
        botMessageText = 'TC:';
        setStep(8);
        break;
      case 8:
        setFormData(prevFormData => ({ ...prevFormData, personalInfo: { ...prevFormData.personalInfo, tc: input } }));
        botMessageText = 'Cinsiyet:';
        setStep(9);
        break;
      case 9:
        setFormData(prevFormData => ({ ...prevFormData, personalInfo: { ...prevFormData.personalInfo, gender: input } }));
        botMessageText = 'Cep:';
        setStep(10);
        break;
      case 10:
        setFormData(prevFormData => ({ ...prevFormData, personalInfo: { ...prevFormData.personalInfo, mobile: input } }));
        botMessageText = 'Eposta:';
        setStep(11);
        break;
      case 11:
        setFormData(prevFormData => ({ ...prevFormData, personalInfo: { ...prevFormData.personalInfo, email: input } }));
        botMessageText = 'Konumu gir:';
        setStep(12);
        break;
      case 12:
        setFormData(prevFormData => ({ ...prevFormData, addressInfo: input }));
        botMessageText = 'Adres gir:';
        setStep(13);
        break;
      case 13:
        setFormData(prevFormData => ({ ...prevFormData, applicationInfo: input }));
        botMessageText = `Başvurunuz alındı, teşekkürler.\n\nÖzet:\nBaşvuru Türü: ${formData.applicationType}\nBaşvuru Alt Türü: ${formData.applicationSubType}\nİlgili Birim: ${formData.relevantUnit}\nİsim: ${formData.personalInfo.name}\nSoyisim: ${formData.personalInfo.surname}\nTC: ${formData.personalInfo.tc}\nCinsiyet: ${formData.personalInfo.gender}\nCep: ${formData.personalInfo.mobile}\nEposta: ${formData.personalInfo.email}\nKonum: ${formData.addressInfo}\nAdres: ${formData.addressInfo}\nAçıklama: ${formData.applicationInfo}`;
        await submitApplication(formData);
        setStep(14);
        break;
      default:
        botMessageText = 'Başvurunuz tamamlandı.';
    }

    const botMessage = { sender: 'bot', text: botMessageText };
    setMessages(prevMessages => [...prevMessages, botMessage]);
    setInput('');
  };

  const submitApplication = async (data) => {
    try {
      const response = await axios.post('/api/chat', { message: JSON.stringify(data) }, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log(response.data);
    } catch (error) {
      console.error('Error submitting application:', error);
      const botMessage = { sender: 'bot', text: 'Başvurunuzu gönderirken bir hata oluştu. Lütfen tekrar deneyin.' };
      setMessages(prevMessages => [...prevMessages, botMessage]);
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div style={{ position: 'fixed', bottom: 0, right: 0, margin: 20, zIndex: 1000 }}>
      <button
        onClick={handleToggle}
        style={{
          position: 'absolute',
          bottom: isOpen ? 'auto' : 0,
          right: 0,
          top: isOpen ? 0 : 'auto',
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
          <div style={{ padding: 10, borderBottom: '1px solid #ddd', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <strong>Bursa Smart Assistant</strong>
            <button
              onClick={handleToggle}
              style={{
                backgroundColor: '#007bff',
                color: '#fff',
                border: 'none',
                borderRadius: '50%',
                width: 30,
                height: 30,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              -
            </button>
          </div>
          <div className={styles['chatbot-container']}>
            {messages.map((msg, index) => (
              <div key={index} className={styles['message']} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
                <p><strong>{msg.sender === 'user' ? 'You' : 'Bursa Smart Assistant'}:</strong> {msg.text}</p>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>
          <div className={styles['chatbot-input']}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Mesajınızı yazın..."
            />
            <button onClick={handleSend}>Gönder</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
