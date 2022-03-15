
import React from 'react';
import {useState} from 'react';

import { Card,ButtonGroup,Button } from "react-bootstrap"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'


function Product(props) {

    let stock = props.stock;

    const [contador,setContador] = useState(props.initial)

    const sumarClick = () =>{
        if (contador<stock){
        setContador(contador + 1);
        }
    }
    const restarClick = () =>{
        if (contador>1) {
            setContador(contador - 1);
        }
    }
    const resetearClick = () =>{
        setContador(1);
    }


    return (
        <>
                <Card>
                    <Card.Img className="productoImg" variant="top" src="https://www.digitalsport.com.ar/files/products/61980ee674f6a-534287-280x280.jpg" />
                    <Card.Body>
                        <Card.Title><h5>{props.nombreProducto}</h5></Card.Title>
                        <Card.Text>
                            <p>Texto descripcion del producto</p>
                        </Card.Text>
                        <p className='number-product'>Cantidad</p>
                        <ButtonGroup aria-label="Basic example">
                            <Button variant="outline-dark" size="sm" onClick={restarClick}>-</Button>
                            <p className='number-product'>{contador}</p>
                            <Button variant="outline-dark" size="sm" onClick={sumarClick}>+</Button>
                            <Button variant="danger" size="sm" onClick={resetearClick}><FontAwesomeIcon icon={faTrash} className="icon-shop" /></Button>
                        </ButtonGroup>
                    </Card.Body>
                    <Button variant="outline-success">Agregar al carrito</Button>
                </Card>
        </>


    )
}

export default Product;