import { useLocation, useNavigate } from 'react-router-dom';
import { addCartItem } from '../../apis/cart';
import styled from 'styled-components';

function Cart({ count }) {
  const productData = useLocation().state.data;
  const navigate = useNavigate();

  async function addCart() {
    const productId = await productData.product_id;
    await addCartItem(productId, count)
      .then(addResult => {
        if (addResult.status === 201) navigate('/cart');
      })
      .catch(error => alert(error.response.data.FAIL_message));
  }

  return <CartBtn onClick={addCart}>장바구니</CartBtn>;
}

export default Cart;

const CartBtn = styled.button`
  flex-grow: 1;
  margin-left: 14px;
  padding: 19px 0px;
  border-radius: 5px;
  border: none;
  color: white;
  background: #767676;
  :hover {
    cursor: pointer;
  }
`;
