import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Sucripcion from "./components/Sucripcion/Sucripcion";
import Productos from "./components/Cards/Productos";
import Titulo from "./components/Titulo/Titulo";
import Prueba from "./components/Prueba";
import Card from "./components/Card";


const useStyles = makeStyles({
  style: {
    background:
      "linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))",
    textAlign: "center",
    height: "100vh",
    width: "auto !important",
    maxWidth: "1400px !important",
  },

  titulo: {
    color: "#000000",
    display: "flex !important",
    justifyContent: "center !important",
    flexDirection: "column",
    alignItems: "center",
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.titulo}>
        <h2>Prueba de Estilos</h2>
        <h3>Lista de Productos con JSON SERVER y AXIOS</h3>
      </Container>
      
      <Titulo 
      titulo = "COLECCIÓN"
      coleccion = "ANIMAL FARM"
      
      />
      <Productos />
      
      <Titulo 
      titulo = "COLECCIÓN"
      coleccion = "SLAYED"
      
      />
     <Productos />
      
      <Sucripcion 
      titulo = "MANTENETE AL TANTO DE NUESTROS DESCUENTOS"
      texto = "Suscribite a nuestro newsletter y enteráte de todos los beneficios"
      />

     
      <Prueba />
    <Card />
      
 
    </>
  );
};

export default App;
