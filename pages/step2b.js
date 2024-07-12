// pages/step2b.js
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

const Step2b = () => {
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
      <CustomRadioButton name="subtype" value="Zabıta" label="Zabıta" onChange={handleChange} checked={selection === 'Zabıta'} />
      <CustomRadioButton name="subtype" value="İmar" label="İmar" onChange={handleChange} checked={selection === 'İmar'} />
      <CustomRadioButton name="subtype" value="Aydınlatma" label="Aydınlatma" onChange={handleChange} checked={selection === 'Aydınlatma'} />
      <Button onClick={nextStep}>Next</Button>
    </Container>
  );
};

export default Step2b;
