import { useSelector } from 'react-redux';
import plusSrc from '../../asset/icon-plus-line.svg';
import minusSrc from '../../asset/icon-minus-line.svg';
import styled from 'styled-components';

function CartTotalPrice() {
  const cartList = useSelector(state => state.cart);
  const productList = useSelector(state => state.product);

  function getProductPrice() {
    let totalPrice = 0;
    for (let i = 0; i < productList.length; i++) {
      totalPrice += cartList[i].quantity * productList[i].price;
    }
    return totalPrice;
  }

  function getShippingPrice() {
    let totalPrice = 0;
    for (let i = 0; i < productList.length; i++) {
      totalPrice += productList[i].shipping_fee;
    }
    return totalPrice;
  }

  function getTotalPrice() {
    let totalPrice = getProductPrice() + getShippingPrice();
    return totalPrice;
  }
  return (
    <TotalInfoContainer>
      <div>
        <PriceText>총 상품 금액</PriceText>
        <PriceNumber>{getProductPrice().toLocaleString()}</PriceNumber>
      </div>
      <Minus></Minus>
      <div>
        <SaleText>상품 할인</SaleText>
        <SaleNumber>0</SaleNumber>
      </div>
      <Plus></Plus>
      <div>
        <ShippingFeeText>배송비</ShippingFeeText>
        <ShippingFeeNumber>{getShippingPrice().toLocaleString()}</ShippingFeeNumber>
      </div>
      <div>
        <TotalPriceText>결제 예정 금액</TotalPriceText>
        <TotalPriceNumber>{getTotalPrice().toLocaleString()}</TotalPriceNumber>
      </div>
    </TotalInfoContainer>
  );
}
export default CartTotalPrice;

const TotalInfoContainer = styled.section`
  width: 1280px;
  display: flex;
  margin-top: 80px;
  padding: 46px 91px 42px 112px;
  justify-content: space-around;
  background: #f2f2f2;
  border-radius: 10px;
`;

const PriceText = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

const PriceNumber = styled.p`
  margin-top: 12px;
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  ::after {
    content: '원';
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;

const Minus = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: url(${minusSrc}) no-repeat center;
  background-color: #ffffff;
`;

const SaleText = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

const SaleNumber = styled.p`
  margin-top: 12px;
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  ::after {
    content: '원';
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;

const Plus = styled.div`
  width: 34px;
  height: 34px;
  border-radius: 50%;
  background: url(${plusSrc}) no-repeat center;
  background-color: #ffffff;
`;

const ShippingFeeText = styled.p`
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  text-align: center;
`;

const ShippingFeeNumber = styled.p`
  margin-top: 12px;
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  ::after {
    content: '원';
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
  }
`;

const TotalPriceText = styled.p`
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

const TotalPriceNumber = styled.p`
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 45px;
  color: #eb5757;
  ::after {
    content: '원';
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 23px;
  }
`;
