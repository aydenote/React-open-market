import React from 'react';
import { useSelector } from 'react-redux';
import SaleUpdateButton from '../button/ItemUpdate';
import SaleDeleteButton from '../button/SaleDelete';
import styled from 'styled-components';

function SaleItem(props) {
  const saleItem = useSelector(state => state.seller);

  return saleItem.map(item => (
    <ItemContainer key={item.product_id} data-id={item.product_id}>
      <div>
        <ItemImg src={item.image} alt="상품" />
        <ItemInfoText>
          <ItemName>{item.product_name}</ItemName>
          <ItemStock>{`재고 : ${item.stock}개`}</ItemStock>
        </ItemInfoText>
      </div>
      <ItemPrice>{item.price.toLocaleString()}원</ItemPrice>
      <SaleUpdateButton />
      <SaleDeleteButton />
    </ItemContainer>
  ));
}

export default SaleItem;

const ItemContainer = styled.section`
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1fr;
  padding: 16px 0px;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #c4c4c4;
`;

const ItemImg = styled.img`
  float: left;
  width: 70px;
  height: 70px;
  margin-left: 30px;
  border-radius: 50%;
`;

const ItemInfoText = styled.div`
  display: flex;
  margin-top: 12px;
  flex-direction: column;
  justify-content: center;
`;

const ItemName = styled.p`
  display: inline-block;
  margin-left: 30px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;

const ItemStock = styled.p`
  display: inline-block;
  margin-left: 30px;
  margin-top: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  color: #767676;
`;

const ItemPrice = styled.p`
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
`;
