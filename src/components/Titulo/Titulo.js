import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";
import {
  FaChevronDown,

} from "react-icons/fa"

const Titulo = (props) => {

  
  return (

    <Box
      sx={{
        width: 1,
        height: "10vh",
        backgroundColor: '#FFFFFF',
        transition: '.5s ',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:{ xs: '1rem', sm: '0.5rem', md: '0.5rem',lg:'0.5rem', xl:'0.5rem' },
        marginBottom:{ xs: '1rem', sm: '0.5rem', md: '0.5rem',lg:'0.5rem', xl:'0.5rem' }

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
