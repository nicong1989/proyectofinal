import React from "react";
import styled from "styled-components";
//import CarsImagen from "./CardsImagen.js";
import gorras from "./assets/image/image.js"

import { motion } from 'framer-motion'


const ComponentDiv= styled.div `
     // border: solid 1px black ;
      width: 32%;
      height: 90%;
      text-align: center;
      background-color: white;
      color: grey;
      margin: auto;
      border-radius: 10px;

      display: flex;
      flex-direction: column;
      align-items:center;

`



export  const ComponenteDiv = ()=>{
  return(
          <ComponentDiv>
              <motion.div className="slider-container">
                  <motion.div className="slider" drag='y' dragConstraints={{bottom:0 , top:-3800}}>
                  {
                        gorras.map(image => (
                        // eslint-disable-next-line jsx-a11y/alt-text
                             <motion.div className="item"><img src={image}/></motion.div>   
                     ))   
                  }
                  </motion.div>
               
              </motion.div>
          </ComponentDiv>
  )
}
     
     