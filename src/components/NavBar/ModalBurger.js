import React from "react";
import styled from "styled-components";

const ContenedorBurger = styled.div`
  margin-top: 200px;
  left: 30px;
  background: lightblue;
  border-radius: 5px;
  padding-top: 10px;
  padding-right: 60px;
  z-index: 2000;
  position: fixed;
  font-size: 15px;
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
    color: #000;
  }
  a:hover {
    color: white;
    cursor: pointer;
    transition: all 0.1s ease-in-out;
    transform: scale(1.2);
  }
`;

const ModalBurger = ({ estado, cambiarEstado }) => {
  return (
    <>
      {estado && (
        <ContenedorBurger>
          <ul>
            <li>
              <a
                href="#productos"
                style={{ textShadow: "4px 4px 6px #000000" }}
              >
                NUESTROS PRODUCTOS
              </a>
            </li>

            <li>
              <a href="#coleccion" style={{ textShadow: "4px 4px 6px #000000" }}>
                COLECCIONES
              </a>
            </li>

            <li>
              <a href="#contacto" style={{ textShadow: "4px 4px 6px #000000" }}>
                CONTACTO
              </a>
            </li>
          </ul>
        </ContenedorBurger>
      )}
    </>
  );
};

export default ModalBurger;
