import './Components/scss/App.scss';
import React from 'react';

import Header from './Components/Header.js';
import ItemListContainer from './Components/ItemListContainer.js';
import Footer from './Components/Footer.js';

function App() {

  const nombre = "Arturo";

  return (
    <>
    <Header />
    <ItemListContainer greeting={nombre}/>
    <Footer />
    </>
  )
}

export default App;
