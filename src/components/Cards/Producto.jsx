import React from "react";
import "./styleProductos.css";

import {
  FaShoppingCart,
  FaRegBookmark,
  FaStar,
  FaFireAlt,
} from "react-icons/fa";

const CardProductos = ({ productos }) => {
  return (
    <>
     
        
          <div className="productList">
            <div key={productos.id} className="productCard">
              <img
                src={productos.image}
                alt="product-img"
                className="productImage"
              ></img>

              <FaShoppingCart className={"productCard__cart"} />
              <FaRegBookmark className={"productCard__wishlist"} />
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
            </div>
          </div>
        
      
    </>
  );
};

export default CardProductos;
