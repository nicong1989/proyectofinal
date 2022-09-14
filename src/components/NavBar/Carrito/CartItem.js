
import { Box } from "@mui/system";
import {
  Container,
  ButtonX,
  Detalles,
  Cantidad,
  PrecioXUnid,
  Image,
  Input,
  Parra,
  Total
} from "./CartItemStyle"

const CartItem = ({ data, deleteFromCart, addToCart }) => {
  let { img, name, price, quantity } = data;


  return (
    <Container>
      
        <ButtonX onClick={() => deleteFromCart(data, true)}>X</ButtonX>
        <Detalles>
        <Image src={img} alt="" />

        <Parra>{name}</Parra>
        </Detalles>
        
        <ButtonX onClick={() => deleteFromCart(data)}>
        -
        </ButtonX>
        <Cantidad>
        <Input
          type="text"
          value={quantity}
        />
        </Cantidad>
        <ButtonX onClick={() => addToCart(data)}>
         +
        </ButtonX>
       
       <PrecioXUnid>
          ${price * quantity}
        </PrecioXUnid>
    </Container>
  );
};
export default CartItem;
