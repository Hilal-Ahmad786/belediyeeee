import { useState, useEffect, useRef } from 'react';
import axios from 'axios';
import styles from '../app/ChatBot.module.css';

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
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

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages(prevMessages => [...prevMessages, userMessage]);

    const lowerInput = input.toLowerCase();
    if (step === 1 && (lowerInput.includes('şikayet') || lowerInput.includes('talep') || lowerInput.includes('istek'))) {
      setStep(2);
      setFormData(prevFormData => ({ ...prevFormData, applicationType: lowerInput }));
    }

    let botMessageText = '';

    switch (step) {
      case 1:
        botMessageText = 'Başvuru Türünüzü Seçiniz:';
        setStep(2);
        break;
      case 2:
        botMessageText = 'Seçiniz:';
        break;
      case 3:
        setFormData(prevFormData => ({ ...prevFormData, applicationSubType: input }));
        botMessageText = 'Başvuru İçin İlgili Birimi Seçiniz:';
        setStep(4);
        break;
      case 4:
        setFormData(prevFormData => ({ ...prevFormData, relevantUnit: input }));
        botMessageText = 'İsim:';
        setStep(5);
        break;
      case 5:
        setFormData(prevFormData => ({ ...prevFormData, personalInfo: { ...prevFormData.personalInfo, name: input } }));
        botMessageText = 'Soyisim:';
        setStep(6);
        break;
      case 6:
        setFormData(prevFormData => ({ ...prevFormData, personalInfo: { ...prevFormData.personalInfo, surname: input } }));
        botMessageText = 'TC:';
        setStep(7);
        break;
      case 7:
        setFormData(prevFormData => ({ ...prevFormData, personalInfo: { ...prevFormData.personalInfo, tc: input } }));
        botMessageText = 'Cinsiyet:';
        setStep(8);
        break;
      case 8:
        setFormData(prevFormData => ({ ...prevFormData, personalInfo: { ...prevFormData.personalInfo, gender: input } }));
        botMessageText = 'Cep:';
        setStep(9);
        break;
      case 9:
        setFormData(prevFormData => ({ ...prevFormData, personalInfo: { ...prevFormData.personalInfo, mobile: input } }));
        botMessageText = 'Eposta:';
        setStep(10);
        break;
      case 10:
        setFormData(prevFormData => ({ ...prevFormData, personalInfo: { ...prevFormData.personalInfo, email: input } }));
        botMessageText = 'Konumu gir:';
        setStep(11);
        break;
      case 11:
        setFormData(prevFormData => ({ ...prevFormData, addressInfo: input }));
        botMessageText = 'Adres gir:';
        setStep(12);
        break;
      case 12:
        setFormData(prevFormData => ({ ...prevFormData, applicationInfo: input }));
        botMessageText = 'Açıklama:';
        setStep(13);
        break;
      case 13:
        await submitApplication(formData);
        botMessageText = `Başvurunuz alındı, teşekkürler.\n\nÖzet:\nBaşvuru Türü: ${formData.applicationType}\nBaşvuru Alt Türü: ${formData.applicationSubType}\nİlgili Birim: ${formData.relevantUnit}\nİsim: ${formData.personalInfo.name}\nSoyisim: ${formData.personalInfo.surname}\nTC: ${formData.personalInfo.tc}\nCinsiyet: ${formData.personalInfo.gender}\nCep: ${formData.personalInfo.mobile}\nEposta: ${formData.personalInfo.email}\nKonum: ${formData.addressInfo}\nAdres: ${formData.addressInfo}\nAçıklama: ${formData.applicationInfo}`;
        setStep(14);
        break;
      default:
        botMessageText = 'Başvurunuz tamamlandı.';
    }

    const botMessage = { sender: 'bot', text: botMessageText };
    setMessages(prevMessages => [...prevMessages, userMessage, botMessage]);
    setInput('');
  };

  

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });

    if (messages.length === 0) {
      setMessages([{ sender: 'bot', text: 'Merhaba! Ben Bursa Smart Assistant. Size Bursa hakkında bilgi vermek için buradayım. Nasıl yardımcı olabilirim?' }]);
    }
  }, [messages]);

  const renderDropdown = (options, onChange, heading) => (
    <div>
      <h4>{heading}</h4>
      <select className={styles.dropdown} onChange={(e) => onChange(e.target.value)}>
        <option value="">Seçiniz</option>
        {options.map(option => (
          <option key={option} value={option}>{option}</option>
        ))}
      </select>
    </div>
  );

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

  return (
    <div className={styles['chatbot-wrapper']}>
      <div className={styles['chatbot-header']}>
        <h5>Yapay Zeka Yardım Asistanı</h5>
      </div>
      <div className={styles['chatbot-container']}>
        {messages.map((msg, index) => (
          <div key={index} className={styles['message']} style={{ textAlign: msg.sender === 'user' ? 'right' : 'left' }}>
            <p><strong>{msg.sender === 'user' ? 'You' : 'ChatBot'}:</strong> {msg.text}</p>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
      {step === 1 && renderDropdown(['Talep', 'Şikayet', 'Öneri'], value => {
        setFormData(prevFormData => ({ ...prevFormData, applicationType: value }));
        setMessages(prevMessages => [...prevMessages, { sender: 'user', text: value }]);
        setStep(2);
      }, 'Başvuru Türünüzü Seçiniz')}
      {step === 2 && formData.applicationType === 'Talep' && renderDropdown(['Sosyal Yardım Talebi', 'Bilgi Edinme', 'Ruhsat', 'İmar'], value => {
        setFormData(prevFormData => ({ ...prevFormData, applicationSubType: value }));
        setMessages(prevMessages => [...prevMessages, { sender: 'user', text: value }]);
        setStep(3);
      }, 'Seçiniz')}
      {step === 2 && formData.applicationType === 'Şikayet' && renderDropdown(['Ulaşım', 'Temizlik', 'Zabıta', 'İmar', 'Aydınlatma'], value => {
        setFormData(prevFormData => ({ ...prevFormData, applicationSubType: value }));
        setMessages(prevMessages => [...prevMessages, { sender: 'user', text: value }]);
        setStep(3);
      }, 'Seçiniz')}
      {step === 2 && formData.applicationType === 'Öneri' && renderDropdown(['Ulaşım', 'Temizlik', 'Kültür', 'Eğitim', 'Teknoloji'], value => {
        setFormData(prevFormData => ({ ...prevFormData, applicationSubType: value }));
        setMessages(prevMessages => [...prevMessages, { sender: 'user', text: value }]);
        setStep(3);
      }, 'Seçiniz')}
      {step >= 3 && step <= 13 && (
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
      )}
    </div>
  );
};

export default ChatBot;
