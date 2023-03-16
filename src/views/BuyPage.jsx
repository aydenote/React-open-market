import Header from '../components/header/Header';
import BuyInfo from '../components/buy/BuyInfo';
import ShippingInfo from '../components/buy/ShippingInfo';
import PaymentMethod from '../components/buy/PaymentMethod';
import PaymentInfo from '../components/buy/PaymentInfo';
import styled from 'styled-components';

function BuyPage() {
  return (
    <>
      <Header />
      <MainContainer>
        <BuyInfo />
        <ShippingInfo />
        <PaymentContainer>
          <PaymentMethod />
          <PaymentInfo />
        </PaymentContainer>
      </MainContainer>
    </>
  );
}

export default BuyPage;

const MainContainer = styled.section`
  width: 1280px;
  margin: auto;
`;

const PaymentContainer = styled.section`
  display: flex;
  margin-top: 70px;
`;
