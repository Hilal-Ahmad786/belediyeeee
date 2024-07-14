// components/CustomRadioButton.js
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  align-items: center;
  margin: 8px 0;
`;

const Input = styled.input`
  display: none;

  &:checked + label {
    background-color: #5cb85c;
    color: white;
  }
`;

const Label = styled.label`
  display: inline-block;
  padding: 8px 16px;
  margin: 4px;
  border: 2px solid #5cb85c;
  border-radius: 8px;
  cursor: pointer;
`;

const CustomRadioButton = ({ name, value, label, onChange, checked }) => (
  <Container>
    <Input
      type="radio"
      id={value}
      name={name}
      value={value}
      onChange={onChange}
      checked={checked}
    />
    <Label htmlFor={value}>{label}</Label>
  </Container>
);

export default CustomRadioButton;
