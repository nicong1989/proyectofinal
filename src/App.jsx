import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Cards from "./components/Colecciones/Cards";
import Sucripcion from "./components/Sucripcion/Sucripcion"
import ListProductos from "./components/Cards2/ListProductos";


const useStyles = makeStyles({
  style: {
    background:
      "linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))",
    textAlign: "center",
    height: "100vh",
    width: "100% !important",
    maxWidth: "1400px !important",
  },

  titulo: {
    color: "#000000",
    display: "flex !important",
    justifyContent: "center !important",
    flexDirection: "column",
    alignItems: "center",
  },

  grid:{
    backgroundColor:'red',
    display: 'grid !important' ,
    gridAutoColumns:'1fr'

  }
});

const App = () => {
  const classes = useStyles();
  return (
    <>
      <Container className={classes.titulo}>
        <h2>Prueba de Estilos</h2>
        <h3>Lista de Productos con JSON SERVER y AXIOS</h3>
      </Container>

      <Container className={classes.style}>
        <Cards />
      </Container>

      


   
        <Sucripcion />
     
        <Container className={classes.grid}>
        <ListProductos />
       </Container>



     

    </>
  );
};

export default App;
