// pages/index.js
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Button = styled.button`
  padding: 16px 32px;
  background-color: #0070f3;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
`;

const Home = () => {
  const router = useRouter();

  const startForm = () => {
    router.push('/step1');
  };

  return (
    <Container>
      <h1>Welcome to the Wizard Form</h1>
      <Button onClick={startForm}>Start Form</Button>
    </Container>
  );
};

export default Home;
