import React from "react";
import styled from "styled-components";
import CarsImagen from "./CardsImagen.js";

const ComponentDiv= styled.div `  
      width: 32%;
      height: 90%;
      text-align: center;
      background-color: white; 
      color: grey;
      margin: 0 auto;
      border-radius: 10px;

      display: flex;
      flex-direction: column;
      align-items:center;
      @media screen {
            
      }
`



export  const ComponenteDiv = ()=>{
  return(
          <ComponentDiv>
                <CarsImagen />
                <CarsImagen />
                <CarsImagen />
          </ComponentDiv>
  )
}
     
     