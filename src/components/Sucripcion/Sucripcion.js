import React from "react";
import { Box } from "@mui/system";
import FormControl from "@mui/material/FormControl";
import Input from "@mui/material/Input";
import { makeStyles } from "@mui/styles";
import Swal from "sweetalert2";
import "animate.css";
import SendIcon from "@mui/icons-material/Send";
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

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

        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
                 
          <Button variant="primary" type="submit"  onClick={() => mostrarAlerta()}>
            Suscribirse
          </Button>
        </Form>
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
