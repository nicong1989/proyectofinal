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


const CardProductos = ({ slayed }) => {
  const [display, setDisplay] = useState("notdisplayed");
  

  const [isRed, setIsRed] = useState(true);

  return (
    <Card sx={{ maxWidth: 345, color:"#ffff", maxHeight: 600, backgroundColor:'#ffffff00',transition: '0.4s', '&:hover': {
      transform: 'translateY(-0.5rem)',
      boxShadow: '0.5rem 0.75rem 1.5rem #17b978',
   }, }}>
      <CardHeader 
        action={
          <IconButton aria-label="settings" sx={{color:"white",textShadow: "4px 4px 6px #000000"}}>
            <MoreVertIcon />
          </IconButton>
        }
        title={<strong>{slayed.name}</strong>}
        subheader = {<Typography color="#ffff" >{slayed.model}</Typography>}
        sx={{color:"white"}}
      />
      <CardMedia component="img" height="150" sx={{ maxWidth:"79%", filter: "saturate(250%)" }}image={slayed.image}/>
      <CardContent sx={{ display: "flex", justifyContent: "space-between", textShadow: "4px 4px 6px #000000" }}>
        <Typography variant="body2" color="#ffff" sx={{textShadow: "4px 4px 6px #000000"}} >
        {<strong>{slayed.totalSales}</strong>} units sold
        </Typography>
        <Typography variant="body2" color="#ffff">
        {<strong>{slayed.timeLeft}</strong>} days left
        </Typography>
      </CardContent>
      <CardContent sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant="body2" color="#ffff" sx={{fontSize:"1.5rem"}}>
        {<strong>{slayed.price}</strong>}
        </Typography>
        <Typography variant="body2" color="rgba(247, 98, 5, 1)">
          {[...Array(slayed.rating)].map((index) => (
            <FaStar id={index + 1} key={index} />
          ))}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites" style={{ color: isRed ? "#ffff" : "red", textShadow: "4px 4px 6px #000000" }} onClick={() => {
            setIsRed(!isRed);
          }}>
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="buy" sx={{color:"#ffff",textShadow: "4px 4px 6px #000000"}}>
          <FaShoppingCart />
        </IconButton >
        <ExpandMore sx={{color:"#ffff",textShadow: "4px 4px 6px #000000"}}>
          <SiAddthis />
        </ExpandMore>
      </CardActions>
    </Card>
  );
};

export default CardProductos;




