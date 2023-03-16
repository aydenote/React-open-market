import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { getProductDetail } from '../../apis/products';
import styled from 'styled-components';

function Order({ product }) {
  const cartList = useSelector(state => state.cart);

  function getProductData() {
    const productList = [];
    for (const cart of cartList) {
      getProductDetail(cart.product_id).then(product => productList.push(product.data));
    }
    return productList;
  }

  return (
    <OrderButton to="/buy" state={{ itemList: product ? [product] : getProductData(), cartList: cartList }}>
      주문하기
    </OrderButton>
  );
}

export default Order;

const OrderButton = styled(Link)`
  margin-top: 25px;
  padding: 10px 35px;
  outline: none;
  border: none;
  border-radius: 5px;
  line-height: 20px;
  color: #ffffff;
  background: #21bf48;
  :hover {
    cursor: pointer;
  }
`;
