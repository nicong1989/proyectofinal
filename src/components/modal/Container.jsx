import React from "react";
import { Container } from "@mui/material";


const Containers = ({ productos }) => {



  

  return (
    <Container>
      <p>{productos.name}</p>
      <p>{productos.model}</p>
      <p>{productos.price}</p>
      <p>{productos.unitsSold}</p>
      <p>{productos.rating}</p>

    





    </Container>
  );
};

export default Containers;




