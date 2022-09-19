import React from "react";
import styled from "styled-components";

const Titular = styled.div`
  width: 100%;
  height: 120px;
  text-align: center;
  background-color: black;
  color: white;
  margin: 0 auto;
  padding-top: 12px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;


const Titulo = () => {
  return (
    <Titular>
      <h4> Envios gratis | <span style={{color:"#a98f3b"}}>A partir de $7500</span></h4>
      <h4> Hasta 12 cuotas | <span style={{color:"#a98f3b"}}>Sin interés</span></h4>
    </Titular>
  );
};
export default Titulo;
