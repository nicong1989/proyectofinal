import React, { useState } from "react";
import styled from "styled-components";
import Contador from "./Contador";
import ModalCart from "./ModalCart";

const StyledCart = styled.div`
  display: flex;
  padding: 1rem 1rem;
  height: 2rem;
  width: 3rem;
  margin-top: 2.3rem;
  margin-left: 1.5rem;
  margin-right: 2rem;
  font-size: 30px;
  align-items: center;
  justify-content: center;
`;
const StyledCartButton = styled.button`
  background: #999999;
  background-image: -webkit-linear-gradient(top, #999999, #ffffff);
  background-image: -moz-linear-gradient(top, #999999, #ffffff);
  background-image: -ms-linear-gradient(top, #999999, #ffffff);
  background-image: -o-linear-gradient(top, #999999, #ffffff);
  background-image: linear-gradient(to bottom, #999999, #ffffff);
  -webkit-border-radius: 14;
  -moz-border-radius: 14;
  border-radius: 14px;
  color: #000;
  font-size: 20px;
  padding: 9px 20px 10px 25px;
  text-decoration: none;
  border: none;
  position: fixed;
  z-index: 999;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: #ffffff;
    background-image: -webkit-linear-gradient(top, #ffffff, #999999);
    background-image: -moz-linear-gradient(top, #ffffff, #999999);
    background-image: -ms-linear-gradient(top, #ffffff, #999999);
    background-image: -o-linear-gradient(top, #ffffff, #999999);
    background-image: linear-gradient(to bottom, #ffffff, #999999);
    text-decoration: none;
    cursor: pointer;
  }
`;

const BotonCarrito = () => {
  const [estadoModalCart, cambiarEstadoModalCart] = useState(false);
  return (
    <StyledCart>
       
      <StyledCartButton
        onClick={() => cambiarEstadoModalCart(!estadoModalCart)}
      ><Contador />
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          className="bi bi-cart2"
          viewBox="0 0 16 16"
        >
          <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
        </svg>
        
      </StyledCartButton>
     
      <ModalCart
        estado={estadoModalCart}
        cambiarEstado={cambiarEstadoModalCart}
      />
    </StyledCart>
  );
};

export default BotonCarrito;
