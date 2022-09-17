
import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Reproductor = styled.div `
          width: 32%;
          height: 90%;
          text-align: center;
          background-color: #E5E5E5;
          color: red;
          margin: 8px;
          border-radius: 10px  ; 
          
          @media(max-width: 767px){
           width: 100%;
          }
`


 const ReproductorVideo = ()=>{
    return(
        <Reproductor>
            <ReactPlayer
                url="https://youtube.com/shorts/Sl-uEGorlE8?feature=share"
                width= "100%"
                height ="100%"
                controls
                playing
                muted
                
                
                loop
                playbackRate={1.75}
            />
      </Reproductor>
    )
}
export default ReproductorVideo