import React, { useEffect, useState } from "react";
import axios from "axios";
import Producto from "./ProductoSlayed";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import Container from '@mui/material/Container';



const ListProductos = () => {
  const URL = "http://localhost:3002/slayed";

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
                'url("https://www.goorinbros.com.ar/skin/frontend/sns_sport/goorin/images/media/bg_suscribe.jpg")',
              borderRadius:"25px",
              backgroundRepeat:"no-repeat",
              backgroundSize:"cover",
              minHeight: "500px",
              paddingTop: "20px"
  
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
            {list?.map((slayed, index) => (
              <SwiperSlide key={index}>
                <Producto slayed={slayed} />
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
