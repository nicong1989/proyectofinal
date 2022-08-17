import React from "react";
// import { Container } from 'react-bootstrap';
// import ListProductos from './components/ListProductos';
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";

const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))",
    textAlign: "center",
    
    height: "100vh",
    width: "100%",
    maxWidth: "1400px !important",
    color: '#a7ff83',
  },
});

const App = () => {
  const classes = useStyles();
  return (
    <Container className={classes.root}>
      <h2>Prueba de Estilos</h2>
    </Container>
  );
};

export default App;
