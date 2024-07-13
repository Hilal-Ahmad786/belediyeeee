import { useState } from 'react';
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

const Step4 = ({ data, onChange, stepData }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    onChange({
      ...data,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    onChange({
      ...data,
      [name]: files[0],
    });
  };

  const handleSubmit = async () => {
    const combinedData = {
      ...stepData,
      step4: data,
    };

    const formData = new FormData();
    for (const key in combinedData) {
      if (typeof combinedData[key] === 'object' && combinedData[key] !== null && !Array.isArray(combinedData[key])) {
        for (const subKey in combinedData[key]) {
          formData.append(`${key}[${subKey}]`, combinedData[key][subKey]);
        }
      } else {
        formData.append(key, combinedData[key]);
      }
    }

    try {
      const response = await fetch('/api/submit', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        alert('Form submitted successfully!');
      } else {
        console.error('Form submission failed:', response.statusText);
        alert('Form submission failed.');
      }
    } catch (error) {
      console.error('Error during form submission:', error);
      alert('Form submission failed.');
    }
  };

  return (
    <Container>
      <h1>Kişisel Bilgiler</h1>
      <Input type="text" name="name" placeholder="Name" onChange={handleChange} />
      <Input type="text" name="surname" placeholder="Surname" onChange={handleChange} />
      <Input type="text" name="phone" placeholder="Phone Number" onChange={handleChange} />
      <Input type="email" name="email" placeholder="Email" onChange={handleChange} />

      <Label>Gender</Label>
      <Select name="gender" onChange={handleChange}>
        <option value="">Select Gender</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
        <option value="other">Other</option>
      </Select>

      <Input type="text" name="address" placeholder="Address" onChange={handleChange} />

      <Label>Upload Video</Label>
      <Input type="file" name="video" accept="video/*" onChange={handleFileChange} />

      <Label>Upload Image</Label>
      <Input type="file" name="image" accept="image/*" onChange={handleFileChange} />

      <Button onClick={handleSubmit}>Submit</Button>
    </Container>
  );
};

export default Step4;
