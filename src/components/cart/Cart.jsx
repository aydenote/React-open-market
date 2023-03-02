import { useState } from 'react';
import CartNoneProduct from '../CartNoneProduct';
import CartProduct from '../CartProduct';
import GetCartInfo from '../GetCartInfo';
import styled from 'styled-components';

function Cart() {
  let [cartData, setCartData] = useState(false);

  return (
    <MainContainer>
      <Title>장바구니</Title>
      <ItemList>
        <li>
          <CategoryCircle></CategoryCircle>
        </li>
        <li>상품정보</li>
        <li>수량</li>
        <li>상품금액</li>
      </ItemList>
      {cartData ? <CartProduct cartData={cartData} /> : <GetCartInfo setCartData={setCartData} />}
      {cartData && cartData.count == false ? <CartNoneProduct /> : null}
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
`;

const CategoryCircle = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  border: 2px solid #21bf48;
`;
