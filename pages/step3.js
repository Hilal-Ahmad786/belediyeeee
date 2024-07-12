// pages/step3.js
import { useState } from 'react';
import { useRouter } from 'next/router';
import CustomRadioButton from '../components/CustomRadioButton';
import styled from '@emotion/styled';

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

const Step3 = () => {
  const [selection, setSelection] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setSelection(e.target.value);
  };

  const nextStep = () => {
    router.push('/step4');
  };

  return (
    <Container>
      <h1>Başvuru İçin İlgili Birimi Seçiniz</h1>
      <CustomRadioButton name="department" value="Genel Sekreterlik" label="Genel Sekreterlik" onChange={handleChange} checked={selection === 'Genel Sekreterlik'} />
      <CustomRadioButton name="department" value="Bilgi İşlem" label="Bilgi İşlem" onChange={handleChange} checked={selection === 'Bilgi İşlem'} />
      <CustomRadioButton name="department" value="İnsan Kaynakları" label="İnsan Kaynakları" onChange={handleChange} checked={selection === 'İnsan Kaynakları'} />
      <CustomRadioButton name="department" value="Park Bahçeler" label="Park Bahçeler" onChange={handleChange} checked={selection === 'Park Bahçeler'} />
      <CustomRadioButton name="department" value="Ulaşım" label="Ulaşım" onChange={handleChange} checked={selection === 'Ulaşım'} />
      <CustomRadioButton name="department" value="Diğer" label="Diğer" onChange={handleChange} checked={selection === 'Diğer'} />
      <Button onClick={nextStep}>Next</Button>
    </Container>
  );
};

export default Step3;
