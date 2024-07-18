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
  width: 250px;
  height: 60px;
  color: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 18px;
  margin: 10px 0;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  text-decoration: none;
`;

const BlueButton = styled(Button)`
  background-color: #0070f3;
`;

const GreenButton = styled(Button)`
  background-color: #28a745;
`;

const RedButton = styled(Button)`
  background-color: #ff0000;
`;

const VideoContainer = styled.div`
  margin-top: 20px;
  width: 100%;
  max-width: 600px;
  height: 400px;
`;

const Icon = styled.i`
  font-size: 30px;
  text-decoration: none;
`;

const Home = () => {
  return (
    <Container>
      <ButtonContainer>
        <Link href="/step4" passHref>
          <BlueButton>
            <Icon className="fas fa-file-alt" style={{ marginRight: '10px' }}></Icon>
            Başvuru Yap
            <Icon className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></Icon>
          </BlueButton>
        </Link>
        <Link href="https://www.cimer.gov.tr/" passHref>
          <GreenButton>
            <Icon className="fas fa-file-alt" style={{ marginRight: '10px' }}></Icon>
            Cimer
            <Icon className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></Icon>
          </GreenButton>
        </Link>
        <Link href="https://www.osmangazi.bel.tr/tr/basvuru-rehberi/diger-islemler" passHref>
          <RedButton>
            <Icon className="fas fa-file-alt" style={{ marginRight: '10px' }}></Icon>
            Sosyal Yardim
            <Icon className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></Icon>
          </RedButton>
        </Link>

      </ButtonContainer>

      <ButtonContainer>
        <Link href="https://www.osmangazi.bel.tr/tr/basvuru-rehberi/diger-islemler" passHref>
          <GreenButton>
            <Icon className="fas fa-file-alt" style={{ marginRight: '10px' }}></Icon>
            Basvuru Rehberi
            <Icon className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></Icon>
          </GreenButton>
        </Link>
        <Link href="https://osmangazi.bel.tr/anket/" passHref>
          <GreenButton>
            <Icon className="fas fa-file-alt" style={{ marginRight: '10px' }}></Icon>
            Anket
            <Icon className="fas fa-arrow-right" style={{ marginLeft: '10px' }}></Icon>
          </GreenButton>
        </Link>

      </ButtonContainer>

      <VideoContainer>
        <video width="100%" height="100%" controls>
          <source src="/video.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </VideoContainer>

    </Container>
  );
};

export default Home;
