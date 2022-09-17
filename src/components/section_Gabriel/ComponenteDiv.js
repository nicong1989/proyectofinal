import React from "react";
import styled from "styled-components";
//import CarsImagen from "./CardsImagen.js";
import gorras from "./assets/image/image.js"
import gorras from "../section_Gabriel/assets/image/image.js"
import "../section_Gabriel/style/style.css"
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
      background-image: linear-gradient(rgb(108, 110, 114), rgb(218, 209, 209));
      flex-direction: column;
      align-items:center;
      overflow-y: hidden;
      @media(max-width: 767px){
           width: 100%;
      }
`



export  const ComponenteDiv = ()=>{
  return(
          <ComponentDiv>
              <motion.div className="slider-container">
                  <motion.div className="slider" drag='y' dragConstraints={{bottom:0, top : -4600}}>
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
     
     