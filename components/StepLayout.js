import { Container, Card } from 'react-bootstrap';

const StepLayout = ({ children }) => {
  return (
    <Container className="my-4">
      <Card className="shadow p-4">
        {children}
      </Card>
    </Container>
  );
};

export default StepLayout;
