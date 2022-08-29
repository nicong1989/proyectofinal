import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Header from './components/Header/Header';
import Gallery from './components/Carousel/Carousel';
import Sucripcion from "./components/Sucripcion/Sucripcion";
import Productos from "./components/Cards/Productos";
import Titulo from "./components/Titulo/Titulo";
import ProductosSlayed from "./components/slayedCards/ProductosSlayed";




const App = () => {
  return (
    <>
      <Header />
      <NavBar />
      <Gallery />

      <Titulo
        titulo="COLECCIÓN"
        coleccion="ANIMAL FARM"
      />
      <Productos />

      <Titulo
        titulo="COLECCIÓN"
        coleccion="SLAYED"
      />
      <ProductosSlayed />

      <Sucripcion
        titulo="MANTENETE AL TANTO DE NUESTROS DESCUENTOS"
        texto="Suscribite a nuestro newsletter y enteráte de todos los beneficios"
      />

  
 
    </>
  );
};


export default App;
