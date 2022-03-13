import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"
import { NavLink } from "react-router-dom"


function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <NavLink to="/">React-Bootstrap</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            <NavLink to="categoria/gorras">gorras</NavLink>
            <NavLink to="categoria/remeras">remeras</NavLink>
            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">R7</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">R5</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">R3</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
            </NavDropdown>
            </Nav>
            <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <NavLink to="Cart">
                Carrito
            </NavLink> 
            
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar