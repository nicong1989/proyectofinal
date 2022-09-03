
import { Box } from "@mui/system";
import { Container } from "@mui/material";

const CartItem = ({ data, deleteFromCart, addToCart }) => {
  let { img, name, price, quantity } = data;


  return (
    <Container>
      <Box
        sx={{
          width: 1,
          height: 100,
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <button onClick={() => deleteFromCart(data, true)}>X</button>

        <img src={img} alt="" />

        <span className="font-bold text-sm">{name}</span>

        <svg
          onClick={() => deleteFromCart(data)}
          className="fill-current text-gray-600 w-3"
          viewBox="0 0 448 512"
        >
          <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <input
          className="mx-2 border text-center w-8"
          type="text"
          value={quantity}
        />

        <svg
          onClick={() => addToCart(data)}
          className="fill-current text-gray-600 w-3"
          viewBox="0 0 448 512"
        >
          <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
        </svg>

        <span className="text-center w-1/5 font-semibold text-sm">
          ${price}
        </span>
        <span className="text-center w-1/5 font-semibold text-sm">
          {" "}
          ${price * quantity}
        </span>
      </Box>
    </Container>
  );
};
export default CartItem;
