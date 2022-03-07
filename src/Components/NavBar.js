
import { Container, Nav, Navbar} from "react-bootstrap"

function NavBar() {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                    <Navbar.Brand href="index.html">
                        <img
                            src="https://www.greatplacetowork.com.ar/images/coderhouse-logo.png"
                            width="200"
                            className="align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#features">Productos</Nav.Link>
                        <Nav.Link href="#pricing">Nosotros</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;