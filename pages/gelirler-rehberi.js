import { useRouter } from 'next/router';
import { Button, Container } from 'react-bootstrap';
import styles from '../app/Step.module.css';

export default function GelirlerRehberi() {
  const router = useRouter();

  const handleNavigation = (path) => {
    router.push(path);
  };

  return (
    <Container className="my-4">
      <div className={styles.buttonContainer}>
        <Button className={styles.nextButton} onClick={() => handleNavigation('/step2a')}>
          İlan Reklam Mükellefleri <span className={styles.arrow}>→</span>
        </Button>
        <Button className={styles.nextButton} onClick={() => handleNavigation('/step2b')}>
          Diğer Mükellefler <span className={styles.arrow}>→</span>
        </Button>
        <Button className={styles.nextButton} onClick={() => handleNavigation('/step2c')}>
          Ödeme Noktaları <span className={styles.arrow}>→</span>
        </Button>
        <Button className={styles.nextButton} onClick={() => handleNavigation('/step3')}>
          Haciz Kaldırma <span className={styles.arrow}>→</span>
        </Button>
        <Button className={styles.nextButton} onClick={() => handleNavigation('/step4')}>
          İlanen Tebliğ <span className={styles.arrow}>→</span>
        </Button>
        <Button className={styles.nextButton} onClick={() => handleNavigation('/step5')}>
          İlçe Belediye Payları <span className={styles.arrow}>→</span>
        </Button>
        <Button className={styles.nextButton} onClick={() => handleNavigation('/step6')}>
          Sıkça Sorulan Sorular <span className={styles.arrow}>→</span>
        </Button>
        <Button className={styles.linkButton} onClick={() => handleNavigation('/ibb-borc-odeme')}>
          İBB Börç Ödeme <span className={styles.linkIcon}>🔗</span>
        </Button>
      </div>
    </Container>
  );
}
