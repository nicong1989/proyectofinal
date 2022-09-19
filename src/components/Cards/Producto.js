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

const CardProductos = ({ data, addToCart, addToFav }) => {
  const { img, name, price, rating, marca, model, totalSales, timeLeft } = data;

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
        padding: "auto",
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
        title={<strong>{name}</strong>}
        subheader={<Typography color="#ffff">{model}</Typography>}
        sx={{ color: "white" }}
      ></CardHeader>
      <CardContent
        sx={{
          position: "absolute",
          top: "0",
          cursor: "pointer",
          right: "0",
          margin: "auto",
        }}
      >
        <FaStar />
      </CardContent>

      <CardContent sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          component="img"
          height="230"
          sx={{ maxWidth: "79%", filter: "saturate(250%)" }}
          image={img}
        />
      </CardContent>

      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" color="#ffff" sx={{ fontSize: "1.5rem" }}>
          {<strong>$ {price}</strong>}
        </Typography>
        <Typography variant="body2" color="rgba(247, 98, 5, 1)">
          {[...Array(rating)].map((index) => (
            <FaStar id={index} key={index} />
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
        <button onClick={() => addToCart(data)} className={display}>
          <strong>COMPRAR</strong>
        </button>

        <IconButton
          onClick={handleShow}
          sx={{
            color: "#ffff",
            textShadow: "4px 4px 6px #ffff",
            "&:hover": {
              color: "#a98f3b",
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
            <Modal.Title>{name}</Modal.Title>
            <Modal.Title>
              <strong>{marca}</strong>
            </Modal.Title>
          </Modal.Header>

          <Modal.Body style={{ display: "flex", alignItems: "center" }}>
            <CardMedia
              component="img"
              height="230"
              sx={{ maxWidth: "40%", filter: "saturate(250%)" }}
              image={img}
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
                Gorras unisex Goorin Baseball The Freedom Eagle con detalle
                bordado de águila. Diseñadas en San Francisco. Composición: 57%
                poliéster, 43% algodón. Ajustables.
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  textAlign: "justify",
                  fontSize: "0.8rem",
                  marginTop: "1rem",
                }}
              >
                <strong>Unidades vendidas:</strong> {totalSales}
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  textAlign: "justify",
                  fontSize: "0.8rem",
                  marginTop: "1rem",
                }}
              >
                <strong>Tiempo de Oferta:</strong> {timeLeft}
              </Typography>
              <Typography
                sx={{
                  color: "black",
                  textAlign: "justify",
                  fontSize: "0.8rem",
                  marginTop: "1rem",
                }}
              >
                <strong>Precio:</strong> {price}
              </Typography>
            </CardContent>
          </Modal.Body>

          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Cerrar
            </Button>
            <Button
              style={{ backgroundColor: "#a98f3b" }}
              onClick={() => addToCart(data)}
            >
              Añadir al Carrito
            </Button>
          </Modal.Footer>
        </Modal>
      </CardActions>
    </Card>
  );
};

export default CardProductos;
