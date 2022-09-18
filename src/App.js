import React from "react";
import Suscripcion from "./components/Suscripcion/Suscripcion";
import Aviso from "./components/aviso/Aviso";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Gallery from "./components/Carousel/Carousel";
import "./App.css";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import "./components/Carousel/carousel.css";
import Titulo from "./components/Titulo/Titulo";
import Productos from "./components/Cards/Productos";
import Titulo1 from "./components/section_Gabriel/Titulo1";
import Galeria from './components/section_Gabriel/Galeria'




const App = () => {
  return (
    <>
      <Aviso />
      <Header />
      <NavBar />
      <Gallery />
      <Titulo1 />
      <Galeria />
      <Titulo titulo="COLECCIÓN" coleccion="ANIMAL FARM" />
      <Productos />
      <Titulo titulo="COLECCIÓN" coleccion="SLAYED" />
      <Productos />
      <Suscripcion
        titulo="MANTENETE AL TANTO DE NUESTROS DESCUENTOS"
        texto="Suscribite a nuestro newsletter y enteráte de todos los beneficios"
      />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;