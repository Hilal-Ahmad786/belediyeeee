// pages/index.js
import styled from '@emotion/styled';
import Link from 'next/link';

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
  return (
    <Container>
      <h1>Welcome to the Wizard Form</h1>
      <Link href="/belediyeeee/step1">
        <Button>Start Form</Button>
      </Link>
    </Container>
  );
};

export default Home;
