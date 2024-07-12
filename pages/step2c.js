// pages/step2c.js
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

const Step2c = () => {
  const [selection, setSelection] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setSelection(e.target.value);
  };

  const nextStep = () => {
    router.push(`${publicRuntimeConfig.basePath}/step3`);
  };

  return (
    <Container>
      <h1>Başvuru Türünüzü Seçiniz</h1>
      <CustomRadioButton name="subtype" value="Ulaşım" label="Ulaşım" onChange={handleChange} checked={selection === 'Ulaşım'} />
      <CustomRadioButton name="subtype" value="Temizlik" label="Temizlik" onChange={handleChange} checked={selection === 'Temizlik'} />
      <CustomRadioButton name="subtype" value="Kültür" label="Kültür" onChange={handleChange} checked={selection === 'Kültür'} />
      <CustomRadioButton name="subtype" value="Eğitim" label="Eğitim" onChange={handleChange} checked={selection === 'Eğitim'} />
      <CustomRadioButton name="subtype" value="Teknoloji" label="Teknoloji" onChange={handleChange} checked={selection === 'Teknoloji'} />
      <Button onClick={nextStep}>Next</Button>
    </Container>
  );
};

export default Step2c;
