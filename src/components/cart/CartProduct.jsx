import { useSelector } from 'react-redux';
import CartItemInfo from './CartItemInfo';
import CartTotalPrice from './CartTotalPrice';

function CartProduct() {
  const cartData = useSelector(state => state.cart);

  return cartData.map(cartItem => <CartItemInfo key={cartItem.cart_item_id} cartItem={cartItem} />);
}

export default CartProduct;
