import React from 'react';
import MyVerticallyCenteredModal from './MyVerticallyCenteredModal';
import Button from 'react-bootstrap/Button';
import { SiAddthis } from "react-icons/si";
import { useEffect, useState } from "react";
import axios from "axios";


const PruebaModal = ({productos}) => {
    const [modalShow, setModalShow] = React.useState(false);
    const URL = "http://localhost:3002/productos";

  const getData = async () => {
    const response = axios.get(URL);
    return response;
  };

  const [list, setList] = useState([]);

  useEffect(() => {
    getData().then((response) => {
      setList(response.data);
    });
  }, []);


    return (
      <>
        <Button style={{backgroundColor:'black', border:'none'}} onClick={() => setModalShow(true)}>
        <SiAddthis />
        
        </Button>
      
      
        <MyVerticallyCenteredModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
          
      </>
    );
}

export default PruebaModal