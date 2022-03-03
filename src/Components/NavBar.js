
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap"

function NavBar() {

    return (

        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                    <Navbar.Brand href="#home">
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
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                        </NavDropdown>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;