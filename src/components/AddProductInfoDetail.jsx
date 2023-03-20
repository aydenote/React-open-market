import { useState } from 'react';
import DirectShipping from './button/DirectShipping';
import ParcelShipping from './button/ParcelShipping';
import styled from 'styled-components';

function AddProductInfoDetail() {
  let [productNameLength, setProductNameLength] = useState('0');
  let [shippingType, setShippingType] = useState('parcel');

  // 현재 상품명 길이 / 최대 상품명 길이 표시
  function changeProductName(event) {
    setProductNameLength(event.target.value.length);
  }

  // 숫자 콤마 추가
  function changePrice(event) {
    let value = event.target.value.replace(/[^0-9]/g, '');
    if (value === '' || value === '0') {
      return (event.target.value = '');
    }
    event.target.value = Number(value).toLocaleString();
  }

  return (
    <ProductInfo>
      <form action="">
        <ProductNameConatainer>
          <InfoTitle>상품명</InfoTitle>
          <ProductNameInput type="text" onChange={changeProductName} maxLength="20" required />
          <ProductNameLength>{productNameLength}/20</ProductNameLength>
        </ProductNameConatainer>

        <ProductPriceContainer>
          <InfoTitle>판매가</InfoTitle>
          <PriceBox className="price">
            <PriceInput type="text" onChange={changePrice} maxLength="10" />
          </PriceBox>
        </ProductPriceContainer>

        <ProductShipping>
          <InfoTitle>배송방법</InfoTitle>
          <ParcelShipping shippingType={shippingType} setShippingType={setShippingType} />
          <DirectShipping shippingType={shippingType} setShippingType={setShippingType} />
          <InfoTitle>기본 배송비</InfoTitle>
          <PriceBox className="price">
            <PriceInput type="text" onChange={changePrice} maxLength="6" />
          </PriceBox>
        </ProductShipping>
        <ProductStockContainer>
          <InfoTitle>재고</InfoTitle>
          <PriceBox className="stock">
            <PriceInput type="text" onChange={changePrice} maxLength="10" />
          </PriceBox>
        </ProductStockContainer>
      </form>
    </ProductInfo>
  );
}
export default AddProductInfoDetail;

const ProductInfo = styled.section`
  margin-left: 40px;
`;

const ProductNameConatainer = styled.section`
  position: relative;
`;

const InfoTitle = styled.p`
  margin-bottom: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

const ProductNameInput = styled.input`
  width: 826px;
  padding: 17px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  :focus {
    outline: none;
  }
`;

const ProductNameLength = styled.p`
  position: absolute;
  top: 50px;
  right: 17px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  color: #c4c4c4;
`;

const ProductPriceContainer = styled.section`
  margin-top: 16px;
`;

const PriceBox = styled.div`
  width: 221px;
  height: 54px;
  position: relative;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  overflow: hidden;
  &.price::after {
    display: inline-block;
    position: absolute;
    right: 0;
    content: '원';
    padding: 18px 19px;
    border-right: none;
    background: #c4c4c4;
    color: #ffffff;
  }
  &.stock::after {
    display: inline-block;
    position: absolute;
    right: 0;
    content: '개';
    padding: 18px 19px;
    border-right: none;
    background: #c4c4c4;
    color: #ffffff;
  }
`;

const PriceInput = styled.input`
  margin: 16px 0px 0px 16px;
  border: none;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  :focus {
    outline: none;
  }
`;

const ProductShipping = styled.section`
  margin-top: 16px;
`;

const ProductStockContainer = styled.section`
  margin-top: 16px;
`;
