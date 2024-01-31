import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NavBar() {
  return (
    <>
      <Navbar bg="dark" className='Nav' data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Madushanka</Navbar.Brand>
          <Nav className="me-4">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href='/about' >About</Nav.Link>
            <Nav.Link disabled href="#">Education</Nav.Link>
            <Nav.Link href='/skills'>Skills</Nav.Link>
            <Nav.Link disabled href="#">Projects</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      </>
  );
}

export default NavBar;