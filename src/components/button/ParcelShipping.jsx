import React from 'react';
import styled from 'styled-components';

function ParcelShipping({ shippingType, setShippingType }) {
  function clickShippingType() {
    setShippingType('parcel');
  }

  return shippingType === 'parcel' ? (
    <ParcelClicked disabled>택배, 소포, 등기</ParcelClicked>
  ) : (
    <ParcelNonClicked onClick={clickShippingType}>택배, 소포, 등기</ParcelNonClicked>
  );
}

export default ParcelShipping;

const ParcelClicked = styled.button`
  width: 220px;
  margin-bottom: 16px;
  padding: 17px 0px;
  border: none;
  border-radius: 5px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  background-color: #21bf48;
  cursor: pointer;
`;

const ParcelNonClicked = styled.button`
  width: 220px;
  margin-bottom: 16px;
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
