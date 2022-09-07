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
        backgroundColor: 'black',
        transition: '.5s ',
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:{ xs: '1rem', sm: '0.5rem', md: '0.5rem',lg:'0rem', xl:'0rem' },
        marginBottom:{ xs: '1rem', sm: '0.5rem', md: '0.5rem',lg:'0rem', xl:'0rem' }

      }}>
      <Typography sx={{ fontSize: '30px' }} color="white">
        {props.titulo}
      </Typography>


      <Typography sx={{ fontSize: '30px', color: '#17b978', }}>
        <FaChevronDown /><strong>{props.coleccion}</strong>
      </Typography>



    </Box>


  )
}

export default Titulo
