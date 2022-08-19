import React, { useEffect, useState } from "react";
import axios from "axios";
import CardProductos from "./CardProductos";
import { Container, Form, Modal, Row } from "react-bootstrap";

const ListProductos = () => {
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
    <Container className="mb-5">
      <Row>
        {list.map((productos, index) => (
          <CardProductos key={index} productos={productos} />
        ))}
      </Row>
    </Container>
  );
};

export default ListProductos;
