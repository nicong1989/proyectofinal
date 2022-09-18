import React from "react";
import Box from "@mui/material/Box";
import { Typography } from "@mui/material";
import { FaChevronDown } from "react-icons/fa";

const Titulo = (props) => {
  return (
    <Box
      sx={{
        width: 1,
        height: "20vh",
        backgroundColor: "black",
        transition: ".5s ",
        display: "flex",
        flexDirection: { xs: "column", sm: "row" },
        alignItems: "center",
        justifyContent: "center",
        marginTop: {
          xs: "0rem",
          sm: "0rem",
          md: "0.5rem",
          lg: "0rem",
          xl: "0rem",
        },
        marginBottom: {
          xs: "0rem",
          sm: "0rem",
          md: "0rem",
          lg: "0rem",
          xl: "0rem",
        },
      }}
    >
      <Typography sx={{ fontSize: "30px" }} color="white">
        {props.titulo}
      </Typography>

      <Typography sx={{ fontSize: "30px", color: "#a98f3b" }}>
        <FaChevronDown />
        <strong>{props.coleccion}</strong>
      </Typography>
    </Box>
  );
};

export default Titulo;
