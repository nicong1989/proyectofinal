import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import { SiAddthis } from "react-icons/si";
import { FaStar } from "react-icons/fa";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "./styles.css";

const Cardslayed = ({ slayed }) => {
  const [display, setDisplay] = useState("notdisplayed");
  const showButton = (e) => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideButton = (e) => {
    e.preventDefault();
    setDisplay("notdisplayed");
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <Card
      onMouseEnter={(e) => showButton(e)}
      onMouseLeave={(e) => hideButton(e)}
      sx={{
        maxWidth: 345,
        color: "#ffff",
        maxHeight: 600,
        backgroundColor: "#ffffff00",
        transition: "0.4s",
        "&:hover": {
          transform: "translateY(-0.5rem)",
          boxShadow: "0.5rem 0.75rem 1.5rem #17b978",
        },
      }}
    >
      <CardHeader
        title={<strong>{slayed.name}</strong>}
        subheader={<Typography color="#ffff">{slayed.model}</Typography>}
        sx={{ color: "white" }}
      />
      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          component="img"
          height="230"
          sx={{ maxWidth: "79%", filter: "saturate(250%)" }}
          image={slayed.image}
        />
      </CardContent>

      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" color="#ffff" sx={{ fontSize: "1.5rem" }}>
          {<strong>$ {slayed.price}</strong>}
        </Typography>
        <Typography variant="body2" color="rgba(247, 98, 5, 1)">
          {[...Array(slayed.rating)].map((index) => (
            <FaStar id={index + 1} key={index} />
          ))}
        </Typography>
      </CardContent>

      <CardActions
        disableSpacing
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <button onClick={handleShow} className={display}>
          <strong>COMPRAR</strong>
        </button>

        <IconButton
          onClick={handleShow}
          sx={{
            color: "#ffff",
            textShadow: "4px 4px 6px #ffff",
            "&:hover": {
              color: "#17b978",
            },
          }}
        >
          <SiAddthis />
        </IconButton>

        <Modal show={show} onHide={handleClose}>
          <Modal.Header
            closeButton
            style={{
              display: "flex",
              flexDirection: "column-reverse",
              padding: "1rem",
            }}
          >
            <Modal.Title>{slayed.name}</Modal.Title>
            <Modal.Title>
              <strong>{slayed.productType}</strong>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ display: "flex", alignItems: "center" }}>
            <CardMedia
              component="img"
              height="250"
              sx={{ maxWidth: "79%", filter: "saturate(250%)" }}
              image={slayed.image}
            />

            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography
                sx={{
                  color: "black",
                  textAlign: "justify",
                  fontSize: "0.8rem",
                }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  textAlign: "justify",
                  fontSize: "0.8rem",
                  marginTop: "1rem",
                }}
              >
                <strong>Unidades vendidas:</strong> {slayed.totalSales}
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  textAlign: "justify",
                  fontSize: "0.8rem",
                  marginTop: "1rem",
                }}
              >
                <strong>Tiempo de Oferta:</strong> {slayed.timeLeft}
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  textAlign: "justify",
                  fontSize: "0.8rem",
                  marginTop: "1rem",
                }}
              >
                <strong>Precio:</strong> {slayed.price}
              </Typography>

              <Typography
                sx={{
                  color: "black",
                  textAlign: "justify",
                  fontSize: "0.8rem",
                  marginTop: "1rem",
                }}
              >
                <strong>Total:</strong>
              </Typography>
            </CardContent>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button
              style={{ backgroundColor: "#17b978" }}
              onClick={handleClose}
            >
              Añadir al Carrito
            </Button>
          </Modal.Footer>
        </Modal>
      </CardActions>
    </Card>
  );
};

export default Cardslayed;
