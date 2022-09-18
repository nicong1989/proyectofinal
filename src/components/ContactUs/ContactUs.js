import React from "react";
import {
  Box,
  Container,
  Map,
  Row,
  Column,
  Text
} from "./ContactUsStyles";
import Maps from "./Maps";

  
const ContactUs = () => {
  return (
    <Box>
      <Container>
        <h1>CONTACTANOS</h1>
      </Container>
      <Map>
      <Maps/>
      </Map>
      <Row>
        <Column>
        <Text>Tel.: 0341-153456782</Text>
        <Text>Dirección: maipu 3334</Text>
        <Text>Email: grupo1@gmail.com</Text>
        </Column>
        <Column>
        <Text>Lunes a Viernes</Text>
        <Text>De 8hs a 17hs</Text>
        </Column>
      </Row>
    </Box>
  );
};
export default ContactUs;