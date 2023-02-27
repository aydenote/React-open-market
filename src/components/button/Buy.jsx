import React from 'react';
import styled from 'styled-components';

function Buy() {
  return <BuyBtn>바로 구매</BuyBtn>;
}

export default Buy;

const BuyBtn = styled.button`
  flex-grow: 2;
  padding: 19px 0px;
  border-radius: 5px;
  border: none;
  color: white;
  background: #21bf48;
`;
