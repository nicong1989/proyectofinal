import React from "react";
import "./styleProductos.css";
import { useState } from "react";




import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
} from "react-icons/fa";




const CardProductos = ({ productos }) => {
  const [display, setDisplay] = useState("notdisplayed");
  const showButton = e => {
    e.preventDefault();
    setDisplay("displayed");
  };

  const hideButton = e => {
    e.preventDefault();
    setDisplay("notdisplayed");
  };

  const [isRed, setIsRed] = useState(true);

  return (
    <>
      <div className="productList" onMouseEnter={e => showButton(e)}
        onMouseLeave={e => hideButton(e)}>
        <div key={productos.id} className="productCard">
          <img
            src={productos.image}
            alt="product-img"
            className="productImage"
          ></img>

          <FaShoppingCart className={"productCard__cart"}/> 
          <FaRegBookmark className={"productCard__wishlist"} style={{ color: isRed ? "black" : "red" }} onClick={() => {
          setIsRed(!isRed); }}/>
          <FaFireAlt className={"productCard__fastSelling"} />

          <div className="productCard__content">
            <h3 className="productName">{productos.name}</h3>
            <div className="displayStack__1">
              <div className="productPrice">{productos.price}</div>
              <div className="productSales">
                {productos.totalSales} units sold
              </div>
            </div>
            <div className="displayStack__2">
              <div className="productRating">
                {[...Array(productos.rating)].map((index) => (
                  <FaStar id={index + 1} key={index} />
                ))}
              </div>
              <div className="productTime">
                {productos.timeLeft} days left
              </div>
            </div>
          </div>
          <button className={display}><strong>COMPRAR</strong></button>
        </div>
      </div>


      


    </>
  );
};

export default CardProductos;
