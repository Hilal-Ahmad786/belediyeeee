import Image from 'next/image';
import Link from 'next/link';
import { Navbar, Nav, Container } from 'react-bootstrap';

const CustomNavbar = () => {
  return (
    <Navbar bg="light" expand="lg" className="shadow-sm">
      <Container>
        <Navbar.Brand href="/">
          <Image src="/logo.png" alt="Logo" width={200} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <h4>Bursa Belediyesi Demo Projesi</h4>
          </Nav>
        </Navbar.Collapse>
      </Container >
    </Navbar>
  );
};

export default CustomNavbar;
