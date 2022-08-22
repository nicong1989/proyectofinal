import React from 'react';
import Box from '@mui/material/Box';
import { Typography } from "@mui/material";


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
            opacity: [0.9, 0.8, 0.7],
          },
          transition: '.5s ',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
         

        }}>
        <Typography sx={{ fontSize: '2rem' }} color="text.secondary">
          {props.titulo} <strong>{props.coleccion}</strong>
        </Typography>
        
        

      </Box>

   
  )
}

export default Titulo
