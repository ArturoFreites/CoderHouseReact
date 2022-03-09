import { Container, Nav, Navbar} from "react-bootstrap"
import './scss/bootstrap.scss';

function NavBar() {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                    <Navbar.Brand href="index.html">
                        <img
                            src="https://logodownload.org/wp-content/uploads/2014/04/nike-logo-1.png"
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