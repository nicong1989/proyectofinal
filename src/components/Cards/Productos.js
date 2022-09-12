import React, { useEffect, useState } from "react";
import axios from "axios";
import Producto from "./Producto";
import { Autoplay, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Container from "@mui/material/Container";
import { TYPES } from "../actions/cartActions";
import { cartReducer, cartInitialState } from "../reducer/cartReducer";
import { useReducer } from "react";
import Box from "@mui/material/Box";
const ListProductos = () => {
  const [state, dispatch] = useReducer(cartReducer, cartInitialState);
  const [isLoading, setLoading] = useState(true);
  const { products, cart } = state;

  const updateState = async () => {
    const productsURL = "http://localhost:3002/products";
    const cartURL = " http://localhost:3002/cart";
    const resProducts = await axios.get(productsURL);
    const resCart = await axios.get(cartURL);
    const newProduct = await resProducts.data;
    const newCartItem = await resCart.data;
    setLoading(false);
    dispatch({
      type: TYPES.READ_STATE,
      payload: [newProduct, newCartItem],
    });
  };
  useEffect(() => {
    updateState();
  }, []);
  const deleteFromCart = (data, all = false) => {
    
    let itemInCart = state.cart.find(
      (item) => item.id === data.id
    );
    let endpoint = ` http://localhost:3002/cart/${data.id}`;

    if (all || data.quantity === 1) {
      axios.delete(endpoint).then(console.log("ok"));
      dispatch({ type: TYPES.REMOVE_ALL_PRODUCTS, payload: data.id });
    } else {
      let options = {
        method: "PUT",
        url: endpoint,
        data: { ...data, quantity: itemInCart.quantity - 1 },
      };
      axios(options);
      dispatch({ type: TYPES.REMOVE_ONE_PRODUCT, payload: data.id });
    }
  };

  const addToCart = (data) => {
    
    let itemInCart = state.cart.find(
      (item) => item.id === data.id
    );
      console.log(itemInCart)
    if (itemInCart) {
      let endpoint = `http://localhost:3002/cart/${data.id}`;
      let options = {
        method: "PUT",
        url: endpoint,
        data: { ...data, quantity: itemInCart.quantity + 1 },
      };
      axios(options);
    } else {
      axios({
        method: "POST",
        url: `http://localhost:3002/cart`,
        data: { ...data, quantity: 1 },
      }).then(console.log(data));
    }

    dispatch({ type: TYPES.ADD_TO_CART, payload: data });

  };

  let count = 0;

 
  state.cart.map((item) => {
    count = count + item.quantity;
    document.getElementById("cartIng").innerHTML = count;
   
  });

  if(isLoading){
    return (
      <>
        <h1>Cargando...</h1>
      </>
    )
  }

  return (
    <>
      <Box
        id="productos"
        sx={{
          maxWidth: "1353px",
          height: "35rem",
          backgroundColor: "black",
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container
          sx={{
            backgroundImage:
              'url("https://www.goorinbros.com.ar/skin/frontend/sns_sport/goorin/images/media/bg_suscribe.jpg")',
            borderRadius: "25px",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            minHeight: "500px",
            paddingTop: "20px",
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
            {products.map((product, index) => (
              <SwiperSlide
              >
                <Producto
                  key={index}
                  data={product}
                  addToCart={addToCart}
                  deleteFromCart={deleteFromCart}
                  cart={
                    cart.find(
                      (element) => element.id === product.id
                    ) || 0
                  }
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </Container>
        <div className="pagination" />
      </Box>
    </>
  );
};

export default ListProductos;
