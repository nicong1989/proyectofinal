import React from "react";
import { Box } from "@mui/system";
import { makeStyles } from "@mui/styles";
import "animate.css";
import ContactForm from "../pruebaFormulario/ContactForm"

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
            'url("https://www.goorinbros.com.ar/media/wysiwyg/sliders/gooring_BannersAbril-03-min.jpg")',
        }}
      >
        <h2 className={classes.titulo}>{props.titulo}</h2>
        <h6 className={classes.texto}>{props.texto}</h6>
        <ContactForm />
      </Box>
    </>
  );
};

export default Sucripcion;
