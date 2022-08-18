import React from 'react'

import Container from "@mui/material/Container";
import ListProductos from './ListProductos';

const Newproducto = () => {
  return (
    <div>

      <Container>
        <h6>Nuevos Productos</h6>
        <ListProductos />
      </Container>

    </div>
  )
}

export default Newproducto