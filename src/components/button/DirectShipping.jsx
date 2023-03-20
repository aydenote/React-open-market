import React from 'react';
import styled from 'styled-components';

function DirectShipping({ shippingType, setShippingType }) {
  function clickShippingType() {
    setShippingType('direct');
  }
  return shippingType === 'direct' ? (
    <DirectClicked disabled>직접배송(화물배달)</DirectClicked>
  ) : (
    <DirectNonClicked onClick={clickShippingType}>직접배송(화물배달)</DirectNonClicked>
  );
}

export default DirectShipping;

const DirectClicked = styled.button`
  width: 220px;
  margin: 0 0 16px 10px;
  padding: 17px 0px;
  border: none;
  border-radius: 5px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  background: #21bf48;
  cursor: pointer;
`;

const DirectNonClicked = styled.button`
  width: 220px;
  margin: 0 0 16px 10px;
  padding: 17px 0px;
  border: none;
  border-radius: 5px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
  cursor: pointer;
`;
