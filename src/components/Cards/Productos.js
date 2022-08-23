import React, { useEffect, useState } from "react";
import axios from "axios";
import Producto from "./Producto";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./producto.css";
import Container from "@mui/material/Container";

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
    <>
      <Container
        sx={{
          backgroundColor: "#ffff",
          display: "flex",
          minHeight: "420px",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            backgroundImage:
              'url("https://www.goorinbros.com.ar/media/wysiwyg/sliders/gooring_BannersAbril-01-min.jpg")',
            
            minHeight: "500px",
            paddingTop:"50px"
            
          }}
        >
          <Swiper  
            modules={[Pagination, Autoplay]}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              el: ".pagination",
              clickable: true,
            }}
            slidesPerView={4}
            breakpoints={{
              "@0.00": {
                slidesPerView: 1,
                spaceBetween: 25,
              },
              "@0.50": {
                slidesPerView: 1.25,
                spaceBetween: 25,
              },
              "@1.00": {
                slidesPerView: 2,
                spaceBetween: 25,
              },
              "@1.25": {
                slidesPerView: 2.5,
                spaceBetween: 20,
              },
              "@1.50": {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              "@1.75": {
                slidesPerView: 4,
                spaceBetween: 20,
              },
            }}
          >
            {list?.map((productos, index) => (
              <SwiperSlide key={index}>
                <Producto productos={productos} />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
        <div className="pagination" />
      </Container>
    </>
  );
};

export default ListProductos;
