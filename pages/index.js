// pages/index.js
import styled from '@emotion/styled';
import Link from 'next/link';
import getConfig from 'next/config';
import styles from '../app/Home.module.css';
import Chatbot from '../components/Chatbot';


const { publicRuntimeConfig } = getConfig();

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const Button = styled.button`
  padding: 16px 32px;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
`;

const Home = () => {
  return (
    <div className={styles.homeBackground}>
    <Container className="text-center" style={{ position: 'relative', zIndex: 1 }}>
    <h1 className="display-4 text-light">Welcome to Modern Bursa</h1>
    <p className="lead text-light">Discover the vibrant and contemporary side of Bursa while appreciating its rich history.</p>
      <Link href={`${publicRuntimeConfig.basePath}/step1`}>
        <Button className='btn btn-success'>Start Form</Button>
      </Link>
      <Chatbot />

    </Container>
        </div>

  );
};

export default Home;
