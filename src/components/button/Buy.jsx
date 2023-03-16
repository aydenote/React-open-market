import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

function Buy({ count }) {
  const data = useLocation().state.data;

  return (
    <BuyBtn to="/buy" state={{ itemList: [data], count: count }}>
      바로 구매
    </BuyBtn>
  );
}

export default Buy;

const BuyBtn = styled(Link)`
  flex-grow: 2;
  padding: 19px 0px;
  border-radius: 5px;
  border: none;
  text-align: center;
  color: white;
  background: #21bf48;
  :hover {
    cursor: pointer;
  }
`;
