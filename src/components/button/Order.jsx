import { Link } from 'react-router-dom';
import styled from 'styled-components';

function Order() {
  return <OrderButton to="/buy">주문하기</OrderButton>;
}

export default Order;

const OrderButton = styled(Link)`
  margin-top: 25px;
  padding: 10px 35px;
  outline: none;
  border: none;
  border-radius: 5px;
  line-height: 20px;
  color: #ffffff;
  background: #21bf48;
  :hover {
    cursor: pointer;
  }
`;
