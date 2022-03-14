import React from 'react';
import { Container, Row, Col } from "react-bootstrap"
import logo from './logos/nike-blanco.webp'

function Footer() {
    return (
        <footer className='footerEdit'>
            <Container>
                <Row>
                    <Col className="footerLogo" sm={4}>
                        <img
                            src={logo}
                            alt="Tienda Nike"
                        />
                    </Col>
                    <Col sm={4} className="footerUbicacion">
                        <h4>UBICACIÓN</h4>
                        <p>Lezama,Prov. Buenos Aires</p>
                        <p>Sgto. Cabral 1100</p>
                    </Col>
                    <Col className="footerTelefono" sm={4}>
                    <h4>TELÉFONOS</h4>
                        <p>02241-551874</p>
                        <p>02241-551874</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}

export default Footer;