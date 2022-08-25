import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Container from "./Container"
import Box from '@mui/material/Box';
const URL = "http://localhost:3002/productos";

export default function MyVerticallyCenteredModal(props, { productos }) {
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton />

      <Box>
        {list?.map((productos, index) => (
          <Box key={index}>
            <Container productos={productos} />
          </Box>
        ))}
      </Box>

      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
