import React from "react";
import "./styleProductos.css";
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
import { SiAddthis } from "react-icons/si";

import { FaShoppingCart, FaStar } from "react-icons/fa";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));


const CardProductos = ({ productos }) => {
  const [display, setDisplay] = useState("notdisplayed");
  

  const [isRed, setIsRed] = useState(true);

  return (
    <Card sx={{ maxWidth: 345, maxHeight: 600, backgroundColor:'#fffffff2',transition: '0.4s', '&:hover': {
      transform: 'translateY(-0.5rem)',
      boxShadow: '0.5rem 0.75rem 1.5rem #bbbbbb',
   }, }}>
      <CardHeader
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={productos.name}
        subheader={productos.model}
      />
      <CardMedia component="img" height="150" image={productos.image} sx={{ opacity: '0.8'}}/>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" color="text.secondary">
          {productos.totalSales} units sold
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {productos.timeLeft} days left
        </Typography>
      </CardContent>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" color="text.secondary">
          {productos.price}
        </Typography>
        <Typography variant="body2" color="rgba(247, 98, 5, 1)">
          {[...Array(productos.rating)].map((index) => (
            <FaStar id={index + 1} key={index} />
          ))}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" style={{ color: isRed ? "grey" : "red" }} onClick={() => {
            setIsRed(!isRed);
          }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="buy">
          <FaShoppingCart />
        </IconButton>
        <ExpandMore>
          <SiAddthis />
        </ExpandMore>
      </CardActions>
    </Card>
  );
};

export default CardProductos;




