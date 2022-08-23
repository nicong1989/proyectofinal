import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import {
  FaChevronDown,

} from "react-icons/fa"

const Titulo = (props) => {

  function transform(value) {
    return value <= 1 && value !== 0 ? `${value * 100}%` : value;
  }
  return (

    <Box
      sx={{
        width: 1,
        height: "10vh",
        backgroundColor: '#FFFFFF',
        '&:hover': {
          backgroundColor: '#E3DEDD',


        },
        transition: '.5s ',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',


      }}>
      <Typography sx={{ fontSize: '30px' }} color="text.secondary">
        {props.titulo}
      </Typography>


      <Typography sx={{ fontSize: '30px', color: '#2c5364', }}>
        <FaChevronDown /><strong>{props.coleccion}</strong>
      </Typography>



    </Box>


  )
}

export default Titulo
