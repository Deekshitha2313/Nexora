import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
export default function AppHeader(){
    return(
             <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
          Nexora
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#About us">About Us</Nav.Link>
             <Nav.Link href="#Services">Services</Nav.Link>
            <Nav.Link href="#Works">Works</Nav.Link>
             <Nav.Link href="#Team">Team</Nav.Link>
            <Nav.Link href="#lTestimonials">Testimonials</Nav.Link>
             <Nav.Link href="#Pricing">Pricing</Nav.Link>
            <Nav.Link href="#Blog">Blog</Nav.Link>
             <Nav.Link href="#Contact">Contact</Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
       
    )
}