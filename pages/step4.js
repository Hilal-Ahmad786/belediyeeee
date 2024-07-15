// pages/step4.js
import { useState } from 'react';
import styled from '@emotion/styled';
import StepLayout from '../components/StepLayout';

const Container = styled.div`
  padding: 32px;
`;

const Button = styled.button`
  margin-top: 16px;
  padding: 16px 32px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
`;

const Input = styled.input`
  display: block;
  margin: 8px 0;
  padding: 8px;
  width: 100%;
`;

const Label = styled.label`
  margin-top: 16px;
  display: block;
  font-weight: bold;
`;

const Select = styled.select`
  display: block;
  margin: 8px 0;
  padding: 8px;
  width: 100%;
`;

const Step4 = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    idNumber: '',
    phone: '',
    email: '',
    education: '',
    occupation: '',
    district: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = async () => {
    const response = await fetch('/api/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formData)
    });

    if (response.ok) {
      alert('Form başarıyla gönderildi!');
    } else {
      alert('Form gönderimi başarısız oldu.');
    }
  };

  return (
    <Container>
      <h1>Kişisel Bilgiler</h1>
      <Input type="text" name="name" placeholder="İsim" onChange={handleChange} />
      <Input type="text" name="surname" placeholder="Soyisim" onChange={handleChange} />
      <Input type="text" name="idNumber" placeholder="Kimlik Numarası" onChange={handleChange} />
      <Input type="text" name="phone" placeholder="Telefon Numarası" onChange={handleChange} />
      <Input type="email" name="email" placeholder="Email" onChange={handleChange} />

      <Label>Eğitim Durumu</Label>
      <Select name="education" onChange={handleChange}>
        <option value="">Eğitim Durumu Seçin</option>
        <option value="ilkokul">İlkokul</option>
        <option value="ortaokul">Ortaokul</option>
        <option value="lise">Lise</option>
        <option value="universite">Üniversite</option>
        <option value="yuksek_lisans">Yüksek Lisans</option>
        <option value="doktora">Doktora</option>
      </Select>

      <Label>Meslek</Label>
      <Select name="occupation" onChange={handleChange}>
        <option value="">Meslek Seçin</option>
        <option value="doctor">Doktor</option>
        <option value="engineer">Mühendis</option>
        <option value="teacher">Öğretmen</option>
        <option value="lawyer">Avukat</option>
        <option value="nurse">Hemşire</option>
        <option value="architect">Mimar</option>
        <option value="accountant">Muhasebeci</option>
        <option value="police">Polis</option>
        <option value="firefighter">İtfaiyeci</option>
        <option value="chef">Aşçı</option>
        <option value="driver">Şoför</option>
        <option value="artist">Sanatçı</option>
        <option value="student">Öğrenci</option>
        <option value="other">Diğer</option>
      </Select>

      <Label>İlçe</Label>
      <Select name="district" onChange={handleChange}>
        <option value="">İlçe Seçin</option>
        <option value="osmangazi">Osmangazi</option>
        <option value="yildirim">Yıldırım</option>
        <option value="nilüfer">Nilüfer</option>
        <option value="gursu">Gürsu</option>
        <option value="kestel">Kestel</option>
        <option value="inegöl">İnegöl</option>
        <option value="gemlik">Gemlik</option>
        <option value="mudanya">Mudanya</option>
        <option value="karacabey">Karacabey</option>
        <option value="mustafakemalpasa">Mustafakemalpaşa</option>
        <option value="orhaneli">Orhaneli</option>
        <option value="iznik">İznik</option>
        <option value="buyukorhan">Büyükorhan</option>
        <option value="keles">Keles</option>
      </Select>

      <Button onClick={handleSubmit}>Gönder</Button>
    </Container>
  );
};

export default Step4;
