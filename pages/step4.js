import React, { useState } from 'react';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Section = styled.div`
  margin-bottom: 40px;
`;

const Heading = styled.h2`
  margin-bottom: 20px;
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 20px;
`;

const Column = styled.div`
  flex: 1;
  margin-right: 20px;

  &:last-child {
    margin-right: 0;
  }
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const RadioGroup = styled.div`
  display: flex;
  align-items: center;
`;

const RadioLabel = styled.label`
  margin-right: 20px;
`;

const Dropdown = styled.select`
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

const ToggleButton = styled.button`
  padding: 10px 20px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 20px;
`;

const FileUpload = styled.div`
  border: 2px dashed #ccc;
  padding: 20px;
  text-align: center;
  margin-bottom: 20px;
`;

const CheckBox = styled.div`
  margin-bottom: 20px;
`;

const SubmitButton = styled.button`
  padding: 10px 20px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

const districtsOfBursa = [
  "Nilüfer", "Osmangazi", "Yıldırım", "Gemlik", "İnegöl", "İznik", "Karacabey", "Keles", 
  "Kestel", "Mudanya", "Mustafakemalpaşa", "Orhaneli", "Orhangazi", "Yenişehir", 
  "Büyükorhan", "Harmancık"
];

const Step4 = () => {
  const [showAddressFields, setShowAddressFields] = useState(true);

  const toggleAddressFields = () => {
    setShowAddressFields(!showAddressFields);
  };

  return (
    <Container>
      <Section>
        <Heading>Kişisel Bilgiler</Heading>
        <Row>
          <Column>
            <Input type="text" placeholder="AD*" />
          </Column>
          <Column>
            <Input type="text" placeholder="SOYAD*" />
          </Column>
        </Row>
        <Row>
          <Column>
            <Input type="number" placeholder="TC KİMLİK NO" />
          </Column>
          <Column>
            <div>
              <p>Cinsiyet</p>
              <RadioGroup>
                <RadioLabel>
                  <input type="radio" name="cinsiyet" value="Erkek" /> Erkek
                </RadioLabel>
                <RadioLabel>
                  <input type="radio" name="cinsiyet" value="Kadın" /> Kadın
                </RadioLabel>
              </RadioGroup>
            </div>
          </Column>
        </Row>
        <Row>
          <Column>
            <Input type="number" placeholder="CEP TELEFONU" />
          </Column>
          <Column>
            <Input type="email" placeholder="E-POSTA*" />
          </Column>
        </Row>
        <Row>
          <Column>
            <TextArea placeholder="BAŞVURU KONUSU*" rows="4" />
          </Column>
        </Row>
      </Section>
      <Section>
        <Heading>Adres Bilgiler</Heading>
        <ToggleButton onClick={toggleAddressFields}>
          {showAddressFields ? 'Adres bilgilerimi vermek istemiyorum' : 'Adres bilgilerimi vermek istiyorum'}
        </ToggleButton>
        {showAddressFields && (
          <>
            <Row>
              <Column>
                <Dropdown>
                  <option value="">İLÇE*</option>
                  {districtsOfBursa.map((district) => (
                    <option key={district} value={district}>{district}</option>
                  ))}
                </Dropdown>
              </Column>
              <Column>
                <Input type="text" placeholder="BAŞVURU ADRESİ" />
              </Column>
            </Row>
          </>
        )}
      </Section>
      <Section>
        <Heading>DOSYA YÜKLE</Heading>
        <FileUpload>
          <i className="fas fa-upload" style={{ fontSize: '24px', marginBottom: '10px' }}></i>
          <p>Dosyalarınızı bu alana sürükleyin ya da tıklayrak seçin</p>
        </FileUpload>
      </Section>
      <Section>
        <p>Random text goes here.</p>
        <CheckBox>
          <input type="checkbox" id="approval" />
          <label htmlFor="approval">Onaylıyormusunuz</label>
        </CheckBox>
        <SubmitButton>Submit</SubmitButton>
      </Section>
    </Container>
  );
};

export default Step4;
