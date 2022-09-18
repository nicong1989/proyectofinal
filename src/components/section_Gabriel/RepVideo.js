import React from "react";
import ReactPlayer from "react-player";
import styled from "styled-components";

const Reproductor = styled.div`
  width: 50%;
  height: 570px;
  text-align: center;
  background-color: #e5e5e5;
  color: red;
  margin: 8px;
  border-radius: 10px;
  display: flex;
  justify-content: space-around;

  @media (max-width: 767px) {
    width: 100%;
  }
`;

const ReproductorVideo = () => {
  return (
    <Reproductor>
      <ReactPlayer
        url="https://youtube.com/shorts/bCfd4Zl3PCA?feature=share"
        width="100%"
        height="100%"
        controls
        playing
        muted
        loop
        playbackRate={1.75}
      />
     
    </Reproductor>
  );
};
export default ReproductorVideo;
