import "./NavBar.css";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import CartIcon from "../../icon/CartIcon";


const NavBar = () => {
  return (
    <Navbar className="probando" bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">E-commerce de Cristian</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <Nav.Link href="#link">Nosotros</Nav.Link>
            <NavDropdown title="Adicional" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <CartIcon />
      </Container>
    </Navbar>
  );
};

export default NavBar;
