import React from 'react';

import ItemListContainer from './ItemListContainer.js';
import ProductList from './ProductList.js';


function Main() {

    const nombre = "Arturo";

    return (
        <>
            <ItemListContainer greeting={nombre} />
            <ProductList/>
        </>


    )
}

export default Main;