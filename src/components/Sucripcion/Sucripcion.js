import React from "react";
import { Box } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import { makeStyles } from "@mui/styles";
import Swal from "sweetalert2";
import "animate.css";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

const useStyles = makeStyles({
  titulo: {
    color: "#ffff",
    fontWeight: "bolder",
    textShadow: "4px 4px 6px #000000",
  },
  texto: {
    color: "#ffff",

    textShadow: "4px 4px 6px #000000",
  },
});

const Sucripcion = (props) => {
  const mostrarAlerta = () => {
    Swal.fire({
      title: "Te has suscripto correctamente",
      showClass: {
        popup: "animate__animated animate__fadeInDown",
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp",
      },
    });
  };

  const classes = useStyles();
  function transform(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  }

  return (
    <>
      <Box
        sx={{
          width: 1,
          height: 300,
          bgcolor: "black",
          color: "white",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "1rem",
          backgroundImage:
            'url("https://www.goorinbros.com.ar/media/wysiwyg/sliders/gooring_BannersAbril-03-min.jpg")',
        }}
      >
        <h2 className={classes.titulo}>{props.titulo}</h2>
        <h6 className={classes.texto}>{props.texto}</h6>

        <FormControl
          sx={{
            width: "30rem",

            bgcolor: "white",
            color: "white",
            display: "flex",
            marginTop: "30px",
          }}
        >
          <Input
            placeholder="Please enter you mail"
            sx={{
              border: "1px solid #0000",
            }}
            type="email"
            id="email"
            required="required"
            data-validation-required-message="Por favor, ingresa tu mail"
          />
        </FormControl>

        <Button
          variant="contained"
          endIcon={<SendIcon />}
          onClick={() => mostrarAlerta()}
          sx={{
            width: "10rem",
            bgcolor: "black",
            color: "white",
            marginTop: "30px",
            "&:hover": {
              background: "#17b978",
            },
          }}
        >
          Sucribirse
        </Button>
      </Box>
    </>
  );
};

export default Sucripcion;
