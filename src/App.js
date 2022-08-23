import React from "react";
import Sucripcion from "./components/Sucripcion/Sucripcion";
import Productos from "./components/Cards/Productos";
import Titulo from "./components/Titulo/Titulo";


const App = () => {

  return (
    <>
      <Titulo
        titulo="COLECCIÓN"
        coleccion="ANIMAL FARM"
      />
      <Productos />

      <Titulo
        titulo="COLECCIÓN"
        coleccion="SLAYED"
      />
      <Productos />

      <Sucripcion
        titulo="MANTENETE AL TANTO DE NUESTROS DESCUENTOS"
        texto="Suscribite a nuestro newsletter y enteráte de todos los beneficios"
      />


    </>
  );
};

export default App;
