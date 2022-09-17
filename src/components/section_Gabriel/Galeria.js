import React from "react";
import { ComponenteDiv } from "./ComponenteDiv";
import ReproductorVideo from "./RepVideo.js"
import styled from "styled-components";

const Galeria= styled.section`
        display: flex;
        flex-direction : row;
        justify-content: space-between;
        box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.5);
        width: 100 vh;
        height: 600px;
        text-align: center;
        background-image: linear-gradient(rgb(13, 17, 28), rgb(211, 26, 20));
        
        color: red;
        margin: 10px;
        @media(max-width: 767px){
            flex-direction: column;
           
            }
        `
export const  Gallery = () => {
  return (
    <Galeria>
          <ComponenteDiv className="visible"/>

          <ReproductorVideo/>

          <ComponenteDiv/>
    </Galeria>
  );
};

export default Gallery;