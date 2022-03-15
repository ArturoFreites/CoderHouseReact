import React from 'react';

function ItemListContainer (props) {
    return (
        <main className='MainContainerGreeting'>
            <h2>Bienvenido a nuestra tienda {props.greeting} !!</h2>
            <p>Encontrarás los mejores precios del mercado</p>
        </main>        
    )
}

export default ItemListContainer;