import styled from 'styled-components';

function Order() {
  return <OrderButton>주문하기</OrderButton>;
}

export default Order;

const OrderButton = styled.button`
  margin-top: 25px;
  padding: 10px 35px;
  outline: none;
  border: none;
  border-radius: 5px;
  text-align: center;
  font-family: 'Spoqa Han Sans Neo';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: #ffffff;
  background: #21bf48;
  :hover {
    cursor: pointer;
  }
`;
