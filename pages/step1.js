
import StepLayout from '../components/StepLayout';



import { useRouter } from 'next/router';
import { Button, Container } from 'react-bootstrap';
import styles from '../app/Step.module.css';

export default function Step1() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <Container className="my-4">
      <StepLayout>
      <h1 className='m-3'>E-Belediye Hizmetleri</h1>
      <div className={styles.buttonContainer}>
      <Button className={styles.nextButton} onClick={() => handleNavigation('/gelirler-rehberi')}>
          Gelirler Mükellef Rehberi <span className={styles.arrow}>→</span>
        </Button>
        <Button className={styles.nextButton} onClick={() => handleNavigation('/step2b')}>
          e-Sorgulama Uygulamaları <span className={styles.arrow}>→</span>
        </Button>
        <Button className={styles.nextButton} onClick={() => handleNavigation('/step2c')}>
          e-Ödeme <span className={styles.arrow}>→</span>
        </Button>
        <Button className={styles.nextButton} onClick={() => handleNavigation('/step3')}>
          e-Beyanname <span className={styles.arrow}>→</span>
        </Button>
        <Button className={styles.nextButton} onClick={() => handleNavigation('/step4')}>
          e-Bilgi <span className={styles.arrow}>→</span>
        </Button>
        <Button className={styles.nextButton} onClick={() => handleNavigation('/step5')}>
          e-Başvuru Uygulamaları <span className={styles.arrow}>→</span>
        </Button>
        <Button className={styles.linkButton} onClick={() => handleNavigation('/solution-center')}>
          Çözüm Merkezi <span className={styles.linkIcon}>🔗</span>
        </Button>
        <Button className={styles.linkButton} onClick={() => handleNavigation('/petition')}>
          e-Dilekçe <span className={styles.linkIcon}>🔗</span>
        </Button>
      </div>
      </StepLayout>
    </Container>
  );
}
