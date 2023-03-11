import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import BuyButton from './button/Buy';
import CartButton from './button/Cart';
import Decrease from './button/DetailDecrease';
import Increase from './button/DetailIncrease';
import styled from 'styled-components';

function ProductInfo() {
  const data = useLocation().state.data;
  const [count, setCount] = useState(1);

  return (
    <MainContainer>
      <SubContainer>
        <TopContainer>
          <ProductImgContainer>
            <img src={data.image} alt="상품 이미지" />
          </ProductImgContainer>
          <ProductInfoContainer>
            <StoreName>{data.store_name}</StoreName>
            <ProductName>{data.product_name}</ProductName>
            <ProductPrice>{data.price.toLocaleString()}</ProductPrice>
            <Shipping>
              {data.shipping_method === 'PARCEL' ? '소포배송' : '택배배송'} /{' '}
              {data.shipping_fee === 0 ? '무료배송' : '유료배송'}
            </Shipping>
            <CountContainer>
              <Decrease count={count} setCount={setCount} />
              <ProductCount>{count}</ProductCount>
              <Increase count={count} setCount={setCount} />
            </CountContainer>
            <PriceContainer>
              <Total>총 상품 금액</Total>
              <TotalContainer>
                <TotalCount>총 수량 {count}개</TotalCount>
                <TotalPrice>{(count * data.price).toLocaleString()}</TotalPrice>
              </TotalContainer>
            </PriceContainer>
            <ButtonContainer>
              <BuyButton />
              <CartButton />
            </ButtonContainer>
          </ProductInfoContainer>
        </TopContainer>
        <BottomContainer>
          <ul>
            <li className="clicked">버튼</li>
            <li>리뷰</li>
            <li>Q&A</li>
            <li>반품/교환정보</li>
          </ul>
        </BottomContainer>
      </SubContainer>
    </MainContainer>
  );
}

export default ProductInfo;

const MainContainer = styled.section`
  width: 100%;
`;

const SubContainer = styled.div`
  max-width: 80%;
  margin: auto;
`;

const TopContainer = styled.section`
  display: flex;
  margin-top: 80px;
`;

const ProductImgContainer = styled.section`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 600px;
  img {
    width: 600px;
    height: 600px;
    object-fit: fill;
  }
`;

const ProductInfoContainer = styled.section`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 600px;
  margin-left: 50px;
`;

const StoreName = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #767676;
`;

const ProductName = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 45px;
  margin: 16px 0px 20px 0px;
`;
const ProductPrice = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  margin-bottom: 138px;
  ::after {
    content: '원';
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  }
`;
const Shipping = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #767676;
`;

const CountContainer = styled.div`
  display: flex;
  width: 152px;
  height: 50px;
  margin: 30px 0px;
  border: 1px solid #c4c4c4;
  border-radius: 5px;
  background: #ffffff;
`;

const ProductCount = styled.p`
  flex-grow: 1;
  flex-shrink: 0;
  flex-basis: 50px;
  text-align: center;
  line-height: 50px;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Total = styled.p`
  display: flex;
  align-items: end;
  margin-right: 50px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 23px;
`;

const TotalContainer = styled.div`
  display: flex;
  align-items: end;
`;

const TotalCount = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 23px;
  color: #767676;
  ::after {
    content: 'ㅣ';
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #c4c4c4;
  }
`;

const TotalPrice = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  color: #21bf48;
  ::after {
    content: '원';
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
    color: #21bf48;
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  margin-top: 27px;
`;

const BottomContainer = styled.section`
  margin: 140px 0 359px 0;
  li {
    display: inline-block;
    width: 25%;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border-bottom: 6px solid #e0e0e0;
  }
  .clicked {
    border-bottom: 6px solid #21bf48;
  }
`;
