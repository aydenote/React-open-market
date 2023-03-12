import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getProductDetail } from '../../apis/products';
import plusSrc from '../../asset/icon-plus-line.svg';
import minusSrc from '../../asset/icon-minus-line.svg';
import styled from 'styled-components';

function CartTotalPrice() {
  const [price, setPrice] = useState([]);
  const cartList = useSelector(state => state.cart);

  useEffect(() => {
    getProductPrice();
  }, [cartList]);

  async function getProductPrice() {
    let sumPrice = 0;
    let sumShipping = 0;
    let totalPrice = 0;

    for (const cartItem of cartList) {
      const productData = await getProductDetail(cartItem.product_id);
      sumPrice += productData.data.price * cartItem.quantity;
      sumShipping += productData.data.shipping_fee;
      totalPrice = sumPrice + sumShipping;
    }
    setPrice([sumPrice, sumShipping, totalPrice]);
  }

  return (
    price.length === 3 && (
      <TotalInfoContainer>
        <div>
          <PriceText>총 상품 금액</PriceText>
          <PriceNumber>{price[0].toLocaleString()}</PriceNumber>
        </div>
        <Minus></Minus>
        <div>
          <SaleText>상품 할인</SaleText>
          <SaleNumber>0</SaleNumber>
        </div>
        <Plus></Plus>
        <div>
          <ShippingFeeText>배송비</ShippingFeeText>
          <ShippingFeeNumber>{price[1].toLocaleString()}</ShippingFeeNumber>
        </div>
        <div>
          <TotalPriceText>결제 예정 금액</TotalPriceText>
          <TotalPriceNumber>{price[2].toLocaleString()}</TotalPriceNumber>
        </div>
      </TotalInfoContainer>
    )
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
