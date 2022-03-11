import { Container, Nav, Navbar} from "react-bootstrap"
import logo from './logos/nike-blanco.webp'

function NavBar() {

    return (

        <Navbar collapseOnSelect expand="lg" bg="custom" variant="dark">
            <Container>
                    <Navbar.Brand href="index.html">
                        <img
                            src={logo}
                            className="align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Inicio</Nav.Link>
                        <Nav.Link href="#pricing">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Nosotros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;