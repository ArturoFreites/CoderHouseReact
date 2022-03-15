import { Container, Nav, Navbar} from "react-bootstrap"
import logo from './logos/nike-blanco.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

function NavBar() {

    return (

        <Navbar collapseOnSelect expand="lg" bg="custom" variant="dark">
            <Container>
                    <Navbar.Brand href="index.html">
                        <img
                            src={logo}
                            className="align-top"
                            alt="Tienda Nike"
                        />
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Inicio</Nav.Link>
                        <Nav.Link href="#pricing">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Nosotros</Nav.Link>
                    </Nav>
                    <Nav.Link className="icon-shop-text" href="#pricing">
                        <FontAwesomeIcon icon={faCartShopping} className="icon-shop" /> Carrito
                        </Nav.Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;