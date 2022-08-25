import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import React from 'react';
import { useEffect, useState } from "react";
import axios from "axios";




export default function MyVerticallyCenteredModal(props, {productos}) {
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
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Detalles del Articulo
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>{productos.name}</h4>
        <p>
          Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
          dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac
          consectetur ac, vestibulum at eros.
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}
