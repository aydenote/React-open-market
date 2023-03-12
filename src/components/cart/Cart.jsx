import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCartData } from '../../reducers/cart';
import CartTotalPrice from './CartTotalPrice';
import CartNoneProduct from './CartNoneProduct';
import CartProduct from './CartProduct';
import { getCartList } from '../../apis/cart';
import styled from 'styled-components';

function Cart() {
  const dispatch = useDispatch();
  const cartList = useSelector(state => state.cart);

  useEffect(() => {
    getCartList().then(cartData => {
      dispatch(setCartData(cartData.data.results));
    });
  }, []);

  return (
    <MainContainer>
      <Title>장바구니</Title>
      <ItemList>
        <li>
          <CategoryCircle />
        </li>
        <li>상품정보</li>
        <li>수량</li>
        <li>상품금액</li>
      </ItemList>
      {cartList.length ? (
        <>
          <CartProduct />
          <CartTotalPrice />
        </>
      ) : (
        <CartNoneProduct />
      )}
    </MainContainer>
  );
}

export default Cart;

const MainContainer = styled.section`
  width: 80%;
  margin: auto;
`;

const Title = styled.p`
  margin: 52px 0px;
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 44px;
`;

const ItemList = styled.ul`
  display: flex;
  width: 1280px;
  margin-bottom: 35px;
  padding: 18px 0 18px 30px;
  background: #f2f2f2;
  border-radius: 10px;
  li {
    flex-grow: 1;
  }
`;

const CategoryCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #21bf48;
`;
