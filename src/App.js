import React from "react";
import Suscripcion from "./components/Suscripcion/Suscripcion";
import Productos from "./components/Cards/Productos";
import Titulo from "./components/Titulo/Titulo";
import Cart from "./components/Cart";
import Aviso from "./components/Aviso";
import Pruebacart from "./components/pruebacart";
import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Header from "./components/Header/Header";
import Gallery from "./components/Carousel/Carousel";
import "./App.css";
import ContactUs from "./components/ContactUs/ContactUs";
import Footer from "./components/Footer/Footer";
import Suscripcion from "./components/Sucripcion/Suscripcion";
import Productos from "./components/Cards/Productos";
import Titulo from "./components/Titulo/Titulo";
import Galeria from "./components/Galeria.js";
import Titulo1 from "./components/Titulo1.js";
import "./components/Carousel/carousel.css";

const App = () => {
  return (
    <>
      <Aviso />
      <Pruebacart />
      <Titulo titulo="COLECCIÓN" coleccion="ANIMAL FARM" />

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
      <Cart />
      <ContactUs />
      <Footer />
    </>
  );
};

export default App;
