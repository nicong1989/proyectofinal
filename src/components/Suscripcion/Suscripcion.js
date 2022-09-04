import React from "react";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import "animate.css";
import ContactForm from "../Formulario/ContactForm"

const useStyles = makeStyles({
  titulo: {
    color: "#ffff",
    fontWeight: "bolder",
    textShadow: "4px 4px 6px #000000",
    paddingTop: '2rem',
    

  },
  texto: {
    color: "#ffff",
    textShadow: "4px 4px 6px #000000",
  },
});

const Sucripcion = (props) => {


  const classes = useStyles();


  return (
    <>
      <Box
        sx={{
          width: 1,
          height: 380,
          bgcolor: "black",
          color: "white",
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          marginTop: "1rem",
          alignItems:'center',
          justifyContent:'center',
          backgroundImage:
            'url("https://c4.wallpaperflare.com/wallpaper/138/353/177/women-model-brunette-long-hair-women-outdoors-straw-cowboy-hats-boots-black-outfits-sitting-clara-alonso-wallpaper-preview.jpg")',
          backgroundSize:'cover'
        }}
        id='suscripcion'
      >
<<<<<<< HEAD:src/components/Suscripcion/Suscripcion.js
        <h2 className={classes.titulo} id='suscripcion'>{props.titulo}</h2>
=======
        <h2 className={classes.titulo} >{props.titulo}</h2>
>>>>>>> c53e3d0d89f1981aa98a4e7b1978b89e4910f21c:src/components/Sucripcion/Sucripcion.js
        <h6 className={classes.texto}>{props.texto}</h6>
        <ContactForm />
      </Box>
    </>
  );
};

export default Sucripcion;
