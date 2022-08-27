import React from "react";
import { useState } from "react";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { FaShoppingCart, FaStar } from "react-icons/fa";
import { SiAddthis } from "react-icons/si";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

const CardProductos = ({ productos }) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [isRed, setIsRed] = useState(true);

  return (
    <Card
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
        action={
          <IconButton
            aria-label="settings"
            sx={{ color: "white", textShadow: "4px 4px 6px #000000" }}
          >
            <MoreVertIcon />
          </IconButton>
        }
        title={<strong>{productos.name}</strong>}
        subheader={<Typography color="#ffff">{productos.model}</Typography>}
        sx={{ color: "white" }}
      />
      <CardMedia
        component="img"
        height="150"
        sx={{ maxWidth: "79%", filter: "saturate(250%)" }}
        image={productos.image}
      />
      <CardContent
        sx={{
          display: "flex",
          justifyContent: "space-between",
          textShadow: "4px 4px 6px #000000",
        }}
      >
        <Typography
          variant="body2"
          color="#ffff"
          sx={{ textShadow: "4px 4px 6px #000000" }}
        >
          {<strong>{productos.totalSales}</strong>} units sold
        </Typography>
        <Typography variant="body2" color="#ffff">
          {<strong>{productos.timeLeft}</strong>} days left
        </Typography>
      </CardContent>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" color="#ffff" sx={{ fontSize: "1.5rem" }}>
          {<strong>{productos.price}</strong>}
        </Typography>
        <Typography variant="body2" color="rgba(247, 98, 5, 1)">
          {[...Array(productos.rating)].map((index) => (
            <FaStar id={index + 1} key={index} />
          ))}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton
          aria-label="add to favorites"
          style={{
            textShadow: "4px 4px 6px #000000",
            color: isRed ? "#ffff" : "black",
          }}
          onClick={() => {
            setIsRed(!isRed);
          }}
        >
          <FavoriteIcon />
        </IconButton>
        <IconButton
          aria-label="buy"
          sx={{
            color: "#ffff",
            textShadow: "4px 4px 6px #000000",
            "&:hover": {
              color: "#39FF14",
            },
          }}
        >
          <FaShoppingCart />
        </IconButton>
        <ExpandMore
          onClick={handleOpen}
          sx={{
            color: "#ffff",
            textShadow: "4px 4px 6px #ffff",
            "&:hover": {
              color: "#39FF14",
            },
          }}
        >
          <SiAddthis />
        </ExpandMore>
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "background.paper",
                boxShadow: 24,
                p: 4,
              }}
            >
              <CardMedia
                component="img"
                height="150"
                sx={{ maxWidth: "79%", filter: "saturate(250%)" }}
                image={productos.image}
              />
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {productos.name}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {productos.price}
              </Typography>
              <Button onClick={handleClose}>Cerrar</Button>
            </Box>
          </Modal>
        </div>
      </CardActions>
    </Card>
  );
};

export default CardProductos;
