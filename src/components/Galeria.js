import React from "react";
import { ComponenteDiv } from "./ComponenteDiv";
import ReproductorVideo from "./RepVideo.js"

const Galeria = () => {
  return (
    <section
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",

        boxShadow: "0px 2.98256px 7.4564px rgba(0, 0, 0, 0.5)",
        width: "100 vh",
        height: "600px",
        textAlign: "center",
        backgroundColor: "#EFF5FB",
        color: "red",
        margin: "10px",
      }}
    >
      <ComponenteDiv/>

      <ReproductorVideo/>
   
      <ComponenteDiv/>
    
    </section>
  );
};

export default Galeria;
