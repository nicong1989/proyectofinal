import React from "react";
import {
  Box,
  Row,
  Container,
  Column,
  FooterLink,
  Heading,
  Icon
} from "./FooterStyles";
import { FaFacebookSquare, FaInstagramSquare,FaTwitterSquare } from "react-icons/fa";
  
const Footer = () => {
  return (
    <Box>
    <Container>
        <Row>
          <Column>
            <Heading>AYUDA</Heading>
            <FooterLink href="#">FAQ</FooterLink>
            <FooterLink href="#">Medios de pago</FooterLink>
            <FooterLink href="#">Políticas de cambio</FooterLink>
            <FooterLink href="#">Terminos y Condiciones</FooterLink>
            <FooterLink href="#">Locales</FooterLink>
          </Column>
          <Column>

            

            <Heading id='contacto'>CATEGORIAS</Heading>

            <FooterLink href="#">Colecciones</FooterLink>
            <FooterLink href="#">Estilos</FooterLink>
            <FooterLink href="#">Pilusos</FooterLink>
            <FooterLink href="#">Boinas</FooterLink>
          </Column>
          
          <Column>
            <Heading>INSTITUCIONAL</Heading>
            <FooterLink href="#">
            Quiénes Somos
            </FooterLink>
            <FooterLink href="#">
            Políticas de Privacidad
            </FooterLink>
            <FooterLink href="#">
            Sustentabilidad
            </FooterLink>
            <FooterLink href="#">
            Protocolos COVID-19
            </FooterLink>
          </Column>
        </Row>
      <Icon>
        <FaFacebookSquare/>
        <FaInstagramSquare/>
        <FaTwitterSquare/>
      </Icon>
      </Container>
    </Box>
  );
};
export default Footer;