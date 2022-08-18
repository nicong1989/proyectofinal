import React from "react";
import { makeStyles } from "@mui/styles";
import Container from "@mui/material/Container";
import Cards from "./components/componentesdeprueba/Cards";
import Products from "./components/componentesdeprueba/Products"
import contents from './content';
import Sucripcion from "./components/componentesdeprueba/Sucripcion";




const useStyles = makeStyles({
  root: {
    background:
      "linear-gradient(to right, rgb(15, 32, 39), rgb(32, 58, 67), rgb(44, 83, 100))",
    textAlign: "center",
    height: "100vh",
    width: "100%",
    maxWidth: "1400px !important",
    color: 'black',
  },


});


const App = () => {
  const classes = useStyles();
  return (
    
    
    <Container className={classes.root}>
     <h2>Prueba de Estilos</h2>
    <h3 className>Listado de Productos con JSON SERVER Y AXIOS</h3>
   
    <Cards />
    <div className='App'>
                {contents.map(contents => (
                    <Products 
                        key={contents.id}
                        image={contents.image}
                        name={contents.name}
                        price={contents.price}
                        totalSales={contents.totalSales}
                        timeLeft={contents.timeLeft}
                        rating={contents.rating}
                    />
                ))}
            </div>
                  <Sucripcion />
    </Container>
    
   


    

  )
};

export default App;
