import React from "react";
import { ComponenteDiv } from "./ComponenteDiv";
import ReproductorVideo from "./RepVideo.js";
import styled from "styled-components";

const Galeria = styled.section`
  display: flex; 
  background-color: black;
  flex-direction: row;
  justify-content: space-between;
  background-color: black;
  width: 100 vh;
  height: 600px;
  text-align: center;
  color: red; 

  @media (max-width: 767px) {
    flex-direction: column;
  }
`;
export const Gallery = () => {
  return (
    <Galeria id="productos">
      <ComponenteDiv className="visible" />
      
      <ReproductorVideo />

      <ComponenteDiv />
    </Galeria>
  );
};

export default Gallery;
