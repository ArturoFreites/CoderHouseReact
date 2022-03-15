
import React from 'react';

import {Container,Row,Col } from "react-bootstrap"
import Product from './Product.js';


function ProductList() {

    const miOnAdd = () => {};
    let nombres = "AIR MAX 90 LX NIKE";

    return (

        <>
        <Container>
            <Row xs={1} md={2} lg={3}  className="g-4">
                {Array.from({ length: 6 }).map((_, idx) => (
                    <Col>
                        <Product nombreProducto={nombres} stock={20} initial={1} onAdd={miOnAdd}/>
                    </Col>
                ))}
            </Row>
        </Container>
        </>


    )
}

export default ProductList;