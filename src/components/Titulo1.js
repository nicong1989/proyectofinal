import React from "react";
import styled from "styled-components";

const Titular  = styled.div `
       
        box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
        width: 100% ;
        height: 120px;
        text-align: center;
        font-weight: bold;
        background-image: linear-gradient(rgb(13, 17, 28), rgb(211, 26, 20));
        color:white;
        margin:0 auto;
`



const Titulo1= () =>{
    return <Titular>
        <h1 > THE FARM GOORIN BROS.</h1>   
    </Titular>
}
export default Titulo1;