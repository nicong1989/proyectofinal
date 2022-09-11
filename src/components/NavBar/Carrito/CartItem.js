
import { Box } from "@mui/system";
import {
  Container,
  ButtonX
} from "./CartItemStyle"

const CartItem = ({ data, deleteFromCart, addToCart }) => {
  let { img, name, price, quantity } = data;


  return (
    <Container>
      
        <ButtonX onClick={() => deleteFromCart(data, true)}>X</ButtonX>

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
         +
        </button>

       
        <span>
          {" "}
          ${price * quantity}
        </span>
      
    </Container>
  );
};
export default CartItem;
