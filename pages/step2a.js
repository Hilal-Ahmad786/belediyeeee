import { useState } from 'react';
import { useRouter } from 'next/router';
import CustomRadioButton from '../components/CustomRadioButton';
import styled from '@emotion/styled';
import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

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

const Step2a = () => {
  const [selection, setSelection] = useState('');
  const router = useRouter();

  const handleChange = (e) => {
    setSelection(e.target.value);
  };

  const nextStep = () => {
    const basePath = publicRuntimeConfig.basePath;
    router.push(`${basePath}/step3`);
  };

  return (
    <Container>
      <h1>Başvuru Türünüzü Seçiniz</h1>
      <CustomRadioButton name="subtype" value="Sosyal Yardım Talebi" label="Sosyal Yardım Talebi" onChange={handleChange} checked={selection === 'Sosyal Yardım Talebi'} />
      <CustomRadioButton name="subtype" value="Bilgi Edinme" label="Bilgi Edinme" onChange={handleChange} checked={selection === 'Bilgi Edinme'} />
      <CustomRadioButton name="subtype" value="Ruhsat" label="Ruhsat" onChange={handleChange} checked={selection === 'Ruhsat'} />
      <CustomRadioButton name="subtype" value="İmar" label="İmar" onChange={handleChange} checked={selection === 'İmar'} />
      <Button onClick={nextStep}>Next</Button>
    </Container>
  );
};

export default Step2a;
