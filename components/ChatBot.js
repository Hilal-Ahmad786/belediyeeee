// components/ChatBot.js
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
    if (!input.trim() && step <= 12) return;

    const userMessage = { sender: 'user', text: input };
    setMessages([...messages, userMessage]);

    let botMessageText = '';

    switch (step) {
      case 1:
        botMessageText = 'Başvuru Türünüzü Seçiniz:';
        setStep(2);
        break;
      case 2:
        setFormData({ ...formData, applicationType: input });
        botMessageText = 'Seçiniz: ' ;
        setStep(3);
        break;
      case 3:
        setFormData({ ...formData, applicationSubType: input });
        botMessageText = 'Başvuru İçin İlgili Birimi Seçiniz:';
        setMessages([...messages, { sender: 'bot', text: botMessageText }]);
        setStep(4); // Automatically advance to step 4
        break;
      case 4:
        setFormData({ ...formData, relevantUnit: input });
        botMessageText = 'İsim:';
        setMessages([...messages, { sender: 'bot', text: botMessageText }]);
        setStep(5);
        break;
      case 5:
        setFormData({ ...formData, personalInfo: { ...formData.personalInfo, name: input } });
        botMessageText = 'Soyisim:';
        setMessages([...messages, { sender: 'bot', text: botMessageText }]);
        setStep(6);
        break;
      case 6:
        setFormData({ ...formData, personalInfo: { ...formData.personalInfo, surname: input } });
        botMessageText = 'TC:';
        setMessages([...messages, { sender: 'bot', text: botMessageText }]);
        setStep(7);
        break;
      case 7:
        setFormData({ ...formData, personalInfo: { ...formData.personalInfo, tc: input } });
        botMessageText = 'Cinsiyet:';
        setMessages([...messages, { sender: 'bot', text: botMessageText }]);
        setStep(8);
        break;
      case 8:
        setFormData({ ...formData, personalInfo: { ...formData.personalInfo, gender: input } });
        botMessageText = 'Cep:';
        setMessages([...messages, { sender: 'bot', text: botMessageText }]);
        setStep(9);
        break;
      case 9:
        setFormData({ ...formData, personalInfo: { ...formData.personalInfo, mobile: input } });
        botMessageText = 'Eposta:';
        setMessages([...messages, { sender: 'bot', text: botMessageText }]);
        setStep(10);
        break;
      case 10:
        setFormData({ ...formData, personalInfo: { ...formData.personalInfo, email: input } });
        botMessageText = 'Konumu gir:';
        setMessages([...messages, { sender: 'bot', text: botMessageText }]);
        setStep(11);
        break;
      case 11:
        setFormData({ ...formData, addressInfo: input });
        botMessageText = 'Adres gir:';
        setMessages([...messages, { sender: 'bot', text: botMessageText }]);
        setStep(12);
        break;
      case 12:
        setFormData({ ...formData, applicationInfo: input });
        botMessageText = 'Açıklama:';
        setMessages([...messages, { sender: 'bot', text: botMessageText }]);
        setStep(13);
        break;
      case 13:
        // Summarize and send the application data
        await submitApplication(formData);
        botMessageText = `Başvurunuz alındı, Teşekkürler.\n\nÖzet:\nBaşvuru Türü: ${formData.applicationType}\nBaşvuru Alt Türü: ${formData.applicationSubType}\nİlgili Birim: ${formData.relevantUnit}\nİsim: ${formData.personalInfo.name}\nSoyisim: ${formData.personalInfo.surname}\nTC: ${formData.personalInfo.tc}\nCinsiyet: ${formData.personalInfo.gender}\nCep: ${formData.personalInfo.mobile}\nEposta: ${formData.personalInfo.email}\nKonum: ${formData.addressInfo}\nAdres: ${formData.addressInfo}\nAçıklama: ${formData.applicationInfo}`;
        setMessages([...messages, { sender: 'bot', text: botMessageText }]);
        setStep(14);
        break;
      default:
        botMessageText = 'Başvurunuz tamamlandı.';
    }

    const botMessage = { sender: 'bot', text: botMessageText };
    setMessages([...messages, userMessage, botMessage]);
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
    }
  };

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
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
        <div ref={messagesEndRef} />  {/* This div helps scroll to the latest message */}
      </div>
      {step === 1 && renderDropdown(['Talep', 'Şikayet', 'Öneri'], value => {
        setFormData({ ...formData, applicationType: value });
        setMessages([...messages, { sender: 'user', text: value }]);
        setStep(2);
      }, 'Başvuru Türünüzü Seçiniz')}
      {step === 2 && formData.applicationType === 'Talep' && renderDropdown(['Sosyal Yardım Talebi', 'Bilgi Edinme', 'Ruhsat', 'İmar'], value => {
        setFormData({ ...formData, applicationSubType: value });
        setMessages([...messages, { sender: 'user', text: value }]);
        // Automatically advance to step 3
        setStep(3);
      }, 'Seçiniz')}
      {step === 2 && formData.applicationType === 'Şikayet' && renderDropdown(['Ulaşım', 'Temizlik', 'Zabıta', 'İmar', 'Aydınlatma'], value => {
        setFormData({ ...formData, applicationSubType: value });
        setMessages([...messages, { sender: 'user', text: value }]);
        // Automatically advance to step 3
        setStep(3);
      }, 'Seçiniz')}
      {step === 2 && formData.applicationType === 'Öneri' && renderDropdown(['Ulaşım', 'Temizlik', 'Kültür', 'Eğitim', 'Teknoloji'], value => {
        setFormData({ ...formData, applicationSubType: value });
        setMessages([...messages, { sender: 'user', text: value }]);
        // Automatically advance to step 3
        setStep(3);
      }, 'Seçiniz')}
      {step === 3 && renderDropdown(['Genel Sekreterlik', 'Bilgi İşlem', 'İnsan Kaynakları', 'Park Bahçeler', 'Ulaşım ', 'Diğer  '], value => {
        setFormData({ ...formData, relevantUnit: value });
        setMessages([...messages, { sender: 'user', text: value }]);
        // Automatically advance to step 4
        setStep(4);
      }, 'Başvuru İçin İlgili Birimi Seçiniz')}
      {step >= 4 && step <= 13 && (
        <div className={styles['input-container']}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className={styles['text-input']}
          />
          <button onClick={handleSend} className={styles['send-button']}>Gönder</button>
        </div>
      )}
    </div>
  );
};

export default ChatBot;
