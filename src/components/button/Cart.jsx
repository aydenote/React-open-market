import React from 'react';
import styled from 'styled-components';

function Cart() {
  return <CartBtn>장바구니</CartBtn>;
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
