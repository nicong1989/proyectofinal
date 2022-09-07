
import { Box } from "@mui/system";
import { Container } from "@mui/material";

const CartItem = ({ data, deleteFromCart, addToCart }) => {
  let { img, name, price, quantity } = data;


  return (
    <Container>
      <Box
        sx={{
          width: 1,
          height: 50,
          display: "flex",
          justifyContent: "space-between",
          fontSize: "10px"
        }}
      >
        <button onClick={() => deleteFromCart(data, true)}>X</button>

        <img src={img} alt="" />

        <span>{name}</span>

        <button
          onClick={() => deleteFromCart(data)}
          
        >
          
        </button>

        <input
          className="mx-2 border text-center w-8"
          type="text"
          value={quantity}
        />

        <button
          onClick={() => addToCart(data)}
         
        >
         
        </button>

        <span>
          ${price}
        </span>
        <span>
          {" "}
          ${price * quantity}
        </span>
      </Box>
    </Container>
  );
};
export default CartItem;
