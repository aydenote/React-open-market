import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseCartData } from '../../reducers/cart';
import plusSrc from '../../asset/icon-plus-line.svg';
import styled from 'styled-components';

function Increase({ cart }) {
  const dispatch = useDispatch();

  function clickPlus() {
    dispatch(increaseCartData(cart.cart_item_id));
  }
  return (
    <PlusButton onClick={clickPlus}>
      <img src={plusSrc} alt="상품 수량 증가" />
    </PlusButton>
  );
}

export default Increase;

const PlusButton = styled.button`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 50px;
  padding: 0;
  border: none;
  border-left: 1px solid #c4c4c4;
  border-radius: 0 5px 5px 0;
  outline: none;
  background-color: #ffffff;
`;
