import { Container, Nav, Navbar } from "react-bootstrap"
import { NavLink } from "react-router-dom"
import { useCartContext } from "../../containers/Context/CartContext"
import '../NavBar/NavBar.css';


function NavBar() {
  const{cantidadTotalItem}= useCartContext()
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Container>
        <NavLink to="/" className='nav'>inicio</NavLink>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto" >
            <NavLink to="categoria/gorras" className='nav'>Gorras</NavLink>
            <NavLink to="categoria/remeras"className='nav' >Remeras</NavLink>
            <NavLink to="categoria/zapatillas"className='nav' >Zapatillas</NavLink>
            <NavLink to="categoria/pantalones"className='nav'>Pantalones</NavLink>
           
            </Nav>
            <Nav>
            {/* <Nav.Link href="#deets">More deets</Nav.Link> */}
            <NavLink to="Cart" className="numero">
              {cantidadTotalItem()!== 0&& cantidadTotalItem()}
              <img src="https://thumbs.dreamstime.com/b/icono-de-carro-compras-en-fondo-negro-ilustración-vectores-estilo-plano-170442802.jpg" alt="cart" width={50} height={50}/>  
            </NavLink> 
            
            </Nav>
        </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavBar