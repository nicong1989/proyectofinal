import React from "react";
import Suscripcion from "./components/Suscripcion/Suscripcion";
import Productos from "./components/Cards/Productos";
import Titulo from "./components/Titulo/Titulo";
import Cart from "./components/Cart"
import Aviso from "./components/Aviso";
import Pruebacart from "./components/Pruebacart";


const App = () => {
  return (
    <>  
   
      
      <Aviso />
      <Pruebacart />
      <Titulo titulo="COLECCIÓN" coleccion="ANIMAL FARM" />
      <Productos />

      <Titulo titulo="COLECCIÓN" coleccion="SLAYED" />
      <Productos />

      <Suscripcion
        titulo="MANTENETE AL TANTO DE NUESTROS DESCUENTOS"
        texto="Suscribite a nuestro newsletter y enteráte de todos los beneficios"
      />
     <Cart />

   
    </>
  );
};

export default App;
