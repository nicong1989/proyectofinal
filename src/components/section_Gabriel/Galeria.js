import { style } from "@mui/system";
import React from "react";
import styled from "styled-components";
import { ComponenteDiv } from "./ComponenteDiv";
import ReproductorVideo from "./RepVideo.js"

const Section = styled.section`
      background-image: url(https://www.esquire.com/es/moda-hombre/a19683184/gorras-animales-marca-goorin-brothers/); 
	    background-size: cover;/*que la imagen cubra todo */      
        
        display: flex; 
        flex-direction: row;
        justify-content: space-between;

        box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.5);
        width: 100 vh;
        height: 600px;
        text-align: center;
       // background-color: #EFF5FB;
        color: red;
        margin: 10px;
       
`

const Galeria = () => {
  return (
    <Section>
       <ComponenteDiv/>

       <ReproductorVideo/>

       <ComponenteDiv/>
    
    </Section>
  );
};

export default Galeria;
