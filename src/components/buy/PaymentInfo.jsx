import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

function PaymentInfo() {
  const itemList = useLocation().state.itemList;
  const cartList = useLocation().state.cartList;
  const count = useLocation().state.count;

  function getProductCount() {
    let totalPrice = 0;
    for (const item of itemList) {
      cartList.map(cart => {
        if (cart.product_id === item.product_id) {
          totalPrice += cart.quantity * item.price + item.shipping_fee;
        }
      });
    }
    return totalPrice;
  }

  function getTotalPrice() {
    let totalPrice = 0;
    for (const item of itemList) {
      cartList.map(cart => {
        if (cart.product_id === item.product_id) {
          totalPrice += cart.quantity * item.price + item.shipping_fee;
        }
      });
    }
    return totalPrice;
  }

  function getShippingFee() {
    let totalShipping = 0;
    for (const item of itemList) {
      totalShipping += item.shipping_fee;
    }
    return totalShipping;
  }

  function clickInfoProvied(event) {
    const PaymentButton = document.querySelector('.payment');
    if (event.target.checked) PaymentButton.disabled = false;
    else PaymentButton.disabled = true;
  }

  return (
    <Payment>
      <Title>최종결제 정보</Title>
      <InfoContainer>
        <PriceBox>
          <p>-상품금액</p>
          <p>{count ? (itemList[0].price * count).toLocaleString() : getProductCount().toLocaleString()}</p>
        </PriceBox>
        <DiscountBox>
          <p>-할인금액</p>
          <p>0</p>
        </DiscountBox>
        <ShippingBox>
          <p>-배송비</p>
          <p>{count ? itemList[0].shipping_fee.toLocaleString() : getShippingFee().toLocaleString()}</p>
        </ShippingBox>
        <PaymentBox>
          <p>-결제금액</p>
          <p>
            {count
              ? (itemList[0].price * count + itemList[0].shipping_fee).toLocaleString()
              : getTotalPrice().toLocaleString()}
          </p>
        </PaymentBox>
        <PaymentProcess>
          <InfoProvideCheck onClick={clickInfoProvied} type="checkbox" />
          <InfoProvideText htmlFor="">주문 내용을 확인하였으며, 정보 제공 등에 동의합니다.</InfoProvideText>
          <PaymentButton className="payment" disabled>
            결제하기
          </PaymentButton>
        </PaymentProcess>
      </InfoContainer>
    </Payment>
  );
}

export default PaymentInfo;

const Payment = styled.section`
  width: 40%;
  margin-left: 40px;
`;

const Title = styled.h2`
  margin: 0;
  padding-bottom: 18px;
  border: none;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 24px;
  line-height: 30px;
`;

const InfoContainer = styled.section`
  width: 480px;
  border: 2px solid #21bf48;
  border-radius: 10px;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 420px;
  margin: auto;
  margin-top: 32px;
  p:last-child {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    ::after {
      content: ' 원';
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #767676;
    }
  }
`;

const DiscountBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 420px;
  margin: 15px auto;
  p:last-child {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    ::after {
      content: ' 원';
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #767676;
    }
  }
`;

const ShippingBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 420px;
  margin: auto;
  margin-bottom: 19px;
  p:last-child {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 18px;
    line-height: 23px;
    ::after {
      content: ' 원';
      font-family: 'Spoqa Han Sans Neo';
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      line-height: 18px;
      color: #767676;
    }
  }
`;

const PaymentBox = styled.div`
  display: flex;
  justify-content: space-between;
  width: 420px;
  margin: auto;
  padding-top: 24px;
  border-top: 2px solid #c4c4c4;
  p:last-child {
    font-family: 'Spoqa Han Sans Neo';
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 30px;
    color: #eb5757;
    ::after {
      content: '원';
    }
  }
`;

const PaymentProcess = styled.section`
  margin-top: 20px;
  padding: 30px 0 34px 30px;
  border-radius: 0 0 10px 10px;
  background-color: #f2f2f2;
`;

const InfoProvideCheck = styled.input``;
const InfoProvideText = styled.label``;
const PaymentButton = styled.button`
  display: block;
  margin: auto;
  margin-top: 30px;
  padding: 19px 65px;
  text-align: center;
  border: none;
  border-radius: 5px;
  font-weight: 700;
  font-size: 24px;
  line-height: 30px;
  color: #ffffff;
  cursor: pointer;
  :disabled {
    background: #c4c4c4;
  }
  :enabled {
    background: #21bf48;
  }
`;
