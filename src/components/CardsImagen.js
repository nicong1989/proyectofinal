import React from "react";
import styled from "styled-components";


const MyFigure = styled.div`
 
  width: 60%;
  height: 30%;
  text-align: center;
  margin: 20px;
  &:hover {
    box-shadow: 5px 5px 8px;
    transform: translateY(-4px);
    transition: 0.5 all ease;

  }
  `


const Tarjeta = () => {
  return (
 <MyFigure>
    <figcaption>
        <h2> Elemento</h2>
        <p>lorem</p>
      </figcaption>
 </MyFigure>
  );
};
export default Tarjeta;
