// pages/index.js
import styled from '@emotion/styled';
import Link from 'next/link';

const Container = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: flex-start;
  height: 100vh;
  padding: 20px;
`;

const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 20px;
`;

const Button = styled.button`
  width: 200px;
  padding: 16px 0;
  color: white;
  background-color: #28a745;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 16px;
  margin: 10px 0;
  text-align: center;
`;

const VideoContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  height: 400px;
`;

const Home = () => {
  return (
    <Container>
      <ButtonContainer>
        <Link href="/step4">
          <Button>Kişisel bilgiler</Button>
        </Link>
        <Link href="https://www.cimer.gov.tr/">
          <Button>Cimer</Button>
        </Link>
        <Link href="https://www.turkiye.gov.tr/icisleri-sosyal-yardim-talebinde-bulunma-ve-talebi-sorgulama-4671">
          <Button>Sosyal Yardim</Button>
        </Link>
      </ButtonContainer>

      <ButtonContainer>
        <Link href="https://www.osmangazi.bel.tr/tr/basvuru-rehberi/diger-islemler">
          <Button>Basvuru Rehberi</Button>
        </Link>
        <Link href="https://osmangazi.bel.tr/anket/">
          <Button>Anket</Button>
        </Link>
      </ButtonContainer>

      <VideoContainer>
        <video width="100%" height="100%" controls>
          <source src="/video.mp4" type="video1/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>
    </Container>
  );
};

export default Home;
