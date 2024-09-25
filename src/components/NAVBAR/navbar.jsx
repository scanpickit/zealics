import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import logo from '../../images/logo.png';
import '../../App.css'; 

function NavbarMain() {
  return (
    <Navbar expand="lg" className="navbar-container">
      <Container fluid>
        <Navbar.Brand href="#" className="me-3">
          <img src={logo} alt="Company Logo" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto mx-3">
            <Nav.Link href="#home" className="nav-item">Home</Nav.Link>
            <Nav.Link href="#services" className="nav-item">Services</Nav.Link>
            <Nav.Link href="#about" className="nav-item">About</Nav.Link>
            <Nav.Link href="#team" className="nav-item">Team</Nav.Link>
            <Nav.Link href="#career" className="nav-item">Career</Nav.Link>
          </Nav>
          <div className="d-flex button-group">
            {/* <Button className=" me-2 button-primary" >Login / SignUp</Button> */}
            <Button className='button-outline-primary' >Contact Us</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;
