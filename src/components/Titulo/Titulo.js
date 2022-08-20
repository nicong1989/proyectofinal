import React from 'react';
import "./Titulo.css";


const Titulo = (props) => {
  return (
    <div className='container-titulo'>
        <h2 className='titulo-prueba'>{props.titulo}</h2>

    </div>
  )
}

export default Titulo
